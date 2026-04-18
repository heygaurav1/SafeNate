import React from 'react';
import { ShieldCheck, AlertTriangle, XCircle } from 'lucide-react';

export default function ResultCard({ status, reason }) {
  if (!status) return null;

  const config = {
    SAFE: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: <ShieldCheck className="w-12 h-12 text-green-600" />,
      label: 'SAFE'
    },
    SUSPICIOUS: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: <AlertTriangle className="w-12 h-12 text-yellow-600" />,
      label: 'SUSPICIOUS'
    },
    DANGER: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: <XCircle className="w-12 h-12 text-red-600" />,
      label: 'DANGER'
    }
  };

  const current = config[status] || config.SUSPICIOUS;

  return (
    <div className={`mt-8 p-8 rounded-2xl border-2 flex items-start gap-6 ${current.bg} ${current.border}`}>
      <div className="shrink-0">{current.icon}</div>
      <div>
        <h3 className={`text-4xl font-bold mb-3 ${current.text}`}>{current.label}</h3>
        <p className={`text-xl ${current.text} opacity-90 leading-relaxed`}>{reason}</p>
      </div>
    </div>
  );
}
