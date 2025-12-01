"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import image40 from "@/assets/backofficesupport/customersupport1.png";
import image41 from "@/assets/backofficesupport/customersupport2.png";

const services = [
  {
    title: "Ticket triage & routing",
    description:
      "Fast classification, routing and prioritisation so the right team handles issues quickly.",
    tags: ["triage", "routing"],
  },
  {
    title: "Knowledge base & self-service",
    description:
      "Searchable help articles, FAQ and self-serve flows that reduce support load.",
    tags: ["kb", "self-service"],
  },
  {
    title: "Live chat & automation",
    description:
      "Human + bot handoff, canned responses and chat routing for faster resolution.",
    tags: ["chat", "automation"],
  },
  {
    title: "Escalations & SLAs",
    description:
      "Configurable SLAs, escalations and priority workflows for enterprise clients.",
    tags: ["SLA", "escalation"],
  },
  {
    title: "Reporting & dashboards",
    description:
      "Channel and agent metrics, CSAT and response-time reports for continuous improvement.",
    tags: ["analytics", "CSAT"],
  },
  {
    title: "Onboarding & training",
    description:
      "Agent training, playbooks and knowledge rollout to keep responses consistent and fast.",
    tags: ["training", "playbooks"],
  },
];

const heroImages = [image40, image41];

const faqs = [
  {
    q: "How fast is your typical first response?",
    a: "Initial response targets vary by SLA but we commonly target <24 hour responses for lower tiers and <1 hour for priority/enterprise tiers.",
  },
  {
    q: "Do you provide 24/7 support?",
    a: "Yes — we can staff 24/7 teams, follow-the-sun rosters or blended human+bot coverage depending on needs.",
  },
  {
    q: "Can you integrate with our CRM and ticketing system?",
    a: "We integrate with major CRMs and ticketing platforms (Zendesk, Freshdesk, HubSpot, Salesforce) and custom APIs.",
  },
  {
    q: "Do you measure agent performance and CSAT?",
    a: "We deliver dashboards with CSAT, resolution time, first contact resolution and agent-level metrics.",
  },
  {
    q: "How do you handle data security and PII?",
    a: "We follow data handling best practices, can sign NDAs, and work with encrypted channels and role-based access controls.",
  },
];

export default function CustomerSupportClient() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const manualTimeoutRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (!isPlaying) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => setHeroIndex((p) => (p + 1) % heroImages.length),
      4000
    );
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
    <main
      className="max-w-7xl mx-auto mt-16 px-6 py-12"
      style={{ scrollMarginTop: 80 }}
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/back-office" className="hover:underline">
              Back Office
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">Customer Support</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Customer support & contact center
          </h1>

          <p className="text-base text-gray-600 max-w-md">
            Deliver world-class support with routed tickets, live chat,
            knowledge base and analytics — built for scale and SLA-driven teams.
          </p>

          <div className="flex gap-3 flex-wrap">
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
              <div className="text-blue-600 font-bold">99%</div>
              <div className="text-gray-500">SLA adherence</div>
            </div>
            <div className="text-sm">
              <div className="text-blue-600 font-bold">4.8</div>
              <div className="text-gray-500">Avg. CSAT</div>
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
            <Image
              src={heroImages[heroIndex]}
              alt={`Support showcase ${heroIndex + 1}`}
              width={1200}
              height={720}
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
          </div>

          <div className="mt-3 flex items-center gap-2" aria-hidden>
            {heroImages.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setHeroIndex(i);
                  setIsPlaying(false);
                  if (manualTimeoutRef.current)
                    clearTimeout(manualTimeoutRef.current);
                  manualTimeoutRef.current = setTimeout(
                    () => setIsPlaying(true),
                    5000
                  );
                }}
                className={`w-12 h-8 rounded overflow-hidden border ${
                  i === heroIndex ? "ring-2 ring-blue-300" : "border-gray-200"
                } focus:outline-none`}
              >
                <Image
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  width={120}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="services" className="mt-12">
        <h2 className="text-2xl font-semibold">Core services</h2>
        <p className="text-slate-600 mt-2 mb-6 max-w-2xl">
          We run support as a product: predictable SLAs, routed workflows and
          tooling that reduces friction for customers and agents.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <article
              key={idx}
              className="relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {svc.title}
                </h3>
                <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed grow min-h-[72px]">
                  {svc.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(svc.tags || []).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />{" "}
                    <span>Trusted by clients</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
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
                  <span className="text-sm md:text-base text-gray-800 font-medium">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  id={`faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    open
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
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
