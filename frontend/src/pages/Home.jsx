import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ScanEye, Shield, Cpu, ShieldAlert, ArrowRight, CheckCircle, Star, Zap, Lock, Globe } from 'lucide-react';
import { LanguageContext } from '../App';
import en from '../i18n/en.json';
import hi from '../i18n/hi.json';
import Footer from '../components/Footer';

const stats = [
  { value: '300+', label: 'Scams Detected' },
  { value: '99%', label: 'Accuracy Rate' },
  { value: '24/7', label: 'Live Monitoring' },
  { value: '180+', label: 'URLs Blocked' },
];

const features = [
  { to: '/link-scanner', icon: <ScanEye className="w-7 h-7 text-violet-400" />, title: 'Link Scanner', desc: 'Instantly check if any URL is a phishing site or safe to open.' },
  { to: '/upi-guard', icon: <Shield className="w-7 h-7 text-emerald-400" />, title: 'UPI Guard', desc: 'Verify UPI IDs before sending money to unknown receivers.' },
  { to: '/sms-filter', icon: <Cpu className="w-7 h-7 text-sky-400" />, title: 'SMS Filter', desc: 'AI-powered NLP detects scam language in any SMS within seconds.' },
  { to: '/community', icon: <ShieldAlert className="w-7 h-7 text-orange-400" />, title: 'Community Shield', desc: 'Report new scams and protect every Indian in real-time.' },
];

