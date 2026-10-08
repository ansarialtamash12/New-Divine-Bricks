"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mail, Link2 } from "lucide-react";
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

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isLoginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isLoginModalOpen]);

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  const navLinks = [
    { name: "Find my Agent", href: "/find-agent" },
    { name: "Sell My Property", href: "/sell" },
    { name: "TruEstimate™", href: "/truest-imate" },
    { name: "India Transactions", href: "/transactions" },
    { name: "New Projects", href: "/new-projects" },
  ];

  return (
    <>
      <header
        className={`top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isHomePage ? "fixed" : "sticky"
        } ${
          isTransparent
            ? "bg-transparent border-b border-transparent"
            : "bg-[#F7F4ED]/85 backdrop-blur-md border-b border-[#59636B]/20 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* ===== LOGO ===== */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="group flex items-center">
                <div
                  className={`flex items-center justify-center rounded-2xl transition-all duration-500 ease-out ${
                    isTransparent
                      ? "px-2.5 sm:px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.4)] group-hover:bg-white/15"
                      : "px-0 py-0 bg-transparent border border-transparent"
                  }`}
                >
                  <img
                    src="/3G_Realtors_Icon.png"
                    alt="Divine Logo"
                    className={`object-contain w-auto transition-all duration-500 ease-out group-hover:scale-[1.03] ${
                      isTransparent
                        ? "h-9 sm:h-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] brightness-110"
                        : "h-10 sm:h-12"
                    }`}
                  />
                </div>
              </Link>
            </div>

            {/* ===== DESKTOP NAV ===== */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={
                      isTransparent && !isActive
                        ? { color: "#ffffff" }
                        : isActive
                        ? { color: "#F5A623" }
                        : { color: "#171A1C" }
                    }
                    className={`relative text-sm font-medium transition-all duration-200 px-3 py-2 rounded-xl whitespace-nowrap ${
                      isActive
                        ? "bg-[#F5A623]/10"
                        : isTransparent
                        ? "hover:text-[#F5A623] hover:bg-white/10"
                        : "hover:text-[#F5A623] hover:bg-[#F5A623]/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* ===== HAMBURGER ===== */}
              <button
                className={`lg:hidden p-2 sm:p-2.5 rounded-2xl transition-all duration-500 ease-out active:scale-95 ${
                  isTransparent
                    ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.4)] hover:bg-white/20"
                    : "bg-white border border-[#59636B]/20 hover:bg-[#F7F4ED]"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X
                    className={`w-5 h-5 transition-colors ${
                      isTransparent ? "text-white" : "text-[#59636B]"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-5 h-5 transition-colors ${
                      isTransparent ? "text-white" : "text-[#59636B]"
                    }`}
                  />
                )}
              </button>

              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden sm:block px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] rounded-xl text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-[#F5A623]/30 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                Sign up or Log in
              </button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#F7F4ED]/95 backdrop-blur-xl border-t border-[#59636B]/20 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]">
            <div className="px-3 sm:px-4 pt-3 pb-5 space-y-1 max-h-[calc(100vh-64px)] overflow-y-auto">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{ transitionDelay: `${i * 30}ms` }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[#F5A623] bg-[#F5A623]/10"
                        : "text-[#59636B] hover:text-[#F5A623] hover:bg-[#F5A623]/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Sign up button in mobile menu */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] rounded-xl text-sm font-bold transition-all duration-200 sm:hidden active:scale-[0.98] shadow-[0_4px_14px_-4px_rgba(245,166,35,0.5)]"
              >
                Sign up or Log in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== LOGIN MODAL ===== */}
      {isLoginModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#171A1C]/60 backdrop-blur-md p-3 sm:p-4 animate-fadeIn"
          onClick={() => setIsLoginModalOpen(false)}
        >
          <div
            className="bg-[#F7F4ED] rounded-2xl w-full max-w-md p-5 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto border border-[#59636B]/15"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#59636B] hover:text-[#171A1C] p-1.5 rounded-full hover:bg-[#59636B]/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-5 sm:mb-6">
              <img
                src="/3G_Realtors_Icon.png"
                alt="Divine Bricks"
                className="object-contain h-12 sm:h-14 w-auto"
              />
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-[#171A1C] text-center mb-5 sm:mb-6">
              Login into your account
            </h2>

            <div className="space-y-2.5 sm:space-y-3">
              <button className="w-full flex items-center justify-center gap-3 border border-[#59636B]/20 bg-white hover:bg-[#F7F4ED] text-[#171A1C] font-medium py-2.5 sm:py-3 rounded-xl transition-all text-sm active:scale-[0.98]">
                <FcGoogle className="w-5 h-5" /> Login with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 border border-[#59636B]/20 bg-white hover:bg-[#F7F4ED] text-[#171A1C] font-medium py-2.5 sm:py-3 rounded-xl transition-all text-sm active:scale-[0.98]">
                <FaFacebook className="w-5 h-5 text-[#1877F2]" /> Login with Facebook
              </button>
              <button className="w-full flex items-center justify-center gap-3 border border-[#59636B]/20 bg-white hover:bg-[#F7F4ED] text-[#171A1C] font-medium py-2.5 sm:py-3 rounded-xl transition-all text-sm active:scale-[0.98]">
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" /> Login with WhatsApp
              </button>
            </div>

            <div className="flex items-center gap-3 my-4 sm:my-5">
              <div className="flex-1 h-px bg-[#59636B]/20"></div>
              <span className="text-[#59636B] text-xs font-medium">OR</span>
              <div className="flex-1 h-px bg-[#59636B]/20"></div>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] font-bold py-2.5 sm:py-3 rounded-xl transition-all text-sm hover:shadow-lg hover:shadow-[#F5A623]/30 active:scale-[0.98]">
                <Mail className="w-5 h-5" /> Login with Email
              </button>
              <button className="w-full flex items-center justify-center gap-3 border border-[#59636B]/20 bg-white hover:bg-[#F7F4ED] text-[#171A1C] font-medium py-2.5 sm:py-3 rounded-xl transition-all text-sm active:scale-[0.98]">
                <Link2 className="w-5 h-5" /> Login with one-time link
              </button>
            </div>

            <div className="text-center text-sm mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#59636B]/15">
              <span className="text-[#59636B]">New here? </span>
              <button className="text-[#F5A623] font-bold hover:underline">
                Create an account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}