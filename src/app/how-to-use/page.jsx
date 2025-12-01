"use client";
import React from "react";
import Link from "next/link";

export default function HowToUsePage() {
  return (
    <main className="min-h-screen py-12 px-6 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">How to use this website</h1>
        <p className="mb-4 text-foreground/80">Welcome — this page explains how we use cookies and how to navigate the site.</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cookies & Preferences</h2>
          <p className="text-foreground/80 mb-2">We use small pieces of data called cookies to store your preferences. When you first visit, a cookie banner will appear allowing you to:</p>
          <ul className="list-disc pl-5 text-foreground/80">
            <li><strong>Accept All</strong> — enable analytics & marketing cookies to help improve the site.</li>
            <li><strong>Reject All</strong> — only essential cookies will remain active.</li>
            <li><strong>Manage</strong> — choose which categories (analytics, marketing) you allow.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Navigation</h2>
          <p className="text-foreground/80">Use the header and footer links to explore Services, Digital Marketing pages and Back Office offerings. Key pages:</p>
          <ul className="list-disc pl-5 text-foreground/80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Need help?</h2>
          <p className="text-foreground/80">If you have questions about cookies or how we handle data, please get in touch via the <Link href="/contact-us" className="text-brand-primary">Contact Us</Link> page.</p>
        </section>
      </div>
    </main>
  );
}
