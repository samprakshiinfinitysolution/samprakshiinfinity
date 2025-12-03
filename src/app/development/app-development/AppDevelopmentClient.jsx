"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Briefcase, Smartphone, Code, Plug, BrainCircuit, PenTool, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import ANDROIDAPP from "@/assets/ANDROIDAPP.png";
import ARVRAPP from "@/assets/ARVRAPP.png";
import CHROMECASTAPP from "@/assets/CHROMECASTAPP.png";
import GOOGLEFLUTTERAPP from "@/assets/GOOGLEFLUTTERAPP.png";
import IONICAPP from "@/assets/IONICAPP.png";
import IOSAPP from "@/assets/IOSAPP.png";
import MOBILEUIUXDESIGN from "@/assets/MOBILEUIUXDESIGN.png";
import REACTNATIVEAPP from "@/assets/REACTNATIVEAPP.png";
import WEARABLEAPP from "@/assets/WEARABLEAPP.png";

const services = [
  {
    title: "IOS App Development",
    description:
      "Let’s build you engaging iphone apps that function seamlessly across IOS platforms. From excellent designs to fast performance and rigorous testing, our developers bring you innovation and creativity in IOS App Development.",
    image: IOSAPP,
    imageLeft: true,
    bgColor: "bg-[#05C7F2]",
    link: "/development/app-development/ios-app-development",
    Icon: Smartphone,
  },
  {
    title: "Android App Development",
    description:
      "Did you know that android accounts for over 76% of global mobile phone use? Creating an app for your business to cater to this audience is a no-brainer. Work with us and let’s bring you the best android app solutions ever created!",
    image: ANDROIDAPP,
    imageLeft: false,
    bgColor: "bg-[#F28379]",
    link: "/development/app-development/android-app-development",
    Icon: Smartphone,
  },
  {
    title: "Google flutter App Development",
    description:
      "Our google flutter development services help you save time and cost while delivering world-class cross-platform apps. You get high quality apps that run on all platforms.",
    image: GOOGLEFLUTTERAPP,
    imageLeft: true,
    bgColor: "bg-[#5CF2E3]",
    link: "/development/app-development/google-flutter-app-development",
    Icon: Code,
  },
  {
    title: "React Native App development",
    description:
      "Building react native apps has never been easier. Work with a team of professionals and let’s leverage industry standard technology to build seamless and nimble apps in record time.",
    image: REACTNATIVEAPP,
    imageLeft: false,
    bgColor: "bg-[#D94436]",
    link: "/development/app-development/react-native-app-development",
    Icon: Code,
  },
  {
    title: "Ionic App Development",
    description:
      "Using the Ionic Framework, we develop dynamic mobile and web apps that function across all platforms and provides you with all of the amazing features your business needs. Using a single code base, you get an app solution that can be deployed on all operating systems.",
    image: IONICAPP,
    imageLeft: true,
    bgColor: "bg-[#5C91F2]",
    link: "/development/app-development/ionic-app-development",
    Icon: Plug,
  },
  {
    title: "Wearable App Development",
    description:
      "Need a team of professional developers to handle your wearable app development? We’ve got you covered! We help you build wearable and smart tech applications designed to disrupt the market and exceed expectations.",
    image: WEARABLEAPP,
    imageLeft: false,
    bgColor: "bg-[#C3A709]",
    link: "/development/app-development/wearable-app-development",
    Icon: BrainCircuit,
  },
  {
    title: "AR/VR App Development",
    description:
      "We animate digital reality and bring it to your users through mobile apps. Our team of AR/VR developers help you grow your organization though the aid of digital visualization apps and technology.",
    image: ARVRAPP,
    imageLeft: true,
    bgColor: "bg-[#7B50A4]",
    link: "/development/app-development/ar-vr-app-development",
    Icon: BrainCircuit,
  },
  {
    title: "Mobile UI/UX Design Development",
    description:
      "With mobile apps, design is vital. Not only do you need to keep your users engaged, your app must be easy-to-use in order to maintain relevance. As expert UI/UX designers, we create superior designs that grab users’ attention while promoting brand recall.",
    image: MOBILEUIUXDESIGN,
    imageLeft: false,
    bgColor: "bg-[#C5C827]",
    link: "/development/app-development/mobile-uiux-design-development",
    Icon: PenTool,
  },
  {
    title: "Chrome Cast App Development",
    description:
      "Our team of specialized Google chrome cast developers are simply the best in the industry. Using the innovative platform, we help create integrable solutions that offer excellent user experience and user-centric-designs.",
    image: CHROMECASTAPP,
    imageLeft: true,
    bgColor: "bg-[#CA5595]",
    link: "/development/app-development/chrome-cast-app-development",
    Icon: Briefcase,
  },
];

const AppDevelopmentClient = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [ANDROIDAPP, IOSAPP, GOOGLEFLUTTERAPP, REACTNATIVEAPP, MOBILEUIUXDESIGN];

  const [isPlaying, setIsPlaying] = useState(true);
  const [manualPaused, setManualPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);

  const prevHero = () => {
    setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
    setManualPaused(true);
    setIsPlaying(false);
  };
  const nextHero = () => {
    setHeroIndex((i) => (i + 1) % heroImages.length);
    setManualPaused(true);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying || manualPaused || hoverPaused) return;
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isPlaying, manualPaused, hoverPaused, heroImages.length]);

  return (
    <section className="relative bg-gray-50 mt-16" style={{ scrollMarginTop: '80px' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">App Development</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Mobile & app development services that move your product forward
          </h1>

          <p className="text-base text-gray-600 max-w-lg">
            We build fast, maintainable, and secure mobile applications tailored to your audience. From native apps to cross-platform solutions, we focus on performance and delightful user experience.
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

export default AppDevelopmentClient;
