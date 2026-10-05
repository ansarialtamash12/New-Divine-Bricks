'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';

// Mock Data for the projects
const projectsData = [
  {
    id: 1,
    title: 'Marquis One',
    type: 'Apartments',
    location: 'Marquis One, Arjan, Dubai',
    launchPrice: 'AED 700K',
    handover: 'Q4 2028',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 2,
    title: 'Nautis Residences',
    type: 'Apartments & Townhouses',
    location: 'Nautis Residences, Dubai Islands, Dubai',
    launchPrice: 'AED 1.8M',
    handover: 'Q3 2027',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 3,
    title: 'Grove Ridge',
    type: 'Apartments & Townhouses',
    location: 'Grove Ridge, Emaar South, Dubai South, D...',
    launchPrice: 'AED 1.27M',
    handover: 'Q3 2029',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 4,
    title: 'Nexara Tower',
    type: 'Apartments',
    location: 'Nexara Tower, JVC, Dubai',
    launchPrice: 'AED 1.1M',
    handover: 'Q2 2027',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 5,
    title: 'Sobha Hartland II',
    type: 'Apartments & Villas',
    location: 'Sobha Hartland, MBR City, Dubai',
    launchPrice: 'AED 1.5M',
    handover: 'Q4 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 6,
    title: 'Damac Lagoons',
    type: 'Townhouses & Villas',
    location: 'Damac Lagoons, Dubai',
    launchPrice: 'AED 2.1M',
    handover: 'Q2 2027',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 7,
    title: 'Azizi Venice',
    type: 'Apartments',
    location: 'Azizi Venice, Dubai South, Dubai',
    launchPrice: 'AED 1.2M',
    handover: 'Q1 2028',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    id: 8,
    title: 'Emaar The Oasis',
    type: 'Villas',
    location: 'Emaar The Oasis, Dubai Land, Dubai',
    launchPrice: 'AED 4.5M',
    handover: 'Q4 2027',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=300',
  },
];

const emirates = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Umm Al Quwain'];

export default function NewProjects() {
  const [activeEmirate, setActiveEmirate] = useState('Dubai');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Check if we can scroll left (more than 0px scrolled)
      setCanScrollLeft(scrollLeft > 0);
      // Check if we can scroll right (not at the very end, with a small buffer for rounding)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  // Check initial scroll position on mount
  useEffect(() => {
    checkScrollPosition();
    // Add resize listener to re-check if window size changes
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Browse New Projects in UAE
      </h2>

      {/* Emirate Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-white border border-gray-200 rounded-lg p-1 overflow-x-auto shadow-sm">
          {emirates.map((emirate) => (
            <button
              key={emirate}
              onClick={() => setActiveEmirate(emirate)}
              className={`px-5 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
                activeEmirate === emirate
                  ? 'bg-[#e8f8f0] text-[#00a651]'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {emirate}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Carousel Container */}
      <div className="relative group">
        
        {/* LEFT SCROLL ARROW (Conditionally Rendered) */}
        {canScrollLeft && (
          <button 
            onClick={scrollLeft}
            className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}

        {/* Scrollable List */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="min-w-[300px] md:min-w-[320px] max-w-[320px] bg-white rounded-xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col snap-start"
            >
              {/* Project Image */}
              <div className="p-2 pb-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* Project Details */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{project.type}</p>
                
                {/* Location */}
                <div className="flex items-start gap-1 text-gray-500 text-xs mb-4">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span className="line-clamp-1">{project.location}</span>
                </div>

                {/* Pricing & Handover Box */}
                <div className="flex bg-gray-50 rounded-md border border-gray-100 mb-4">
                  <div className="flex-1 p-2 text-center border-r border-gray-100">
                    <p className="text-[10px] text-gray-500 mb-0.5">Launch Price</p>
                    <p className="text-sm font-semibold text-[#00a651]">{project.launchPrice}</p>
                  </div>
                  <div className="flex-1 p-2 text-center">
                    <p className="text-[10px] text-gray-500 mb-0.5">Handover</p>
                    <p className="text-sm font-semibold text-[#00a651]">{project.handover}</p>
                  </div>
                </div>

                {/* Action Button */}
                <button className="mt-auto w-full bg-[#e8f8f0] hover:bg-[#d1f0e0] text-[#00a651] py-2.5 rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Register Interest
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SCROLL ARROW (Conditionally Rendered) */}
        {canScrollRight && (
          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <Link 
          href={`/projects/${activeEmirate.toLowerCase().replace(' ', '-')}`}
          className="bg-[#f0f4f8] hover:bg-[#e2e8f0] text-[#0e4b3e] px-6 py-2.5 rounded-md font-semibold text-sm flex items-center gap-2 transition-colors"
        >
          View all projects in {activeEmirate}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

    </section>
  );
}