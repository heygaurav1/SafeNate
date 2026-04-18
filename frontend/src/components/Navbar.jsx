import React, { useContext } from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { LanguageContext } from '../App';

export default function Navbar() {
  const { lang } = useContext(LanguageContext);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* M O N O S P \ C E Logo Block Adaptation */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 border border-white/20 bg-white/5 flex items-center justify-center rounded-lg group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <span className="font-tech text-2xl tracking-[0.2em] font-bold text-white uppercase">SafeNet<span className="text-blue-500">_</span></span>
        </Link>
        
        <LanguageToggle />
      </div>
    </nav>
  );
}
