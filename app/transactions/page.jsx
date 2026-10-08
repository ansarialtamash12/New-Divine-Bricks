'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, MapPin, ChevronDown, Filter, 
  TrendingUp, TrendingDown, Eye, Heart, 
  Building2, Bed, Bath, Square, CheckCircle2
} from 'lucide-react';

const salesHistory = [
  { id: 1, date: '5 Oct 2026', location: 'Lodha Amara Tower A, Thane West', price: '67,80,030', type: 'Apartment', beds: '1 RK', area: '379', status: 'UNDER CONSTRUCTION' },
  { id: 2, date: '5 Oct 2026', location: 'Godrej Woods, Sector 43, Noida', price: '70,00,000', type: 'Villa', beds: '4', area: '4,665', status: 'Ready' },
  { id: 3, date: '5 Oct 2026', location: 'Prestige Lakeside, Whitefield, Bangalore', price: '78,44,830', type: 'Apartment', beds: '1 RK', area: '457', status: 'UNDER CONSTRUCTION' },
  { id: 4, date: '5 Oct 2026', location: 'DLF The Crest, Golf Course Road, Gurgaon', price: '2,60,00,000', type: 'Apartment', beds: '2', area: '1,063', status: 'Ready' },
  { id: 5, date: '5 Oct 2026', location: 'Sobha Dream Acres, Panathur Road, Bangalore', price: '2,24,73,610', type: 'Apartment', beds: '2', area: '925', status: 'UNDER CONSTRUCTION' },
  { id: 6, date: '5 Oct 2026', location: 'My Home Avatar, Narsingi, Hyderabad', price: '81,59,990', type: 'Apartment', beds: '1 RK', area: '388', status: 'UNDER CONSTRUCTION' },
  { id: 7, date: '5 Oct 2026', location: 'Emaar Urban Oasis, Sector 62, Gurgaon', price: '38,50,00,000', type: 'Villa', beds: '6', area: '21,355', status: 'UNDER CONSTRUCTION' },
  { id: 8, date: '5 Oct 2026', location: 'Kedia The Sezasthan, Ajmer Road, Jaipur', price: '1,22,49,600', type: 'Apartment', beds: '1', area: '702', status: 'UNDER CONSTRUCTION' },
];

