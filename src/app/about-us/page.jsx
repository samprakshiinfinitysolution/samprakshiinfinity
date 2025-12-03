import React from 'react';
import Image from 'next/image';
import TestimonialsCarousel from './TestimonialsCarousel';
import vinitaImg from '@/assets/employee/vinita.jpeg';
import shubhamImg from '@/assets/employee/shubham.jpg';
import kamtaImg from '@/assets/employee/kamta.jpg';
import gouravImg from '@/assets/employee/gourav.jpg';
import miteshImg from '@/assets/employee/mitesh.jpeg';
import lokendrajatavImg from '@/assets/employee/lokendrajatav.png';
import lokendramawadaImg from '@/assets/employee/lokendramawada.jpg';
import shivani from '@/assets/employee/shivani.jpg';

import { FiCode, FiShoppingCart, FiTruck, FiMonitor, FiDatabase, FiBarChart2 } from 'react-icons/fi';
import { HiCheck } from 'react-icons/hi';

export const metadata = {
  title: 'About Us — Samprakshi Infinity Solution',
  description: 'Learn about Samprakshi Infinity Solution — our mission, vision, team and how we help brands scale across marketplaces, D2C and quick commerce in India.',
  openGraph: {
    title: 'About Us — Samprakshi Infinity Solution',
    description: 'Learn about our team, mission and services — Web, App, E‑Commerce and Quick Commerce solutions for Indian brands.',
    url: 'https://samprakshiinfinitysolution.com/about-us',
    siteName: 'Samprakshi Infinity Solution',
    images: [
      {
        url: 'https://samprakshiinfinitysolution.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Samprakshi Infinity Solution — About Us'
      }
    ]
  }
};


// --- DATA DEFINITIONS ---

const STATS_DATA = [
  { value: '450K', label: 'Happy Clients' },
  { value: '20K', label: 'Projects Completed' },
  { value: '10B', label: 'Revenue Generated' },
  { value: '7+', label: 'Years in Business' },
];

const SERVICES_DATA = [
  'Branding & Identity for Indian Brands',
  'Localized UX/UI for Indian Users',
  'GST-ready E-commerce Development',
  'Performance Marketing for Indian Markets',
  'Digital Transformation & Consulting',
];

const PROCESS_STEPS = [
  { title: '1. Strategy & Plan', desc: 'We start by understanding your goals, audience, and market landscape to build a robust strategy.' },
  { title: '2. Design & Build', desc: 'Our creative and technical teams bring the plan to life with stunning design and flawless development.' },
  { title: '3. Launch & Scale', desc: 'We launch your product and provide ongoing support, monitoring, and scaling for sustained growth.' },
];

const TEAM_MEMBERS = [
  // { name: 'Sakshi Kumrawat', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1544005312-94ddf0286df3?auto=format&fit=crop&w=600&q=80' },
  { name: 'Lokendra Jatav', role: 'Team Lead & Senior Developer', img: lokendrajatavImg },
  { name: 'Shivani Paradkar', role: 'Senior Flutter Developer', img: shivani },
  // { name: 'Vishal Sabre', role: 'Marketing Director', img: 'https://images.unsplash.com/photo-1546964124-1b3b4e9a7b94?auto=format&fit=crop&w=600&q=80' },
  { name: 'Mitesh Yadav', role: 'Full Stack Developer', img: miteshImg },
  // { name: 'Durgesh Rajak', role: 'Graphic Designer', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80' },
  { name: 'Gourav Chouhan', role: 'Full Stack Developer', img: gouravImg },
  { name: 'Vinita Jinodiya ', role: 'Frontend Developer', img: vinitaImg },
  { name: 'Kamta Prasad Shahu', role: 'Mern Developer', img: kamtaImg },
  { name: 'Lokendra Mawada', role: 'Flutter Developer', img: lokendramawadaImg},
  { name: 'Shubham Yadav', role: 'Frontend Developer', img: shubhamImg },
];

