"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Briefcase, PenTool, FileText, ShoppingCart, Plug, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Enterpriseweb from "@/assets/webdevelopement/webdesign1.png";
import cms from "@/assets/webdevelopement/webdesign2.png";
import eds from "@/assets/webdevelopement/webdesign3.png";
import wds from "@/assets/webdevelopement/webdesign4.png";
import apiintegration from "@/assets/webdevelopement/webdesign5.png";

const services = [
  {
    title: "Enterprise Web App Development",
    description:
      "Build powerful, scalable, and secure enterprise web applications tailored to your business needs. We deliver custom solutions that streamline operations, optimize workflows, and manage complex data with cutting-edge technology.",
    image: Enterpriseweb,
    imageLeft: true,
  bgColor: "bg-linear-to-br from-[#05C7F2] to-[#0392BF]",
    link: "/development/web-development/enterprise-web-app-development",
    Icon: Briefcase,
  },
  {
    title: "Web Design Services",
    description:
      "Make your online presence unforgettable. From stunning business websites to captivating personal blogs, our award-winning designers create visually impressive, user-friendly designs that convert visitors into customers.",
    image: wds,
    imageLeft: false,
  bgColor: "bg-linear-to-br from-[#F28379] to-[#D94436]",
    link: "/development/web-development/web-design-services",
    Icon: PenTool,
  },
  {
    title: "Content Management System (CMS)",
    description:
      "Take control of your content with our intuitive custom CMS solutions. We help you structure, manage, and automate your digital content effortlessly, empowering your team to update and scale with ease.",
    image: cms,
    imageLeft: true,
  bgColor: "bg-linear-to-br from-[#5CF2E3] to-[#3CBFB0]",
    link: "/development/web-development/content-management-system",
    Icon: FileText,
  },
  {
    title: "E-commerce Development Services",
    description:
      "Launch high-converting e-commerce platforms that attract, engage, and convert. From intuitive UI/UX to secure payment integrations and inventory management, we build online stores that drive revenue.",
    image: eds,
    imageLeft: false,
  bgColor: "bg-linear-to-br from-[#D94436] to-[#A33328]",
    link: "/development/web-development/ecommerce-development-services",
    Icon: ShoppingCart,
  },
  {
    title: "Third-Party API Integration",
    description:
      "Supercharge your platform's capabilities by seamlessly integrating powerful third-party APIs. We connect you with the tools your users need—payment gateways, social media, analytics, and more.",
    image: apiintegration,
    imageLeft: true,
  bgColor: "bg-linear-to-br from-[#5C91F2] to-[#3D6BC6]",
    link: "/development/web-development/third-party-api-integration-services",
    Icon: Plug,
  },
];

const WebDevelopment = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [Enterpriseweb, wds, cms, eds, apiintegration];

  // autoplay controls
  const [isPlaying, setIsPlaying] = useState(true);
  const [manualPaused, setManualPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);

  const prevHero = () => {
    setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
    // user interacted manually -> pause autoplay
    setManualPaused(true);
    setIsPlaying(false);
  };
  const nextHero = () => {
    setHeroIndex((i) => (i + 1) % heroImages.length);
    // user interacted manually -> pause autoplay
    setManualPaused(true);
    setIsPlaying(false);
  };

  // autoplay effect
  useEffect(() => {
    // only autoplay when playing and not manually/hover paused
    if (!isPlaying || manualPaused || hoverPaused) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isPlaying, manualPaused, hoverPaused, heroImages.length]);
  return (
  <section className="relative bg-gray-50 mt-16" style={{ scrollMarginTop: '80px' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HERO: compact subpage hero (breadcrumb, title, CTAs, single image with thumbnails) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 relative"
          >
            <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700 font-medium">Web Development</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Web development services that move your product forward
            </h1>

            <p className="text-base text-gray-600 max-w-lg">
              We build fast, maintainable, and secure web applications tailored to your business needs. From startups to enterprises, our solutions focus on performance and developer experience.
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
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <Image src={heroImages[heroIndex]} alt={`Showcase ${heroIndex + 1}`} width={1200} height={720} className="w-full h-56 sm:h-64 md:h-72 object-cover" priority={heroIndex === 0} />
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
  <section id="services" className="mt-16" style={{ scrollMarginTop: '80px' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Our services</h2>
            <p className="text-sm text-gray-500">Comprehensive solutions for modern products</p>
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
                className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transform-gpu transition-transform duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
              >
                <div className="relative">
                  <Image src={service.image} alt={service.title} width={1200} height={720} className="w-full h-36 sm:h-40 md:h-44 object-cover" loading="lazy" />
                  <div className="absolute left-4 top-4">
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.08 }} className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.bgColor} shadow-lg`} aria-hidden>
                      <service.Icon className="w-6 h-6 text-white" aria-hidden />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <h3 id={`service-${index}`} className="text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600 flex-1 max-h-20 overflow-hidden">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <Link href={service.link} className="text-sm font-semibold text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200" aria-label={`Learn more about ${service.title}`}>
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

export default WebDevelopment;
