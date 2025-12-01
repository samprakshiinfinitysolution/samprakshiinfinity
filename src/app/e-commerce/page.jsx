"use client";

import React from 'react';
import Image from 'next/image';
import ecommercehero from '@/assets/Ecommerce-hero.png';
import amazon from '@/assets/brandlogo/amazon.svg';
import flipkart from '@/assets/brandlogo/flipkart.svg';
import meesho from '@/assets/brandlogo/meesho.png';
import jiomart from '@/assets/brandlogo/jiomart.svg';
import myntra from '@/assets/brandlogo/myntra.svg';
import shopify from '@/assets/brandlogo/shopify.svg';
import blinkit from '@/assets/brandlogo/blinkit.jpeg';
import swiggy from '@/assets/brandlogo/swiggy.svg';
import bigbasket from '@/assets/brandlogo/Bigbasket.svg';
import wordpress from '@/assets/brandlogo/wordpress.svg';
import zepto from '@/assets/brandlogo/zepto.png';



import FAQAccordion from '@/components/FAQAccordion';
// Decorative icon removed (using SVG image)

const platforms = {
  marketplaces: ['Amazon', 'Flipkart', 'Meesho', 'JioMart', 'Myntra'],
  d2c: ['Shopify', 'WordPress', 'Custom E-Commerce Websites'],
  quick: ['Blinkit', 'Zepto', 'Swiggy Instamart', 'BigBasket Now', 'JioMart Express'],
};

function PlatformIcon({ name, className = 'w-6 h-6' }) {
  const [attempt, setAttempt] = React.useState(0); // 0: imported asset, 1: svg path, 2: png path, 3: fallback
  const key = String(name || '').toLowerCase();
  const slug = key.replace(/[^a-z0-9]+/g, '-');
  const svgPath = `/logos/${slug}.svg`;
  const pngPath = `/logos/${slug}.png`;

  const fallbackPath = '/logo.png'; // sample logo provided in public/

  // Map known brand names to the imported assets at the top of this file
  const ASSET_MAP = {
    amazon: amazon,
    flipkart: flipkart,
    meesho: meesho,
    jiomart: jiomart,
    myntra: myntra,
    shopify: shopify,
    blinkit: blinkit,
    swiggy: swiggy,
    bigbasket: bigbasket,
    zepto: zepto,
    wordpress: wordpress,
  };

  // Try direct key match first, then fallback to a fuzzy match so variants
  // like "bigbasket now" or "swiggy instamart" map to the base brand asset.
  let importedAsset = ASSET_MAP[key];
  if (!importedAsset) {
    const found = Object.keys(ASSET_MAP).find((mapKey) => {
      // exact match already failed; match when the name contains the brand key
      // or the brand key contains the name (covers reversed short names)
      return key.includes(mapKey) || mapKey.includes(key);
    });
    if (found) importedAsset = ASSET_MAP[found];
  }

  // If we have an imported asset, try it first
  if (importedAsset && attempt === 0) {
    return (
      <Image
        src={importedAsset}
        alt={name}
        width={24}
        height={24}
        className={className + ' object-contain'}
        onError={() => setAttempt(1)}
      />
    );
  }

  // Fallback to static /logos paths (svg, then png) then fallback image
  const currentSrc = attempt === 1 ? svgPath : attempt === 2 ? pngPath : fallbackPath;

  if (currentSrc) {
    return (
      <Image
        src={currentSrc}
        alt={name}
        width={24}
        height={24}
        className={className + ' object-contain'}
        onError={() => { if (attempt < 3) setAttempt((a) => a + 1); }}
      />
    );
  }

  // If for some reason even the fallback image isn't available, render a simple inline badge
  switch (key) {
    case 'amazon':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#131921" />
          <text x="12" y="16" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">a</text>
        </svg>
      );
    case 'flipkart':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#2874f0" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">F</text>
        </svg>
      );
    case 'meesho':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#ff2d55" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">M</text>
        </svg>
      );
    case 'jiomart':
    case 'jiomart express':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#ff6a00" />
          <text x="12" y="16" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">JM</text>
        </svg>
      );
    case 'myntra':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#ff6f61" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">M</text>
        </svg>
      );
    case 'shopify':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#95bf47" />
          <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">S</text>
        </svg>
      );
    default:
      return (
        <span className={`inline-flex items-center justify-center rounded bg-gray-100 text-gray-700 ${className}`} aria-hidden="true">{name ? String(name).charAt(0).toUpperCase() : '?'}</span>
      );
  }
}

