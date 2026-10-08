// 
















'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, MapPin, ChevronDown, Filter, 
  TrendingUp, TrendingDown, Eye, Heart, 
  Building2, Bed, Bath, Square, CheckCircle2
} from 'lucide-react';

const salesHistory = [
  { id: 1, date: '5 Oct 2026', location: 'Lagoon Views 13 Tower A, DAMAC Lagoons', price: '678,030', type: 'Apartment', beds: 'Studio', area: '379', status: 'OFF-PLAN' },
  { id: 2, date: '5 Oct 2026', location: 'Elie Saab 2, Arabian Ranches 3', price: '7,000,000', type: 'Villa', beds: '4', area: '4,665', status: 'Ready' },
  { id: 3, date: '5 Oct 2026', location: 'Reef 996, Dubai Production City (IMPZ)', price: '784,483', type: 'Apartment', beds: 'Studio', area: '457', status: 'OFF-PLAN' },
  { id: 4, date: '5 Oct 2026', location: 'Act One, Downtown Dubai', price: '2,600,000', type: 'Apartment', beds: '2', area: '1,063', status: 'Ready' },
  { id: 5, date: '5 Oct 2026', location: '360 Riverside Crescent, Sobha Hartland 2', price: '2,247,361', type: 'Apartment', beds: '2', area: '925', status: 'OFF-PLAN' },
  { id: 6, date: '5 Oct 2026', location: 'Binghatti Skyterraces, Motor City', price: '815,999', type: 'Apartment', beds: 'Studio', area: '388', status: 'OFF-PLAN' },
  { id: 7, date: '5 Oct 2026', location: 'Elysian Mansions, Tilal Al Ghaf', price: '38,500,000', type: 'Villa', beds: '6', area: '21,355', status: 'OFF-PLAN' },
  { id: 8, date: '5 Oct 2026', location: 'DAMAC District Tower B, DAMAC Hills', price: '1,224,960', type: 'Apartment', beds: '1', area: '702', status: 'OFF-PLAN' },
];

const recommendedProperties = [
  { id: 1, title: 'Valencia Tower A, Valencia', price: 'AED 658,000', beds: 'Studio', baths: '1', area: '368 sqft', image: '/property1.jpg', tag: 'TruCheck™' },
  { id: 2, title: 'The Archive by Imtiaz, Dubai Land', price: 'AED 950,000', beds: '1', baths: '2', area: '778 sqft', image: '/property2.jpg', tag: 'TruCheck™' },
  { id: 3, title: 'Binghatti Wealth, Al Jaddaf', price: 'AED 1,200,000', beds: '1', baths: '2', area: '661 sqft', image: '/property3.jpg', tag: 'TruCheck™' },
  { id: 4, title: 'Tresora by Wadan, JVC District 14', price: 'AED 1,422,058', beds: '1', baths: '2', area: '1,295 sqft', image: '/property4.jpg', tag: 'TruCheck™' },
  { id: 5, title: 'Building 53, Mediterranean', price: 'AED 800,000', beds: '1', baths: '2', area: '968 sqft', image: '/property5.jpg', tag: 'TruCheck™' },
];

