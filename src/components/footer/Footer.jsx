"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CookieConsent from "@/components/cookie/CookieConsent";

const socials = [
  { icon: <FaLinkedinIn className="h-5 w-5" />, href: "https://www.linkedin.com/company/samprakshi-infinity-solution-pvt-ltd", label: "LinkedIn" },
  { icon: <FaFacebookF className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61578841310956", label: "Facebook" },
  { icon: <FaInstagram className="h-5 w-5" />, href: "https://www.instagram.com/samprakshi_infinity_solution/", label: "Instagram" },
  { icon: <RiTwitterXLine className="h-5 w-5" />, href: "https://x.com/Samprakshi", label: "Twitter" },
];

// Keep a single gradient string so headings/underlines/hover use the same look
const UNDERLINE = "after:bg-[linear-gradient(90deg,var(--brand-primary),var(--brand-bright))]";
const HOVER_BG = "hover:bg-[linear-gradient(90deg,var(--brand-primary),var(--brand-bright))] hover:text-white";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-background to-background/95 text-foreground/80 text-sm py-16 px-4 sm:px-6 md:px-8 lg:px-10 border-t border-foreground/10">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-10">
        {/* Logo & tagline */}
        <div className="flex flex-col items-center sm:items-start space-y-4 text-center sm:text-left col-span-full sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 min-w-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={144} height={38} className="w-36 h-auto object-contain" />
          </Link>
          {/* <p className="text-foreground/70">Delivering digital and back-office excellence with human-first processes.</p>
          <Link href="/contact-us" className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${HOVER_BG} shadow-sm transition-all`}>Contact Us</Link> */}
        </div>

        {/* Quick Links */}
        <div className="backdrop-blur-sm group min-w-0 col-span-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <h4 className={`text-lg font-semibold text-foreground mb-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 ${UNDERLINE} after:rounded-full border-b border-brand-primary/10  text-left`}>Quick Links</h4>
          <ul className="space-y-3" role="list">
            {[["/","Home"],["/about-us","About Us"],["/contact-us","Contact Us"],["/careers","Careers"],["/how-to-use","How to Use"],["/references","References"]].map(([href,label])=> (
              <li key={href} className="transform transition-all hover:translate-x-2">
                <Link href={href} className={`text-foreground/70 hover:text-brand-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full ${UNDERLINE} after:transition-all after:duration-300`}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Back Office */}
        <div className="backdrop-blur-sm group min-w-0 col-span-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <h4 className={`text-lg font-semibold text-foreground mb-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 ${UNDERLINE} after:rounded-full border-b border-brand-primary/10 text-left`}>Back Office Services</h4>
          <ul className="space-y-3" role="list">
            {[["/backoffice/customer-support","Customer Support"],["/backoffice/data-entry-management","Data Entry Management"],["/backoffice/account-management-services-for-amazon","Amazon Account Management"],["/backoffice/ecommerce-support","Ecommerce Support"]].map(([href,label])=> (
              <li key={href} className="transform transition-all hover:translate-x-2">
                <Link href={href} className={`text-foreground/70 hover:text-brand-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full ${UNDERLINE} after:transition-all after:duration-300`}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Development Services */}
        <div className="backdrop-blur-sm group min-w-0 col-span-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <h4 className={`text-lg font-semibold text-foreground mb-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 ${UNDERLINE} after:rounded-full border-b border-brand-primary/10 text-left`}>Development</h4>
          <ul className="space-y-3" role="list">
            {[["/webdevelopment","Web Development"],["/appdevelopment","App Development"],["/machine-learning-and-ai-solutions","AI & ML"]].map(([href,label])=> (
              <li key={href} className="transform transition-all hover:translate-x-2">
                <Link href={href} className={`text-foreground/70 hover:text-brand-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full ${UNDERLINE} after:transition-all after:duration-300`}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Digital Marketing */}
        <div className="backdrop-blur-sm group min-w-0 col-span-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <h4 className={`text-lg font-semibold text-foreground mb-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 ${UNDERLINE} after:rounded-full border-b border-brand-primary/10 text-left`}>Digital Marketing</h4>
          <ul className="space-y-3" role="list">
            {[["/digital-marketing/content","Content Marketing"],["/digital-marketing/email","Email Marketing"],["/digital-marketing/seo","SEO Services"],["/digital-marketing/social-media","Social Media Marketing"]].map(([href,label])=> (
              <li key={href} className="transform transition-all hover:translate-x-2">
                <Link href={href} className={`text-foreground/70 hover:text-brand-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full ${UNDERLINE} after:transition-all after:duration-300`}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="backdrop-blur-sm group min-w-0 col-span-full sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <h4 className={`text-lg font-semibold text-foreground mb-4 pb-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 ${UNDERLINE} after:rounded-full border-b border-brand-primary/10 text-left`}>Get in Touch</h4>
          <ul className="space-y-3" role="list">
            <li>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start sm:items-center text-foreground/70 hover:text-brand-primary wrap-break-word">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-brand-primary shrink-0" />
                <address className="not-italic">HE-23, Super City, Singapore Township, Indore, Madhya Pradesh</address>
              </a>
            </li>
            <li>
              <a href="tel:+918435204953" className="flex items-center text-foreground/70 hover:text-brand-primary">
                <FaPhoneAlt className="w-5 h-5 mr-3 text-brand-primary shrink-0" />
                <span>+91 8435204953</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@samprakshiinfinitysolution.com" className="flex items-center text-foreground/70 hover:text-brand-primary">
                <FaEnvelope className="w-5 h-5 mr-3 text-brand-primary shrink-0" />
                <span>info@samprakshiinfinitysolution.com</span>
              </a>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-brand-primary/10">
          <h4 className="text-lg font-semibold text-foreground mb-4 text-center md:text-left">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-2">
                {socials.map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 flex items-center justify-center rounded-3xl border border-foreground/8 transition-all duration-200 ${HOVER_BG} focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-primary/40`}
                  >
                    {social.icon}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />
      <div className="container max-w-7xl mx-auto">
        <p className="text-center text-sm text-foreground/60 hover:text-foreground/80 transition-colors">&copy; {new Date().getFullYear()} Samprakshi Infinity Solution Pvt. Ltd. | All rights reserved.</p>
        <div className="mt-2 text-center">
          <Link href="/privacy-policy" className="text-foreground/60 hover:text-foreground/80 hover:underline text-sm">Privacy Policy | </Link>
          <Link href="/terms-of-service" className="text-foreground/60 hover:text-foreground/80 hover:underline text-sm">Terms of Service | </Link>
         
          <Link href="/privacy-policy" className="text-foreground/60 hover:text-foreground/80 hover:underline text-sm">Privacy Policy</Link>
        </div>

      </div>
      <CookieConsent />
    </footer>
  );
};

export default Footer;
