import './globals.css'

export const metadata = {
  title: 'PolyVerdict AI - AI-Powered Prediction Market Analysis',
  description: 'Get AI-powered analysis of Polymarket prediction markets. Find mispricings, track sentiment, and make smarter bets with our advanced trading signals.',
  keywords: 'polymarket, prediction markets, crypto, trading, AI analysis, arbitrage, betting',
  openGraph: {
    title: 'PolyVerdict AI - AI-Powered Prediction Market Analysis',
    description: 'Find market mispricings with AI. Get daily arbitrage alerts and trading signals.',
    url: 'https://polyverdict.ai',
    siteName: 'PolyVerdict AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PolyVerdict AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolyVerdict AI - AI-Powered Prediction Market Analysis',
    description: 'Find market mispricings with AI. Get daily arbitrage alerts and trading signals.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Coinzilla Ad Script - Uncomment when you have credentials */}
        {/* <script src="https://coinzilla.com/lib/display.js" async></script> */}
        
        {/* Google AdSense - Uncomment and add your client ID */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
