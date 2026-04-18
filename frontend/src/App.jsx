import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LinkScanner from './pages/LinkScanner';
import UPIGuard from './pages/UPIGuard';
import SMSFilter from './pages/SMSFilter';
import Community from './pages/Community';
import Pricing from './pages/Pricing';

export const LanguageContext = React.createContext();

function App() {
  const [lang, setLang] = useState('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <BrowserRouter>
        <div
          className="min-h-screen font-sans text-white relative overflow-x-hidden"
          style={{ background: 'linear-gradient(160deg, #07050f 0%, #0d0720 30%, #150b35 55%, #0a0618 100%)' }}
        >
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/link-scanner" element={<LinkScanner />} />
              <Route path="/upi-guard" element={<UPIGuard />} />
              <Route path="/sms-filter" element={<SMSFilter />} />
              <Route path="/community" element={<Community />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