const TESTIMONIALS_DATA = [
  { name: 'Rohit Mehra', designation: 'Head of Marketing, Delhi Retail', review: "They helped us reach Tier-2 and Tier-3 cities with smart localization — our conversions doubled.", img: 'https://images.unsplash.com/photo-1544005312-94ddf0286df3?auto=format&fit=crop&w=200&q=80' },
  { name: 'Priya Gupta', designation: 'Founder, Local Crafts Co.', review: "Their branding work connected with our customers across India — culturally sensitive and beautifully executed.", img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80' },
  { name: 'Amit Sharma', designation: 'CTO, FinTech Startup', review: "Fast delivery, solid engineering practices, and great communication throughout the project.", img: 'https://images.unsplash.com/photo-1545996124-1b3b4e9a7b94?auto=format&fit=crop&w=200&q=80' },
  { name: 'Neha Iyer', designation: 'Head of Growth', review: "Their performance marketing helped reduce CAC while increasing retention — exceptional team.", img: 'https://images.unsplash.com/photo-1544126591-6a8f4f3a3b2f?auto=format&fit=crop&w=200&q=80' },
  { name: 'Vikram Singh', designation: 'Product Lead', review: "Clear communication and rapid delivery — they helped us ship a major feature in weeks.", img: 'https://images.unsplash.com/photo-1547426502-5f5f3b3b3b3d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Ananya Rao', designation: 'Marketing Manager', review: "Their creative work lifted our brand perception immediately. Highly recommended.", img: 'https://images.unsplash.com/photo-1544003404-7f38f8c2b1c1?auto=format&fit=crop&w=200&q=80' },
];

const BLOG_POSTS = [
  { 
    title: 'How We Drive Customer-Centric Business Growth in a Digital World',
    date: 'Nov 10, 2025',
    excerpt: 'We are incredibly happy to announce our new partnership and included partnerships.',
    imgText: 'Digital Partnership',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  },
  { 
    title: 'Five Key Strategies to Optimize Your Website\'s Performance',
    date: 'Nov 5, 2025',
    excerpt: 'A deep dive into the latest trends and best practices in web development.',
    imgText: 'Website Strategy',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
];

// Sample hero/section images (external placeholders)
const HERO_IMG = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80';
const CEO_IMG = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80';
const FILLER_IMG = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80';

// --- UTILITY COMPONENTS (Reusable Image and Star Rating) ---

const StarRating = ({ value = 5, size = 18 }) => {
  // Accessible star rating using SVGs; value is number of filled stars (0-5)
  const total = 5;
  return (
    <div role="img" aria-label={`${value} out of 5 stars`} className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < value;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" className={filled ? 'text-yellow-500' : 'text-yellow-300'} aria-hidden="true">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.265L12 19.771 4.583 23.86 6 15.595 0 9.748l8.332-1.73z" />
          </svg>
        );
      })}
    </div>
  );
};

const PlaceholderImage = ({ alt, text, isRounded = false, className = '' }) => (
  <div className={`relative w-full h-full ${isRounded ? 'rounded-full overflow-hidden' : 'rounded-xl overflow-hidden'} ${className}`}>
    <Image
      src={`https://placehold.co/600x400/3B82F6/white?text=${encodeURIComponent(text)}`}
      alt={alt}
      fill
      className="object-cover"
    />
  </div>
);


