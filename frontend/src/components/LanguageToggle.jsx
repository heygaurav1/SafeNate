import React, { useContext } from 'react';
import { LanguageContext } from '../App';

export default function LanguageToggle() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="flex bg-white/10 rounded-full p-0.5 border border-white/15 backdrop-blur-md">
      <button
        onClick={() => setLang('en')}
        className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
          lang === 'en'
            ? 'bg-white text-gray-900 shadow'
            : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('hi')}
        className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
          lang === 'hi'
            ? 'bg-white text-gray-900 shadow'
            : 'text-white/60 hover:text-white'
        }`}
      >
        हिं
      </button>
    </div>
  );
}
