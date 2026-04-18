import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LinkScanner from './pages/LinkScanner';
import UPIGuard from './pages/UPIGuard';
import SMSFilter from './pages/SMSFilter';
import Community from './pages/Community';

// Simple Context for Language state
export const LanguageContext = React.createContext();

function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'hi'

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <BrowserRouter>
        <div className="min-h-screen font-sans text-[18px] bg-black text-white relative">
          
          {/* Subtle glowing orb background effect replacing the orange banner */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/40 blur-[120px] rounded-full pointer-events-none z-0"></div>
          
          <div className="relative z-20 bg-blue-600/10 border-b border-blue-500/20 text-blue-300 text-center py-3 px-4 font-tech text-[14px] uppercase tracking-widest backdrop-blur-md">
            ⚠ 1,247 SCAMS BLOCKED TODAY ACROSS INDIA
          </div>
          
          <Navbar />

          <main className="max-w-[1400px] mx-auto py-8 px-6 relative z-10 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/link-scanner" element={<LinkScanner />} />
              <Route path="/upi-guard" element={<UPIGuard />} />
              <Route path="/sms-filter" element={<SMSFilter />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </main>

          {/* Giant overlapping Footer Typography from Space Station Design */}
          <footer className="relative w-full h-[300px] mt-24 overflow-hidden border-t border-white/5 bg-black">
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none flex flex-col items-center justify-end h-full">
              
              <div className="relative font-tech font-black uppercase whitespace-nowrap tracking-tighter leading-[0.7]">
                {/* Background outline text */}
                <div className="text-[10vw] text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)'}}>
                  Protect Every Indian
                </div>
                {/* Foreground solid text overlapping slightly */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-[10vw] text-white/90 drop-shadow-2xl z-10 w-full">
                  SAFENET
                </div>
              </div>

            </div>
          </footer>
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