// --- SECTION COMPONENTS ---

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative">
  {/* Decorative Blue Blob (logo color palette) */}
  {/* Reverted: bg-cyan-200 to bg-blue-200 */}
  <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-brand-highlight rounded-full opacity-30 blur-3xl hidden md:block z-0" />
        
        <div className="lg:flex items-center justify-between z-10 relative">
          <div className="lg:w-1/2">
            {/* Accent color adjusted to logo blue */}
            <p className="text-brand-primary uppercase tracking-widest text-sm mb-3">About us</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Empowering Businesses to Succeed in the Digital Era 
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We help startups, brands, and enterprises grow limitlessly through Web, App, E-Commerce, and Quick Commerce Solutions — combining technology, creativity, and performance.
            </p>
            {/* Primary CTA uses logo blue */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold transition duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-bright focus:ring-offset-2"
                style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff', backgroundRepeat: 'no-repeat' }}
              >
                Get Free Consultation
              </a>
              <a href="#more" className="inline-flex items-center justify-center border border-brand-primary text-brand-primary py-3 px-6 rounded-full text-lg font-medium hover:bg-brand-highlight transition duration-200 focus:outline-none focus:ring-2 focus:ring-brand-highlight">Our Work</a>
            </div>
          </div>
          
            <div className="lg:w-5/12 mt-10 lg:mt-0">
      <div className="h-72 w-full overflow-hidden rounded-xl shadow-2xl relative">
        <Image src={HERO_IMG} alt="Team members working" fill className="object-cover" priority />
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-b">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const PhilosophySection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6 max-w-7xl">
//         <div className="lg:flex items-center justify-between">
          
//           {/* Left Side: Image and Philosophy - The most complex visual part */}
//           <div className="lg:w-1/2 mb-10 lg:mb-0 relative flex justify-center lg:justify-start">
//             {/* Custom Blob Shape Placeholder (logo blue tones) */}
//             {/* Reverted: bg-cyan-300 to bg-blue-200 */}
//             <div className="absolute w-64 h-64 bg-brand-highlight rounded-full opacity-40 blur-3xl top-10 left-10 transform -translate-x-1/2 hidden sm:block" />
            
//             <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80">
//               <Image src={CEO_IMG} alt="CEO or Founder" width={320} height={320} className="object-cover rounded-full shadow-2xl" priority />
//             </div>
//           </div>
          
//           {/* Right Side: Text and Quote */}
//           <div className="lg:w-1/2 lg:pl-16">
//             <p className="text-2xl font-bold text-gray-900 mb-4">
//               We Believe Great Businesses Always Put <span className="text-brand-bright">People First</span>.
//             </p>
//             <p className="text-lg text-gray-600 mb-8">
//               Our solutions are designed to grow your business. We focus on innovation, transparency, and a customer-first approach to achieve measurable results.
//             </p>
//             {/* Reverted: border to match logo blue */}
//             <blockquote className="border-l-4 border-brand-primary pl-4 italic text-gray-700 text-base sm:text-lg">
//               &ldquo;Ultimate Experiences, Story, Emotion & Purpose.&rdquo;
//             </blockquote>
//           </div>
//         </div>

//         {/* Services List integrated below the main content */}
//         <div className="pt-14">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Offerings:</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES_DATA.map((service, index) => (
//               <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300">
//                 <div className="shrink-0 mt-1">
//                   <svg className="w-6 h-6 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4-4h-6l-2 4h10l-2-4z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-700">{service}</p>
//                   <p className="text-sm text-gray-500 mt-1">Professional, measurable, tailored.</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
 
/* ------------------ New Structured Content Sections ------------------ */

const WhoWeAreSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Who We Are</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Samprakshi Infinity Solution is a forward-thinking Digital Transformation & E-Commerce Growth Company based in India. We help businesses — from early-stage startups to established enterprises — build a powerful digital presence and scale across web platforms, mobile apps, e-commerce marketplaces, and quick commerce channels.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Unlike typical agencies, we are a hybrid powerhouse: we blend technical engineering expertise with commercial growth strategies to deliver product-grade engineering and measurable commercial outcomes.
      </p>
    </div>
  </section>
);

const MissionSection = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-6 max-w-7xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
      <p className="text-gray-700 mb-4">Our mission is to empower every business with digital strength and market reach, regardless of size or industry.</p>
      <ul className="space-y-2">
        <li className="flex items-start gap-3">
          <HiCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" aria-hidden="true" />
          <span className="text-blue-700">Building technology that simplifies operations</span>
        </li>
        <li className="flex items-start gap-3">
          <HiCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" aria-hidden="true" />
          <span className="text-blue-700">Developing digital experiences that convert customers</span>
        </li>
        <li className="flex items-start gap-3">
          <HiCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" aria-hidden="true" />
          <span className="text-blue-700">Boosting brand growth on E-Commerce & Quick Commerce platforms</span>
        </li>
        <li className="flex items-start gap-3">
          <HiCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" aria-hidden="true" />
          <span className="text-blue-700">Providing data-driven insights for smarter decision-making</span>
        </li>
        <li className="flex items-start gap-3">
          <HiCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" aria-hidden="true" />
          <span className="text-blue-700">Delivering affordable & scalable solutions for all businesses</span>
        </li>
      </ul>
    </div>
  </section>
);

const VisionSection = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
      <p className="text-gray-700">To become India’s most trusted and innovative 360° Digital & E-Commerce Growth Partner — transforming how businesses grow online and empowering Indian sellers to become global brands.</p>
    </div>
  </section>
);

const CoreServicesSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 max-w-7xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl shadow-lg transform transition hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12  flex items-center justify-center bg-linear-to-br from-brand-primary to-brand-bright ">
              <FiCode className="w-6 h-6 text-blue-700" aria-hidden="true"  />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1 text-blue-700">Web & App Development</h4>
              <p className="text-gray-600">High-performance websites, portals, and mobile apps built for speed, security, and scalability.</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl shadow-lg transform transition hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12  flex items-center justify-center bg-linear-to-br from-brand-primary to-brand-bright ">
              <FiShoppingCart className="w-6 h-6 text-blue-700" aria-hidden="true"  />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1 text-blue-700">E-Commerce Enablement</h4>
              <p className="text-gray-600">Cataloging, SEO, ads, A+ content and marketplace operations for Amazon, Flipkart, Meesho and more.</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl shadow-lg transform transition hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12  flex items-center justify-center bg-linear-to-br from-brand-primary to-brand-bright ">
              <FiTruck className="w-6 h-6 text-blue-700" aria-hidden="true"  />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1 text-blue-700">Quick Commerce Integration</h4>
              <p className="text-gray-600">Onboarding & growth optimization for Blinkit, Zepto, Instamart and other hyperlocal platforms.</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl shadow-lg transform transition hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12  flex items-center justify-center bg-linear-to-br from-brand-primary to-brand-bright ">
              <FiMonitor className="w-6 h-6 text-blue-700" aria-hidden="true"  />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1 text-blue-700">Digital Marketing & Branding</h4>
              <p className="text-gray-600">Social media management, performance marketing, branding and creative content.</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl shadow-lg transform transition hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12  flex items-center justify-center bg-linear-to-br from-brand-primary to-brand-bright ">
              <FiDatabase className="w-6 h-6 text-blue-700" aria-hidden="true"  />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1 text-blue-700">Custom IT & Automation</h4>
              <p className="text-gray-600">Billing, CRM, ERP, custom dashboards and advanced automation systems like Billistry.</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl shadow-lg transform transition hover:-translate-y-2">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12  flex items-center justify-center bg-linear-to-br from-brand-primary to-brand-bright ">
              <FiBarChart2 className="w-6 h-6 text-blue-700" aria-hidden="true"  />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1 text-blue-700">Analytics & Growth Dashboards</h4>
              <p className="text-gray-600">Real-time analytics and growth dashboards to turn data into actionable outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-primary text-white">
            <HiCheck className="w-5 h-5 text-blue-700" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hybrid Expertise</h4>
            <p className="text-gray-600">One partner for tech + e-commerce + marketing.</p>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-primary text-white">
            <HiCheck className="w-5 h-5 text-blue-700" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Data-Driven Growth</h4>
            <p className="text-gray-600">Strategies powered by real insights and measurable KPIs.</p>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-primary text-white">
            <HiCheck className="w-5 h-5 text-blue-700" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">End-to-End Solutions</h4>
            <p className="text-gray-600">Everything from development to delivery and ongoing support.</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-primary text-white">
            <HiCheck className="w-5 h-5 text-blue-700" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Dedicated Support</h4>
            <p className="text-gray-600">Transparent communication, monitoring and long-term partnership.</p>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-primary text-white">
            <HiCheck className="w-5 h-5 text-blue-700" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Proven Success</h4>
            <p className="text-gray-600">25+ brands scaled, 500+ projects delivered, 99% client satisfaction.</p>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg flex items-start gap-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-primary text-white">
            <HiCheck className="w-5 h-5 text-blue-700" aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Affordable & Scalable</h4>
            <p className="text-gray-600">Solutions designed to grow with your business.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// const ApproachSection = () => (
//   <section className="py-12 bg-gray-900 text-white">
//     <div className="container mx-auto px-6 max-w-7xl text-center">
//       <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="p-6 bg-gray-800 rounded-xl">
//           <h4 className="font-semibold mb-2">Research & Strategy</h4>
//           <p className="text-gray-300">We analyse market, audience and product goals to craft a focused strategy.</p>
//         </div>
//         <div className="p-6 bg-gray-800 rounded-xl">
//           <h4 className="font-semibold mb-2">UI/UX & Development</h4>
//           <p className="text-gray-300">Design and engineering converge to build high-converting experiences.</p>
//         </div>
//         <div className="p-6 bg-gray-800 rounded-xl">
//           <h4 className="font-semibold mb-2">Marketplace & Marketing</h4>
//           <p className="text-gray-300">Onboarding, optimization, and performance-driven growth across channels.</p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

const CTASection = () => (
  <section id="contact" className="py-16 bg-white">
    <div className="container mx-auto px-6 max-w-7xl text-center">
      <h3 className="text-3xl font-extrabold mb-4">Join the Growth Revolution</h3>
      <p className="text-gray-700 mb-6">Whether you’re launching your first website or scaling across marketplaces and quick commerce, Samprakshi Infinity Solution is your all-in-one digital growth partner.</p>
      <a
        href="mailto:info@samprakshiinfinitysolution.com"
        role="button"
        aria-label="Get a Free Consultation"
        className="inline-flex items-center justify-center py-3 px-6 rounded-full text-lg font-semibold transition-transform duration-300 shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/30"
        style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff' }}
      >
        Get a Free Consultation
      </a>
    </div>
  </section>
);

