'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, ChevronDown, Search, Filter, 
  Building2, Calendar, Bed, Bath, Square,
  Heart, CheckCircle2, Star, ArrowRight
} from 'lucide-react';
import RegisterInterestModal from '@/app/components/RegisterInterestModal';
import { properties } from '@/app/data/properties';

const tabs = ['Mumbai', 'Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Jaipur'];

export default function NewProjectsPage() {
  const [activeTab, setActiveTab] = useState('Mumbai');

  // ===== Modal State =====
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Filter properties by selected city tab
  const filteredProjects = properties.filter((p) => p.city === activeTab);

  return (
    <>
      <div className="w-full bg-[#F7F4ED] flex flex-col font-sans min-h-screen">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="w-full bg-white border-b border-[#59636B]/15 py-5 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="text-xs text-[#59636B] mb-2 flex items-center gap-1">
              <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#171A1C] font-medium">New Projects</span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#171A1C] tracking-tight">
                New Projects in India
              </h1>
              
              {/* Tabs — horizontal scroll on mobile */}
              <div className="w-full lg:w-auto -mx-4 lg:mx-0 px-4 lg:px-0 overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 bg-[#F7F4ED] p-1 rounded-lg w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
                        activeTab === tab ? 'bg-[#171A1C] text-[#F5A623] shadow' : 'text-[#59636B] hover:text-[#171A1C]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* ===== LEFT SIDE: PROPERTY LISTINGS ===== */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">
              
              {/* Filter Bar Top */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-lg border border-[#59636B]/15 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-[#59636B]">Sort by:</span>
                  <div className="relative">
                    <select className="appearance-none bg-[#F7F4ED] border border-[#59636B]/20 rounded-md py-1.5 pl-3 pr-8 text-xs sm:text-sm font-medium text-[#171A1C] focus:outline-none focus:ring-1 focus:ring-[#F5A623] focus:border-[#F5A623]">
                      <option>Featured</option>
                      <option>Price (Low to High)</option>
                      <option>Price (High to Low)</option>
                      <option>Newest</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-[#59636B] pointer-events-none" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#59636B]">
                  Showing 1-{filteredProjects.length} of {properties.length}
                </p>
              </div>

              {/* Empty State */}
              {filteredProjects.length === 0 && (
                <div className="bg-white rounded-xl border border-[#59636B]/15 p-10 text-center">
                  <Building2 className="w-12 h-12 text-[#59636B]/40 mx-auto mb-4" />
                  <p className="text-[#59636B] font-medium">
                    No projects available in {activeTab}.
                  </p>
                  <button
                    onClick={() => setActiveTab('Mumbai')}
                    className="mt-4 text-[#F5A623] font-bold hover:underline"
                  >
                    Show Mumbai projects
                  </button>
                </div>
              )}

              {/* Property Cards List */}
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl border border-[#59636B]/15 shadow-sm hover:shadow-lg hover:shadow-[#F5A623]/10 hover:border-[#F5A623]/30 transition-all overflow-hidden flex flex-col md:flex-row">
                  
                  {/* Image Section — Clickable */}
                  <Link
                    href={`/property/${project.id}`}
                    className="relative w-full md:w-64 lg:w-72 h-48 md:h-auto md:min-h-[200px] bg-[#59636B]/10 flex-shrink-0 block"
                  >
                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover hover:opacity-95 transition-opacity"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 bg-[#F5A623] text-[#171A1C] text-[10px] font-bold px-2 py-1 rounded">
                      {project.status}
                    </div>
                    {/* Heart Icon */}
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all"
                    >
                      <Heart className="w-4 h-4 text-[#59636B] hover:text-[#F5A623] transition-colors" />
                    </button>
                  </Link>

                  {/* Content Section */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h2 className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight">
                          {project.title}
                        </h2>
                        <span className="text-[10px] sm:text-xs bg-[#F5A623]/10 text-[#F5A623] px-2 py-1 rounded flex items-center gap-1 font-semibold whitespace-nowrap">
                          <Star className="w-3 h-3" /> Featured
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-[#59636B] flex items-center gap-1 mb-3">
                        <MapPin className="w-3 h-3 text-[#F5A623] shrink-0" /> {project.location}
                      </p>

                      <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-[#59636B] mb-4">
                        <span className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5A623]" /> {project.beds}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F5A623]" /> {project.handover}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-[#59636B]/15 pt-3 sm:pt-4">
                      <div>
                        <p className="text-[10px] sm:text-xs text-[#59636B]">Starting from</p>
                        <p className="text-base sm:text-lg font-bold text-[#F5A623] line-clamp-1">
                          {project.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] sm:text-xs text-[#59636B]">Agent</p>
                        <p className="text-xs sm:text-sm font-medium text-[#171A1C]">
                          {project.agent?.company || 'Divine Realtors'}
                        </p>
                      </div>
                    </div>

                    {/* ✅ Mobile CTA */}
                    <div className="flex md:hidden gap-2 mt-4">
                      <button
                        onClick={() => openModal(project)}
                        className="flex-1 bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/30 text-[#171A1C] text-xs font-bold py-2.5 rounded-lg transition-all active:scale-95"
                      >
                        Register Interest
                      </button>
                      <Link
                        href={`/property/${project.id}`}
                        className="flex-1 border border-[#F5A623] text-[#F5A623] text-xs font-bold py-2.5 rounded-lg hover:bg-[#F5A623]/10 transition-colors text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>

                  {/* ✅ Desktop CTA */}
                  <div className="hidden md:flex flex-col justify-center p-4 border-l border-[#59636B]/15 bg-[#F7F4ED] w-40">
                    <button
                      onClick={() => openModal(project)}
                      className="w-full bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/30 text-[#171A1C] text-sm font-bold py-2.5 rounded-lg transition-all active:scale-95 mb-2"
                    >
                      Register Interest
                    </button>
                    <Link
                      href={`/property/${project.id}`}
                      className="w-full border border-[#F5A623] text-[#F5A623] text-sm font-bold py-2.5 rounded-lg hover:bg-[#F5A623]/10 transition-colors text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              {filteredProjects.length > 0 && (
                <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                  <button className="w-9 h-9 rounded border border-[#F5A623] flex items-center justify-center text-sm text-[#171A1C] font-semibold bg-[#F5A623]">1</button>
                  <button className="w-9 h-9 rounded border border-[#59636B]/20 flex items-center justify-center text-sm text-[#171A1C] hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 transition-all">2</button>
                  <button className="w-9 h-9 rounded border border-[#59636B]/20 flex items-center justify-center text-sm text-[#171A1C] hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 transition-all">3</button>
                  <button className="w-9 h-9 rounded border border-[#59636B]/20 flex items-center justify-center text-sm text-[#171A1C] hover:bg-[#F5A623]/10 hover:border-[#F5A623]/50 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* ===== RIGHT SIDE: FILTERS SIDEBAR ===== */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              
              {/* Search Widget */}
              <div className="bg-white p-4 rounded-xl border border-[#59636B]/15 shadow-sm">
                <h3 className="font-bold text-[#171A1C] mb-3 tracking-tight text-sm sm:text-base">Search Projects</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#59636B]" />
                  <input 
                    type="text" 
                    placeholder="Project name..." 
                    className="w-full pl-9 pr-3 py-2 border border-[#59636B]/20 rounded-md text-sm text-[#171A1C] placeholder-[#59636B]/70 focus:outline-none focus:ring-1 focus:ring-[#F5A623] focus:border-[#F5A623] bg-white" 
                  />
                </div>
              </div>

              {/* Price Filter */}
              <div className="bg-white p-4 rounded-xl border border-[#59636B]/15 shadow-sm">
                <h3 className="font-bold text-[#171A1C] mb-3 flex items-center gap-2 tracking-tight text-sm sm:text-base">
                  <Filter className="w-4 h-4 text-[#F5A623]" /> Price Range
                </h3>
                <div className="space-y-3">
                  {['Under ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', 'Above ₹2Cr'].map((range) => (
                    <label key={range} className="flex items-center gap-2 text-sm text-[#59636B] cursor-pointer hover:text-[#171A1C] transition-colors">
                      <input type="checkbox" className="accent-[#F5A623] rounded" /> {range}
                    </label>
                  ))}
                </div>
              </div>

              {/* BHK Filter */}
              <div className="bg-white p-4 rounded-xl border border-[#59636B]/15 shadow-sm">
                <h3 className="font-bold text-[#171A1C] mb-3 flex items-center gap-2 tracking-tight text-sm sm:text-base">
                  <Bed className="w-4 h-4 text-[#F5A623]" /> BHK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['1 RK', '1', '2', '3', '4', '5+'].map((bed) => (
                    <button key={bed} className="px-3 py-1.5 border border-[#59636B]/20 rounded-full text-xs font-medium text-[#59636B] hover:border-[#F5A623] hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors">
                      {bed}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Agents Widget */}
              <div className="bg-white p-4 rounded-xl border border-[#59636B]/15 shadow-sm">
                <h3 className="font-bold text-[#171A1C] mb-3 tracking-tight text-sm sm:text-base">Featured Agents</h3>
                <div className="space-y-3">
                  {['Rajesh Sharma', 'Priya Patel', 'Anjali Mehta'].map((name, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#F5A623]/10 rounded-full flex items-center justify-center text-[#F5A623] shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#171A1C]">{name}</p>
                        <p className="text-xs text-[#59636B]">Verified Partner</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </main>

        {/* ================= BOTTOM LINKS SECTION ================= */}
        <section className="w-full bg-white border-t border-[#59636B]/15 py-10 sm:py-12 mt-6 sm:mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h3 className="font-bold text-[#171A1C] mb-3 tracking-tight text-sm sm:text-base">Top Searches for Apartments</h3>
                <ul className="space-y-2 text-sm text-[#59636B]">
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Flats for sale in Mumbai</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Flats for sale in Delhi NCR</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Flats for sale in Bangalore</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Flats for sale in Pune</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#171A1C] mb-3 tracking-tight text-sm sm:text-base">Top Searches for Villas</h3>
                <ul className="space-y-2 text-sm text-[#59636B]">
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Villas for sale in Mumbai</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Villas for sale in Delhi NCR</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Villas for sale in Bangalore</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Villas for sale in Hyderabad</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#171A1C] mb-3 tracking-tight text-sm sm:text-base">Top Searches for Row Houses</h3>
                <ul className="space-y-2 text-sm text-[#59636B]">
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Row Houses for sale in Mumbai</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Row Houses for sale in Pune</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Row Houses for sale in Bangalore</Link></li>
                  <li><Link href="#" className="hover:text-[#F5A623] transition-colors">Row Houses for sale in Jaipur</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ✅ Reusable Modal */}
      <RegisterInterestModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        whatsappNumber="919999999999"
      />
    </>
  );
}