const successStories = [
  {
    title: 'Meesho Apparel Brand',
    result: 'Sales grew 3.5× in 45 days',
    bullets: ['Listing optimization', 'Ad management', 'Improved images'],
  },
  {
    title: 'Amazon Home Décor Seller',
    result: '62% growth in organic sales',
    bullets: ['SEO-optimized listings', 'A+ content', 'PPC campaigns'],
  },
  {
    title: 'Blinkit FMCG Brand',
    result: 'Orders increased 180% in 30 days',
    bullets: ['Quick commerce integration', 'Express pricing strategy'],
  },
];

const FAQ = [
  { q: 'Do you manage both E-Commerce and Quick Commerce?', a: 'Yes — we handle complete operations for Amazon, Flipkart, Meesho, Blinkit, Zepto and more.' },
  { q: 'Can you help launch my brand on Blinkit or Zepto?', a: 'Absolutely — onboarding, catalog setup, and ad management for instant delivery platforms.' },
  { q: 'Do you create Custom E-Commerce Websites?', a: 'Yes — we design and develop fully functional, mobile-friendly online stores tailored to your brand.' },
  { q: 'How do you manage inventory across multiple platforms?', a: 'We use real-time stock synchronization and analytics tools for seamless accuracy.' },
  { q: 'What are your pricing options?', a: 'We offer flexible packages for startups, SMEs, and growing brands. Contact us for a custom plan.' },
];

