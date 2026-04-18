import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ShieldAlert, Cpu, ScanEye } from 'lucide-react';
import { LanguageContext } from '../App';
import en from '../i18n/en.json';
import hi from '../i18n/hi.json';

export default function Home() {
  const { lang } = useContext(LanguageContext);
  const t = lang === 'en' ? en.home : hi.home;

  const features = [
    {
      to: "/link-scanner",
      icon: <ScanEye className="w-12 h-12 text-blue-400 mb-6 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />,
      title: t.links.title.toUpperCase(),
      desc: t.links.desc,
      btn: t.links.btn.toUpperCase(),
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      border: "border-blue-500/20 hover:border-blue-400/50"
    },
    {
      to: "/upi-guard",
      icon: <Shield className="w-12 h-12 text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]" />,
      title: t.upi.title.toUpperCase(),
      desc: t.upi.desc,
      btn: t.upi.btn.toUpperCase(),
      glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      border: "border-emerald-500/20 hover:border-emerald-400/50"
    },
    {
      to: "/sms-filter",
      icon: <Cpu className="w-12 h-12 text-purple-400 mb-6 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]" />,
      title: t.sms.title.toUpperCase(),
      desc: t.sms.desc,
      btn: t.sms.btn.toUpperCase(),
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
      border: "border-purple-500/20 hover:border-purple-400/50"
    },
    {
      to: "/community",
      icon: <ShieldAlert className="w-12 h-12 text-orange-400 mb-6 drop-shadow-[0_0_15px_rgba(251,146,60,0.8)]" />,
      title: t.report.title.toUpperCase(),
      desc: t.report.desc,
      btn: t.report.btn.toUpperCase(),
      glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
      border: "border-orange-500/20 hover:border-orange-400/50"
    }
  ];

  return (
    <div className="relative w-full h-full pb-20">
      
      <div className="flex flex-col items-center justify-center pt-24 pb-32 relative z-10">
        {/* Cinematic Header matching Figma aesthetic */}
        <h1 className="font-tech text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 tracking-[-0.05em] leading-[0.9] text-center max-w-5xl mb-8 filter drop-shadow-lg">
          {t.title.toUpperCase()}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl text-center font-medium leading-relaxed tracking-wide font-sans">
          {t.subtitle}
        </p>

        {/* Decorative Space Station geometric grid lines (subtle) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none -z-10"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-20">
        
        {/* Neon Glowing Portal behind the grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 blur-[100px] -z-10 rounded-full"></div>

        {features.map((f, idx) => (
          <Link key={idx} to={f.to} className={`group block p-10 rounded-3xl border bg-black/40 backdrop-blur-xl transition-all duration-500 ${f.border} ${f.glow} overflow-hidden relative`}>
            
            {/* Hover glare effect */}
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none"></div>

            {f.icon}
            
            <h2 className="font-tech text-2xl font-bold text-white mb-4 tracking-wider">{f.title}</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed h-[60px] font-sans">{f.desc}</p>
            
            <div className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 bg-white/5 text-white font-tech text-sm tracking-widest uppercase transition-colors group-hover:bg-white group-hover:text-black">
              {f.btn}
            </div>
            
          </Link>
        ))}
      </div>

    </div>
  );
}
