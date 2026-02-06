export async function GET() {
  try {
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
          content: `Search for the top 20 most active/trending prediction markets on Polymarket right now. Return ONLY a JSON array with this format (no other text):
[{"question":"market question","slug":"url-slug","yesPrice":0.XX,"volume":NUMBER}]` 
        }]
      })
    });

    const data = await response.json();
    
    if (data.type === 'exceeded_limit' || data.type === 'rate_limit_error') {
      return Response.json({ error: 'Rate limit reached' }, { status: 429 });
    }
    
    if (data.error) {
      return Response.json({ error: data.error.message || 'API error' }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('Leaderboard API error:', error);
    return Response.json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
  }
}
