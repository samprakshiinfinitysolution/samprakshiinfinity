"use client"
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Terralogic transformed our infrastructure with a smooth migration and measurable cost savings.",
    role: "VP, Chief Operations Officer - UTAH CDC",
    tag: "APP DEVELOPMENT",
  },
  {
    id: 2,
    quote:
      "The team delivered a scalable platform on time and communicated clearly throughout.",
    role: "Head of Engineering - Acme Corp",
    tag: "WEB DEVELOPMENT",
  },
  {
    id: 3,
    quote:
      "Their proactive support and monitoring drastically reduced our downtime.",
    role: "Product Manager - FinServ",
    tag: "DIGITAL MARKETING",
  },
  {
    id: 4,
    quote:
      "Security review and remediation were thorough and helped us meet compliance quickly.",
    role: "Security Architect - SafeBank",
    tag: "ECOMMERCE",
  },
  {
    id: 5,
    quote:
      "Their cost optimization and observability improvements gave us better performance for less.",
    role: "Finance Lead - MacroPay",
    tag: "MORE",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const isPausedRef = useRef(false);
  const prefersReduced = useRef(false);
  const [clickedBtn, setClickedBtn] = useState(null);

  // central timer control so we can pause/resume reliably
  const startTimers = () => {
    if (prefersReduced.current) return;
    const interval = 6000;

    clearInterval(timer.current);

    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, interval);
  };

  const stopTimers = () => {
    clearInterval(timer.current);
  };

  useEffect(() => {
    // check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia) {
      prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    const startTimeout = setTimeout(() => {
      startTimers();
    }, 0);

    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        stopTimers();
        setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
        if (!prefersReduced.current) startTimers();
      } else if (e.key === "ArrowRight") {
        stopTimers();
        setIndex((i) => (i + 1) % testimonials.length);
        if (!prefersReduced.current) startTimers();
      } else if (e.key === " ") {
        // space to toggle pause
        if (isPausedRef.current) {
          isPausedRef.current = false;
          startTimers();
        } else {
          isPausedRef.current = true;
          stopTimers();
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(startTimeout);
      stopTimers();
      window.removeEventListener("keydown", onKey);
    };
    // run once on mount
  }, []);

  

  const prev = () => {
    stopTimers();
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    setClickedBtn('prev');
    setTimeout(() => setClickedBtn(null), 220);
    if (!isPausedRef.current && !prefersReduced.current) startTimers();
  };

  const next = () => {
    stopTimers();
    setIndex((i) => (i + 1) % testimonials.length);
    setClickedBtn('next');
    setTimeout(() => setClickedBtn(null), 220);
    if (!isPausedRef.current && !prefersReduced.current) startTimers();
  };

  const t = testimonials[index];
  const name = t.role.split('\n')[0] || '';
  const [titlePart, orgPart] = t.role.split(' - ');
  const [visible, setVisible] = useState(true);

  // animate visibility when index changes
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 0);
    const v = setTimeout(() => setVisible(true), 60);
    return () => {
      clearTimeout(t);
      clearTimeout(v);
    };
  }, [index]);

  return (
    <section className="py-20 bg-linear-to-b from-slate-50 via-white to-slate-50 bg-[url('/images/soft-bg.png')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="text-xs tracking-wider text-blue-600 font-semibold">TESTIMONIAL</div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Our client success stories</h3>
          <p className="text-sm text-slate-500 mt-2">See how we have helped ambitious clients achieve extraordinary outcomes.</p>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => {
            isPausedRef.current = true;
            stopTimers();
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
            if (!prefersReduced.current) startTimers();
          }}
        >
          

          <div className="mx-6 md:mx-24">
            <div className={`bg-white/80 mb-12 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-lg p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-6 transform transition-all duration-500 ease-in-out hover:shadow-2xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
              <div className="md:col-span-3 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-semibold text-base md:text-lg shadow-inner overflow-hidden ring-1 ring-blue-50 p-1">
                  <Image src="/images/testimonial-avatar.svg" alt={`${name} avatar`} width={128} height={128} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="md:col-span-9">
                <div className="flex items-start gap-4 md:gap-8">
                  <div className="text-blue-300 text-6xl leading-none opacity-20 select-none">“</div>
                  <div>
                          <div className="inline-block py-1 px-3 text-xs uppercase tracking-wide text-blue-700 bg-linear-to-r from-blue-50 to-blue-100 rounded-full font-semibold shadow-sm">{t.tag}</div>
                          <div role="status" aria-live="polite" aria-atomic="true" className="motion-safe:transition-opacity duration-300">
                            <p className="font-serif text-base md:text-lg lg:text-xl text-slate-700 mt-3 md:mt-4 leading-relaxed italic">{t.quote}</p>
                          </div>
                      <div className="mt-5 flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-100" />
                        <div className="text-sm text-slate-500">
                          <div className="font-semibold text-slate-700">{titlePart || t.role}</div>
                          {orgPart ? <div className="text-xs text-slate-500">{orgPart}</div> : null}
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            {/* progress bar removed */}
          </div>

                <div className="absolute right-3 md:right-30 bottom-3 flex items-center gap-2 bg-white/5  rounded-full p-1">
                  <button
                    aria-label="previous testimonial"
                    title="Previous testimonial"
                    onClick={prev}
                    className={`w-9 h-9 flex items-center justify-center rounded-full shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 motion-safe:transition-all duration-300 ease-out ${clickedBtn === 'prev' ? 'border-transparent scale-95' : 'bg-white/10 text-blue-700 border border-blue-50 hover:bg-white/20'}`}
                    style={clickedBtn === 'prev' ? {backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff'} : undefined}
                    aria-pressed={clickedBtn === 'prev'}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-current" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>

                  <button
                    aria-label="next testimonial"
                    title="Next testimonial"
                    onClick={next}
                    className={`w-9 h-9 flex items-center justify-center rounded-full shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 motion-safe:transition-all duration-300 ease-out ${clickedBtn === 'next' ? 'border-transparent scale-95' : 'bg-white/10 text-blue-700 border border-blue-50 hover:bg-white/20'}`}
                    style={clickedBtn === 'next' ? {backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff'} : undefined}
                    aria-pressed={clickedBtn === 'next'}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-current" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  stopTimers();
                  setIndex(i);
                  if (!isPausedRef.current && !prefersReduced.current) startTimers();
                }}
                aria-label={`slide ${i + 1}`}
                aria-current={i === index}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${i === index ? 'bg-blue-600 scale-110 ring-2 ring-blue-200 shadow-lg' : 'bg-slate-200 hover:bg-blue-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
