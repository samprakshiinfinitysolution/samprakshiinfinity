"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import image40 from "@/assets/backofficesupport/ecommerce1.png";
import image41 from "@/assets/backofficesupport/ecommerce2.png";

const heroImages = [image40, image41];

const services = [
  { title: "Listing Optimization", description: "Improve titles, bullets and A+ modules to increase conversion and visibility.", tags: ["SEO", "A+"] },
  { title: "Pricing & Buy Box", description: "Dynamic pricing strategies and Buy Box management to improve competitiveness.", tags: ["pricing", "buy-box"] },
  { title: "Order & Return Ops", description: "Order processing, returns handling and policy management to protect seller metrics.", tags: ["operations", "returns"] },
  { title: "Customer & Seller Support", description: "Managed support workflows and escalation handling to keep CSAT high.", tags: ["support", "CSAT"] },
  { title: "Performance & Account Health", description: "Account health monitoring, policy compliance and proactive remediation.", tags: ["health", "compliance"] },
  { title: "Marketplace Expansion", description: "Cross-border setup and multi-marketplace listing localization and logistics.", tags: ["global", "localization"] },
];

const faqs = [
  { q: "How long until listings improve?", a: "SEO and listing changes typically show measurable uplift within 4–8 weeks depending on traffic and competition." },
  { q: "Can you manage multiple marketplaces?", a: "Yes — we localize listings, handle VAT/GS and coordinate FBA for multi-market operations." },
  { q: "Do you support returns and chargebacks?", a: "We manage returns workflows and help minimize chargebacks through policy enforcement and QA." },
];

export default function EcommerceSupportClient() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const manualTimeoutRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (!isPlaying) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 4000);
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
    <main className="max-w-7xl mx-auto mt-16 px-6 py-12" style={{ scrollMarginTop: 80 }}>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/back-office" className="hover:underline">Back Office</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">Ecommerce Support</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Ecommerce operations & marketplace support</h1>

          <p className="text-base text-gray-600 max-w-md">End-to-end ecommerce support: listings, pricing, operations and account health to keep your storefronts converting and compliant.</p>

          <div className="flex gap-3 flex-wrap">
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
          </div>

          <div className="mt-4 flex items-center gap-6">
            <div className="text-sm">
              <div className="text-blue-600 font-bold">99%</div>
              <div className="text-gray-500">Data accuracy target</div>
            </div>
            <div className="text-sm">
              <div className="text-blue-600 font-bold">SLAs</div>
              <div className="text-gray-500">Custom SLAs available</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
          <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50">
            <Image src={heroImages[heroIndex]} alt={`Ecommerce showcase ${heroIndex + 1}`} width={1200} height={720} className="w-full h-56 sm:h-64 md:h-72 object-cover" />
          </div>

          <div className="mt-3 flex items-center gap-2" aria-hidden>
            {heroImages.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setHeroIndex(i);
                  setIsPlaying(false);
                  if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
                  manualTimeoutRef.current = setTimeout(() => setIsPlaying(true), 5000);
                }}
                className={`w-12 h-8 rounded overflow-hidden border ${i === heroIndex ? 'ring-2 ring-blue-300' : 'border-gray-200'} focus:outline-none`}
              >
                <Image src={img} alt={`Thumb ${i + 1}`} width={120} height={80} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="services" className="mt-12">
        <h2 className="text-2xl font-semibold">Core services</h2>
        <p className="text-slate-600 mt-2 mb-6 max-w-2xl">Operational ecommerce services to keep listings healthy, pricing competitive and accounts policy-compliant.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <article key={idx} className="relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{svc.title}</h3>
                <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed grow min-h-[72px]">{svc.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(svc.tags || []).map((t) => (
                    <span key={t} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm">{t}</span>
                  ))}
                </div>

                <div className="mt-auto"> 
                  <div className="text-sm text-gray-500 flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /> <span>Trusted by sellers</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Frequently asked questions</h2>
        <div className="mt-4 border border-gray-100 rounded-lg overflow-hidden">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className="first:rounded-t-lg last:rounded-b-lg">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <span className="text-sm md:text-base text-gray-800 font-medium">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </button>

                <motion.div
                  id={`faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.24 }}
                  className="px-6 overflow-hidden bg-white"
                >
                  <div className="py-4 text-sm text-gray-600">{f.a}</div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
