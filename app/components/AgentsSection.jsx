// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import {
//   Star,
//   MapPin,
//   Building2,
//   CheckCircle2,
//   ArrowRight,
// } from 'lucide-react';

// export default function AgentsSection() {
//   const agents = [
//     {
//       initials: 'RS',
//       name: 'Rajesh Sharma',
//       agency: 'Skyline Realty',
//       rating: 4.9,
//       reviews: 129,
//       experience: 8,
//       listings: 24,
//       city: 'Mumbai',
//       specialties: 'Waterfront Apartments · Investor Units',
//     },
//     {
//       initials: 'PP',
//       name: 'Priya Patel',
//       agency: 'Urban Nest Properties',
//       rating: 4.8,
//       reviews: 164,
//       experience: 10,
//       listings: 32,
//       city: 'Bangalore',
//       specialties: 'Downtown Residences · Off-Plan Projects',
//     },
//     {
//       initials: 'AK',
//       name: 'Arjun Kapoor',
//       agency: 'Prime Estates',
//       rating: 4.9,
//       reviews: 142,
//       experience: 12,
//       listings: 41,
//       city: 'Delhi NCR',
//       specialties: 'Luxury Villas · Investment Properties',
//     },
//     {
//       initials: 'SM',
//       name: 'Sneha Menon',
//       agency: 'Coastal Homes Realty',
//       rating: 4.7,
//       reviews: 96,
//       experience: 7,
//       listings: 18,
//       city: 'Hyderabad',
//       specialties: 'Family Apartments · Gated Communities',
//     },
//   ];

//   return (
//     <section className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F7F4ED' }}>
//       <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

//         {/* ===== Header ===== */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
//           <div>
//             {/* Eyebrow */}
//             <div className="flex items-center gap-3 mb-4">
//               <span className="w-6 h-[2px]" style={{ backgroundColor: '#F5A623' }} />
//               <span
//                 className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase"
//                 style={{ color: '#F5A623' }}
//               >
//                 Agents
//               </span>
//             </div>

//             {/* Heading */}
//             <h2
//               className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight"
//               style={{ color: '#171A1C' }}
//             >
//               Work with a real estate expert
//             </h2>
//           </div>

//           {/* All Agents Link */}
//           <Link
//             href="/find-agent"
//             className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 self-start sm:self-auto"
//             style={{ color: '#F5A623' }}
//           >
//             All Agents <ArrowRight className="w-4 h-4" />
//           </Link>
//         </div>

//         {/* ===== Agent Cards Grid ===== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {agents.map((agent, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl border border-[#E8E2D5] p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(23,26,28,0.1)]"
//             >
//               {/* ===== Top: Avatar + Info ===== */}
//               <div className="flex items-start gap-4 mb-5">
//                 {/* Avatar Circle */}
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
//                   style={{ backgroundColor: '#171A1C' }}
//                 >
//                   <span
//                     className="text-sm font-bold tracking-wide"
//                     style={{ color: '#F5A623' }}
//                   >
//                     {agent.initials}
//                   </span>
//                 </div>

//                 {/* Name + Agency + Verified */}
//                 <div className="min-w-0 flex-1">
//                   <h3
//                     className="text-sm font-bold tracking-tight mb-0.5 truncate"
//                     style={{ color: '#171A1C' }}
//                   >
//                     {agent.name}
//                   </h3>
//                   <p
//                     className="text-xs mb-1.5 truncate"
//                     style={{ color: '#59636B' }}
//                   >
//                     {agent.agency}
//                   </p>
//                   <div className="flex items-center gap-1">
//                     <CheckCircle2
//                       className="w-3.5 h-3.5 shrink-0"
//                       style={{ color: '#F5A623' }}
//                       strokeWidth={2}
//                     />
//                     <span
//                       className="text-[11px] font-semibold"
//                       style={{ color: '#F5A623' }}
//                     >
//                       Verified Agent
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* ===== Stats Row ===== */}
//               <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E2D5]">
//                 {/* Rating */}
//                 <div className="flex flex-col items-center flex-1">
//                   <div className="flex items-center gap-1 mb-0.5">
//                     <Star
//                       className="w-3.5 h-3.5 fill-current"
//                       style={{ color: '#F5A623' }}
//                       strokeWidth={1.5}
//                     />
//                     <span
//                       className="text-sm font-bold tracking-tight"
//                       style={{ color: '#171A1C' }}
//                     >
//                       {agent.rating}
//                     </span>
//                   </div>
//                   <span
//                     className="text-[10px] font-medium"
//                     style={{ color: '#59636B' }}
//                   >
//                     {agent.reviews} reviews
//                   </span>
//                 </div>

