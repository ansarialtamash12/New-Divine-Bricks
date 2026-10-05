import React from 'react';
import { ArrowRight, Building2, Car, Map, Landmark, Users } from 'lucide-react';

export default function BelowHero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 space-y-4">
      
      {/* 1. Sell or Rent Banner */}
      <div className="relative overflow-hidden bg-[#0e4b3e] rounded-xl flex flex-col md:flex-row items-center justify-between p-6 md:p-8 min-h-[140px]">
        {/* Background Illustration Placeholder (Left Side) */}
        <div className="absolute left-0 bottom-0 h-full w-1/3 hidden md:block opacity-80 pointer-events-none">
           {/* Replace this div with your building illustration image */}
           <div className="w-full h-full bg-gradient-to-r from-teal-800 to-transparent flex items-end">
              <Building2 className="text-teal-600 w-32 h-32 ml-4 mb-2 opacity-50" />
           </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center md:text-left md:ml-48 lg:ml-64">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Sell or Rent Your Property with Confidence
          </h2>
          <p className="text-teal-100 text-sm md:text-base">
            Connect with a trusted agent to secure the best deal, faster.
          </p>
        </div>

        {/* Button */}
        <button className="relative z-10 mt-4 md:mt-0 bg-white text-gray-900 px-6 py-3 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors">
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Find a TruBroker Banner */}
      <div className="bg-gradient-to-r from-[#0b2c2a] to-[#134b46] rounded-xl flex flex-col md:flex-row items-center justify-between p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
          
          {/* Avatar Stack */}
          <div className="flex -space-x-3">
            {/* Replace these img src with your actual agent photos */}
            <img className="w-10 h-10 rounded-full border-2 border-[#0b2c2a] z-40" src="https://i.pravatar.cc/150?img=1" alt="Agent" />
            <img className="w-10 h-10 rounded-full border-2 border-[#0b2c2a] z-30" src="https://i.pravatar.cc/150?img=2" alt="Agent" />
            <img className="w-10 h-10 rounded-full border-2 border-[#0b2c2a] z-20" src="https://i.pravatar.cc/150?img=3" alt="Agent" />
            <img className="w-10 h-10 rounded-full border-2 border-[#0b2c2a] z-10" src="https://i.pravatar.cc/150?img=4" alt="Agent" />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-white font-bold text-lg">Find a TruBroker™</h3>
            <p className="text-gray-300 text-xs md:text-sm">
              Find trusted agents awarded for their excellent performance
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-4 md:mt-0 bg-white text-gray-900 px-6 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors whitespace-nowrap">
          Find My Agent <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 3. Three Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        
        {/* Card 1: TruEstimate */}
        <div className="bg-[#eaf8f2] rounded-xl p-6 flex flex-col justify-between overflow-hidden relative min-h-[220px]">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">TruEstimate™</h3>
            <p className="text-gray-600 text-sm mb-4">Find out how much your property is worth</p>
            <button className="text-sm font-semibold text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
              Find out how much <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {/* Illustration Placeholder */}
          <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-[#d1f0e0] to-transparent flex justify-end items-end p-2 pointer-events-none">
             <Landmark className="text-green-600 w-24 h-24 opacity-30 mr-4" />
          </div>
        </div>

        {/* Card 2: Search 2.0 */}
        <div className="bg-[#eaf8f2] rounded-xl p-6 flex flex-col justify-between overflow-hidden relative min-h-[220px]">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Search 2.0</h3>
            <p className="text-gray-600 text-sm mb-4">Find homes by drive time</p>
            <button className="text-sm font-semibold text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
              Find homes <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {/* Illustration Placeholder */}
          <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-[#d1f0e0] to-transparent flex justify-end items-end p-2 pointer-events-none">
             <Car className="text-blue-600 w-24 h-24 opacity-30 mr-4" />
          </div>
        </div>

        {/* Card 3: Map View */}
        <div className="bg-[#eaf8f2] rounded-xl p-6 flex flex-col justify-between overflow-hidden relative min-h-[220px]">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Map View</h3>
            <p className="text-gray-600 text-sm mb-4">Search for properties in preferred areas using a map</p>
            <button className="text-sm font-semibold text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
              Search for properties <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          {/* Illustration Placeholder */}
          <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-[#d1f0e0] to-transparent flex justify-end items-end p-2 pointer-events-none">
             <Map className="text-green-600 w-24 h-24 opacity-30 mr-4" />
          </div>
        </div>

      </div>
    </section>
  );
}