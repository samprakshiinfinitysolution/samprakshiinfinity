"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function HeroSection() {
  const slides = React.useMemo(() => [
    {
      id: 1,
      title: 'App Development',
      desc: 'Mobile & desktop app development: native iOS/Android and cross-platform (React Native, Flutter) solutions designed for performance, reliability, and maintainability. We build secure, offline-capable apps with scalable backends, CI/CD pipelines, automated testing, and performance monitoring so your product delivers fast, predictable experiences that improve retention and conversions. Contact us to prototype, validate, and ship production-ready apps.',
      image: '/images/website1.png',
      features: ['Cross-platform & native apps', 'Robust CI/CD & observability', 'Performance & offline support'],
    },
    {
      id: 2,
      title: 'Web Development',
      desc: 'Modern web development: fast, SEO-friendly, and accessible single-page and multi-page applications built with React, Next.js, and proven backend patterns. We optimize for Core Web Vitals, semantic HTML, server-side rendering, and progressive enhancement so your site ranks better, loads quickly, and converts visitors into customers.',
      image: '/images/website2.png',
      features: ['Performance & SEO', 'Accessible & responsive', 'Modular & testable architecture'],
    },
    {
      id: 3,
      title: 'Digital Marketing',
      desc: 'Data-driven digital marketing: SEO, paid acquisition (PPC), content strategy, and analytics to acquire high-quality users and improve lifetime value. We create measurable growth programs using experimentation, attribution models, and conversion optimization to scale profitable channels and reduce CAC.',
      image: '/images/website3.png',
      features: ['Full-funnel SEO & Ads', 'Data-driven experiments', 'Conversion-focused content'],
    },
    {
      id: 4,
      title: 'Back-Office Automation',
      desc: 'Back-office automation and integrations: reduce errors and manual overhead with ERP connectors, workflow orchestration, and audit-ready tooling. We design permissioned systems with robust logging, validation, and reporting so finance and operations teams can scale confidently and focus on high-value work.',
      image: '/images/website4.png',
      features: ['ERP & integrations', 'Audit-ready automation', 'Operational reporting & alerts'],
    },
    {
      id: 5,
      title: 'E-Commerce',
      desc: 'E‑commerce platforms engineered for conversion: secure payments, optimized checkout flows, subscription management, and inventory/fulfillment integrations. We focus on speed, trust signals, fraud mitigation, and analytics so your store converts visitors into repeat customers while keeping operations lean.',
      image: '/images/website5.png',
      features: ['Checkout & payments', 'Inventory & fulfillment', 'Subscriptions & CRM'],
    },
  ], [])

  // extended slides (cloned head/tail) for seamless loop
  const extSlides = React.useMemo(() => {
    if (!slides || slides.length === 0) return []
    const first = slides[0]
    const last = slides[slides.length - 1]
    return [last, ...slides, first]
  }, [slides])

  // carousel state & refs
  const [index, setIndex] = React.useState(1)
  const timerRef = React.useRef(null)
  const startedRef = React.useRef(false)
  const skipAutoRef = React.useRef(false)
  const isPausedRef = React.useRef(false)
  const [paused, setPaused] = React.useState(false)
  const [dragOffset, setDragOffset] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)
  const ctaRef = React.useRef(null)
  const startXRef = React.useRef(0)
  const pointerIdRef = React.useRef(null)
  const containerRef = React.useRef(null)
  const isTransitioningRef = React.useRef(false)
  const queuedActionRef = React.useRef(null)
  const [mounted, setMounted] = React.useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  // autoplay
  const start = React.useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (skipAutoRef.current) {
        skipAutoRef.current = false
        return
      }
      setIndex((i) => (i + 1) % extSlides.length)
    }, 5000)
  }, [extSlides.length])
  const stop = React.useCallback(() => clearInterval(timerRef.current), [])

  React.useEffect(() => {
    if (!startedRef.current) {
      startedRef.current = true
      start()
    }
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => {
      stop()
      startedRef.current = false
      cancelAnimationFrame(raf)
    }
  }, [start, stop])

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setPrefersReducedMotion(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  // navigation
  const goPrev = React.useCallback(() => {
    if (isTransitioningRef.current) {
      queuedActionRef.current = 'prev'
      return
    }
    isTransitioningRef.current = true
    stop()
    setIndex((i) => (i - 1 + extSlides.length) % extSlides.length)
    if (!isPausedRef.current) start()
  }, [extSlides.length, start, stop])

  const goNext = React.useCallback(() => {
    if (isTransitioningRef.current) {
      queuedActionRef.current = 'next'
      return
    }
    isTransitioningRef.current = true
    stop()
    setIndex((i) => (i + 1) % extSlides.length)
    if (!isPausedRef.current) start()
  }, [extSlides.length, start, stop])

  // drag handlers
  const onPointerDown = (e) => {
    if (!containerRef.current) return
    setIsDragging(true)
    startXRef.current = e.clientX
    pointerIdRef.current = e.pointerId
    try { containerRef.current.setPointerCapture(e.pointerId) } catch (err) {}
    isPausedRef.current = true
    setPaused(true)
    stop()
  }

  const onPointerMove = (e) => {
    if (!isDragging) return
    setDragOffset(e.clientX - startXRef.current)
  }

  const onPointerUp = (e) => {
    // If we were not dragging, treat this as a click. If the click target
    // is the CTA, navigate. If we were dragging, handle slide movement.
    if (!isDragging) {
      try {
        // Pointer events may have been captured by the container, so the
        // event.target could be the container. Use elementFromPoint to
        // determine what element is visually under the pointer coordinates.
        const el = typeof document !== 'undefined' && document.elementFromPoint
          ? document.elementFromPoint(e.clientX, e.clientY)
          : e.target
        if (ctaRef.current && el && ctaRef.current.contains(el)) {
          router.push('/contact-us')
          return
        }
      } catch (err) {}
      return
    }

    const dx = dragOffset
    const threshold = 60
    const goBy = dx < -threshold ? 1 : dx > threshold ? -1 : 0
    if (goBy === 1) setIndex((i) => (i + 1) % extSlides.length)
    else if (goBy === -1) setIndex((i) => (i - 1 + extSlides.length) % extSlides.length)
    setDragOffset(0)
    setIsDragging(false)
    try { containerRef.current.releasePointerCapture(pointerIdRef.current) } catch (err) {}
    pointerIdRef.current = null
    isPausedRef.current = false
    setPaused(false)
    if (!isPausedRef.current) start()
  }

  const handleMouseEnter = React.useCallback(() => {
    if (!isPausedRef.current) {
      isPausedRef.current = true
      setPaused(true)
      stop()
    }
  }, [stop])

  const handleMouseLeave = React.useCallback(() => {
    if (isPausedRef.current) {
      isPausedRef.current = false
      setPaused(false)
      start()
    }
  }, [start])

  const togglePause = React.useCallback(() => {
    if (isPausedRef.current) {
      isPausedRef.current = false
      setPaused(false)
      start()
    } else {
      isPausedRef.current = true
      setPaused(true)
      stop()
    }
  }, [start, stop])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goPrev()
    else if (e.key === 'ArrowRight') goNext()
    else if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      togglePause()
    }
  }

  // when index reaches cloned slides, reset without animation
  const [isResetting, setIsResetting] = React.useState(false)
  React.useEffect(() => {
    if (!prefersReducedMotion) return
    if (index === extSlides.length - 1) setIndex(1)
    if (index === 0) setIndex(extSlides.length - 2)
  }, [index, prefersReducedMotion, extSlides.length])

  React.useEffect(() => {
    let id
    const delay = 720
    if (index === extSlides.length - 1 && !isResetting) {
      id = setTimeout(() => { setIsResetting(true); setIndex(1); requestAnimationFrame(() => setIsResetting(false)) }, delay)
    }
    if (index === 0 && !isResetting) {
      id = setTimeout(() => { setIsResetting(true); setIndex(extSlides.length - 2); requestAnimationFrame(() => setIsResetting(false)) }, delay)
    }
    return () => clearTimeout(id)
  }, [index, extSlides.length, isResetting])

  const router = useRouter()
  const goContact = React.useCallback((e) => {
    // Navigate using the router. Avoid preventing default or stopping propagation
    // so the carousel's pointer handlers don't interfere with navigation flow.
    router.push('/contact-us')
  }, [router])

  return (
    <section className="min-h-[520px] md:min-h-[640px] lg:min-h-screen flex items-center py-8 md:py-12 mt-8 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Services carousel"
            onTransitionEnd={() => { isTransitioningRef.current = false; if (queuedActionRef.current) { const a = queuedActionRef.current; queuedActionRef.current = null; if (a === 'next') goNext(); else goPrev(); } }}
            className="flex transition-transform"
            style={{
              transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))`,
              transitionDuration: prefersReducedMotion || isDragging || isResetting ? '0ms' : '700ms',
              transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)',
              touchAction: 'pan-y',
            }}
          >
            {extSlides.map((s, si) => {
              const realIndex = (si - 1 + slides.length) % slides.length
              const isActive = si === index
              return (
                <div
                  key={`${s.id}-${si}`}
                  className="min-w-full grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-6 md:gap-8 py-6 md:py-0"
                  aria-hidden={!isActive}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${realIndex + 1} of ${slides.length}`}
                >
                  <div className="md:col-span-7 lg:col-span-6 order-first md:order-first flex flex-col justify-center md:h-[420px] px-4 md:px-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                      <span className="hero-title-gradient bg-clip-text text-transparent">{s.title}</span>
                    </h1>
                    <p className="mt-4 text-slate-600 max-w-xl mx-auto md:mx-0">{s.desc}</p>
                    {s.features && (
                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-500 max-w-lg mx-auto md:mx-0">
                        {s.features.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-indigo-500 mt-1" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 w-full md:w-auto">
                      <button
                        type="button"
                        ref={ctaRef}
                        onClick={() => router.push('/contact-us')}
                        aria-label="Get a consultation"
                        className="group w-full md:w-auto inline-flex items-center justify-center gap-3 hero-cta-gradient focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none text-white font-semibold rounded-md px-6 py-3 shadow-md transition-colors"
                      >
                        <span>Get a consultation</span>
                        <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
                      <div className="text-sm text-slate-500">{String(realIndex + 1).padStart(2, '0')}.</div>
                      <div className="w-36 h-1 bg-slate-200 rounded overflow-hidden">
                        <div
                          className={`h-1 hero-progress-gradient ${isActive && mounted && !paused && !isResetting ? 'hero-progress-anim' : ''} ${isActive && paused ? 'hero-progress-paused' : ''}`}
                          style={{ width: isActive ? undefined : '0%' }}
                        />
                      </div>
                      <div className="text-sm text-slate-500">{String(slides.length).padStart(2, '0')}.</div>
                    </div>
                  </div>

                  <div className="md:col-span-5 lg:col-span-6 order-last md:order-last flex items-center justify-center px-4 md:px-6">
                    <div className="w-full max-w-full md:max-w-[380px] lg:max-w-2xl">
                      <div className="relative w-full h-44 sm:h-64 md:h-[360px] lg:h-[420px] xl:h-[480px] rounded-md overflow-hidden shadow-lg bg-slate-50">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          priority={realIndex === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

