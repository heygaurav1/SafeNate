import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <div>
      <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8 text-xl font-medium">
        <ArrowLeft className="w-6 h-6" />
        Back to Home
      </Link>
      <div className="bg-white p-8 rounded-2xl border shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Reports (Coming Soon)</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Report a scammer's phone number or UPI ID here to protect the rest of the Indian community. Powered by Firebase Firestore.
        </p>
      </div>
    </div>
  );
}
