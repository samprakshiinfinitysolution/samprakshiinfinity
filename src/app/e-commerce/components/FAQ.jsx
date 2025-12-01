import React from 'react';

export default function FAQ({ items = [] }) {
  return (
    <section id="faq" className="mt-12">
      <h2 className="text-2xl font-semibold text-brand-primary">FAQ</h2>
      <p className="mt-2 text-gray-600">Answers to common questions — reach out if you do not see your question here.</p>

      <div className="mt-6 grid gap-4">
        {items.map((it) => (
          <details key={it.q} className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-transparent hover:border-brand-primary transition">
            <summary className="font-medium text-brand-primary cursor-pointer">{it.q}</summary>
            <p className="mt-2 text-sm text-gray-600">{it.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-6">
  <p className="text-sm text-gray-700">Still have questions? We&apos;re happy to help — schedule a short free consult.</p>
        <a
          href="#contact"
          className="inline-block mt-3 px-5 py-2 rounded-md font-medium shadow-sm"
          style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff' }}
        >
          Get a free consult
        </a>
      </div>
    </section>
  );
}
