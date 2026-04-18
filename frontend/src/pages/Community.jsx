import React, { useState } from 'react';
import { ArrowLeft, ShieldAlert, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Community() {
  const [type, setType] = useState('url');
  const [value, setValue] = useState('');
  const [desc, setDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production this calls POST /api/report
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-10 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-3">
          <ShieldAlert className="w-8 h-8 text-orange-400" />
          <h1 className="font-tech text-3xl font-black text-white">COMMUNITY SHIELD</h1>
        </div>
        <p className="text-white/45 text-lg mb-10 leading-relaxed">
          Spotted a scam? Report it here. Your report is added to our shared database immediately — protecting every Indian who uses SafeNet.
        </p>

        {submitted ? (
          <div className="p-10 rounded-2xl border border-emerald-500/30 bg-emerald-950/60 text-center">
            <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-5" />
            <h3 className="text-2xl font-black font-tech text-emerald-400 mb-3">REPORT SUBMITTED!</h3>
            <p className="text-white/60 text-lg">Thank you for protecting your community. Your report has been added to our threat database.</p>
            <button onClick={() => { setSubmitted(false); setValue(''); setDesc(''); }} className="mt-8 px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors">
              Report Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Type selector */}
            <div>
              <label className="block text-white/50 text-sm uppercase tracking-widest mb-3 font-medium">What are you reporting?</label>
              <div className="flex gap-3">
                {['url', 'upi', 'phone', 'sms'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all uppercase ${
                      type === t ? 'bg-orange-600 border-orange-500 text-white' : 'border-white/15 bg-white/5 text-white/50 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {t === 'url' ? '🔗 URL' : t === 'upi' ? '💸 UPI' : t === 'phone' ? '📞 Phone' : '💬 SMS'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white/50 text-sm uppercase tracking-widest mb-3 font-medium">
                {type === 'url' ? 'Scam URL' : type === 'upi' ? 'UPI ID' : type === 'phone' ? 'Phone Number' : 'Scam Message'}
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={type === 'url' ? 'https://scam-site.com' : type === 'upi' ? 'scammer@upi' : type === 'phone' ? '+91 9876543210' : 'Paste SMS text...'}
                className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white text-lg placeholder-white/25 outline-none focus:border-orange-500/60 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-white/50 text-sm uppercase tracking-widest mb-3 font-medium">Describe the scam (optional)</label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                rows={3}
                placeholder="What happened? What made it suspicious?"
                className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white text-base placeholder-white/25 outline-none focus:border-orange-500/60 transition-all resize-none"
              />
            </div>

            <button type="submit" className="w-full py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg transition-all shadow-lg shadow-orange-900/30">
              Submit Report
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}