const howSteps = [
  { icon: <Globe className="w-8 h-8 text-violet-400" />, step: '01', title: 'Paste or Enter', desc: 'Enter a suspicious URL, UPI ID, or paste a scam SMS into SafeNet.' },
  { icon: <Zap className="w-8 h-8 text-fuchsia-400" />, step: '02', title: 'AI Scans Instantly', desc: 'Our ML engine cross-checks against 10,000+ known threat patterns.' },
  { icon: <Lock className="w-8 h-8 text-emerald-400" />, step: '03', title: 'Stay Protected', desc: 'Get a clear SAFE / SUSPICIOUS / DANGER verdict in under 1 second.' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Homemaker, Jaipur', text: 'SafeNet warned me before I clicked a fake bank link. It saved my savings!', stars: 5 },
  { name: 'Rajan Mehta', role: 'Retired Teacher, Pune', text: 'I can check any UPI before sending money. Simple and very helpful.', stars: 5 },
  { name: 'Anjali Verma', role: 'Small Business Owner', text: 'The SMS filter caught a fake KYC scam I almost fell for. Amazing app!', stars: 5 },
];

const orgs = ['SBI', 'HDFC', 'PhonePe', 'Paytm', 'NPCI', 'RBI', 'Zerodha', 'IRCTC'];

const insights = [
  { tag: 'Security', title: '5 Signs an SMS is a Scam', desc: 'Learn the top red flags used by fraudsters in India to trick citizens via SMS.', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80' },
  { tag: 'UPI Safety', title: 'How to Verify Any UPI ID', desc: 'Before you send money, these simple steps can save you from loss.', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80' },
  { tag: 'Phishing', title: 'India Phishing Attacks Up 400%', desc: 'Cybercriminals are targeting rural and elderly users — here is how SafeNet fights back.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80' },
];

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const t = lang === 'en' ? en.home : hi.home;

  return (
    <div className="w-full">

      {/* ──────── HERO ──────── */}
      <section className="relative min-h-screen flex items-center justify-between px-8 md:px-20 pt-28 pb-20 max-w-7xl mx-auto gap-12">
        {/* Glow orbs */}
        <div className="absolute right-[-5%] top-[10%] w-[600px] h-[600px] rounded-full bg-violet-700/20 blur-[130px] pointer-events-none" />
        <div className="absolute left-[-10%] bottom-[5%] w-[400px] h-[400px] rounded-full bg-purple-900/25 blur-[100px] pointer-events-none" />

        {/* Left text */}
        <div className="relative z-10 flex-1 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            AI-Powered Cyber Protection for India
          </div>

          <h1 className="font-tech font-black text-white leading-[0.9] tracking-tight mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl">SECURED BY</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent">INNOVATION</span>
          </h1>

          <p className="text-white/55 text-lg md:text-xl leading-relaxed mb-4 max-w-lg">
            Stay ahead of cyber threats with AI-powered scam detection. SafeNet protects you from phishing, fake UPIs, and scam messages — in real-time.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {['Real-time detection', 'UPI fraud prevention', 'AI SMS analysis'].map(b => (
              <span key={b} className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />{b}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/link-scanner" className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-lg transition-all shadow-xl shadow-violet-900/60 hover:scale-105 active:scale-100">
              Protect Us
            </Link>
            <Link to="/pricing" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg transition-all flex items-center gap-2 group">
              View Pricing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right — 3D Shield visual */}
        <div className="relative hidden lg:flex flex-1 items-center justify-center">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-violet-700/30 blur-[80px]" />
          <img src="/logo.png" alt="SafeNet Shield" className="relative w-[340px] h-[340px] object-contain drop-shadow-[0_0_60px_rgba(139,92,246,0.6)] animate-pulse" style={{ animationDuration: '3s' }} />
        </div>
      </section>

      {/* ──────── STATS ──────── */}
      <section className="border-y border-white/8 bg-white/2 backdrop-blur-sm py-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-10 font-medium">TRUSTED BY INDUSTRY</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-tech text-4xl md:text-5xl font-black text-white mb-2">{s.value}</div>
                <div className="text-white/45 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── EXPLORE PLATFORMS ──────── */}
      <section id="features" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm uppercase tracking-widest font-medium mb-3">What We Offer</p>
          <h2 className="font-tech text-3xl md:text-5xl font-black text-white mb-4">EXPLORE OUR PLATFORMS</h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">Four powerful AI tools built to keep every Indian citizen protected from modern cyber frauds.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Link key={i} to={f.to} className="group relative p-8 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-violet-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/8 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-white/6 flex items-center justify-center border border-white/10 group-hover:border-violet-500/30 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
              </div>
              <p className="text-white/45 text-base leading-relaxed mb-6">{f.desc}</p>
              <div className="inline-flex items-center gap-2 text-violet-400 font-semibold text-sm group-hover:gap-3 transition-all">
                Try Now <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ──────── HOW IT WORKS ──────── */}
      <section id="how-it-works" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/8 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm uppercase tracking-widest font-medium mb-3">Simple Process</p>
            <h2 className="font-tech text-3xl md:text-5xl font-black text-white mb-4">HOW IT WORKS</h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto">Get protected in seconds. No technical knowledge or setup required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howSteps.map((s, i) => (
              <div key={i} className="relative p-8 rounded-2xl border border-white/8 bg-white/2 text-center group hover:border-violet-500/30 transition-colors">
                <div className="absolute top-6 right-6 font-tech text-5xl font-black text-white/5">{s.step}</div>
                <div className="w-16 h-16 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-violet-500/30 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/45 leading-relaxed">{s.desc}</p>
                {i < howSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-white/20 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── TRUSTED BY ORGS (Marquee) ──────── */}
      <section className="py-16 border-y border-white/8 bg-white/2 overflow-hidden">
        <p className="text-center text-white/35 text-sm uppercase tracking-widest mb-10 font-medium">TRUSTED BY LEADING ORGANIZATIONS</p>
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...orgs, ...orgs].map((org, i) => (
            <span key={i} className="text-2xl font-black text-white/20 hover:text-white/50 transition-colors shrink-0 font-tech tracking-wider">{org}</span>
          ))}
        </div>
      </section>

      {/* ──────── TESTIMONIALS ──────── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm uppercase tracking-widest font-medium mb-3">Reviews</p>
          <h2 className="font-tech text-3xl md:text-5xl font-black text-white mb-4">WHAT OUR CLIENTS SAY</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/20 transition-colors">
              <div className="flex gap-1 mb-5">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-violet-400 fill-violet-400" />
                ))}
              </div>
              <p className="text-white/65 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-white/35 text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────── LATEST INSIGHTS ──────── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm uppercase tracking-widest font-medium mb-3">Blog</p>
          <h2 className="font-tech text-3xl md:text-5xl font-black text-white mb-4">OUR LATEST INSIGHTS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((ins, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/8 bg-white/2 hover:border-violet-500/20 transition-all group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src={ins.img} alt={ins.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">{ins.tag}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3">{ins.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{ins.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-violet-400 text-sm font-semibold group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────── FOOTER ──────── */}
      <Footer />
    </div>
  );
}
