"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Heart,
  ChevronRight,
  CheckCircle2,
  Home,
  Bed,
  Bath,
  Square,
  Building2,
  Globe,
  Filter,
} from "lucide-react";

export default function AgentProfilePage() {
  const params = useParams();
  const agentId = params.agentId;

  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");

  // ===== Agents Data (with photos) =====
  const agentsData = {
    "rajesh-sharma": {
      name: "Rajesh Sharma",
      initials: "RS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      agency: "Skyline Realty",
      tagline: "Heart Of The City Properties",
      activeListings: 7,
      badges: ["TruBroker™", "Quality Lister", "Responsive Broker"],
      about: `As CEO of Skyline Realty, I've propelled our company to significant success, showcasing industry leadership and expanding through influential subsidiaries. With 18 years in real estate, I've mastered every facet from sales management to executive leadership. My career began as a Sales Manager for a top developer, progressing to Head of Sales and later Head of Sales and Marketing, where I spearheaded strategies that propelled our company forward.`,
      languages: "Speaks English, Hindi, Marathi",
      location: "Mumbai, Maharashtra",
    },
    "sabahuddin-khan": {
      name: "Sabahuddin Khan",
      initials: "SK",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
      agency: "Coastal Homes Realty",
      tagline: "Trusted Coastal Properties",
      activeListings: 5,
      badges: ["TruBroker™", "Responsive Broker"],
      about: `I specialize in coastal properties across Mumbai and have helped hundreds of families find their dream homes. With 12 years of experience in real estate, I focus on providing personalized service and honest advice to every client.`,
      languages: "Speaks Urdu, Hindi, English",
      location: "Mumbai, Maharashtra",
    },
    "upma-kumar": {
      name: "Upma Kumar",
      initials: "UK",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      agency: "Urban Nest Properties",
      tagline: "Redefining Urban Living",
      activeListings: 6,
      badges: ["TruBroker™", "Quality Lister", "Responsive Broker"],
      about: `With a background in architecture and 10 years in real estate, I bring a unique perspective to property consulting. I focus on helping buyers find homes that match their lifestyle and investment goals.`,
      languages: "Speaks Hindi, Marathi, English",
      location: "Bandra West, Mumbai",
    },
    "uday-manvani-prakash": {
      name: "Uday Manvani Prakash",
      initials: "UP",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
      agency: "Prime Estates",
      tagline: "Premium Properties, Premium Service",
      activeListings: 12,
      badges: ["TruBroker™", "Quality Lister", "Responsive Broker"],
      about: `As one of Mumbai's top-performing agents, I've closed over 200 successful deals in the past 5 years. My focus is on luxury residential and commercial properties in prime locations.`,
      languages: "Speaks Sindhi, Hindi, Gujarati, English",
      location: "Mumbai, Maharashtra",
    },
    "blossom-fernandez": {
      name: "Blossom Fernandez",
      initials: "BF",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
      agency: "Sunrise Realty",
      tagline: "Your Home, Our Priority",
      activeListings: 4,
      badges: ["TruBroker™", "Responsive Broker"],
      about: `Passionate about helping first-time homebuyers, I've built my career on trust and transparency. I believe every family deserves the right guidance when making the biggest investment of their life.`,
      languages: "Speaks Hindi, English, Konkani",
      location: "Mumbai, Maharashtra",
    },
    "tamilia-kiria": {
      name: "Tamilia Kiria",
      initials: "TK",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=400",
      agency: "Metro Homes",
      tagline: "Connecting People to Places",
      activeListings: 8,
      badges: ["TruBroker™", "Quality Lister", "Responsive Broker"],
      about: `With 8 years in the Mumbai real estate market, I specialize in residential properties across the city. My clients value my market knowledge, negotiation skills, and commitment to finding them the perfect property.`,
      languages: "Speaks Tamil, Hindi, English",
      location: "Mumbai, Maharashtra",
    },
  };

  const agent = agentsData[agentId] || agentsData["rajesh-sharma"];

  const stats = [
    { label: "Expertise", value: "Off-Plan Sales, Residential Sales" },
    { label: "Service Areas", value: "Mumbai, Pune, Thane" },
    { label: "Properties", value: "5 For Sale · 2 For Rent" },
    { label: "RERA ID", value: "A51900001234" },
    { label: "Experience", value: "18 years" },
  ];

  const listings = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
      price: "₹68,000 /mo",
      title: "Modern 2BHK Apartment",
      type: "Apartment",
      beds: 2,
      baths: 2,
      area: "980 sq.ft",
      tagline: "Near Metro | Flexible Terms | High Floor",
      location: "Sunrise Tower, Andheri West, Mumbai",
      verified: "Verified on 9th October",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      price: "₹1,50,000 /mo",
      title: "Luxury 3BHK with Sea View",
      type: "Apartment",
      beds: 3,
      baths: 3,
      area: "1,450 sq.ft",
      tagline: "Partial Sea View | Ready To Move In",
      location: "Ocean Heights, Bandra West, Mumbai",
      verified: "Verified on 2nd September",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      price: "₹12,80,000",
      title: "Fully Furnished 3BHK",
      type: "Apartment",
      beds: 3,
      baths: 3,
      area: "1,320 sq.ft",
      tagline: "Fully Furnished | Prime Location",
      location: "Prime Avenue, Powai, Mumbai",
      verified: "Verified on 10th February",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=600&q=80",
      price: "₹37,80,000",
      title: "Best 3BHK with Golf View",
      type: "Apartment",
      beds: 3,
      baths: 3,
      area: "1,530 sq.ft",
      tagline: "Golf Course View | Premium",
      location: "Skyline Residences, Powai, Mumbai",
      verified: "Verified on 3rd August",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
      price: "₹34,90,000",
      title: "Genuine Resale 3BHK",
      type: "Apartment",
      beds: 3,
      baths: 3,
      area: "1,495 sq.ft",
      tagline: "Genuine Resale | Large Layout",
      location: "Skyline Residences, Powai, Mumbai",
      verified: "Verified on 3rd August",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
      price: "₹23,45,000",
      title: "Premium 3BHK | Podium Floor",
      type: "Apartment",
      beds: 3,
      baths: 3,
      area: "1,290 sq.ft",
      tagline: "50/50 Payment Plan | Ready",
      location: "Wilson Park Residences, Worli, Mumbai",
      verified: "Verified on 21st October",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
      price: "₹20,90,000",
      title: "Spacious 2BHK with Golf View",
      type: "Apartment",
      beds: 2,
      baths: 2,
      area: "1,210 sq.ft",
      tagline: "Golf Course View | High Floor",
      location: "Skyline Residences, Powai, Mumbai",
      verified: "Verified on 3rd August",
    },
  ];

  const filters = ["All", "Ready", "Under Construction", "Off-Plan"];

  return (
    <div className="w-full bg-white flex flex-col font-sans">
      {/* ================= 1. HERO BANNER (No Green — Pure Charcoal + Gold) ================= */}
      <section
        className="w-full relative overflow-hidden"
        style={{ backgroundColor: "#171A1C" }}
      >
        {/* Gold ambient glow (subtle) */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#F5A623]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-[#F5A623]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-12">
          {/* TruBroker Badge */}
          <div className="flex justify-end mb-8">
            <div
              className="px-5 py-2 rounded-xl border"
              style={{
                backgroundColor: "rgba(245, 166, 35, 0.12)",
                borderColor: "#F5A623",
              }}
            >
              <span
                className="text-sm font-bold tracking-tight"
                style={{ color: "#F5A623" }}
              >
                TruBroker™
              </span>
            </div>
          </div>

          {/* Agent Profile Row */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            {/* Agent Photo (not initials) */}
            <div
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 shadow-2xl"
              style={{ borderColor: "rgba(245, 166, 35, 0.4)" }}
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                {agent.name}
              </h1>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-base font-medium"
                  style={{ color: "#F5A623" }}
                >
                  {agent.agency}
                </span>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </div>
              <p className="text-sm text-white/70 mb-5">
                {agent.activeListings} Active Properties
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {agent.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide border"
                    style={{
                      backgroundColor:
                        i === 0 ? "#F5A623" : "rgba(255,255,255,0.08)",
                      color: i === 0 ? "#171A1C" : "#FFFFFF",
                      borderColor:
                        i === 0 ? "#F5A623" : "rgba(255,255,255,0.2)",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 active:scale-95"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#171A1C",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  <Mail className="w-4 h-4" /> Email
                </button>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 active:scale-95"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#171A1C",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  <Phone className="w-4 h-4" /> Call
                </button>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 active:scale-95"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. ABOUT AGENT ================= */}
      <section className="w-full py-8 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div
            className="rounded-2xl p-6 sm:p-8 border"
            style={{ backgroundColor: "#F7F4ED", borderColor: "#E8E2D5" }}
          >
            <h2
              className="text-lg font-bold mb-4 tracking-tight"
              style={{ color: "#171A1C" }}
            >
              About {agent.name.split(" ")[0]}
            </h2>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "#59636B" }}
            >
              {agent.about}
            </p>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" style={{ color: "#F5A623" }} />
              <span
                className="text-xs font-semibold"
                style={{ color: "#59636B" }}
              >
                {agent.languages}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. PROPERTIES + SIDEBAR ================= */}
      <section className="w-full py-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ===== LEFT: ACTIVE PROPERTIES ===== */}
            <div className="lg:col-span-2">
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight mb-6"
                style={{ color: "#171A1C" }}
              >
                Active Properties
              </h2>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-5">
                <div className="flex bg-[#F7F4ED] border border-[#E8E2D5] rounded-xl p-1">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`px-3.5 py-2 text-[11px] sm:text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                        activeFilter === f
                          ? "bg-white shadow-sm"
                          : "text-[#59636B] hover:text-[#171A1C]"
                      }`}
                      style={activeFilter === f ? { color: "#F5A623" } : {}}
                    >
                      {f}
                    </button>
                  ))}
                </div>

                <div className="relative flex-1 min-w-[160px]">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                    style={{ color: "#F5A623" }}
                  />
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full h-10 pl-9 pr-3 border border-[#E8E2D5] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all bg-white"
                  />
                </div>

                <select
                  className="h-10 appearance-none bg-white border border-[#E8E2D5] rounded-xl py-2 pl-3 pr-8 text-xs font-semibold focus:outline-none focus:border-[#F5A623] cursor-pointer"
                  style={{ color: "#59636B" }}
                >
                  <option>Any Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>

                <select
                  className="h-10 appearance-none bg-white border border-[#E8E2D5] rounded-xl py-2 pl-3 pr-8 text-xs font-semibold focus:outline-none focus:border-[#F5A623] cursor-pointer"
                  style={{ color: "#59636B" }}
                >
                  <option>Beds & Baths</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                </select>

                <select
                  className="h-10 appearance-none bg-white border border-[#E8E2D5] rounded-xl py-2 pl-3 pr-8 text-xs font-semibold focus:outline-none focus:border-[#F5A623] cursor-pointer"
                  style={{ color: "#59636B" }}
                >
                  <option>Price (₹)</option>
                  <option>Under ₹50L</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr+</option>
                </select>
              </div>

              {/* Sort Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: "#59636B" }}
                >
                  Showing 1 - 7 of {agent.activeListings} Properties
                </span>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" style={{ color: "#59636B" }} />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-xs font-semibold cursor-pointer focus:outline-none"
                    style={{ color: "#171A1C" }}
                  >
                    <option>Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Property Cards */}
              <div className="space-y-5">
                {listings.map((listing) => (
                  <div
                    key={listing.id}
                    className="bg-white rounded-2xl border border-[#E8E2D5] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(23,26,28,0.1)] hover:-translate-y-0.5"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="relative w-full sm:w-64 lg:w-72 h-48 sm:h-auto shrink-0 bg-gray-100">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold text-white"
                          style={{ backgroundColor: "#171A1C" }}
                        >
                          <CheckCircle2
                            className="w-3 h-3"
                            style={{ color: "#F5A623" }}
                          />
                          Checked
                        </div>
                        <button
                          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                        >
                          <Heart
                            className="w-4 h-4"
                            style={{ color: "#171A1C" }}
                          />
                        </button>
                      </div>

                      {/* Details */}
                      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                          <div
                            className="text-xl sm:text-2xl font-bold tracking-tight mb-2"
                            style={{ color: "#F5A623" }}
                          >
                            {listing.price}
                          </div>
                          <h3
                            className="text-sm sm:text-base font-bold mb-2 tracking-tight"
                            style={{ color: "#171A1C" }}
                          >
                            {listing.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                            <span
                              className="text-xs font-medium"
                              style={{ color: "#59636B" }}
                            >
                              {listing.type}
                            </span>
                            <div className="flex items-center gap-1">
                              <Bed
                                className="w-3.5 h-3.5"
                                style={{ color: "#59636B" }}
                              />
                              <span
                                className="text-xs font-medium"
                                style={{ color: "#59636B" }}
                              >
                                {listing.beds}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Bath
                                className="w-3.5 h-3.5"
                                style={{ color: "#59636B" }}
                              />
                              <span
                                className="text-xs font-medium"
                                style={{ color: "#59636B" }}
                              >
                                {listing.baths}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Square
                                className="w-3.5 h-3.5"
                                style={{ color: "#59636B" }}
                              />
                              <span
                                className="text-xs font-medium"
                                style={{ color: "#59636B" }}
                              >
                                {listing.area}
                              </span>
                            </div>
                          </div>
                          <p
                            className="text-xs font-medium mb-3 line-clamp-1"
                            style={{ color: "#F5A623" }}
                          >
                            {listing.tagline}
                          </p>
                          <div className="flex items-start gap-1.5 mb-4">
                            <MapPin
                              className="w-3.5 h-3.5 shrink-0 mt-0.5"
                              style={{ color: "#59636B" }}
                            />
                            <span
                              className="text-xs"
                              style={{ color: "#59636B" }}
                            >
                              {listing.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#F7F4ED]">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2
                              className="w-3.5 h-3.5"
                              style={{ color: "#F5A623" }}
                            />
                            <span
                              className="text-[11px] font-medium"
                              style={{ color: "#59636B" }}
                            >
                              {listing.verified}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button
                              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold transition-all hover:-translate-y-0.5"
                              style={{
                                backgroundColor: "#F7F4ED",
                                color: "#171A1C",
                              }}
                            >
                              <Mail className="w-3.5 h-3.5" /> Email
                            </button>
                            <button
                              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold transition-all hover:-translate-y-0.5"
                              style={{
                                backgroundColor: "#F7F4ED",
                                color: "#171A1C",
                              }}
                            >
                              <Phone className="w-3.5 h-3.5" /> Call
                            </button>
                            <button
                              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold transition-all hover:-translate-y-0.5"
                              style={{
                                backgroundColor: "#F7F4ED",
                                color: "#25D366",
                              }}
                            >
                              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-xs font-medium" style={{ color: "#59636B" }}>
                  1 to 7 of {agent.activeListings} Properties
                </p>
              </div>
            </div>

            {/* ===== RIGHT: SIDEBAR ===== */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-5">
                {/* Agency Card */}
                <div
                  className="rounded-2xl p-6 border text-center"
                  style={{ backgroundColor: "#F7F4ED", borderColor: "#E8E2D5" }}
                >
                  <div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #F5A623",
                    }}
                  >
                    <Building2
                      className="w-7 h-7"
                      style={{ color: "#F5A623" }}
                      strokeWidth={1.8}
                    />
                  </div>
                  <p
                    className="text-xs font-semibold tracking-wider uppercase mb-2"
                    style={{ color: "#59636B" }}
                  >
                    Agency
                  </p>
                  <h3
                    className="text-base font-bold mb-1 tracking-tight"
                    style={{ color: "#171A1C" }}
                  >
                    {agent.agency}
                  </h3>
                  <Link
                    href="/find-agent"
                    className="inline-flex items-center gap-1 text-xs font-semibold mt-3 transition-all hover:gap-2"
                    style={{ color: "#F5A623" }}
                  >
                    View Agency <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* About Agent */}
                <div
                  className="rounded-2xl p-6 border"
                  style={{ backgroundColor: "#FFFFFF", borderColor: "#E8E2D5" }}
                >
                  <h3
                    className="text-base font-bold mb-5 tracking-tight pb-3 border-b"
                    style={{ color: "#171A1C", borderColor: "#E8E2D5" }}
                  >
                    About {agent.name.split(" ")[0]}
                  </h3>
                  <div className="space-y-4">
                    {stats.map((stat, i) => (
                      <div key={i}>
                        <p
                          className="text-[11px] font-semibold uppercase tracking-wider mb-1"
                          style={{ color: "#59636B" }}
                        >
                          {stat.label}
                        </p>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "#171A1C" }}
                        >
                          {stat.value}
                        </p>
                      </div>
                    ))}
                    <div
                      className="pt-3 border-t"
                      style={{ borderColor: "#E8E2D5" }}
                    >
                      <p
                        className="text-[11px] font-semibold uppercase tracking-wider mb-2"
                        style={{ color: "#59636B" }}
                      >
                        Social Links
                      </p>
                      {/* <a href="#" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80" style={{ color: '#0A66C2' }}>
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </a> */}
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div
                  className="rounded-2xl p-6 border"
                  style={{ backgroundColor: "#171A1C", borderColor: "#171A1C" }}
                >
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    Interested in a property?
                  </h3>
                  <p className="text-xs text-white/70 mb-4 leading-relaxed">
                    Get in touch directly with {agent.name.split(" ")[0]} for
                    personalized assistance.
                  </p>
                  <button
                    className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 active:scale-95"
                    style={{
                      backgroundColor: "#F5A623",
                      color: "#171A1C",
                      boxShadow: "0 8px 24px rgba(245, 166, 35, 0.35)",
                    }}
                  >
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. BREADCRUMB ================= */}
      <section
        className="w-full py-6 border-t"
        style={{ backgroundColor: "#F7F4ED", borderColor: "#E8E2D5" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-wrap items-center gap-2 text-xs"
            style={{ color: "#59636B" }}
          >
            <Home className="w-3.5 h-3.5" />
            <Link href="/find-agent" className="hover:underline">
              Find my Agent
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/find-agent" className="hover:underline">
              Real Estate Agents in Mumbai
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold" style={{ color: "#171A1C" }}>
              {agent.agency}
            </span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold" style={{ color: "#171A1C" }}>
              {agent.name}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
