import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap } from 'lucide-react';
import Footer from '../components/Footer';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    desc: 'Perfect for individual users who want basic protection.',
    color: 'border-white/10',
    btn: 'bg-white/10 hover:bg-white/20 text-white',
    features: [
      '50 URL scans per month',
      '20 UPI checks per month',
      '10 SMS analyses per month',
      'Basic threat results',
      'Community reports (read)',
    ],
  },
  {
    name: 'Pro',
    price: '₹99',
    period: '/month',
    desc: 'For power users and small families who need complete protection.',
    color: 'border-violet-500/50',
    badge: 'Most Popular',
    btn: 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/50',
    features: [
      'Unlimited URL scans',
      'Unlimited UPI checks',
      'Unlimited SMS analyses',
      'AI-powered details & reasons',
      'Community reports (submit)',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: '₹499',
    period: '/month',
    desc: 'For banks, NGOs, and organizations protecting large communities.',
    color: 'border-fuchsia-500/30',
    btn: 'bg-fuchsia-700 hover:bg-fuchsia-600 text-white',
    features: [
      'Everything in Pro',
      'API access for integration',
      'Custom threat database',
      'Team accounts (up to 50)',
      'Dedicated account manager',
      'SLA guarantee',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-10 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> Transparent Pricing
          </div>
          <h1 className="font-tech text-4xl md:text-6xl font-black text-white mb-5">SIMPLE PRICING</h1>
          <p className="text-white/45 text-xl max-w-xl mx-auto">No hidden fees. No surprises. Choose a plan that protects you best.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-8 rounded-2xl border bg-white/3 hover:bg-white/5 transition-all ${plan.color}`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-violet-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                  {plan.badge}
                </div>
              )}
              <h3 className="font-tech text-xl font-black text-white mb-1 uppercase tracking-wider">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-white/40 text-base">{plan.period}</span>
              </div>
              <p className="text-white/40 text-sm mb-8 leading-relaxed">{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/65 text-base">
                    <CheckCircle className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/link-scanner" className={`block w-full py-4 rounded-2xl font-bold text-lg text-center transition-all ${plan.btn}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
