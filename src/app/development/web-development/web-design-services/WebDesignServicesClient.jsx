"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Layout, Monitor, Star, ArrowRight, ChevronDown, PenTool } from "lucide-react";
import image30 from "@/assets/image30.jpg";
import image31 from "@/assets/image31.jpg";

const services = [
    {
        title: "Responsive Web Design",
        description:
            "Designs that adapt to every screen — we prioritize layout, performance and accessibility to maximize conversions across devices.",
        image: image30,
        Icon: Layout,
        tags: ["Responsive", "Accessibility", "Performance"],
    },
    {
        title: "CMS & Content Platforms",
        description:
            "Custom CMS solutions and headless integrations for teams that need flexible content workflows and editorial control.",
        image: image31,
        Icon: Monitor,
        tags: ["Headless CMS", "Workflows", "Integrations"],
    },
    {
        title: "Ecommerce & Conversion",
        description:
            "Shop experiences that convert: fast product pages, streamlined checkout and analytics-driven optimization.",
        image: image30,
        Icon: PenTool,
        tags: ["E‑commerce", "Checkout", "Optimization"],
    },
    {
        title: "Brand & Visual Systems",
        description:
            "Design systems, UI kits and visual language that keep your product consistent and on-brand as you scale.",
        image: image31,
        Icon: PenTool,
        tags: ["Design System", "Brand", "Guidelines"],
    },
    {
        title: "Web Performance & SEO",
        description:
            "Performance engineering and SEO fundamentals — faster load times, structured data and measurable organic growth.",
        image: image30,
        Icon: Layout,
        tags: ["SEO", "Speed", "Analytics"],
    },
    {
        title: "Accessibility & Compliance",
        description:
            "We audit and remediate accessibility issues (WCAG) and help keep your site inclusive and legally resilient.",
        image: image31,
        Icon: Monitor,
        tags: ["WCAG", "A11y", "Testing"],
    },
];

const WebDesignServices = () => {
    const [heroIndex, setHeroIndex] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const heroImages = [image30, image31];

    const faqs = [
        {
            q: "How long does a typical website project take?",
            a: "Most small brochure sites take 3-6 weeks from kickoff to launch. Larger CMS or eCommerce projects typically take 8-16+ weeks depending on scope and integrations.",
        },
        {
            q: "Do you provide SEO and performance optimization?",
            a: "Yes — our standard build includes basic on-page SEO, semantic markup, and performance best practices. We also offer advanced SEO and ongoing optimization as add-ons.",
        },
        {
            q: "Can you integrate with my existing systems (CRM, payment gateways)?",
            a: "Absolutely. We integrate with popular CRMs, payment providers, and third-party APIs — and we can build custom connectors when needed.",
        },
        {
            q: "How much does a website cost?",
            a: "Costs vary by scope. A simple brochure site typically starts at a few thousand dollars, while custom platforms or eCommerce solutions will be higher. We provide a detailed proposal after a brief discovery call.",
        },
        {
            q: "Do you offer post-launch support and maintenance?",
            a: "Yes — we offer maintenance plans for security updates, backups, performance monitoring, and content changes. We can tailor a plan to your needs and SLA requirements.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 mt-16 py-10 bg-white" style={{ scrollMarginTop: '80px' }}>
            {/* HERO: compact two-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
                    <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
                        
                        <Link href="/development/web-development" className="hover:underline">Web Development</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700 font-medium">Web Design Services</span>
                    </nav>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">The best web design services</h1>

                    <p className="text-base text-gray-600 max-w-md">
                        We create high-performing, SEO-friendly websites that convert visitors into customers. Design, speed and usability are our focus.
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
                            <div className="text-blue-600 font-bold">200+</div>
                            <div className="text-gray-500">Websites built</div>
                        </div>
                        <div className="text-sm">
                            <div className="text-blue-600 font-bold">99%</div>
                            <div className="text-gray-500">Client satisfaction</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50">
                        <Image src={heroImages[heroIndex]} alt={`Showcase ${heroIndex + 1}`} width={1200} height={720} className="w-full h-56 sm:h-64 md:h-72 object-cover" />
                    </div>

                    <div className="mt-3 flex items-center gap-2" aria-hidden>
                        {heroImages.map((img, i) => (
                            <button key={i} onClick={() => setHeroIndex(i)} className={`w-12 h-8 rounded overflow-hidden border ${i === heroIndex ? 'ring-2 ring-blue-300' : 'border-gray-200'} focus:outline-none`}>
                                <Image src={img} alt={`Thumb ${i + 1}`} width={120} height={80} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Service Cards — alternate unique visual cards */}
            <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <article
                        key={idx}
                        role="article"
                        aria-labelledby={`svc-${idx}`}
                        className="relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
                            <h3 id={`svc-${idx}`} className="text-xl md:text-2xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed grow min-h-[72px]">{service.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
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

export default WebDesignServices;
