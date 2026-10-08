"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Search,
  TrendingUp,
  ChevronRight,
  BarChart3,
  ChevronDown,
  Play,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", price: 3100000 },
  { month: "Feb", price: 3250000 },
  { month: "Mar", price: 3180000 },
  { month: "Apr", price: 3350000 },
  { month: "May", price: 3420000 },
  { month: "Jun", price: 3500000 },
  { month: "Jul", price: 3650000 },
  { month: "Aug", price: 3550000 },
  { month: "Sep", price: 3700000 },
  { month: "Oct", price: 3800000 },
  { month: "Nov", price: 3900000 },
  { month: "Dec", price: 4000000 },
];

const recentTransactions = [
  { id: 1, location: "Bandra West, Mumbai", price: "₹2.1 Cr", date: "12 May 2024" },
  { id: 2, location: "Worli, Mumbai", price: "₹3.5 Cr", date: "10 May 2024" },
  { id: 3, location: "Juhu, Mumbai", price: "₹12 Cr", date: "08 May 2024" },
];

export default function TruEstimatePage() {
  const [activeTab, setActiveTab] = useState("Properties");
  const [location, setLocation] = useState("");
  const [saleRent, setSaleRent] = useState("Sale");
  const [buyRent, setBuyRent] = useState("Buy");
  const [soldRented, setSoldRented] = useState("Sold");
  const [reportType, setReportType] = useState("Unit Number");
  const [filterType, setFilterType] = useState("All");
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      setShowResult(true);
    }
  };

  const tabs = [
    { name: "Properties" },
    { name: "New Projects" },
    { name: "Transactions" },
    { name: "TruEstimate™", isNew: true },
    { name: "Agents" },
  ];

  return (
    <div className="w-full bg-[#F7F4ED] flex flex-col font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full pt-10 pb-16 overflow-hidden bg-gradient-to-b from-[#F5A623]/10 via-[#F7F4ED] to-[#F7F4ED] min-h-[650px]">
        <div className="absolute bottom-0 left-0 right-0 h-64 z-0">
          <img
            src="/skyline_enhanced.png"
            alt="India Skyline"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4ED]/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#171A1C] mb-4 tracking-tight">
            TruEstimate™
          </h1>
          <p className="text-base md:text-lg text-[#59636B] mb-8 max-w-2xl mx-auto">
            Get a comprehensive, data-backed property valuation for your property in India. This includes accurate sale and rental estimates along with market insights.
          </p>

          {/* TABS */}
          <div className="flex justify-center mb-0">
            <div className="bg-white rounded-t-2xl shadow-lg flex items-center px-2 py-1 gap-1 flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeTab === tab.name
                      ? "bg-[#171A1C] text-[#F5A623]"
                      : "text-[#59636B] hover:text-[#F5A623] hover:bg-[#F5A623]/10"
                  }`}
                >
                  {tab.name}
                  {tab.isNew && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* SEARCH BOX */}
          <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-2xl p-5 max-w-3xl mx-auto min-h-[220px] flex flex-col border border-[#59636B]/15">
            <div className="flex-1">
              {/* PROPERTIES */}
              {activeTab === "Properties" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex bg-[#F7F4ED] rounded-xl p-1 shrink-0">
                      {["Buy", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setBuyRent(option)}
                          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                            buyRent === option
                              ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                              : "text-[#59636B]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter locality or city"
                        className="w-full pl-4 pr-10 py-3 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#F5A623]" />
                    </div>

                    <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex bg-[#F7F4ED] rounded-xl p-1 shrink-0">
                      {["All", "Ready", "Under Construction"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFilterType(option)}
                          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                            filterType === option
                              ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                              : "text-[#59636B]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all cursor-pointer">
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all cursor-pointer">
                      <option>BHK & Baths</option>
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                    </select>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all cursor-pointer">
                      <option>Price (₹)</option>
                      <option>Under 50L</option>
                      <option>50L - 1Cr</option>
                    </select>
                  </div>
                </>
              )}

              {/* NEW PROJECTS */}
              {activeTab === "New Projects" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter locality or city"
                        className="w-full pl-4 pr-10 py-3 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#F5A623]" />
                    </div>
                    <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all cursor-pointer">
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all cursor-pointer">
                      <option>Possession By</option>
                      <option>2026</option>
                      <option>2027</option>
                    </select>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all cursor-pointer">
                      <option>Payment Plan</option>
                      <option>Post Possession</option>
                    </select>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all cursor-pointer">
                      <option>% Completion</option>
                      <option>0-25%</option>
                      <option>25-50%</option>
                    </select>
                  </div>
                </>
              )}

              {/* TRANSACTIONS */}
              {activeTab === "Transactions" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex bg-[#F7F4ED] rounded-xl p-1 shrink-0">
                      {["Sold", "Rented"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setSoldRented(option)}
                          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                            soldRented === option
                              ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                              : "text-[#59636B]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        defaultValue="Mumbai"
                        className="w-full pl-4 pr-10 py-3 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#F5A623]" />
                    </div>

                    <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex bg-[#F7F4ED] rounded-xl p-1 shrink-0">
                      {["All", "Ready", "Under Construction"].map((option) => (
                        <button
                          key={option}
                          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                            option === "All" ? "bg-[#171A1C] shadow-md text-[#F5A623]" : "text-[#59636B]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none transition-all cursor-pointer">
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none transition-all cursor-pointer">
                      <option>BHK</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                    <select className="appearance-none bg-white border border-[#59636B]/20 rounded-xl py-2.5 px-3 text-xs font-medium text-[#171A1C] focus:outline-none transition-all cursor-pointer">
                      <option>Price (₹)</option>
                      <option>Under 50L</option>
                      <option>50L - 1Cr</option>
                    </select>
                  </div>
                </>
              )}

              {/* TRUESTIMATE™ */}
              {activeTab === "TruEstimate™" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex bg-[#F7F4ED] rounded-xl p-1 shrink-0">
                      {["Sale", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setSaleRent(option)}
                          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                            saleRent === option
                              ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                              : "text-[#59636B]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="flex bg-[#F7F4ED] rounded-xl p-1 flex-1">
                      {["Unit Number", "Sale Deed", "Khata"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setReportType(option)}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                            reportType === option
                              ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                              : "text-[#59636B]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter locality or project name"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pl-4 pr-10 py-3 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#F5A623]" />
                    </div>

                    <div className="relative md:w-48">
                      <select className="w-full appearance-none bg-white border border-[#59636B]/20 rounded-xl py-3 pl-4 pr-10 text-sm text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 transition-all cursor-pointer">
                        <option>Unit Number</option>
                        <option>101</option>
                        <option>202</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-[#59636B] pointer-events-none" />
                    </div>

                    <button
                      onClick={handleSearch}
                      className="bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95"
                    >
                      Get Report
                    </button>
                  </div>

                  <p className="text-[11px] text-[#59636B] mt-4 leading-relaxed text-center">
                    *Start by typing a locality, project or building name. To generate a report, select a detailed sub-location (e.g. building, tower or gated community) and the unit number as per the Sale Deed.{" "}
                    <Link href="#" className="text-[#F5A623] font-bold hover:underline">View Sample</Link>
                  </p>
                </>
              )}

              {/* AGENTS */}
              {activeTab === "Agents" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex bg-[#F7F4ED] rounded-xl p-1 shrink-0">
                      {["Buy", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setBuyRent(option)}
                          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                            buyRent === option
                              ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                              : "text-[#59636B]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter locality or city"
                        className="w-full pl-4 pr-10 py-3 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#F5A623]" />
                    </div>

                    <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95">
                      Search
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RESULT SECTION */}
      {showResult && (
        <section className="w-full bg-[#F7F4ED] py-16 border-t border-[#59636B]/15 animate-fadeIn">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15">
                <p className="text-sm text-[#59636B] mb-1">Estimated Value for {location || "Your Property"}</p>
                <p className="text-3xl font-bold text-[#171A1C] tracking-tight">₹4,00,00,000</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15">
                <p className="text-sm text-[#59636B] mb-1">Price Trend (12 Months)</p>
                <p className="text-3xl font-bold text-[#F5A623] flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" /> +8.5%
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15">
                <p className="text-sm text-[#59636B] mb-1">Avg. Price / sqft</p>
                <p className="text-3xl font-bold text-[#171A1C] tracking-tight">₹18,500</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15 mb-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#171A1C] tracking-tight">Price Trend Over Time</h2>
                <span className="text-xs bg-[#F5A623]/10 text-[#F5A623] px-3 py-1 rounded-full font-bold">Live Data</span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F5A623" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#F5A623" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#59636B22" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#59636B", fontSize: 12 }} dy={10} />
                    <YAxis hide domain={["dataMin - 200000", "dataMax + 200000"]} />
                    <Tooltip
                      formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, "Price"]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #59636B33",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        backgroundColor: "#F7F4ED",
                        color: "#171A1C",
                      }}
                    />
                    <Area type="monotone" dataKey="price" stroke="#F5A623" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15 overflow-hidden">
              <div className="p-6 border-b border-[#59636B]/15 flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#171A1C] tracking-tight">Recent Transactions in {location || "Area"}</h2>
                <Link href="/transactions" className="text-sm text-[#F5A623] font-bold hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="divide-y divide-[#59636B]/10">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="p-4 flex justify-between items-center hover:bg-[#F5A623]/5 transition-colors">
                    <div>
                      <p className="font-semibold text-[#171A1C]">{tx.location}</p>
                      <p className="text-xs text-[#59636B]">{tx.date}</p>
                    </div>
                    <p className="font-bold text-[#F5A623]">{tx.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      <section className="w-full bg-white py-16 border-t border-[#59636B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#171A1C] mb-12 tracking-tight">
            How TruEstimate™ Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-3xl bg-gradient-to-b from-[#F5A623]/10 to-white border border-[#F5A623]/25 shadow-md shadow-[#F5A623]/5 hover:shadow-xl hover:shadow-[#F5A623]/15 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F5A623]/10">
                <Search className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1C] mb-2 tracking-tight">1. Search Property</h3>
              <p className="text-sm text-[#59636B]">Enter your building or project name to get started.</p>
            </div>
            <div className="text-center p-6 rounded-3xl bg-gradient-to-b from-[#F5A623]/10 to-white border border-[#F5A623]/25 shadow-md shadow-[#F5A623]/5 hover:shadow-xl hover:shadow-[#F5A623]/15 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F5A623]/10">
                <BarChart3 className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1C] mb-2 tracking-tight">2. Get Instant Value</h3>
              <p className="text-sm text-[#59636B]">Our algorithm analyzes recent market data to give you a price.</p>
            </div>
            <div className="text-center p-6 rounded-3xl bg-gradient-to-b from-[#F5A623]/10 to-white border border-[#F5A623]/25 shadow-md shadow-[#F5A623]/5 hover:shadow-xl hover:shadow-[#F5A623]/15 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#F5A623]/10">
                <TrendingUp className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-bold text-[#171A1C] mb-2 tracking-tight">3. Track Trends</h3>
              <p className="text-sm text-[#59636B]">See how property prices have changed over the last 12 months.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}