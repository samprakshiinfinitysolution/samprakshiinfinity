"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import image17 from "@/assets/image29.jpg";
import image29 from "@/assets/image29.jpg";

// Note: interactive UI extracted from page.jsx — keeps "use client"
const services = [
    {
        title: "Conversion-focused Storefronts",
        description:
            "Design and build product pages, category flows and CTAs optimized for conversion and A/B testing.",
        image: image17,
        tags: ["Conversion", "A/B testing"],
    },
    {
        title: "Checkout & Payments",
        description:
            "Streamline checkout, support multiple payment providers and reduce cart abandonment with smart UX and secure payments.",
        image: image29,
        tags: ["Checkout", "Stripe", "PayPal"],
    },
    {
        title: "Headless & PWA Ecommerce",
        description: "Fast, app-like shopping experiences using headless architectures and progressive web apps to boost engagement and retention.",
        image: image17,
        tags: ["PWA", "Headless"],
    },
    {
        title: "Catalog & Inventory Management",
        description: "Flexible catalog models, bulk import/export and inventory syncing to keep your product data accurate across channels.",
        image: image29,
        tags: ["Catalog", "Inventory"],
    },
    {
        title: "Marketplace & Channel Integrations",
        description: "Connect Amazon, eBay and other marketplaces for unified order and listing management across sales channels.",
        image: image17,
        tags: ["Marketplaces", "Sync"],
    },
    {
        title: "Performance & SEO Engineering",
        description: "Page-speed tuning, structured data, image optimization and accessibility improvements to increase visibility and conversions.",
        image: image29,
        tags: ["SEO", "Performance"],
    },
    {
        title: "International & Multi-currency",
        description: "Localize pricing, taxes and shipping rules while offering multi-currency checkout and region-specific experiences.",
        image: image17,
        tags: ["Localization", "Multi-currency"],
    },
    {
        title: "Migrations & Data Import",
        description: "Safe migration from legacy platforms with data validation, order history and SEO-preserving redirects.",
        image: image29,
        tags: ["Migration", "Data"],
    },
    {
        title: "Managed Hosting, Security & Support",
        description: "SLA-backed hosting, monitoring, backups and security updates so your store stays online and protected.",
        image: image17,
        tags: ["Hosting", "SLA"],
    },
];

const heroImages = [image17, image29];

const faqs = [
    {
        q: "How long does it take to build an ecommerce store?",
        a: "Typical timelines range from 4-12 weeks depending on scope — marketplaces and heavy integrations take longer.",
    },
    {
        q: "Do you migrate data from my existing store?",
        a: "Yes — we migrate products, customers, and orders, and validate data during the rollout.",
    },
    {
        q: "Can you connect multiple payment gateways?",
        a: "We integrate popular gateways and support multi-currency setups for cross-border sales.",
    },
    {
        q: "Will the store be SEO friendly?",
        a: "We follow SEO best practices, structured data, and fast-loading templates to boost search visibility.",
    },
    {
        q: "Do you provide post-launch support?",
        a: "Yes — we offer maintenance and optimization retainers with SLA options.",
    },
];

const EcommerceDevelopmentServices = () => {
    const [heroIndex, setHeroIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef(null);
    const manualTimeoutRef = useRef(null);
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        if (!isPlaying) return;
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setHeroIndex((p) => (p + 1) % heroImages.length);
        }, 4000);

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
        <section className="max-w-7xl mx-auto px-4 mt-16 py-12 bg-[#FFFFFF]" style={{ scrollMarginTop: '80px' }}>
            {/* HERO: compact two-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
                    <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
                       
                        <Link href="/development/web-development" className="hover:underline">Web Development</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700 font-medium">Ecommerce Development Services</span>
                    </nav>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Ecommerce Development Services</h1>

                    <p className="text-base text-gray-600 max-w-md">
                        Let’s bring you a responsive and user-friendly ecommerce store for your business. We deliver highly
                        customized, flexible and easy-to-navigate ecommerce websites designed to improve your customers’ shopping experience.
                    </p>

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
                            <div className="text-blue-600 font-bold">500+</div>
                            <div className="text-gray-500">Stores launched</div>
                        </div>
                        <div className="text-sm">
                            <div className="text-blue-600 font-bold">98%</div>
                            <div className="text-gray-500">Client satisfaction</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}
                >
                    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50">
                        <Image src={heroImages[heroIndex]} alt={`Showcase ${heroIndex + 1}`} width={1200} height={720} className="w-full h-56 sm:h-64 md:h-72 object-cover" />
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
            </div>

            {/* Service Cards (card-grid like enterprise reference) */}
            <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <article key={idx} role="article" aria-labelledby={`svc-${idx}`} className="relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
                            <h3 id={`svc-${idx}`} className="text-xl md:text-2xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed grow min-h-[72px]">{service.description}</p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {(service.tags || []).map((t) => (
                                    <span key={t} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm">{t}</span>
                                ))}
                            </div>

                            <div className="mt-auto"> 
                                <div className="text-sm text-gray-500 flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /> <span>Trusted by clients</span></div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* FAQ Accordion */}
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
                                    <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
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
        </section>
    );
};

export default EcommerceDevelopmentServices;
