"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ChevronDown,
  TrendingUp,
  BarChart3,
  HelpCircle,
  X,
  Search,
  Building2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const estimateData = [
  { month: "Jan", price: 3200000 },
  { month: "Feb", price: 3250000 },
  { month: "Mar", price: 3180000 },
  { month: "Apr", price: 3350000 },
  { month: "May", price: 3420000 },
  { month: "Jun", price: 3380000 },
  { month: "Jul", price: 3500000 },
  { month: "Aug", price: 3550000 },
  { month: "Sep", price: 3480000 },
  { month: "Oct", price: 3600000 },
  { month: "Nov", price: 3630000 },
  { month: "Dec", price: 3700000 },
];

const transactionsData = [
  { id: 1, location: "Bandra West, Mumbai", type: "Apartment", price: "₹2,10,00,000", date: "12 May 2024", size: "1,200 sqft" },
  { id: 2, location: "Worli, Mumbai", type: "Apartment", price: "₹3,50,00,000", date: "10 May 2024", size: "1,800 sqft" },
  { id: 3, location: "Juhu, Mumbai", type: "Villa", price: "₹12,00,00,000", date: "08 May 2024", size: "4,500 sqft" },
  { id: 4, location: "Powai, Mumbai", type: "Apartment", price: "₹1,45,00,000", date: "05 May 2024", size: "850 sqft" },
  { id: 5, location: "Thane West", type: "Villa", price: "₹4,20,00,000", date: "01 May 2024", size: "3,200 sqft" },
];

const faqs = [
  { q: "How do I get started with selling?", a: "Simply fill out the form above and one of our agents will contact you within 24 hours." },
  { q: "What documents do I need to sell my property?", a: "You will need your Sale Deed, PAN Card, Aadhaar Card, and recent property tax receipts. Our agents will guide you through the rest." },
  { q: "How is the property valuation done?", a: "We use market data and recent transactions in your area to provide an accurate valuation." },
  { q: "How long does it take to sell a property?", a: "It typically takes 30-90 days depending on market conditions and property type." },
];

