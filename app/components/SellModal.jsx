// 'use client';

// import React, { useState } from 'react';
// import { X, MapPin, ChevronDown } from 'lucide-react';


// export default function SellModal({ isOpen, onClose }) {
//   const [purpose, setPurpose] = useState('Sell');
//   const [rentFrequency, setRentFrequency] = useState('Yearly');
//   const [category, setCategory] = useState('Residential');
//   const [propertyType, setPropertyType] = useState('Apartment');
//   const [bedrooms, setBedrooms] = useState('1');
//   const [urgency, setUrgency] = useState('This month');

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white rounded-xl w-full max-w-lg my-8 relative shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* ===== Header ===== */}
//         <div className="sticky top-0 bg-white z-10 px-6 pt-6 pb-4 border-b border-gray-100 flex justify-between items-center rounded-t-xl">
//           <h2 className="text-xl font-bold text-gray-900">Enter Property Details</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-700 transition-colors"
//             aria-label="Close"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* ===== Form Body ===== */}
//         <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
//           {/* --- Sell / Rent Toggle --- */}
//           <div className="bg-gray-50 rounded-lg p-1.5 flex">
//             <button
//               onClick={() => setPurpose('Sell')}
//               className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
//                 purpose === 'Sell' ? 'bg-white shadow text-[#00a651]' : 'text-gray-600'
//               }`}
//             >
//               Sell
//             </button>
//             <button
//               onClick={() => setPurpose('Rent')}
//               className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
//                 purpose === 'Rent' ? 'bg-white shadow text-[#00a651]' : 'text-gray-600'
//               }`}
//             >
//               Rent
//             </button>
//           </div>

//           {/* --- Rent Frequency (only for Rent) --- */}
//           {purpose === 'Rent' && (
//             <div className="animate-fadeIn">
//               <label className="block text-sm font-bold text-gray-800 mb-2">Rent Frequency</label>
//               <div className="flex gap-2">
//                 {['Yearly', 'Monthly'].map((freq) => (
//                   <button
//                     key={freq}
//                     onClick={() => setRentFrequency(freq)}
//                     className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
//                       rentFrequency === freq
//                         ? 'border-[#00a651] text-[#00a651] bg-green-50'
//                         : 'border-gray-300 text-gray-600 hover:border-gray-400'
//                     }`}
//                   >
//                     {freq}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* --- Location --- */}
//           <div>
//             <label className="block text-sm font-bold text-gray-800 mb-2">Location*</label>
//             <div className="relative">
//               <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Enter location, building or community"
//                 className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#00a651] focus:border-[#00a651]"
//               />
//             </div>
//           </div>

//           {/* --- Category & Type --- */}
//           <div>
//             <label className="block text-sm font-bold text-gray-800 mb-2">Category & Type*</label>
            
//             <div className="flex border border-gray-300 rounded-lg overflow-hidden mb-3">
//               <button
//                 onClick={() => setCategory('Residential')}
//                 className={`flex-1 py-2 text-sm font-medium transition-colors ${
//                   category === 'Residential' ? 'bg-green-50 text-[#00a651]' : 'bg-white text-gray-600'
//                 }`}
//               >
//                 Residential
//               </button>
//               <button
//                 onClick={() => setCategory('Commercial')}
//                 className={`flex-1 py-2 text-sm font-medium transition-colors ${
//                   category === 'Commercial' ? 'bg-green-50 text-[#00a651]' : 'bg-white text-gray-600'
//                 }`}
//               >
//                 Commercial
//               </button>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Land', 'Other'].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => setPropertyType(type)}
//                   className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
//                     propertyType === type
//                       ? 'border-[#00a651] text-[#00a651] bg-green-50'
//                       : 'border-gray-300 text-gray-600 hover:border-gray-400'
//                   }`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* --- Bedrooms --- */}
//           <div>
//             <label className="block text-sm font-bold text-gray-800 mb-2">Bedrooms*</label>
//             <div className="flex flex-wrap gap-2">
//               {['Studio', '1', '2', '3', '4', '5', '6', '7', '8+'].map((num) => (
//                 <button
//                   key={num}
//                   onClick={() => setBedrooms(num)}
//                   className={`w-9 h-9 rounded-full flex items-center justify-center text-xs border transition-colors ${
//                     bedrooms === num
//                       ? 'border-[#00a651] text-[#00a651] bg-green-50'
//                       : 'border-gray-300 text-gray-600 hover:border-gray-400'
//                   }`}
//                 >
//                   {num}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* --- Furnishing --- */}
//           <div>
//             <label className="block text-sm font-bold text-gray-800 mb-2">Furnishing</label>
//             <div className="relative">
//               <select className="w-full border border-gray-300 rounded-lg p-2.5 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#00a651] focus:border-[#00a651] bg-white">
//                 <option>Select</option>
//                 <option>Furnished</option>
//                 <option>Unfurnished</option>
//                 <option>Semi-Furnished</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
//             </div>
//           </div>

