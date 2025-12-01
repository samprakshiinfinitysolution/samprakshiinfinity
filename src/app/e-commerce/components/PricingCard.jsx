import React from 'react';

export default function PricingCard({ name, usd, inr, desc, highlight, cta }) {
  return (
    <div className={`${highlight ? 'p-6 bg-brand-highlight rounded-lg shadow-lg border-2 border-brand-primary' : 'p-6 bg-white rounded-lg shadow-sm'}`}>
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{name}</div>
      </div>

      <div className="mt-4 text-3xl font-bold">{usd} <span className="text-base font-medium text-gray-600">/mo</span></div>
      {inr && <div className="mt-1 text-sm text-gray-500">{inr} / month (approx)</div>}
      <div className="mt-3 text-sm text-gray-600">{desc}</div>
      <a
        href="#"
        className="mt-6 inline-block px-4 py-2 rounded font-medium shadow-sm"
        style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff' }}
      >
        {cta || 'Choose'}
      </a>
    </div>
  );
}
