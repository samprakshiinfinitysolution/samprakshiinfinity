import React from 'react';

export default function ServicesList({ services = [] }) {
  return (
    <section id="more-services" className="mt-12">
      <h2 className="text-2xl font-semibold">More services</h2>
      <p className="mt-2 text-gray-600">Additional support we offer to expand and protect your brand on Amazon.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-sm font-medium">{s.title}</div>
            <div className="mt-2 text-sm text-gray-600">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
