"use client"
import React from 'react';

export default function ServicesSection(){
  const services = [
    { id: 'app', title: 'App Development', desc: 'Native & cross-platform apps with scalable backend integrations.' },
    { id: 'web', title: 'Web Development', desc: 'Modern, responsive websites and web apps using best practices.' },
    { id: 'digital', title: 'Digital Marketing', desc: 'SEO, paid media, and growth-focused campaigns.' },
    { id: 'backoffice', title: 'Back Office', desc: 'Operational automation, ERP connectors and admin tools.' },
    { id: 'ecom', title: 'Ecommerce', desc: 'Full-stack ecommerce platforms, integrations & optimisation.' },
  ];

  return (
    <section className="min-h-screen flex items-center" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">What We Do</h2>
          <p className="text-slate-500 mt-3">We offer end-to-end services across product, platform and marketing to help you scale.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map(s => (
            <article key={s.id} className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow hover:shadow-lg transition-shadow duration-200">
              <div className="text-lg font-semibold text-slate-800">{s.title}</div>
              <p className="text-sm text-slate-500 mt-2">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
