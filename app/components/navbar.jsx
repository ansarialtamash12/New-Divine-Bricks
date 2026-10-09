"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import LoginModal from "@/app/components/LoginModal";
import RegisterModal from "@/app/components/RegisterModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authView, setAuthView] = useState(null); // null | "login" | "register"
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
    if (isMobileMenuOpen || authView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, authView]);

  // ESC key closes modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setAuthView(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
                onClick={() => setAuthView("login")}
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
                  setAuthView("login");
                }}
                className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] rounded-xl text-sm font-bold transition-all duration-200 sm:hidden active:scale-[0.98] shadow-[0_4px_14px_-4px_rgba(245,166,35,0.5)]"
              >
                Sign up or Log in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== AUTH MODALS ===== */}
      <LoginModal
        isOpen={authView === "login"}
        onClose={() => setAuthView(null)}
        onSwitchToRegister={() => setAuthView("register")}
      />

      <RegisterModal
        isOpen={authView === "register"}
        onClose={() => setAuthView(null)}
        onSwitchToLogin={() => setAuthView("login")}
      />
    </>
  );
}