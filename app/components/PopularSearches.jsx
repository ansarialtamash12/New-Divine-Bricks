'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const allSaleData = {
  apartments: [
    { label: 'Apartments for sale in Mumbai', href: '#' },
    { label: 'Apartments for sale in Bandra West, Mumbai', href: '#' },
    { label: 'Apartments for sale in Andheri East, Mumbai', href: '#' },
    { label: 'Apartments for sale in Powai, Mumbai', href: '#' },
    { label: 'Apartments for sale in Lower Parel, Mumbai', href: '#' },
    { label: 'Apartments for sale in Worli, Mumbai', href: '#' },
    { label: 'Apartments for sale in Goregaon, Mumbai', href: '#' },
    { label: 'Apartments for sale in Thane West', href: '#' },
    { label: 'Apartments for sale in Navi Mumbai', href: '#' },
    { label: 'Apartments for sale in Chembur, Mumbai', href: '#' },
  ],
  villas: [
    { label: 'Villas for sale in Mumbai', href: '#' },
    { label: 'Villas for sale in Juhu, Mumbai', href: '#' },
    { label: 'Villas for sale in Lonavala', href: '#' },
    { label: 'Villas for sale in Alibaug', href: '#' },
    { label: 'Villas for sale in Khandala', href: '#' },
    { label: 'Villas for sale in Karjat', href: '#' },
    { label: 'Villas for sale in Igatpuri', href: '#' },
    { label: 'Villas for sale in Nashik', href: '#' },
    { label: 'Villas for sale in Pune', href: '#' },
    { label: 'Villas for sale in Panchgani', href: '#' },
  ],
  other: [
    { label: 'Properties for sale in Mumbai', href: '#' },
    { label: 'Row Houses for sale in Mumbai', href: '#' },
    { label: 'Penthouses for sale in Mumbai', href: '#' },
    { label: 'Studio Apartments for sale in Mumbai', href: '#' },
    { label: 'Residential Plots for sale in Mumbai', href: '#' },
    { label: 'Commercial Properties for sale in Mumbai', href: '#' },
    { label: 'Offices for sale in Mumbai', href: '#' },
    { label: 'Shops for sale in Mumbai', href: '#' },
    { label: 'Warehouses for sale in Mumbai', href: '#' },
    { label: 'Commercial Plots for sale in Mumbai', href: '#' },
  ],
};

const offPlanData = {
  apartments: [
    { label: 'Under Construction Apartments in Mumbai', href: '#' },
    { label: 'Under Construction Apartments in Andheri West', href: '#' },
    { label: 'Under Construction Apartments in Bandra East', href: '#' },
    { label: 'Under Construction Apartments in Malad West', href: '#' },
    { label: 'Under Construction Apartments in Thane', href: '#' },
    { label: 'Under Construction Apartments in Kandivali', href: '#' },
    { label: 'Under Construction Apartments in Borivali', href: '#' },
    { label: 'Under Construction Apartments in Panvel', href: '#' },
    { label: 'Under Construction Apartments in Navi Mumbai', href: '#' },
    { label: 'Under Construction Apartments in Mira Road', href: '#' },
  ],
  villas: [
    { label: 'Under Construction Villas in Mumbai', href: '#' },
    { label: 'Under Construction Villas in Karjat', href: '#' },
    { label: 'Under Construction Villas in Lonavala', href: '#' },
    { label: 'Under Construction Villas in Alibaug', href: '#' },
    { label: 'Under Construction Villas in Igatpuri', href: '#' },
    { label: 'Under Construction Villas in Khopoli', href: '#' },
    { label: 'Under Construction Villas in Wada', href: '#' },
    { label: 'Under Construction Villas in Talegaon', href: '#' },
    { label: 'Under Construction Villas in Nashik', href: '#' },
    { label: 'Under Construction Villas in Pune', href: '#' },
  ],
  other: [
    { label: 'Under Construction Properties in Mumbai', href: '#' },
    { label: 'Under Construction Row Houses in Mumbai', href: '#' },
    { label: 'Under Construction Penthouses in Mumbai', href: '#' },
    { label: 'Under Construction Commercial Properties in Mumbai', href: '#' },
    { label: 'Under Construction Row Houses in Pune', href: '#' },
    { label: 'Under Construction Row Houses in Karjat', href: '#' },
    { label: 'Under Construction Properties in Andheri East', href: '#' },
    { label: 'New Projects by Lodha Group', href: '#' },
    { label: 'New Projects by Godrej Properties', href: '#' },
    { label: 'New Projects by DLF', href: '#' },
  ],
};

const SearchListSection = ({ title, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_ITEMS_COUNT = 5;
  const getVisibleItems = (items) => (isExpanded ? items : items.slice(0, INITIAL_ITEMS_COUNT));

  return (
    <div className="mb-14">
      <h3 className="text-xl md:text-2xl font-bold text-center text-[#171A1C] mb-8 tracking-tight">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
        {[
          { name: 'Apartments', data: data.apartments },
          { name: 'Villas', data: data.villas },
          { name: 'Other Properties', data: data.other },
        ].map((section) => (
          <div key={section.name}>
            <h4 className="text-xs font-bold tracking-widest text-[#F5A623] uppercase mb-4">
              {section.name}
            </h4>
            <ul className="space-y-3">
              {getVisibleItems(section.data).map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#59636B] hover:text-[#F5A623] transition-colors line-clamp-1 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[#59636B]/15 pt-5 flex justify-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#171A1C] hover:text-[#F5A623] transition-colors focus:outline-none"
        >
          {isExpanded ? (
            <>View Less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>View More <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      </div>
    </div>
  );
};

export default function PopularSearches() {
  const [activePurpose, setActivePurpose] = useState('Sale');
  const [activeLocation, setActiveLocation] = useState('Mumbai');
  const locations = ['Mumbai', 'Delhi NCR', 'Other Cities'];

  return (
    <section className="w-full bg-[#F7F4ED] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#171A1C] text-center mb-10 tracking-tight">
          Popular Real Estate Searches
        </h2>

        <div className="flex justify-center gap-8 mb-8 border-b border-[#59636B]/20">
          {['Sale', 'Rent'].map((purpose) => (
            <button
              key={purpose}
              onClick={() => setActivePurpose(purpose)}
              className={`pb-3 text-lg font-semibold transition-all border-b-2 ${
                activePurpose === purpose
                  ? 'text-[#F5A623] border-[#F5A623]'
                  : 'text-[#59636B] border-transparent hover:text-[#171A1C]'
              }`}
            >
              {purpose}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-white border border-[#59636B]/15 rounded-2xl p-1 shadow-md">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                  activeLocation === loc
                    ? 'bg-[#171A1C] text-[#F5A623] shadow-sm'
                    : 'text-[#59636B] hover:text-[#171A1C]'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <SearchListSection title="All Sale" data={allSaleData} />
          <SearchListSection title="Under Construction" data={offPlanData} />
        </div>
      </div>
    </section>
  );
}