export default function SellPropertyPage() {
  const [purpose, setPurpose] = useState("sell");
  const [category, setCategory] = useState("residential");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [bedrooms, setBedrooms] = useState("2");
  const [rentFrequency, setRentFrequency] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(null);
  const [estimateLocation, setEstimateLocation] = useState("");
  const [showEstimate, setShowEstimate] = useState(true);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-[#F7F4ED] flex flex-col font-sans">
      {/* HERO & DYNAMIC FORM */}
      <section className="relative w-full bg-[#F7F4ED] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 lg:sticky lg:top-24">
              <h1 className="text-4xl md:text-5xl font-bold text-[#171A1C] leading-tight tracking-tight">
                Sell or rent your property with confidence!
              </h1>
              <p className="text-lg text-[#59636B]">
                Expert help from trusted agents to sell your home from
                start to finish.
              </p>

              <div className="relative w-full h-64 md:h-80 mt-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#F5A623]/10 to-white flex items-center justify-center border border-[#59636B]/15 shadow-md shadow-[#171A1C]/5">
                <div className="text-center text-[#59636B]">
                  <Building2 className="w-16 h-16 mx-auto mb-3 text-[#F5A623]" />
                  <p className="font-medium text-[#171A1C]">Property Illustration</p>
                  <p className="text-sm">Replace with your own asset</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-3xl shadow-xl shadow-[#171A1C]/5 border border-[#59636B]/15 p-6 md:p-8">
              {/* SELL / RENT TOGGLE */}
              <div className="bg-[#F7F4ED] p-1.5 rounded-2xl flex mb-6">
                <button
                  onClick={() => setPurpose("sell")}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    purpose === "sell"
                      ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                      : "text-[#59636B] hover:text-[#171A1C]"
                  }`}
                >
                  Sell
                </button>
                <button
                  onClick={() => setPurpose("rent")}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    purpose === "rent"
                      ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                      : "text-[#59636B] hover:text-[#171A1C]"
                  }`}
                >
                  Rent
                </button>
              </div>

              <form className="space-y-6">
                {purpose === "rent" && (
                  <div className="animate-fadeIn">
                    <label className="block text-sm font-bold text-[#171A1C] mb-2">
                      Rent Frequency
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setRentFrequency("monthly")}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                          rentFrequency === "monthly"
                            ? "border-[#F5A623] text-[#F5A623] bg-[#F5A623]/10"
                            : "border-[#59636B]/20 text-[#59636B] hover:border-[#59636B]/40"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        type="button"
                        onClick={() => setRentFrequency("yearly")}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                          rentFrequency === "yearly"
                            ? "border-[#F5A623] text-[#F5A623] bg-[#F5A623]/10"
                            : "border-[#59636B]/20 text-[#59636B] hover:border-[#59636B]/40"
                        }`}
                      >
                        Yearly
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-[#171A1C] mb-2">
                    Location*
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-[#F5A623]" />
                    <input
                      type="text"
                      placeholder="Enter locality, project or city"
                      className="w-full pl-11 pr-4 py-3 border border-[#59636B]/20 rounded-2xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#171A1C] mb-2">
                    Category & Type*
                  </label>

                  <div className="flex bg-[#F7F4ED] rounded-2xl p-1.5 mb-3">
                    <button
                      type="button"
                      onClick={() => setCategory("residential")}
                      className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                        category === "residential"
                          ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                          : "text-[#59636B]"
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setCategory("commercial")}
                      className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                        category === "commercial"
                          ? "bg-[#171A1C] shadow-md text-[#F5A623]"
                          : "text-[#59636B]"
                      }`}
                    >
                      Commercial
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Apartment", "Villa", "Row House", "Builder Floor", "Plot", "Other"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPropertyType(type)}
                        className={`px-4 py-2 rounded-full text-sm border-2 transition-all ${
                          propertyType === type
                            ? "border-[#F5A623] text-[#F5A623] bg-[#F5A623]/10"
                            : "border-[#59636B]/20 text-[#59636B] hover:border-[#59636B]/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#171A1C] mb-2">
                    BHK*
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["1 RK", "1", "2", "3", "4", "5", "6", "7", "8+"].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBedrooms(num)}
                        className={`w-12 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all ${
                          bedrooms === num
                            ? "border-[#F5A623] text-[#F5A623] bg-[#F5A623]/10"
                            : "border-[#59636B]/20 text-[#59636B] hover:border-[#59636B]/40"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#171A1C] mb-2">
                      Area (sqft)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter area"
                      className="w-full border border-[#59636B]/20 rounded-2xl p-3 text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#171A1C] mb-2">
                      Furnishing
                    </label>
                    <div className="relative">
                      <select className="w-full border border-[#59636B]/20 rounded-2xl p-3 text-sm text-[#171A1C] appearance-none focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] bg-white transition-all">
                        <option>Select</option>
                        <option>Furnished</option>
                        <option>Unfurnished</option>
                        <option>Semi-Furnished</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-[#59636B] pointer-events-none" />
                    </div>
                  </div>
                </div>

                {purpose === "sell" && (
                  <div className="animate-fadeIn">
                    <label className="block text-sm font-bold text-[#171A1C] mb-2">
                      Urgency
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["This month", "Within 2 months", "Flexible"].map((urg) => (
                        <button
                          key={urg}
                          type="button"
                          className="px-4 py-2 rounded-full text-sm border-2 border-[#59636B]/20 text-[#59636B] hover:border-[#F5A623] hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-all"
                        >
                          {urg}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] font-bold py-3.5 rounded-2xl transition-all duration-200 mt-4 text-lg active:scale-[0.98]"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TRUESTIMATE */}
      <section className="w-full bg-white py-16 border-t border-[#59636B]/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#171A1C] mb-2 tracking-tight">
              Start with the right price.
            </h2>
            <h3 className="text-xl text-[#F5A623] font-semibold">
              Instant valuation with TruEstimate™
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-[#171A1C]/5 border border-[#59636B]/15 p-6 md:p-8">
            <div className="flex gap-3 mb-8 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-[#59636B]" />
                <input
                  type="text"
                  placeholder="Enter project or locality name..."
                  value={estimateLocation}
                  onChange={(e) => setEstimateLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-[#59636B]/20 rounded-2xl text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
                />
              </div>
              <button
                onClick={() => setShowEstimate(true)}
                className="bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] font-bold px-6 py-3 rounded-2xl transition-all duration-200 whitespace-nowrap active:scale-95"
              >
                Get Estimate
              </button>
            </div>

            {showEstimate && (
              <div className="bg-[#F7F4ED] rounded-3xl p-6 border border-[#59636B]/15">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-sm text-[#59636B]">
                      Estimated Price for {estimateLocation || "Your Property"}
                    </p>
                    <p className="text-4xl font-bold text-[#171A1C] tracking-tight">
                      ₹3,63,00,000
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#F5A623] font-semibold flex items-center gap-1 justify-end">
                      <TrendingUp className="w-4 h-4" /> +5.2%
                    </p>
                    <p className="text-xs text-[#59636B]">Last 12 months</p>
                  </div>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={estimateData}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F5A623" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#F5A623" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#59636B22" />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#59636B", fontSize: 12 }}
                      />
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
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#F5A623"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorPrice)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <p className="text-sm text-[#59636B] mt-6 text-center">
                  Get a free, instant estimation of your property's value based on recent market trends.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INDIA TRANSACTIONS */}
      <section className="w-full bg-[#F7F4ED] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#171A1C] mb-2 tracking-tight">
              See what buyers are really paying with
            </h2>
            <h3 className="text-xl text-[#F5A623] font-semibold">India Transactions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15 text-center">
              <p className="text-sm text-[#59636B]">Sales Volume</p>
              <p className="text-2xl font-bold text-[#171A1C]">5,779</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15 text-center">
              <p className="text-sm text-[#59636B]">Sales Value (₹)</p>
              <p className="text-2xl font-bold text-[#171A1C]">15.6 K Cr</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15 text-center">
              <p className="text-sm text-[#59636B]">Average Price (₹/sqft)</p>
              <p className="text-2xl font-bold text-[#171A1C]">₹18,500</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md shadow-[#171A1C]/5 border border-[#59636B]/15 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F7F4ED] border-b border-[#59636B]/15">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-[#171A1C]">Location</th>
                    <th className="px-6 py-4 font-semibold text-[#171A1C]">Type</th>
                    <th className="px-6 py-4 font-semibold text-[#171A1C]">Price</th>
                    <th className="px-6 py-4 font-semibold text-[#171A1C]">Date</th>
                    <th className="px-6 py-4 font-semibold text-[#171A1C]">Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#59636B]/10">
                  {transactionsData.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[#F5A623]/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#171A1C] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#F5A623]" /> {tx.location}
                      </td>
                      <td className="px-6 py-4 text-[#59636B]">{tx.type}</td>
                      <td className="px-6 py-4 font-semibold text-[#171A1C]">{tx.price}</td>
                      <td className="px-6 py-4 text-[#59636B]">{tx.date}</td>
                      <td className="px-6 py-4 text-[#59636B]">{tx.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-[#59636B]/15 text-center bg-[#F7F4ED]">
              <Link href="#" className="text-[#F5A623] font-bold text-sm hover:underline">
                Explore All Transactions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-16 border-t border-[#59636B]/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#171A1C] mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#59636B]/15 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 bg-[#F7F4ED] hover:bg-[#F5A623]/10 transition-colors text-left"
                >
                  <span className="font-semibold text-[#171A1C]">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#59636B] transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-white text-[#59636B] text-sm border-t border-[#59636B]/15">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}