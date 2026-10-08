'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, ChevronDown, Search, Filter, 
  Building2, Calendar, Bed, Bath, Square,
  Heart, CheckCircle2, Star, ArrowRight
} from 'lucide-react';

// --- MOCK DATA for New Projects ---
const newProjects = [
  { 
    id: 1, 
    title: 'B. Hills', 
    location: 'Dubai Hills Estate, Dubai', 
    price: 'AED 1,250,000', 
    beds: '1-3 Beds', 
    handover: 'Q3 2026', 
    status: 'Off Plan',
    image: '/project1.jpg',
    agent: 'K R Real Estate'
  },
  { 
    id: 2, 
    title: 'Vision Iconic', 
    location: 'Al Reem Island, Abu Dhabi', 
    price: 'AED 1,950,000', 
    beds: '1-2 Beds', 
    handover: 'Q2 2027', 
    status: 'Off Plan',
    image: '/project2.jpg',
    agent: 'K R Real Estate'
  },
  { 
    id: 3, 
    title: 'Maybach Tower A', 
    location: 'Burj Khalifa, Downtown Dubai', 
    price: 'AED 3,200,000', 
    beds: '2-4 Beds', 
    handover: 'Q4 2026', 
    status: 'Off Plan',
    image: '/project3.jpg',
    agent: 'K R Real Estate'
  },
  { 
    id: 4, 
    title: 'Binghatti Etheria', 
    location: 'Al Barsha South, Dubai', 
    price: 'AED 1,100,000', 
    beds: 'Studio-2 Beds', 
    handover: 'Q1 2027', 
    status: 'Off Plan',
    image: '/project4.jpg',
    agent: 'K R Real Estate'
  },
  { 
    id: 5, 
    title: 'Tilal Binghatti', 
    location: 'Al Jaddaf, Dubai', 
    price: 'AED 1,450,000', 
    beds: '1-3 Beds', 
    handover: 'Q4 2026', 
    status: 'Off Plan',
    image: '/project5.jpg',
    agent: 'K R Real Estate'
  },
  { 
    id: 6, 
    title: 'Verdana Residence 6', 
    location: 'Dubai Investment Park, Dubai', 
    price: 'AED 950,000', 
    beds: 'Studio-3 Beds', 
    handover: 'Q2 2027', 
    status: 'Off Plan',
    image: '/project6.jpg',
    agent: 'K R Real Estate'
  },
  { 
    id: 7, 
    title: 'Binghatti Spectre', 
    location: 'Jumeirah Village Circle, Dubai', 
    price: 'AED 1,300,000', 
    beds: '1-2 Beds', 
    handover: 'Q3 2027', 
    status: 'Off Plan',
    image: '/project7.jpg',
    agent: 'K R Real Estate'
  },
  { 
    id: 8, 
    title: 'Binghatti Starlit', 
    location: 'Business Bay, Dubai', 
    price: 'AED 1,800,000', 
    beds: '1-3 Beds', 
    handover: 'Q1 2028', 
    status: 'Off Plan',
    image: '/project8.jpg',
    agent: 'K R Real Estate'
  },
];

export default function NewProjectsPage() {
  const [activeTab, setActiveTab] = useState('Dubai');

  return (
    <div className="w-full bg-gray-50 flex flex-col font-sans min-h-screen">
      
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-[#00d16a]">
              Divine Bricks
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/properties" className="text-gray-700 hover:text-[#00d16a] text-sm font-medium">Properties</Link>
              <Link href="/new-projects" className="text-[#00d16a] font-semibold text-sm border-b-2 border-[#00d16a] pb-1">New Projects</Link>
              <Link href="/transactions" className="text-gray-700 hover:text-[#00d16a] text-sm font-medium">Transactions</Link>
              <Link href="/truest-imate" className="text-gray-700 hover:text-[#00d16a] text-sm font-medium">TruEstimate™</Link>
              <Link href="/find-agent" className="text-gray-700 hover:text-[#00d16a] text-sm font-medium">Agents</Link>
            </div>
            <button className="text-sm font-medium text-gray-700 hover:text-[#00d16a]">Sign up or Log in</button>
          </div>
        </div>
      </nav>

      {/* ================= HEADER SECTION ================= */}
      <div className="w-full bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
            <Link href="/" className="hover:text-[#00d16a]">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">New Projects</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-900">New Projects in UAE</h1>
            
            {/* Tabs */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab ? 'bg-white shadow text-[#00d16a]' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* ===== LEFT SIDE: PROPERTY LISTINGS ===== */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Filter Bar Top */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none bg-gray-50 border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#00d16a]">
                    <option>Featured</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                    <option>Newest</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              <p className="text-sm text-gray-500">Showing 1-8 of 250 Projects</p>
            </div>

            {/* Property Cards List */}
            {newProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row">
                
                {/* Image Section */}
                <div className="relative w-full md:w-72 h-48 md:h-auto bg-gray-200 flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Building2 className="w-12 h-12" />
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 bg-[#00d16a] text-white text-[10px] font-bold px-2 py-1 rounded">
                    {project.status}
                  </div>
                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-bold text-gray-900">{project.title}</h2>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" /> Featured
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-gray-400" /> {project.beds}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-gray-400" /> Handover: {project.handover}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="text-lg font-bold text-[#00d16a]">{project.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Agent</p>
                      <p className="text-sm font-medium text-gray-800">{project.agent}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button Section (Right side on desktop) */}
                <div className="hidden md:flex flex-col justify-center p-4 border-l border-gray-100 bg-gray-50 w-40">
                  <button className="w-full bg-[#00d16a] hover:bg-[#00b85c] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors mb-2">
                    Register Interest
                  </button>
                  <button className="w-full border border-[#00d16a] text-[#00d16a] text-sm font-semibold py-2.5 rounded-lg hover:bg-green-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">1</button>
              <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">2</button>
              <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">3</button>
              <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100"><ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>

          {/* ===== RIGHT SIDE: FILTERS SIDEBAR ===== */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Search Widget */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Search Projects</h3>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Project name..." 
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#00d16a]" 
                />
              </div>
            </div>

            {/* Price Filter */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#00d16a]" /> Price Range
              </h3>
              <div className="space-y-3">
                {['Under AED 1M', 'AED 1M - 2M', 'AED 2M - 5M', 'Above AED 5M'].map((range) => (
                  <label key={range} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="accent-[#00d16a] rounded" /> {range}
                  </label>
                ))}
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#00d16a]" /> Bedrooms
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Studio', '1', '2', '3', '4', '5+'].map((bed) => (
                  <button key={bed} className="px-3 py-1.5 border border-gray-300 rounded-full text-xs font-medium text-gray-600 hover:border-[#00d16a] hover:text-[#00d16a] transition-colors">
                    {bed}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Agents Widget */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-3">Featured Agents</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Agent Name {i}</p>
                      <p className="text-xs text-gray-500">Verified Partner</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ================= BOTTOM LINKS SECTION ================= */}
      <section className="w-full bg-white border-t border-gray-200 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Top Searches for Apartments</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[#00d16a]">Apartments for sale in Dubai</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Apartments for sale in Abu Dhabi</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Apartments for sale in Sharjah</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Apartments for sale in Ajman</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Top Searches for Villas</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[#00d16a]">Villas for sale in Dubai</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Villas for sale in Abu Dhabi</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Villas for sale in Sharjah</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Villas for sale in Ajman</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Top Searches for Townhouses</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-[#00d16a]">Townhouses for sale in Dubai</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Townhouses for sale in Abu Dhabi</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Townhouses for sale in Sharjah</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a]">Townhouses for sale in Ajman</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}