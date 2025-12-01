
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

// A self-contained GSAP-powered FifthSection with inline styles (no external CSS)
export default function FifthSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // content scratch — fresh, concise items
  const features = [
    {
      id: "f1",
      title: "Digital Transformation",
      desc: "Modernize legacy stacks, migrate to cloud-native platforms and accelerate time-to-market.",
      accent: "#0E57B8",
    },
    {
      id: "f2",
      title: "Product Engineering",
      desc: "Design and build resilient products with scalable architectures and automated pipelines.",
      accent: "#2196FF",
    },
    {
      id: "f3",
      title: "AI & Automation",
      desc: "Integrate practical ML and automation into workflows to reduce cost and increase insight.",
      accent: "#7BE1FF",
    },
  ];

  useEffect(() => {
    let ctx;
    let gsapCore;
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      if (typeof window === "undefined" || prefersReduced) return;
      try {
        const gsapModule = await import("gsap");
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        gsapCore = gsapModule.gsap || gsapModule.default || gsapModule;
        gsapCore.registerPlugin(ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default);

        ctx = gsapCore.context(() => {
          // Stagger in the cards with a subtle upward motion
          const nodes = cardsRef.current || [];
          gsapCore.fromTo(
            nodes,
            { y: 40, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                end: "top 40%",
                scrub: false,
              },
            }
          );
        }, sectionRef);
      } catch (e) {
        // if GSAP isn't available we gracefully fall back to static content
        // console.warn('GSAP not loaded', e);
      }
    })();

    return () => {
      try {
        if (ctx) ctx.revert();
        if (gsapCore && gsapCore.ScrollTrigger) {
          gsapCore.ScrollTrigger.getAll().forEach((t) => t.kill && t.kill());
        }
      } catch (e) {}
    };
  }, []);

  // helper to set card refs
  const setCardRef = (el, i) => {
    cardsRef.current[i] = el;
  };

  return (
    <section ref={sectionRef} style={styles.wrapper} aria-labelledby="fifth-heading">
      <div style={styles.inner}>
        <div style={styles.left}>
          <h2 id="fifth-heading" style={styles.title}>Business & Technology</h2>
          <p style={styles.lead}>
            We combine product thinking with engineering excellence to deliver measurable outcomes — faster.
          </p>

          <ul style={styles.bullets}>
            <li style={styles.bullet}>Strategy-led modernization</li>
            <li style={styles.bullet}>Secure, observable platforms</li>
            <li style={styles.bullet}>Continuous delivery and SRE practices</li>
          </ul>

          <div style={styles.ctaRow}>
            <Link href="/contact" style={styles.cta}>Talk to an expert</Link>
            <a href="/contact#brief" style={styles.secondary}>Request a brief</a>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.cardGrid}>
            {features.map((f, idx) => (
              <article
                key={f.id}
                ref={(el) => setCardRef(el, idx)}
                style={{ ...styles.featureCard, borderLeft: `4px solid ${f.accent}` }}
                tabIndex={0}
                aria-labelledby={`${f.id}-title`}
              >
                <h3 id={`${f.id}-title`} style={styles.featureTitle}>{f.title}</h3>
                <p style={styles.featureDesc}>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline styles (self-contained)
const styles = {
  wrapper: {
    position: "relative",
    background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    padding: "4.5rem 1.25rem",
    overflow: "hidden",
    zIndex: 1,
  },
  inner: {
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
    maxWidth: "1100px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  left: {
    flex: "1 1 360px",
    minWidth: "280px",
  },
  right: {
    flex: "1 1 420px",
    minWidth: "320px",
    position: "relative",
  },
  title: {
    fontSize: "2.125rem",
    lineHeight: 1.05,
    fontWeight: 800,
    margin: "0 0 0.5rem 0",
    // logo-derived gradient
    background: "linear-gradient(90deg,#0E57B8,#2196FF)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextFillColor: "transparent",
  },
  lead: {
    color: "#475569",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  bullets: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 1.25rem 0",
    display: "grid",
    gap: "0.5rem",
  },
  bullet: {
    // subtle tint from brand mid-blue
    background: "rgba(14,87,184,0.06)",
    padding: "0.5rem 0.75rem",
    borderRadius: "8px",
    color: "#0f172a",
    fontSize: "0.95rem",
  },
  ctaRow: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  cta: {
    display: "inline-block",
    // brand CTA gradient
    background: "linear-gradient(90deg,#0E57B8,#2196FF)",
    color: "#fff",
    padding: "0.6rem 1rem",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 600,
  },
  secondary: {
    color: "#374151",
    textDecoration: "none",
    padding: "0.45rem 0.75rem",
    borderRadius: "8px",
    background: "transparent",
    border: "1px solid rgba(15,23,42,0.04)",
    fontSize: "0.95rem",
  },
  cardGrid: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    marginBottom: "1.25rem",
  },
  featureCard: {
    background: "rgba(255,255,255,0.9)",
    padding: "1rem",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(2,6,23,0.06)",
    transformOrigin: "center",
  },
  featureTitle: {
    margin: 0,
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#0f172a",
  },
  featureDesc: {
    margin: "0.45rem 0 0 0",
    color: "#475569",
    fontSize: "0.95rem",
  },
};
