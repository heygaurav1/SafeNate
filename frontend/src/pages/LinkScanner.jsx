import React, { useState } from 'react';
import { ArrowLeft, ScanEye, ShieldCheck, AlertTriangle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scanUrl } from '../api/safenet';
import Footer from '../components/Footer';

export default function LinkScanner() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const demos = [
    { url: 'https://bit.ly/free-money-india', label: '🔴 Danger demo' },
    { url: 'https://google.com', label: '🟢 Safe demo' },
    { url: 'https://tinyurl.com/unknown', label: '🟡 Suspicious demo' },
  ];

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await scanUrl(url);
      setResult(res);
    } catch {
      setResult({ status: 'SUSPICIOUS', reason: 'Unable to verify at this time. Proceed with caution.' });
    } finally {
      setLoading(false);
    }
  };

  const resultConfig = {
    SAFE: { bg: 'from-emerald-950/80 to-emerald-900/40', border: 'border-emerald-500/40', text: 'text-emerald-400', icon: <ShieldCheck className="w-14 h-14 text-emerald-400" />, label: '✓ SAFE' },
    SUSPICIOUS: { bg: 'from-yellow-950/80 to-yellow-900/40', border: 'border-yellow-500/40', text: 'text-yellow-400', icon: <AlertTriangle className="w-14 h-14 text-yellow-400" />, label: '⚠ SUSPICIOUS' },
    DANGER: { bg: 'from-red-950/80 to-red-900/40', border: 'border-red-500/40', text: 'text-red-400', icon: <XCircle className="w-14 h-14 text-red-400" />, label: '✕ DANGER' },
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-10 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-3">
          <ScanEye className="w-8 h-8 text-violet-400" />
          <h1 className="font-tech text-3xl font-black text-white">LINK SCANNER</h1>
        </div>
        <p className="text-white/45 text-lg mb-10 leading-relaxed">
          Paste any suspicious website link below. Our AI will check it against thousands of known phishing patterns instantly.
        </p>

        <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://suspicious-link.com"
            className="flex-1 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white text-lg placeholder-white/25 outline-none focus:border-violet-500/60 focus:bg-white/8 transition-all"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-lg transition-all disabled:opacity-50 shrink-0 shadow-lg shadow-violet-900/40"
          >
            {loading ? (
              <span className="flex items-center gap-2"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Scanning...</span>
            ) : 'Scan Now'}
          </button>
        </form>

        {/* Demo links */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="text-white/30 text-sm pt-1">Try demos:</span>
          {demos.map((d) => (
            <button key={d.url} onClick={() => setUrl(d.url)} className="text-sm text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
              {d.label}
            </button>
          ))}
        </div>

        {/* Result card */}
        {result && (() => {
          const c = resultConfig[result.status] || resultConfig.SUSPICIOUS;
          return (
            <div className={`p-8 rounded-2xl border bg-gradient-to-br ${c.bg} ${c.border} flex items-start gap-6 animate-pulse-slow`} style={{ animation: 'none' }}>
              {c.icon}
              <div>
                <h3 className={`text-3xl font-black font-tech mb-3 ${c.text}`}>{c.label}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{result.reason}</p>
                <p className="text-white/30 text-sm mt-3 break-all">{url}</p>
              </div>
            </div>
          );
        })()}
      </div>
      <Footer />
    </div>
  );
}