//                 {/* Experience */}
//                 <div className="flex flex-col items-center flex-1 border-l border-[#E8E2D5]">
//                   <span
//                     className="text-sm font-bold tracking-tight mb-0.5"
//                     style={{ color: '#171A1C' }}
//                   >
//                     {agent.experience}
//                   </span>
//                   <span
//                     className="text-[10px] font-medium"
//                     style={{ color: '#59636B' }}
//                   >
//                     Years exp.
//                   </span>
//                 </div>

//                 {/* Listings */}
//                 <div className="flex flex-col items-center flex-1 border-l border-[#E8E2D5]">
//                   <span
//                     className="text-sm font-bold tracking-tight mb-0.5"
//                     style={{ color: '#171A1C' }}
//                   >
//                     {agent.listings}
//                   </span>
//                   <span
//                     className="text-[10px] font-medium"
//                     style={{ color: '#59636B' }}
//                   >
//                     Listings
//                   </span>
//                 </div>
//               </div>

//               {/* ===== Location + Specialties ===== */}
//               <div className="space-y-3 mb-5 flex-1">
//                 {/* Location */}
//                 <div className="flex items-start gap-2">
//                   <MapPin
//                     className="w-3.5 h-3.5 shrink-0 mt-0.5"
//                     style={{ color: '#59636B' }}
//                     strokeWidth={1.8}
//                   />
//                   <span
//                     className="text-xs font-medium"
//                     style={{ color: '#59636B' }}
//                   >
//                     {agent.city}
//                   </span>
//                 </div>

//                 {/* Specialties */}
//                 <div className="flex items-start gap-2">
//                   <Building2
//                     className="w-3.5 h-3.5 shrink-0 mt-0.5"
//                     style={{ color: '#59636B' }}
//                     strokeWidth={1.8}
//                   />
//                   <span
//                     className="text-xs leading-relaxed"
//                     style={{ color: '#59636B' }}
//                   >
//                     {agent.specialties}
//                   </span>
//                 </div>
//               </div>

//               {/* ===== Buttons ===== */}
//               <div className="flex gap-2">
//                 <Link
//                   href="/find-agent"
//                   className="flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95"
//                   style={{
//                     backgroundColor: '#171A1C',
//                     color: '#FFFFFF',
//                   }}
//                 >
//                   Contact Agent
//                 </Link>
//                 <Link
//                   href="/find-agent"
//                   className="flex-1 text-center py-2.5 rounded-xl text-xs font-bold border transition-all active:scale-95 hover:bg-[#F7F4ED]"
//                   style={{
//                     borderColor: '#E8E2D5',
//                     color: '#171A1C',
//                     backgroundColor: '#FFFFFF',
//                   }}
//                 >
//                   View Profile
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



'use client';

