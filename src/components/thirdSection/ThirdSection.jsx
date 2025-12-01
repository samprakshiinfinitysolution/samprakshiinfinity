"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaBullhorn,
  FaBrain,
  FaCogs,
  FaCheck,
} from "react-icons/fa";

// Inline CSS for animations
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes expand {
  from { width: 0; opacity: 0; }
  to { width: 5rem; opacity: 1; }
}
@keyframes gradient-slide {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-fadeIn { animation: fadeIn 1s ease forwards; }
.animate-slideUp { animation: slideUp 1s ease forwards; }
.animate-expand { animation: expand 0.8s ease-out forwards; }
.animate-gradient-slide {
  background-size: 200% 200%;
  animation: gradient-slide 6s ease infinite;
}

/* slow rotate used for SVG accents (will be disabled via inline style when reduced-motion is set) */
/* slow-rotate keyframes will be defined inside each SVG to avoid global parser issues */

/* Hacker-card neon border and hover styles */
.hacker-card { position: relative; overflow: hidden; }
.hacker-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: 0 0 28px rgba(16,185,129,0.12), 0 0 48px rgba(16,185,129,0.06), 0 0 6px rgba(99,102,241,0.04) inset;
  opacity: 0;
  transform: scale(0.98);
  transition: opacity .36s ease, transform .36s ease, filter .36s ease;
  mix-blend-mode: screen;
}
.hacker-card:hover::before,
.group:hover .hacker-card::before {
  opacity: 1;
  transform: scale(1);
  filter: blur(6px) saturate(120%);
}
.hacker-title { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace; letter-spacing: 0.2px; }
.hacker-corner { position: absolute; right: 8px; top: 8px; width: 4px; height: 36%; background: linear-gradient(180deg, #00ff99, #66ffcc); opacity: .12; transform: skewX(-12deg); pointer-events: none; }

.hacker-card .glow-spot { position: absolute; right: -18px; top: -18px; width: 72px; height: 72px; border-radius: 999px; background: radial-gradient(circle at 30% 30%, rgba(0,255,153,0.12), transparent 40%); pointer-events: none; z-index:0 }

/* SVG accent subtle hover motion (prefers-reduced-motion respected via media query) */
.svg-accent { transform-origin: 50% 50%; transition: transform 700ms cubic-bezier(.2,.9,.2,1), opacity 420ms ease; will-change: transform, opacity; }
.group:hover .svg-accent { transform: translateY(-6px) rotate(4deg) scale(1.02); opacity: 0.96; }
@media (prefers-reduced-motion: reduce) {
  .svg-accent { transition: none !important; transform: none !important; }
  .group:hover .svg-accent { transform: none !important; }
}

/* 3D flip card */
.card-3d { perspective: 1100px; }
.card-inner { transform-style: preserve-3d; transition: transform 700ms cubic-bezier(.2,.9,.2,1); position: relative; }
.group:hover .card-inner { transform: rotateY(180deg); }
.card-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; position: relative; }
.card-back { position: absolute; inset: 0; transform: rotateY(180deg); display: flex; align-items: center; justify-content: center; padding: 1rem; }
.card-back .back-content { text-align: center; }
.back-cta { display: inline-flex; gap: .5rem; align-items: center; padding: .6rem 1rem; border-radius: .75rem; background: rgba(255,255,255,0.9); color: #0f172a; font-weight: 600; }
@media (prefers-reduced-motion: reduce) {
  .card-inner { transition: none !important; }
  .group:hover .card-inner { transform: none !important; }
}

`;

/* subtle rotate for SVG accents (respects prefers-reduced-motion in JS) */

// logo-derived brand blues
const themeColor = "#0E57B8"; // mid blue
const themeBright = "#2196FF"; // bright blue
const themeHighlight = "#7BE1FF"; // highlight/cyan

const services = [
  {
    icon: <FaMobileAlt size={28} color={themeColor} />,
    title: "App Development",
    desc: "Beautiful, high-performance mobile apps for iOS and Android.",
  },
  {
    icon: <FaLaptopCode size={28} color={themeColor} />,
    title: "Web Development",
    desc: "Responsive and robust websites built with modern stacks.",
  },
  {
    icon: <FaPalette size={28} color={themeColor} />,
    title: "UI/UX Design",
    desc: "Intuitive, engaging, and user-centered design experiences.",
  },
  {
    icon: <FaBullhorn size={28} color={themeColor} />,
    title: "Digital Marketing",
    desc: "ROI-focused marketing strategies to grow your online presence.",
  },
  {
    icon: <FaBrain size={28} color={themeColor} />,
    title: "AI & Analytics",
    desc: "Unlock business intelligence with machine learning and data insights.",
  },
  {
    icon: <FaCogs size={28} color={themeColor} />,
    title: "Custom Software",
    desc: "Bespoke software tailored to your business logic and operations.",
  },
];

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    try {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      return false;
    }
  });

  // simple count-up state for the micro-stats
  const [counts, setCounts] = useState([0, 0, 0]);
  const rafRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  // animate counts when section becomes visible (respecting reduced motion)
  useEffect(() => {
    if (!isVisible || prefersReducedMotion) return;

    const targets = [8, 150, 80];
    const duration = 900; // ms
    const start = performance.now();

    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = targets.map((v) => Math.floor(v * eased));
      setCounts(next);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, prefersReducedMotion]);

  return (
    <>
      <style>{styles}</style>
      <section
        ref={sectionRef}
  className="min-h-screen px-6 py-24 sm:px-10 md:px-20 bg-linear-to-br from-white via-slate-50 to-slate-100 relative overflow-hidden"
      >
        {/* subtle background pattern */}
        <svg className="absolute -right-40 top-10 w-96 opacity-10 pointer-events-none" viewBox="0 0 600 600" fill="none" aria-hidden>
          <circle cx="300" cy="300" r="200" fill="url(#gradBg)" />
          <defs>
            <linearGradient id="gradBg" x1="0" x2="1">
              <stop stopColor="#0E57B8" stopOpacity="0.08" />
              <stop offset="1" stopColor="#2196FF" stopOpacity="0.03" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Headline + CTA + extra content */}
          <div className="pt-6">
            <p className="inline-flex items-center px-3 py-1 rounded-full font-medium text-sm mb-4" style={{ backgroundColor: 'rgba(14,87,184,0.08)', color: '#0E57B8' }}>What we do</p>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 ${isVisible ? 'animate-slideUp' : ''}`}>
              Build modern products
              <span className="block mt-2" style={{ color: themeColor }}>that scale your business</span>
            </h2>

            <p className="text-slate-600 max-w-xl mb-6">We combine design, engineering and growth to deliver end-to-end digital products — web, mobile and AI solutions — with measurable impact.</p>

            <div className="flex flex-wrap gap-4">
              <a href="/contact-us" className="inline-flex items-center gap-2 text-white px-5 py-3 rounded-lg font-semibold shadow hover:-translate-y-0.5 transition-transform focus:outline-none focus-visible:ring-4" style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff', backgroundRepeat: 'no-repeat' }}>Get a consultation
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/services" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg font-medium hover:underline" style={{ color: themeColor }}>See all services</a>
            </div>

            {/* Additional content: micro-stats, benefits, tech stack */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg" role="group" aria-label="agency statistics">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-slate-900">{counts[0]}{counts[0] >= 1 ? '+' : ''}</div>
                <div className="text-xs text-slate-500">Years</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-slate-900">{counts[1]}{counts[1] >= 10 ? '+' : ''}</div>
                <div className="text-xs text-slate-500">Projects</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-slate-900">{counts[2]}{counts[2] >= 10 ? '+' : ''}</div>
                <div className="text-xs text-slate-500">Clients</div>
              </div>
            </div>

            <ul className="mt-6 space-y-2 max-w-xl">
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: themeColor }}><FaCheck /></span>
                <span className="text-sm text-slate-600">End-to-end product delivery from discovery to launch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: themeColor }}><FaCheck /></span>
                <span className="text-sm text-slate-600">Design-led engineering with measurable KPIs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: themeColor }}><FaCheck /></span>
                <span className="text-sm text-slate-600">Scale-first architecture and cloud-native ops</span>
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono px-2 py-1 bg-slate-100 text-slate-800 rounded">React</span>
              <span className="text-xs font-mono px-2 py-1 bg-slate-100 text-slate-800 rounded">Next.js</span>
              <span className="text-xs font-mono px-2 py-1 bg-slate-100 text-slate-800 rounded">Node</span>
              <span className="text-xs font-mono px-2 py-1 bg-slate-100 text-slate-800 rounded">Tailwind</span>
              <span className="text-xs font-mono px-2 py-1 bg-slate-100 text-slate-800 rounded">TypeScript</span>
              <span className="text-xs font-mono px-2 py-1 bg-slate-100 text-slate-800 rounded">AWS</span>
            </div>

            <p className="mt-6 text-xs text-slate-500">Trusted by startups and enterprises for secure, reliable delivery.</p>
          </div>

          {/* Right: Mosaic of feature tiles with stagger */}
          <div className="grid grid-cols-2 gap-6 translate-y-2">
            {services.map((service, i) => (
              <article
                key={service.title}
                className={`group hacker-card relative overflow-hidden rounded-3xl p-5 bg-white/60 backdrop-blur-md border border-white/20 hover:shadow-2xl transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                aria-labelledby={`svc-${i}`}
              >
                {/* gradient glow shadow (behind content) */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-3xl z-0 pointer-events-none transform transition-all duration-700 scale-95 opacity-0 group-hover:opacity-70 group-hover:scale-100"
                  style={{
                    background: `linear-gradient(90deg, ${themeColor}33, ${themeBright}33, ${themeHighlight}33)`,
                    filter: 'blur(26px)'
                  }}
                />
                <div className="glow-spot" aria-hidden />

                <div className="card-3d">
                  <div className="card-inner">
                    <div className="card-face card-front relative z-10">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl mb-3" style={{ background: `linear-gradient(135deg, ${themeColor}, ${themeBright})` }}>
                        {React.cloneElement(service.icon, { color: '#fff', size: 18 })}
                      </div>
                      <h3 id={`svc-${i}`} className="text-sm font-semibold text-slate-900 hacker-title">{service.title}</h3>
                      <p className="text-sm text-slate-600 mt-2">{service.desc}</p>
                    </div>

                    <div className="card-face card-back">
                      <div className="back-content">
                        <p className="text-sm text-slate-700 mb-3">{service.title} — tailored solutions to accelerate your roadmap. We handle design, engineering and deployment.</p>
                        <a href="/services" className="back-cta" aria-label={`Explore ${service.title}`} style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff' }}>Explore
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hacker-corner" aria-hidden />
                {/* decorative SVG accent per card: concentric rings + glyph, unique IDs per card */}
                <svg
                  className="absolute -right-6 -top-6 w-28 h-28 pointer-events-none z-0"
                  viewBox="0 0 120 120"
                  fill="none"
                  aria-hidden
                >
                    <defs>
                    <radialGradient id={`cardGrad-${i}`} cx="0.35" cy="0.28" r="0.9">
                      <stop offset="0%" stopColor={themeColor} stopOpacity="0.28" />
                      <stop offset="45%" stopColor={themeBright} stopOpacity="0.09" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id={`cardStroke-${i}`} x1="0" x2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                    <filter id={`cardSoft-${i}`} x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
                    </filter>
                  </defs>

                  <g className="svg-accent" style={{ transformOrigin: '50% 50%' }}>
                    {/* soft glow */}
                    <circle cx="70" cy="30" r="36" fill={`url(#cardGrad-${i})`} filter={`url(#cardSoft-${i})`} />

                    {/* hex ring */}
                    <g transform="translate(10,6)">
                      <path d="M50 6 L86 30 L86 74 L50 98 L14 74 L14 30 Z" fill="none" stroke={`url(#cardStroke-${i})`} strokeWidth="1.6" opacity="0.9" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M50 16 L78 34 L78 66 L50 84 L22 66 L22 34 Z" fill="none" stroke={`url(#cardStroke-${i})`} strokeWidth="0.9" opacity="0.6" />
                    </g>

                    {/* orbiting dots (decorative) */}
                    <g transform="translate(20,20)" opacity="0.95">
                      <circle cx="70" cy="10" r="2.6" fill="#fff" opacity="0.08" />
                      <circle cx="92" cy="38" r="1.6" fill="#fff" opacity="0.06" />
                      <circle cx="58" cy="64" r="2" fill="#fff" opacity="0.05" />
                    </g>
                  </g>
                </svg>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
