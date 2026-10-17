"use client";

import React, { useState } from "react";
import { ArrowRight, Building2, Car, Map, Landmark } from "lucide-react";
import Link from "next/link";
import SellModal from "./SellModal";

export default function BelowHero() {
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  return (
    <>
      <section className="relative z-0 w-full max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* BANNER 1 */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#171A1C] via-[#0f1214] to-[#171A1C] flex flex-col md:flex-row items-center justify-between p-6 md:p-8 min-h-[200px] shadow-elevated lg:flex-[1.4]">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#F5A623]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 right-32 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute left-0 bottom-0 h-full w-1/3 hidden md:flex items-end opacity-30 pointer-events-none">
              <Building2 className="text-[#F5A623] w-40 h-40 ml-6 mb-2" />
            </div>

            <div className="relative z-10 text-center md:text-left md:ml-48 lg:ml-44">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight">
                Sell or Rent Your Property with Confidence
              </h2>
              <p className="text-[#F5A623]/90 text-sm md:text-base font-medium">
                Connect with a trusted agent to secure the best deal, faster.
              </p>
            </div>

            <button
              onClick={() => setIsSellModalOpen(true)}
              className="relative z-10 mt-5 md:mt-0 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] px-5 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:shadow-2xl hover:shadow-[#F5A623]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* BANNER 2 - REDESIGNED */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#171A1C] via-[#0f1214] to-[#171A1C] flex flex-col justify-between p-6 md:p-8 min-h-[200px] shadow-elevated lg:flex-[1]">
            {/* Decorative blur */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#F5A623]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top: Avatars + Text */}
            <div className="relative z-10 flex flex-col items-center sm:items-start gap-4">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/150?img=1",
                  "https://i.pravatar.cc/150?img=2",
                  "https://i.pravatar.cc/150?img=3",
                  "https://i.pravatar.cc/150?img=4",
                ].map((src, i) => (
                  <img
                    key={i}
                    className="w-11 h-11 rounded-full border-4 border-[#171A1C] shadow-lg object-cover ring-1 ring-[#F5A623]/20"
                    src={src}
                    alt="Agent"
                  />
                ))}
              </div>

              {/* Text */}
              <div className="text-center sm:text-left">
                <h3 className="text-white font-bold text-lg tracking-tight">
                  Find a TruBroker™
                </h3>
                <p className="text-[#F5A623]/85 text-xs md:text-sm font-medium mt-1 leading-relaxed">
                  Find trusted agents awarded for their excellent performance.
                </p>
              </div>
            </div>

            {/* Bottom: Button */}
            <Link
              href="/find-agent"
              className="relative z-10 mt-6 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] px-5 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-[#F5A623]/30 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap active:scale-95 w-full sm:w-auto sm:self-start"
            >
              Find My Agent <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <SellModal
        isOpen={isSellModalOpen}
        onClose={() => setIsSellModalOpen(false)}
      />
    </>
  );
}
