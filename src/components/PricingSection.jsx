"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

const PLANS = [
  {
    id: "basic",
    name: "Web Development",
    price: "₹11,999",
    description: "Fast, SEO-friendly website with modern UI/UX.",
    features: [
      "5 responsive pages",
      "Free domain + hosting (1 year)",
      "Contact form & WhatsApp integration",
      "Basic SEO setup",
    ],
    popular: false,
  },
  {
    id: "pro",
    name: "App Development",
    price: "₹30,999",
    description: "Native-like Android & iOS apps with admin dashboard.",
    features: [
      "Android + iOS",
      "Auth + push notifications",
      "Admin dashboard (optional)",
      "Payment gateway integration",
    ],
    popular: true,
  },
  {
    id: "growth",
    name: "Digital Marketing",
    price: "₹9,999",
    description: "Growth-focused campaigns and creative assets.",
    features: [
      "Social media management",
      "30 creatives / month",
      "Ads setup & reporting",
      "Lead generation funnels",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  const router = useRouter();

  const handleContact = (planId) => {
    // navigate to contact with plan preselected (optional query)
    router.push(`/contact-us?plan=${planId}`);
  };

  return (
    <section className="bg-white/80 dark:bg-slate-900/60 py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest font-semibold text-brand-primary">Our Services</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">Premium packages crafted for growth</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Simple, transparent pricing to get you started quickly — upgrade as you scale.</p>
        </div>

        {/* Grid: items-stretch so each card can grow to same height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((p, idx) => (
            <article
              key={p.id}
              className={`relative flex flex-col h-full rounded-2xl overflow-hidden border bg-clip-border transition-transform duration-200 ease-out ${p.popular ? 'border-brand-primary ring-1 ring-brand-primary/20 shadow-2xl z-10' : 'border-slate-200 bg-white/60 dark:bg-slate-800/50'}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
              aria-labelledby={`plan-${p.id}`}
            >
              {/* Content area grows to push footer down; ensures equal card heights */}
              <div className={`p-8 ${p.popular ? 'pt-10' : 'pt-8'} flex-1 flex flex-col`}> 
                <div className="flex items-start justify-between">
                  <div>
                    <h3 id={`plan-${p.id}`} className="text-xl font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
                  </div>
                  {p.popular && (
                    <div className="ml-4 inline-flex items-center gap-2 rounded-full bg-brand-primary text-white text-xs font-semibold px-3 py-1">Popular</div>
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-sm text-brand-highlight/90">Starting at</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-primary">{p.price}</span>
                  <span className="text-sm text-slate-500">+ GST</span>
                </div>

                {/* Make feature list grow so footer remains at bottom */}
                <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200 flex-1">
                  {p.features.map((f, i2) => (
                    <li key={i2} className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand-primary"><FaCheckCircle className="w-4 h-4" /></span>
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer with CTA; kept outside the flex-1 column so it always sits at bottom */}
              <div className="p-6 flex justify-center bg-linear-to-t from-white/80 to-transparent dark:from-slate-900/60">
                {/* <button
                  onClick={() => handleContact(p.id)}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl text-white font-semibold shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/30 transform-gpu hover:scale-[1.01] active:scale-[0.995]"
                  style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', WebkitTapHighlightColor: 'transparent' }}
                  aria-label={`Book ${p.name}`}
                >
                  <span className="sr-only">Book {p.name} - </span>
                  Book Now
                </button> */}

                 <button
                        type="button"
                       onClick={() => handleContact(p.id)}
                        aria-label="Get a consultation"
                        className="group w-full md:w-auto inline-flex items-center justify-center gap-3 hero-cta-gradient focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none text-white font-semibold rounded-md px-6 py-3 shadow-md transition-colors"
                      >
                        <span>Book Now</span>
                        <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-300">* All prices are exclusive of applicable GST. Contact us for custom packages and enterprise pricing.</p>
      </div>
    </section>
  );
}
