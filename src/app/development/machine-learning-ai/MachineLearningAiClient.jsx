"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, PenTool } from "lucide-react";
import image54 from "@/assets/image54.jpg";
import image55 from "@/assets/image55.jpg";
import Enterpriseweb from "@/assets/Enterpriseweb.png";
import cms from "@/assets/image32.jpg";
import eds from "@/assets/eds.png";
import wds from "@/assets/wds.png";
import apiintegration from "@/assets/apiintegration.png";

const services = [
  {
    title: "Predictive Analytics & Forecasting",
    description:
      "Deploy time-series and regression models to forecast demand, churn, and resource needs so your team can plan with confidence.",
    image: image54,
    bgColor: "bg-linear-to-br from-indigo-500 to-indigo-700",
    Icon: PenTool,
    tags: ["Forecasting", "Time-series", "KPIs"],
    href: "/development/machine-learning-ai/predictive-analytics",
  },
  {
    title: "Computer Vision & Image AI",
    description:
      "From object detection to OCR and image classification, we build robust computer vision pipelines for real-time and batch workloads.",
    image: image55,
    bgColor: "bg-linear-to-br from-pink-400 to-rose-500",
    Icon: PenTool,
    tags: ["CV", "Detection", "OCR"],
    href: "/development/machine-learning-ai/computer-vision",
  },
  {
    title: "NLP, Chatbots & Conversational AI",
    description:
      "Design and integrate chatbots, intent classification and summarization pipelines that improve user experience and reduce support costs.",
    image: cms,
    bgColor: "bg-linear-to-br from-green-400 to-teal-500",
    Icon: PenTool,
    tags: ["NLP", "Chatbot", "Summarization"],
    href: "/development/machine-learning-ai/nlp-chatbots",
  },
  {
    title: "Recommendation Systems",
    description:
      "Personalize product and content recommendations using collaborative and content-based approaches tailored to your data.",
    image: eds,
    bgColor: "bg-linear-to-br from-yellow-400 to-orange-500",
    Icon: PenTool,
    tags: ["Recommender", "Personalization"],
    href: "/development/machine-learning-ai/recommendation-systems",
  },
  {
    title: "Model Ops & Deployment",
    description:
      "Productionize models with CI/CD, monitoring, A/B rollouts and scalable serving so you get reliable ML in production.",
    image: wds,
    bgColor: "bg-linear-to-br from-purple-500 to-indigo-600",
    Icon: PenTool,
    tags: ["MLOps", "CI/CD", "Monitoring"],
    href: "/development/machine-learning-ai/model-ops-development",
  },
  {
    title: "Custom ML Solutions & Consulting",
    description:
      "We consult on data strategy, prototype quickly, and deliver bespoke ML systems aligned to your business goals and compliance needs.",
    image: apiintegration,
    bgColor: "bg-linear-to-br from-sky-400 to-blue-600",
    Icon: PenTool,
    tags: ["Consulting", "Prototyping", "Privacy"],
    href: "/development/machine-learning-ai/custom-ml-solutions",
  },
];

const MachineAiSolutions = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [Enterpriseweb, wds, cms, eds, apiintegration];

  // autoplay controls
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoverPaused, setHoverPaused] = useState(false);

  useEffect(() => {
    if (!isPlaying || hoverPaused) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isPlaying, hoverPaused, heroImages.length]);

  return (
    <section className="relative bg-gray-50 mt-16" style={{ scrollMarginTop: "80px" }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700 font-medium">AI & Machine Learning</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              AI & Machine Learning solutions for smarter products
            </h1>

            <p className="text-base text-gray-600 max-w-lg">
              We design and build AI systems that automate tasks, surface insights, and enable smarter decision making.
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

            <div className="mt-4 flex items-center gap-4">
              <div className="text-sm">
                <div className="text-indigo-600 font-bold">500+</div>
                <div className="text-gray-500">Projects</div>
              </div>
              <div className="text-sm">
                <div className="text-indigo-600 font-bold">98%</div>
                <div className="text-gray-500">Satisfaction</div>
              </div>
              <div className="text-sm">
                <div className="text-indigo-600 font-bold">24/7</div>
                <div className="text-gray-500">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div
              className="rounded-lg overflow-hidden shadow-lg bg-white relative"
              onMouseEnter={() => setHoverPaused(true)}
              onMouseLeave={() => setHoverPaused(false)}
            >
              <Image
                src={heroImages[heroIndex]}
                alt={`Showcase ${heroIndex + 1}`}
                width={1200}
                height={720}
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
                priority={heroIndex === 0}
              />
            </div>

            <div className="mt-3 flex items-center gap-2" aria-hidden>
              {heroImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIndex(i)}
                  className={`w-12 h-8 rounded overflow-hidden border ${i === heroIndex ? 'ring-2 ring-indigo-300' : 'border-gray-200'} focus:outline-none`}
                >
                  <Image src={img} alt={`Thumb ${i + 1}`} width={120} height={80} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SERVICES GRID */}
        <section id="services" className="mt-16" style={{ scrollMarginTop: "80px" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our services</h2>
            <p className="text-sm text-gray-500">AI and ML solutions tailored to your business</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                role="article"
                aria-labelledby={`service-${index}`}
                tabIndex={0}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transform-gpu transition-transform duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 flex flex-col h-full"
              >
                <div className="relative">
                  <Image src={service.image} alt={service.title} width={1200} height={720} className="w-full h-36 sm:h-40 md:h-44 object-cover" loading="lazy" />
                  <div className="absolute left-4 top-4">
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.08 }} className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.bgColor} shadow-lg`} aria-hidden>
                      <service.Icon className="w-6 h-6 text-white" aria-hidden />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <h3 id={`service-${index}`} className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 grow min-h-[72px]">{service.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(service.tags || []).map((t) => (
                      <span key={t} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 text-gray-700 text-sm">{t}</span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <Link href={service.href || '#'} className="text-sm font-semibold text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200" aria-label={`Learn more about ${service.title}`}>
                      Learn more
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle2 className="w-4 h-4 text-green-500" aria-hidden />
                      <span>Trusted</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default MachineAiSolutions;
