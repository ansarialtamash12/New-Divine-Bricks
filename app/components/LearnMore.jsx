// 'use client';

// import React, { useState, useRef } from 'react';
// import Link from 'next/link';
// import { ChevronRight, ArrowRight } from 'lucide-react';

// // --- Mock Data for the three sections ---
// const updatesData = [
//   { id: 1, title: 'What Are My Options for Investing in Dubai Real Estate With an AED 600k Budget?', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 2, title: 'What Are My Options When It Comes to Investing in Dubai Real Estate With an AED 1M Budget', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 3, title: 'JVC vs Dubai Sports City: Where Should You Live?', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 4, title: 'Pros and Cons of Living in Al Barsha 1', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 5, title: 'Top 5 Areas to Invest in Dubai', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=400&h=250' },
// ];

// const neighbourhoodsData = [
//   { id: 1, title: 'The Valley', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 2, title: 'Business Bay', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 3, title: 'Tilal Al Ghaf', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 4, title: 'Jumeirah Village Circle (JVC)', image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 5, title: 'Dubai Marina', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250' },
// ];

// const buildingsData = [
//   { id: 1, title: 'DAMAC Celestia, Dubai World Central', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 2, title: 'Latifa Tower, Sheikh Zayed Road', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 3, title: 'Laguna Tower, JLT', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 4, title: 'Skycourts Towers, Dubailand', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=400&h=250' },
//   { id: 5, title: 'Address Residences', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=400&h=250' },
// ];

// const locations = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'];

// // --- Reusable Toggle Switch Component ---
// const ToggleSwitch = ({ label }) => (
//   <label className="relative inline-flex items-center cursor-pointer ml-4">
//     <input type="checkbox" className="sr-only peer" />
//     <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00a651]"></div>
//     <span className="ml-2 text-sm text-gray-500 font-medium">{label}</span>
//   </label>
// );

// // --- Reusable Horizontal Scroll Section ---
// const ScrollableSection = ({ 
//   title, 
//   subtitle, 
//   data, 
//   badgeText, 
//   badgeColor, 
//   showToggle 
// }) => {
//   const scrollRef = useRef(null);

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="mb-14 relative group">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
//         <div className="flex items-center flex-wrap gap-y-2">
//           <h3 className="text-xl font-bold text-gray-900 mr-2">{title}</h3>
//           {subtitle && <span className="text-gray-500 text-sm font-normal mr-2">{subtitle}</span>}
//           {showToggle && <ToggleSwitch label="Off-Plan Only" />}
//         </div>
//         <button className="flex items-center gap-1 text-sm font-medium text-[#1d4e5f] border border-gray-300 px-4 py-1.5 rounded-md hover:bg-gray-50 transition-colors shrink-0">
//           View All <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>

//       {/* Scrollable Content */}
//       <div 
//         ref={scrollRef}
//         className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         {data.map((item) => (
//           <div key={item.id} className="min-w-[260px] max-w-[260px] flex flex-col snap-start cursor-pointer group/card">
//             <div className="relative rounded-xl overflow-hidden mb-3">
//               <img 
//                 src={item.image} 
//                 alt={item.title} 
//                 className="w-full h-[160px] object-cover transition-transform duration-300 group-hover/card:scale-105"
//               />
//               {/* Badge */}
//               <div className={`absolute bottom-3 left-3 px-2 py-1 text-[10px] font-bold text-white uppercase rounded ${badgeColor}`}>
//                 {badgeText}
//               </div>
//             </div>
//             <h4 className="text-sm font-semibold text-gray-800 leading-snug group-hover/card:text-[#00a651] transition-colors line-clamp-2">
//               {item.title}
//             </h4>
//           </div>
//         ))}
//       </div>

//       {/* Right Scroll Arrow */}
//       <button 
//         onClick={scrollRight}
//         className="hidden md:flex absolute right-[-15px] top-[55%] -translate-y-1/2 bg-white rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors z-10"
//         aria-label="Scroll right"
//       >
//         <ChevronRight className="w-5 h-5 text-gray-600" />
//       </button>
//     </div>
//   );
// };

// // --- Main Component (UPDATED STRUCTURE) ---
// export default function LearnMore() {
//   const [activeLocation, setActiveLocation] = useState('Dubai');

//   return (
//     // 1. OUTER SECTION: Full width background
//     <section className="w-full bg-white py-16">
      
//       {/* 2. INNER CONTAINER: Content ko center aur limit karne ke liye */}
//       <div className="max-w-7xl mx-auto px-4">
        
//         {/* Main Heading */}
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
//           Learn more about the UAE's property market
//         </h2>