//           {/* --- Urgency --- */}
//           <div>
//             <label className="block text-sm font-bold text-gray-800 mb-2">Urgency</label>
//             <div className="flex flex-wrap gap-2">
//               {['This month', 'Within 2 months', 'Flexible'].map((urg) => (
//                 <button
//                   key={urg}
//                   onClick={() => setUrgency(urg)}
//                   className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
//                     urgency === urg
//                       ? 'border-[#00a651] text-[#00a651] bg-green-50'
//                       : 'border-gray-300 text-gray-600 hover:border-gray-400'
//                   }`}
//                 >
//                   {urg}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* --- Expected Price / Rent --- */}
//           <div>
//             <label className="block text-sm font-bold text-gray-800 mb-2">
//               {purpose === 'Sell' ? 'Expected Price (AED)*' : 'Expected Rent (AED Per Year)*'}
//             </label>
//             <input
//               type="text"
//               placeholder={purpose === 'Sell' ? 'Enter expected price' : 'Enter expected rent'}
//               className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#00a651] focus:border-[#00a651]"
//             />
//           </div>

//           {/* ===== Contact Details Section ===== */}
//           <div className="bg-green-50/50 rounded-lg p-4 space-y-3">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name*"
//                 className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#00a651] focus:border-[#00a651]"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Email (optional)"
//                 className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#00a651] focus:border-[#00a651]"
//               />
//             </div>
//             <div>
//               <div className="relative">
//                 <span className="absolute left-3 top-2.5 text-sm text-gray-600">🇦🇪 +971</span>
//                 <input
//                   type="tel"
//                   className="w-full pl-20 border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#00a651] focus:border-[#00a651]"
//                 />
//               </div>
//             </div>

//             <button className="w-full bg-[#0d4d3d] hover:bg-[#0a3d30] text-white font-semibold py-3 rounded-lg transition-colors mt-2">
//               Submit
//             </button>

//             <p className="text-[10px] text-gray-500 leading-relaxed text-center">
//               By submitting, you agree to Divine Bricks' <a href="#" className="text-blue-600 underline">Terms</a> & <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
//               This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-600 underline">Privacy Policy</a> and <a href="#" className="text-blue-600 underline">Terms of Service</a> apply.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }














'use client';

import React, { useState } from 'react';
import { X, MapPin, ChevronDown } from 'lucide-react';

