'use client';

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MapPin, ArrowRight, MessageSquare, ChevronDown, Sparkles } from "lucide-react";

// Property types for the dropdown (India)
const residentialTypes = [
  "Apartment", "Villa", "Row House", "Penthouse", "Builder Floor",
  "Studio", "Gated Community", "Plot", "Farmhouse",
];
const commercialTypes = [
  "Office", "Shop", "Warehouse", "Industrial Space", "Co-working Space",
  "Commercial Plot", "Other Commercial",
];

export default function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Properties");
  const [buyRent, setBuyRent] = useState("Buy");
  const [soldRented, setSoldRented] = useState("Sold");
  const [filterType, setFilterType] = useState("All");

  // ===== Dropdown states =====
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [rentFreq, setRentFreq] = useState("Monthly");
  const [category, setCategory] = useState("Residential");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [selectedBaths, setSelectedBaths] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleTabClick = (tab) => {
    if (tab === "TruEstimate™") {
      router.push("/truest-imate");
      return;
    }
    setActiveTab(tab);
    setActiveDropdown(null);
  };

  const tabs = [
    { name: "Properties" },
    { name: "New Projects" },
    { name: "Transactions" },
    { name: "TruEstimate™", isNew: true },
    { name: "Agents" },
  ];

  const currentTypes = category === "Residential" ? residentialTypes : commercialTypes;

  return (
    <div className="w-full">
      <div className="relative w-full min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[740px] flex flex-col items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
        {/* ===== Video Background ===== */}
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <video
            className="absolute inset-0 h-full w-full object-cover scale-105"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/7578554-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          {/* Deep Charcoal overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#171A1C]/80 via-[#171A1C]/55 to-[#171A1C]/90" />
          {/* Luxury Gold ambient glow */}
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

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-semibold text-white text-center mb-5 tracking-[-0.035em] leading-[1.08] max-w-4xl">
            <span className="block">More than a property.</span>
            <span className="block mt-1">
              <span className="bg-gradient-to-r from-[#F5A623] via-[#FFD07A] to-[#F5A623] bg-clip-text text-transparent font-bold">
                A place to call your own.
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/75 text-center mb-9 sm:mb-11 max-w-2xl font-light leading-relaxed tracking-tight">
            Handpicked homes. Trusted brokers. Verified data.
            <span className="text-white/95 font-normal"> So your next move feels less like a transaction — and more like coming home.</span>
          </p>

          {/* ===== Search Box ===== */}
          <div
            ref={dropdownRef}
            className="w-full max-w-4xl bg-[#F7F4ED]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#F5A623]/20"
          >
            {/* Tabs */}
            <div className="flex bg-[#F7F4ED] border-b border-[#59636B]/15 px-2 pt-2 overflow-x-auto scrollbar-hide rounded-t-3xl">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`relative px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 rounded-t-xl ${
                    activeTab === tab.name
                      ? "text-[#F5A623] bg-gradient-to-b from-[#F5A623]/10 to-transparent border-b-2 border-[#F5A623]"
                      : "text-[#59636B] hover:text-[#F5A623] hover:bg-[#F5A623]/5 border-b-2 border-transparent"
                  }`}
                >
                  {tab.name}
                  {tab.isNew && (
                    <span className="absolute top-1.5 -right-0.5 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase shadow-md">
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* ===== Form Body ===== */}
            <div className="p-4 sm:p-5 min-h-[150px] sm:min-h-[160px] transition-all duration-300 bg-[#F7F4ED] rounded-b-3xl">

              {/* ===================== PROPERTIES ===================== */}
              {activeTab === "Properties" && (
                <div className="animate-fadeIn space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex bg-[#59636B]/10 rounded-2xl p-1 shrink-0">
                      {["Buy", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => { setBuyRent(option); setActiveDropdown(null); }}
                          className={`flex-1 sm:flex-none px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                            buyRent === option
                              ? "bg-[#F5A623] text-[#171A1C] shadow-md"
                              : "text-[#59636B] hover:text-[#171A1C]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F5A623]" />
                      <input
                        type="text"
                        placeholder="Enter locality, project or city"
                        className="w-full h-11 pl-10 pr-3 border border-[#59636B]/20 rounded-2xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all bg-white focus:bg-white"
                      />
                    </div>

                    <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] px-6 sm:px-8 h-11 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95">
                      Search
                    </button>
                  </div>

                  {/* Filters */}
                  <div className="flex flex-wrap gap-2">
                    {buyRent === "Buy" ? (
                      <div className="flex bg-[#59636B]/10 rounded-2xl p-1">
                        {["All", "Ready", "Under Construction"].map((option) => (
                          <button
                            key={option}
                            onClick={() => setFilterType(option)}
                            className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                              filterType === option
                                ? "bg-white text-[#F5A623] shadow-sm"
                                : "text-[#59636B] hover:text-[#171A1C]"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown("rentFreq")}
                          className="flex items-center gap-2 h-10 px-4 bg-[#59636B]/10 rounded-2xl text-[11px] sm:text-xs font-semibold text-[#59636B] hover:bg-[#59636B]/20 transition-colors cursor-pointer"
                        >
                          {rentFreq}
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "rentFreq" ? "rotate-180" : ""}`} />
                        </button>
                        {activeDropdown === "rentFreq" && (
                          <div className="absolute top-full left-0 mt-2 w-36 bg-[#F7F4ED] border border-[#59636B]/15 rounded-2xl shadow-2xl z-50 py-1.5 animate-fadeIn overflow-hidden">
                            {["Monthly", "Quarterly", "Yearly", "Any"].map((opt) => (
                              <button
                                key={opt}
                                onClick={() => { setRentFreq(opt); setActiveDropdown(null); }}
                                className={`w-full text-left px-3.5 py-2 text-xs hover:bg-[#F5A623]/10 transition-colors cursor-pointer ${
                                  rentFreq === opt ? "text-[#F5A623] font-semibold bg-[#F5A623]/10" : "text-[#59636B]"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Property Type */}
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown("propertyType")}
                        className="flex items-center gap-2 h-10 px-4 bg-white border border-[#59636B]/20 rounded-2xl text-[11px] sm:text-xs font-semibold text-[#59636B] hover:border-[#F5A623] hover:shadow-md transition-all cursor-pointer"
                      >
                        {selectedTypes.length > 0 ? `${selectedTypes.length} selected` : "Residential"}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "propertyType" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "propertyType" && (
                        <div className="absolute top-full left-0 mt-2 w-[calc(100vw-2rem)] max-w-[360px] bg-[#F7F4ED] border border-[#59636B]/15 rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
                          <div className="flex border-b border-[#59636B]/15 mb-3">
                            {["Residential", "Commercial"].map((cat) => (
                              <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`flex-1 pb-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                                  category === cat ? "border-[#F5A623] text-[#F5A623]" : "border-transparent text-[#59636B]"
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                            {currentTypes.map((type) => (
                              <label key={type} className="flex items-center gap-2 px-2.5 py-2 border border-[#59636B]/15 rounded-xl hover:border-[#F5A623] hover:bg-[#F5A623]/5 cursor-pointer transition-all">
                                <input
                                  type="checkbox"
                                  checked={selectedTypes.includes(type)}
                                  onChange={() => toggleType(type)}
                                  className="accent-[#F5A623] w-4 h-4 cursor-pointer rounded"
                                />
                                <span className="text-[11px] text-[#171A1C] font-medium">{type}</span>
                              </label>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-4 pt-3 border-t border-[#59636B]/15">
                            <button
                              onClick={() => setSelectedTypes([])}
                              className="flex-1 py-2.5 border-2 border-[#171A1C] text-[#171A1C] text-xs font-bold rounded-xl hover:bg-[#171A1C]/5 cursor-pointer transition-colors"
                            >
                              Reset
                            </button>
                            <button
                              onClick={() => setActiveDropdown(null)}
                              className="flex-1 py-2.5 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-[#F5A623]/40 cursor-pointer transition-all active:scale-95"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Beds & Baths */}
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown("bedsBaths")}
                        className="flex items-center gap-2 h-10 px-4 bg-white border border-[#59636B]/20 rounded-2xl text-[11px] sm:text-xs font-semibold text-[#59636B] hover:border-[#F5A623] hover:shadow-md transition-all cursor-pointer"
                      >
                        {(selectedBeds || selectedBaths)
                          ? `${selectedBeds || "Any"} BHK / ${selectedBaths || "Any"} Baths`
                          : "BHK & Baths"}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "bedsBaths" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "bedsBaths" && (
                        <div className="absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] max-w-[360px] bg-[#F7F4ED] border border-[#59636B]/15 rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
                          <div className="mb-4">
                            <p className="text-xs font-bold text-[#171A1C] mb-3">BHK</p>
                            <div className="flex flex-wrap gap-2">
                              {["1 RK", "1", "2", "3", "4", "5", "6", "7", "8+"].map((b) => (
                                <button
                                  key={b}
                                  onClick={() => setSelectedBeds(selectedBeds === b ? null : b)}
                                  className={`min-w-[36px] h-9 px-2.5 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
                                    selectedBeds === b
                                      ? "border-[#F5A623] bg-[#F5A623]/15 text-[#F5A623] shadow-sm"
                                      : "border-[#59636B]/20 text-[#59636B] hover:border-[#59636B]/40 hover:bg-white"
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#171A1C] mb-3">Baths</p>
                            <div className="flex flex-wrap gap-2">
                              {["1", "2", "3", "4", "5", "6+"].map((b) => (
                                <button
                                  key={b}
                                  onClick={() => setSelectedBaths(selectedBaths === b ? null : b)}
                                  className={`min-w-[36px] h-9 px-2.5 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
                                    selectedBaths === b
                                      ? "border-[#F5A623] bg-[#F5A623]/15 text-[#F5A623] shadow-sm"
                                      : "border-[#59636B]/20 text-[#59636B] hover:border-[#59636B]/40 hover:bg-white"
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4 pt-3 border-t border-[#59636B]/15">
                            <button
                              onClick={() => { setSelectedBeds(null); setSelectedBaths(null); }}
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

                    {/* Price */}
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown("price")}
                        className="flex items-center gap-2 h-10 px-4 bg-white border border-[#59636B]/20 rounded-2xl text-[11px] sm:text-xs font-semibold text-[#59636B] hover:border-[#F5A623] hover:shadow-md transition-all cursor-pointer"
                      >
                        {(minPrice || maxPrice)
                          ? `₹${minPrice || "0"} - ${maxPrice || "Any"}`
                          : "Price (₹)"}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "price" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "price" && (
                        <div className="absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] max-w-[360px] bg-[#F7F4ED] border border-[#59636B]/15 rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <div>
                              <label className="text-[10px] text-[#59636B] font-semibold block mb-1.5">Minimum</label>
                              <input
                                type="text"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                placeholder="0"
                                className="w-full h-10 px-3 border border-[#59636B]/20 rounded-xl text-xs text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all bg-white"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] text-[#59636B] font-semibold block mb-1.5">Maximum</label>
                              <input
                                type="text"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                placeholder="Any"
                                className="w-full h-10 px-3 border border-[#59636B]/20 rounded-xl text-xs text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all bg-white"
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
                                  if (p === "Any") { setMinPrice(""); setMaxPrice(""); }
                                  else { setMaxPrice(p); }
                                }}
                                className={`px-3 py-1.5 text-xs rounded-xl border font-semibold transition-all cursor-pointer ${
                                  maxPrice === p
                                    ? "border-[#F5A623] bg-[#F5A623]/15 text-[#F5A623]"
                                    : "border-[#59636B]/20 text-[#59636B] hover:border-[#59636B]/40"
                                }`}
                              >
                                {p}
                              </button>
                            ))}
                          </div>
                          <div className="flex gap-2 pt-3 border-t border-[#59636B]/15">
                            <button
                              onClick={() => { setMinPrice(""); setMaxPrice(""); }}
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
              )}

              {/* ===================== NEW PROJECTS ===================== */}
              {activeTab === "New Projects" && (
                <div className="animate-fadeIn space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="relative flex-1">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F5A623]" />
                      <input
                        type="text"
                        placeholder="Enter locality, project or city"
                        className="w-full h-11 pl-10 pr-3 border border-[#59636B]/20 rounded-2xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all bg-white"
                      />
                    </div>
                    <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] px-6 sm:px-8 h-11 rounded-2xl text-sm font-bold whitespace-nowrap cursor-pointer active:scale-95 hover:shadow-lg hover:shadow-[#F5A623]/40 transition-all">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Residential", "Possession By", "Payment Plan", "% Completion"].map((label) => (
                      <select key={label} className="h-10 appearance-none bg-white border border-[#59636B]/20 rounded-2xl py-2 pl-4 pr-8 text-[11px] sm:text-xs font-semibold text-[#59636B] focus:outline-none focus:border-[#F5A623] hover:border-[#F5A623] hover:shadow-md transition-all cursor-pointer">
                        <option>{label}</option>
                      </select>
                    ))}
                  </div>
                </div>
              )}

              {/* ===================== TRANSACTIONS ===================== */}
              {activeTab === "Transactions" && (
                <div className="animate-fadeIn space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex bg-[#59636B]/10 rounded-2xl p-1 shrink-0">
                      {["Sold", "Rented"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setSoldRented(option)}
                          className={`px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                            soldRented === option
                              ? "bg-[#F5A623] text-[#171A1C] shadow-md"
                              : "text-[#59636B] hover:text-[#171A1C]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F5A623]" />
                      <input
                        type="text"
                        defaultValue="Mumbai"
                        className="w-full h-11 pl-10 pr-3 border border-[#59636B]/20 rounded-2xl text-sm text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all bg-white"
                      />
                    </div>

                    <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] px-6 sm:px-8 h-11 rounded-2xl text-sm font-bold whitespace-nowrap cursor-pointer active:scale-95 hover:shadow-lg hover:shadow-[#F5A623]/40 transition-all">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="flex bg-[#59636B]/10 rounded-2xl p-1">
                      {["All", "Ready", "Under Construction"].map((option) => (
                        <button
                          key={option}
                          className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-xl cursor-pointer ${
                            option === "All" ? "bg-white text-[#F5A623] shadow-sm" : "text-[#59636B] hover:text-[#171A1C]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {["Residential", "BHK", "Price (₹)"].map((label) => (
                      <select key={label} className="h-10 appearance-none bg-white border border-[#59636B]/20 rounded-2xl py-2 pl-4 pr-8 text-[11px] sm:text-xs font-semibold text-[#59636B] focus:outline-none focus:border-[#F5A623] hover:border-[#F5A623] hover:shadow-md transition-all cursor-pointer">
                        <option>{label}</option>
                      </select>
                    ))}
                  </div>
                </div>
              )}

              {/* ===================== AGENTS ===================== */}
              {activeTab === "Agents" && (
                <div className="animate-fadeIn">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex bg-[#59636B]/10 rounded-2xl p-1 shrink-0">
                      {["Buy", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setBuyRent(option)}
                          className={`px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                            buyRent === option
                              ? "bg-[#F5A623] text-[#171A1C] shadow-md"
                              : "text-[#59636B] hover:text-[#171A1C]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#F5A623]" />
                      <input
                        type="text"
                        placeholder="Enter locality, project or city"
                        className="w-full h-11 pl-10 pr-3 border border-[#59636B]/20 rounded-2xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all bg-white"
                      />
                    </div>

                    <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] px-6 sm:px-8 h-11 rounded-2xl text-sm font-bold whitespace-nowrap cursor-pointer active:scale-95 hover:shadow-lg hover:shadow-[#F5A623]/40 transition-all">
                      Search
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* AI Promo */}
            <div className="bg-gradient-to-r from-[#F7F4ED] via-white to-[#F7F4ED] px-4 sm:px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#59636B]/15 rounded-b-3xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-[#F5A623]/20">
                  <MessageSquare className="h-4 w-4 text-[#F5A623]" />
                </div>
                <p className="text-[11px] sm:text-xs text-[#171A1C] font-semibold">
                  Want to find out more about India real estate using AI?
                </p>
              </div>
              <button className="text-[#F5A623] hover:text-[#E09400] font-bold text-[11px] sm:text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer group transition-all">
                Try DivineGPT
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}