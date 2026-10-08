'use client';

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MapPin, ArrowRight, MessageSquare, ChevronDown, Sparkles } from "lucide-react";

// Property types for the dropdown
const residentialTypes = [
  "Apartment", "Villa", "Townhouse", "Penthouse", "Villa Compound",
  "Hotel Apartment", "Land", "Floor", "Building",
];
const commercialTypes = [
  "Office", "Shop", "Warehouse", "Labour Camp", "Business Centre",
  "Staff Accommodation", "Other Commercial",
];

export default function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Properties");
  const [buyRent, setBuyRent] = useState("Buy");
  const [soldRented, setSoldRented] = useState("Sold");
  const [filterType, setFilterType] = useState("All");

  // ===== Dropdown states =====
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [rentFreq, setRentFreq] = useState("Yearly");
  const [category, setCategory] = useState("Residential");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [selectedBaths, setSelectedBaths] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const dropdownRef = useRef(null);

  // Click outside handler
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
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/70 via-[#0e4b3e]/40 to-[#0a0e1a]/80" />
          {/* Subtle green ambient glow */}
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#00d16a]/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-[#c89b3c]/10 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* ===== Content ===== */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">

          {/* Badge */}
 {/* Badge */}
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-medium text-white/95 mb-6 shadow-lg shadow-black/10">
  <Sparkles className="w-3.5 h-3.5 text-[#00d16a]" />
  Trusted by 10,000+ residents across the UAE
</span>

{/* Headline */}
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-semibold text-white text-center mb-5 tracking-[-0.035em] leading-[1.08] max-w-4xl">
  <span className="block">More than a property.</span>
  <span className="block mt-1">
    <span className="bg-gradient-to-r from-[#00d16a] via-[#34d399] to-[#a7f3d0] bg-clip-text text-transparent font-bold">
      A place to call yours.
    </span>
  </span>
  
</h1>

{/* Subheading */}
<p className="text-base sm:text-lg md:text-xl text-white/75 text-center mb-9 sm:mb-11 max-w-2xl font-light leading-relaxed tracking-tight">
  Handpicked homes. Trusted brokers. Real data.
  <span className="text-white/90 font-normal"> So your next move feels less like a transaction — and more like coming home.</span>
</p>

          {/* ===== Search Box ===== */}
          <div
            ref={dropdownRef}
            className="w-full max-w-4xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 "
          >

            {/* Tabs */}
            <div className="flex bg-white border-b border-gray-100 px-2 pt-2 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`relative px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 rounded-t-xl ${
                    activeTab === tab.name
                      ? "text-[#0e4b3e] bg-gradient-to-b from-[#ecfdf5] to-white border-b-2 border-[#00d16a]"
                      : "text-gray-500 hover:text-[#0e4b3e] hover:bg-gray-50 border-b-2 border-transparent"
                  }`}
                >
                  {tab.name}
                  {tab.isNew && (
                    <span className="absolute top-1.5 -right-0.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase shadow-md">
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* ===== Form Body ===== */}
            <div className="p-4 sm:p-5 min-h-[150px] sm:min-h-[160px] transition-all duration-300 bg-white">

              {/* ===================== PROPERTIES ===================== */}
              {activeTab === "Properties" && (
                <div className="animate-fadeIn space-y-3">

                  {/* Row 1 */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex bg-gray-100 rounded-2xl p-1 shrink-0">
                      {["Buy", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => { setBuyRent(option); setActiveDropdown(null); }}
                          className={`flex-1 sm:flex-none px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                            buyRent === option
                              ? "bg-white text-[#0e4b3e] shadow-md"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00d16a]" />
                      <input
                        type="text"
                        placeholder="Enter location, building or community"
                        className="w-full h-11 pl-10 pr-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all bg-gray-50/50 focus:bg-white"
                      />
                    </div>

                    <button className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] hover:shadow-lg hover:shadow-[#00d16a]/30 text-white px-6 sm:px-8 h-11 rounded-2xl text-sm font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95">
                      Search
                    </button>
                  </div>

                  {/* Row 2: Filters */}
                  <div className="flex flex-wrap gap-2">

                    {buyRent === "Buy" ? (
                      <div className="flex bg-gray-100 rounded-2xl p-1">
                        {["All", "Ready", "Off-Plan"].map((option) => (
                          <button
                            key={option}
                            onClick={() => setFilterType(option)}
                            className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                              filterType === option
                                ? "bg-white text-[#0e4b3e] shadow-sm"
                                : "text-gray-500 hover:text-gray-700"
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
                          className="flex items-center gap-2 h-10 px-4 bg-gray-100 rounded-2xl text-[11px] sm:text-xs font-semibold text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                          {rentFreq}
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "rentFreq" ? "rotate-180" : ""}`} />
                        </button>
                        {activeDropdown === "rentFreq" && (
                          <div className="absolute top-full left-0 mt-2 w-36 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 py-1.5 animate-fadeIn overflow-hidden">
                            {["Yearly", "Monthly", "Weekly", "Daily", "Any"].map((opt) => (
                              <button
                                key={opt}
                                onClick={() => { setRentFreq(opt); setActiveDropdown(null); }}
                                className={`w-full text-left px-3.5 py-2 text-xs hover:bg-gray-50 transition-colors cursor-pointer ${
                                  rentFreq === opt ? "text-[#00d16a] font-semibold bg-[#ecfdf5]" : "text-gray-700"
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
                        className="flex items-center gap-2 h-10 px-4 bg-white border border-gray-200 rounded-2xl text-[11px] sm:text-xs font-semibold text-gray-700 hover:border-[#00d16a] hover:shadow-md transition-all cursor-pointer"
                      >
                        {selectedTypes.length > 0 ? `${selectedTypes.length} selected` : "Residential"}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "propertyType" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "propertyType" && (
                        <div className="absolute top-full left-0 mt-2 w-[calc(100vw-2rem)] max-w-[360px] bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
                          <div className="flex border-b border-gray-100 mb-3">
                            {["Residential", "Commercial"].map((cat) => (
                              <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`flex-1 pb-2.5 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                                  category === cat ? "border-[#00d16a] text-[#00d16a]" : "border-transparent text-gray-400"
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                            {currentTypes.map((type) => (
                              <label key={type} className="flex items-center gap-2 px-2.5 py-2 border border-gray-100 rounded-xl hover:border-[#00d16a] hover:bg-[#ecfdf5]/40 cursor-pointer transition-all">
                                <input
                                  type="checkbox"
                                  checked={selectedTypes.includes(type)}
                                  onChange={() => toggleType(type)}
                                  className="accent-[#00d16a] w-4 h-4 cursor-pointer rounded"
                                />
                                <span className="text-[11px] text-gray-700 font-medium">{type}</span>
                              </label>
                            ))}
                          </div>
                          <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                            <button
                              onClick={() => setSelectedTypes([])}
                              className="flex-1 py-2.5 border-2 border-[#0e4b3e] text-[#0e4b3e] text-xs font-bold rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                              Reset
                            </button>
                            <button
                              onClick={() => setActiveDropdown(null)}
                              className="flex-1 py-2.5 bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-[#00d16a]/30 cursor-pointer transition-all active:scale-95"
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
                        className="flex items-center gap-2 h-10 px-4 bg-white border border-gray-200 rounded-2xl text-[11px] sm:text-xs font-semibold text-gray-700 hover:border-[#00d16a] hover:shadow-md transition-all cursor-pointer"
                      >
                        {(selectedBeds || selectedBaths)
                          ? `${selectedBeds || "Any"} Beds / ${selectedBaths || "Any"} Baths`
                          : "Beds & Baths"}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "bedsBaths" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "bedsBaths" && (
                        <div className="absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] max-w-[360px] bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
                          <div className="mb-4">
                            <p className="text-xs font-bold text-gray-800 mb-3">Beds</p>
                            <div className="flex flex-wrap gap-2">
                              {["Studio", "1", "2", "3", "4", "5", "6", "7", "8+"].map((b) => (
                                <button
                                  key={b}
                                  onClick={() => setSelectedBeds(selectedBeds === b ? null : b)}
                                  className={`min-w-[36px] h-9 px-2.5 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
                                    selectedBeds === b
                                      ? "border-[#00d16a] bg-[#ecfdf5] text-[#00d16a] shadow-sm"
                                      : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-800 mb-3">Baths</p>
                            <div className="flex flex-wrap gap-2">
                              {["1", "2", "3", "4", "5", "6+"].map((b) => (
                                <button
                                  key={b}
                                  onClick={() => setSelectedBaths(selectedBaths === b ? null : b)}
                                  className={`min-w-[36px] h-9 px-2.5 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer ${
                                    selectedBaths === b
                                      ? "border-[#00d16a] bg-[#ecfdf5] text-[#00d16a] shadow-sm"
                                      : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                            <button
                              onClick={() => { setSelectedBeds(null); setSelectedBaths(null); }}
                              className="flex-1 py-2.5 border-2 border-[#0e4b3e] text-[#0e4b3e] text-xs font-bold rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                              Reset
                            </button>
                            <button
                              onClick={() => setActiveDropdown(null)}
                              className="flex-1 py-2.5 bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white text-xs font-bold rounded-xl hover:shadow-lg cursor-pointer transition-all active:scale-95"
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
                        className="flex items-center gap-2 h-10 px-4 bg-white border border-gray-200 rounded-2xl text-[11px] sm:text-xs font-semibold text-gray-700 hover:border-[#00d16a] hover:shadow-md transition-all cursor-pointer"
                      >
                        {(minPrice || maxPrice)
                          ? `AED ${minPrice || "0"} - ${maxPrice || "Any"}`
                          : "Price (AED)"}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "price" ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === "price" && (
                        <div className="absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] max-w-[360px] bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 p-4 animate-fadeIn">
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <div>
                              <label className="text-[10px] text-gray-500 font-semibold block mb-1.5">Minimum</label>
                              <input
                                type="text"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                placeholder="0"
                                className="w-full h-10 px-3 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] text-gray-500 font-semibold block mb-1.5">Maximum</label>
                              <input
                                type="text"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                placeholder="Any"
                                className="w-full h-10 px-3 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                              />
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {(buyRent === "Buy"
                              ? ["Any", "500K", "1M", "2M", "5M", "10M"]
                              : ["Any", "30K", "50K", "85K", "110K", "150K"]
                            ).map((p) => (
                              <button
                                key={p}
                                onClick={() => {
                                  if (p === "Any") { setMinPrice(""); setMaxPrice(""); }
                                  else { setMaxPrice(p); }
                                }}
                                className={`px-3 py-1.5 text-xs rounded-xl border font-semibold transition-all cursor-pointer ${
                                  maxPrice === p
                                    ? "border-[#00d16a] bg-[#ecfdf5] text-[#00d16a]"
                                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                                }`}
                              >
                                {p}
                              </button>
                            ))}
                          </div>
                          <div className="flex gap-2 pt-3 border-t border-gray-100">
                            <button
                              onClick={() => { setMinPrice(""); setMaxPrice(""); }}
                              className="flex-1 py-2.5 border-2 border-[#0e4b3e] text-[#0e4b3e] text-xs font-bold rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                              Reset
                            </button>
                            <button
                              onClick={() => setActiveDropdown(null)}
                              className="flex-1 py-2.5 bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white text-xs font-bold rounded-xl hover:shadow-lg cursor-pointer transition-all active:scale-95"
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
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00d16a]" />
                      <input
                        type="text"
                        placeholder="Enter location, building or community"
                        className="w-full h-11 pl-10 pr-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all bg-gray-50/50 focus:bg-white"
                      />
                    </div>
                    <button className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white px-6 sm:px-8 h-11 rounded-2xl text-sm font-bold whitespace-nowrap cursor-pointer active:scale-95 hover:shadow-lg hover:shadow-[#00d16a]/30 transition-all">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Residential", "Handover By", "Payment Plan", "% Completion"].map((label) => (
                      <select key={label} className="h-10 appearance-none bg-white border border-gray-200 rounded-2xl py-2 pl-4 pr-8 text-[11px] sm:text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#00d16a] hover:border-[#00d16a] hover:shadow-md transition-all cursor-pointer">
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
                    <div className="flex bg-gray-100 rounded-2xl p-1 shrink-0">
                      {["Sold", "Rented"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setSoldRented(option)}
                          className={`px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                            soldRented === option
                              ? "bg-white text-[#0e4b3e] shadow-md"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00d16a]" />
                      <input
                        type="text"
                        defaultValue="Dubai"
                        className="w-full h-11 pl-10 pr-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all bg-gray-50/50 focus:bg-white"
                      />
                    </div>

                    <button className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white px-6 sm:px-8 h-11 rounded-2xl text-sm font-bold whitespace-nowrap cursor-pointer active:scale-95 hover:shadow-lg hover:shadow-[#00d16a]/30 transition-all">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="flex bg-gray-100 rounded-2xl p-1">
                      {["All", "Ready", "Off-Plan"].map((option) => (
                        <button
                          key={option}
                          className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold rounded-xl cursor-pointer ${
                            option === "All" ? "bg-white text-[#0e4b3e] shadow-sm" : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {["Residential", "Beds", "Price (AED)"].map((label) => (
                      <select key={label} className="h-10 appearance-none bg-white border border-gray-200 rounded-2xl py-2 pl-4 pr-8 text-[11px] sm:text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#00d16a] hover:border-[#00d16a] hover:shadow-md transition-all cursor-pointer">
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
                    <div className="flex bg-gray-100 rounded-2xl p-1 shrink-0">
                      {["Buy", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setBuyRent(option)}
                          className={`px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                            buyRent === option
                              ? "bg-white text-[#0e4b3e] shadow-md"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00d16a]" />
                      <input
                        type="text"
                        placeholder="Enter location, building or community"
                        className="w-full h-11 pl-10 pr-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all bg-gray-50/50 focus:bg-white"
                      />
                    </div>

                    <button className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white px-6 sm:px-8 h-11 rounded-2xl text-sm font-bold whitespace-nowrap cursor-pointer active:scale-95 hover:shadow-lg hover:shadow-[#00d16a]/30 transition-all">
                      Search
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* AI Promo */}
            <div className="bg-gradient-to-r from-[#ecfdf5] via-white to-[#ecfdf5] px-4 sm:px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-[#00d16a]" />
                </div>
                <p className="text-[11px] sm:text-xs text-gray-700 font-semibold">
                  Want to find out more about UAE real estate using AI?
                </p>
              </div>
              <button className="text-[#0e4b3e] hover:text-[#00d16a] font-bold text-[11px] sm:text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer group transition-all">
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