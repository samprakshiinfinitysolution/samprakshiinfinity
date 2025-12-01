"use client";
import React, { useEffect, useState } from "react";

// Simple cookie helper
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}
function getCookie(name) {
  return document.cookie.split(";").map(c => c.trim()).filter(c => c.startsWith(name + "=")).map(c => decodeURIComponent(c.split("=")[1]))[0];
}

export default function CookieConsent() {
  const STORAGE_KEY = "cookie_consent";
  const [visible, setVisible] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, marketing: false });
  const [managedView, setManagedView] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) || getCookie(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const prefs = { analytics: true, marketing: true };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setCookie(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setVisible(false);
  };

  const rejectAll = () => {
    const prefs = { analytics: false, marketing: false };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setCookie(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    setCookie(STORAGE_KEY, JSON.stringify(preferences));
    setVisible(false);
    setManagedView(false);
  };

  // Respect user who already made a choice
  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-6 z-50 sm:right-8 sm:bottom-8">
      <div className="w-[320px] sm:w-[380px] bg-white/95 dark:bg-slate-900/90 border border-foreground/10 rounded-lg p-4 shadow-2xl">
        {!managedView ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="flex-none mt-1">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden className="text-brand-primary"><path d="M12 2v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">We use cookies</p>
                <p className="text-foreground/70 text-sm mt-1">We use essential cookies to make the site work and optional cookies to improve experience. Accept, reject, or manage preferences.</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button onClick={rejectAll} className="px-3 py-2 rounded-md text-sm border border-foreground/10 text-foreground/80 hover:bg-foreground/3 focus:outline-none focus:ring-2 focus:ring-brand-primary/40">Reject</button>
              <button onClick={() => setManagedView(true)} className="px-3 py-2 rounded-md text-sm border border-foreground/10 text-foreground/80 hover:bg-foreground/3 focus:outline-none focus:ring-2 focus:ring-brand-primary/40">Manage</button>
              <button onClick={acceptAll} className="px-3 py-2 rounded-md text-sm bg-[linear-gradient(90deg,var(--brand-primary),var(--brand-bright))] text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-primary/50">Accept All</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-semibold text-foreground">Cookie preferences</p>
              <p className="text-foreground/70 text-sm mt-1">Toggle categories below and save. Essential cookies are required for core site functionality.</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/90">Analytics</p>
                  <p className="text-foreground/70 text-sm">Helps us understand usage to improve experience.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={preferences.analytics}
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-12 h-6 rounded-full p-0.5 transition-all ${preferences.analytics ? 'bg-brand-primary/80' : 'bg-foreground/20'}`}
                >
                  <span className={`block w-5 h-5 bg-white rounded-full shadow transform transition ${preferences.analytics ? 'translate-x-6' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/90">Marketing</p>
                  <p className="text-foreground/70 text-sm">Optional cookies used for promotions and recommendations.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={preferences.marketing}
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-12 h-6 rounded-full p-0.5 transition-all ${preferences.marketing ? 'bg-brand-primary/80' : 'bg-foreground/20'}`}
                >
                  <span className={`block w-5 h-5 bg-white rounded-full shadow transform transition ${preferences.marketing ? 'translate-x-6' : ''}`} />
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button onClick={() => setManagedView(false)} className="px-3 py-2 rounded-md text-sm border border-foreground/10 text-foreground/80 hover:bg-foreground/3">Cancel</button>
              <button onClick={savePreferences} className="px-3 py-2 rounded-md text-sm bg-[linear-gradient(90deg,var(--brand-primary),var(--brand-bright))] text-white shadow-sm hover:shadow-md">Save</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
