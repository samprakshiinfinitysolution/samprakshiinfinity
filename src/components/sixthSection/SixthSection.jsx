
"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaPersonBurst, FaRegCircleCheck } from "react-icons/fa6";
import { HiTrophy, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { TbPigMoney } from "react-icons/tb";
import { FaHeadphonesAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaPersonBurst className="w-6 h-6" aria-hidden />,
    title: "Industry Expertise",
    description:
      "We deliver domain-driven digital solutions backed by deep industry knowledge to enhance efficiency, scalability, and business performance.",
    points: [
      "Expertise across e-commerce, healthcare, education, finance, and logistics",
      "Tailored solutions for diverse business models",
      "Proven success delivering industry-focused digital transformation",
    ],
    colorClass: "text-emerald-600",
    borderColor: "border-emerald-600",
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className="w-6 h-6" aria-hidden />,
    title: "Personalized Support",
    description:
      "Our team offers dedicated, personalized assistance to ensure smooth project execution, transparent communication, and customer satisfaction.",
    points: [
      "Dedicated project coordinator for every client",
      "Real-time updates and fast issue resolution",
      "Client-first approach for all development stages",
    ],
    colorClass: "text-teal-500",
    borderColor: "border-teal-500",
  },
  {
    id: 3,
    icon: <HiTrophy className="w-6 h-6" aria-hidden />,
    title: "Recognition & Innovation",
    description:
      "We are recognized for innovation, delivering cutting-edge, scalable technologies that empower businesses to stay competitive.",
    points: [
      "Adoption of modern frameworks and advanced tools",
      "Award-winning and client-trusted solutions",
      "Continuous innovation for high-value digital products",
    ],
    colorClass: "text-sky-500",
    borderColor: "border-sky-500",
  },
  {
    id: 4,
    icon: <TbPigMoney className="w-6 h-6" aria-hidden />,
    title: "Tech-Savvy Leadership",
    description:
      "Our leadership combines technical mastery and strategic insight to drive successful, future-ready digital transformations.",
    points: [
      "Strong expertise in cloud, development, and cybersecurity",
      "Guidance across entire project lifecycle",
      "Vision-focused decision-making for scalable solutions",
    ],
    colorClass: "text-cyan-500",
    borderColor: "border-cyan-500",
  },
  {
    id: 5,
    icon: <FaRegCircleCheck className="w-6 h-6" aria-hidden />,
    title: "R&D Vision",
    description:
      "We invest in research and development to build future-ready, intelligent technologies aligned with evolving market needs.",
    points: [
      "Exploration of AI, ML, IoT, and automation",
      "Constant improvement of development methodologies",
      "Future-focused innovation for sustainable growth",
    ],
    colorClass: "text-emerald-500",
    borderColor: "border-emerald-500",
  },
  {
    id: 6,
    icon: <HiOutlineChatBubbleLeftRight className="w-6 h-6" aria-hidden />,
    title: "IT Expertise",
    description:
      "We deliver comprehensive IT services powered by skilled developers, robust technologies, and high-performance development practices.",
    points: [
      "End-to-end web and app development",
      "Secure, scalable, and optimized coding standards",
      "Expertise in custom software and enterprise solutions",
    ],
    colorClass: "text-sky-600",
    borderColor: "border-sky-600",
  },
];

