"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineStar,
} from "react-icons/hi";
import { MdEmojiEvents } from "react-icons/md";
import statusbg from "@/images/statusbg.jpg";

const stats = [
  {
    icon: HiOutlineCheckCircle,
    value: 101,
    label: "Projects Completed",
    color: "#0E57B8", // brand-primary
  },
  {
    icon: HiOutlineUserGroup,
    value: 785,
    label: "Expert Consultants",
    color: "#2196FF", // brand-bright
  },
  {
    icon: HiOutlineStar,
    value: 896,
    label: "5 Stars Rating",
    color: "#7BE1FF", // brand-highlight
  },
  {
    icon: MdEmojiEvents,
    value: 49,
    label: "Awards Won",
    color: "#062C56", // brand-deep
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="relative z-10 overflow-hidden bg-center bg-cover md:bg-fixed"
      aria-labelledby="stats-heading"
      style={{
        backgroundImage: `url(${statusbg.src})`,
      }}
    >
      {/* decorative blobs for depth */}
      <svg
        className="absolute -top-24 -left-24 w-96 opacity-30 pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop stopColor="#FFFFFF" stopOpacity="0.12" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="300" fill="url(#g1)" />
      </svg>
      <svg
        className="absolute -bottom-32 -right-32 w-96 opacity-20 pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="600" rx="120" fill="url(#g2)" />
      </svg>

      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium"
              style={{
                backgroundImage: "linear-gradient(90deg,#0E57B8,#2196FF)",
                boxShadow: "0 6px 18px rgba(14,87,184,0.12)",
              }}
            >
              Trusted by clients
            </span>
          </div>

          <h2
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Our Impact — Trusted Results
          </h2>

          <p className="mt-3 text-white/95 max-w-2xl mx-auto text-base">
            We partner with growth-minded companies to deliver measurable
            results. Below are key metrics that demonstrate the scale and trust
            our clients place in us.
          </p>
        </div>
        <div>
          <div
            ref={ref}
            role="list"
            aria-label="Company statistics"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map(({ icon: Icon, value, label, color }, i) => (
              <div
                key={i}
                role="listitem"
                aria-label={label}
                tabIndex={0}
                className={`relative group overflow-hidden rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center transition-transform duration-500 motion-safe:duration-500 motion-reduce:transition-none shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/20 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* soft colored glow (appears on hover/focus) */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 rounded-2xl blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100"
                  style={{
                    background: `radial-gradient(closest-side, ${color}40, transparent 40%)`,
                  }}
                />

                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${color}, rgba(255,255,255,0.0))`,
                  }}
                  aria-hidden
                />

                <div className="rounded-full p-1 mb-4 flex items-center justify-center">
                  <div
                    className="rounded-full w-16 h-16 flex items-center justify-center"
                    style={{
                      background: color,
                      boxShadow: `0 6px 18px ${color}40`,
                    }}
                  >
                    <Icon className="text-2xl text-white" aria-hidden />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none drop-shadow-lg">
                  {inView ? (
                    <CountUp start={0} end={value} duration={2} separator="," />
                  ) : (
                    0
                  )}
                  <span className="ml-3 text-2xl sm:text-2xl md:text-3xl text-white/90">
                    +
                  </span>
                </div>
                <p className="mt-3 text-base text-white font-semibold">
                  {label}
                </p>

                {/* subtle description (optional) */}
                <p className="mt-3 text-sm text-white/80 max-w-56">
                  Trusted by clients across industries. Numbers update when
                  visible.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          {/* <a
            href="/about-us"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-lg transform hover:-translate-y-0.5"
            aria-label="Learn more about our work"
            style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff' }}
          >
            Explore Our Case Studies
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a> */}

          <button
            type="button"
            aria-label="Get a consultation"
            className="group  w-auto inline-flex items-center justify-center gap-3 hero-cta-gradient focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none text-white font-semibold rounded-md px-6 py-3 shadow-md transition-colors"
          >
            <span>Explore Our Case Studies</span>
            <svg
              className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-2"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Hidden live region to announce final counts to assistive tech */}
        <div className="sr-only" aria-live="polite">
          {inView
            ? `Projects ${stats[0].value}, Consultants ${stats[1].value}, Rating ${stats[2].value}, Awards ${stats[3].value}`
            : ""}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
