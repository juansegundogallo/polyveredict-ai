# PolyVerdict AI

AI-Powered Prediction Market Analysis for Polymarket.

## Features

- 🤖 AI-powered market analysis
- 📊 Delta Leaderboard - Top mispriced markets
- 📰 News sentiment analysis
- 🎯 Buy/Hold recommendations with confidence scores
- 📧 Newsletter signup with exit intent
- 🔐 Social login (Google, X, Discord, Apple)
- 📱 Fully responsive design

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Deployment

This project is configured for Vercel deployment:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## Configuration

### Ad Networks
- **Coinzilla**: Add your zone ID in `src/app/page.jsx`
- **AdSense**: Add your client ID in `src/app/layout.js`

### OAuth
Configure OAuth credentials in `src/app/page.jsx`:
- Google Client ID
- Twitter/X Client ID
- Discord Client ID
- Apple Client ID

## License

MIT
