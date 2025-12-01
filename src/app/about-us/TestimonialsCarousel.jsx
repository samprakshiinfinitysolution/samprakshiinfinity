"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Simple StarRating local copy (keeps the carousel self-contained)
const StarRating = ({ value = 5, size = 16 }) => {
  const total = 5;
  return (
    <div role="img" aria-label={`${value} out of 5 stars`} className="flex gap-1 mt-4">
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < value;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" className={filled ? 'text-yellow-500' : 'text-yellow-300'} aria-hidden="true">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.265L12 19.771 4.583 23.86 6 15.595 0 9.748l8.332-1.73z" />
          </svg>
        );
      })}
    </div>
  );
};

export default function TestimonialsCarousel({ items = [] }) {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeArrow, setActiveArrow] = useState(null); // 'prev' | 'next' | null

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = items.length;
  function prev() {
    setStart((s) => (s - 1 + total) % total);
  }
  function next() {
    setStart((s) => (s + 1) % total);
  }

  // Handlers that show an active color briefly when arrow is clicked
  function handlePrev() {
    setActiveArrow('prev');
    prev();
    window.setTimeout(() => setActiveArrow(null), 150);
  }
  function handleNext() {
    setActiveArrow('next');
    next();
    window.setTimeout(() => setActiveArrow(null), 150);
  }

  const visible = Array.from({ length: visibleCount }).map((_, i) => items[(start + i) % total]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Clients Say About <span className="text-brand-bright">Our Company</span></h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="previous testimonial"
              aria-pressed={activeArrow === 'prev'}
              className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors duration-150 ${activeArrow === 'prev' ? 'bg-brand-primary text-white hover:bg-brand-bright' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              <svg className="w-4 h-4" fill="none" stroke={activeArrow === 'prev' ? 'white' : 'currentColor'} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="next testimonial"
              aria-pressed={activeArrow === 'next'}
              className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center  transition-colors duration-150 ${activeArrow === 'next' ? 'bg-brand-bright hover:bg-brand-bright/90' : 'bg-brand-primary hover:bg-brand-bright'}`}>
              <svg className="w-4 h-4 " fill="none" stroke={activeArrow === 'next' ? 'white' : 'currentColor'} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((t, idx) => (
            <div key={idx} className={`p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ${visibleCount === 3 && idx === 1 ? 'transform -translate-y-2 scale-102 shadow-2xl' : ''}`}>
              <div className="flex items-start">
                <div className="w-12 h-12 mr-4 overflow-hidden rounded-full relative">
                  <Image src={t.img} alt={t.name} width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.designation}</p>
                </div>
              </div>
              <StarRating value={5} size={16} />
              <p className="italic text-gray-700 mb-0 mt-4 leading-relaxed">&ldquo;{t.review}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
