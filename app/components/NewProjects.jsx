'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import RegisterInterestModal from './RegisterInterestModal';

const projectsData = [
  { id: 1, title: 'Kedia The Sezasthan', type: 'Flats & Villas', location: 'Ajmer Road, Jaipur', launchPrice: '₹70L – ₹1.75Cr', handover: 'Ready / Near Ready', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 2, title: 'ARG Puram', type: 'Residential Plots', location: 'Agra Road, Jaipur', launchPrice: '₹34L+', handover: 'Ready', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 3, title: 'Green Leaf Residences', type: 'Flats & Duplex', location: 'Shyam Nagar, Jaipur', launchPrice: '₹2.42Cr+', handover: 'Ready', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 4, title: 'Alokit Park Avenue', type: 'Residential Plots', location: 'Mahlan, Jaipur', launchPrice: '₹12.5L+', handover: 'Ready', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 5, title: 'J S Osiyan Habitat', type: 'Residential Plots', location: 'Jhajjar, Haryana NCR', launchPrice: '₹63.59L – ₹99.59L', handover: 'Ready', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 6, title: 'HCBS Glen Wood', type: 'Residential Plots', location: 'Jhajjar, Haryana NCR', launchPrice: '₹74.87L – ₹1.06Cr', handover: 'Ready', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 7, title: 'Vedmaan South City Greens', type: 'Residential Plots', location: 'Jhajjar, Haryana NCR', launchPrice: '₹42.74L – ₹85.49L', handover: 'Ready', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 8, title: 'AOne City', type: 'Residential & Commercial Plots', location: 'Jewar, Near Noida Airport', launchPrice: '₹25,000 / sq yd', handover: 'Ready', image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 9, title: 'Rama Enclave', type: 'Residential Plots', location: 'Jewar, Yamuna Expressway', launchPrice: '₹14,500 / sq yd', handover: 'Ready', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 10, title: 'Dholera Lakeside Residency', type: 'Residential Plots', location: 'Dholera Smart City, Gujarat', launchPrice: '₹12.23L+', handover: 'Dec 2026', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 11, title: 'Dholera Global City', type: 'Residential Plots', location: 'Dholera Smart City, Gujarat', launchPrice: '₹10L+', handover: 'Under Construction', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 12, title: 'Sidhyansh Shree Ved City', type: 'Residential Plots', location: 'Haridwar, Uttarakhand', launchPrice: '₹17.6L', handover: 'Ready', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 13, title: 'Himalaya Terraces', type: 'Flats & Villas', location: 'Haridwar, Uttarakhand', launchPrice: '₹75.3L – ₹1.56Cr', handover: 'Under Construction', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 14, title: 'Windlass River Valley', type: 'Flats & Plots', location: 'Dehradun, Uttarakhand', launchPrice: '₹34.8L+', handover: 'Ready', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 15, title: 'Platinum Township', type: 'Residential Plots', location: 'Dehradun, Uttarakhand', launchPrice: '₹51.3L+', handover: 'Ready', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 16, title: 'Sunhil Shri Radha Rani Vatika', type: 'Residential Plots', location: 'Vrindavan, UP', launchPrice: '₹10L – ₹49.99L', handover: 'Ready', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 17, title: 'Om Shri Vrinda Orchids', type: 'Residential Plots', location: 'Sunrakh Bangar, Vrindavan', launchPrice: '₹66.87L – ₹1.25Cr', handover: 'Under Construction', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 18, title: 'Yamuna Residency', type: 'Residential Plots', location: 'Panigaon, Vrindavan Parikrama Marg', launchPrice: '₹25L+', handover: 'Ready', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 19, title: 'Braj Shree Ji Cottage & Farms', type: 'Farmhouse & Plots', location: 'Vrindavan, UP', launchPrice: '₹18L – ₹27L', handover: 'Ready', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=400&h=300' },
];

const states = ['All', 'Jaipur', 'Haryana NCR', 'Jewar', 'Dholera', 'Uttarakhand', 'Vrindavan'];

export default function NewProjects() {
  const [activeState, setActiveState] = useState('All');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  // ===== Modal State =====
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeState === 'All'
      ? projectsData
      : projectsData.filter((p) =>
          p.location.toLowerCase().includes(activeState.toLowerCase())
        );

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
      <section className="w-full max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#171A1C] text-center mb-10 tracking-tight">
          Browse New Projects in India
        </h2>

        <div className="flex justify-center mb-10">
          <div className="flex bg-[#F7F4ED] border border-[#59636B]/15 rounded-2xl p-1 overflow-x-auto shadow-sm">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setActiveState(state)}
                className={`px-5 py-2.5 text-sm font-semibold whitespace-nowrap rounded-xl transition-all ${
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
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="min-w-[300px] md:min-w-[320px] max-w-[320px] bg-[#F7F4ED] rounded-2xl border border-[#59636B]/15 shadow-lg shadow-[#171A1C]/5 hover:shadow-2xl hover:shadow-[#F5A623]/10 hover:-translate-y-1 hover:border-[#F5A623]/30 overflow-hidden flex flex-col snap-start transition-all duration-300"
              >
                <div className="p-2 pb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#171A1C] tracking-tight">{project.title}</h3>
                  <p className="text-xs text-[#59636B] mb-2">{project.type}</p>

                  <div className="flex items-start gap-1.5 text-[#59636B] text-xs mb-4">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#F5A623]" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  <div className="flex bg-white rounded-xl border border-[#F5A623]/25 mb-4 overflow-hidden">
                    <div className="flex-1 p-2.5 text-center border-r border-[#F5A623]/25">
                      <p className="text-[10px] text-[#59636B] mb-0.5">Starting Price</p>
                      <p className="text-sm font-bold text-[#F5A623]">{project.launchPrice}</p>
                    </div>
                    <div className="flex-1 p-2.5 text-center">
                      <p className="text-[10px] text-[#59636B] mb-0.5">Status</p>
                      <p className="text-sm font-bold text-[#171A1C]">{project.handover}</p>
                    </div>
                  </div>

                  {/* ✅ Register Interest — opens Modal */}
                  <button
                    onClick={() => openModal(project)}
                    className="mt-auto w-full bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Register Interest
                  </button>
                </div>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#F7F4ED] rounded-full p-3 shadow-xl border border-[#59636B]/15 hover:bg-white hover:border-[#F5A623] hover:scale-110 transition-all z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-[#171A1C]" />
            </button>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/new-projects"
            style={{ color: "#F5A623" }}
            className="bg-[#171A1C] px-6 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2 transition-all"
          >
            View all projects in {activeState}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

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