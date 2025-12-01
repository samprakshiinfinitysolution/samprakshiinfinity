"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import image36 from "@/assets/image36.jpg";
import image37 from "@/assets/image37.jpg";
import { Star } from "lucide-react";

// Interactive UI extracted from original page.jsx (keeps "use client")
const services = [
    {
        title: "Why Hire Samprakshi Infinity Solution for Third Party Integration?",
        description:
            "We connect your systems to reliable third‑party services (payments, SMS, ID verification) to add functionality quickly and securely with minimal downtime.",
        image: image36,
        imageLeft: true,
        tags: ["Integration", "Security", "Scalable"],
    },
    {
        title: "Get Top Notch Third Party API Integration services",
        description:
            "We implement robust integrations—payment gateways, SMS, social logins and more—so your platforms communicate reliably across services.",
        image: image37,
        imageLeft: false,
        tags: ["Social", "CRM", "Gateways"],
    },
    {
        title: "Payment Gateway Integration",
        description:
            "Seamlessly integrate popular payment providers like Stripe, PayPal, Razorpay and more with secure transaction flows and webhook handling.",
        image: image36,
        imageLeft: true,
        tags: ["Payments", "Stripe", "PayPal"],
    },
    {
        title: "SMS & Notification Gateways",
        description:
            "Connect SMS providers and notification systems to reliably send OTPs, alerts, and transactional messages across regions.",
        image: image37,
        imageLeft: false,
        tags: ["SMS", "Notifications", "OTP"],
    },
    {
        title: "CRM & Marketing Integrations",
        description:
            "Link your platform with CRMs like HubSpot, Salesforce or custom CRMs to sync leads, users, and campaign data.",
        image: image36,
        imageLeft: true,
        tags: ["CRM", "HubSpot", "Salesforce"],
    },
    {
        title: "Analytics & Tracking",
        description:
            "Integrate analytics and tracking platforms to monitor usage, performance and conversion metrics for smarter decisions.",
        image: image37,
        imageLeft: false,
        tags: ["Analytics", "Tracking", "Events"],
    },
];

const faqs = [
    {
        q: "Which third-party APIs do you commonly integrate?",
        a: "We regularly integrate payment gateways, SMS providers, ID verification services, social logins, CRMs, and analytics platforms. If you have a custom provider we can evaluate it and build a connector.",
    },
    {
        q: "How do you ensure security during integration?",
        a: "We follow secure authentication patterns (OAuth, API keys), encrypt sensitive data in transit and at rest, and perform thorough testing including error handling and rate-limiting strategies.",
    },
    {
        q: "Can you integrate with on-premise systems?",
        a: "Yes — we can build hybrid connectors or use secure middleware to bridge on-premise systems with cloud APIs while maintaining security and compliance.",
    },
    {
        q: "What is the typical timeline for an integration?",
        a: "Small integrations (single API) often take 1-2 weeks. Complex integrations or multiple providers may take 4-8+ weeks depending on scope and testing needs.",
    },
    {
        q: "Do you provide post-integration support?",
        a: "Yes, we offer monitoring, maintenance, and support packages to keep integrations healthy and up-to-date.",
    },
];

const ThirdPartyApi = () => {
    const [heroIndex, setHeroIndex] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const heroImages = [image36, image37];

    // Autoplay controls
    const [isPlaying, setIsPlaying] = useState(true);
    const [hoverPaused, setHoverPaused] = useState(false);
    const [manualPaused, setManualPaused] = useState(false);
    const intervalRef = useRef(null);
    const manualTimeoutRef = useRef(null);

    useEffect(() => {
        // clear any existing interval
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (isPlaying && !hoverPaused && !manualPaused) {
            intervalRef.current = setInterval(() => {
                setHeroIndex((prev) => (prev + 1) % heroImages.length);
            }, 4000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isPlaying, hoverPaused, manualPaused, heroImages.length]);

    useEffect(() => {
        return () => {
            const mt = manualTimeoutRef.current;
            const iv = intervalRef.current;
            if (mt) clearTimeout(mt);
            if (iv) clearInterval(iv);
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
                        <span className="text-gray-700 font-medium">Third Party API Integration</span>
                    </nav>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Third-Party API Integration Services</h1>

                    <p className="text-base text-gray-600 max-w-md">
                        We connect your systems to powerful third-party services — payment gateways, SMS & ID verification, social networks and more — with secure, reliable integrations that scale with your business.
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
                            <div className="text-blue-600 font-bold">50+</div>
                            <div className="text-gray-500">Integrations completed</div>
                        </div>
                        <div className="text-sm">
                            <div className="text-blue-600 font-bold">99%</div>
                            <div className="text-gray-500">Integration success</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                    onMouseEnter={() => setHoverPaused(true)}
                    onMouseLeave={() => setHoverPaused(false)}
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
                                    // temporarily pause autoplay after manual selection
                                    setManualPaused(true);
                                    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
                                    manualTimeoutRef.current = setTimeout(() => setManualPaused(false), 5000);
                                }}
                                className={`w-12 h-8 rounded overflow-hidden border ${i === heroIndex ? 'ring-2 ring-blue-300' : 'border-gray-200'} focus:outline-none`}
                            >
                                <Image src={img} alt={`Thumb ${i + 1}`} width={120} height={80} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Service Cards — grid like reference */}
            <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <article
                        key={idx}
                        role="article"
                        aria-labelledby={`svc-${idx}`}
                        className="relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
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

export default ThirdPartyApi;
