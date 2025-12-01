"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// export const metadata = {
// 	title: "Development — Services | Company",
// 	description:
// 		"Enterprise-grade development services: web, mobile, cloud and AI. Compact hero, image carousel with thumbnails, services grid and FAQ.",
// }

const heroImages = [
	{ src: "/images/photo.jpg", alt: "Development hero 1" },
	{ src: "/images/dev-hero-2.jpg", alt: "Development hero 2" },
	{ src: "/images/dev-hero-3.jpg", alt: "Development hero 3" },
]

const services = [
	{
		title: "Custom Web Applications",
		description:
			"Scalable, tested and accessible web apps built with modern stacks — React, Next.js, Node and secure APIs.",
		tags: ["Next.js", "React", "API"],
		href: "/development/web-development",
	},
	{
		title: "Mobile & Cross-Platform",
		description:
			"Native and cross-platform mobile apps (iOS, Android, React Native, Flutter) with CI/CD and device testing.",
		tags: ["iOS", "Android", "React Native"],
		href: "/development/app-development",
	},
	{
		title: "Cloud & DevOps",
		description:
			"Cloud architecture, cost-optimised infra, containerisation and automated delivery pipelines for reliable ops.",
		tags: ["AWS", "Azure", "Kubernetes"],
		href: "/development/cloud-devops",
	},
	{
		title: "Machine Learning & AI",
		description:
			"Production ML systems, model ops, recommendation engines and NLP solutions that integrate with your product.",
		tags: ["ML", "MLOps", "NLP"],
		href: "/development/machine-learning-ai",
	},
	{
		title: "Ecommerce Platforms",
		description: "High-conversion ecommerce stores and headless commerce integrations with analytics and payments.",
		tags: ["Commerce", "Stripe", "Headless"],
		href: "/development/web-development/ecommerce-development-services",
	},
	{
		title: "UX & Product Engineering",
		description:
			"Design systems, accessibility, performance tuning and continuous user-focused product engineering.",
		tags: ["Design", "Accessibility", "Performance"],
		href: "/services/ux-design",
	},
]

const faqs = [
	{
		q: "How long does a typical project take?",
		a: "Project timelines depend on scope. Small features can ship in 2–4 weeks; full platforms typically take 3–6 months with iterative delivery.",
	},
	{
		q: "Do you provide dedicated teams?",
		a: "Yes — we staff dedicated squads (engineers, QA, product design) or embed with your team depending on your needs.",
	},
	{
		q: "How do you handle maintenance and SLOs?",
		a: "We offer ongoing support, monitoring, SLO setup and on-call rotations. SLAs and response targets are agreed per contract.",
	},
]

