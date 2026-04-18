import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Link Scanner', to: '/link-scanner' },
    { label: 'UPI Guard', to: '/upi-guard' },
    { label: 'SMS Filter', to: '/sms-filter' },
    { label: 'Community Shield', to: '/community' },
  ],
  Company: [
    { label: 'Home', to: '/' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'How it Works', to: '/#how-it-works' },
    { label: 'Features', to: '/#features' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/' },
    { label: 'Terms of Service', to: '/' },
    { label: 'Cookie Policy', to: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-black/30 backdrop-blur-sm">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img src="/logo.png" alt="SafeNet" className="w-9 h-9 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] text-white/40 uppercase tracking-widest">Ai Powered</span>
              <span className="text-[16px] font-bold bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Cybersecurity</span>
            </div>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Protecting every Indian from cyber scams — one click at a time.
          </p>
          {/* Newsletter */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email..."
              className="flex-1 bg-white/6 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-violet-500/50"
            />
            <button className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 rounded-full transition-colors">
              <Mail className="w-4 h-4 text-white" />
            </button>
          </div>
          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <button key={i} className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-violet-500/40 hover:bg-violet-600/20 transition-colors">
                <Icon className="w-4 h-4 text-white/50" />
              </button>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">{section}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/40 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">© 2024 SafeNet. All rights reserved.</p>
        <p className="text-white/20 text-sm font-tech tracking-widest uppercase">PROTECTING EVERY INDIAN — ONE CLICK AT A TIME</p>
      </div>
    </footer>
  );
}
