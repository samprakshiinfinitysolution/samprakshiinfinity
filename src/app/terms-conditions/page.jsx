"use client";
import React from "react";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <main className="min-h-screen py-12 px-6 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-foreground/80 mb-4">These Terms & Conditions govern your use of the website and services provided by Samprakshi Infinity Solution Pvt. Ltd.</p>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Acceptance</h2>
          <p className="text-foreground/80">By accessing or using the site you agree to be bound by these terms. Please read them carefully.</p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Use of Services</h2>
          <p className="text-foreground/80">You agree to use the site lawfully and not to engage in prohibited behavior described herein.</p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
          <p className="text-foreground/80">Our liability is limited as permitted by law. Refer to the full terms for details.</p>
        </section>

        <div className="mt-8">
          <Link href="/contact-us" className="text-brand-primary">Contact us</Link> for questions.
        </div>
      </div>
    </main>
  );
}
