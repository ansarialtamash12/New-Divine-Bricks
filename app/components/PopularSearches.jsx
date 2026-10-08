// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// // --- Mock Data (Same as before) ---
// const allSaleData = {
//   apartments: [
//     { label: 'Apartments for sale in Dubai', href: '#' },
//     { label: 'Apartments for sale in Downtown Dubai', href: '#' },
//     { label: 'Apartments for sale in Jumeirah Village Circle (JVC)', href: '#' },
//     { label: 'Apartments for sale in Dubai Marina', href: '#' },
//     { label: 'Apartments for sale in Business Bay', href: '#' },
//     { label: 'Apartments for sale in Al Furjan', href: '#' },
//     { label: 'Apartments for sale in Jumeirah Lake Towers (JLT)', href: '#' },
//     { label: 'Apartments for sale in Palm Jumeirah', href: '#' },
//     { label: 'Apartments for sale in Dubai Land Residence Compl...', href: '#' },
//     { label: 'Apartments for sale in Burj Khalifa', href: '#' },
//   ],
//   villas: [
//     { label: 'Villas for sale in Dubai', href: '#' },
//     { label: 'Villas for sale in Palm Jumeirah', href: '#' },
//     { label: 'Villas for sale in Dubai Hills Estate', href: '#' },
//     { label: 'Villas for sale in DAMAC Hills 2 (Akoya by DAMAC)', href: '#' },
//     { label: 'Villas for sale in Al Furjan', href: '#' },
//     { label: 'Villas for sale in DAMAC Hills', href: '#' },
//     { label: 'Villas for sale in DAMAC Lagoons', href: '#' },
//     { label: 'Villas for sale in Tilal Al Ghaf', href: '#' },
//     { label: 'Villas for sale in Mohammed Bin Rashid City (MBR Ci...', href: '#' },
//     { label: 'Villas for sale in The Valley by Emaar', href: '#' },
//   ],
//   other: [
//     { label: 'Properties for sale in Dubai', href: '#' },
//     { label: 'Townhouses for sale in Dubai', href: '#' },
//     { label: 'Penthouses for sale in Dubai', href: '#' },
//     { label: 'Hotel Apartments for sale in Dubai', href: '#' },
//     { label: 'Residential Plots for sale in Dubai', href: '#' },
//     { label: 'Commercial Properties for sale in Dubai', href: '#' },
//     { label: 'Offices for sale in Dubai', href: '#' },
//     { label: 'Shops for sale in Dubai', href: '#' },
//     { label: 'Warehouses for sale in Dubai', href: '#' },
//     { label: 'Commercial Plots for sale in Dubai', href: '#' },
//   ],
// };

// const offPlanData = {
//   apartments: [
//     { label: 'Off Plan Apartments in Dubai', href: '#' },
//     { label: 'Off Plan Apartments in Jumeirah Village Circle (JVC)', href: '#' },
//     { label: 'Off Plan Apartments in Business Bay', href: '#' },
//     { label: 'Off Plan Apartments in Al Furjan', href: '#' },
//     { label: 'Off Plan Apartments in Dubai Land Residence Compl...', href: '#' },
//     { label: 'Off Plan Apartments in Arjan', href: '#' },
//     { label: 'Off Plan Apartments in Jumeirah Village Triangle (JV...', href: '#' },
//     { label: 'Off Plan Apartments in Dubai Investments Park (DIP)', href: '#' },
//     { label: 'Off Plan Apartments in Dubai South', href: '#' },
//     { label: 'Off Plan Apartments in Dubai Islands', href: '#' },
//   ],
//   villas: [
//     { label: 'Off Plan Villas in Dubai', href: '#' },
//     { label: 'Off Plan Villas in DAMAC Hills 2 (Akoya by DAMAC)', href: '#' },
//     { label: 'Off Plan Villas in DAMAC Lagoons', href: '#' },
//     { label: 'Off Plan Villas in Tilal Al Ghaf', href: '#' },
//     { label: 'Off Plan Villas in Mohammed Bin Rashid City (MBR...', href: '#' },
//     { label: 'Off Plan Villas in The Valley by Emaar', href: '#' },
//     { label: 'Off Plan Villas in Palm Jebel Ali', href: '#' },
//     { label: 'Off Plan Villas in Dubai South', href: '#' },
//     { label: 'Off Plan Villas in Arabian Ranches 3', href: '#' },
//     { label: 'Off Plan Villas in The Acres', href: '#' },
//   ],
//   other: [
//     { label: 'Off Plan Properties in Dubai', href: '#' },
//     { label: 'Off Plan Townhouses in Dubai', href: '#' },
//     { label: 'Off Plan Penthouses in Dubai', href: '#' },
//     { label: 'Off Plan Commercial Properties in Dubai', href: '#' },
//     { label: 'Off Plan Townhouses in The Valley by Emaar', href: '#' },
//     { label: 'Off Plan Townhouses in DAMAC Lagoons', href: '#' },
//     { label: 'Off Plan Properties in Jumeirah Village Circle (JVC)', href: '#' },
//     { label: 'New Projects by Emaar', href: '#' },
//     { label: 'New Projects by DAMAC Properties', href: '#' },
//     { label: 'New Projects by', href: '#' },
//   ],
// };

