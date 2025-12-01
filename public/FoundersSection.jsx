



"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Dummy client logos (replace these paths with your actual images)
const clientLogos = [
  "/iimagica-logo.png",
  "/thecomfortjourneylogo.png",
  "/hygenix-logo.png",
  "/febriwash-logo.png",
  "/sanav-logo.png",
  "/billistry-logo1.png",
];

// Testimonials data
// const testimonials = [
//   {
//     name: "Anita Sharma",
//     role: "CEO, TechVibe",
//     photo: "/ourclientbg.jpg",
//     feedback:
//       "Samprakshiinfinity Solution transformed our digital presence and helped us scale rapidly. Their team is exceptional!",
//   },
//   {
//     name: "Rohan Gupta",
//     role: "Product Manager, FinX",
//     photo: "/ourclientbg.jpg",
//     feedback:
//       "Reliable, innovative, and attentive. Working with Samprakshiinfinity Solution was a game-changer for our product launch.",
//   },
//   {
//     name: "Simran Kaur",
//     role: "Founder, GreenLeaf",
//     photo: "/ourclientbg.jpg",
//     feedback:
//       "Their passion for excellence and customer focus is unparalleled. Highly recommended for any tech project.",
//   },
// ];

// Founders data
const founders = [
  {
    name: "Sakshi Kumrawat",
    title: "Founder & Strategy Lead",
    image: "/ceo.jpg",
    bio: "Visionary strategist with a passion for building impactful brands and scalable solutions.",
  },

  {
    name: "Prabal kumrawat",
    title: "Co-Founder & Tech Head",
    image: "/ourclientbg.jpg",
    bio: "Tech enthusiast & full-stack architect, driving innovation with code and creativity.",
  },
];

// Core Values
const coreValues = [
  { title: "Innovation", desc: "Pushing boundaries to deliver next-gen solutions." },
  { title: "Integrity", desc: "Transparency and honesty in every interaction." },
  { title: "Collaboration", desc: "Teamwork that drives success." },
  { title: "Customer Success", desc: "Your growth is our mission." },
];

// Stats data
const stats = [
  { label: "Years in Business", value: 7 },
  { label: "Projects Delivered", value: 60 },
  { label: "Satisfied Clients", value: 45 },
  { label: "Countries Served", value: 5 },
];

// Why Choose Us with inline SVG icons
const whyChooseUs = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#2478E7] mb-4 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12v8" />
        <path d="M21 15v6" />
        <path d="M3 15v6" />
      </svg>
    ),
    title: "Proven Expertise",
    desc: "Decades of combined experience delivering top-notch digital products.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#2478E7] mb-4 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "We value your time and consistently meet project deadlines.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#2478E7] mb-4 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21 12v-2a10 10 0 0 0-18 0v2" />
        <path d="M9 16v-4h6v4" />
      </svg>
    ),
    title: "Scalable Solutions",
    desc: "Our architecture supports your growth — from startup to enterprise.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#2478E7] mb-4 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    title: "Customer-Centric",
    desc: "Your goals drive our approach and solutions every step of the way.",
  },
];

// Hook for animated counting
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    if (end === 0) return;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      if (start > end) {
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

export default function AboutSection() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-[#f7faff] py-28 px-6 md:px-24 font-sans">
      {/* Intro */}
      <div className="text-center mb-24" data-aos="fade-down">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          About <span className="text-[#2478E7]">Samprakshi Infinity Solution</span>
        </h2>
        <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto tracking-wide">
          Samprakshi Infinity Solution is your premier global partner for
          transformative digital innovation. We craft elegant, scalable technology
          solutions that empower your business to thrive in today’s fast-paced
          world.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mb-28" data-aos="fade-up">
        <h3 className="text-4xl font-semibold text-center text-gray-900 mb-12 tracking-wide">
          Why Choose Us
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {whyChooseUs.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-default"
            >
              {icon}
              <h4 className="text-xl font-bold text-[#2478E7] mb-2">{title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto mb-28">
        <h3
          className="text-4xl font-bold text-center text-gray-900 mb-14 tracking-wide"
          data-aos="fade-down"
        >
          Our Core Values
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10" data-aos="fade-up">
          {coreValues.map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-[#d9e8ff] to-[#f4f8ff] p-10 rounded-3xl shadow-md hover:shadow-lg transition cursor-default"
            >
              <h4 className="text-xl font-semibold text-[#2478E7] mb-3">{title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        className="max-w-5xl mx-auto mb-32 grid sm:grid-cols-2 md:grid-cols-4 gap-10"
        data-aos="fade-up"
      >
        {stats.map(({ label, value }, idx) => {
          const count = useCountUp(value);
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-12 shadow-xl text-center hover:shadow-2xl transition cursor-default"
            >
              <p className="text-5xl font-extrabold text-[#2478E7]">{count}</p>
              <p className="text-gray-500 mt-3 uppercase tracking-wide font-semibold">
                {label}
              </p>
            </div>
          );
        })}
      </div>

      <section className="relative bg-gray-50 py-24 px-6 md:px-12 overflow-hidden">
  {/* Background blob */}
  <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300 via-purple-300 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16">
    
    {/* Founder Image with ring */}
    <div className="flex justify-center items-center relative">
      <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-20" />
      <img
        src={founders[0].image}
        alt={founders[0].name}
        className="relative w-60 h-60 object-cover rounded-full border-4 border-white shadow-xl"
      />
    </div>

    {/* Founder Text Card */}
    <div className="backdrop-blur-sm bg-white/70 p-10 rounded-3xl shadow-lg border border-gray-200">
      <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
        Our Visionary Leader
      </p>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-3 font-serif">
        {founders[0].name}
      </h2>
      <p className="text-indigo-500 font-medium text-md mb-4 tracking-wide">
        {founders[0].title}
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        {founders[0].bio}
      </p>
    </div>
  </div>
</section>


      {/* Testimonials */}
      {/* <div className="max-w-5xl mx-auto mt-28" data-aos="fade-up">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-wide">
          What Our Clients Say
        </h3>
        <div className="relative overflow-hidden">
          <style>{`
         
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
         
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div className=" flex space-x-10 pb-3.5 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6">
            {testimonials.map(({ name, role, photo, feedback }, idx) => (
              <div
                key={idx}
                className="snap-center min-w-[320px] bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={photo}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#2478E7]"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
                    <p className="text-[#2478E7] text-sm">{role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed">{`"${feedback}"`}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-gray-500 text-sm italic select-none">
            * Scroll horizontally for more testimonials
          </p>
        </div>
      </div> */}

      {/* Trusted By Logos */}
      <div
        className="max-w-6xl mx-auto mt-28 py-10 border-t border-gray-200"
        data-aos="fade-up"
      >
        <h4 className="text-2xl font-semibold text-center mb-12 tracking-wide text-gray-900">
          Trusted By
        </h4>
        <div className="flex justify-center object-cover flex-wrap items-center gap-12">
          {clientLogos.map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt={`Client Logo ${idx + 1}`}
              width={150}
              height={96}
              className="h-24 w-auto transition cursor-pointer "
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-32" data-aos="fade-up">
        <h4 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
          Ready to build something exceptional?
        </h4>
        <button onClick={() => router.push("/contact-us")} className="bg-[#2478E7] text-black px-10 py-4 rounded-full shadow-xl hover:bg-[#1e65c7] transition font-semibold text-lg tracking-wide">
          Contact Our Team
        </button>
      </div>
    </section>
  );
}
