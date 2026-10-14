"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, ChevronDown, Sparkles, Search } from "lucide-react";

export default function Hero() {
  const [buyRent, setBuyRent] = useState("Buy");
  const [activeDropdown, setActiveDropdown] = useState(null);

  // ===== Filter States =====
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const trendingTags = [
    "2BHK in Mumbai",
    "Villas in Pune",
    "Sea view, Bandra",
    "Gated Communities in NCR",
  ];

  return (
    <div className="w-full">
      <div className="relative w-full min-h-[640px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[820px] flex flex-col items-center justify-center pt-24 pb-32 sm:pt-28 sm:pb-40 lg:pt-32 lg:pb-48">
        {/* ===== Video Background ===== */}
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover scale-105"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/7578554-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#171A1C]/80 via-[#171A1C]/55 to-[#171A1C]/90" />
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#F5A623]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-[#F5A623]/10 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* ===== Content ===== */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-[#F5A623]/30 text-xs sm:text-sm font-medium text-white/95 mb-6 shadow-lg shadow-black/20">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            Trusted by 10,000+ families across India
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-semibold text-white text-center mb-5 tracking-[-0.035em] leading-[1.08] max-w-4xl">
            <span className="block">More than a property.</span>
            <span className="block mt-1">
              <span className="bg-gradient-to-r from-[#F5A623] via-[#FFD07A] to-[#F5A623] bg-clip-text text-transparent font-bold">
                A place to call your own.
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/75 text-center mb-10 max-w-2xl font-light leading-relaxed tracking-tight">
            Handpicked homes. Trusted brokers. Verified data.
            <span className="text-white/95 font-normal">
              {" "}
              So your next move feels less like a transaction — and more like
              coming home.
            </span>
          </p>

          {/* ===== SEARCH BOX (2-Row Layout) ===== */}
          <div ref={dropdownRef} className="w-full max-w-4xl relative z-50">
            {/* ROW 1: Dark Charcoal Bar with Buy / Rent */}
            <div
              className="rounded-t-3xl px-3 sm:px-4 pt-3 pb-3 flex items-center gap-2"
              style={{ backgroundColor: "#171A1C" }}
            >
              {["Buy", "Rent"].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setBuyRent(option);
                    setActiveDropdown(null);
                  }}
                  className={`px-6 sm:px-8 py-2.5 text-sm sm:text-base font-bold rounded-2xl transition-all whitespace-nowrap cursor-pointer ${
                    buyRent === option
                      ? "bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* ROW 2: Ivory Card with Location | Beds | Budget | Search */}
            <div
              className="rounded-b-3xl rounded-tr-3xl border border-[#F5A623]/20 shadow-2xl px-4 sm:px-5 py-4 sm:py-5"
              style={{ backgroundColor: "#F7F4ED" }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-stretch">
                {/* Location */}
                <div className="relative flex-1 md:px-5 md:border-r md:border-[#59636B]/15">
                  <label
                    className="block text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-1"
                    style={{ color: "#59636B" }}
                  >
                    Location
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Try 'Mumbai' or 'quiet 2BHK near'"
                      className="w-full pr-8 py-1.5 bg-transparent border-0 text-sm sm:text-base font-medium focus:outline-none placeholder:text-[#59636B]/60"
                      style={{ color: "#171A1C" }}
                    />
                    <MapPin
                      className="absolute right-0 w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                      style={{ color: "#F5A623" }}
                    />
                  </div>
                </div>

                {/* Beds Dropdown */}
                <div className="relative md:px-5 md:border-r md:border-[#59636B]/15 md:min-w-[150px]">
                  <label
                    className="block text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-1"
                    style={{ color: "#59636B" }}
                  >
                    Beds
                  </label>
                  <button
                    onClick={() => toggleDropdown("beds")}
                    className="flex items-center justify-between gap-2 w-full py-1.5 text-sm sm:text-base font-medium cursor-pointer"
                    style={{ color: "#171A1C" }}
                  >
                    <span>{selectedBeds ? `${selectedBeds} BHK` : "BHK"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeDropdown === "beds" ? "rotate-180" : ""}`}
                      style={{ color: "#171A1C" }}
                    />
                  </button>
                </div>

                {/* Budget Dropdown */}
                <div className="relative md:px-5 md:min-w-[150px]">
                  <label
                    className="block text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-1"
                    style={{ color: "#59636B" }}
                  >
                    Budget
                  </label>
                  <button
                    onClick={() => toggleDropdown("price")}
                    className="flex items-center justify-between gap-2 w-full py-1.5 text-sm sm:text-base font-medium cursor-pointer"
                    style={{ color: "#171A1C" }}
                  >
                    <span>
                      {minPrice || maxPrice
                        ? `₹${maxPrice || minPrice}`
                        : "Any"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeDropdown === "price" ? "rotate-180" : ""}`}
                      style={{ color: "#171A1C" }}
                    />
                  </button>
                </div>

                {/* Search Button */}
                <div className="md:pl-5 md:self-end">
                  <button className="w-full md:w-auto bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] px-8 h-12 rounded-2xl text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                    Search
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ===== DROPDOWNS ===== */}

            {/* Beds Dropdown (Only BHK, no Baths) */}
            {activeDropdown === "beds" && (
              <div className="absolute left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[400px] mt-3 bg-white border border-[#59636B]/15 rounded-2xl shadow-2xl z-[100] p-5 animate-fadeIn">
                <div className="mb-1">
                  <p
                    className="text-xs font-bold mb-3"
                    style={{ color: "#171A1C" }}
                  >
                    BHK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["1 RK", "1", "2", "3", "4", "5", "6", "7", "8+"].map(
                      (b) => (
                        <button
                          key={b}
                          onClick={() =>
                            setSelectedBeds(selectedBeds === b ? null : b)
                          }
                          className="min-w-[40px] h-10 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer"
                          style={{
                            borderColor:
                              selectedBeds === b ? "#F5A623" : "#E8E2D5",
                            backgroundColor:
                              selectedBeds === b
                                ? "rgba(245,166,35,0.1)"
                                : "#FFFFFF",
                            color: selectedBeds === b ? "#F5A623" : "#59636B",
                          }}
                        >
                          {b}
                        </button>
                      ),
                    )}
                  </div>
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t border-[#E8E2D5]">
                  <button
                    onClick={() => setSelectedBeds(null)}
                    className="flex-1 py-2.5 border-2 border-[#171A1C] text-[#171A1C] text-xs font-bold rounded-xl hover:bg-[#171A1C]/5 cursor-pointer transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setActiveDropdown(null)}
                    className="flex-1 py-2.5 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] text-xs font-bold rounded-xl hover:shadow-lg cursor-pointer transition-all active:scale-95"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            {/* Price Dropdown */}
            {activeDropdown === "price" && (
              <div className="absolute left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[400px] mt-3 bg-white border border-[#59636B]/15 rounded-2xl shadow-2xl z-[100] p-5 animate-fadeIn">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label
                      className="text-[10px] font-semibold block mb-1.5"
                      style={{ color: "#59636B" }}
                    >
                      Minimum
                    </label>
                    <input
                      type="text"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      placeholder="0"
                      className="w-full h-10 px-3 border border-[#E8E2D5] rounded-xl text-xs focus:outline-none focus:border-[#F5A623] bg-white"
                      style={{ color: "#171A1C" }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-[10px] font-semibold block mb-1.5"
                      style={{ color: "#59636B" }}
                    >
                      Maximum
                    </label>
                    <input
                      type="text"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      placeholder="Any"
                      className="w-full h-10 px-3 border border-[#E8E2D5] rounded-xl text-xs focus:outline-none focus:border-[#F5A623] bg-white"
                      style={{ color: "#171A1C" }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {(buyRent === "Buy"
                    ? ["Any", "25L", "50L", "1Cr", "2Cr", "5Cr"]
                    : ["Any", "10K", "25K", "50K", "75K", "1L"]
                  ).map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        if (p === "Any") {
                          setMinPrice("");
                          setMaxPrice("");
                        } else {
                          setMaxPrice(p);
                        }
                      }}
                      className="px-3 py-1.5 text-xs rounded-xl border font-semibold transition-all cursor-pointer"
                      style={{
                        borderColor: maxPrice === p ? "#F5A623" : "#E8E2D5",
                        backgroundColor:
                          maxPrice === p ? "rgba(245,166,35,0.1)" : "#FFFFFF",
                        color: maxPrice === p ? "#F5A623" : "#59636B",
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 pt-3 border-t border-[#E8E2D5]">
                  <button
                    onClick={() => {
                      setMinPrice("");
                      setMaxPrice("");
                    }}
                    className="flex-1 py-2.5 border-2 border-[#171A1C] text-[#171A1C] text-xs font-bold rounded-xl hover:bg-[#171A1C]/5 cursor-pointer transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setActiveDropdown(null)}
                    className="flex-1 py-2.5 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] text-xs font-bold rounded-xl hover:shadow-lg cursor-pointer transition-all active:scale-95"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
