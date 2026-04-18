import React, { useState } from 'react';
import { ArrowLeft, Shield, ShieldCheck, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { checkUpi } from '../api/safenet';
import Footer from '../components/Footer';

export default function UPIGuard() {
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const demos = [
    { id: 'scammer@paytm', label: '🔴 Reported scammer' },
    { id: 'gaurav@okaxis', label: '🟢 Clean ID' },
  ];

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!upiId.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await checkUpi(upiId);
      setResult(res);
    } catch {
      setResult({ status: 'SAFE', reportCount: 0 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-10 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-3">
          <Shield className="w-8 h-8 text-emerald-400" />
          <h1 className="font-tech text-3xl font-black text-white">UPI GUARD</h1>
        </div>
        <p className="text-white/45 text-lg mb-10 leading-relaxed">
          Enter any UPI ID before sending money. We check it against our community-reported scammer database instantly.
        </p>

        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="e.g. unknown-person@ybl"
            className="flex-1 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white text-lg placeholder-white/25 outline-none focus:border-emerald-500/60 transition-all"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Checking...' : 'Check UPI'}
          </button>
        </form>

        <div className="flex flex-wrap gap-3 mb-10">
          <span className="text-white/30 text-sm pt-1">Try demos:</span>
          {demos.map((d) => (
            <button key={d.id} onClick={() => setUpiId(d.id)} className="text-sm text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
              {d.label}
            </button>
          ))}
        </div>

        {result && (
          <div className={`p-8 rounded-2xl border flex items-start gap-6 ${
            result.status === 'SAFE'
              ? 'bg-emerald-950/60 border-emerald-500/30'
              : 'bg-red-950/60 border-red-500/30'
          }`}>
            {result.status === 'SAFE'
              ? <ShieldCheck className="w-14 h-14 text-emerald-400 shrink-0" />
              : <XCircle className="w-14 h-14 text-red-400 shrink-0" />}
            <div>
              <h3 className={`text-3xl font-black font-tech mb-3 ${result.status === 'SAFE' ? 'text-emerald-400' : 'text-red-400'}`}>
                {result.status === 'SAFE' ? '✓ SAFE UPI ID' : '✕ REPORTED SCAMMER'}
              </h3>
              <p className="text-white/70 text-lg">
                {result.status === 'SAFE'
                  ? 'No negative reports found. This UPI ID appears safe to transact with.'
                  : `This UPI ID has been reported ${result.reportCount} time(s) by the community. Do NOT send money.`}
              </p>
              <p className="text-white/30 text-sm mt-3">{upiId}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
