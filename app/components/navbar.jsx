"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mail, Link2 } from "lucide-react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsScrolled(false);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isHomePage = pathname === "/";
  // ✅ Transparent ONLY on home page when not scrolled
  const isTransparent = isHomePage && !isScrolled;

  const navLinks = [
    { name: "Find my Agent", href: "/find-agent" },
    { name: "Sell My Property", href: "/sell" },
    { name: "TruEstimate™", href: "/truest-imate" },
    { name: "Dubai Transactions", href: "/transactions" },
    { name: "New Projects", href: "/new-projects" },
    { name: "Divine Bricks", href: "/my-bayut" },
  ];

  return (
    <>
      <header
        className={`top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isHomePage ? "fixed" : "sticky"
        } ${
          isTransparent
            ? "bg-transparent border-b border-transparent"
            : "bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/divine-bricks-logo.png"
                  alt="Divine Logo"
                  width={120}
                  height={40}
                  className="object-contain h-9 sm:h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#00d16a] text-sm font-medium transition-all duration-200 px-3 py-2 rounded-xl hover:bg-[#00d16a]/5 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="lg:hidden p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-200 active:scale-95"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700" />
                )}
              </button>

              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden sm:block px-4 py-2.5 bg-gradient-to-r from-[#0e4b3e] to-[#0a3d30] text-white rounded-xl text-xs sm:text-sm font-semibold hover:shadow-lg hover:shadow-[#0e4b3e]/20 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                Sign up or Log in
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/60 animate-slideDown">
            <div className="px-3 sm:px-4 pt-3 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-[#00d16a] hover:bg-[#00d16a]/5 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-[#0e4b3e] to-[#0a3d30] text-white rounded-xl text-sm font-semibold transition-all duration-200 sm:hidden active:scale-[0.98]"
              >
                Sign up or Log in
              </button>
            </div>
          </div>
        )}
      </header>

      {isLoginModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setIsLoginModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-6">
              <Image
                src="/divine-logo.png"
                alt="Divine Bricks"
                width={150}
                height={45}
                className="object-contain"
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
              Login into your account
            </h2>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 rounded-xl transition-all text-sm active:scale-[0.98]">
                <FcGoogle className="w-5 h-5" /> Login with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 rounded-xl transition-all text-sm active:scale-[0.98]">
                <FaFacebook className="w-5 h-5 text-[#1877F2]" /> Login with Facebook
              </button>
              <button className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 rounded-xl transition-all text-sm active:scale-[0.98]">
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" /> Login with WhatsApp
              </button>
            </div>

            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-xs font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#0e4b3e] to-[#0a3d30] text-white font-semibold py-3 rounded-xl transition-all text-sm hover:shadow-lg hover:shadow-[#0e4b3e]/20 active:scale-[0.98]">
                <Mail className="w-5 h-5" /> Login with Email
              </button>
              <button className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 rounded-xl transition-all text-sm active:scale-[0.98]">
                <Link2 className="w-5 h-5" /> Login with one-time link
              </button>
            </div>

            <div className="text-center text-sm mt-6 pt-5 border-t border-gray-100">
              <span className="text-gray-600">New here? </span>
              <button className="text-[#00d16a] font-semibold hover:underline">
                Create an account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}