"use client";
import React, { useState } from 'react';

export default function FAQAccordion({ faq = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-1 gap-4">
          {faq.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="p-4 bg-gray-50 rounded-lg">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left font-semibold flex items-center justify-between"
                >
                  <span>{f.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && <p className="text-gray-700 mt-2">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