export default function DubaiTransactionsPage() {
  const [activeTab, setActiveTab] = useState('sale');
  const [searchQuery, setSearchQuery] = useState('Dubai');

  return (
    <div className="w-full bg-gray-50 flex flex-col font-sans min-h-screen">
      
      {/* NAVBAR */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-[#00d16a]">
              Divine Bricks
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/properties" className="text-gray-600 hover:text-[#00d16a] text-sm font-medium px-3 py-2 rounded-xl hover:bg-[#00d16a]/5 transition-all">Properties</Link>
              <Link href="/new-projects" className="text-gray-600 hover:text-[#00d16a] text-sm font-medium px-3 py-2 rounded-xl hover:bg-[#00d16a]/5 transition-all">New Projects</Link>
              <Link href="/transactions" className="text-[#00d16a] font-semibold text-sm bg-[#ecfdf5] px-3 py-2 rounded-xl">Transactions</Link>
              <Link href="/truest-imate" className="text-gray-600 hover:text-[#00d16a] text-sm font-medium px-3 py-2 rounded-xl hover:bg-[#00d16a]/5 transition-all">TruEstimate™</Link>
              <Link href="/find-agent" className="text-gray-600 hover:text-[#00d16a] text-sm font-medium px-3 py-2 rounded-xl hover:bg-[#00d16a]/5 transition-all">Agents</Link>
            </div>
            <button className="text-sm font-semibold text-gray-700 hover:text-[#00d16a] transition-colors">Sign up or Log in</button>
          </div>
        </div>
      </nav>

      {/* FILTER BAR */}
      <div className="w-full bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3">
          
          <div className="relative">
            <select className="appearance-none bg-gray-100 border border-gray-200 rounded-xl py-2.5 pl-4 pr-9 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all">
              <option>Buy</option>
              <option>Rent</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

          <div className="relative flex-1 min-w-[200px]">
            <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-[#00d16a]" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all" 
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="px-4 py-2.5 bg-gray-100 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors">All</button>
            <button className="px-4 py-2.5 bg-gray-100 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors">Ready</button>
            <button className="px-4 py-2.5 bg-gray-100 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors">Off-Plan</button>
            
            <div className="relative">
              <select className="appearance-none bg-gray-100 border border-gray-200 rounded-xl py-2.5 pl-3.5 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all">
                <option>Residential</option>
                <option>Commercial</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="appearance-none bg-gray-100 border border-gray-200 rounded-xl py-2.5 pl-3.5 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all">
                <option>Beds</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-gray-50 hover:border-[#00d16a]/50 transition-all">
              <Filter className="w-4 h-4" /> More Filters
            </button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2 tracking-tight">
              Sale Transactions for Properties in {searchQuery} <ChevronDown className="w-5 h-5 text-gray-500" />
            </h1>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
              powered by <span className="font-bold text-[#00d16a]">TruView™</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md shadow-gray-200/50">
            <p className="text-sm text-gray-500 mb-1">Sales Volume</p>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">170,666</p>
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium"><TrendingDown className="w-3 h-3" /> -14.3%</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md shadow-gray-200/50">
            <p className="text-sm text-gray-500 mb-1">Average Price (AED)</p>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">2,631,000</p>
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium"><TrendingDown className="w-3 h-3" /> -4.5%</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md shadow-gray-200/50">
            <p className="text-sm text-gray-500 mb-1">Average Price per sqft (AED)</p>
            <p className="text-2xl font-bold text-gray-900 tracking-tight">1,912 / sqft</p>
            <p className="text-xs text-[#00d16a] flex items-center gap-1 mt-1 font-medium"><TrendingUp className="w-3 h-3" /> +4.8%</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {['Dubai South (14,466)', 'Jumeirah Village Circle (11,964)', 'Dubai Land Residence Complex (6,949)', 'Business Bay (6,518)'].map((link, i) => (
            <button key={i} className="whitespace-nowrap text-sm text-gray-600 hover:text-[#00d16a] font-medium px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-[#00d16a] hover:shadow-md transition-all">
              {link}
            </button>
          ))}
          <button className="whitespace-nowrap text-sm text-[#00d16a] font-semibold px-4 py-2">VIEW ALL LOCATIONS</button>
        </div>

        {/* Sales History Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-md shadow-gray-200/50 overflow-hidden mb-8">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Sales History</h2>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 hidden md:inline">Data from 1 Oct 2025 - 5 Oct 2026</span>
              <button className="text-xs text-[#00d16a] font-semibold flex items-center gap-1 hover:underline">
                <Eye className="w-3 h-3" /> View Transactions on Map
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-600">DATE</th>
                  <th className="px-4 py-3 font-semibold text-gray-600">LOCATION</th>
                  <th className="px-4 py-3 font-semibold text-gray-600">PRICE (AED)</th>
                  <th className="px-4 py-3 font-semibold text-gray-600">TYPE</th>
                  <th className="px-4 py-3 font-semibold text-gray-600">BEDS</th>
                  <th className="px-4 py-3 font-semibold text-gray-600">AREA (SQFT)</th>
                  <th className="px-4 py-3 font-semibold text-gray-600">HISTORY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {salesHistory.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.date}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900">{row.location}</p>
                      {row.status === 'OFF-PLAN' && <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-semibold mt-1 inline-block">OFF-PLAN</span>}
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.price}</td>
                    <td className="px-4 py-3 text-gray-600">{row.type}</td>
                    <td className="px-4 py-3 text-gray-600">{row.beds}</td>
                    <td className="px-4 py-3 text-gray-600">{row.area}</td>
                    <td className="px-4 py-3">
                      <button className="text-[#00d16a] text-xs font-semibold border border-[#00d16a]/30 px-3 py-1.5 rounded-lg hover:bg-[#ecfdf5] transition-all">VIEW</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100 text-center bg-gray-50">
            <p className="text-xs text-gray-500 mb-3">Showing 1 - 10 of 1,70,666 Transactions</p>
            <div className="flex justify-center gap-2">
              <button className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white flex items-center justify-center text-sm font-semibold shadow-md shadow-[#00d16a]/20">1</button>
              <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">2</button>
              <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">3</button>
              <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">→</button>
            </div>
          </div>
        </div>

        {/* Recommended */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Properties You Might Be Interested In</h2>
            <Link href="#" className="text-sm text-[#00d16a] font-semibold hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {recommendedProperties.map((prop) => (
              <div key={prop.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative h-40 bg-gray-200 w-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Building2 className="w-10 h-10" />
                  </div>
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3 text-[#00d16a]" /> {prop.tag}
                  </div>
                  <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-3">
                  <p className="font-bold text-gray-900 text-sm mb-1">{prop.price}</p>
                  <p className="text-xs text-gray-500 truncate mb-2">{prop.title}</p>
                  <div className="flex items-center gap-3 text-[10px] text-gray-500">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-tight">Properties sold in Dubai</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Sale transactions for Studios</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Sale transactions for 1 Bedroom Properties</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Sale transactions for 2 Bedroom Properties</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Sale transactions for 3 Bedroom Properties</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-tight">Other transactions in Dubai</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Sale transactions for Apartments</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Sale transactions for Villas</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Sale transactions for Townhouses</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Off Plan transactions for Properties</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-tight">Other popular searches</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Properties for sale in Dubai</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Studio Properties for sale in Dubai</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">1 Bedroom Properties for sale in Dubai</Link></li>
              <li><Link href="#" className="hover:text-[#00d16a] transition-colors">2 Bedroom Properties for sale in Dubai</Link></li>
            </ul>
          </div>
        </div>

      </main>
    </div>
  );
}