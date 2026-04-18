import React, { useState } from 'react';
import { ArrowLeft, Cpu, ShieldCheck, AlertTriangle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scanSms } from '../api/safenet';
import Footer from '../components/Footer';

const DEMO_SMS = [
  { label: '🔴 Scam SMS', text: 'URGENT: Your KYC is suspended. Click here to update immediately or your account will be blocked: bit.ly/kyc-verify' },
  { label: '🟢 Safe SMS', text: 'Your OTP for Axis Bank transaction is 583291. Valid for 30 seconds. Do not share with anyone.' },
];

export default function SMSFilter() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await scanSms(text);
      setResult(res);
    } catch {
      setResult({ status: 'SUSPICIOUS', flags: ['Analysis unavailable'] });
    } finally {
      setLoading(false);
    }
  };

  const statusConfig = {
    SAFE: { icon: <ShieldCheck className="w-12 h-12 text-emerald-400" />, label: '✓ SAFE MESSAGE', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-950/60' },
    SUSPICIOUS: { icon: <AlertTriangle className="w-12 h-12 text-yellow-400" />, label: '⚠ SUSPICIOUS', color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-950/60' },
    DANGER: { icon: <XCircle className="w-12 h-12 text-red-400" />, label: '✕ SCAM DETECTED', color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-950/60' },
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-10 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-3">
          <Cpu className="w-8 h-8 text-sky-400" />
          <h1 className="font-tech text-3xl font-black text-white">SMS FILTER</h1>
        </div>
        <p className="text-white/45 text-lg mb-10 leading-relaxed">
          Paste any suspicious SMS you received. Our NLP AI instantly detects scam language, fake bank alerts, and phishing tricks.
        </p>

        <form onSubmit={handleScan} className="mb-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste the suspicious SMS message here..."
            rows={5}
            className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white text-lg placeholder-white/25 outline-none focus:border-sky-500/60 transition-all resize-none mb-3"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Analysing...' : 'Analyse SMS'}
          </button>
        </form>

        <div className="flex flex-wrap gap-3 mb-10">
          <span className="text-white/30 text-sm pt-1">Try demos:</span>
          {DEMO_SMS.map((d) => (
            <button key={d.label} onClick={() => setText(d.text)} className="text-sm text-sky-400 hover:text-sky-300 underline underline-offset-2">
              {d.label}
            </button>
          ))}
        </div>

        {result && (() => {
          const c = statusConfig[result.status] || statusConfig.SUSPICIOUS;
          return (
            <div className={`p-8 rounded-2xl border ${c.bg} ${c.border}`}>
              <div className="flex items-start gap-5 mb-5">
                {c.icon}
                <h3 className={`text-3xl font-black font-tech ${c.color}`}>{c.label}</h3>
              </div>
              {result.flags && result.flags.length > 0 && (
                <div>
                  <p className="text-white/50 text-sm mb-3 uppercase tracking-widest font-medium">Detected Flags:</p>
                  <div className="flex flex-wrap gap-2">
                    {result.flags.map((flag, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-sm font-medium border border-white/10">
                        ⚠ {flag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {result.status === 'SAFE' && (
                <p className="text-white/60 leading-relaxed">No scam language or phishing patterns detected. This message appears legitimate.</p>
              )}
            </div>
          );
        })()}
      </div>
      <Footer />
    </div>
  );
}