const recommendedProperties = [
  { id: 1, title: 'Lodha Amara, Thane West', price: '₹65,80,000', beds: '1 RK', baths: '1', area: '368 sqft', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=300', tag: 'TruCheck™' },
  { id: 2, title: 'Prestige Lakeside, Bangalore', price: '₹95,00,000', beds: '1', baths: '2', area: '778 sqft', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=300', tag: 'TruCheck™' },
  { id: 3, title: 'DLF The Crest, Gurgaon', price: '₹1,20,00,000', beds: '2', baths: '2', area: '1,150 sqft', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400&h=300', tag: 'TruCheck™' },
  { id: 4, title: 'Tresora by Wadan, JVC', price: '₹1,42,20,580', beds: '2', baths: '2', area: '1,295 sqft', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=300', tag: 'TruCheck™' },
  { id: 5, title: 'Godrej Woods, Noida', price: '₹80,00,000', beds: '1', baths: '2', area: '968 sqft', image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=400&h=300', tag: 'TruCheck™' },
];

export default function IndiaTransactionsPage() {
  const [activeTab, setActiveTab] = useState('sale');
  const [searchQuery, setSearchQuery] = useState('Mumbai');

  return (
    <div className="w-full bg-[#F7F4ED] flex flex-col font-sans min-h-screen">
      
      {/* NAVBAR */}
      {/* <nav className="w-full bg-white/90 backdrop-blur-xl border-b border-[#59636B]/15 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-[#F5A623]">
              Divine Bricks
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/properties" className="text-[#59636B] hover:text-[#F5A623] text-sm font-medium px-3 py-2 rounded-xl hover:bg-[#F5A623]/10 transition-all">Properties</Link>
              <Link href="/new-projects" className="text-[#59636B] hover:text-[#F5A623] text-sm font-medium px-3 py-2 rounded-xl hover:bg-[#F5A623]/10 transition-all">New Projects</Link>
              <Link href="/transactions" className="text-[#171A1C] font-bold text-sm bg-[#F5A623]/15 px-3 py-2 rounded-xl">Transactions</Link>
              <Link href="/truest-imate" className="text-[#59636B] hover:text-[#F5A623] text-sm font-medium px-3 py-2 rounded-xl hover:bg-[#F5A623]/10 transition-all">TruEstimate™</Link>
              <Link href="/find-agent" className="text-[#59636B] hover:text-[#F5A623] text-sm font-medium px-3 py-2 rounded-xl hover:bg-[#F5A623]/10 transition-all">Agents</Link>
            </div>
            <button className="text-sm font-bold text-[#171A1C] hover:text-[#F5A623] transition-colors">Sign up or Log in</button>
          </div>
        </div>
      </nav> */}

      {/* FILTER BAR */}
      <div className="w-full bg-white border-b border-[#59636B]/15 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3">
          
          <div className="relative">
            <select className="appearance-none bg-[#F7F4ED] border border-[#59636B]/20 rounded-xl py-2.5 pl-4 pr-9 text-sm font-medium text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all">
              <option>Buy</option>
              <option>Rent</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-3 w-4 h-4 text-[#59636B] pointer-events-none" />
          </div>

          <div className="relative flex-1 min-w-[200px]">
            <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-[#F5A623]" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all bg-white" 
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="px-4 py-2.5 bg-[#171A1C] text-[#F5A623] rounded-xl text-sm font-bold transition-colors">All</button>
            <button className="px-4 py-2.5 bg-[#F7F4ED] text-[#59636B] hover:bg-[#F5A623]/10 hover:text-[#F5A623] rounded-xl text-sm font-semibold transition-colors">Ready</button>
            <button className="px-4 py-2.5 bg-[#F7F4ED] text-[#59636B] hover:bg-[#F5A623]/10 hover:text-[#F5A623] rounded-xl text-sm font-semibold transition-colors">Under Construction</button>
            
            <div className="relative">
              <select className="appearance-none bg-[#F7F4ED] border border-[#59636B]/20 rounded-xl py-2.5 pl-3.5 pr-9 text-sm text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all">
                <option>Residential</option>
                <option>Commercial</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-3 w-4 h-4 text-[#59636B] pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none bg-[#F7F4ED] border border-[#59636B]/20 rounded-xl py-2.5 pl-3.5 pr-9 text-sm text-[#171A1C] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all">
                <option>BHK</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-3 w-4 h-4 text-[#59636B] pointer-events-none" />
            </div>

            <button className="px-4 py-2.5 border border-[#59636B]/20 rounded-xl text-sm font-semibold text-[#171A1C] flex items-center gap-2 hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 hover:text-[#F5A623] transition-all">
              <Filter className="w-4 h-4" /> More Filters
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#171A1C] flex items-center gap-2 tracking-tight">
              Sale Transactions for Properties in {searchQuery} <ChevronDown className="w-5 h-5 text-[#59636B]" />
            </h1>
            <p className="text-sm text-[#59636B] mt-1 flex items-center gap-1">
              powered by <span className="font-bold text-[#F5A623]">TruView™</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-[#59636B]/15 shadow-md shadow-[#171A1C]/5">
            <p className="text-sm text-[#59636B] mb-1">Sales Volume</p>
            <p className="text-2xl font-bold text-[#171A1C] tracking-tight">1,70,666</p>
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium"><TrendingDown className="w-3 h-3" /> -14.3%</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#59636B]/15 shadow-md shadow-[#171A1C]/5">
            <p className="text-sm text-[#59636B] mb-1">Average Price (₹)</p>
            <p className="text-2xl font-bold text-[#171A1C] tracking-tight">₹26,31,000</p>
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium"><TrendingDown className="w-3 h-3" /> -4.5%</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[#59636B]/15 shadow-md shadow-[#171A1C]/5">
            <p className="text-sm text-[#59636B] mb-1">Average Price per sqft (₹)</p>
            <p className="text-2xl font-bold text-[#171A1C] tracking-tight">₹19,120 / sqft</p>
            <p className="text-xs text-[#F5A623] flex items-center gap-1 mt-1 font-medium"><TrendingUp className="w-3 h-3" /> +4.8%</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {['Thane West (14,466)', 'Andheri East (11,964)', 'Powai (6,949)', 'Bandra West (6,518)'].map((link, i) => (
            <button key={i} className="whitespace-nowrap text-sm text-[#59636B] hover:text-[#F5A623] font-medium px-4 py-2 bg-white rounded-full border border-[#59636B]/15 hover:border-[#F5A623] hover:shadow-md transition-all">
              {link}
            </button>
          ))}
          <button className="whitespace-nowrap text-sm text-[#F5A623] font-bold px-4 py-2">VIEW ALL LOCATIONS</button>
        </div>

        {/* Sales History Table */}
        <div className="bg-white rounded-2xl border border-[#59636B]/15 shadow-md shadow-[#171A1C]/5 overflow-hidden mb-8">
          <div className="p-5 border-b border-[#59636B]/15 flex justify-between items-center bg-[#F7F4ED]">
            <h2 className="text-lg font-bold text-[#171A1C] tracking-tight">Sales History</h2>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#59636B] hidden md:inline">Data from 1 Oct 2025 - 5 Oct 2026</span>
              <button className="text-xs text-[#F5A623] font-bold flex items-center gap-1 hover:underline">
                <Eye className="w-3 h-3" /> View Transactions on Map
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F7F4ED] border-b border-[#59636B]/15">
                <tr>
                  <th className="px-4 py-3 font-semibold text-[#171A1C]">DATE</th>
                  <th className="px-4 py-3 font-semibold text-[#171A1C]">LOCATION</th>
                  <th className="px-4 py-3 font-semibold text-[#171A1C]">PRICE (₹)</th>
                  <th className="px-4 py-3 font-semibold text-[#171A1C]">TYPE</th>
                  <th className="px-4 py-3 font-semibold text-[#171A1C]">BHK</th>
                  <th className="px-4 py-3 font-semibold text-[#171A1C]">AREA (SQFT)</th>
                  <th className="px-4 py-3 font-semibold text-[#171A1C]">HISTORY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#59636B]/10">
                {salesHistory.map((row) => (
                  <tr key={row.id} className="hover:bg-[#F5A623]/5 transition-colors">
                    <td className="px-4 py-3 text-[#59636B] whitespace-nowrap">{row.date}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-[#171A1C]">{row.location}</p>
                      {row.status === 'UNDER CONSTRUCTION' && <span className="text-[10px] bg-[#F5A623]/15 text-[#F5A623] px-2 py-0.5 rounded-full font-bold mt-1 inline-block">UNDER CONSTRUCTION</span>}
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#171A1C]">{row.price}</td>
                    <td className="px-4 py-3 text-[#59636B]">{row.type}</td>
                    <td className="px-4 py-3 text-[#59636B]">{row.beds}</td>
                    <td className="px-4 py-3 text-[#59636B]">{row.area}</td>
                    <td className="px-4 py-3">
                      <button className="text-[#F5A623] text-xs font-bold border border-[#F5A623]/30 px-3 py-1.5 rounded-lg hover:bg-[#F5A623]/10 transition-all">VIEW</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-[#59636B]/15 text-center bg-[#F7F4ED]">
            <p className="text-xs text-[#59636B] mb-3">Showing 1 - 10 of 1,70,666 Transactions</p>
            <div className="flex justify-center gap-2">
              <button className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] flex items-center justify-center text-sm font-bold shadow-md shadow-[#F5A623]/20">1</button>
              <button className="w-9 h-9 rounded-lg border border-[#59636B]/20 flex items-center justify-center text-sm text-[#171A1C] hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 transition-all">2</button>
              <button className="w-9 h-9 rounded-lg border border-[#59636B]/20 flex items-center justify-center text-sm text-[#171A1C] hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 transition-all">3</button>
              <button className="w-9 h-9 rounded-lg border border-[#59636B]/20 flex items-center justify-center text-sm text-[#171A1C] hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 transition-all">→</button>
            </div>
          </div>
        </div>

        {/* Recommended */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#171A1C] tracking-tight">Properties You Might Be Interested In</h2>
            <Link href="#" className="text-sm text-[#F5A623] font-bold hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {recommendedProperties.map((prop) => (
              <div key={prop.id} className="bg-[#F7F4ED] rounded-2xl border border-[#59636B]/15 overflow-hidden shadow-md shadow-[#171A1C]/5 hover:shadow-xl hover:shadow-[#F5A623]/10 hover:-translate-y-1 hover:border-[#F5A623]/30 transition-all duration-300 group">
                <div className="relative h-40 bg-[#59636B]/10 w-full overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171A1C]/30 via-transparent to-transparent" />
                  <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-[#171A1C] flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-[#F5A623]" /> {prop.tag}
                  </div>
                  <button className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all">
                    <Heart className="w-4 h-4 text-[#59636B] hover:text-[#F5A623] transition-colors" />
                  </button>
                </div>
                
                <div className="p-3">
                  <p className="font-bold text-[#F5A623] text-sm mb-1">{prop.price}</p>
                  <p className="text-xs text-[#59636B] truncate mb-2">{prop.title}</p>
                  <div className="flex items-center gap-3 text-[10px] text-[#59636B]">
                    <span className="flex items-center gap-1"><Bed className="w-3 h-3" /> {prop.beds}</span>
                    <span className="flex items-center gap-1"><Bath className="w-3 h-3" /> {prop.baths}</span>
                    <span className="flex items-center gap-1"><Square className="w-3 h-3" /> {prop.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#59636B]/15 pt-8">
          <div>
            <h3 className="font-bold text-[#171A1C] mb-4 tracking-tight">Properties sold in Mumbai</h3>
            <ul className="space-y-2.5 text-sm text-[#59636B]">
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Sale transactions for 1 RK Flats</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Sale transactions for 1 BHK Properties</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Sale transactions for 2 BHK Properties</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Sale transactions for 3 BHK Properties</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#171A1C] mb-4 tracking-tight">Other transactions in India</h3>
            <ul className="space-y-2.5 text-sm text-[#59636B]">
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Sale transactions for Flats</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Sale transactions for Villas</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Sale transactions for Row Houses</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Under Construction transactions for Properties</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#171A1C] mb-4 tracking-tight">Other popular searches</h3>
            <ul className="space-y-2.5 text-sm text-[#59636B]">
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Properties for sale in Mumbai</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">1 RK Properties for sale in Mumbai</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">1 BHK Properties for sale in Mumbai</Link></li>
              <li><Link href="#" className="hover:text-[#F5A623] transition-colors">2 BHK Properties for sale in Mumbai</Link></li>
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
}