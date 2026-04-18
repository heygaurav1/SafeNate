import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SMSFilter() {
  return (
    <div>
      <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8 text-xl font-medium">
        <ArrowLeft className="w-6 h-6" />
        Back to Home
      </Link>
      <div className="bg-white p-8 rounded-2xl border shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">SMS Filter (Coming Soon)</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Paste an SMS message here to detect phishing, fake lottery claims, and urgency scams using our AI NLP service.
        </p>
      </div>
    </div>
  );
}
