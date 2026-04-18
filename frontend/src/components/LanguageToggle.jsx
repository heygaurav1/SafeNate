import React, { useContext } from 'react';
import { LanguageContext } from '../App';

export default function LanguageToggle() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="flex bg-black/40 rounded-full p-1 border border-white/10 backdrop-blur-md">
      <button
        onClick={() => setLang('en')}
        className={`px-6 py-2 rounded-full font-tech tracking-wider text-sm transition-all duration-300 ${
          lang === 'en' ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'text-gray-400 hover:text-white'
        }`}
      >
        ENG
      </button>
      <button
        onClick={() => setLang('hi')}
        className={`px-6 py-2 rounded-full font-tech tracking-wider text-sm transition-all duration-300 ${
          lang === 'hi' ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'text-gray-400 hover:text-white'
        }`}
      >
        HIN
      </button>
    </div>
  );
}
