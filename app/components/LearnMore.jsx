'use client';

import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

// ===== BLOG / UPDATES DATA =====
const updatesData = [
  { id: 1, title: 'What Are My Options for Investing in Indian Real Estate With a ₹60 Lakh Budget?', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 2, title: 'What Are My Options When It Comes to Investing in Indian Real Estate With a ₹1 Crore Budget', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 3, title: 'Jhajjar vs Jewar: Which NCR Investment Is Better in 2026?', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 4, title: 'Pros and Cons of Living in Jaipur\'s Ajmer Road', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 5, title: 'Top 5 Areas to Invest in India — 2026 Guide', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=250' },
];

// ===== NEIGHBOURHOODS DATA =====
const neighbourhoodsData = [
  { id: 1, title: 'Ajmer Road, Jaipur', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 2, title: 'Jhajjar, Haryana NCR', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 3, title: 'Jewar Airport Zone, UP', image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 4, title: 'Dholera Smart City, Gujarat', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 5, title: 'Dehradun, Uttarakhand', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 6, title: 'Mohali, Punjab', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 7, title: 'Vrindavan, Uttar Pradesh', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=400&h=250' },
];

// ===== BUILDINGS / TOP PROJECTS DATA =====
const buildingsData = [
  { id: 1, title: 'Kedia The Sezasthan, Jaipur', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 2, title: 'J S Osiyan Habitat, Jhajjar', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 3, title: 'AOne City, Jewar', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 4, title: 'Dholera Lakeside Residency', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 5, title: 'Hero Alaknanda, Haridwar', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 6, title: 'Gillco Meraqui, Mohali', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 7, title: 'Tarang Divine City, Vrindavan', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=400&h=250' },
];

// ===== RELIGIOUS / SPIRITUAL DESTINATIONS (property images only) =====
const religiousPlacesData = [
  { id: 1, title: 'Vrindavan — Residential Plots', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 2, title: 'Ayodhya — Township Projects', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 3, title: 'Varanasi — Premium Flats', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 4, title: 'Haridwar — Gated Plots', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 5, title: 'Rishikesh — Riverside Homes', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 6, title: 'Amritsar — Residential Flats', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 7, title: 'Ujjain — Investment Plots', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 8, title: 'Kedarnath — Hill Cottages', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 9, title: 'Govardhan — Farmhouse Plots', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=400&h=250' },
];

const locations = ['Mumbai', 'Delhi NCR', 'Jaipur', 'Punjab', 'Vrindavan'];

const ToggleSwitch = ({ label }) => (
  <label className="relative inline-flex items-center cursor-pointer ml-4">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-10 h-5 bg-[#59636B]/25 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#59636B]/40 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F5A623]"></div>
    <span className="ml-2 text-sm text-[#59636B] font-medium">{label}</span>
  </label>
);

const ScrollableSection = ({ title, subtitle, data, badgeText, badgeColor, showToggle }) => {
  const scrollRef = useRef(null);
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-16 relative group">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
        <div className="flex items-center flex-wrap gap-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-[#171A1C] tracking-tight mr-2">{title}</h3>
          {subtitle && <span className="text-[#59636B] text-sm font-normal mr-2">{subtitle}</span>}
          {showToggle && <ToggleSwitch label="Ready Only" />}
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-[#171A1C] border border-[#59636B]/20 px-4 py-2 rounded-xl hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 hover:text-[#F5A623] transition-all shrink-0">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {data.map((item) => (
          <div key={item.id} className="min-w-[260px] max-w-[260px] flex flex-col snap-start cursor-pointer group/card">
            <div className="relative rounded-2xl overflow-hidden mb-3 shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[160px] object-cover transition-transform duration-500 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171A1C]/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
              <div className={`absolute bottom-3 left-3 px-2.5 py-1 text-[10px] font-bold text-white uppercase rounded-lg ${badgeColor}`}>
                {badgeText}
              </div>
            </div>
            <h4 className="text-sm font-bold text-[#171A1C] leading-snug group-hover/card:text-[#F5A623] transition-colors line-clamp-2">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-[-15px] top-[55%] -translate-y-1/2 bg-[#F7F4ED] rounded-full p-2.5 shadow-xl border border-[#59636B]/15 hover:bg-white hover:border-[#F5A623] hover:scale-110 transition-all z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-[#171A1C]" />
      </button>
    </div>
  );
};

export default function LearnMore() {
  const [activeLocation, setActiveLocation] = useState('Mumbai');

  return (
    <section className="w-full bg-[#F7F4ED] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#171A1C] text-center mb-10 tracking-tight">
          Learn more about India's property market
        </h2>

        {/* Location Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white border border-[#59636B]/15 rounded-2xl p-1 shadow-sm overflow-x-auto">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`px-5 py-2.5 text-sm font-semibold whitespace-nowrap rounded-xl transition-all ${
                  activeLocation === loc
                    ? 'bg-[#171A1C] text-[#F5A623] shadow-md'
                    : 'text-[#59636B] hover:text-[#171A1C]'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Blog / Updates */}
        <ScrollableSection
          title="Real Estate Updates From"
          subtitle={
            <span className="flex items-center text-[#F5A623] font-bold text-xl">
              my<span className="text-[#171A1C]">DivineBricks</span>
            </span>
          }
          data={updatesData}
          badgeText="Market Trends"
          badgeColor="bg-[#F5A623] text-[#171A1C]"
        />

        {/* Section 2: Popular Neighbourhoods */}
        <ScrollableSection
          title="Discover Popular Investment Locations"
          data={neighbourhoodsData}
          badgeText="Hot"
          badgeColor="bg-[#171A1C] text-white"
          showToggle={true}
        />

        {/* Section 3: Top Projects */}
        <ScrollableSection
          title="Explore Top Projects Across India"
          data={buildingsData}
          badgeText="RERA"
          badgeColor="bg-[#171A1C] text-white"
          showToggle={true}
        />

        {/* Section 4: Religious / Spiritual Destinations */}
        <ScrollableSection
          title="🛕 Spiritual & Religious Destinations"
          subtitle={
            <span className="text-[#59636B] text-sm font-normal">
              Vrindavan • Ayodhya • Varanasi • Haridwar • Rishikesh • Amritsar • Ujjain
            </span>
          }
          data={religiousPlacesData}
          badgeText="Spiritual"
          badgeColor="bg-[#F5A623] text-[#171A1C]"
          showToggle={false}
        />
      </div>
    </section>
  );
}