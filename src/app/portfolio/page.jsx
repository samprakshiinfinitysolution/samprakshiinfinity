"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "B2B Marketplace Revamp",
    excerpt:
      "Redesigned a complex B2B commerce platform to boost conversion, simplify bulk ordering, and integrate headless checkout tied to ERP systems.",
    tags: ["Ecommerce", "Next.js", "Headless"],
    img: "/images/portfolio-1.jpg",
    href: "/portfolio/b2b-marketplace",
  },
  {
    title: "Mobile Banking App",
    excerpt:
      "Built a secure cross-platform mobile banking app with biometric auth, offline support, and regulatory-grade data handling.",
    tags: ["Mobile", "Flutter", "Fintech"],
    img: "/images/portfolio-2.jpg",
    href: "/portfolio/mobile-banking",
  },
  {
    title: "Analytics Platform",
    excerpt:
      "Delivered a real-time analytics platform with low-latency dashboards and a scalable BigQuery pipeline for cross-channel reporting.",
    tags: ["Data", "BigQuery", "GCP"],
    img: "/images/portfolio-3.jpg",
    href: "/portfolio/analytics-platform",
  },
  {
    title: "AI Recommendation Engine",
    excerpt:
      "Implemented a production recommendation stack (RAG + matrix factorization + ranking) that increased engagement and revenue per user.",
    tags: ["ML", "Recommendations", "Python"],
    img: "/images/portfolio-4.jpg",
    href: "/portfolio/recommendation-engine",
  },
  {
    title: "Headless Commerce",
    excerpt:
      "Migrated a monolith to composable commerce with a headless CMS and modern storefronts for faster merchandizing and releases.",
    tags: ["Commerce", "Headless", "Stripe"],
    img: "/images/portfolio-5.jpg",
    href: "/portfolio/headless-commerce",
  },
  {
    title: "On-device ML Proof-of-Concept",
    excerpt:
      "Proved an on-device ML workflow for low-latency inference and battery-efficient pipelines used in mobile and edge scenarios.",
    tags: ["Mobile", "ML", "On-device"],
    img: "/images/portfolio-6.jpg",
    href: "/portfolio/on-device-ml",
  },
]


export default function PortfolioPage() {
  const [activeTag, setActiveTag] = useState("All")

  const tags = useMemo(() => {
    const s = new Set()
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)))
    return ["All", ...Array.from(s).sort()]
  }, [])

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects
    return projects.filter((p) => p.tags.includes(activeTag))
  }, [activeTag])

  return (
    <main className="container mx-auto mt-16 px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <section>
          <nav className="text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>/</li>
              <li className="font-medium">Portfolio</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">Selected case studies</h1>
          <p className="text-slate-600 mb-6 max-w-prose">
            A selection of projects showing how we design, build and ship reliable products — web, mobile and data systems.
          </p>

          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-sky-600 text-white px-4 py-2 text-sm">
              Talk to our team
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 text-slate-700 px-4 py-2 text-sm">
              See services
            </Link>
          </div>
        </section>

        <section className="h-64 rounded-lg overflow-hidden bg-slate-100">
          {/* hero image placeholder */}
          <Image src="/images/portfolio-hero.jpg" alt="Portfolio hero" width={1200} height={720} className="object-cover w-full h-full" />
        </section>
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap gap-3 items-center">
        <div className="text-sm text-slate-500 mr-2">Filter:</div>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTag(t)}
            className={`px-3 py-1 rounded-full text-sm ${t === activeTag ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <section className="mt-8">
        {filtered.length === 0 ? (
          <div className="text-slate-600">No projects found for &quot;{activeTag}&quot;.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.title} className="rounded-lg p-px bg-linear-to-r from-slate-200 to-slate-200 hover:from-sky-500 hover:via-indigo-500 hover:to-pink-500 transition-colors duration-300 group">
                <article className="bg-white rounded-md overflow-hidden flex flex-col h-full shadow-sm group-hover:shadow-lg transform transition-transform duration-200 group-hover:-translate-y-1">
                  <div className="relative h-40 w-full">
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  </div>

                  <div className="p-4 flex flex-col grow">
                    <h3 className="text-lg font-medium mb-2">{p.title}</h3>
                    <p className="text-slate-600 mb-4 grow">{p.excerpt}</p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link href={p.href} className="text-sky-600 text-sm">
                        View case study →
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Featured case study */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Featured case study</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative h-56 md:h-auto md:col-span-1">
              <Image src="/images/portfolio-1.jpg" alt="Featured" fill className="object-cover" />
            </div>
            <div className="p-6 md:col-span-2">
              <h3 className="text-xl font-semibold">B2B Marketplace Revamp</h3>
              <p className="text-slate-600 mt-3">We redesigned a complex B2B marketplace to improve conversion, reduce cart abandonment and integrate a headless checkout flow tied to inventory systems.</p>
              <ul className="mt-4 list-disc pl-5 text-slate-600 space-y-1">
                <li>Headless commerce with granular promotions</li>
                <li>Server-side rendering for SEO and performance</li>
                <li>Robust analytics pipeline for funnel insights</li>
              </ul>
              <div className="mt-4">
                <Link href="/portfolio/b2b-marketplace" className="text-sky-600">Read full case study →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="mt-10 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-lg font-bold mb-2">Discover</div>
            <div className="text-slate-600">Research, stakeholder alignment and rapid prototyping to validate ideas early.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-lg font-bold mb-2">Build</div>
            <div className="text-slate-600">Iterative delivery with CI/CD, tests and observability so you get value fast.</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-lg font-bold mb-2">Scale</div>
            <div className="text-slate-600">Performance optimizations, autoscaling and long-term product support.</div>
          </div>
        </div>
      </section>

      {/* Technologies used */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Technologies we use</h2>
        <div className="flex flex-wrap gap-3">
          {[
            'React', 'Next.js', 'Flutter', 'Node.js', 'Postgres', 'BigQuery', 'Redis', 'TensorFlow', 'PyTorch', 'Kubernetes', 'AWS'
          ].map((t) => (
            <span key={t} className="px-3 py-1 bg-slate-100 rounded text-sm text-slate-700">{t}</span>
          ))}
        </div>
      </section>

      {/* Awards & recognition */}
      <section className="mt-10 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Awards & recognition</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            'Best Fintech App 2023',
            'Top 50 Startups Partner',
            'Design Excellence 2022',
            'AI Innovators 2024'
          ].map((a) => (
            <div key={a} className="bg-white p-3 rounded-lg shadow-sm text-sm text-slate-700">{a}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 bg-slate-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Have a project in mind?</h3>
        <p className="text-slate-600 mb-4">Tell us about your goals and we’ll propose a plan tailored to your needs.</p>
        <div className="flex justify-center gap-4">
          <Link href="/contact" className="bg-sky-600 text-white px-4 py-2 rounded-md">Request a consultation</Link>
          <Link href="/portfolio" className="text-slate-700 px-4 py-2 rounded-md border">Browse all projects</Link>
        </div>
      </section>
    </main>
  )
}
