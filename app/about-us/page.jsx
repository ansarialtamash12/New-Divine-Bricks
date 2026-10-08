'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Home,
  CheckSquare,
  BarChart3,
  Headphones,
  GraduationCap,
  BookOpen,
  Award,
} from 'lucide-react';

export default function AboutUsPage() {
  const [activeFeatureTab, setActiveFeatureTab] = useState('TruBroker™');
  const [heroIndex, setHeroIndex] = useState(0);

  // ===== HERO CAROUSEL — Indian property images =====
  const heroImages = [
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=80', // Indian architecture
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80', // Modern building
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80', // Luxury interior
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80', // Office team
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const featureTabs = [
    'TruBroker™',
    'TruBroker™ Stories',
    'TruCheck™',
    'TruEstimate™',
    'India Transactions',
    'DivineGPT',
  ];

  const offerings = [
    {
      Icon: Home,
      title: 'Comprehensive Listings',
      desc: 'Explore a vast database of residential and commercial properties including apartments, villas, offices and more across India.',
    },
    {
      Icon: CheckSquare,
      title: 'Advanced Tools',
      desc: 'Our cutting-edge products such as TruCheck™, TruBroker™, TruEstimate™, DivineGPT, India Transactions and more help you find properties quickly and easily.',
    },
    {
      Icon: BarChart3,
      title: 'Market Insights',
      desc: 'With data directly from RERA and leading developers, use India Transactions to monitor transaction data for the rental and sales markets across major Indian cities.',
    },
    {
      Icon: Headphones,
      title: 'Expert Support',
      desc: 'Our team of experienced real estate professionals is always on hand to provide guidance and support throughout your property journey in India.',
    },
    {
      Icon: GraduationCap,
      title: 'Divine Bricks Academy',
      desc: 'This is our bespoke training academy for real estate professionals in India. You can join any of these specialised courses for free.',
    },
  ];

  const contentResources = [
    { title: 'myDivine Bricks', desc: "India's beloved property and lifestyle blog" },
    { title: 'हिंदी ब्लॉग', desc: 'The most popular Hindi real estate blog in the country' },
    { title: 'BUILDING GUIDES', desc: 'Explore 6500+ commercial and residential buildings across India' },
    { title: 'AREA GUIDES', desc: 'Learn about 3000+ localities and communities' },
    { title: 'SCHOOL GUIDES', desc: 'Discover 1000+ educational institutions' },
  ];

  return (
    <div className="w-full flex flex-col font-sans overflow-x-hidden" style={{ backgroundColor: '#FFFFFF' }}>

      {/* ================= 1. HERO CAROUSEL ================= */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[560px] overflow-hidden bg-[#171A1C]">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              heroIndex === i ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Divine Bricks ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Charcoal overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(23,26,28,0.5) 0%, rgba(23,26,28,0.2) 50%, rgba(23,26,28,0.7) 100%)',
          }}
        />

        {/* Carousel dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className="transition-all duration-300"
              style={{
                width: heroIndex === i ? '32px' : '8px',
                height: '8px',
                borderRadius: '999px',
                backgroundColor: heroIndex === i ? '#F5A623' : 'rgba(255,255,255,0.5)',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ================= 2. AI BANNER STRIP ================= */}
      <section className="w-full" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center border"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#F5A623' }}
            >
              <Home className="h-4 w-4" style={{ color: '#F5A623' }} />
            </div>
            <p className="text-xs sm:text-sm font-medium" style={{ color: '#171A1C' }}>
              Want to know about Divine Bricks? Ask DivineGPT, the world's first AI-powered property search assistant.
            </p>
          </div>
          <button
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:-translate-y-0.5 transition-all whitespace-nowrap"
            style={{
              backgroundColor: '#F5A623',
              color: '#171A1C',
              boxShadow: '0 4px 16px rgba(245, 166, 35, 0.3)',
            }}
          >
            Ask DivineGPT
          </button>
        </div>
      </section>

      {/* ================= 3. ABOUT US ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ color: '#171A1C' }}>
                About Us
              </h2>
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight" style={{ color: '#171A1C' }}>
                Real Homes Live Here – India's Most Trusted Property Search Experience
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#59636B' }}>
                Welcome to Divine Bricks, India's premier real estate portal known for featuring the most authentic property listings in Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, Jaipur, Ahmedabad, Chennai, Kolkata and more. Whether you're looking to buy, rent or sell property, Divine Bricks is here to guide you through every step of your journey, making your real estate journey as seamless and effortless as possible.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#59636B' }}>
                A part of Divine Group Holdings Limited, one of India's fastest-growing proptech companies, Divine Bricks connects buyers, sellers, tenants and brokers by providing a safe and user-friendly environment.
              </p>
              <Link
                href="#"
                className="font-bold text-sm hover:underline inline-flex items-center gap-1"
                style={{ color: '#F5A623' }}
              >
                Read More →
              </Link>
            </div>

            {/* Map Visual — India map */}
            <div className="relative">
              <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="India Map"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/10 to-transparent" />
                {/* India Pin highlight */}
                <div className="absolute top-[48%] left-[68%] -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-[#F5A623] rounded-full animate-pulse shadow-lg border-4 border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. WHAT WE OFFER ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: '#171A1C' }}>
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {offerings.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E8E2D5',
                  boxShadow: '0 4px 20px rgba(23, 26, 28, 0.04)',
                }}
              >
                <div className="flex justify-center mb-5">
                  <item.Icon className="w-12 h-12" style={{ color: '#F5A623' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-center mb-3 tracking-tight" style={{ color: '#171A1C' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-center leading-relaxed" style={{ color: '#59636B' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:max-w-2xl md:mx-auto lg:max-w-3xl">
            {offerings.slice(3).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E8E2D5',
                  boxShadow: '0 4px 20px rgba(23, 26, 28, 0.04)',
                }}
              >
                <div className="flex justify-center mb-5">
                  <item.Icon className="w-12 h-12" style={{ color: '#F5A623' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-center mb-3 tracking-tight" style={{ color: '#171A1C' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-center leading-relaxed" style={{ color: '#59636B' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm leading-relaxed mt-12 max-w-4xl" style={{ color: '#59636B' }}>
            At Divine Bricks, we are committed to ensuring a high level of transparency, accuracy and trust in the real estate market. We work closely with top real estate agencies and developers across India to provide authentic and available listings and reliable information. Our dedication to quality and integrity has earned us the trust of millions of users and a reputation as a market leader.
          </p>
        </div>
      </section>

      {/* ================= 5. OUR INVESTORS ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight" style={{ color: '#171A1C' }}>
                Our Investors
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#59636B' }}>
                Divine Group, Divine Bricks' parent company, is among the most well-funded proptech startups in India. It is backed by some of the biggest names in the industry including Sequoia Capital, Accel Partners, Prosus Ventures and Nexus Venture Partners, fortifying our position in the global classifieds industry.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center h-20">
                <span className="text-2xl md:text-3xl font-bold" style={{ color: '#4B6EF5' }}>Prosus</span>
              </div>
              <div className="flex items-center justify-center h-20">
                <span className="text-2xl md:text-3xl font-bold" style={{ color: '#1E40AF' }}>Sequoia</span>
              </div>
              <div className="flex items-center justify-center h-20">
                <span className="text-2xl md:text-3xl font-bold" style={{ color: '#171A1C' }}>Accel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. CEO SECTION ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 20px 50px -10px rgba(23, 26, 28, 0.2)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Aarav Mehta"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight" style={{ color: '#171A1C' }}>
                Meet Aarav Mehta
              </h2>
              <p className="font-semibold mb-6 text-sm" style={{ color: '#F5A623' }}>
                CEO Divine Bricks & Divine Group India
              </p>

              <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#59636B' }}>
                Aarav Mehta moved to Mumbai from Silicon Valley in 2014 as the Chief Executive Officer of Divine Bricks, bringing over fifteen years of experience leading large-scale tech organisations. His guidance and technological innovations have been instrumental in the growth and expansion of Divine Bricks across India and have earned the company its national powerhouse status.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#59636B' }}>
                Under his leadership, Divine Bricks has experienced great success with record-breaking revenue and significant year-on-year client growth.
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#59636B' }}>
                Aarav also leads India's largest online classifieds website, Divine Bricks. He has also taken over as CEO of the India arm of Divine Group Holdings Limited. Aarav also serves on the Board of Directors of NASSCOM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. OUR VALUES ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight" style={{ color: '#171A1C' }}>
            Our Values
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-4xl mb-10" style={{ color: '#59636B' }}>
            As a homegrown Indian brand, we empower property seekers and agents with accurate data and exceptional tools to transform the property market to be more transparent and efficient, making it easy for everyone to find their Real Home. We live by our values of Honesty, Innovation and Ownership and every decision we make is aimed to elevate the market and support the growth of the nation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Team meeting
              'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80', // Office work
              'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80', // Collaboration
            ].map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(23, 26, 28, 0.08)',
                }}
              >
                <img
                  src={img}
                  alt={`Our Values ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. CONTENT RESOURCES ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight" style={{ color: '#171A1C' }}>
            Our Exclusive Content Resources
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {contentResources.map((res, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="flex justify-center mb-3">
                  <BookOpen className="w-12 h-12" style={{ color: '#F5A623' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold mb-1 tracking-tight" style={{ color: '#171A1C' }}>
                  {res.title}
                </h3>
                <p className="text-[11px] leading-snug" style={{ color: '#59636B' }}>
                  {res.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 9. ADVANCED FEATURES ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight" style={{ color: '#171A1C' }}>
            Our advanced features for Property Seekers
          </h2>

          <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 border-b border-gray-200">
              {featureTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFeatureTab(tab)}
                  className="pb-4 text-sm font-semibold whitespace-nowrap transition-all relative"
                  style={{
                    color: activeFeatureTab === tab ? '#F5A623' : '#59636B',
                  }}
                >
                  {tab}
                  {activeFeatureTab === tab && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: '#F5A623' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ color: '#171A1C' }}>
                {activeFeatureTab}
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#59636B' }}>
                India's first real estate agent recognition system designed to highlight the most responsive and authentic brokers to enhance your property search experience.
              </p>
              <button
                className="px-6 py-3 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all"
                style={{
                  backgroundColor: '#F5A623',
                  color: '#171A1C',
                  boxShadow: '0 8px 24px rgba(245, 166, 35, 0.35)',
                }}
              >
                Connect with a TruBroker™
              </button>
            </div>

            <div className="space-y-4">
              {[
                { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', name: 'Rajesh Sharma' },
                { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80', name: 'Priya Patel' },
              ].map((agent, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 flex gap-4 items-center border"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#E8E2D5',
                    boxShadow: '0 4px 16px rgba(23, 26, 28, 0.06)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2"
                    style={{ borderColor: '#F5A623' }}
                  >
                    <img
                      src={agent.img}
                      alt={agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm" style={{ color: '#171A1C' }}>
                        {agent.name}
                      </h4>
                      <span className="text-[10px] font-semibold" style={{ color: '#59636B' }}>
                        ⚡ 30 minutes
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-lg font-semibold whitespace-nowrap border"
                        style={{ backgroundColor: '#F7F4ED', color: '#F5A623', borderColor: '#F5A623' }}
                      >
                        ⚡ Responsive Broker
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-lg font-semibold whitespace-nowrap border"
                        style={{ backgroundColor: '#FFFFFF', color: '#171A1C', borderColor: '#E8E2D5' }}
                      >
                        💎 Quality Lister
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 10. CUSTOMISED INITIATIVES ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight" style={{ color: '#171A1C' }}>
              Our Customised Initiatives and Solutions for Real Estate Agents in India
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: '#59636B' }}>
              The performance of real estate agents and their exposure to the latest trends and technologies is essential to the real estate industry. Check out the full details of our B2B products on our Agent Portal.
            </p>
            <Link
              href="/find-agent"
              className="inline-block px-8 py-3 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all"
              style={{
                backgroundColor: '#F5A623',
                color: '#171A1C',
                boxShadow: '0 8px 24px rgba(245, 166, 35, 0.35)',
              }}
            >
              View more
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { name: 'Profolio™', desc: 'The ultimate listing management solution.' },
              { name: 'ProConnect™', desc: 'A new way to help you connect, collaborate and close.' },
              { name: 'Divine Bricks Academy', desc: 'Our exclusive training facility with curated courses for agents.' },
            ].map((tool, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 text-center border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E8E2D5',
                  boxShadow: '0 4px 20px rgba(23, 26, 28, 0.04)',
                }}
              >
                <div className="flex justify-center mb-5">
                  <Award className="w-10 h-10" style={{ color: '#F5A623' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold mb-2 tracking-tight" style={{ color: '#171A1C' }}>
                  {tool.name}
                </h3>
                <p className="text-sm" style={{ color: '#59636B' }}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 11. GET IN TOUCH ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight" style={{ color: '#171A1C' }}>
            Get In Touch
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#59636B' }}>
            We love hearing from our users! Whether you have a question, want to share your feedback, or need assistance, feel free to reach out to us. You can also <a href="#" style={{ color: '#F5A623', textDecoration: 'underline' }}>contact us</a> through our website or social media channels.
          </p>
          <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: '#59636B' }}>
            At Divine Bricks, you can discover a world of real estate possibilities in India. Your dream property is just a click away. Find your REAL home today.
          </p>
        </div>
      </section>

    </div>
  );
}