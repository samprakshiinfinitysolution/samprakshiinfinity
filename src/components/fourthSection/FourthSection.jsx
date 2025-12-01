import React from "react";
import Link from "next/link";
import ctabg from "@/images/ctabg.jpg";

export default function FourthSection() {
    return (
        <section
            id="contact-cta"
            role="region"
            aria-labelledby="contact-cta-heading"
            className="relative w-full  text-white py-10 sm:py-14 overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(6,44,86,0.9), rgba(14,87,184,0.75)), url(${ctabg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* angled decorative mask */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="cta-glow" x1="0" x2="1">
                            <stop offset="0" stopColor="#0E57B8" stopOpacity="0.12" />
                            <stop offset="1" stopColor="#2196FF" stopOpacity="0.06" />
                        </linearGradient>
                    </defs>
                    <path d="M0,400 L1200,200 L1200,600 L0,600 Z" fill="url(#cta-glow)" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Content */}
                    <div className="lg:col-span-12">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white mb-4 bg-linear-to-r from-[#0E57B8] to-[#2196FF] shadow-md">Trusted by clients</span>

                        <h2 id="contact-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Launch faster. Delight users. Grow reliably.
                        </h2>

                        <p className="mt-4 text-white/90 max-w-2xl text-base">
                            We combine product strategy, UX-led design and resilient engineering to build digital
                            experiences that scale. Partner with a team that ships quality and measures impact.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
                            {/* <Link
                                href="/contact-us"
                                aria-label="Get in touch — primary"
                                className="inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold text-white shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25 transform-gpu transition-transform duration-150 motion-reduce:transition-none"
                                style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)' }}
                            >
                                Start a Project
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                            </Link> */}

                             <button
                        type="button"
                       
                        aria-label="Get a consultation"
                        className="group  w-auto inline-flex items-center justify-center gap-3 hero-cta-gradient focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none text-white font-semibold rounded-md px-6 py-3 shadow-md transition-colors"
                      >
                        <span>Start a Project</span>
                        <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                        </div>

                       
                     
                   
                      
                    </div>

                    {/* right-side illustration removed per request */}
                </div>
            </div>
        </section>
    );
}
