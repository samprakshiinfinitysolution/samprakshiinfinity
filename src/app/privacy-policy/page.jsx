"use client";
import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen py-12 px-6 mt-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-primary mb-6">Privacy Policy</h1>

        <p className="mb-6 text-foreground/80">Samprakshi Infinity Solution respects and values the privacy of clients and visitors to our website. We ensure a safe online experience for all users. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-deep mb-3">Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly (for example, contact form submissions) and automatically (cookies, usage data) to operate and improve our services. This may include name, email, IP address, device information, and browsing behavior.</p>

          <h3 className="text-xl font-medium mb-2 text-brand-deep">Personally Identifiable Information</h3>
          <p className="mb-4">We only collect personally identifiable information when you voluntarily submit it via forms or communications.</p>

          <h3 className="text-xl font-medium mb-2 text-brand-deep">Non-Personally Identifiable Information</h3>
          <p>We may collect device-related data like browser type, IP address, location, time zone, web pages visited, and interaction data.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-deep mb-3">How We Use Your Information</h2>
          <p className="mb-4">We use information to respond to inquiries, provide services, improve our website, analyze usage with analytics tools, and fulfill legal obligations. We do not share credit card details; payments are handled by third-party processors according to their security standards.</p>
          <ul className="list-disc list-inside space-y-1 text-base mb-4">
            <li>Providing services or responding to your queries</li>
            <li>Analyzing traffic and usage with analytics tools</li>
            <li>Complying with legal obligations</li>
            <li>Preventing fraud or misuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-deep mb-3">Cookies & Advertising</h2>
          <p className="mb-4">We use cookies for basic site functionality. Optional analytics and marketing cookies are used only when you consent via the cookie banner. You can manage preferences in the cookie settings.</p>
          <p className="mb-4">To opt out of targeted advertising, use the controls provided by advertising platforms (Google, Facebook, Bing).</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-deep mb-3">Your Rights (GDPR)</h2>
          <p className="mb-4">If you are a resident of the EEA, you may have rights including access, correction, and deletion of your personal data. Contact us to request those actions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-deep mb-3">Data Retention & Security</h2>
          <p>We retain form submissions and account data as necessary to provide services or as required by law. We take reasonable steps to protect personal data, but no transmission is 100% secure.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-deep mb-3">Contact Us</h2>
          <p className="mb-4">For questions about this policy or to request data access/deletion, email us at <a href="mailto:info@samprakshiinfinitysolution.com" className="text-brand-bright underline">info@samprakshiinfinitysolution.com</a> or use the <Link href="/contact-us" className="text-brand-primary underline">Contact page</Link>.</p>
        </section>

        <p className="text-sm text-foreground/70">We may update this policy periodically — check this page for changes.</p>

        <div className="mt-8">
          <Link href="/" className="text-sm text-foreground/70">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