export default function SellModal({ isOpen, onClose }) {
  const [purpose, setPurpose] = useState('Sell');
  const [rentFrequency, setRentFrequency] = useState('Yearly');
  const [category, setCategory] = useState('Residential');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [bedrooms, setBedrooms] = useState('1');
  const [urgency, setUrgency] = useState('This month');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-md p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg my-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-6 pt-6 pb-4 border-b border-gray-100 flex justify-between items-center rounded-t-3xl">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            Enter Property Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">

          {/* Sell / Rent Toggle */}
          <div className="bg-gray-100 rounded-2xl p-1.5 flex">
            <button
              onClick={() => setPurpose('Sell')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                purpose === 'Sell'
                  ? 'bg-white shadow-md text-[#00d16a]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sell
            </button>
            <button
              onClick={() => setPurpose('Rent')}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                purpose === 'Rent'
                  ? 'bg-white shadow-md text-[#00d16a]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Rent
            </button>
          </div>

          {/* Rent Frequency */}
          {purpose === 'Rent' && (
            <div className="animate-fadeIn">
              <label className="block text-sm font-bold text-gray-800 mb-2">
                Rent Frequency
              </label>
              <div className="flex gap-2">
                {['Yearly', 'Monthly'].map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setRentFrequency(freq)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                      rentFrequency === freq
                        ? 'border-[#00d16a] text-[#00d16a] bg-[#ecfdf5]'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Location */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Location*
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-[#00d16a]" />
              <input
                type="text"
                placeholder="Enter location, building or community"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
              />
            </div>
          </div>

          {/* Category & Type */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Category & Type*
            </label>

            <div className="flex bg-gray-100 rounded-2xl p-1.5 mb-3">
              <button
                onClick={() => setCategory('Residential')}
                className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                  category === 'Residential'
                    ? 'bg-white shadow-md text-[#00d16a]'
                    : 'text-gray-500'
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setCategory('Commercial')}
                className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                  category === 'Commercial'
                    ? 'bg-white shadow-md text-[#00d16a]'
                    : 'text-gray-500'
                }`}
              >
                Commercial
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Land', 'Other'].map((type) => (
                <button
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border-2 transition-all ${
                    propertyType === type
                      ? 'border-[#00d16a] text-[#00d16a] bg-[#ecfdf5]'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Bedrooms*
            </label>
            <div className="flex flex-wrap gap-2">
              {['Studio', '1', '2', '3', '4', '5', '6', '7', '8+'].map((num) => (
                <button
                  key={num}
                  onClick={() => setBedrooms(num)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold border-2 transition-all ${
                    bedrooms === num
                      ? 'border-[#00d16a] text-[#00d16a] bg-[#ecfdf5]'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Furnishing */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Furnishing
            </label>
            <div className="relative">
              <select className="w-full border border-gray-200 rounded-2xl p-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] bg-white transition-all">
                <option>Select</option>
                <option>Furnished</option>
                <option>Unfurnished</option>
                <option>Semi-Furnished</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              Urgency
            </label>
            <div className="flex flex-wrap gap-2">
              {['This month', 'Within 2 months', 'Flexible'].map((urg) => (
                <button
                  key={urg}
                  onClick={() => setUrgency(urg)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border-2 transition-all ${
                    urgency === urg
                      ? 'border-[#00d16a] text-[#00d16a] bg-[#ecfdf5]'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {urg}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">
              {purpose === 'Sell' ? 'Expected Price (AED)*' : 'Expected Rent (AED Per Year)*'}
            </label>
            <input
              type="text"
              placeholder={purpose === 'Sell' ? 'Enter expected price' : 'Enter expected rent'}
              className="w-full border border-gray-200 rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
            />
          </div>

          {/* Contact Details */}
          <div className="bg-[#ecfdf5] rounded-2xl p-4 space-y-3 border border-[#a7f3d0]">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] bg-white transition-all"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] bg-white transition-all"
            />
            <div className="relative">
              <span className="absolute left-3 top-3 text-sm text-gray-600">🇦🇪 +971</span>
              <input
                type="tel"
                className="w-full pl-20 border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] bg-white transition-all"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-[#0e4b3e] to-[#0a3d30] hover:shadow-lg hover:shadow-[#0e4b3e]/30 text-white font-bold py-3 rounded-xl transition-all duration-200 active:scale-[0.98] mt-2">
              Submit
            </button>

            <p className="text-[10px] text-gray-500 leading-relaxed text-center">
              By submitting, you agree to Divine Bricks' <a href="#" className="text-[#00d16a] underline">Terms</a> & <a href="#" className="text-[#00d16a] underline">Privacy Policy</a>.
              This site is protected by reCAPTCHA and the Google <a href="#" className="text-[#00d16a] underline">Privacy Policy</a> and <a href="#" className="text-[#00d16a] underline">Terms of Service</a> apply.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}