export default function DevelopmentPage() {
	const [heroIndex, setHeroIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(true)
	const intervalRef = useRef(null)
	const manualTimeoutRef = useRef(null)

	useEffect(() => {
		// autoplay interval when playing
		if (isPlaying) {
			intervalRef.current = setInterval(() => {
				setHeroIndex((i) => (i + 1) % heroImages.length)
			}, 4000)
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
			if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current)
		}
	}, [isPlaying])

	const handleThumbnailClick = (idx) => {
		setHeroIndex(idx)
		// pause autoplay for a short duration after manual interaction
		setIsPlaying(false)
		if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current)
		manualTimeoutRef.current = setTimeout(() => setIsPlaying(true), 5000)
	}

	return (
		<main className="container mx-auto mt-16 px-6 py-12">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
				{/* Left: heading and CTA */}
				<section>
					<nav className="text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
						<ol className="flex gap-2">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>/</li>
							<li className="font-medium">Development</li>
						</ol>
					</nav>

					<h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">Development Services — Web, Mobile, Cloud & AI</h1>

					<p className="text-slate-600 mb-6 max-w-prose">
						We build production-grade software: performant frontends, resilient backends, and ML systems that scale.
						Partner with us for architecture, delivery and ongoing product evolution.
					</p>

					<div className="flex gap-3">
						{/* <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm">
							Request a Consultation
						</Link> */}
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
						{/* <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate-700 px-4 py-2 text-sm">
							See our work
						</Link> */}
	                </div>
	                </section>
				{/* Right: hero image + thumbnails */}
				<section className="space-y-3" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
					<div className="relative w-full h-72 rounded-lg overflow-hidden bg-slate-100">
						<AnimatePresence initial={false} mode="wait">
							<motion.div
								key={heroIndex}
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -30 }}
								transition={{ duration: 0.45 }}
								className="absolute inset-0 flex items-center justify-center"
							>
								<Image src={heroImages[heroIndex].src} alt={heroImages[heroIndex].alt} width={1200} height={720} className="object-cover w-full h-full" />
							</motion.div>
						</AnimatePresence>
					</div>

					<div className="flex gap-3">
						{heroImages.map((img, idx) => (
							<button
								key={img.src}
								onClick={() => handleThumbnailClick(idx)}
								aria-label={`Show slide ${idx + 1}`}
								className={`w-20 h-12 rounded-md overflow-hidden border ${idx === heroIndex ? "border-slate-900" : "border-transparent"}`}
							>
								<Image src={img.src} alt={img.alt} width={160} height={90} className="object-cover w-full h-full" />
							</button>
						))}
					</div>
				</section>
			</div>

			{/* Services grid */}
			<section className="mt-12">
				<h2 className="text-2xl font-semibold mb-4">Our core capabilities</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((svc) => (
						<article key={svc.title} className="bg-white p-5 rounded-lg shadow-sm flex flex-col h-full">
							<div className="flex items-center justify-between mb-3">
								<h3 className="text-lg font-medium">{svc.title}</h3>
								<div className="text-sm text-slate-500">{svc.tags[0]}</div>
							</div>

							<p className="text-slate-600 mb-4 grow">{svc.description}</p>

							<div className="flex flex-wrap gap-2 mt-4">
								{svc.tags.map((t) => (
									<span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">
										{t}
									</span>
								))}
							</div>

							<div className="pt-4 border-t flex items-center justify-between mt-auto">
								<Link href={svc.href || "#"} className="text-sky-600 text-sm inline-flex items-center gap-2">
									Learn more
								</Link>
								<span className="text-xs text-slate-500">Trusted by enterprise clients</span>
							</div>
						</article>
					))}
				</div>
			</section>

					{/* Our process */}
					<section className="mt-12 bg-slate-50 p-6 rounded-lg">
						<h2 className="text-2xl font-semibold mb-4">Our process</h2>
						<p className="text-slate-600 max-w-prose mb-6">A predictable, transparent delivery process so you get value early and often.</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
							<div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
								<div className="text-xl font-bold mb-2">1. Align</div>
								<div className="text-slate-600 grow">Discovery, goals and OKRs. We align on outcomes and success metrics.</div>
							</div>
							<div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
								<div className="text-xl font-bold mb-2">2. Prototype</div>
								<div className="text-slate-600 grow">Fast experiments and interactive prototypes to validate assumptions.</div>
							</div>
							<div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
								<div className="text-xl font-bold mb-2">3. Build</div>
								<div className="text-slate-600 grow">Incremental delivery with CI/CD, tests and observability baked in.</div>
							</div>
							<div className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full">
								<div className="text-xl font-bold mb-2">4. Operate</div>
								<div className="text-slate-600 grow">Monitoring, SLOs and continuous improvement to keep you running smoothly.</div>
							</div>
						</div>
					</section>

					{/* Industries we serve */}
					<section className="mt-10">
						<h2 className="text-2xl font-semibold mb-4">Industries we serve</h2>
						<div className="flex flex-wrap gap-3">
							{[
								"Fintech",
								"Healthcare",
								"Retail & Ecommerce",
								"SaaS",
								"Logistics",
								"Media & Entertainment",
							].map((industry) => (
								<span key={industry} className="px-3 py-1 bg-slate-100 rounded text-sm text-slate-700">
									{industry}
								</span>
							))}
						</div>
					</section>

					{/* Tech stack */}
					<section className="mt-10 bg-slate-50 p-6 rounded-lg">
						<h2 className="text-2xl font-semibold mb-4">Tech stack</h2>
						<p className="text-slate-600 max-w-prose mb-6">We use proven, modern technologies across frontend, backend, cloud and data platforms.</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							<div className="bg-white p-4 rounded-lg shadow-sm">
								<div className="font-semibold mb-2">Frontend</div>
								<div className="flex flex-wrap gap-2">
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">React</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Next.js</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Tailwind</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">TypeScript</span>
								</div>
							</div>

							<div className="bg-white p-4 rounded-lg shadow-sm">
								<div className="font-semibold mb-2">Backend & APIs</div>
								<div className="flex flex-wrap gap-2">
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Node.js</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Express</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">GraphQL</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">NestJS</span>
								</div>
							</div>

							<div className="bg-white p-4 rounded-lg shadow-sm">
								<div className="font-semibold mb-2">Cloud & Infra</div>
								<div className="flex flex-wrap gap-2">
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">AWS</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Azure</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">GCP</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Kubernetes</span>
								</div>
							</div>

							<div className="bg-white p-4 rounded-lg shadow-sm">
								<div className="font-semibold mb-2">Data & Machine Learning</div>
								<div className="flex flex-wrap gap-2">
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Postgres</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">MongoDB</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Redis</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">BigQuery</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Snowflake</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Kafka</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">TensorFlow</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">PyTorch</span>
								</div>
							</div>

							<div className="bg-white p-4 rounded-lg shadow-sm">
								<div className="font-semibold mb-2">CI / CD</div>
								<div className="flex flex-wrap gap-2">
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">GitHub Actions</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Jenkins</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">CircleCI</span>
								</div>
							</div>

							<div className="bg-white p-4 rounded-lg shadow-sm">
								<div className="font-semibold mb-2">Monitoring</div>
								<div className="flex flex-wrap gap-2">
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Prometheus</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Grafana</span>
									<span className="px-2 py-1 bg-slate-100 rounded text-sm">Sentry</span>
								</div>
							</div>
						</div>
					</section>
                    {/* Flutter & Mobile Engineering */}
			<section className="mt-10">
				<h2 className="text-2xl font-semibold mb-4">Flutter & Mobile Engineering</h2>
				<div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<p className="text-slate-600 mb-4">We build high-performance cross-platform mobile apps using Flutter and native integrations. Our teams deliver maintainable architecture, animation-rich UIs, and strong CI/CD for mobile delivery.</p>
						<ul className="list-disc pl-5 text-slate-600 space-y-2">
							<li>Single codebase for iOS & Android with native performance</li>
							<li>Platform integrations (payments, push, native modules)</li>
							<li>Automated device testing and app-store release pipelines</li>
						</ul>
					</div>
					<div>
						<div className="grid grid-cols-2 gap-3">
							<div className="p-3 border rounded">Flutter UI & Animations</div>
							<div className="p-3 border rounded">State Management (Riverpod, Bloc)</div>
							<div className="p-3 border rounded">Native Modules & Plugins</div>
							<div className="p-3 border rounded">On-device ML</div>
						</div>
						<div className="mt-4">
							<Link href="/development/app-development" className="inline-flex items-center gap-2 text-sky-600">Explore mobile services</Link>
						</div>
					</div>
				</div>
			</section>

					{/* Clients / Testimonials */}
					<section className="mt-12">
						<h2 className="text-2xl font-semibold mb-4">Trusted by</h2>
						{/* Single white card that contains logos, testimonials and CTAs for consistent layout */}
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center justify-items-center">
								{/* placeholder logo boxes */}
								{[
									{ name: 'Acme', abbr: 'AC' },
									{ name: 'PayCo', abbr: 'PC' },
									{ name: 'Healthly', abbr: 'HL' },
									{ name: 'ShopPlus', abbr: 'SP' },
									{ name: 'TransitX', abbr: 'TX' },
									{ name: 'FinServe', abbr: 'FS' },
									{ name: 'LogiMove', abbr: 'LM' },
									{ name: 'MediaHub', abbr: 'MH' },
								].map((c) => (
									<div key={c.name} className="flex flex-col items-center justify-center h-14 w-full max-w-[160px] bg-slate-100 rounded p-2">
										<span className="font-medium text-slate-700 text-sm text-center truncate">{c.name}</span>
									</div>
								))}
							</div>

							<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
								<blockquote className="bg-slate-50 p-4 rounded-lg">
									<p className="text-slate-700">“Their team helped us migrate to a performant platform and cut costs by 40%.”</p>
									<footer className="mt-3 text-sm text-slate-500">— CTO, PayCo</footer>
								</blockquote>

								<blockquote className="bg-slate-50 p-4 rounded-lg">
									<p className="text-slate-700">“Fast delivery, strong engineering, and excellent communication throughout.”</p>
									<footer className="mt-3 text-sm text-slate-500">— Head of Product, ShopPlus</footer>
								</blockquote>
							</div>

							<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
								<button className="bg-sky-600 text-white px-4 py-2 rounded-md">See case studies</button>
								<Link href="/contact" className="text-slate-700">Request a tailored case study</Link>
							</div>
						</div>
					</section>

					{/* FAQ */}
			<section className="mt-12">
				<h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
				<div className="space-y-3">
								{faqs.map((f) => (
									<details key={f.q} className="group bg-white p-4 rounded-lg">
							<summary className="flex items-center justify-between cursor-pointer list-none">
								<span className="font-medium">{f.q}</span>
								<svg className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</summary>
							<div className="mt-3 text-slate-600">{f.a}</div>
						</details>
					))}
				</div>
			</section>

			
		</main>
	)
}

