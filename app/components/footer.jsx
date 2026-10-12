'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FOOTER_LINKS = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Terms & Conditions', href: '/terms&conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const cities = [
  { name: 'Andhra Pradesh' },
  { name: 'Arunachal Pradesh' },
  { name: 'Assam' },
  { name: 'Bihar' },
  { name: 'Chhattisgarh' },
  { name: 'Goa' },
  { name: 'Gujarat' },
  { name: 'Haryana' },
  { name: 'Himachal Pradesh' },
  { name: 'Jharkhand' },
  { name: 'Karnataka' },
  { name: 'Kerala' },
  { name: 'Madhya Pradesh' },
  { name: 'Maharashtra' },
  { name: 'Manipur' },
  { name: 'Meghalaya' },
  { name: 'Mizoram' },
  { name: 'Nagaland' },
  { name: 'Odisha' },
  { name: 'Punjab' },
  { name: 'Rajasthan' },
  { name: 'Sikkim' },
  { name: 'Tamil Nadu' },
  { name: 'Telangana' },
  { name: 'Tripura' },
  { name: 'Uttar Pradesh' },
  { name: 'Uttarakhand' },
  { name: 'West Bengal' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', icon: <FacebookIcon /> },
  { label: 'X', icon: <XIcon /> },
  { label: 'LinkedIn', icon: <LinkedInIcon /> },
  { label: 'Instagram', icon: <InstagramIcon /> },
  { label: 'YouTube', icon: <YouTubeIcon /> },
];

export default function Footer() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer className="relative w-full bg-[#171A1C] pb-8 pt-14 text-white">
      {/* Top accent line */}
      <div className="absolute left-1/2 top-0 h-px w-[800px] max-w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-[#F5A623]/50 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#F5A623]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          {/* Footer links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold tracking-wide">
            {FOOTER_LINKS.map((item, index) => (
              <React.Fragment key={item.label}>
                <Link
                  href={item.href}
                  className="uppercase text-[#F7F4ED]/80 transition-colors duration-200 hover:text-[#F5A623]"
                >
                  {item.label}
                </Link>

                {index < FOOTER_LINKS.length - 1 && (
                  <span className="text-[#59636B]">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Social links and logo */}
<div className="flex w-full flex-col items-center gap-6 lg:mr-8 lg:w-auto">    
          <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F7F4ED]/80 transition-all duration-200 hover:scale-110 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#171A1C]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
                <Link href="/">
                 <img
              src="/3G_Realtors_Transparent.png"
              alt="Divine Bricks Logo"
              className="h-15 w-auto object-contain"
            />
                </Link>
           
          </div>
        </div>

        {/* City dropdown */}
        <div
          className="relative mb-12 flex w-fit items-center gap-2 text-sm"
          ref={dropdownRef}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#59636B]">
            City:
          </span>

          <button
            type="button"
            aria-expanded={isCityDropdownOpen}
            onClick={() => setIsCityDropdownOpen((open) => !open)}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-medium transition-colors hover:border-[#F5A623]/50 hover:text-[#F5A623]"
          >
            <span className="text-lg">{selectedCity.flag}</span>
            <span className="text-[#F7F4ED]/90">{selectedCity.name}</span>

            {isCityDropdownOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {isCityDropdownOpen && (
            <div className="absolute bottom-full left-0 z-[60] mb-2 w-60 overflow-hidden rounded-xl border border-white/10 bg-[#1f2427] shadow-2xl">
              <ul className="max-h-60 overflow-y-auto py-1">
                {cities.map((city) => (
                  <li key={city.name}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                        selectedCity.name === city.name
                          ? 'bg-[#F5A623]/10 font-medium text-[#F5A623]'
                          : 'text-[#F7F4ED]/85 hover:bg-white/5'
                      }`}
                    >
                      <span className="text-lg">{city.flag}</span>
                      {city.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-[#59636B]">
            © 2008 - 2026 Divine Bricks. All rights reserved. Proudly made in
            India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}