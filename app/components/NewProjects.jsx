'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import RegisterInterestModal from './RegisterInterestModal';
import { properties } from '@/app/data/properties';

const states = [
  'All',
  'Mumbai',
  'Delhi NCR',
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Jaipur',
  'Haryana NCR',
  'Jewar',
  'Dholera',
  'Uttarakhand',
  'Vrindavan',
];

export default function NewProjects() {
  const [activeState, setActiveState] = useState('All');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // ===== Modal State =====
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter by city
  const filteredProjects =
    activeState === 'All'
      ? properties
      : properties.filter((p) => p.city === activeState);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, [activeState]);

  // Re-check scroll whenever filter changes
  useEffect(() => {
    const timer = setTimeout(checkScrollPosition, 100);
    return () => clearTimeout(timer);
  }, [filteredProjects]);

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

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171A1C] text-center mb-8 sm:mb-10 tracking-tight">
          Browse New Projects in India
        </h2>

        {/* State Tabs — horizontal scroll on mobile */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="w-full sm:w-auto -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide">
            <div className="flex bg-[#F7F4ED] border border-[#59636B]/15 rounded-2xl p-1 shadow-sm w-max sm:mx-auto">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => setActiveState(state)}
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-xl transition-all ${
                    activeState === state
                      ? 'bg-[#171A1C] shadow-md text-[#F5A623]'
                      : 'text-[#59636B] hover:text-[#171A1C] hover:bg-white'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group">
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute left-[-20px] top-1/2 -translate-y-1/2 bg-[#F7F4ED] rounded-full p-3 shadow-xl border border-[#59636B]/15 hover:bg-white hover:border-[#F5A623] hover:scale-110 transition-all z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-[#171A1C]" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-[320px] bg-[#F7F4ED] rounded-2xl border border-[#59636B]/15 shadow-lg shadow-[#171A1C]/5 hover:shadow-2xl hover:shadow-[#F5A623]/10 hover:-translate-y-1 hover:border-[#F5A623]/30 overflow-hidden flex flex-col snap-start transition-all duration-300"
              >
                {/* Image — clickable */}
                <div className="p-2 pb-0">
                  <Link href={`/property/${project.id}`} className="block">
                    <img
                      src={project.images?.[0]}
                      alt={project.title}
                      className="w-full h-44 sm:h-48 object-cover rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </Link>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-[#171A1C] tracking-tight line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#59636B] mb-2">
                    {project.propertyType}
                  </p>

                  <div className="flex items-start gap-1.5 text-[#59636B] text-xs mb-4">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#F5A623]" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  {/* Price & Status */}
                  <div className="flex bg-white rounded-xl border border-[#F5A623]/25 mb-4 overflow-hidden">
                    <div className="flex-1 p-2.5 text-center border-r border-[#F5A623]/25">
                      <p className="text-[10px] text-[#59636B] mb-0.5">Starting Price</p>
                      <p className="text-xs sm:text-sm font-bold text-[#F5A623] line-clamp-1">
                        {project.price}
                      </p>
                    </div>
                    <div className="flex-1 p-2.5 text-center">
                      <p className="text-[10px] text-[#59636B] mb-0.5">Status</p>
                      <p className="text-xs sm:text-sm font-bold text-[#171A1C] line-clamp-1">
                        {project.handover}
                      </p>
                    </div>
                  </div>

                  {/* Two buttons — Enquire + View Details */}
                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => openModal(project)}
                      className="flex-1 bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enquire
                    </button>
                    <Link
                      href={`/property/${project.id}`}
                      className="flex-1 border border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all text-center active:scale-[0.98]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty state — agar kisi city me property na ho */}
            {filteredProjects.length === 0 && (
              <div className="w-full text-center py-16 text-[#59636B]">
                <p className="text-sm font-medium">
                  No projects available in {activeState}.
                </p>
                <button
                  onClick={() => setActiveState('All')}
                  className="mt-4 text-[#F5A623] font-bold hover:underline"
                >
                  Show all projects
                </button>
              </div>
            )}
          </div>

          {canScrollRight && filteredProjects.length > 0 && (
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#F7F4ED] rounded-full p-3 shadow-xl border border-[#59636B]/15 hover:bg-white hover:border-[#F5A623] hover:scale-110 transition-all z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-[#171A1C]" />
            </button>
          )}
        </div>

        {/* View all link */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <Link
            href="/new-projects"
            style={{ color: "#F5A623" }}
            className="bg-[#171A1C] px-5 sm:px-6 py-3 rounded-2xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-[#171A1C]/30"
          >
            View all projects in {activeState}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Reusable Modal */}
      <RegisterInterestModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        whatsappNumber="919999999999"
      />
    </>
  );
}