'use client';

import React, { useState } from 'react';
import { MapPin, Search, ArrowRight, Play, MessageSquare, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('Properties');
  const [purpose, setPurpose] = useState<'Buy' | 'Rent'>('Buy');
  const [filterType, setFilterType] = useState('All');

  const tabs = ['Properties', 'New Projects', 'Transactions', 'TruEstimate™', 'Agents'];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 pt-4 pb-8">
      
      <div className="relative w-full min-h-[550px] md:min-h-[600px] rounded-3xl overflow-hidden flex flex-col items-center justify-center py-10">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
          
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2 drop-shadow-md">
            Real homes live here
          </h1>
          <p className="text-base md:text-lg text-white text-center mb-8 drop-shadow-md">
            Real Data. Real Brokers. Real Properties.
          </p>

          {/* SEARCH BOX CONTAINER: Width ko max-w-5xl par lock kiya hai */}
          <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
            
            {/* Top Tabs */}
            <div className="flex bg-white border-b border-gray-100 px-2 pt-2 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors rounded-t-md ${
                    activeTab === tab
                      ? 'text-[#00a651] bg-[#e8f8f0]'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                  {tab === 'TruEstimate™' && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                      New
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* FORM SECTION: Yahan padding (p-6) aur gaps (gap-4) badhaye hain */}
            <div className="p-6">
              
              {/* Top Row */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                
                {/* Buy / Rent Toggle */}
                <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 shrink-0">
                  {['Buy', 'Rent'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setPurpose(option as 'Buy' | 'Rent')}
                      className={`px-8 py-2.5 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                        purpose === option
                          ? 'bg-[#e8f8f0] text-[#00a651] shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {/* Location Input */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-[#00a651]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00a651] focus:border-transparent"
                  />
                </div>

                {/* Search Button */}
                <button className="bg-[#00a651] hover:bg-[#008f45] text-white px-10 h-12 rounded-lg text-sm font-bold transition-colors flex items-center justify-center shrink-0 whitespace-nowrap">
                  Search
                </button>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-wrap lg:flex-nowrap gap-4">
                
                {/* All/Ready/Off-Plan Toggle */}
                <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 shrink-0">
                  {['All', 'Ready', 'Off-Plan'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setFilterType(option)}
                      className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                        filterType === option
                          ? 'bg-[#e8f8f0] text-[#00a651] shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {/* Dropdowns */}
                <div className="relative flex-1 min-w-[140px]">
                  <select className="w-full h-12 appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00a651]">
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative flex-1 min-w-[140px]">
                  <select className="w-full h-12 appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00a651]">
                    <option>Beds & Baths</option>
                    <option>1 Bed</option>
                    <option>2 Beds</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                <div className="relative flex-1 min-w-[140px]">
                  <select className="w-full h-12 appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00a651]">
                    <option>Price (AED)</option>
                    <option>0 - 500k</option>
                    <option>500k - 1M</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

              </div>
            </div>

            {/* AI Promo Section */}
            <div className="bg-[#f0fdf4] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <MessageSquare className="h-4 w-4 text-[#00a651]" />
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  Want to find out more about UAE real estate using AI?
                </p>
              </div>
              <button className="text-[#00a651] hover:text-[#008f45] font-bold text-sm flex items-center gap-1 transition-colors whitespace-nowrap">
                Try BayutGPT <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          <button className="mt-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg flex items-center gap-3 transition-all text-sm font-semibold">
            <Play className="h-4 w-4 fill-white" />
            Experience the Journey
          </button>

        </div>
      </div>
    </div>
  );
}