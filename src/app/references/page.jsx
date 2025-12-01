"use client";
import React from "react";
import Link from "next/link";

export default function ReferencesPage() {
  return (
    <main className="min-h-screen py-12 px-6 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">References & Credits</h1>
        <p className="mb-6 text-foreground/80">This site was built using a number of open-source tools, libraries, and content sources. We respectfully acknowledge and credit the projects and resources listed below.</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Frameworks & Tooling</h2>
          <ul className="list-disc pl-5 text-foreground/80 space-y-1">
            <li><a href="https://nextjs.org" target="_blank" rel="noreferrer" className="text-brand-primary">Next.js</a> — App framework for React and server-side rendering.</li>
            <li><a href="https://reactjs.org" target="_blank" rel="noreferrer" className="text-brand-primary">React</a> — UI library used for building components.</li>
            <li><a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-brand-primary">Tailwind CSS</a> — Utility-first CSS framework used for styling and responsive layout.</li>
            <li><a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="text-brand-primary">Vite</a> / build tooling — fast local development (where used in the workspace).</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Icons, Images & Media</h2>
          <ul className="list-disc pl-5 text-foreground/80 space-y-1">
            <li><a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noreferrer" className="text-brand-primary">React Icons</a> — Icon components used across the UI.</li>
            <li><a href="https://unsplash.com" target="_blank" rel="noreferrer" className="text-brand-primary">Unsplash</a> — Royalty-free imagery (where applicable).</li>
            <li>Company logos and brand assets are used with permission where required.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Libraries & Utilities</h2>
          <ul className="list-disc pl-5 text-foreground/80 space-y-1">
            <li><a href="https://github.com/axios/axios" target="_blank" rel="noreferrer" className="text-brand-primary">Axios</a> — Promise-based HTTP client (if used).</li>
            <li><a href="https://github.com/vercel/next.js/tree/canary/examples" target="_blank" rel="noreferrer" className="text-brand-primary">Next.js Examples</a> — reference examples and patterns.</li>
            <li>Other small open-source utilities are acknowledged in their respective files' package metadata.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Licensing & Attribution</h2>
          <p className="text-foreground/80">Where third-party assets are used (images, icons, libraries), we follow the relevant license and attribution requirements. If you believe an asset has been used incorrectly, please <Link href="/contact-us" className="text-brand-primary">contact us</Link> so we can address it promptly.</p>
        </section>

        <div className="mt-8">
          <Link href="/" className="text-sm text-foreground/70">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