import React from 'react';
import Link from 'next/link';
import {
  Star,
  MapPin,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function AgentsSection() {
  const agents = [
    {
      initials: 'RS',
      name: 'Rajesh Sharma',
      agency: 'Skyline Realty',
      rating: 4.9,
      reviews: 129,
      experience: 8,
      listings: 24,
      city: 'Mumbai',
      specialties: 'Waterfront Apartments · Investor Units',
    },
    {
      initials: 'PP',
      name: 'Priya Patel',
      agency: 'Urban Nest Properties',
      rating: 4.8,
      reviews: 164,
      experience: 10,
      listings: 32,
      city: 'Bangalore',
      specialties: 'Downtown Residences · Off-Plan Projects',
    },
    {
      initials: 'AK',
      name: 'Arjun Kapoor',
      agency: 'Prime Estates',
      rating: 4.9,
      reviews: 142,
      experience: 12,
      listings: 41,
      city: 'Delhi NCR',
      specialties: 'Luxury Villas · Investment Properties',
    },
    {
      initials: 'SM',
      name: 'Sneha Menon',
      agency: 'Coastal Homes Realty',
      rating: 4.7,
      reviews: 96,
      experience: 7,
      listings: 18,
      city: 'Hyderabad',
      specialties: 'Family Apartments · Gated Communities',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F7F4ED' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ===== Header ===== */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px]" style={{ backgroundColor: '#F5A623' }} />
              <span
                className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: '#F5A623' }}
              >
                Agents
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight"
              style={{ color: '#171A1C' }}
            >
              Work with a real estate expert
            </h2>
          </div>

          {/* All Agents Link */}
          <Link
            href="/find-agent"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold transition-all hover:gap-3 self-start sm:self-auto"
            style={{ color: '#F5A623' }}
          >
            All Agents <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

        {/* ===== Agent Cards Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {agents.map((agent, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-[#E8E2D5] p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(23,26,28,0.12)]"
            >

              {/* ===== Top: Avatar + Info ===== */}
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#171A1C' }}
                >
                  <span
                    className="text-base font-bold tracking-wide"
                    style={{ color: '#F5A623' }}
                  >
                    {agent.initials}
                  </span>
                </div>

                {/* Name + Agency + Verified */}
                <div className="min-w-0 flex-1 pt-1">
                  <h3
                    className="text-base font-bold tracking-tight mb-1 truncate"
                    style={{ color: '#171A1C' }}
                  >
                    {agent.name}
                  </h3>
                  <p
                    className="text-xs mb-2 truncate"
                    style={{ color: '#59636B' }}
                  >
                    {agent.agency}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: '#F5A623' }}
                      strokeWidth={2}
                    />
                    <span
                      className="text-[11px] font-semibold"
                      style={{ color: '#F5A623' }}
                    >
                      Verified Agent
                    </span>
                  </div>
                </div>
              </div>

              {/* ===== Stats Row ===== */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#E8E2D5]">
                {/* Rating */}
                <div className="flex flex-col items-center flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    <Star
                      className="w-4 h-4 fill-current"
                      style={{ color: '#F5A623' }}
                      strokeWidth={1.5}
                    />
                    <span
                      className="text-base font-bold tracking-tight"
                      style={{ color: '#171A1C' }}
                    >
                      {agent.rating}
                    </span>
                  </div>
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: '#59636B' }}
                  >
                    {agent.reviews} reviews
                  </span>
                </div>

                {/* Experience */}
                <div className="flex flex-col items-center flex-1 border-l border-[#E8E2D5]">
                  <span
                    className="text-base font-bold tracking-tight mb-1"
                    style={{ color: '#171A1C' }}
                  >
                    {agent.experience}
                  </span>
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: '#59636B' }}
                  >
                    Years exp.
                  </span>
                </div>

                {/* Listings */}
                <div className="flex flex-col items-center flex-1 border-l border-[#E8E2D5]">
                  <span
                    className="text-base font-bold tracking-tight mb-1"
                    style={{ color: '#171A1C' }}
                  >
                    {agent.listings}
                  </span>
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: '#59636B' }}
                  >
                    Listings
                  </span>
                </div>
              </div>

              {/* ===== Location + Specialties ===== */}
              <div className="space-y-3.5 mb-6 flex-1">
                {/* Location */}
                <div className="flex items-start gap-2.5">
                  <MapPin
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: '#59636B' }}
                    strokeWidth={1.8}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#59636B' }}
                  >
                    {agent.city}
                  </span>
                </div>

                {/* Specialties */}
                <div className="flex items-start gap-2.5">
                  <Building2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: '#59636B' }}
                    strokeWidth={1.8}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: '#59636B' }}
                  >
                    {agent.specialties}
                  </span>
                </div>
              </div>

              {/* ===== Buttons ===== */}
              <div className="flex gap-2.5">
                <Link
                  href="/find-agent"
                  className="flex-1 text-center py-3 rounded-xl text-sm font-bold transition-all active:scale-95 hover:shadow-lg"
                  style={{
                    backgroundColor: '#171A1C',
                    color: '#FFFFFF',
                  }}
                >
                  Contact Agent
                </Link>
                <Link
                  href="/find-agent"
                  className="flex-1 text-center py-3 rounded-xl text-sm font-bold border transition-all active:scale-95 hover:bg-[#F7F4ED]"
                  style={{
                    borderColor: '#E8E2D5',
                    color: '#171A1C',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  View Profile
                </Link>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}