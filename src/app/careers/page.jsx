import React from 'react';
import Image from 'next/image';
import JobListingsClient from './JobListingsClient';
import { JOB_LISTINGS, HERO_IMG } from './data';

export const metadata = {
  title: 'Careers — Join Our Team',
  description: 'Explore open roles, perks, and our hiring process. Build the future with us.',
  openGraph: {
    title: 'Careers — Join Our Team',
    description: 'Explore open roles, perks, and our hiring process. Build the future with us.',
    url: 'https://yourdomain.example/careers',
    siteName: 'YourCompany',
    images: [{ url: HERO_IMG, width: 1200, height: 720, alt: 'Our team collaborating' }],
    locale: 'en_US',
    type: 'website',
  },
};
// --- DATA DEFINITIONS ---

const COMPANY_VALUES = [
  { icon: '🚀', title: 'High Impact', description: 'Work on challenging projects that define the future of our industry.' },
  { icon: '💡', title: 'Growth Mindset', description: 'Continuous learning, mentorship, and personalized career development paths.' },
  { icon: '🤝', title: 'People First', description: 'A supportive, inclusive, and fun culture where you truly belong.' },
  { icon: '⚖️', title: 'Flexibility', description: 'Enjoy work-life balance with hybrid and flexible scheduling options.' },
];

const PERKS_DATA = [
    'Comprehensive Health & Dental Coverage',
    'Unlimited Paid Time Off (PTO)',
    'Annual Professional Development Stipend',
    '401k Matching Program',
    'Free Gym Membership',
    'Paid Parental Leave (6 months)',
];

// Shared data (jobs + hero) imported from ./data

// --- UTILITY COMPONENTS (Reused from About Page style) ---

const PlaceholderImage = ({ alt, text, isRounded = false, className = '' }) => (
  <div className={`relative w-full h-full ${isRounded ? 'rounded-full overflow-hidden' : 'rounded-xl overflow-hidden'} ${className}`}>
    <Image
      src={`https://placehold.co/1200x800/3B82F6/white?text=${encodeURIComponent(text)}`}
      alt={alt}
      fill
      className="object-cover"
      priority={false}
    />
  </div>
);


// --- SECTION COMPONENTS ---

const CareerHero = () => {
  return (
    <section className="pt-24 pb-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative">
  {/* Decorative Blue Blob (matching site logo palette) */}
  <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-3xl hidden md:block z-0" />
        
        <div className="lg:flex items-center justify-between z-10 relative">
          <div className="lg:w-1/2">
            <p className="text-blue-600 uppercase tracking-widest text-sm mb-3">Join Our Mission</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Build the Future with <span className="text-blue-700">Our Team</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We are looking for passionate, driven individuals ready to make a high impact. Discover open roles and start your journey today.
            </p>
            <a href="#openings" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-xl shadow-blue-300/50">
              View All Openings
            </a>
          </div>
          
          <div className="lg:w-5/12 mt-10 lg:mt-0">
            <div className="h-72 w-full rounded-xl overflow-hidden shadow-2xl">
              <Image src={HERO_IMG} alt="People collaborating" width={1200} height={720} className="object-cover w-full h-full" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
      Why <span className="text-blue-700">Join Us?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES.map((value, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500 transition duration-300 hover:shadow-xl">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Job listing now handled by client component `JobListingsClient` (search, filter, and modal)

const PerksSection = () => {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Amazing <span className="text-blue-400">Perks & Benefits</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PERKS_DATA.map((perk, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-800 rounded-xl shadow-2xl flex items-start text-left hover:bg-gray-700 transition duration-300"
              >
                {/* Orange bullet point for style */}
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 shrink-0" />
                <p className="text-gray-200">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

const HiringProcessSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                    Our Simple Hiring Process
                </h2>
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                        <p className="font-semibold text-gray-800">Application</p>
                    </div>
                    {/* Arrow connecting steps */}
                    <span className="hidden md:block text-gray-400 self-center text-4xl">→</span>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                        <p className="font-semibold text-gray-800">Screening Call</p>
                    </div>
                    <span className="hidden md:block text-gray-400 self-center text-4xl">→</span>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                        <p className="font-semibold text-gray-800">Technical Interview</p>
                    </div>
                    <span className="hidden md:block text-gray-400 self-center text-4xl">→</span>
                    <div className="text-center p-4">
                        <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                        <p className="font-semibold text-gray-800">Offer & Onboarding</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- MAIN APPLICATION COMPONENT ---

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* 1. Hero and CTA */}
      <CareerHero />
      
      {/* 2. Values / Why Join Us */}
      <ValuesSection />
      
  {/* 3. Job Listings (client-managed: search / filter / modal) */}
  <JobListingsClient jobs={JOB_LISTINGS} />

      {/* 4. Perks and Benefits (Dark Section style, matching Process Section) */}
      <PerksSection />
      
      {/* 5. Hiring Process */}
      <HiringProcessSection />
      
    </div>
  );
};

export default CareerPage;