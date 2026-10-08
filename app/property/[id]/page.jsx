'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  MapPin, Bed, Bath, Square, Calendar,
  Heart, Share2, ChevronLeft, ChevronRight,
  CheckCircle2, Phone, Mail, Building2,
  TrendingUp, Award, ShieldCheck, Star
} from 'lucide-react';
import { getPropertyById } from '@/app/data/properties';
import RegisterInterestModal from '@/app/components/RegisterInterestModal';

export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const property = getPropertyById(params.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If property not found
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F4ED] px-4">
        <Building2 className="w-16 h-16 text-[#F5A623] mb-4" />
        <h1 className="text-2xl font-bold text-[#171A1C] mb-2">Property Not Found</h1>
        <p className="text-[#59636B] mb-6 text-center">
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/new-projects"
          className="bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] font-bold px-6 py-3 rounded-xl"
        >
          Browse All Projects
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <>
      <div className="w-full bg-[#F7F4ED] min-h-screen">
        {/* ===== BREADCRUMB ===== */}
        <div className="w-full bg-white border-b border-[#59636B]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="text-xs text-[#59636B] flex items-center gap-1 flex-wrap">
              <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/new-projects" className="hover:text-[#F5A623] transition-colors">New Projects</Link>
              <span>/</span>
              <span className="text-[#171A1C] font-medium truncate">{property.title}</span>
            </div>
          </div>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* ===== LEFT: IMAGES + DETAILS ===== */}
            <div className="lg:col-span-2 space-y-6">

              {/* Image Gallery */}
              <div className="bg-white rounded-2xl border border-[#59636B]/15 overflow-hidden shadow-sm">
                {/* Main Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#59636B]/10">
                  <img
                    src={property.images[activeImageIndex]}
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#F5A623] text-[#171A1C] text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">
                    {property.status}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all shadow-md">
                      <Heart className="w-4 h-4 text-[#59636B] hover:text-[#F5A623] transition-colors" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all shadow-md">
                      <Share2 className="w-4 h-4 text-[#59636B] hover:text-[#F5A623] transition-colors" />
                    </button>
                  </div>

                  {/* Nav Arrows */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all shadow-md"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#171A1C]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all shadow-md"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5 text-[#171A1C]" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-[#171A1C]/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {activeImageIndex + 1} / {property.images.length}
                  </div>
                </div>

                {/* Thumbnail Row */}
                <div className="p-3 sm:p-4 flex gap-2 overflow-x-auto scrollbar-hide">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#F5A623] shadow-md'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Header */}
              <div className="bg-white rounded-2xl border border-[#59636B]/15 p-5 sm:p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#171A1C] tracking-tight mb-1">
                      {property.title}
                    </h1>
                    <p className="text-sm text-[#59636B] flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-[#F5A623]" /> {property.location}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-[#59636B]">Starting from</p>
                    <p className="text-2xl sm:text-3xl font-bold text-[#F5A623] tracking-tight">
                      {property.price}
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-5 border-t border-[#59636B]/15">
                  <div className="flex flex-col items-center text-center">
                    <Bed className="w-5 h-5 text-[#F5A623] mb-1.5" />
                    <p className="text-xs text-[#59636B]">Configuration</p>
                    <p className="text-sm font-bold text-[#171A1C]">{property.beds}</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Bath className="w-5 h-5 text-[#F5A623] mb-1.5" />
                    <p className="text-xs text-[#59636B]">Bathrooms</p>
                    <p className="text-sm font-bold text-[#171A1C]">{property.baths}</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Square className="w-5 h-5 text-[#F5A623] mb-1.5" />
                    <p className="text-xs text-[#59636B]">Area</p>
                    <p className="text-sm font-bold text-[#171A1C]">{property.area}</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Calendar className="w-5 h-5 text-[#F5A623] mb-1.5" />
                    <p className="text-xs text-[#59636B]">Possession</p>
                    <p className="text-sm font-bold text-[#171A1C]">{property.handover}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl border border-[#59636B]/15 p-5 sm:p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#171A1C] mb-3 tracking-tight">
                  About {property.title}
                </h2>
                <p className="text-sm text-[#59636B] leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl border border-[#59636B]/15 p-5 sm:p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#171A1C] mb-4 tracking-tight">Key Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[#171A1C]">
                      <CheckCircle2 className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-2xl border border-[#59636B]/15 p-5 sm:p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#171A1C] mb-4 tracking-tight">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#59636B] bg-[#F7F4ED] px-3 py-2 rounded-lg border border-[#59636B]/10">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                      <span className="truncate">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ===== RIGHT: STICKY SIDEBAR ===== */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">

                {/* Agent Card */}
                <div className="bg-white rounded-2xl border border-[#59636B]/15 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-[#F5A623]/30"
                    />
                    <div>
                      <p className="text-xs text-[#59636B]">Listed by</p>
                      <p className="font-bold text-[#171A1C]">{property.agent.name}</p>
                      <p className="text-xs text-[#59636B]">{property.agent.company}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/30 text-[#171A1C] font-bold py-3 rounded-xl transition-all active:scale-[0.98] text-sm"
                    >
                      <Mail className="w-4 h-4" /> Register Interest
                    </button>
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="w-full flex items-center justify-center gap-2 border border-[#59636B]/20 hover:bg-[#F7F4ED] text-[#171A1C] font-bold py-3 rounded-xl transition-all text-sm"
                    >
                      <Phone className="w-4 h-4" /> Call Now
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white rounded-2xl border border-[#59636B]/15 p-5 shadow-sm">
                  <h3 className="font-bold text-[#171A1C] mb-3 text-sm">Why Choose Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#F5A623]/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#171A1C]">RERA Verified</p>
                        <p className="text-[10px] text-[#59636B]">RERA: {property.rera}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#F5A623]/10 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-[#F5A623]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#171A1C]">Verified Partner</p>
                        <p className="text-[10px] text-[#59636B]">Trusted by 10,000+ buyers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#F5A623]/10 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4 text-[#F5A623]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#171A1C]">High Growth Area</p>
                        <p className="text-[10px] text-[#59636B]">+8.5% YoY appreciation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-2xl border border-[#59636B]/15 p-5 shadow-sm">
                  <h3 className="font-bold text-[#171A1C] mb-3 text-sm">Quick Info</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#59636B]">Property Type</span>
                      <span className="font-semibold text-[#171A1C]">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#59636B]">City</span>
                      <span className="font-semibold text-[#171A1C]">{property.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#59636B]">Status</span>
                      <span className="font-semibold text-[#171A1C]">{property.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#59636B]">Possession</span>
                      <span className="font-semibold text-[#171A1C]">{property.handover}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Register Interest Modal */}
      <RegisterInterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={property}
        whatsappNumber="919999999999"
      />
    </>
  );
}