// // --- Sub-component (Same as before) ---
// const SearchListSection = ({ title, data }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const INITIAL_ITEMS_COUNT = 5;

//   const getVisibleItems = (items) => {
//     return isExpanded ? items : items.slice(0, INITIAL_ITEMS_COUNT);
//   };

//   return (
//     <div className="mb-12">
//       <h3 className="text-xl font-semibold text-center text-gray-800 mb-8">{title}</h3>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
//         {/* Apartments */}
//         <div>
//           <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">Apartments</h4>
//           <ul className="space-y-3">
//             {getVisibleItems(data.apartments).map((item, index) => (
//               <li key={index}>
//                 <Link href={item.href} className="text-sm text-[#1d4e5f] hover:underline hover:text-[#00a651] transition-colors line-clamp-1">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Villas */}
//         <div>
//           <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">Villas</h4>
//           <ul className="space-y-3">
//             {getVisibleItems(data.villas).map((item, index) => (
//               <li key={index}>
//                 <Link href={item.href} className="text-sm text-[#1d4e5f] hover:underline hover:text-[#00a651] transition-colors line-clamp-1">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Other Properties */}
//         <div>
//           <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-4">Other Properties</h4>
//           <ul className="space-y-3">
//             {getVisibleItems(data.other).map((item, index) => (
//               <li key={index}>
//                 <Link href={item.href} className="text-sm text-[#1d4e5f] hover:underline hover:text-[#00a651] transition-colors line-clamp-1">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* View More Button */}
//       <div className="border-t border-gray-200 pt-4 flex justify-end">
//         <button 
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="flex items-center gap-1 text-sm font-medium text-[#1d4e5f] hover:text-[#00a651] transition-colors focus:outline-none"
//         >
//           {isExpanded ? (
//             <>View Less <ChevronUp className="w-4 h-4" /></>
//           ) : (
//             <>View More <ChevronDown className="w-4 h-4" /></>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// // --- Main Component (UPDATED STRUCTURE) ---
// export default function PopularSearches() {
//   const [activePurpose, setActivePurpose] = useState('Sale');
//   const [activeLocation, setActiveLocation] = useState('Dubai');

//   const locations = ['Dubai', 'Abu Dhabi', 'Other Emirates'];

//   return (
//     // 1. OUTER SECTION: Isme poori width hai aur background color yahan lagaya hai
//     <section className="w-full bg-white py-16">
      
//       {/* 2. INNER CONTAINER: Isme max-width hai taaki content center me rahe */}
//       <div className="max-w-6xl mx-auto px-4">
        
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
//           Popular Real Estate Searches
//         </h2>

