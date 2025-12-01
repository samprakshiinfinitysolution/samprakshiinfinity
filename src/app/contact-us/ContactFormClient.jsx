"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from 'next/image';

/**
 * Premium Contact page (client component)
 */
const ContactPage = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverMessage, setServerMessage] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name || form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message || form.message.trim().length < 10) e.message = "Please include a short message (10+ characters).";
    return e;
  };

  const timeoutRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
    setErrors((s) => ({ ...s, [name]: undefined }))
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    setServerMessage("")
    setStatus('idle')
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0]
      try { document.getElementById(first)?.focus() } catch (err) {}
      return
    }

    const controller = new AbortController()
    const signal = controller.signal
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    try {
      setStatus('sending')
      const scriptUrl = process.env.NEXT_PUBLIC_GSHEET_SCRIPT_URL
      if (!scriptUrl) {
        setStatus('error')
        setServerMessage('Contact submission is not configured. Please set NEXT_PUBLIC_GSHEET_SCRIPT_URL in .env.local')
        return
      }

      const params = new URLSearchParams()
      params.append('name', form.name || '')
      params.append('email', form.email || '')
      params.append('phone', form.phone || '')
      params.append('message', form.message || '')

      const res = await fetch(scriptUrl, {
        method: 'POST',
        body: params,
        signal,
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        if (data && data.errors && typeof data.errors === 'object') {
          setErrors(data.errors)
          const first = Object.keys(data.errors)[0]
          try { document.getElementById(first)?.focus() } catch (err) {}
          setStatus('error')
          setServerMessage('Please fix the highlighted fields.')
          return
        }
        throw new Error(data?.message || 'Submission failed')
      }

      setStatus('success')
      setServerMessage(data?.message || "Thanks — we'll get back to you shortly.")
      setForm({ name: '', email: '', phone: '', message: '' })
      formRef.current?.reset?.()
      timeoutRef.current = setTimeout(() => setServerMessage(''), 8000)
    } catch (err) {
      if (err.name === 'AbortError') {
        setServerMessage('Request timed out. Please try again.')
      } else {
        setServerMessage(err.message || 'Something went wrong. Please try again later.')
      }
      setStatus('error')
    } finally {
      clearTimeout(timeoutId)
    }
  }

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [])

  return (
  <main className="min-h-screen mt-16 bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-16 px-4">
      <div className="mx-auto w-full max-w-6xl">
  {/* Hero */}
  <section className="rounded-xl bg-linear-to-r from-blue-700 to-blue-500 text-white p-10 shadow-xl mb-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold tracking-tight">Get in touch</h1>
                <p className="mt-2 text-white/90 max-w-2xl">Whether you have a question about features, pricing, or partnerships — our team is ready to help. Use the form to the right or reach us by phone or email.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#form"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-white/30"
                    style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff', backgroundRepeat: 'no-repeat' }}
                  >
                    Contact us
                  </a>
                  <a href="mailto:info@samprakshiinfinitysolution.com" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-sm text-white/90">Email us</a>
              </div>
            </div>
            <div className="w-full lg:w-96 bg-white/5 border border-white/20 rounded-lg p-4">
              <p className="text-sm">Quick contact</p>
              <dl className="mt-3 space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white/90 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3.75 6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0118 19.5H6a2.25 2.25 0 01-2.25-2.25V6.75z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 6.75l-9 5.25L3 6.75" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <dt className="text-xs uppercase">Email</dt>
                    <dd>info@samprakshiinfinitysolution.com</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white/90 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.85.74a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.65.74 3.85a1 1 0 01-.21 1.11l-2.41 2.83z" />
                  </svg>
                  <div>
                    <dt className="text-xs uppercase">Phone</dt>
                    <dd>0731-4280572, +91-8435204953</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Card with form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 dark:bg-slate-800">
            <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Send us a message</h2>
            <form id="form" ref={formRef} onSubmit={handleSubmit} className="space-y-4" aria-describedby="form-help" aria-busy={status === 'sending'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Full name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Full name (e.g., Rahul Sharma)"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "error-name" : undefined}
                  />
                  {errors.name && <p id="error-name" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="e.g., +91 91234 56789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "error-email" : undefined}
                />
                {errors.email && <p id="error-email" className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Tell us a bit about your project or question"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "error-message" : undefined}
                />
                {errors.message && <p id="error-message" className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-semibold text-white shadow disabled:opacity-60 focus:outline-none"
                  style={{ backgroundImage: 'linear-gradient(90deg,#0E57B8,#2196FF)', color: '#fff', backgroundRepeat: 'no-repeat' }}
                >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send message'
                    )}
                </button>
              </div>

              <div role="status" aria-live="polite" className="mt-2">
                {status === "success" && <p className="text-sm text-green-600">{serverMessage}</p>}
                {status === "error" && <p className="text-sm text-red-600">{serverMessage}</p>}
              </div>
            </form>
          </section>

          {/* Sidebar with contact cards */}
          <aside className="space-y-6">
            <div className="bg-white rounded-xl shadow p-5 dark:bg-slate-800">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Contact information</h3>
              <address className="not-italic mt-3 text-sm text-slate-700 dark:text-slate-200 space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3.75 6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0118 19.5H6a2.25 2.25 0 01-2.25-2.25V6.75z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 6.75l-9 5.25L3 6.75" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="text-xs uppercase text-slate-500">Email</div>
                    <div>info@samprakshiinfinitysolution.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.85.74a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.65.74 3.85a1 1 0 01-.21 1.11l-2.41 2.83z" />
                  </svg>
                  <div>
                    <div className="text-xs uppercase text-slate-500">Phone</div>
                    <div>0731-4280572, +91-8435204953</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2a6 6 0 00-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 00-6-6z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="8" r="2" fill="currentColor" />
                  </svg>
                  <div>
                    <div className="text-xs uppercase text-slate-500">Address</div>
                    <div>HE-23, Super city, Singapore Township, Indore</div>
                  </div>
                </div>
              </address>
            </div>

            <div className="bg-white rounded-xl shadow p-5 text-sm dark:bg-slate-800">
              <h4 className="font-semibold text-slate-700 dark:text-slate-200">Business hours</h4>
              <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
                <li>Mon – Fri: 9:00 AM – 8:00 PM</li>
                <li>Saturday: 9:00 AM – 6:00 PM</li>
                <li>Sunday: 9:00 AM – 5:00 PM</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Map section */}
        <section className="mt-8 rounded-xl overflow-hidden shadow-lg">
          <div className="w-full bg-slate-100 dark:bg-slate-700">
            <iframe
              title="Samprakshi Infinity Solution - Map"
              src="https://www.google.com/maps?q=Samprakshi+Infinity+Solution+super+city+HE+-23,+Singapore+Township+Indore,+Madhya+Pradesh+453771&output=embed"
              className="w-full h-72 sm:h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="p-3 text-center text-sm text-slate-600 dark:text-slate-200">
              <a
                href="https://www.google.com/maps/dir//Samprakshi+Infinity+Solution+super+city+HE+-23,+Singapore+Township+Indore,+Madhya+Pradesh+453771/@22.8079682,75.9055515,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x39631db8b3c35651:0xd4cf38892f387052"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >Open in Google Maps (get directions)</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