//         {/* Location Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="flex bg-white border border-gray-200 rounded-md p-1 shadow-sm overflow-x-auto">
//             {locations.map((loc) => (
//               <button
//                 key={loc}
//                 onClick={() => setActiveLocation(loc)}
//                 className={`px-5 py-2 text-sm font-medium whitespace-nowrap rounded-md transition-colors ${
//                   activeLocation === loc
//                     ? 'bg-[#e8f8f0] text-[#00a651]'
//                     : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                 }`}
//               >
//                 {loc}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Section 1: Real Estate Updates */}
//         <ScrollableSection 
//           title="Real Estate Updates From"
//           subtitle={
//             <span className="flex items-center text-[#00a651] font-bold text-xl">
//               my<span className="text-[#1d4e5f]">Bayut</span>
//             </span>
//           }
//           data={updatesData}
//           badgeText="Market Trends"
//           badgeColor="bg-purple-600"
//         />

//         {/* Section 2: Popular Neighbourhoods */}
//         <ScrollableSection 
//           title="Discover Popular Neighbourhoods in Dubai"
//           data={neighbourhoodsData}
//           badgeText="Ready"
//           badgeColor="bg-gray-800"
//           showToggle={true}
//         />

//         {/* Section 3: Top Buildings */}
//         <ScrollableSection 
//           title="Explore Top Buildings in Dubai"
//           data={buildingsData}
//           badgeText="Ready"
//           badgeColor="bg-gray-800"
//           showToggle={true}
//         />

//       </div>
//     </section>
//   );
// }















'use client';

import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const updatesData = [
  { id: 1, title: 'What Are My Options for Investing in Dubai Real Estate With an AED 600k Budget?', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 2, title: 'What Are My Options When It Comes to Investing in Dubai Real Estate With an AED 1M Budget', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 3, title: 'JVC vs Dubai Sports City: Where Should You Live?', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 4, title: 'Pros and Cons of Living in Al Barsha 1', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 5, title: 'Top 5 Areas to Invest in Dubai', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=400&h=250' },
];

const neighbourhoodsData = [
  { id: 1, title: 'The Valley', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 2, title: 'Business Bay', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 3, title: 'Tilal Al Ghaf', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 4, title: 'Jumeirah Village Circle (JVC)', image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 5, title: 'Dubai Marina', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400&h=250' },
];

const buildingsData = [
  { id: 1, title: 'DAMAC Celestia, Dubai World Central', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 2, title: 'Latifa Tower, Sheikh Zayed Road', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 3, title: 'Laguna Tower, JLT', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 4, title: 'Skycourts Towers, Dubailand', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=400&h=250' },
  { id: 5, title: 'Address Residences', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=400&h=250' },
];

const locations = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'];

const ToggleSwitch = ({ label }) => (
  <label className="relative inline-flex items-center cursor-pointer ml-4">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00d16a]"></div>
    <span className="ml-2 text-sm text-gray-500 font-medium">{label}</span>
  </label>
);

const ScrollableSection = ({ title, subtitle, data, badgeText, badgeColor, showToggle }) => {
  const scrollRef = useRef(null);
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-16 relative group">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
        <div className="flex items-center flex-wrap gap-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mr-2">{title}</h3>
          {subtitle && <span className="text-gray-500 text-sm font-normal mr-2">{subtitle}</span>}
          {showToggle && <ToggleSwitch label="Off-Plan Only" />}
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-[#0e4b3e] border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 hover:border-[#00d16a]/50 transition-all shrink-0">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {data.map((item) => (
          <div key={item.id} className="min-w-[260px] max-w-[260px] flex flex-col snap-start cursor-pointer group/card">
            <div className="relative rounded-2xl overflow-hidden mb-3 shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[160px] object-cover transition-transform duration-500 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
              <div className={`absolute bottom-3 left-3 px-2.5 py-1 text-[10px] font-bold text-white uppercase rounded-lg ${badgeColor}`}>
                {badgeText}
              </div>
            </div>
            <h4 className="text-sm font-bold text-gray-800 leading-snug group-hover/card:text-[#00d16a] transition-colors line-clamp-2">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-[-15px] top-[55%] -translate-y-1/2 bg-white rounded-full p-2.5 shadow-xl border border-gray-100 hover:bg-gray-50 hover:scale-110 transition-all z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};

export default function LearnMore() {
  const [activeLocation, setActiveLocation] = useState('Dubai');

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 tracking-tight">
          Learn more about the UAE's property market
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-2xl p-1 shadow-sm overflow-x-auto">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`px-5 py-2.5 text-sm font-semibold whitespace-nowrap rounded-xl transition-all ${
                  activeLocation === loc
                    ? 'bg-white shadow-md text-[#00d16a]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        <ScrollableSection
          title="Real Estate Updates From"
          subtitle={
            <span className="flex items-center text-[#00d16a] font-bold text-xl">
              my<span className="text-[#0e4b3e]">Bayut</span>
            </span>
          }
          data={updatesData}
          badgeText="Market Trends"
          badgeColor="bg-purple-600"
        />

        <ScrollableSection
          title="Discover Popular Neighbourhoods in Dubai"
          data={neighbourhoodsData}
          badgeText="Ready"
          badgeColor="bg-gray-900"
          showToggle={true}
        />

        <ScrollableSection
          title="Explore Top Buildings in Dubai"
          data={buildingsData}
          badgeText="Ready"
          badgeColor="bg-gray-900"
          showToggle={true}
        />
      </div>
    </section>
  );
}
