export async function POST(request) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return Response.json({ error: 'URL is required' }, { status: 400 });
    }

    const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
    
    if (!ANTHROPIC_API_KEY) {
      return Response.json({ error: 'API key not configured' }, { status: 500 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4000,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: [{ 
          role: "user", 
          content: `Search for information about this Polymarket prediction market: ${url}

I need you to find:
1. The main question or title of this market
2. The current leading outcome and its YES price/probability (as decimal 0.XX)
3. Total trading volume
4. Any relevant recent news about this topic

IMPORTANT: This could be a binary Yes/No market OR a multi-outcome market (like sports with multiple teams). For multi-outcome markets, focus on the leading outcome.

After searching, respond with ONLY this JSON (no other text):
{"market":{"question":"[main market question or title]","yesPrice":[leading probability as decimal like 0.23],"noPrice":[1 minus yesPrice],"volume":[total volume as number],"volume24hr":[24h volume or 0],"leadingOutcome":"[name of leading outcome if multi-market]"},"news":[{"title":"...","source":"...","description":"...","sentiment":"positive|negative|neutral"}]}` 
        }]
      })
    });

    const data = await response.json();
    
    // Handle rate limit errors
    if (data.type === 'exceeded_limit' || data.type === 'rate_limit_error') {
      return Response.json({ error: 'API rate limit reached. Please try again in a few minutes.' }, { status: 429 });
    }
    
    // Handle other API errors
    if (data.error) {
      return Response.json({ error: data.error.message || 'API error occurred' }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return Response.json({ error: 'Failed to analyze market' }, { status: 500 });
  }
}
