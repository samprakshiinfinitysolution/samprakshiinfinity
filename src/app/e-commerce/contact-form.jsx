"use client"

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const subject = encodeURIComponent("Amazon Service Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}%0AEmail: ${email}%0A%0A${message}`
    );

    // Open user's mail client with prefilled email. This avoids server setup.
    window.location.href = `mailto:hello@company.com?subject=${subject}&body=${body}`;

    // small UX delay to show submitting state (not necessary)
    setTimeout(() => setSubmitting(false), 500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col">
          <span className="text-sm text-gray-700">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-highlight"
            placeholder="Your name"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm text-gray-700">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-highlight"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="flex flex-col mt-3">
        <span className="text-sm text-gray-700">Message</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-highlight"
          placeholder="Tell us about your store and goals"
        />
      </label>

      <div className="mt-4">
        <button
          type="submit"
          style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff' }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={submitting}
        >
          {submitting ? "Opening mail client..." : "Get started"}
        </button>
      </div>
    </form>
  );
}
