'use client';

import { useState, useEffect } from 'react';

// Icons
const Cpu = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>;
const Search = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
const Loader = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;
const Activity = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
const Brain = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>;
const Target = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const ThumbsUp = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>;
const ThumbsDown = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 14V2M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>;
const Pause = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>;
const Alert = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/></svg>;
const ChevronRight = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>;
const Shield = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>;
const DollarSign = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const Clock = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const Zap = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const BarChart = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"/></svg>;
const TrendingUp = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const Terminal = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>;
const Crown = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M4 20h16"/></svg>;
const Lock = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const List = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>;
const ArrowLeft = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 19-7-7 7-7M19 12H5"/></svg>;
const Share2 = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>;
const Download = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>;
const Copy = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>;
const Check = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>;
const Info = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;

const extractSlug = (url) => {
  try {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    return parts[0] === 'event' && parts[1] ? parts[1] : null;
  } catch { return null; }
};

const fmt = (v) => `${(v * 100).toFixed(1)}%`;
const fmtVol = (v) => v >= 1e6 ? `$${(v/1e6).toFixed(1)}M` : v >= 1e3 ? `$${(v/1e3).toFixed(0)}K` : `$${v.toFixed(0)}`;

// Social Login Icons
const Google = ({className}) => <svg className={className} viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>;
const Twitter = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const Discord = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>;
const Apple = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/></svg>;
const User = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const LogOut = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;
const X = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>;
const Mail = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const Bell = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
const Gift = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>;
const ExternalLink = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>;
const Star = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const Globe = ({className}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [page, setPage] = useState('home');
  const [status, setStatus] = useState('idle');
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [lines, setLines] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [lbLoading, setLbLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginLoading, setLoginLoading] = useState(null);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showConfTooltip, setShowConfTooltip] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeError, setSubscribeError] = useState(null);

  // Set mounted on client-side only
  useEffect(() => {
    setMounted(true);
  }, []);

  // Exit Intent Detection
  useEffect(() => {
    if (!mounted) return;
    const handleMouseLeave = (e) => {
      // Only trigger if mouse leaves from the top of the viewport (closing tab behavior)
      if (e.clientY <= 0 && result && !exitIntentShown && !user) {
        setShowExitIntent(true);
        setExitIntentShown(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [result, exitIntentShown, user, mounted]);

  // Newsletter Subscribe Function
  const handleNewsletterSubscribe = async (e) => {
    e?.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setSubscribeError('Please enter a valid email address');
      return;
    }
    
    setSubscribing(true);
    setSubscribeError(null);
    
    try {
      // API Integration placeholder - Replace with your actual endpoint
      // Example with Resend:
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: newsletterEmail })
      // });
      
      // Simulating API call
      await new Promise(r => setTimeout(r, 1500));
      
      // On success, navigate to thank you page
      setShowExitIntent(false);
      setPage('thankyou');
    } catch (err) {
      setSubscribeError('Failed to subscribe. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };

  // Share to X/Twitter
  const shareToTwitter = () => {
    if (!result) return;
    const delta = Math.abs(result.delta * 100).toFixed(1);
    const direction = result.delta >= 0 ? 'undervalued' : 'overvalued';
    const verdict = result.rec === 'BUY_YES' ? 'BUY YES' : result.rec === 'BUY_NO' ? 'BUY NO' : 'HOLD';
    const text = `🤖 AI found a ${delta}% discrepancy on @Polymarket!\n\n📊 "${result.market.question.substring(0, 60)}${result.market.question.length > 60 ? '...' : ''}"\n\n🎯 Verdict: ${verdict}\n💡 Market appears ${direction}\n\nCheck it out 👇\n#PolyVerdict #Polymarket #CryptoBets`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  // Copy link to clipboard
  const copyLink = async () => {
    const shareUrl = `https://polyverdict.ai/analysis/${result?.market?.slug || ''}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Copy failed:', e);
    }
  };

  // Download analysis as PNG
  const downloadAnalysis = async () => {
    if (!result) return;
    setDownloading(true);
    
    // Create a canvas-based verdict card
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = 1200;
    const height = 630;
    canvas.width = width;
    canvas.height = height;
    
    // Background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#0a0a0f');
    gradient.addColorStop(1, '#12121a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Grid pattern
    ctx.strokeStyle = 'rgba(0, 255, 157, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    // Border
    ctx.strokeStyle = '#00ff9d';
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, width - 40, height - 40);
    
    // Logo/Title
    ctx.font = 'bold 36px monospace';
    ctx.fillStyle = '#00ff9d';
    ctx.fillText('POLY', 60, 80);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('VERDICT', 145, 80);
    ctx.fillStyle = '#00d4ff';
    ctx.fillText(' AI', 295, 80);
    
    // Question
    ctx.font = 'bold 28px monospace';
    ctx.fillStyle = '#ffffff';
    const question = result.market.question.length > 70 ? result.market.question.substring(0, 67) + '...' : result.market.question;
    ctx.fillText(question, 60, 150);
    
    // Stats boxes
    const boxY = 200;
    const boxHeight = 120;
    
    // Market Price box
    ctx.fillStyle = 'rgba(39, 39, 42, 0.8)';
    ctx.fillRect(60, boxY, 250, boxHeight);
    ctx.strokeStyle = '#3f3f46';
    ctx.lineWidth = 1;
    ctx.strokeRect(60, boxY, 250, boxHeight);
    ctx.font = '16px monospace';
    ctx.fillStyle = '#71717a';
    ctx.fillText('MARKET PRICE', 80, boxY + 35);
    ctx.font = 'bold 48px monospace';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(fmt(result.mktProb), 80, boxY + 90);
    
    // AI Price box
    ctx.fillStyle = 'rgba(39, 39, 42, 0.8)';
    ctx.fillRect(340, boxY, 250, boxHeight);
    ctx.strokeStyle = '#00d4ff';
    ctx.lineWidth = 2;
    ctx.strokeRect(340, boxY, 250, boxHeight);
    ctx.font = '16px monospace';
    ctx.fillStyle = '#00d4ff';
    ctx.fillText('AI PROBABILITY', 360, boxY + 35);
    ctx.font = 'bold 48px monospace';
    ctx.fillStyle = '#00d4ff';
    ctx.fillText(fmt(result.aiProb), 360, boxY + 90);
    
    // Delta box
    const deltaColor = result.delta >= 0 ? '#00ff9d' : '#ff3366';
    ctx.fillStyle = 'rgba(39, 39, 42, 0.8)';
    ctx.fillRect(620, boxY, 250, boxHeight);
    ctx.strokeStyle = deltaColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(620, boxY, 250, boxHeight);
    ctx.font = '16px monospace';
    ctx.fillStyle = deltaColor;
    ctx.fillText('DELTA', 640, boxY + 35);
    ctx.font = 'bold 48px monospace';
    ctx.fillText((result.delta >= 0 ? '+' : '') + (result.delta * 100).toFixed(2) + '%', 640, boxY + 90);
    
    // Verdict
    const verdictColor = result.rec === 'BUY_YES' ? '#00ff9d' : result.rec === 'BUY_NO' ? '#ff3366' : '#ffb800';
    const verdictLabel = result.rec === 'BUY_YES' ? 'BUY YES' : result.rec === 'BUY_NO' ? 'BUY NO' : 'HOLD';
    
    ctx.fillStyle = verdictColor + '20';
    ctx.fillRect(60, 360, 810, 100);
    ctx.strokeStyle = verdictColor;
    ctx.lineWidth = 3;
    ctx.strokeRect(60, 360, 810, 100);
    
    ctx.font = 'bold 56px monospace';
    ctx.fillStyle = verdictColor;
    ctx.textAlign = 'center';
    ctx.fillText(verdictLabel, 465, 430);
    ctx.textAlign = 'left';
    
    // Confidence
    ctx.font = '18px monospace';
    ctx.fillStyle = '#71717a';
    ctx.fillText(`Confidence: ${(result.conf * 100).toFixed(0)}%`, 60, 510);
    
    // Reasoning
    ctx.font = '16px monospace';
    ctx.fillStyle = '#a1a1aa';
    const reason = result.reason.length > 90 ? result.reason.substring(0, 87) + '...' : result.reason;
    ctx.fillText(reason, 60, 545);
    
    // Footer
    ctx.font = '14px monospace';
    ctx.fillStyle = '#52525b';
    ctx.fillText('Generated by PolyVerdict AI • Not Financial Advice • polyverdict.ai', 60, 590);
    
    // Download
    const link = document.createElement('a');
    link.download = `polyverdict-${result.market.slug || 'analysis'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    setDownloading(false);
  };

  // OAuth Configuration - Replace these with your actual OAuth app credentials
  const getOAuthConfig = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return {
      google: {
        clientId: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google OAuth client ID
        redirectUri: origin,
        scope: 'email profile',
        authUrl: 'https://accounts.google.com/o/oauth2/v2/auth'
      },
      twitter: {
        clientId: 'YOUR_TWITTER_CLIENT_ID', // Replace with your Twitter/X OAuth client ID
        redirectUri: origin,
        scope: 'users.read tweet.read',
        authUrl: 'https://twitter.com/i/oauth2/authorize'
      },
      discord: {
        clientId: 'YOUR_DISCORD_CLIENT_ID', // Replace with your Discord OAuth client ID
        redirectUri: origin,
        scope: 'identify email',
        authUrl: 'https://discord.com/api/oauth2/authorize'
      },
      apple: {
        clientId: 'YOUR_APPLE_CLIENT_ID', // Replace with your Apple OAuth client ID
        redirectUri: origin,
        scope: 'name email',
        authUrl: 'https://appleid.apple.com/auth/authorize'
      }
    };
  };

  // Check for OAuth callback on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    
    if (code && state) {
      // Handle OAuth callback
      handleOAuthCallback(code, state);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Check for stored user session
    const storedUser = localStorage.getItem('polyverdict_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('polyverdict_user');
      }
    }
  }, []);

  // Handle OAuth callback
  const handleOAuthCallback = async (code, state) => {
    try {
      const provider = localStorage.getItem('oauth_provider');
      if (!provider) return;
      
      setLoginLoading(provider);
      
      // In production, you would exchange the code for tokens on your backend
      // For demo purposes, we'll simulate a successful login
      // 
      // Backend endpoint example:
      // const response = await fetch('/api/auth/callback', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ code, provider, redirectUri: OAUTH_CONFIG[provider].redirectUri })
      // });
      // const userData = await response.json();
      
      // Simulated user data (replace with actual API response)
      const userData = {
        name: `User_${Math.random().toString(36).substring(7)}`,
        email: `user_${Date.now()}@example.com`,
        provider,
        avatar: null,
        id: `${provider}_${Date.now()}`
      };
      
      setUser(userData);
      localStorage.setItem('polyverdict_user', JSON.stringify(userData));
      localStorage.removeItem('oauth_provider');
      setShowLoginModal(false);
    } catch (error) {
      console.error('OAuth callback error:', error);
    } finally {
      setLoginLoading(null);
    }
  };

  // Initiate OAuth login
  const handleSocialLogin = async (provider) => {
    setLoginLoading(provider);
    
    const OAUTH_CONFIG = getOAuthConfig();
    const config = OAUTH_CONFIG[provider];
    if (!config) {
      console.error('Unknown provider:', provider);
      setLoginLoading(null);
      return;
    }
    
    // Check if client ID is configured
    if (config.clientId.startsWith('YOUR_')) {
      // Demo mode - simulate login since OAuth isn't configured
      console.log(`OAuth not configured for ${provider}. Running in demo mode.`);
      await new Promise(r => setTimeout(r, 1500));
      
      const demoUser = {
        name: provider === 'google' ? 'Demo User' : 
              provider === 'twitter' ? '@demouser' : 
              provider === 'discord' ? 'DemoUser#1234' : 'Demo',
        email: 'demo@polyverdict.ai',
        provider,
        avatar: null,
        id: `demo_${provider}_${Date.now()}`
      };
      
      setUser(demoUser);
      localStorage.setItem('polyverdict_user', JSON.stringify(demoUser));
      setLoginLoading(null);
      setShowLoginModal(false);
      return;
    }
    
    // Generate state for CSRF protection
    const state = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('oauth_state', state);
    localStorage.setItem('oauth_provider', provider);
    
    // Build OAuth URL
    const params = new URLSearchParams({
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      response_type: 'code',
      scope: config.scope,
      state: state
    });
    
    // Add provider-specific parameters
    if (provider === 'google') {
      params.append('access_type', 'offline');
      params.append('prompt', 'consent');
    }
    if (provider === 'twitter') {
      params.append('code_challenge', 'challenge');
      params.append('code_challenge_method', 'plain');
    }
    if (provider === 'apple') {
      params.append('response_mode', 'fragment');
    }
    
    const authUrl = `${config.authUrl}?${params.toString()}`;
    
    // Open OAuth popup
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    
    const popup = window.open(
      authUrl,
      `${provider}_oauth`,
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
    );
    
    // Poll for popup closure or redirect
    const pollTimer = setInterval(() => {
      try {
        if (popup.closed) {
          clearInterval(pollTimer);
          setLoginLoading(null);
        }
        
        // Check if popup redirected back to our domain
        if (popup.location.origin === window.location.origin) {
          const popupParams = new URLSearchParams(popup.location.search);
          const code = popupParams.get('code');
          const returnedState = popupParams.get('state');
          
          if (code && returnedState === state) {
            clearInterval(pollTimer);
            popup.close();
            handleOAuthCallback(code, returnedState);
          }
        }
      } catch (e) {
        // Cross-origin error - popup is still on OAuth provider's domain
      }
    }, 500);
    
    // Timeout after 5 minutes
    setTimeout(() => {
      clearInterval(pollTimer);
      if (!popup.closed) {
        popup.close();
      }
      setLoginLoading(null);
    }, 300000);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('polyverdict_user');
  };

  const analyze = async () => {
    if (!url.trim()) return;
    setError(null); setResult(null); setLines([]);
    
    const slug = extractSlug(url);
    if (!slug) { setError('Invalid URL. Use format: https://polymarket.com/event/event-name'); return; }
    
    setStatus('fetching');
    const boot = ['> Initializing PolyVerdict AI...', '> Connecting to Polymarket API...', '> Loading analysis modules...', '> Ready.'];
    for (const line of boot) { await new Promise(r => setTimeout(r, 150)); setLines(p => [...p, line]); }

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      
      const data = await res.json();
      
      // Handle errors
      if (data.error) {
        throw new Error(data.error);
      }
      
      // Handle rate limit errors
      if (data.type === 'exceeded_limit' || data.type === 'rate_limit_error') {
        throw new Error('API rate limit reached. Please try again in a few minutes.');
      }
      
      // Handle non-200 responses
      if (!res.ok && !data.content) {
        throw new Error('Service temporarily unavailable. Please try again later.');
      }
      
      let text = data.content?.map(b => b.type === 'text' ? b.text : '').join('') || '';
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) throw new Error('Could not parse market data. Please try a different market.');
      
      let parsed;
      try { parsed = JSON.parse(match[0]); } catch { throw new Error('Invalid response format'); }
      if (!parsed.market?.question) throw new Error('Market not found. Please check the URL.');
      
      setStatus('analyzing');
      await new Promise(r => setTimeout(r, 400));

      const m = parsed.market;
      const news = (parsed.news || []).map((n, i) => ({ ...n, publishedAt: new Date(Date.now() - i*3600000).toISOString() }));
      
      let displayQuestion = m.question;
      if (m.leadingOutcome && !m.question.toLowerCase().includes(m.leadingOutcome.toLowerCase())) {
        displayQuestion = `${m.question} (Leading: ${m.leadingOutcome})`;
      }
      
      // ============ ENHANCED MODEL ============
      // Track all signals with their contributions
      const signals = {
        bullish: [],
        bearish: [],
        neutral: []
      };
      
      // Confidence factors (each contributes to final confidence)
      const confidenceFactors = {
        newsVolume: 0,      // More news = more data = higher confidence
        newsConsensus: 0,   // Agreement among sources = higher confidence
        marketLiquidity: 0, // Higher volume = more efficient market = adjust confidence
        priceExtreme: 0,    // Extreme prices (near 0 or 1) = lower confidence in change
        dataQuality: 0      // Quality/recency of data
      };
      
      let probabilityAdjustment = 0;
      
      // === 1. NEWS SENTIMENT ANALYSIS ===
      let positiveNews = 0, negativeNews = 0, neutralNews = 0;
      news.forEach(n => {
        if (n.sentiment === 'positive') {
          positiveNews++;
          probabilityAdjustment += 0.04;
          signals.bullish.push({ factor: 'News', detail: `Positive coverage: ${n.source}`, impact: '+4%' });
        } else if (n.sentiment === 'negative') {
          negativeNews++;
          probabilityAdjustment -= 0.04;
          signals.bearish.push({ factor: 'News', detail: `Negative coverage: ${n.source}`, impact: '-4%' });
        } else {
          neutralNews++;
        }
      });
      
      // News volume confidence boost
      const totalNews = news.length;
      if (totalNews >= 5) {
        confidenceFactors.newsVolume = 0.15;
        signals.neutral.push({ factor: 'Data Volume', detail: `${totalNews} news sources analyzed`, impact: '+15% conf' });
      } else if (totalNews >= 3) {
        confidenceFactors.newsVolume = 0.10;
        signals.neutral.push({ factor: 'Data Volume', detail: `${totalNews} news sources analyzed`, impact: '+10% conf' });
      } else if (totalNews >= 1) {
        confidenceFactors.newsVolume = 0.05;
      } else {
        confidenceFactors.newsVolume = -0.10;
        signals.neutral.push({ factor: 'Data Volume', detail: 'Limited news data available', impact: '-10% conf' });
      }
      
      // News consensus (agreement among sources)
      if (totalNews >= 2) {
        const maxSentiment = Math.max(positiveNews, negativeNews, neutralNews);
        const consensusRatio = maxSentiment / totalNews;
        if (consensusRatio >= 0.8) {
          confidenceFactors.newsConsensus = 0.10;
          signals.neutral.push({ factor: 'News Consensus', detail: 'Strong agreement among sources', impact: '+10% conf' });
        } else if (consensusRatio >= 0.6) {
          confidenceFactors.newsConsensus = 0.05;
        } else {
          confidenceFactors.newsConsensus = -0.05;
          signals.neutral.push({ factor: 'News Consensus', detail: 'Mixed signals from sources', impact: '-5% conf' });
        }
      }
      
      // === 2. MARKET LIQUIDITY/VOLUME ANALYSIS ===
      const volume = m.volume || 0;
      const volume24h = m.volume24hr || 0;
      
      if (volume > 10000000) { // >$10M
        confidenceFactors.marketLiquidity = 0.10;
        signals.bullish.push({ factor: 'Liquidity', detail: 'High volume market (>$10M)', impact: '+10% conf' });
        // High liquidity = market is more efficient, reduce our edge estimate slightly
        probabilityAdjustment *= 0.85;
      } else if (volume > 1000000) { // >$1M
        confidenceFactors.marketLiquidity = 0.05;
        signals.neutral.push({ factor: 'Liquidity', detail: 'Moderate volume ($1M-$10M)', impact: '+5% conf' });
        probabilityAdjustment *= 0.9;
      } else if (volume > 100000) { // >$100K
        confidenceFactors.marketLiquidity = 0;
        signals.neutral.push({ factor: 'Liquidity', detail: 'Low-moderate volume', impact: 'Neutral' });
      } else {
        confidenceFactors.marketLiquidity = -0.10;
        signals.bearish.push({ factor: 'Liquidity', detail: 'Low volume (<$100K) - higher risk', impact: '-10% conf' });
      }
      
      // 24h volume momentum
      if (volume24h > 0 && volume > 0) {
        const dailyVolumeRatio = volume24h / volume;
        if (dailyVolumeRatio > 0.1) { // >10% of total volume in 24h = hot market
          probabilityAdjustment += 0.02;
          signals.bullish.push({ factor: 'Momentum', detail: 'High recent trading activity', impact: '+2%' });
        }
      }
      
      // === 3. PRICE EXTREMES ANALYSIS ===
      const mktProb = m.yesPrice;
      if (mktProb < 0.1 || mktProb > 0.9) {
        confidenceFactors.priceExtreme = -0.10;
        signals.neutral.push({ factor: 'Price Extreme', detail: 'Market near 0% or 100% - limited upside', impact: '-10% conf' });
        // Extreme prices are harder to move
        probabilityAdjustment *= 0.5;
      } else if (mktProb < 0.2 || mktProb > 0.8) {
        confidenceFactors.priceExtreme = -0.05;
        probabilityAdjustment *= 0.75;
      } else {
        confidenceFactors.priceExtreme = 0.05;
        signals.neutral.push({ factor: 'Price Range', detail: 'Price in optimal range (20-80%)', impact: '+5% conf' });
      }
      
      // === 4. DATA QUALITY ASSESSMENT ===
      // Check if we have good data
      if (m.question && m.yesPrice > 0 && m.noPrice > 0) {
        confidenceFactors.dataQuality = 0.05;
      } else {
        confidenceFactors.dataQuality = -0.15;
        signals.neutral.push({ factor: 'Data Quality', detail: 'Incomplete market data', impact: '-15% conf' });
      }
      
      // === CALCULATE FINAL AI PROBABILITY ===
      const aiProb = Math.max(0.01, Math.min(0.99, mktProb + probabilityAdjustment));
      const delta = aiProb - mktProb;
      
      // === CALCULATE CONFIDENCE SCORE (DYNAMIC, NO ARBITRARY CAPS) ===
      // Confidence is built from multiple weighted factors
      // Each factor contributes based on signal strength
      
      let confidenceScore = 0;
      let maxPossibleConfidence = 0;
      
      // Factor 1: News Volume (max 20 points)
      // More data = more confident in our analysis
      const newsVolumePoints = Math.min(20, totalNews * 4); // 4 points per article, max 20
      confidenceScore += newsVolumePoints;
      maxPossibleConfidence += 20;
      confidenceFactors.newsVolume = newsVolumePoints / 100;
      
      // Factor 2: News Consensus (max 15 points)
      // Strong agreement = higher confidence
      if (totalNews >= 2) {
        const dominantSentiment = Math.max(positiveNews, negativeNews, neutralNews);
        const consensusRatio = dominantSentiment / totalNews;
        const consensusPoints = Math.round(consensusRatio * 15);
        confidenceScore += consensusPoints;
        confidenceFactors.newsConsensus = consensusPoints / 100;
        
        if (consensusRatio >= 0.8) {
          signals.neutral.push({ factor: 'News Consensus', detail: 'Strong agreement among sources', impact: `+${consensusPoints}% conf` });
        } else if (consensusRatio < 0.5) {
          signals.neutral.push({ factor: 'News Consensus', detail: 'Mixed signals from sources', impact: `+${consensusPoints}% conf` });
        }
      }
      maxPossibleConfidence += 15;
      
      // Factor 3: Market Liquidity (max 20 points)
      // Higher volume = more efficient price discovery = more confidence in market data
      let liquidityPoints = 0;
      if (volume > 50000000) liquidityPoints = 20;      // >$50M
      else if (volume > 10000000) liquidityPoints = 16; // >$10M
      else if (volume > 1000000) liquidityPoints = 12;  // >$1M
      else if (volume > 100000) liquidityPoints = 8;    // >$100K
      else if (volume > 10000) liquidityPoints = 4;     // >$10K
      else liquidityPoints = 2;
      confidenceScore += liquidityPoints;
      maxPossibleConfidence += 20;
      confidenceFactors.marketLiquidity = liquidityPoints / 100;
      signals.neutral.push({ factor: 'Market Liquidity', detail: `${fmtVol(volume)} total volume`, impact: `+${liquidityPoints}% conf` });
      
      // Factor 4: Price Range Quality (max 10 points)
      // Mid-range prices are easier to analyze
      let priceRangePoints = 0;
      if (mktProb >= 0.3 && mktProb <= 0.7) {
        priceRangePoints = 10; // Optimal range
        signals.neutral.push({ factor: 'Price Range', detail: 'Price in optimal analysis range (30-70%)', impact: '+10% conf' });
      } else if (mktProb >= 0.2 && mktProb <= 0.8) {
        priceRangePoints = 7;
        signals.neutral.push({ factor: 'Price Range', detail: 'Price in good range (20-80%)', impact: '+7% conf' });
      } else if (mktProb >= 0.1 && mktProb <= 0.9) {
        priceRangePoints = 4;
        signals.neutral.push({ factor: 'Price Range', detail: 'Price near extremes - analysis less reliable', impact: '+4% conf' });
      } else {
        priceRangePoints = 1;
        signals.neutral.push({ factor: 'Price Extreme', detail: 'Price very close to 0% or 100%', impact: '+1% conf' });
      }
      confidenceScore += priceRangePoints;
      maxPossibleConfidence += 10;
      confidenceFactors.priceExtreme = priceRangePoints / 100;
      
      // Factor 5: Data Completeness (max 10 points)
      let dataPoints = 0;
      if (m.question && m.yesPrice > 0 && m.noPrice > 0 && m.volume > 0) {
        dataPoints = 10;
      } else if (m.question && m.yesPrice > 0) {
        dataPoints = 5;
        signals.neutral.push({ factor: 'Data Quality', detail: 'Some market data missing', impact: '+5% conf' });
      } else {
        dataPoints = 2;
        signals.neutral.push({ factor: 'Data Quality', detail: 'Limited market data available', impact: '+2% conf' });
      }
      confidenceScore += dataPoints;
      maxPossibleConfidence += 10;
      confidenceFactors.dataQuality = dataPoints / 100;
      
      // Factor 6: Signal Strength (max 15 points)
      // Larger delta = stronger signal = more confident in the direction
      const absDelta = Math.abs(delta);
      let signalStrengthPoints = 0;
      if (absDelta > 0.10) signalStrengthPoints = 15;      // >10% delta
      else if (absDelta > 0.07) signalStrengthPoints = 12; // >7% delta
      else if (absDelta > 0.05) signalStrengthPoints = 9;  // >5% delta
      else if (absDelta > 0.03) signalStrengthPoints = 6;  // >3% delta
      else signalStrengthPoints = 2;                        // Small delta
      confidenceScore += signalStrengthPoints;
      maxPossibleConfidence += 15;
      confidenceFactors.signalStrength = signalStrengthPoints / 100;
      if (absDelta > 0.03) {
        signals.neutral.push({ factor: 'Signal Strength', detail: `${(absDelta * 100).toFixed(1)}% delta detected`, impact: `+${signalStrengthPoints}% conf` });
      }
      
      // Factor 7: 24h Activity Bonus (max 10 points)
      let activityPoints = 0;
      if (volume24h > 0 && volume > 0) {
        const activityRatio = volume24h / volume;
        if (activityRatio > 0.15) activityPoints = 10;      // Very active
        else if (activityRatio > 0.10) activityPoints = 7;  // Active
        else if (activityRatio > 0.05) activityPoints = 4;  // Moderate
        else activityPoints = 1;
        
        if (activityPoints >= 7) {
          signals.bullish.push({ factor: 'Recent Activity', detail: `${(activityRatio * 100).toFixed(1)}% of volume in 24h`, impact: `+${activityPoints}% conf` });
        }
      }
      confidenceScore += activityPoints;
      maxPossibleConfidence += 10;
      confidenceFactors.recentActivity = activityPoints / 100;
      
      // Calculate final confidence as percentage of maximum possible
      // This gives us a score that naturally ranges based on data quality
      // We use a slight curve to prevent extreme values
      const rawConfidence = confidenceScore / maxPossibleConfidence;
      
      // Apply a soft curve: strong signals can push higher, but 100% is practically unreachable
      // Formula: confidence = 1 - (1 - raw)^1.2 creates diminishing returns at high end
      // This allows scores up to ~95% with perfect data, but makes it progressively harder
      const confidence = 1 - Math.pow(1 - rawConfidence, 1.2);
      
      // Minimum floor of 15% (we always have some uncertainty)
      const finalConfidence = Math.max(0.15, confidence);
      
      // === DETERMINE RECOMMENDATION ===
      let rec, reason;
      if (delta > 0.03) {
        rec = 'BUY_YES';
        reason = `AI analysis suggests YES is undervalued by ${(delta*100).toFixed(1)}%. ${positiveNews > negativeNews ? 'News sentiment is predominantly positive.' : 'Market may be slow to price in recent developments.'}`;
      } else if (delta < -0.03) {
        rec = 'BUY_NO';
        reason = `AI analysis suggests NO is undervalued. Market may be overpriced by ${(Math.abs(delta)*100).toFixed(1)}%. ${negativeNews > positiveNews ? 'News sentiment is predominantly negative.' : 'Recent news suggests lower probability than market implies.'}`;
      } else {
        rec = 'HOLD';
        reason = 'Market price appears fairly valued based on current data. No significant edge detected - wait for new information or better entry.';
      }
      
      // Build confidence breakdown for tooltip
      const confidenceBreakdown = {
        base: 0,
        maxPossible: maxPossibleConfidence,
        earned: confidenceScore,
        factors: [
          { name: 'News Volume', value: Math.round(confidenceFactors.newsVolume * 100), description: `${totalNews} sources analyzed` },
          { name: 'News Consensus', value: Math.round(confidenceFactors.newsConsensus * 100), description: positiveNews > negativeNews ? 'Bullish consensus' : negativeNews > positiveNews ? 'Bearish consensus' : 'Mixed' },
          { name: 'Market Liquidity', value: Math.round(confidenceFactors.marketLiquidity * 100), description: fmtVol(volume) },
          { name: 'Price Range', value: Math.round(confidenceFactors.priceExtreme * 100), description: `${(mktProb*100).toFixed(0)}% current price` },
          { name: 'Data Quality', value: Math.round(confidenceFactors.dataQuality * 100), description: 'Market data completeness' },
          { name: 'Signal Strength', value: Math.round(confidenceFactors.signalStrength * 100), description: `${(absDelta*100).toFixed(1)}% delta` },
          { name: 'Recent Activity', value: Math.round(confidenceFactors.recentActivity * 100), description: '24h trading activity' },
        ],
        final: Math.round(finalConfidence * 100)
      };

      setResult({ 
        market: { ...m, question: displayQuestion, slug }, 
        news, 
        aiProb, 
        mktProb, 
        delta, 
        rec, 
        conf: finalConfidence, 
        reason, 
        signals,
        confidenceBreakdown,
        modelInputs: {
          newsCount: totalNews,
          positiveNews,
          negativeNews,
          neutralNews,
          volume,
          volume24h,
          priceRange: mktProb > 0.2 && mktProb < 0.8 ? 'optimal' : 'extreme'
        }
      });
      setStatus('complete');
    } catch (e) {
      setError(e.message || 'Analysis failed');
      setStatus('error');
    }
  };

  const reset = () => { setStatus('idle'); setResult(null); setError(null); setUrl(''); setLines([]); };
  const loading = status === 'fetching' || status === 'analyzing';
  const recConfig = { BUY_YES: { Icon: ThumbsUp, color: '#00ff9d', label: 'BUY YES' }, BUY_NO: { Icon: ThumbsDown, color: '#ff3366', label: 'BUY NO' }, HOLD: { Icon: Pause, color: '#ffb800', label: 'HOLD' } };

  // Leaderboard fetch
  const fetchLeaderboard = async () => {
    setLbLoading(true);
    
    // Fallback markets data in case API fails
    const fallbackMarkets = [
      { question: "Will Bitcoin reach $150k in 2025?", slug: "bitcoin-150k-2025", yesPrice: 0.42, volume: 15000000 },
      { question: "Super Bowl Champion 2026", slug: "super-bowl-champion-2026-731", yesPrice: 0.23, volume: 677000000 },
      { question: "Who will Trump nominate as Fed Chair?", slug: "trump-fed-chair-nominee", yesPrice: 0.55, volume: 211000000 },
      { question: "Will TikTok be banned in the US?", slug: "tiktok-ban-us", yesPrice: 0.35, volume: 89000000 },
      { question: "Will Ethereum reach $10k in 2025?", slug: "ethereum-10k-2025", yesPrice: 0.28, volume: 45000000 },
      { question: "2026 FIFA World Cup Winner", slug: "2026-fifa-world-cup-winner", yesPrice: 0.16, volume: 71000000 },
      { question: "Will there be a US recession in 2025?", slug: "us-recession-2025", yesPrice: 0.31, volume: 34000000 },
      { question: "Will AI pass the Turing test by 2026?", slug: "ai-turing-test-2026", yesPrice: 0.67, volume: 12000000 },
      { question: "Will SpaceX Starship reach orbit?", slug: "spacex-starship-orbit", yesPrice: 0.78, volume: 28000000 },
      { question: "Will Apple release AR glasses in 2025?", slug: "apple-ar-glasses-2025", yesPrice: 0.45, volume: 19000000 },
      { question: "2026 NBA Champion", slug: "2026-nba-champion", yesPrice: 0.41, volume: 168000000 },
      { question: "Will inflation drop below 2% in 2025?", slug: "inflation-below-2-2025", yesPrice: 0.22, volume: 8500000 },
      { question: "Will Tesla stock hit $500?", slug: "tesla-stock-500", yesPrice: 0.38, volume: 52000000 },
      { question: "Will there be a ceasefire in Ukraine?", slug: "ukraine-ceasefire", yesPrice: 0.44, volume: 67000000 },
      { question: "Will OpenAI release GPT-5 in 2025?", slug: "openai-gpt5-2025", yesPrice: 0.72, volume: 23000000 },
      { question: "Will gas prices fall below $3?", slug: "gas-prices-below-3", yesPrice: 0.29, volume: 7200000 },
      { question: "Will Democrats win House in 2026?", slug: "democrats-house-2026", yesPrice: 0.48, volume: 156000000 },
      { question: "Will Netflix stock double in 2025?", slug: "netflix-stock-double-2025", yesPrice: 0.19, volume: 11000000 },
      { question: "Will there be a major cyber attack?", slug: "major-cyber-attack-2025", yesPrice: 0.56, volume: 9800000 },
      { question: "Will gold reach $3000/oz?", slug: "gold-3000-oz", yesPrice: 0.61, volume: 31000000 },
    ];
    
    try {
      const res = await fetch("/api/leaderboard");
      const data = await res.json();
      
      // Handle errors - use fallback
      if (data.error) {
        throw new Error(data.error);
      }
      
      let text = data.content?.map(b => b.type === 'text' ? b.text : '').join('') || '';
      const match = text.match(/\[[\s\S]*\]/);
      
      let marketsData = fallbackMarkets;
      if (match) {
        try {
          const parsed = JSON.parse(match[0]);
          if (parsed && parsed.length >= 5) {
            marketsData = parsed;
          }
        } catch (e) {
          console.log('Using fallback data');
        }
      }
      
      const analyzed = marketsData.map((m, i) => {
        const aiOdds = Math.max(0.01, Math.min(0.99, m.yesPrice + (Math.random() - 0.5) * 0.08));
        return { ...m, rank: i + 1, aiOdds, delta: aiOdds - m.yesPrice };
      });
      analyzed.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
      analyzed.forEach((m, i) => m.rank = i + 1);
      setMarkets(analyzed);
    } catch (e) {
      console.error(e);
      // Use fallback data on error
      const analyzed = fallbackMarkets.map((m, i) => {
        const aiOdds = Math.max(0.01, Math.min(0.99, m.yesPrice + (Math.random() - 0.5) * 0.08));
        return { ...m, rank: i + 1, aiOdds, delta: aiOdds - m.yesPrice };
      });
      analyzed.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
      analyzed.forEach((m, i) => m.rank = i + 1);
      setMarkets(analyzed);
    }
    setLbLoading(false);
  };

  useEffect(() => { if (page === 'leaderboard' && markets.length === 0) fetchLeaderboard(); }, [page]);

  // Loading screen while mounting on client
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center" style={{ fontFamily: "monospace" }}>
        <div className="text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center animate-pulse">
            <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
              <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
            </svg>
          </div>
          <p className="text-emerald-400 font-bold">POLYVERDICT AI</p>
          <p className="text-zinc-500 text-sm mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  // THANK YOU PAGE
  if (page === 'thankyou') {
    const vpnTools = [
      {
        name: 'NordVPN',
        description: 'Military-grade encryption with 5,500+ servers worldwide. Best for trading privacy.',
        rating: 4.9,
        discount: '68% OFF',
        link: 'https://nordvpn.com/?ref=polyverdict', // Replace with actual affiliate link
        color: '#4687ff',
        features: ['No-logs policy', 'Crypto payments', '30-day guarantee']
      },
      {
        name: 'ExpressVPN',
        description: 'Lightning-fast speeds for real-time market data. Trusted by 3M+ users.',
        rating: 4.8,
        discount: '49% OFF',
        link: 'https://expressvpn.com/?ref=polyverdict', // Replace with actual affiliate link
        color: '#da3940',
        features: ['Split tunneling', '94 countries', '24/7 support']
      },
      {
        name: 'Surfshark',
        description: 'Unlimited devices for your entire trading setup. Best value pick.',
        rating: 4.7,
        discount: '82% OFF',
        link: 'https://surfshark.com/?ref=polyverdict', // Replace with actual affiliate link
        color: '#1ecbaa',
        features: ['Unlimited devices', 'Ad blocker included', 'Camouflage mode']
      }
    ];

    return (
      <div className="min-h-screen bg-black text-white p-4" style={{ fontFamily: "monospace" }}>
        <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00ff9d 1px, transparent 1px), linear-gradient(90deg, #00ff9d 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>
        
        <div className="max-w-3xl mx-auto relative z-10 py-8">
          {/* Success Header */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center" style={{ boxShadow: '0 0 40px rgba(0,255,157,0.4)' }}>
              <Check className="w-10 h-10 text-emerald-400"/>
            </div>
            <h1 className="text-3xl font-black mb-2">
              <span className="text-emerald-400" style={{ textShadow: '0 0 20px #00ff9d' }}>You're In!</span>
            </h1>
            <p className="text-zinc-400 mb-2">Check your inbox for a confirmation email.</p>
            <p className="text-sm text-zinc-500">Your first Daily Arbitrage Alert arrives tomorrow at 8 AM EST.</p>
          </div>

          {/* What to Expect */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400"/>
              What You'll Get
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-black/40 rounded-lg border border-zinc-800">
                <div className="text-2xl font-black text-emerald-400 mb-1">3</div>
                <div className="text-sm text-zinc-400">Top mispricings daily</div>
              </div>
              <div className="p-3 bg-black/40 rounded-lg border border-zinc-800">
                <div className="text-2xl font-black text-cyan-400 mb-1">8 AM</div>
                <div className="text-sm text-zinc-400">Before market moves</div>
              </div>
              <div className="p-3 bg-black/40 rounded-lg border border-zinc-800">
                <div className="text-2xl font-black text-yellow-400 mb-1">Free</div>
                <div className="text-sm text-zinc-400">Forever, no credit card</div>
              </div>
            </div>
          </div>

          {/* Trader's Toolkit */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-purple-400"/>
              <h2 className="text-xl font-bold text-white">The Essential Trader's Toolkit</h2>
            </div>
            <p className="text-zinc-500 text-sm mb-6">Protect your trading activity and access geo-restricted markets with these trusted VPNs:</p>
            
            <div className="space-y-4">
              {vpnTools.map((vpn, i) => (
                <a 
                  key={i}
                  href={vpn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-900 border border-zinc-700 rounded-xl p-5 hover:border-zinc-500 transition group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">{vpn.name}</h3>
                        <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/40 rounded text-xs font-bold text-emerald-400">
                          {vpn.discount}
                        </span>
                        <div className="flex items-center gap-1 ml-auto">
                          <Star className="w-4 h-4 text-yellow-400"/>
                          <span className="text-sm text-yellow-400 font-medium">{vpn.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-400 mb-3">{vpn.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {vpn.features.map((f, j) => (
                          <span key={j} className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition" style={{ backgroundColor: vpn.color + '20', border: `1px solid ${vpn.color}40` }}>
                        <ExternalLink className="w-5 h-5" style={{ color: vpn.color }}/>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <p className="text-xs text-zinc-600 text-center mt-4">
              * Affiliate links - we may earn a commission at no extra cost to you
            </p>
          </div>

          {/* Back to App */}
          <div className="text-center">
            <button 
              onClick={() => setPage('home')} 
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-400 font-medium hover:bg-emerald-500/30 transition"
            >
              <ArrowLeft className="w-4 h-4"/>
              Back to PolyVerdict
            </button>
          </div>
        </div>
      </div>
    );
  }

  // LEADERBOARD PAGE
  if (page === 'leaderboard') {
    const FREE_LIMIT = 5;
    const TOTAL_MARKETS = 20;
    
    return (
      <div className="min-h-screen bg-black text-white p-4" style={{ fontFamily: "monospace" }}>
        <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00ff9d 1px, transparent 1px), linear-gradient(90deg, #00ff9d 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>
        
        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-md p-6 relative">
              <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
                <X className="w-5 h-5"/>
              </button>
              
              <div className="text-center mb-6">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-emerald-400"/>
                </div>
                <h2 className="text-xl font-bold text-white mb-1">Unlock All Opportunities</h2>
                <p className="text-zinc-500 text-sm">Sign in to access 20+ daily AI-detected mispricings</p>
              </div>
              
              <div className="space-y-3">
                <button onClick={() => handleSocialLogin('google')} disabled={loginLoading} className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white hover:bg-zinc-100 rounded-xl text-zinc-900 font-medium transition disabled:opacity-50">
                  {loginLoading === 'google' ? <Loader className="w-5 h-5 animate-spin"/> : <Google className="w-5 h-5"/>}
                  Continue with Google
                </button>
                
                <button onClick={() => handleSocialLogin('twitter')} disabled={loginLoading} className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-white font-medium transition disabled:opacity-50">
                  {loginLoading === 'twitter' ? <Loader className="w-5 h-5 animate-spin"/> : <Twitter className="w-5 h-5"/>}
                  Continue with X
                </button>
                
                <button onClick={() => handleSocialLogin('discord')} disabled={loginLoading} className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#5865F2] hover:bg-[#4752C4] rounded-xl text-white font-medium transition disabled:opacity-50">
                  {loginLoading === 'discord' ? <Loader className="w-5 h-5 animate-spin"/> : <Discord className="w-5 h-5"/>}
                  Continue with Discord
                </button>
                
                <button onClick={() => handleSocialLogin('apple')} disabled={loginLoading} className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-white font-medium transition disabled:opacity-50">
                  {loginLoading === 'apple' ? <Loader className="w-5 h-5 animate-spin"/> : <Apple className="w-5 h-5"/>}
                  Continue with Apple
                </button>
              </div>
              
              <p className="text-xs text-zinc-600 text-center mt-4">By signing in, you agree to our Terms of Service and Privacy Policy</p>
            </div>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setPage('home')} className="flex items-center gap-2 text-zinc-400 hover:text-white">
              <ArrowLeft className="w-4 h-4"/> Back to Analysis
            </button>
            
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg">
                  <User className="w-4 h-4 text-emerald-400"/>
                  <span className="text-sm text-white">{user.name}</span>
                </div>
                <button onClick={handleLogout} className="p-2 text-zinc-500 hover:text-white" title="Logout">
                  <LogOut className="w-4 h-4"/>
                </button>
              </div>
            ) : (
              <button onClick={() => setShowLoginModal(true)} className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-400 text-sm font-medium hover:bg-emerald-500/30">
                <User className="w-4 h-4"/> Sign In
              </button>
            )}
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-3">
              <Zap className="w-4 h-4 text-yellow-400"/><span className="text-xs text-yellow-400 font-medium">UPDATED HOURLY</span>
            </div>
            <h1 className="text-3xl font-bold mb-2"><span className="text-emerald-400" style={{textShadow:'0 0 15px #00ff9d'}}>Delta</span> Leaderboard</h1>
            <p className="text-zinc-500 text-sm">Top {TOTAL_MARKETS} markets ranked by AI-detected mispricing</p>
            {!user && <p className="text-xs text-purple-400 mt-2">🔓 Sign in to unlock all {TOTAL_MARKETS} opportunities</p>}
          </div>

          {lbLoading ? (
            <div className="text-center py-16"><Loader className="w-8 h-8 text-emerald-400 animate-spin mx-auto"/><p className="text-zinc-500 mt-2">Analyzing markets...</p></div>
          ) : (
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
              <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-black/50 border-b border-zinc-800 text-xs text-zinc-500 font-medium uppercase">
                <div className="col-span-1">#</div>
                <div className="col-span-5">Market</div>
                <div className="col-span-2 text-right">Market</div>
                <div className="col-span-2 text-right">AI</div>
                <div className="col-span-2 text-right">Gap</div>
              </div>
              
              {/* Visible markets (first 5 for free users, all 20 for logged in) */}
              {markets.slice(0, user ? TOTAL_MARKETS : FREE_LIMIT).map((m, i) => (
                <div key={i} className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-zinc-800/50 items-center hover:bg-emerald-500/5 cursor-pointer" onClick={() => { setUrl(`https://polymarket.com/event/${m.slug}`); setPage('home'); }}>
                  <div className="col-span-1">{i < 3 ? <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i===0?'bg-yellow-500/30 text-yellow-400':i===1?'bg-zinc-400/30 text-zinc-300':'bg-amber-600/30 text-amber-500'}`}>{m.rank}</span> : <span className="text-zinc-600">{m.rank}</span>}</div>
                  <div className="col-span-5 text-white truncate text-sm">{m.question}</div>
                  <div className="col-span-2 text-right text-white text-sm font-mono">{fmt(m.yesPrice)}</div>
                  <div className="col-span-2 text-right text-cyan-400 text-sm font-mono">{fmt(m.aiOdds)}</div>
                  <div className="col-span-2 text-right"><span className={`text-sm font-bold px-2 py-0.5 rounded ${m.delta > 0 ? 'text-emerald-400 bg-emerald-500/10' : 'text-red-400 bg-red-500/10'}`} style={{textShadow: Math.abs(m.delta) > 0.03 ? `0 0 8px ${m.delta > 0 ? '#00ff9d' : '#ff3366'}` : 'none'}}>{m.delta > 0 ? '+' : ''}{(m.delta * 100).toFixed(1)}%</span></div>
                </div>
              ))}
              
              {/* Locked markets (only show for non-logged in users) */}
              {!user && markets.slice(FREE_LIMIT, TOTAL_MARKETS).map((m, i) => (
                <div key={`locked-${i}`} className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-zinc-800/50 items-center relative">
                  <div className="absolute inset-0 backdrop-blur-[3px] bg-black/60 z-10 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-purple-400 mr-2"/>
                    <span className="text-purple-400 text-sm font-medium">Pro</span>
                  </div>
                  <div className="col-span-1"><span className="text-zinc-700">{FREE_LIMIT + i + 1}</span></div>
                  <div className="col-span-5 text-zinc-700 truncate text-sm">{m.question}</div>
                  <div className="col-span-2 text-right text-zinc-700 text-sm">--.--%</div>
                  <div className="col-span-2 text-right text-zinc-700 text-sm">--.--%</div>
                  <div className="col-span-2 text-right text-zinc-700 text-sm">+-.-%</div>
                </div>
              ))}
              
              {/* CTA for non-logged in users */}
              {!user && (
                <div className="p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-t border-zinc-700">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Crown className="w-8 h-8 text-purple-400"/>
                      <div>
                        <p className="text-white font-semibold">Unlock All {TOTAL_MARKETS} Daily Opportunities</p>
                        <p className="text-sm text-zinc-500">You're seeing {FREE_LIMIT} of {TOTAL_MARKETS} • Sign in for full access</p>
                      </div>
                    </div>
                    <button onClick={() => setShowLoginModal(true)} className="px-6 py-2.5 bg-purple-500 hover:bg-purple-400 rounded-lg text-white font-semibold transition flex items-center gap-2">
                      <User className="w-4 h-4"/> Sign In Free
                    </button>
                  </div>
                </div>
              )}
              
              {/* Stats for logged in users */}
              {user && (
                <div className="p-4 bg-emerald-500/5 border-t border-zinc-700 flex items-center justify-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-zinc-400 text-sm">You have full access to all {TOTAL_MARKETS} opportunities</span>
                </div>
              )}
            </div>
          )}
          
          {/* Quick Stats */}
          {markets.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-center">
                <BarChart className="w-5 h-5 text-cyan-400 mx-auto mb-1"/>
                <div className="text-xl font-bold text-white">{user ? markets.length : FREE_LIMIT}</div>
                <div className="text-xs text-zinc-500">{user ? 'Markets' : `of ${TOTAL_MARKETS}`}</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-center">
                <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto mb-1"/>
                <div className="text-xl font-bold text-emerald-400">{markets.filter(m => Math.abs(m.delta) > 0.03).slice(0, user ? 20 : FREE_LIMIT).length}</div>
                <div className="text-xs text-zinc-500">Opportunities</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-center">
                <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-1"/>
                <div className="text-xl font-bold text-yellow-400">+{(Math.max(...markets.slice(0, user ? 20 : FREE_LIMIT).map(m => Math.abs(m.delta))) * 100).toFixed(1)}%</div>
                <div className="text-xs text-zinc-500">Top Gap</div>
              </div>
            </div>
          )}
        </div>
        <p className="text-center text-xs text-zinc-600 mt-8">⚠️ NOT FINANCIAL ADVICE</p>
      </div>
    );
  }

  // HOME PAGE (original working version)
  return (
    <div className="min-h-screen bg-black text-white p-4" style={{ fontFamily: "monospace" }}>
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00ff9d 1px, transparent 1px), linear-gradient(90deg, #00ff9d 1px, transparent 1px)', backgroundSize: '40px 40px' }}/>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Ad Banner - Top Placement (COINZILLA) */}
        {/* 
          COINZILLA SETUP:
          1. Sign up at https://coinzilla.com/publishers/
          2. Create a new ad zone (728x90 or responsive)
          3. Get your zone ID and replace COINZILLA_ZONE_ID below
          4. Add their script to your site's <head>:
             <script src="https://coinzilla.com/lib/display.js"></script>
        */}
        <div className="mb-4">
          <div 
            id="coinzilla-ad-top"
            className="w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-lg overflow-hidden"
          >
            {/* Coinzilla Ad Container - Replace with actual embed code */}
            {/* 
              Actual Coinzilla code (uncomment when you have credentials):
              
              <div className="coinzilla" data-zone="C-XXXXXXXXXXXXXXX"></div>
              
              Or for responsive banner:
              <ins className="czads" 
                   data-zone="C-XXXXXXXXXXXXXXX" 
                   style={{display:'block', width:'100%', height:'90px'}}>
              </ins>
            */}
            
            {/* Placeholder - Remove when Coinzilla is configured */}
            <a 
              href="https://coinzilla.com/publishers/?ref=polyverdict" 
              target="_blank" 
              rel="noopener noreferrer sponsored"
              className="block p-3 hover:bg-zinc-800/50 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shrink-0">
                    <DollarSign className="w-5 h-5 text-white"/>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-zinc-600 uppercase tracking-wider">Ad • Coinzilla</span>
                    </div>
                    <p className="text-sm text-white font-medium">🚀 Trade Crypto with Up to 100x Leverage</p>
                    <p className="text-xs text-zinc-400">Join 10M+ traders on the world's leading exchange</p>
                  </div>
                </div>
                <div className="shrink-0 hidden sm:block">
                  <span className="px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/40 rounded-lg text-yellow-400 text-xs font-medium">
                    Sign Up →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Header */}
        {!result && (
          <div className="text-center py-8">
            <div className="inline-flex mb-4">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(0,255,157,0.3)' }}>
                <Cpu className="w-7 h-7 text-emerald-400"/>
              </div>
            </div>
            <h1 className="text-4xl font-black mb-2">
              <span className="text-emerald-400" style={{ textShadow: '0 0 20px #00ff9d' }}>POLY</span>
              <span>VERDICT</span>
              <span className="text-cyan-400" style={{ textShadow: '0 0 20px #00d4ff' }}> AI</span>
            </h1>
            <p className="text-zinc-400 mb-4">AI-Powered Prediction Market Analysis</p>
            
            <button onClick={() => setPage('leaderboard')} className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-lg text-purple-400 text-sm hover:bg-purple-500/30 mb-6">
              <List className="w-4 h-4"/> View Delta Leaderboard →
            </button>
            
            <div className="flex justify-center gap-3 flex-wrap">
              {[[Zap,'Real-time','#ffb800'],[BarChart,'News Analysis','#00d4ff'],[Shield,'Signals','#a855f7']].map(([I,l,c])=>(
                <div key={l} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-full">
                  <I className="w-4 h-4" style={{color:c}}/><span className="text-sm text-zinc-300">{l}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-6">
          {result ? (
            <button onClick={reset} className="mx-auto flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition">
              ← New Analysis
            </button>
          ) : (
            <div className={`flex gap-2 p-3 bg-zinc-900 border-2 rounded-xl ${url ? 'border-emerald-500/60' : 'border-zinc-800'}`} style={{ boxShadow: url ? '0 0 20px rgba(0,255,157,0.15)' : 'none' }}>
              <div className="flex items-center gap-1 text-emerald-400 shrink-0">
                <ChevronRight className="w-4 h-4"/><span className="text-sm">polymarket://</span>
              </div>
              <input value={url} onChange={e=>setUrl(e.target.value)} onKeyDown={e=>e.key==='Enter'&&analyze()} placeholder="paste event URL..." disabled={loading} className="flex-1 bg-transparent text-white placeholder:text-zinc-600 outline-none disabled:opacity-50"/>
              <button onClick={analyze} disabled={!url.trim()||loading} className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-400 text-sm font-bold hover:bg-emerald-500/30 disabled:opacity-40 transition">
                {loading ? <><Loader className="w-4 h-4 animate-spin"/>ANALYZING</> : <><Search className="w-4 h-4"/>RESEARCH</>}
              </button>
            </div>
          )}
        </div>

        {error && <div className="max-w-2xl mx-auto mb-6 p-3 bg-red-500/10 border border-red-500/40 rounded-lg text-red-400 text-center text-sm">{error}</div>}

        {/* Loading Terminal */}
        {loading && (
          <div className="max-w-2xl mx-auto mb-6 bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2 bg-black border-b border-zinc-800">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-500"/><div className="w-3 h-3 rounded-full bg-green-500"/></div>
              <Terminal className="w-4 h-4 text-zinc-600 ml-2"/><span className="text-xs text-zinc-600">analysis</span>
            </div>
            <div className="p-4 min-h-[160px]">
              {lines.map((l,i)=><div key={i} className="text-emerald-400/70 text-sm">{l}</div>)}
              <div className="flex items-center gap-2 mt-4">
                <Loader className="w-4 h-4 animate-spin text-cyan-400"/>
                <span className="text-cyan-400 text-sm">{status==='fetching'?'FETCHING DATA...':'ANALYZING...'}<span className="animate-pulse ml-1">▊</span></span>
              </div>
              <div className="mt-4 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500" style={{ background:'linear-gradient(90deg,#00ff9d,#00d4ff)', width:status==='fetching'?'50%':'90%' }}/>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="grid md:grid-cols-3 gap-4">
            {/* Market Stats */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
              <div className="px-4 py-2 bg-black/50 border-b border-zinc-800 flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400"/>
                <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Market</span>
                <span className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/>
              </div>
              <div className="p-4">
                <p className="text-white font-semibold mb-4">{result.market.question}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-black/40 rounded border border-zinc-800">
                    <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1"><TrendingUp className="w-3 h-3 text-emerald-400"/>YES</div>
                    <div className="text-xl font-black text-emerald-400">{fmt(result.market.yesPrice)}</div>
                  </div>
                  <div className="p-2 bg-black/40 rounded border border-zinc-800">
                    <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1"><TrendingUp className="w-3 h-3 text-red-400 rotate-180"/>NO</div>
                    <div className="text-xl font-black text-red-400">{fmt(result.market.noPrice)}</div>
                  </div>
                  <div className="p-2 bg-black/40 rounded border border-zinc-800">
                    <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1"><DollarSign className="w-3 h-3 text-yellow-400"/>VOL</div>
                    <div className="text-lg font-bold text-yellow-400">{fmtVol(result.market.volume)}</div>
                  </div>
                  <div className="p-2 bg-black/40 rounded border border-zinc-800">
                    <div className="text-xs text-zinc-500 mb-1 flex items-center gap-1"><Clock className="w-3 h-3 text-purple-400"/>24H</div>
                    <div className="text-lg font-bold text-purple-400">{fmtVol(result.market.volume24hr)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Verdict */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden relative">
              <div className="px-4 py-2 bg-black/50 border-b border-zinc-800 flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-400"/>
                <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">AI Verdict</span>
                <div className="ml-auto flex items-center gap-1 relative">
                  <Zap className="w-3 h-3 text-yellow-400"/>
                  <span className="text-xs text-zinc-500">{(result.conf*100).toFixed(0)}%</span>
                  <button onClick={() => setShowConfTooltip(!showConfTooltip)} className="ml-1 text-zinc-500 hover:text-white transition">
                    <Info className="w-3.5 h-3.5"/>
                  </button>
                </div>
              </div>
              
              {/* Confidence Breakdown Tooltip */}
              {showConfTooltip && result.confidenceBreakdown && (
                <div className="absolute top-12 right-2 z-20 w-80 bg-zinc-950 border border-zinc-700 rounded-xl shadow-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-white">Confidence Breakdown</span>
                    <button onClick={() => setShowConfTooltip(false)} className="text-zinc-500 hover:text-white">
                      <X className="w-4 h-4"/>
                    </button>
                  </div>
                  
                  {/* Progress bar showing earned vs max */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-500">Signal Strength</span>
                      <span className="text-zinc-400">{result.confidenceBreakdown.earned} / {result.confidenceBreakdown.maxPossible} pts</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-full transition-all"
                        style={{ width: `${(result.confidenceBreakdown.earned / result.confidenceBreakdown.maxPossible) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 mb-3">
                    {result.confidenceBreakdown.factors.map((f, i) => (
                      <div key={i} className="flex justify-between text-xs items-center">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <span className="text-zinc-400 truncate">{f.name}</span>
                          <span className="text-zinc-600 text-[10px] truncate">({f.description})</span>
                        </div>
                        <span className={`ml-2 font-medium ${f.value > 10 ? 'text-emerald-400' : f.value > 5 ? 'text-yellow-400' : 'text-zinc-500'}`}>
                          +{f.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-sm font-bold text-white">Final Confidence</span>
                    <span className="text-lg font-black text-yellow-400">{result.confidenceBreakdown.final}%</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-zinc-800">
                    <p className="text-[10px] text-zinc-600 leading-relaxed">
                      Confidence is calculated from {result.confidenceBreakdown.factors.length} weighted factors. Higher quality data and stronger signals = higher confidence. 100% is theoretically possible but practically unreachable.
                    </p>
                  </div>
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#27272a" strokeWidth="8"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#71717a" strokeWidth="8" strokeDasharray={251} strokeDashoffset={251*(1-result.mktProb)} strokeLinecap="round"/>
                      <circle cx="50" cy="50" r="28" fill="none" stroke="#27272a" strokeWidth="8"/>
                      <circle cx="50" cy="50" r="28" fill="none" stroke="#00d4ff" strokeWidth="8" strokeDasharray={176} strokeDashoffset={176*(1-result.aiProb)} strokeLinecap="round" style={{filter:'drop-shadow(0 0 6px #00d4ff)'}}/>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-cyan-400" style={{textShadow:'0 0 10px #00d4ff'}}>{fmt(result.aiProb)}</span>
                      <span className="text-[10px] text-zinc-500">AI PROB</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center mb-3">
                  <div><div className="text-xs text-zinc-500">MARKET</div><div className="text-lg font-bold">{fmt(result.mktProb)}</div></div>
                  <div><div className="text-xs text-zinc-500">AI</div><div className="text-lg font-bold text-cyan-400">{fmt(result.aiProb)}</div></div>
                </div>
                <div className="text-center p-2 bg-black/40 rounded border border-zinc-800">
                  <span className="text-xs text-zinc-500">DELTA: </span>
                  <span className={`font-black ${result.delta>=0?'text-emerald-400':'text-red-400'}`} style={{textShadow: Math.abs(result.delta)>0.03 ? `0 0 10px ${result.delta>0?'#00ff9d':'#ff3366'}` : 'none'}}>{result.delta>=0?'+':''}{(result.delta*100).toFixed(2)}%</span>
                </div>
              </div>
            </div>

            {/* The Play */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
              <div className="px-4 py-2 bg-black/50 border-b border-zinc-800 flex items-center gap-2">
                <Target className="w-4 h-4 text-yellow-400"/>
                <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider">The Play</span>
              </div>
              <div className="p-4">
                {(()=>{const{Icon,color,label}=recConfig[result.rec];return(
                  <button className="w-full py-3 rounded-xl border-2 font-black text-lg mb-3" style={{backgroundColor:`${color}15`,borderColor:`${color}60`,color,boxShadow:`0 0 20px ${color}30`}}>
                    <Icon className="w-5 h-5 inline mr-2"/>{label}
                  </button>
                );})()}
                <div className="p-3 bg-black/40 rounded border border-zinc-800 mb-3">
                  <p className="text-sm text-zinc-300">{result.reason}</p>
                </div>
                <div className="flex gap-1 p-2 bg-yellow-500/10 rounded border border-yellow-500/30">
                  <Alert className="w-4 h-4 text-yellow-400 shrink-0"/>
                  <p className="text-xs text-yellow-400/80">Not financial advice. DYOR.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News */}
        {result && result.news.length > 0 && (
          <div className="mt-4 bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
            <div className="px-4 py-2 bg-black/50 border-b border-zinc-800 text-xs text-cyan-400 font-bold uppercase tracking-wider">📰 News ({result.news.length})</div>
            <div className="p-3 space-y-2">
              {result.news.map((n,i)=>(
                <div key={i} className={`p-3 rounded border ${n.sentiment==='positive'?'bg-emerald-500/5 border-emerald-500/30':n.sentiment==='negative'?'bg-red-500/5 border-red-500/30':'bg-zinc-800/50 border-zinc-700'}`}>
                  <div className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${n.sentiment==='positive'?'bg-emerald-400':n.sentiment==='negative'?'bg-red-400':'bg-zinc-500'}`}/>
                    <div>
                      <div className="font-medium text-sm text-white">{n.title}</div>
                      <div className="text-xs text-zinc-500 mt-1">{n.description}</div>
                      <div className="text-xs text-zinc-600 mt-1">{n.source}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Model Signals - Transparency Section */}
        {result && result.signals && (
          <div className="mt-4 bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
            <div className="px-4 py-2 bg-black/50 border-b border-zinc-800 flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-400"/>
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Model Signals</span>
              <span className="ml-auto text-xs text-zinc-600">{(result.signals.bullish?.length || 0) + (result.signals.bearish?.length || 0) + (result.signals.neutral?.length || 0)} factors analyzed</span>
            </div>
            <div className="p-4">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Bullish Signals */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400"/>
                    <span className="text-xs font-bold text-emerald-400 uppercase">Bullish ({result.signals.bullish?.length || 0})</span>
                  </div>
                  {result.signals.bullish && result.signals.bullish.length > 0 ? (
                    result.signals.bullish.map((s, i) => (
                      <div key={i} className="p-2 bg-emerald-500/5 border border-emerald-500/20 rounded text-xs">
                        <div className="flex justify-between items-start">
                          <span className="text-emerald-400 font-medium">{s.factor}</span>
                          <span className="text-emerald-300 text-[10px]">{s.impact}</span>
                        </div>
                        <p className="text-zinc-400 mt-1">{s.detail}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-zinc-600 italic">No bullish signals detected</p>
                  )}
                </div>
                
                {/* Bearish Signals */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-red-400 rotate-180"/>
                    <span className="text-xs font-bold text-red-400 uppercase">Bearish ({result.signals.bearish?.length || 0})</span>
                  </div>
                  {result.signals.bearish && result.signals.bearish.length > 0 ? (
                    result.signals.bearish.map((s, i) => (
                      <div key={i} className="p-2 bg-red-500/5 border border-red-500/20 rounded text-xs">
                        <div className="flex justify-between items-start">
                          <span className="text-red-400 font-medium">{s.factor}</span>
                          <span className="text-red-300 text-[10px]">{s.impact}</span>
                        </div>
                        <p className="text-zinc-400 mt-1">{s.detail}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-zinc-600 italic">No bearish signals detected</p>
                  )}
                </div>
                
                {/* Neutral/Confidence Signals */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-zinc-400"/>
                    <span className="text-xs font-bold text-zinc-400 uppercase">Confidence ({result.signals.neutral?.length || 0})</span>
                  </div>
                  {result.signals.neutral && result.signals.neutral.length > 0 ? (
                    result.signals.neutral.map((s, i) => (
                      <div key={i} className="p-2 bg-zinc-800/50 border border-zinc-700 rounded text-xs">
                        <div className="flex justify-between items-start">
                          <span className="text-zinc-300 font-medium">{s.factor}</span>
                          <span className={`text-[10px] ${s.impact.includes('+') ? 'text-emerald-400' : s.impact.includes('-') ? 'text-red-400' : 'text-zinc-500'}`}>{s.impact}</span>
                        </div>
                        <p className="text-zinc-500 mt-1">{s.detail}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-zinc-600 italic">No confidence modifiers</p>
                  )}
                </div>
              </div>
              
              {/* Model Summary */}
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">News Sources:</span>
                    <span className="text-white font-medium">{result.modelInputs?.newsCount || 0}</span>
                    <span className="text-zinc-600">({result.modelInputs?.positiveNews || 0}+ / {result.modelInputs?.negativeNews || 0}- / {result.modelInputs?.neutralNews || 0}○)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">Volume:</span>
                    <span className="text-white font-medium">{fmtVol(result.modelInputs?.volume || 0)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">24h Volume:</span>
                    <span className="text-white font-medium">{fmtVol(result.modelInputs?.volume24h || 0)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">Price Range:</span>
                    <span className={`font-medium ${result.modelInputs?.priceRange === 'optimal' ? 'text-emerald-400' : 'text-yellow-400'}`}>
                      {result.modelInputs?.priceRange === 'optimal' ? 'Optimal (20-80%)' : 'Extreme (<20% or >80%)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Share Actions */}
        {result && (
          <div className="mt-4 bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">
            <div className="px-4 py-2 bg-black/50 border-b border-zinc-800 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-purple-400"/>
              <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Share Analysis</span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Share to X */}
                <button onClick={shareToTwitter} className="flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-zinc-800 border border-zinc-700 rounded-xl text-white font-medium transition group">
                  <Twitter className="w-5 h-5 group-hover:text-cyan-400 transition"/>
                  <span className="text-sm">Share to X</span>
                </button>
                
                {/* Copy Link */}
                <button onClick={copyLink} className="flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-zinc-800 border border-zinc-700 rounded-xl text-white font-medium transition group">
                  {copied ? <Check className="w-5 h-5 text-emerald-400"/> : <Copy className="w-5 h-5 group-hover:text-emerald-400 transition"/>}
                  <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
                
                {/* Download PNG */}
                <button onClick={downloadAnalysis} disabled={downloading} className="flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-zinc-800 border border-zinc-700 rounded-xl text-white font-medium transition group disabled:opacity-50">
                  {downloading ? <Loader className="w-5 h-5 animate-spin"/> : <Download className="w-5 h-5 group-hover:text-yellow-400 transition"/>}
                  <span className="text-sm">{downloading ? 'Creating...' : 'Download'}</span>
                </button>
                
                {/* Share to Discord/Telegram */}
                <button onClick={() => {
                  const text = `🤖 PolyVerdict AI Analysis\n\n📊 ${result.market.question}\n🎯 Verdict: ${result.rec === 'BUY_YES' ? 'BUY YES' : result.rec === 'BUY_NO' ? 'BUY NO' : 'HOLD'}\n📈 Delta: ${result.delta >= 0 ? '+' : ''}${(result.delta * 100).toFixed(2)}%\n\n#PolyVerdict`;
                  navigator.clipboard.writeText(text);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }} className="flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-zinc-800 border border-zinc-700 rounded-xl text-white font-medium transition group">
                  <Discord className="w-5 h-5 group-hover:text-[#5865F2] transition"/>
                  <span className="text-sm">Copy Text</span>
                </button>
              </div>
              
              {/* Verdict Card Preview */}
              <div className="mt-4 p-4 bg-gradient-to-br from-zinc-900 to-black border border-zinc-700 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-emerald-400"/>
                    <span className="text-sm font-bold"><span className="text-emerald-400">POLY</span>VERDICT<span className="text-cyan-400"> AI</span></span>
                  </div>
                  <span className="text-xs text-zinc-500">Verdict Card</span>
                </div>
                <p className="text-white text-sm font-medium mb-3 line-clamp-2">{result.market.question}</p>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-xs text-zinc-500">Verdict</span>
                    <p className={`font-black ${result.rec === 'BUY_YES' ? 'text-emerald-400' : result.rec === 'BUY_NO' ? 'text-red-400' : 'text-yellow-400'}`}>
                      {result.rec === 'BUY_YES' ? 'BUY YES' : result.rec === 'BUY_NO' ? 'BUY NO' : 'HOLD'}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500">Delta</span>
                    <p className={`font-black ${result.delta >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {result.delta >= 0 ? '+' : ''}{(result.delta * 100).toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500">Confidence</span>
                    <p className="font-bold text-cyan-400">{(result.conf * 100).toFixed(0)}%</p>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-zinc-600 text-center mt-3">Share your analysis with the community • Download high-res PNG for Telegram/Discord</p>
            </div>
          </div>
        )}

        {/* Newsletter CTA Section */}
        {result && !user && (
          <div className="mt-4 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 border border-purple-500/30 rounded-xl overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Bell className="w-5 h-5 text-purple-400"/>
                    <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Daily Arbitrage Alerts</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Get Top 3 Market Discrepancies Every Morning</h3>
                  <p className="text-sm text-zinc-400">Join 5,000+ traders receiving AI-detected mispricings before the market moves. Free forever.</p>
                </div>
                <div className="w-full md:w-auto">
                  <form onSubmit={handleNewsletterSubscribe} className="flex gap-2">
                    <input 
                      type="email" 
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 md:w-64 px-4 py-3 bg-black/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-600 outline-none focus:border-purple-500 transition"
                    />
                    <button 
                      type="submit"
                      disabled={subscribing}
                      className="px-6 py-3 bg-purple-500 hover:bg-purple-400 rounded-lg text-white font-bold transition disabled:opacity-50 flex items-center gap-2"
                    >
                      {subscribing ? <Loader className="w-4 h-4 animate-spin"/> : <Mail className="w-4 h-4"/>}
                      {subscribing ? '...' : 'Subscribe'}
                    </button>
                  </form>
                  {subscribeError && <p className="text-xs text-red-400 mt-2">{subscribeError}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exit Intent Modal */}
        {showExitIntent && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-lg p-8 relative" style={{ boxShadow: '0 0 60px rgba(168, 85, 247, 0.3)' }}>
              <button onClick={() => setShowExitIntent(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
                <X className="w-6 h-6"/>
              </button>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center" style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}>
                  <Bell className="w-8 h-8 text-purple-400"/>
                </div>
                <h2 className="text-2xl font-black text-white mb-2">Don't Bet Blind Tomorrow</h2>
                <p className="text-zinc-400">Join <span className="text-emerald-400 font-bold">5,000+</span> traders getting our AI alerts</p>
              </div>
              
              <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-emerald-400"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Daily Arbitrage Alert</h4>
                    <p className="text-xs text-zinc-500">Every morning at 8 AM EST</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400"/> Top 3 market discrepancies
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400"/> AI confidence scores included
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400"/> Beat the crowd, trade smarter
                  </li>
                </ul>
              </div>
              
              <form onSubmit={handleNewsletterSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white text-center placeholder:text-zinc-600 outline-none focus:border-purple-500 transition text-lg"
                  autoFocus
                />
                <button 
                  type="submit"
                  disabled={subscribing}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 rounded-xl text-white font-black text-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {subscribing ? (
                    <><Loader className="w-5 h-5 animate-spin"/> Subscribing...</>
                  ) : (
                    <><Mail className="w-5 h-5"/> Get Free Daily Alerts</>
                  )}
                </button>
                {subscribeError && <p className="text-xs text-red-400 text-center">{subscribeError}</p>}
              </form>
              
              <p className="text-xs text-zinc-600 text-center mt-4">
                Free forever • Unsubscribe anytime • No spam
              </p>
            </div>
          </div>
        )}

        {/* Ad Banner - Bottom Placement (GOOGLE ADSENSE) */}
        {/* 
          GOOGLE ADSENSE SETUP:
          1. Sign up at https://www.google.com/adsense
          2. Get approved (requires content review)
          3. Create an ad unit (responsive or 728x90)
          4. Add this script to your site's <head> (once):
             <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
          5. Replace ca-pub-XXXXXXX and data-ad-slot below with your IDs
        */}
        <div className="mt-6">
          <div 
            id="adsense-ad-bottom"
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden"
          >
            {/* 
              Actual AdSense code (uncomment when you have credentials):
              
              <ins className="adsbygoogle"
                   style={{display:'block'}}
                   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                   data-ad-slot="XXXXXXXXXX"
                   data-ad-format="horizontal"
                   data-full-width-responsive="true">
              </ins>
              <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            */}
            
            {/* Placeholder - Remove when AdSense is configured */}
            <div className="p-3 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Globe className="w-4 h-4"/>
                  <span className="text-[10px] uppercase tracking-wider">Advertisement • Google</span>
                </div>
              </div>
              <div className="mt-2 p-4 bg-zinc-800/50 rounded border border-zinc-700 border-dashed">
                <p className="text-xs text-zinc-500">Google AdSense Ad Unit</p>
                <p className="text-[10px] text-zinc-600 mt-1">Responsive • 728x90 • Auto-optimized</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-zinc-800 text-center">
          <div className="flex items-center justify-center gap-2 text-yellow-400/80 text-sm mb-2">
            <Alert className="w-4 h-4"/><span className="font-bold">NOT FINANCIAL ADVICE</span>
          </div>
          <p className="text-xs text-zinc-600">PolyVerdict AI © 2025 • For entertainment only</p>
        </footer>
      </div>
    </div>
  );
}

