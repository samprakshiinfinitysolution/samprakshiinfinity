"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ChevronDown } from "lucide-react";
import image60 from "@/assets/image60.jpg";
import image61 from "@/assets/image61.jpg";

// export const metadata = {
//   title: "Chrome Cast App Development - Samprakshi Infinity Solution",
//   description:
//     "Get innovative and high-performance Chrome Cast app development services at Samprakshi Infinity Solution. Reach your audience with seamless media casting solutions.",
//   keywords:
//     "Chrome Cast app development, digital media apps, app development, Chromecast, Samprakshi Infinity Solution",
//   alternates: {
//     canonical:
//       "https://www.samprakshiinfinitysolution.com/app-development/chrome-cast-app-development",
//   },
// };
const services = [
    {
        title: "Chromecast App Strategy & Design",
        description: "Discovery, UX design and playback flow planning to ensure smooth casting experiences.",
        image: image60,
        tags: ["UX", "Playback"],
    },
    {
        title: "Native Cast SDK Integration",
        description: "Integrate Google Cast SDK for seamless device discovery, media control and remote playback.",
        image: image61,
        tags: ["Cast SDK", "Integration"],
    },
    {
        title: "Multi-Device Sync & Queues",
        description: "Group playback, shared queues and remote control features for synchronized experiences.",
        image: image60,
        tags: ["Sync", "Queue"],
    },
    {
        title: "Analytics & Monitoring",
        description: "Playback analytics, QoS monitoring and error reporting to keep casting experiences reliable.",
        image: image61,
        tags: ["Analytics", "Monitoring"],
    },
    {
        title: "Custom UI & Remote Control",
        description: "Branded remote UI, custom controls and accessibility features for TV interactions.",
        image: image60,
        tags: ["UI", "Accessibility"],
    },
    {
        title: "Support & Enterprise Deployments",
        description: "Maintenance, store submission guidance and enterprise SLAs for mission-critical media apps.",
        image: image61,
        tags: ["SLA", "Support"],
    },
];

const heroImages = [image60, image61];

const faqs = [
    { q: "Can you support multiple TV platforms?", a: "We primarily implement Google Cast, and can integrate with companion web/TV apps for broader platform support." },
    { q: "How do you handle DRM/protected media?", a: "We integrate secure streaming and DRM providers as part of the playback pipeline when required." },
    { q: "Is multi-room/group playback possible?", a: "Yes — we implement sync protocols and queue management for grouped playback scenarios." },
    { q: "Do you provide analytics for playback?", a: "We add telemetry for playback events, errors and engagement metrics to help optimize UX." },
    { q: "What about remote control accessibility?", a: "We design large-target controls, focus management and voice-friendly actions for TV remotes." },
];

const CromeCastAppDevelopment = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
                    <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
                        <Link href="/development/app-development" className="hover:underline"> App Development</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700 font-medium">Chrome Cast App Development</span>
                    </nav>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Chrome Cast & Media Apps</h1>

                    <p className="text-base text-gray-600 max-w-md">
                        Stream content to TVs with reliable casting, rich playback controls and branded TV UIs.
                    </p>

                    <div className="flex flex-wrap gap-3 items-center">
                        {/* <Link href="/contact-us" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:brightness-105 shadow-sm focus-visible:ring-2 focus-visible:ring-blue-200">
                            Get a quote
                        </Link> */}
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

                        {/* <Link href="#services" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-gray-700 bg-white hover:bg-gray-50">
                            Explore services
                        </Link> */}
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

export default CromeCastAppDevelopment;
