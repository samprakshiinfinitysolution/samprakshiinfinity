"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import image50 from "@/assets/image50.jpg";
import image51 from "@/assets/image51.jpg";

const services = [
    {
        title: "Model Serving & Scalable Inference",
        description:
            "Stateless and stateful model serving (REST/gRPC/GRPC-Web) with autoscaling, batching and GPU support to meet production SLAs.",
        image: image50,
        tags: ["Serving", "Inference"],
    },
    {
        title: "CI/CD for ML & Model Registry",
        description:
            "Automated pipelines for training, validation, model versioning and rollout (canary/blue-green) with model registry integration.",
        image: image51,
        tags: ["CI/CD", "Registry"],
    },
    {
        title: "Monitoring, Observability & Drift Detection",
        description:
            "Monitoring for data and concept drift, latency and accuracy regressions, with alerting and automated retraining triggers.",
        image: image50,
        tags: ["Monitoring", "Drift"],
    },
    {
        title: "Data Pipelines & Feature Store",
        description:
            "Reliable data ingestion, transformation and a feature store that ensures feature parity between training and serving environments.",
        image: image51,
        tags: ["Data", "Feature Store"],
    },
    {
        title: "Optimization & Cost Management",
        description:
            "Model compression, batching and autoscaling strategies to optimize inference cost while maintaining performance and latency targets.",
        image: image50,
        tags: ["Optimization", "Cost"],
    },
    {
        title: "Governance, Security & Compliance",
        description:
            "Model lineage, access controls, audit logs and privacy-aware deployment options (on-prem/VPC/edge) to meet regulatory requirements.",
        image: image51,
        tags: ["Governance", "Security"],
    },
];

const heroImages = [image50, image51];

const faqs = [
    {
        q: "What is MLOps and why does it matter?",
        a: "MLOps is the practice of applying DevOps principles to ML: reproducible pipelines, CI/CD, monitoring and governance so models remain reliable in production.",
    },
    {
        q: "How do you ensure model reliability in production?",
        a: "We validate models with shadow testing, runbook automation, alerting on drift/regressions and automated rollback or incremental rollouts to minimize risk.",
    },
    {
        q: "Can you integrate with our existing cloud and infra?",
        a: "Yes — we integrate with major cloud providers, Kubernetes platforms, and on-prem infrastructures using standard APIs, operators and IaC patterns.",
    },
    {
        q: "What are typical costs for operational ML?",
        a: "Costs depend on inference scale, data volumes and retention. We provide cost estimates and optimizations (batching, caching, model sizing) during discovery.",
    },
    {
        q: "How do you manage model versions and rollbacks?",
        a: "We use model registries with immutable versioning and support canary/blue-green rollouts plus automated rollback if metrics degrade.",
    },
];

export default function ModelOpsClient() {
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
                        <Link href="/development/machine-learning-ai" className="hover:underline">Machine Learning & AI</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700 font-medium">ModelOps & ML Engineering</span>
                    </nav>

                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">ModelOps & ML Engineering</h1>

                    <p className="text-base text-gray-600 max-w-md">
                        Design, deploy and operate machine learning systems with production-grade serving, CI/CD, monitoring, feature stores and governance.
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
}