/* ---------------- End new structured content ---------------- */

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
  {/* Small Decorative Blue Circle */}
  {/* Reverted: bg-blue-600 applied to match logo */}
  <div className="absolute top-20 right-20 w-12 h-12 bg-brand-primary rounded-full opacity-60 blur-sm z-0 hidden md:block" />
      
      <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          A Simple Yet Effective <span className="text-brand-bright">Three Step Process</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-2xl hover:bg-gray-700 transition duration-300 motion-safe:transform motion-safe:hover:-translate-y-1">
              {/* Step Number Circle */}
              {/* Accent: blue tones applied to match logo palette */}
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 border-brand-primary/50 transform hover:scale-105 transition">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
  {/* Accent color updated to the logo blue */}
  <p className="text-brand-primary uppercase tracking-widest text-sm mb-3">Our Story</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          The Amazing <span className="text-brand-bright">Team Members</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-start">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              {/* Team Member Image */}
           <div className="w-32 h-32 mb-4 relative overflow-hidden rounded-full border-4 border-brand-primary shadow-lg">
         <Image src={member.img} alt={member.name} fill className="object-cover" />
          </div>
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientsBar = () => {
  // Use a mix of logos and text placeholders to match the design's layout
  const clientLogos = ['Tata', 'Reliance', 'Flipkart', 'HDFC', 'Paytm', 'Ola'];

  return (
    <section className="py-16 bg-gray-50 border-t border-b">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-10">
          We are happy to work with <span className="font-extrabold">global largest brands</span>
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70">
          {clientLogos.map((logo, index) => (
            <div key={index} className="h-8 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
              {/* In a real app, this would be an SVG or Image */}
              <span className="text-xl font-sans font-extrabold text-gray-700">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return <TestimonialsCarousel items={TESTIMONIALS_DATA} />;
};

const BlogSection = () => {
  const BlogCard = ({ post }) => (
    <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden border">
      {/* Image Side */}
      <div className="md:w-1/2 h-48 md:h-auto overflow-hidden relative">
        <Image src={post.img} alt={post.imgText} fill className="object-cover" />
      </div>
      {/* Content Side */}
      <div className="p-6 md:w-1/2 text-left">
  <p className="text-sm text-brand-primary mb-2">{post.date}</p>
  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-brand-bright cursor-pointer transition">{post.title}</h3>
        <p className="text-gray-600 text-sm">{post.excerpt}</p>
        <div className="mt-4">
          <a href="#" className="text-brand-primary font-medium hover:underline">Read article →</a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          Keep up with our freshest <span className="text-brand-bright">trending Blogs</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MAIN APPLICATION COMPONENT ---

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* JSON-LD structured data for Organization and Breadcrumbs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "name": "Samprakshi Infinity Solution",
            "url": "https://samprakshiinfinitysolution.com",
            "logo": "https://samprakshiinfinitysolution.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/",
              "https://www.linkedin.com/",
              "https://twitter.com/"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English","Hindi"]
            }]
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type":"ListItem","position":1,"name":"Home","item":"https://samprakshiinfinitysolution.com"},
              {"@type":"ListItem","position":2,"name":"About","item":"https://samprakshiinfinitysolution.com/about-us"}
            ]
          }
        ]
      }) }} />
      
      {/* 1. Hero and CTA */}
      <HeroSection />
      
      {/* Who We Are + Mission + Vision + Services + Why Choose Us + Approach + CTA */}
      <WhoWeAreSection />
      <MissionSection />
      <VisionSection />
      <CoreServicesSection />
      <WhyChooseUsSection />
      {/* <ApproachSection /> */}
      <CTASection />
      
      {/* 2. Stats Bar */}
      <StatsBar />
      
      {/* 3. Philosophy, Mission, and Services */}
      {/* <PhilosophySection /> */}
      
      {/* 4. Filler Image (as seen in the screenshot) */}
      {/* <section className="py-20 bg-gray-900 flex justify-center items-center">
          <div className="container mx-auto px-6 max-w-7xl">
          <div className="h-56 w-full overflow-hidden rounded-xl relative">
            <Image src={FILLER_IMG} alt="Team collaboration image" fill className="object-cover opacity-80" />
          </div>
          </div>
      </section> */}

      {/* 5. Process Steps */}
      <ProcessSection />
      
      {/* 6. Team Members */}
      <TeamSection />
      
      {/* 7. Clients/Partnerships */}
      {/* <ClientsBar /> */}
      
      {/* 8. Testimonials */}
      <TestimonialsSection />
      
      {/* 9. Blog/News */}
      <BlogSection />
      
    </div>
  );
};

export default AboutPage;