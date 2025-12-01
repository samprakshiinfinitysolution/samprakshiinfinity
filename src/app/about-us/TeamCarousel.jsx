"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TeamCarousel({ members = [] }) {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

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

  const total = members.length;

  function prev() {
    setStart((s) => (s - visibleCount + total) % total);
  }
  function next() {
    setStart((s) => (s + visibleCount) % total);
  }

  // Build visible slice with wrap-around
  const visible = Array.from({ length: visibleCount }).map((_, i) => members[(start + i) % total]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-blue-600 uppercase tracking-widest text-sm mb-1">Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">The Amazing <span className="text-blue-700">Team Members</span></h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="previous" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} aria-label="next" className="w-10 h-10 rounded-full bg-blue-600 shadow-md flex items-center justify-center text-white hover:bg-blue-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((member, idx) => (
            <article key={idx} className={`bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 ${idx === 1 && visibleCount === 3 ? 'transform -translate-y-3 scale-105 shadow-2xl' : ''}`}>
              <div className="h-48 relative bg-gray-100">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <div className={`px-6 pb-6 pt-6 ${idx === 1 && visibleCount === 3 ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'}`}>
                <h3 className={`text-md font-semibold ${idx === 1 && visibleCount === 3 ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                <p className={`text-sm mt-1 ${idx === 1 && visibleCount === 3 ? 'text-blue-100/90' : 'text-gray-500'}`}>{member.role}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
