import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResultCard from '../components/ResultCard';
import { scanUrl } from '../api/safenet';

export default function LinkScanner() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setResult(null);
    try {
      const res = await scanUrl(url); 
      setResult(res); // { status: "DANGER", reason: "..."}
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8 text-xl font-medium">
        <ArrowLeft className="w-6 h-6" />
        Back to Home
      </Link>

      <div className="bg-white p-8 rounded-2xl border shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Link Scanner</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Paste any website link below to check if it's safe to open. We use AI to detect phishing and fake websites instantly.
        </p>

        <form onSubmit={handleScan} className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="e.g. https://bit.ly/free-money"
            className="flex-1 p-5 rounded-xl border-2 border-gray-300 text-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none"
            required
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-colors disabled:opacity-50 min-w-[180px]"
          >
            {loading ? 'Scanning...' : 'Scan Now'}
          </button>
        </form>
        
        <div className="flex gap-3 text-gray-500 mb-8">
          <span className="font-medium">Try these test links: </span>
          <button onClick={() => setUrl('https://bit.ly/free-money')} className="text-blue-600 underline">bit.ly/free-money</button>
          <button onClick={() => setUrl('https://google.com')} className="text-blue-600 underline">google.com</button>
        </div>

        {result && <ResultCard status={result.status} reason={result.reason} />}
      </div>
    </div>
  );
}