//         {/* Tabs */}
//         <div className="flex justify-center gap-8 mb-6 border-b border-gray-100">
//           {['Sale', 'Rent'].map((purpose) => (
//             <button
//               key={purpose}
//               onClick={() => setActivePurpose(purpose)}
//               className={`pb-2 text-lg font-medium transition-colors border-b-2 ${
//                 activePurpose === purpose
//                   ? 'text-[#00a651] border-[#00a651]'
//                   : 'text-gray-500 border-transparent hover:text-gray-800'
//               }`}
//             >
//               {purpose}
//             </button>
//           ))}
//         </div>

//         {/* Location Tabs */}
//         <div className="flex justify-center mb-10">
//           <div className="flex bg-white border border-gray-200 rounded-md p-1 shadow-sm">
//             {locations.map((loc) => (
//               <button
//                 key={loc}
//                 onClick={() => setActiveLocation(loc)}
//                 className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
//                   activeLocation === loc
//                     ? 'bg-[#e8f8f0] text-[#00a651] border border-[#00a651]/20'
//                     : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                 }`}
//               >
//                 {loc}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Sections */}
//         <div className="max-w-5xl mx-auto">
//           <SearchListSection title="All Sale" data={allSaleData} />
//           <SearchListSection title="Off Plan" data={offPlanData} />
//         </div>

//       </div>
//     </section>
//   );
// }











'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const allSaleData = {
  apartments: [
    { label: 'Apartments for sale in Dubai', href: '#' },
    { label: 'Apartments for sale in Downtown Dubai', href: '#' },
    { label: 'Apartments for sale in Jumeirah Village Circle (JVC)', href: '#' },
    { label: 'Apartments for sale in Dubai Marina', href: '#' },
    { label: 'Apartments for sale in Business Bay', href: '#' },
    { label: 'Apartments for sale in Al Furjan', href: '#' },
    { label: 'Apartments for sale in Jumeirah Lake Towers (JLT)', href: '#' },
    { label: 'Apartments for sale in Palm Jumeirah', href: '#' },
    { label: 'Apartments for sale in Dubai Land Residence Compl...', href: '#' },
    { label: 'Apartments for sale in Burj Khalifa', href: '#' },
  ],
  villas: [
    { label: 'Villas for sale in Dubai', href: '#' },
    { label: 'Villas for sale in Palm Jumeirah', href: '#' },
    { label: 'Villas for sale in Dubai Hills Estate', href: '#' },
    { label: 'Villas for sale in DAMAC Hills 2 (Akoya by DAMAC)', href: '#' },
    { label: 'Villas for sale in Al Furjan', href: '#' },
    { label: 'Villas for sale in DAMAC Hills', href: '#' },
    { label: 'Villas for sale in DAMAC Lagoons', href: '#' },
    { label: 'Villas for sale in Tilal Al Ghaf', href: '#' },
    { label: 'Villas for sale in Mohammed Bin Rashid City (MBR Ci...', href: '#' },
    { label: 'Villas for sale in The Valley by Emaar', href: '#' },
  ],
  other: [
    { label: 'Properties for sale in Dubai', href: '#' },
    { label: 'Townhouses for sale in Dubai', href: '#' },
    { label: 'Penthouses for sale in Dubai', href: '#' },
    { label: 'Hotel Apartments for sale in Dubai', href: '#' },
    { label: 'Residential Plots for sale in Dubai', href: '#' },
    { label: 'Commercial Properties for sale in Dubai', href: '#' },
    { label: 'Offices for sale in Dubai', href: '#' },
    { label: 'Shops for sale in Dubai', href: '#' },
    { label: 'Warehouses for sale in Dubai', href: '#' },
    { label: 'Commercial Plots for sale in Dubai', href: '#' },
  ],
};

