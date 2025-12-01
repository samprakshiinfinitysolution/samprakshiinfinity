"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ChevronDown } from "lucide-react";
import image40 from "@/assets/marketing/seo1.png";
import image41 from "@/assets/marketing/seo2.png";

const services = [
  { title: "Technical SEO audits", description: "Crawl, index and performance fixes that clear blockers and improve search presence.", image: image40, tags: ["Audit", "Fixes"] },
  { title: "Keyword research & strategy", description: "Data-driven keyword maps aligned to business goals and content opportunities.", image: image41, tags: ["Research", "Strategy"] },
  { title: "On-page & schema", description: "Optimized templates, metadata and structured data to improve SERP relevance.", image: image40, tags: ["On-page", "Schema"] },
  { title: "Content strategy & briefs", description: "Briefs, content hubs and editorial planning to capture high-intent queries.", image: image41, tags: ["Content", "Briefs"] },
  { title: "Link outreach & PR", description: "Authority-building through outreach, partnerships and digital PR.", image: image40, tags: ["Outreach", "PR"] },
  { title: "Local & technical optimisation", description: "Local citations, Core Web Vitals improvements and monitoring for long-term growth.", image: image41, tags: ["Local", "CWV"] },
];

const heroImages = [image40, image41];

const faqs = [
  { q: "How long until we see organic growth?", a: "SEO is a medium-term channel — typically 3–6 months to see meaningful gains, depending on site health and content velocity." },
  { q: "Do you handle international / multilingual sites?", a: "Yes — we implement hreflang, geo-targeting and language-aware content strategies." },
  { q: "Can you fix Core Web Vitals?", a: "We audit performance, defer non-critical assets and recommend infra improvements to improve CWV scores." },
  { q: "How do you measure link quality?", a: "We evaluate link relevance, traffic potential and domain authority — focusing on high-signal placements." },
  { q: "Do you provide content production?", a: "We produce briefs and can manage writers or integrate with your editorial team for execution." },
];

export default function SeoClient() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const manualTimeoutRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (!isPlaying) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setHeroIndex((p) => (p + 1) % heroImages.length), 4000);
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  useEffect(() => {
    const mt = manualTimeoutRef.current;
    const ir = intervalRef.current;
    return () => {
      if (ir) clearInterval(ir);
      if (mt) clearTimeout(mt);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 mt-16 py-12 bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/digital-marketing" className="hover:underline">Digital Marketing</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">SEO</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">SEO Services</h1>

          <p className="text-base text-gray-600 max-w-md">Our SEO services blend technical optimisation, content strategy and outreach to increase visibility for valuable search queries and drive qualified traffic.</p>

          <div className="flex flex-wrap gap-3 items-center">
            <Link href="/contact-us">
              <button
                type="button"
                aria-label="Get a consultation"
                className="group  w-auto inline-flex items-center justify-center gap-3 hero-cta-gradient focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none text-white font-semibold rounded-md px-6 py-3 shadow-md transition-colors"
              >
                <span>Get a Consultation</span>
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
            </Link>
          </div>

          <div className="mt-4 flex items-center gap-6">
            <div className="text-sm">
              <div className="text-blue-600 font-bold">50+</div>
              <div className="text-gray-500">Audits completed</div>
            </div>
            <div className="text-sm">
              <div className="text-blue-600 font-bold">20%</div>
              <div className="text-gray-500">Avg. traffic uplift</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
          <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50">
            <Image src={heroImages[heroIndex]} alt={`Showcase ${heroIndex + 1}`} width={1200} height={720} className="w-full h-56 sm:h-64 md:h-72 object-cover" />
          </div>

          <div className="mt-3 flex items-center gap-2" aria-hidden>
            {heroImages.map((img, i) => (
              <button key={i} onClick={() => { setHeroIndex(i); setIsPlaying(false); if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current); manualTimeoutRef.current = setTimeout(() => setIsPlaying(true), 5000); }} className={`w-12 h-8 rounded overflow-hidden border ${i === heroIndex ? "ring-2 ring-blue-300" : "border-gray-200"} focus:outline-none`}>
                <Image src={img} alt={`Thumb ${i + 1}`} width={120} height={80} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <article key={idx} role="article" aria-labelledby={`svc-${idx}`} className="relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
              <h3 id={`svc-${idx}`} className="text-xl md:text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed grow min-h-[72px]">{service.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(service.tags || []).map((t) => (<span key={t} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm">{t}</span>))}
              </div>

              <div className="mt-auto">
                <div className="text-sm text-gray-500 flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /> <span>Trusted by clients</span></div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Frequently asked questions</h2>
        <div className="mt-4 border border-gray-100 rounded-lg overflow-hidden">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className="first:rounded-t-lg last:rounded-b-lg">
                <button type="button" className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200" aria-expanded={open} aria-controls={`faq-panel-${i}`} onClick={() => setOpenFaq(open ? null : i)}>
                  <span className="text-sm md:text-base text-gray-800 font-medium">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                </button>

                <motion.div id={`faq-panel-${i}`} initial={{ height: 0, opacity: 0 }} animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.24 }} className="px-6 overflow-hidden bg-white">
                  <div className="py-4 text-sm text-gray-600">{f.a}</div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
