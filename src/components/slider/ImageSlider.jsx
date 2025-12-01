"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import digitalPresence from "@/assets/website1.png";
import itSolutions from "@/assets/website2.png";
import aiAutomation from "@/assets/website3.png";
import cloudSolutions from "@/assets/website4.png";
import customSoftware from "@/assets/website5.png";

const slides = [
  {
    image: digitalPresence,
    title: "Revolutionize Your Digital Presence",
    subtitle: "Build future-ready websites and mobile apps with stunning UI/UX.",
  },
  {
    image: itSolutions,
    title: "Empowering Businesses Through Technology",
    subtitle: "Comprehensive IT services tailored for growth and efficiency.",
  },
  {
    image: aiAutomation,
    title: "Transform with Intelligent Automation",
    subtitle: "Unlock new possibilities with machine learning and AI solutions.",
  },
  {
    image: cloudSolutions,
    title: "Scale with Cloud Infrastructure",
    subtitle: "Reliable, secure, and scalable cloud solutions for your business.",
  },
  {
    image: customSoftware,
    title: "Custom Software for Your Workflow",
    subtitle: "Streamline operations with software built for your unique needs.",
  },
];

export default function PremiumSlider() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);

  // Respect users who prefer reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Autoplay control: start/stop helpers (stable via useCallback)
  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (prefersReducedMotion) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, [prefersReducedMotion, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);
  const nextSlide = () => goTo(current + 1);
  const prevSlide = () => goTo(current - 1);

  // Pause on hover/focus
  const handleMouseEnter = () => stopAutoplay();
  const handleMouseLeave = () => startAutoplay();

  // Keyboard navigation and play/pause toggle (space)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        // Toggle autoplay when space is pressed
        if (intervalRef.current) stopAutoplay();
        else startAutoplay();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [startAutoplay, stopAutoplay]);

  // Touch swipe support
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prevSlide();
      else nextSlide();
    }
  };

  return (
    <section
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Homepage featured services"
      className="relative w-full h-screen overflow-hidden select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides container */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => {
          const active = i === current;
          return (
            <div
              key={i}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                active ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover brightness-[.6]"
                priority={i === 0}
              />

              <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-16 left-6 md:left-16 lg:left-20 max-w-2xl text-white">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg mb-3">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl font-light drop-shadow-md mb-5">{slide.subtitle}</p>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => router.push("/contact-us")}
                    className="inline-flex items-center gap-3 px-5 py-3 font-semibold rounded-full shadow-xl hover:scale-105 transform transition-all duration-200 focus:outline-none"
                    style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff', backgroundRepeat: 'no-repeat' }}
                  >
                    Get Consultation
                    <span aria-hidden>→</span>
                  </button>

                  {/* Play/pause removed — autoplay controlled by hover and keyboard (space) */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls: Prev / Next */}
      <div className="absolute inset-y-1/2 left-4 md:left-6 flex items-center z-30">
        <button
          aria-label="Previous slide"
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M12 16L6 10l6-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-1/2 right-4 md:right-6 flex items-center z-30">
        <button
          aria-label="Next slide"
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === current ? "bg-white shadow-lg scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="polite">
        {`Slide ${current + 1} of ${slides.length}: ${slides[current].title}`}
      </div>
    </section>
  );
}

