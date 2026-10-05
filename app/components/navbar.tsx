'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links based on the screenshot
  const navLinks = [
    { name: 'Find my Agent', href: '/find-agent' },
    { name: 'Sell My Property', href: '/sell' },
    { name: 'TruEstimate™', href: '/truest-imate' },
    { name: 'Dubai Transactions', href: '/transactions' },
    { name: 'New Projects', href: '/new-projects' },
    { name: 'myBayut', href: '/my-bayut' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
  <Link href="/">
    <Image 
      src="/divine-bricks-logo.png" // Replace with your actual file name in the public folder
      alt="Divine  Logo"
      width={120} // Adjust this based on your logo's width
      height={40} // Adjust this based on your logo's height
      className="object-contain" // Ensures the logo doesn't stretch
      priority // Add this so the logo loads immediately on page load (good for navbars)
    />
  </Link>
</div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#00d16a] text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Button */}
            <button 
              className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Sign up / Log in Button */}
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors">
              Sign up or Log in
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown (Hidden by default on desktop) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#00d16a] hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}