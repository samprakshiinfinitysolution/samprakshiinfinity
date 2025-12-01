"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronDown } from "lucide-react"
import image40 from "@/assets/marketing/social-media-marketing1.png"
import image41 from "@/assets/marketing/social-media-marketing2.png"

export default function DigitalMarketingPage() {
  const [activeThumb, setActiveThumb] = useState(0)

  const services = [
    { title: "Content Marketing", slug: "content-marketing", desc: "Strategy-led content that attracts and converts — blogs, guides, long-form content and video to build authority and pipeline.", tags: ["content", "strategy"] },
    { title: "Email Marketing", slug: "email-marketing", desc: "Segmented, automated journeys and campaign management to increase retention, engagement and lifetime value.", tags: ["automation", "crm"] },
    { title: "SEO", slug: "seo", desc: "Technical SEO, on-page optimization and link-building to grow qualified organic traffic and visibility.", tags: ["technical", "organic"] },
    { title: "Social Media Marketing", slug: "social-media-marketing", desc: "Platform-specific content, community management and paid social campaigns to grow awareness and conversions.", tags: ["social", "creative"] },
  ]

  const thumbs = [
    { label: "Campaigns", color: "from-sky-500 to-indigo-600" },
    { label: "Reports", color: "from-emerald-400 to-teal-600" },
    { label: "Creative", color: "from-pink-500 to-rose-600" },
  ]

  const heroImages = [image40, image41]
  const [heroIndex, setHeroIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef(null)
  const manualTimeoutRef = useRef(null)

  useEffect(() => {
    if (!isPlaying) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setHeroIndex((p) => (p + 1) % heroImages.length), 4000)
    return () => clearInterval(intervalRef.current)
  }, [isPlaying, heroImages.length])

  useEffect(() => {
    const mt = manualTimeoutRef.current
    const ir = intervalRef.current
    return () => {
      if (ir) clearInterval(ir)
      if (mt) clearTimeout(mt)
    }
  }, [])

  return (
    <main className="max-w-7xl mx-auto mt-16 px-6 py-12">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm font-medium text-sky-600">Digital marketing</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Digital marketing that scales growth — strategy, execution, and measurable ROI</h1>
          <p className="mt-4 text-slate-600 max-w-2xl">We combine storytelling, performance and data to amplify your brand. From launching acquisition funnels to running brand-led campaigns — we design measurable programs that move business metrics.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-block bg-sky-600 text-white px-5 py-3 rounded-md shadow-sm hover:bg-sky-700">Book a consultation</Link>
            <Link href="#services" className="inline-block px-5 py-3 rounded-md border text-slate-700">Explore services</Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Small teams, big results</h3>
              <p className="text-sm text-slate-600 mt-2">Flexible engagements that fit product and engineering rhythms.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Transparent reporting</h3>
              <p className="text-sm text-slate-600 mt-2">Clear KPIs, weekly dashboards and monthly strategy sessions.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
            <div className="rounded-xl overflow-hidden bg-gray-50 h-72 shadow-sm">
              <Image src={heroImages[heroIndex]} alt={`Hero ${heroIndex + 1}`} width={1200} height={720} className="w-full h-72 object-cover" />
            </div>

            <div className="mt-3 flex items-center gap-3" aria-hidden>
              {heroImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setHeroIndex(i)
                    setIsPlaying(false)
                    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current)
                    manualTimeoutRef.current = setTimeout(() => setIsPlaying(true), 5000)
                  }}
                  className={`flex-1 p-2 rounded-lg overflow-hidden border ${i === heroIndex ? 'ring-2 ring-sky-300 scale-105' : 'border-gray-200'} transition-transform`}
                >
                  <Image src={img} alt={`Thumb ${i + 1}`} width={240} height={140} className="w-full h-10 object-cover rounded-md" />
                  <div className="mt-2 text-xs text-slate-700 text-center">{thumbs[i]?.label}</div>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold">Why clients pick us</h4>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>Outcome-driven roadmaps</li>
              <li>Flexible resourcing and fast ramp</li>
              <li>Actionable reports and dashboards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our services</h2>
        <p className="text-slate-600 mt-2 mb-6 max-w-2xl">We focus on programs that scale. Below are core offerings we commonly run for clients.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-transform hover:shadow-xl hover:-translate-y-1">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <Link href={`/digital-marketing/${s.slug}`} className="text-sky-600 text-sm">Learn more</Link>
                <Link href="/contact" className="text-sm bg-sky-600 text-white px-3 py-1 rounded">Start project</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-slate-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Ready to grow?</h3>
  <p className="text-slate-600 mb-4">Schedule a short discovery call and we will propose a focused 90-day plan to show traction.</p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="bg-sky-600 text-white px-5 py-3 rounded-md">Request a consultation</Link>
          <Link href="/services" className="text-slate-700 px-5 py-3 rounded-md border">See pricing</Link>
        </div>
      </section>
    </main>
  )
}
