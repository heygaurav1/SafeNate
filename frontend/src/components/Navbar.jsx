import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { LanguageContext } from '../App';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/#features' },
  { label: 'How it Works', to: '/#how-it-works' },
  { label: 'Pricing', to: '/pricing' },
];

export default function Navbar() {
  const { lang } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="SafeNet Logo" className="w-9 h-9 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] text-white/50 font-medium tracking-widest uppercase">Ai Powered</span>
            <span className="text-[17px] font-bold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent tracking-tight">Cybersecurity</span>
          </div>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-[15px] font-medium tracking-wide transition-colors ${
                location.pathname === link.to ? 'text-white' : 'text-white/55 hover:text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link
            to="/link-scanner"
            className="hidden md:block px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[14px] font-semibold transition-all shadow-lg shadow-violet-900/50"
          >
            Protect Us
          </Link>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="text-white/70 hover:text-white text-lg font-medium" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/link-scanner" className="mt-2 px-5 py-3 rounded-full bg-violet-600 text-white text-center font-semibold" onClick={() => setMenuOpen(false)}>
            Protect Us
          </Link>
        </div>
      )}
    </nav>
  );
}
