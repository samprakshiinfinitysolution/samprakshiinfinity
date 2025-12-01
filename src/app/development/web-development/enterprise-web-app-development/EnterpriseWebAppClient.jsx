"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ChevronDown } from "lucide-react";
import image32 from "@/assets/image32.jpg";
import image33 from "@/assets/image33.jpg";

const services = [
    {
        title: "Why Hire Samprakshi Infinity Solution for Enterprise Web App Development?",
        description:
            "We build secure, scalable enterprise web applications that prioritize security and performance while integrating with your existing systems.",
        image: image32,
        imageLeft: true,
        tags: ["Security", "Scalable", "Integration"],
    },
    {
        title: "Get top Notch Enterprise Web App Development Services",
        description:
            "From analytics platforms to custom internal tools, we deliver enterprise-grade web applications tailored to your workflows.",
        image: image33,
        imageLeft: false,
        tags: ["Analytics", "Custom", "Performance"],
    },
    {
        title: "Custom Internal Tools & Dashboards",
        description: "Custom admin dashboards and tooling to streamline enterprise workflows and approvals.",
        image: image32,
        imageLeft: true,
        tags: ["Dashboards", "Automation"],
    },
    {
        title: "High Performance Data Platforms",
        description: "We build data-heavy apps with performant APIs and caching for analytics at scale.",
        image: image33,
        imageLeft: false,
        tags: ["Data", "API", "Caching"],
    },
    {
        title: "Secure Integrations & SSO",
        description: "Enterprise-grade SSO, OAuth, and secure integrations with legacy systems.",
        image: image32,
        imageLeft: true,
        tags: ["SSO", "Integrations"],
    },
    {
        title: "Performance & Reliability",
        description: "SLAs, monitoring, and horizontal scaling to meet enterprise uptime requirements.",
        image: image33,
        imageLeft: false,
        tags: ["SLA", "Monitoring"],
    },
];

const faqs = [
    {
        q: "How long does an enterprise web app take to build?",
        a: "Timelines vary — a small enterprise module can take 6-10 weeks; full platform builds often take 3-6 months depending on integrations and custom features.",
    },
    {
        q: "Do you provide post-launch support?",
        a: "Yes — we offer maintenance, monitoring, and support plans tailored to enterprise SLAs.",
    },
    {
        q: "Can you migrate existing systems into the new app?",
        a: "We handle migrations, data sync, and phased rollouts to minimize downtime and risk.",
    },
    {
        q: "Do you offer SLAs and enterprise support plans?",
        a: "Yes — we offer tiered support plans, 24/7 monitoring and a dedicated support channel for critical incidents.",
    },
    {
        q: "What compliance standards do you support?",
        a: "We can design apps to meet common compliance standards (SOC2, ISO27001) and follow secure development lifecycle practices.",
    },
];

const EnterpriseWebAppDevelopment = () => {
    const [heroIndex, setHeroIndex] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const heroImages = [image32, image33];
    const intervalRef = useRef(null);
    const manualTimeoutRef = useRef(null);

    useEffect(() => {
        // autoplay when isPlaying is true
        if (!isPlaying) return;
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setHeroIndex((p) => (p + 1) % heroImages.length);
        }, 4000);

        return () => clearInterval(intervalRef.current);
    }, [isPlaying, heroImages.length]);

    // cleanup on unmount
    useEffect(() => {
        const mt = manualTimeoutRef.current;
        const ir = intervalRef.current;
        return () => {
            if (ir) clearInterval(ir);
            if (mt) clearTimeout(mt);
        };
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 mt-16 py-10 bg-white" style={{ scrollMarginTop: '80px' }}>
            {/* HERO: compact two-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
                    <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
                        <Link href="/development/web-development" className="hover:underline">Web Development</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700 font-medium">Enterprise Web App Development</span>
                    </nav>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Enterprise Web App Development</h1>

                    <p className="text-base text-gray-600 max-w-md">
                        We build secure, scalable enterprise web applications tailored to your industry — from complex integrations to high-performance data platforms.
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
                            <div className="text-blue-600 font-bold">100+</div>
                            <div className="text-gray-500">Enterprise projects</div>
                        </div>
                        <div className="text-sm">
                            <div className="text-blue-600 font-bold">99%</div>
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

            {/* Service Cards */}
            <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <article key={idx} role="article" aria-labelledby={`svc-${idx}`} className="relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="p-6 sm:p-8 md:p-10 flex flex-col grow">
                            <h3 id={`svc-${idx}`} className="text-xl md:text-2xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">{service.description}</p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {(service.tags || []).map((t) => (
                                    <span key={t} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm">{t}</span>
                                ))}
                            </div>

                            <div className="mt-6"> 
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
        </section>
    );
};

export default EnterpriseWebAppDevelopment;