const offPlanData = {
  apartments: [
    { label: 'Off Plan Apartments in Dubai', href: '#' },
    { label: 'Off Plan Apartments in Jumeirah Village Circle (JVC)', href: '#' },
    { label: 'Off Plan Apartments in Business Bay', href: '#' },
    { label: 'Off Plan Apartments in Al Furjan', href: '#' },
    { label: 'Off Plan Apartments in Dubai Land Residence Compl...', href: '#' },
    { label: 'Off Plan Apartments in Arjan', href: '#' },
    { label: 'Off Plan Apartments in Jumeirah Village Triangle (JV...', href: '#' },
    { label: 'Off Plan Apartments in Dubai Investments Park (DIP)', href: '#' },
    { label: 'Off Plan Apartments in Dubai South', href: '#' },
    { label: 'Off Plan Apartments in Dubai Islands', href: '#' },
  ],
  villas: [
    { label: 'Off Plan Villas in Dubai', href: '#' },
    { label: 'Off Plan Villas in DAMAC Hills 2 (Akoya by DAMAC)', href: '#' },
    { label: 'Off Plan Villas in DAMAC Lagoons', href: '#' },
    { label: 'Off Plan Villas in Tilal Al Ghaf', href: '#' },
    { label: 'Off Plan Villas in Mohammed Bin Rashid City (MBR...', href: '#' },
    { label: 'Off Plan Villas in The Valley by Emaar', href: '#' },
    { label: 'Off Plan Villas in Palm Jebel Ali', href: '#' },
    { label: 'Off Plan Villas in Dubai South', href: '#' },
    { label: 'Off Plan Villas in Arabian Ranches 3', href: '#' },
    { label: 'Off Plan Villas in The Acres', href: '#' },
  ],
  other: [
    { label: 'Off Plan Properties in Dubai', href: '#' },
    { label: 'Off Plan Townhouses in Dubai', href: '#' },
    { label: 'Off Plan Penthouses in Dubai', href: '#' },
    { label: 'Off Plan Commercial Properties in Dubai', href: '#' },
    { label: 'Off Plan Townhouses in The Valley by Emaar', href: '#' },
    { label: 'Off Plan Townhouses in DAMAC Lagoons', href: '#' },
    { label: 'Off Plan Properties in Jumeirah Village Circle (JVC)', href: '#' },
    { label: 'New Projects by Emaar', href: '#' },
    { label: 'New Projects by DAMAC Properties', href: '#' },
    { label: 'New Projects by', href: '#' },
  ],
};

const SearchListSection = ({ title, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_ITEMS_COUNT = 5;
  const getVisibleItems = (items) => (isExpanded ? items : items.slice(0, INITIAL_ITEMS_COUNT));

  return (
    <div className="mb-14">
      <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8 tracking-tight">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
        {[
          { name: 'Apartments', data: data.apartments },
          { name: 'Villas', data: data.villas },
          { name: 'Other Properties', data: data.other },
        ].map((section) => (
          <div key={section.name}>
            <h4 className="text-xs font-bold tracking-widest text-[#00d16a] uppercase mb-4">
              {section.name}
            </h4>
            <ul className="space-y-3">
              {getVisibleItems(section.data).map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#00d16a] transition-colors line-clamp-1 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-5 flex justify-end">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#0e4b3e] hover:text-[#00d16a] transition-colors focus:outline-none"
        >
          {isExpanded ? (
            <>View Less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>View More <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      </div>
    </div>
  );
};

export default function PopularSearches() {
  const [activePurpose, setActivePurpose] = useState('Sale');
  const [activeLocation, setActiveLocation] = useState('Dubai');
  const locations = ['Dubai', 'Abu Dhabi', 'Other Emirates'];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 tracking-tight">
          Popular Real Estate Searches
        </h2>

        <div className="flex justify-center gap-8 mb-8 border-b border-gray-200">
          {['Sale', 'Rent'].map((purpose) => (
            <button
              key={purpose}
              onClick={() => setActivePurpose(purpose)}
              className={`pb-3 text-lg font-semibold transition-all border-b-2 ${
                activePurpose === purpose
                  ? 'text-[#00d16a] border-[#00d16a]'
                  : 'text-gray-400 border-transparent hover:text-gray-700'
              }`}
            >
              {purpose}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-white border border-gray-100 rounded-2xl p-1 shadow-md">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                  activeLocation === loc
                    ? 'bg-[#ecfdf5] text-[#00d16a] shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <SearchListSection title="All Sale" data={allSaleData} />
          <SearchListSection title="Off Plan" data={offPlanData} />
        </div>
      </div>
    </section>
  );
}