function FlipCard({ service }) {
  const [flipped, setFlipped] = React.useState(false);

  const innerStyle = {
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
  };

  const faceStyle = {
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden'
  };

  return (
    <div style={{ perspective: '1000px' }} className="p-1 h-56 md:h-64">
      <div style={innerStyle} className="relative w-full h-full">
        {/* front */}
        <div style={faceStyle} className="bg-white rounded-lg shadow-sm p-6 h-full flex flex-col justify-between">
          <div>
            <div className="text-brand-primary mb-3">{service.icon}</div>
            <h4 className="font-semibold text-brand-primary mb-2">{service.title}</h4>
            <p className="text-gray-600 text-sm">{service.short}</p>
          </div>

            <div className="mt-4 flex justify-end">
            <button
              onClick={() => setFlipped(true)}
              className="text-sm font-medium text-brand-primary hover:underline focus:outline-none"
              aria-label={`Show more about ${service.title}`}
            >
              More →
            </button>
          </div>
        </div>

        {/* back */}
          <div style={{ ...faceStyle, transform: 'rotateY(180deg)' }} className="absolute inset-0 bg-white rounded-lg shadow-sm p-6 h-full flex flex-col justify-between">
          <div>
            <h4 className="font-semibold text-brand-primary mb-2">{service.title}</h4>
            <div className="text-gray-700 text-sm">
              {service.detail}
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
              {service.cta ? (
              <a href={service.cta.href} className="inline-flex items-center gap-2 bg-linear-to-r from-brand-primary to-brand-bright text-white px-4 py-2 rounded-full text-sm shadow-sm" style={{ backgroundImage: 'linear-gradient(90deg,var(--brand-primary),var(--brand-bright))' }}>{service.cta.label}</a>
            ) : <span />}

            <button
              onClick={() => setFlipped(false)}
              className="text-sm font-medium text-brand-primary hover:underline focus:outline-none"
              aria-label={`Show less about ${service.title}`}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ECommercePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="pt-20 pb-12 bg-white text-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center py-12">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-brand-primary">Empowering Sellers & Brands to <span className="text-brand-primary">Succeed Online</span></h1>
              <div className="w-20 h-1 bg-brand-primary rounded mt-4 mb-6 mx-auto md:mx-0" />
              <p className="text-lg text-gray-700 mb-4 max-w-xl mx-auto md:mx-0">We help you scale across Marketplaces, D2C Stores and Quick Commerce platforms — Amazon, Flipkart, Meesho, Blinkit, Zepto, Shopify and more. End-to-end management from setup to growth.</p>

              <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm mb-4">
                <li className="inline-flex items-center gap-2"><span className="rounded-full bg-brand-primary/10 text-brand-primary px-2 py-1">✅</span> Faster Listings</li>
                <li className="inline-flex items-center gap-2"><span className="rounded-full bg-brand-primary/10 text-brand-primary px-2 py-1">📈</span> ROI-focused Ads</li>
                <li className="inline-flex items-center gap-2"><span className="rounded-full bg-brand-primary/10 text-brand-primary px-2 py-1">⚡</span> Quick Commerce Ready</li>
              </ul>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-brand-primary to-brand-bright text-white px-8 py-3 text-base rounded-full font-semibold shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/25"
                  style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)' }}
                  aria-label="Get free consultation"
                >
                  <span className="sr-only">Phone</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.2a2 2 0 011.6.8l1.2 1.8a2 2 0 01-.2 2.4L8.7 10.6a16 16 0 006.7 6.7l1.8-1.1a2 2 0 012.4-.2l1.8 1.2a2 2 0 01.8 1.6V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                  Get Free Consultation
                </a>
                <a href="#services" className="inline-flex items-center gap-2 border border-gray-200 text-gray-800 px-5 py-3 rounded-full font-medium hover:bg-gray-50 transition" aria-label="Explore services">📦 Explore Services</a>
                <a href="#pricing" className="ml-1 text-sm text-gray-600 underline underline-offset-2">See pricing & packages →</a>
              </div>
              <p className="text-xs text-gray-600 mt-3">Free 30‑min audit for new clients</p>
            </div>

            <div className="flex items-center justify-center">
                <div className="relative w-72 h-72 md:w-md md:h-112 lg:w-xl lg:h-144 rounded-2xl bg-white/5 p-10 flex items-center justify-center  overflow-hidden">
                  {/* Using provided illustration (larger responsive sizes) */}
                  <Image src={ecommercehero} alt="E-commerce illustration" fill className="object-contain" priority />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 bg-brand-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-brand-primary mb-4">Platforms We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col gap-3">
              <div className="text-brand-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  <circle cx="7" cy="20" r="1.5" strokeWidth="1.5"/>
                  <circle cx="17" cy="20" r="1.5" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Marketplaces</h3>
              <p className="text-sm text-gray-500 mb-3">Popular marketplaces we work with</p>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {platforms.marketplaces.map((p) => (
                  <div key={p} role="listitem" aria-label={p} className="flex flex-col items-center gap-2 p-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <PlatformIcon name={p} className="w-7 h-7" />
                    </div>
                    <div className="text-xs text-gray-600 text-center max-w-32 truncate">{p}</div>
                  </div>
                ))}
              </div>
            </div>
              <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col gap-3">
              <div className="text-brand-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-6 9 6v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">D2C Stores</h3>
              <p className="text-sm text-gray-500 mb-3">Shopify, WordPress and custom stores</p>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {platforms.d2c.map((p) => (
                  <div key={p} role="listitem" aria-label={p} className="flex flex-col items-center gap-2 p-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <PlatformIcon name={p} className="w-7 h-7" />
                    </div>
                    <div className="text-xs text-gray-600 text-center max-w-32 truncate">{p}</div>
                  </div>
                ))}
              </div>
            </div>
              <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col gap-3">
              <div className="text-brand-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Quick Commerce</h3>
              <p className="text-sm text-gray-500 mb-3">Instant delivery platforms we integrate</p>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                {platforms.quick.map((p) => (
                  <div key={p} role="listitem" aria-label={p} className="flex flex-col items-center gap-2 p-2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <PlatformIcon name={p} className="w-7 h-7" />
                    </div>
                    <div className="text-xs text-gray-600 text-center max-w-32 truncate">{p}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Strengths */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-3">About Us — Your Trusted Omnichannel E-Commerce Partner</h2>
            <p className="text-gray-700 mb-4">At Saprakshi Infinity Solution, we simplify online selling for businesses of every size. Whether you sell on marketplaces, a D2C website, or instant delivery platforms, we help you set up, manage, and scale efficiently.</p>
            <p className="text-gray-700 mb-4">Our expert team handles account setup, catalog optimization, advertising, fulfillment, and customer service — everything you need to grow online, all in one place.</p>
            <p className="font-semibold">Mission: To empower Indian sellers and brands with affordable, performance-based omnichannel e-commerce solutions.</p>
            <p className="font-semibold mt-2">Vision: To become India’s most trusted e-commerce service partner — driving success across marketplaces, D2C, and quick commerce.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-primary mb-3">Our Strengths</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </span>Experienced E-Commerce & Quick Commerce Experts</li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </span>Affordable, Transparent Packages</li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </span>Platform-specific Specialists</li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </span>24×7 Seller Support</li>
              <li className="flex items-start gap-3"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </span>Proven Growth Record</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      {/* Why Choose */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-brand-primary mb-3">Why Choose Samprakshi Infinity Solution</h2>
          <p className="text-gray-700 mb-4">We blend experience, strategy, and technology to deliver measurable growth.</p>

          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <span>End-to-End E-Commerce & Quick Commerce Solutions</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <span>Dedicated Account Managers</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <span>Affordable Packages for Every Seller</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <span>Platform-Specific Expertise</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <span>24×7 Support and Reporting</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="services" className="py-12 bg-brand-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-brand-primary mb-2">Our Omnichannel Services</h2>
          <p className="text-gray-700 mb-6">One Partner for All Your Online Selling Needs — We offer integrated E‑Commerce and Quick Commerce management: everything required to start, run, and grow your online business.</p>

          {/* services list with SVG icons and flip-on-click */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Account Setup & Onboarding',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1"/></svg>
                ),
                short: 'Complete account registration, KYC and marketplace onboarding to get you selling quickly across channels.',
                detail: (<>
                  <p>We handle GST, bank setup, account registrations, verification and marketplace approvals so you can go live fast.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Account creation and KYC submission</li>
                    <li>SKU mapping, catalog readiness and GTIN handling</li>
                    <li>Launch checklist, live monitoring and health checks</li>
                  </ul>
                </>)
              },
              {
                title: 'Catalog Management & Optimization',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>),
                short: 'High-converting listings: titles, bullets, descriptions, A+ modules and SEO tailored per platform.',
                detail: (<>
                  <p>Platform-specific templates, keyword mapping and A/B tests to increase visibility and conversion.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Search-term research and title optimization</li>
                    <li>A+ / Enhanced Brand Content and multimedia setup</li>
                    <li>Bulk uploads, error resolution and listing health monitoring</li>
                  </ul>
                </>)
              },
              {
                title: 'Product Photoshoot & Editing',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 7h4l2-3h4l2 3h4v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"/><circle cx="12" cy="13" r="3" strokeWidth="1.5"/></svg>),
                short: 'Product photography and post-processing that improves conversion and meets marketplace specs.',
                detail: (<>
                  <p>Studio-grade white-background shots, lifestyle images and fast retouching for hero and variant images.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Image composition, clipping, retouch and color correction</li>
                    <li>Image variants for mobile, desktop and quick-commerce feeds</li>
                    <li>Infographics & feature-callouts for A+ pages</li>
                  </ul>
                </>)
              },
              {
                title: 'Order & Inventory Management',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v11H3z"/><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 3v4"/></svg>),
                short: 'Real-time stock sync, automated order routing, returns processing and reconciliation across channels.',
                detail: (<>
                  <p>Centralized inventory with safety stock rules, batch dispatch and return workflows to keep operations healthy.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Stock sync & re-order alerts</li>
                    <li>Order batching, label generation and courier integration</li>
                    <li>Returns intake, inspection and claim processing</li>
                  </ul>
                </>)
              },
              {
                title: 'Sponsored Ads / PPC Management',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 11h3l3-7 4 14 3-8h4"/></svg>),
                short: 'Data-driven ad campaigns to maximize sales while keeping ACoS targets under control.',
                detail: (<>
                  <p>Strategy, setup and optimization across Amazon Ads, Flipkart Ads and quick-commerce promotions with weekly reporting.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Keyword & ASIN harvesting, negative keyword management</li>
                    <li>Bid automation, portfolio management and budget pacing</li>
                    <li>Creative performance tests and placement optimization</li>
                  </ul>
                </>)
              },
              {
                title: 'Graphic Design for Product Images',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8"/></svg>),
                short: 'High-impact creatives for A+ pages, banners, listing images and promotional campaigns.',
                detail: (<>
                  <p>Designs focused on clarity and conversion — product infographics, comparison tables and campaign banners.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>A+ modules, comparison charts and key-benefit visuals</li>
                    <li>Campaign banners and social/ad creatives</li>
                    <li>Fast turnaround and multiple revision cycles</li>
                  </ul>
                </>)
              },
              {
                title: 'Warehousing & Fulfillment Support',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 3v18M19 3v18M5 7h14"/></svg>),
                short: 'Flexible warehousing, pick‑pack‑ship, labeling and courier integrations to lower fulfillment errors.',
                detail: (<>
                  <p>Multi-location storage, barcode labeling, packing SOPs and courier reconciliation to improve SLAs and decrease disputes.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Packing standards and QC checklists</li>
                    <li>Courier integrations and shipment tracking</li>
                    <li>Returns reverse logistics and restocking</li>
                  </ul>
                </>)
              },
              {
                title: 'D2C Store Development',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 9h18v11H3z"/><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 9V6a7 7 0 0114 0v3"/></svg>),
                short: 'Fast, SEO-ready Shopify or WordPress stores with integrated payments and analytics.',
                detail: (<>
                  <p>Custom store builds optimized for conversion and mobile checkout, with payment gateway, shipping and analytics setup.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Responsive UX and fast checkout flows</li>
                    <li>Payment gateway & tax integration</li>
                    <li>SEO basics, structured data and analytics</li>
                  </ul>
                </>)
              },
              {
                title: 'Returns & Claim Management',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2V12"/><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M7 9l5-5 5 5"/></svg>),
                short: 'End-to-end returns handling, claims submission and reconciliation to reduce seller losses.',
                detail: (<>
                  <p>We manage returns authorization, item checks, claims filing and refund/replacement coordination for marketplaces and couriers.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Claims filing and follow-up</li>
                    <li>Refund reconciliation and dispute handling</li>
                    <li>Policy recommendations to reduce returns</li>
                  </ul>
                </>)
              },
              {
                title: 'Customer Support Outsourcing',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 8v8a4 4 0 004 4h10a4 4 0 004-4V8"/><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z"/></svg>),
                short: 'Dedicated omnichannel support: messages, reviews, disputes and rating maintenance.',
                detail: (<>
                  <p>Message triage, templated responses, review handling and escalation to keep seller ratings high and response SLAs met.</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    <li>Multilingual inbox handling and templated replies</li>
                    <li>Review response and reputation management</li>
                    <li>Escalation paths for disputes and claims</li>
                  </ul>
                </>)
              }
            ].map((s, idx) => (
              <FlipCard key={idx} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Commerce callout (refined) */}
      <section id="faq-section" className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-brand-primary">Quick Commerce Integration</h3>
               
              </div>
              <p className="text-gray-600 mb-6 max-w-xl">Sell on instant-delivery platforms with confidence. We handle onboarding, catalog mapping, stock sync and express promotions so customers receive orders within minutes.</p>

              <ul className="grid gap-4">
                <li className="flex gap-4 items-start">
                  <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-brand-deep">Real-time stock & pricing sync</div>
                    <div className="text-sm text-gray-600">Keep inventory and prices accurate across Blinkit, Zepto, Swiggy Instamart and more.</div>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-brand-deep">Fast onboarding</div>
                    <div className="text-sm text-gray-600">Get live on quick platforms quickly with catalog-ready feeds and SKU mapping.</div>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M2 8l6 3v6l-6-3V8z" />
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 11l10-5v10L8 11z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-brand-deep">Conversion-focused listings</div>
                    <div className="text-sm text-gray-600">Optimized titles, images and promotions to improve visibility and click-through.</div>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <rect x="3" y="11" width="4" height="10" rx="1" strokeWidth="1.5"/>
                      <rect x="10" y="6" width="4" height="15" rx="1" strokeWidth="1.5"/>
                      <rect x="17" y="2" width="4" height="19" rx="1" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-brand-deep">Daily reporting & insights</div>
                    <div className="text-sm text-gray-600">Actionable dashboards and recommendations to maximize orders and profitability.</div>
                  </div>
                </li>
              </ul>

              <p className="text-sm text-gray-500 mt-6">Catalog audit and onboarding support available — contact us from the contact page if you would like assistance.</p>
            </div>

            {/* Right column removed as requested */}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-12 bg-brand-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-brand-deep mb-6">Our Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition">
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-brand-primary font-semibold mb-2">{s.result}</p>
                <ul className="text-gray-700 list-inside list-disc">
                  {s.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Removed inline script - FAQ accordion is now a client component */}
      </section>

      {/* FAQ (client-side accordion) */}
      <FAQAccordion faq={FAQ} />

     
      

      

    </div>
  );
}