export default function SixthSection() {
  const containerRef = useRef(null);
  const accentRef = useRef(null);
  const cardsRef = useRef([]);
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    let ctx;
    let gsapCore;
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      if (typeof window === "undefined" || prefersReduced) return;
      try {
        const gsapModule = await import("gsap");
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        gsapCore = gsapModule.gsap || gsapModule.default || gsapModule;
        gsapCore.registerPlugin(ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default);

        ctx = gsapCore.context(() => {
          if (accentRef.current) {
            gsapCore.to(accentRef.current, {
              rotation: 12,
              yPercent: -6,
              transformOrigin: "50% 50%",
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            });
          }

          const nodes = cardsRef.current || [];
          gsapCore.fromTo(
            nodes,
            { y: 22, opacity: 0, scale: 0.99 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "top 40%",
                scrub: false,
              },
            }
          );
        }, containerRef);
      } catch (e) {
        // silent fail
      }
    })();

    return () => {
      try {
        if (ctx) ctx.revert();
        if (gsapCore && gsapCore.ScrollTrigger) {
          gsapCore.ScrollTrigger.getAll().forEach((t) => t.kill && t.kill());
        }
      } catch (e) {}
    };
  }, []);

  const setCardRef = (el, i) => {
    cardsRef.current[i] = el;
  };

  return (
    <section
      ref={containerRef}
  className="relative py-14 bg-linear-to-b from-slate-50 to-white overflow-hidden"
      aria-labelledby="sixth-heading"
      style={{
        // brand colors sampled from the provided logo image
        '--b-deep': '#062C56',
        '--b-mid': '#0E57B8',
        '--b-bright': '#2196FF',
        '--b-highlight': '#7BE1FF',
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-10 max-w-2xl mx-auto">
          <h2
            id="sixth-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, var(--b-mid), var(--b-bright))' }}
          >
            Exclusive{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, var(--b-bright), var(--b-highlight))' }}
            >
              Services
            </span>
          </h2>
          <p className="text-gray-600 mt-3">
            Explore professional services crafted to meet your unique business needs — quality, efficiency &
            satisfaction guaranteed.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <article
              key={s.id}
              ref={(el) => setCardRef(el, idx)}
              className={`group flip-card relative rounded-2xl min-h-[300px] overflow-hidden`}
              tabIndex={0}
              aria-labelledby={`svc-${s.id}`}
              style={{ borderTop: '4px solid var(--b-mid)' }}
              onClick={() => setFlipped((p) => ({ ...p, [s.id]: !p[s.id] }))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setFlipped((p) => ({ ...p, [s.id]: !p[s.id] }));
                }
              }}
            >
              <div className={`flip-card-inner w-full h-full min-h-[300px] ${flipped[s.id] ? "is-flipped" : ""}`}>
                <div className="flip-card-face flip-card-front bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 rounded-lg grid place-items-center bg-slate-50`} style={{ color: 'var(--b-bright)' }}>
                    {s.icon}
                  </div>
                  <h3 id={`svc-${s.id}`} className={`text-lg font-semibold`} style={{ color: 'var(--b-mid)' }}>
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.description}</p>
                </div>

                <div className="flip-card-face flip-card-back bg-white p-6 rounded-2xl shadow-lg flex flex-col text-left gap-3">
                  <h3 className={`text-lg font-semibold`} style={{ color: 'var(--b-mid)' }}>{s.title}</h3>
                  <p className="text-gray-700 text-sm">{s.description}</p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                    {(s.points || []).map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div ref={accentRef} aria-hidden className="pointer-events-none absolute -right-20 -top-20 opacity-10 select-none">
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="a1" x1="0" x2="1">
                <stop offset="0%" stopColor="#0E57B8" />
                <stop offset="100%" stopColor="#2196FF" />
              </linearGradient>
            </defs>
            <circle cx="160" cy="160" r="140" fill="url(#a1)" opacity="0.08" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .flip-card { perspective: 900px; }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          -webkit-transition: -webkit-transform 600ms cubic-bezier(.2,.8,.2,1);
          transition: transform 600ms cubic-bezier(.2,.8,.2,1);
        }
        .group:hover .flip-card-inner, .group:focus-within .flip-card-inner { transform: rotateY(180deg); }
        .group:hover .flip-card-inner .flip-card-front, .group:focus-within .flip-card-inner .flip-card-front { z-index: 1; }
        .group:hover .flip-card-inner .flip-card-back, .group:focus-within .flip-card-inner .flip-card-back { z-index: 2; }
        .flip-card-inner.is-flipped {
          -webkit-transform: rotateY(180deg) !important;
          transform: rotateY(180deg) !important;
        }
        .flip-card-inner.is-flipped .flip-card-front { z-index: 1; }
        .flip-card-inner.is-flipped .flip-card-back { z-index: 2; }
        .flip-card-face {
          position: absolute;
          inset: 0;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.75rem;
        }
        .flip-card-front { transform: rotateY(0deg); z-index: 2; }
        .flip-card-back { transform: rotateY(180deg); z-index: 1; }
        .flip-card-inner.is-flipped .flip-card-front { z-index: 1; }
        .flip-card-inner.is-flipped .flip-card-back { z-index: 2; }
        @media (prefers-reduced-motion: reduce) { .flip-card-inner { -webkit-transition: none !important; transition: none !important; -webkit-transform: none !important; transform: none !important; } }
        @media (hover: none) {
          /* On touch devices avoid accidental hover flips but allow explicit tap toggle via .is-flipped */
          .group:hover .flip-card-inner, .group:focus-within .flip-card-inner { transform: none; }
          .flip-card-inner.is-flipped { -webkit-transform: rotateY(180deg) !important; transform: rotateY(180deg) !important; }
        }
      `}</style>
    </section>
  );
}




