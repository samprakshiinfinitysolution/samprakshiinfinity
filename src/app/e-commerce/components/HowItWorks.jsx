import React from 'react';

export default function HowItWorks({ steps = [] }) {
  return (
    <section id="how-it-works" className="mt-12">
      <h2 className="text-2xl font-semibold">How it works</h2>
      <p className="mt-2 text-gray-600">A realistic, no-buzz process designed to deliver measurable results.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.title} className="p-4 bg-white rounded-lg shadow-sm text-center">
            <div className="text-indigo-600 font-bold text-xl">{s.step}</div>
            <h4 className="mt-2 font-medium">{s.title}</h4>
            <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
