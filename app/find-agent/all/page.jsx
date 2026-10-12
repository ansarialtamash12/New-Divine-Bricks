"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Building2,
  Star,
  ArrowRight,
} from "lucide-react";

export default function AllAgentsPage() {
  const [page, setPage] = useState(1);

  // ===== Featured Stories Cards =====
  const featuredStories = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
      title: "TruBroker™ Stories in Mumbai",
      tag: "Featured",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      title: "TruBroker™ Stories in Delhi",
      tag: "Trending",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
      title: "TruBroker™ Stories in Bangalore",
      tag: "Trending",
    },
  ];

  // ===== Agents List =====
  const agents = [
    {
      id: "samuel-michael",
      name: "Samuel Michael",
      designation: "Director",
      company: "Dreams Properties",
      initials: "SM",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400",
      properties: "18 Properties",
      deals: "27 Closed Deals",
      experience: "15 Years",
      languages: "English, Hindi, Marathi",
      badges: ["TruBroker™", "Quality Lister", "Responsive Broker"],
      agencyLogo: "Dreams",
    },
    {
      id: "shreya-singh",
      name: "Shreya Singh",
      designation: "Associate Director",
      company: "Prime Estates",
      initials: "SS",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400",
      properties: "12 Properties",
      deals: "31 Closed Deals",
      experience: "10 Years",
      languages: "Hindi, English",
      badges: ["TruBroker™", "Quality Lister"],
      agencyLogo: "PRIME",
    },
    {
      id: "joanna-pradhan",
      name: "Joanna Pradhan",
      designation: "Senior Manager",
      company: "Coastal Homes Realty",
      initials: "JP",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400",
      properties: "10 Properties",
      deals: "12 Closed Deals",
      experience: "7 Years",
      languages: "Hindi, English, Konkani",
      badges: ["TruBroker™", "Responsive Broker"],
      agencyLogo: "CHR",
    },
    {
      id: "arjun-mehta",
      name: "Arjun Mehta",
      designation: "Sales Manager",
      company: "Skyline Realty",
      initials: "AM",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
      properties: "15 Properties",
      deals: "41 Closed Deals",
      experience: "8 Years",
      languages: "Hindi, English, Gujarati",
      badges: ["TruBroker™", "Quality Lister"],
      agencyLogo: "SKYLINE",
    },
    {
      id: "tony-lombardo",
      name: "Tony Lombardo",
      designation: "Senior Director",
      company: "Urban Nest Properties",
      initials: "TL",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400",
      properties: "22 Properties",
      deals: "35 Closed Deals",
      experience: "12 Years",
      languages: "English, Hindi",
      badges: ["TruBroker™", "Quality Lister", "Responsive Broker"],
      agencyLogo: "fäm",
    },
    {
      id: "tamer-ahmed",
      name: "Tamer Ahmed",
      designation: "Director",
      company: "Metro Homes",
      initials: "TA",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&h=400",
      properties: "20 Properties",
      deals: "44 Closed Deals",
      experience: "14 Years",
      languages: "Hindi, Urdu, English, Punjabi",
      badges: ["TruBroker™", "Quality Lister"],
      agencyLogo: "fäm",
    },
    {
      id: "kiran-sheth",
      name: "Kiran Sheth",
      designation: "Associate Director",
      company: "Capital Realty",
      initials: "KS",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&h=400",
      properties: "14 Properties",
      deals: "18 Closed Deals",
      experience: "9 Years",
      languages: "Hindi, English",
      badges: ["TruBroker™", "Responsive Broker"],
      agencyLogo: "CAPITAL",
    },
    {
      id: "hasan-jahid",
      name: "Hasan Jahid",
      designation: "Sales Manager",
      company: "Prime Estates",
      initials: "HJ",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=400&h=400",
      properties: "12 Properties",
      deals: "21 Closed Deals",
      experience: "8 Years",
      languages: "Hindi, Urdu, English",
      badges: ["TruBroker™", "Quality Lister"],
      agencyLogo: "KK",
    },
    {
      id: "farhan-ahmed",
      name: "Farhan Ahmed",
      designation: "Property Advisor",
      company: "Skyline Realty",
      initials: "FA",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400",
      properties: "16 Properties",
      deals: "22 Closed Deals",
      experience: "10 Years",
      languages: "Hindi, English, Marathi",
      badges: ["TruBroker™", "Responsive Broker"],
      agencyLogo: "Fairways",
    },
    {
      id: "wajid-ali-khan",
      name: "Wajid Ali Khan",
      designation: "Property Advisor",
      company: "Metro Homes",
      initials: "WK",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400",
      properties: "18 Properties",
      deals: "24 Closed Deals",
      experience: "11 Years",
      languages: "Hindi, Urdu, English, Punjabi",
      badges: ["TruBroker™", "Quality Lister"],
      agencyLogo: "fäm",
    },
  ];

  return (
    <main className="w-full bg-[#F7F4ED] min-h-screen">
      {/* ================= 1. TOP SEARCH BAR ================= */}
      <div className="w-full border-b border-[#E8E2D5] bg-[#F7F4ED] py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-3">
          <select className="border border-[#E8E2D5] rounded-xl px-4 py-2.5 text-sm text-[#171A1C] bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all">
            <option>Agents</option>
            <option>Agencies</option>
          </select>

          <select className="border border-[#E8E2D5] rounded-xl px-4 py-2.5 text-sm text-[#171A1C] bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all">
            <option>Buy / Residential / Ready</option>
            <option>Rent / Residential</option>
            <option>Commercial</option>
          </select>

          <input
            type="text"
            placeholder="Enter locality or city"
            className="border border-[#E8E2D5] rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[160px] text-[#171A1C] placeholder-[#59636B]/70 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
          />

          <input
            type="text"
            placeholder="Agent Name"
            className="border border-[#E8E2D5] rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[160px] text-[#171A1C] placeholder-[#59636B]/70 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
          />

          <input
            type="text"
            placeholder="Enter languages"
            className="border border-[#E8E2D5] rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[160px] text-[#171A1C] placeholder-[#59636B]/70 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
          />

          <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/30 text-[#171A1C] font-bold px-8 py-2.5 rounded-xl text-sm transition-all duration-200 active:scale-95">
            Find
          </button>
        </div>
      </div>

      {/* ================= 2. MAIN LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ============ LEFT: FEATURED STORIES + AGENTS LIST ============ */}
        <div className="lg:col-span-2 space-y-6">
          {/* Featured Stories Row */}
          <div className="grid grid-cols-3 gap-3">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="relative rounded-2xl overflow-hidden h-28 group cursor-pointer border border-[#E8E2D5]"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A1C]/90 via-[#171A1C]/30 to-transparent" />

                <div className="absolute top-2 left-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor:
                        story.tag === "Featured" ? "#F5A623" : "#171A1C",
                      color: story.tag === "Featured" ? "#171A1C" : "#F5A623",
                    }}
                  >
                    {story.tag}
                  </span>
                </div>

                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-[10px] sm:text-xs font-bold text-white leading-tight line-clamp-2">
                    {story.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Header: Real Estate Agents in Mumbai */}
          <div>
            <h1
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-2"
              style={{ color: "#171A1C" }}
            >
              Real Estate Agents in Mumbai
            </h1>
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs"
              style={{ color: "#59636B" }}
            >
              <span>Showing 1 - 40 of 1,374 Agents</span>
              <Link
                href="#"
                className="hover:underline"
                style={{ color: "#F5A623" }}
              >
                Jumeirah Village Circle (11,148)
              </Link>
              <Link
                href="#"
                className="hover:underline"
                style={{ color: "#F5A623" }}
              >
                Downtown Dubai (1,132)
              </Link>
              <Link
                href="#"
                className="hover:underline"
                style={{ color: "#F5A623" }}
              >
                VIEW ALL LOCATIONS
              </Link>
            </div>
          </div>

          {/* ============ AGENTS VERTICAL LIST ============ */}
          <div className="space-y-3">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8E2D5] hover:border-[#F5A623]/40 hover:shadow-lg hover:shadow-[#F5A623]/5 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Agent Photo */}
                  <Link href={`/find-agent/${agent.id}`} className="shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#F7F4ED] ring-2 ring-[#F5A623]/20">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Agent Info */}
                  <div className="flex-1 min-w-0">
                    {/* Name + Badge */}
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <Link
                        href={`/find-agent/${agent.id}`}
                        className="min-w-0"
                      >
                        <h3
                          className="text-base sm:text-lg font-bold tracking-tight hover:text-[#F5A623] transition-colors truncate"
                          style={{ color: "#171A1C" }}
                        >
                          {agent.name}
                        </h3>
                      </Link>

                      {/* Agency Logo */}
                      <div className="shrink-0 px-2.5 py-1 rounded-lg border border-[#E8E2D5] bg-[#F7F4ED]">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: "#171A1C" }}
                        >
                          {agent.agencyLogo}
                        </span>
                      </div>
                    </div>

                    {/* Designation + Company */}
                    <p
                      className="text-xs font-medium mb-3"
                      style={{ color: "#59636B" }}
                    >
                      {agent.designation} · {agent.company}
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Building2
                          className="w-3.5 h-3.5"
                          style={{ color: "#F5A623" }}
                        />
                        <span
                          className="text-[11px] font-medium"
                          style={{ color: "#59636B" }}
                        >
                          {agent.properties}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2
                          className="w-3.5 h-3.5"
                          style={{ color: "#F5A623" }}
                        />
                        <span
                          className="text-[11px] font-medium"
                          style={{ color: "#59636B" }}
                        >
                          {agent.deals}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star
                          className="w-3.5 h-3.5 fill-current"
                          style={{ color: "#F5A623" }}
                        />
                        <span
                          className="text-[11px] font-medium"
                          style={{ color: "#59636B" }}
                        >
                          {agent.experience}
                        </span>
                      </div>
                    </div>

                    {/* Languages */}
                    <p
                      className="text-[11px] mb-3"
                      style={{ color: "#59636B" }}
                    >
                      🌐 {agent.languages}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {agent.badges.map((badge, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide border"
                          style={{
                            backgroundColor:
                              badge === "TruBroker™"
                                ? "rgba(245,166,35,0.1)"
                                : "#F7F4ED",
                            color:
                              badge === "TruBroker™" ? "#F5A623" : "#59636B",
                            borderColor:
                              badge === "TruBroker™"
                                ? "rgba(245,166,35,0.3)"
                                : "#E8E2D5",
                          }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border border-[#E8E2D5] hover:bg-[#F7F4ED] transition-all"
                        style={{ color: "#171A1C" }}
                      >
                        <Mail className="w-3 h-3" /> Email
                      </button>
                      <button
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border border-[#E8E2D5] hover:bg-[#F7F4ED] transition-all"
                        style={{ color: "#171A1C" }}
                      >
                        <Phone className="w-3 h-3" /> Call
                      </button>
                      <button
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all"
                        style={{ backgroundColor: "#25D366", color: "#FFFFFF" }}
                      >
                        <MessageCircle className="w-3 h-3" /> WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className="w-10 h-10 rounded-xl text-sm font-bold transition-all"
                style={{
                  backgroundColor: page === n ? "#F5A623" : "#FFFFFF",
                  color: page === n ? "#171A1C" : "#59636B",
                  border:
                    page === n ? "1px solid #F5A623" : "1px solid #E8E2D5",
                  boxShadow:
                    page === n ? "0 8px 20px rgba(245,166,35,0.3)" : "none",
                }}
              >
                {n}
              </button>
            ))}
            <button
              className="w-10 h-10 rounded-xl text-sm font-bold bg-white border border-[#E8E2D5] hover:border-[#F5A623] transition-all"
              style={{ color: "#59636B" }}
            >
              →
            </button>
          </div>

          <div className="text-center mt-4">
            <Link
              href="#"
              className="text-xs font-medium hover:underline"
              style={{ color: "#F5A623" }}
            >
              View All TruBrokers™ →
            </Link>
          </div>
        </div>

        {/* ============ RIGHT SIDEBAR ============ */}
        <div className="lg:col-span-1 space-y-5">
          {/* Sell / Rent CTA Card */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              background: "linear-gradient(135deg, #0e4b3e 0%, #171A1C 100%)",
              borderColor: "#0e4b3e",
            }}
          >
            <h3 className="text-base font-bold text-white mb-2 tracking-tight">
              Sell or Rent Your Property with Confidence
            </h3>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Connect with a trusted agent to secure the best deal, faster.
            </p>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:-translate-y-0.5 active:scale-95"
              style={{
                backgroundColor: "#F5A623",
                color: "#171A1C",
                boxShadow: "0 8px 24px rgba(245, 166, 35, 0.35)",
              }}
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* How Do Agents Earn Badges */}
          <div
            className="bg-white rounded-2xl p-6 border"
            style={{ borderColor: "#E8E2D5" }}
          >
            <h3
              className="text-base font-bold mb-2 tracking-tight"
              style={{ color: "#171A1C" }}
            >
              How Do Agents Earn Badges?
            </h3>
            <p
              className="text-[11px] leading-relaxed mb-5"
              style={{ color: "#59636B" }}
            >
              To highlight great performance, we reward agents with customised
              badges on 3G Realtors.
            </p>

            <div className="space-y-3">
              {/* TruBroker */}
              <div className="flex gap-3 p-3 rounded-xl bg-[#F7F4ED]">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F5A623" }}
                >
                  <CheckCircle2
                    className="w-4 h-4"
                    style={{ color: "#171A1C" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-bold mb-0.5"
                    style={{ color: "#171A1C" }}
                  >
                    TruBroker™
                  </p>
                  <p
                    className="text-[10px] leading-relaxed"
                    style={{ color: "#59636B" }}
                  >
                    Highly responsive and advertise genuine properties.
                  </p>
                </div>
              </div>

              {/* Quality Lister */}
              <div className="flex gap-3 p-3 rounded-xl bg-[#F7F4ED]">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#171A1C" }}
                >
                  <Star
                    className="w-4 h-4 fill-current"
                    style={{ color: "#F5A623" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-bold mb-0.5"
                    style={{ color: "#171A1C" }}
                  >
                    💎 Quality Lister
                  </p>
                  <p
                    className="text-[10px] leading-relaxed"
                    style={{ color: "#59636B" }}
                  >
                    Have authentic and high-quality listings.
                  </p>
                </div>
              </div>

              {/* Responsive Broker */}
              <div className="flex gap-3 p-3 rounded-xl bg-[#F7F4ED]">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#F5A623" }}
                >
                  <MessageCircle
                    className="w-4 h-4"
                    style={{ color: "#171A1C" }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-bold mb-0.5"
                    style={{ color: "#171A1C" }}
                  >
                    ⚡ Responsive Broker
                  </p>
                  <p
                    className="text-[10px] leading-relaxed"
                    style={{ color: "#59636B" }}
                  >
                    Highly reachable and quick to respond.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Discover for Sale */}
          <div
            className="bg-white rounded-2xl p-6 border"
            style={{ borderColor: "#E8E2D5" }}
          >
            <h3
              className="text-sm font-bold mb-3 tracking-tight"
              style={{ color: "#171A1C" }}
            >
              Discover properties for sale
            </h3>
            <ul className="space-y-2">
              {[
                "Apartments for sale in Mumbai",
                "Villas for sale in Mumbai",
                "Row Houses for sale in Mumbai",
                "Properties for sale in Mumbai",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-[11px] hover:text-[#F5A623] transition-colors"
                    style={{ color: "#59636B" }}
                  >
                    <ChevronRight
                      className="w-3 h-3"
                      style={{ color: "#F5A623" }}
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="inline-block mt-3 text-[11px] font-bold hover:underline"
              style={{ color: "#F5A623" }}
            >
              View More
            </Link>
          </div>

          {/* Discover for Rent */}
          <div
            className="bg-white rounded-2xl p-6 border"
            style={{ borderColor: "#E8E2D5" }}
          >
            <h3
              className="text-sm font-bold mb-3 tracking-tight"
              style={{ color: "#171A1C" }}
            >
              Discover properties for rent
            </h3>
            <ul className="space-y-2">
              {[
                "Apartments for rent in Mumbai",
                "Villas for rent in Mumbai",
                "Row Houses for rent in Mumbai",
                "Properties for rent in Mumbai",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-[11px] hover:text-[#F5A623] transition-colors"
                    style={{ color: "#59636B" }}
                  >
                    <ChevronRight
                      className="w-3 h-3"
                      style={{ color: "#F5A623" }}
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="inline-block mt-3 text-[11px] font-bold hover:underline"
              style={{ color: "#F5A623" }}
            >
              View More
            </Link>
          </div>

          {/* Agent Portal */}
          <div
            className="bg-white rounded-2xl p-6 border text-center"
            style={{ borderColor: "#E8E2D5" }}
          >
            <div
              className="w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: "#F7F4ED",
                border: "1px solid #F5A623",
              }}
            >
              <Building2
                className="w-6 h-6"
                style={{ color: "#F5A623" }}
                strokeWidth={1.8}
              />
            </div>
            <h3
              className="text-sm font-bold mb-1 tracking-tight"
              style={{ color: "#171A1C" }}
            >
              Agent Portal
            </h3>
            <p className="text-[11px] mb-3" style={{ color: "#59636B" }}>
              Tools for agents & agencies
            </p>
            <Link
              href="#"
              className="inline-block px-5 py-2 rounded-xl text-[11px] font-bold transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#171A1C", color: "#FFFFFF" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
