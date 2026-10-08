// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import {
//   MapPin,
//   ChevronDown,
//   TrendingUp,
//   BarChart3,
//   HelpCircle,
//   X,
//   Search,
//   Building2,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
// } from "recharts";

// // --- MOCK DATA for TruEstimate Chart (Bayut Style) ---
// const estimateData = [
//   { month: "Jan", price: 3200000 },
//   { month: "Feb", price: 3250000 },
//   { month: "Mar", price: 3180000 },
//   { month: "Apr", price: 3350000 },
//   { month: "May", price: 3420000 },
//   { month: "Jun", price: 3380000 },
//   { month: "Jul", price: 3500000 },
//   { month: "Aug", price: 3550000 },
//   { month: "Sep", price: 3480000 },
//   { month: "Oct", price: 3600000 },
//   { month: "Nov", price: 3630000 },
//   { month: "Dec", price: 3700000 },
// ];

// // --- MOCK DATA for Dubai Transactions Table ---
// const transactionsData = [
//   {
//     id: 1,
//     location: "Dubai Marina",
//     type: "Apartment",
//     price: "AED 2,100,000",
//     date: "12 May 2024",
//     size: "1,200 sqft",
//   },
//   {
//     id: 2,
//     location: "Downtown Dubai",
//     type: "Apartment",
//     price: "AED 3,500,000",
//     date: "10 May 2024",
//     size: "1,800 sqft",
//   },
//   {
//     id: 3,
//     location: "Palm Jumeirah",
//     type: "Villa",
//     price: "AED 12,000,000",
//     date: "08 May 2024",
//     size: "4,500 sqft",
//   },
//   {
//     id: 4,
//     location: "Business Bay",
//     type: "Apartment",
//     price: "AED 1,450,000",
//     date: "05 May 2024",
//     size: "850 sqft",
//   },
//   {
//     id: 5,
//     location: "Arabian Ranches",
//     type: "Villa",
//     price: "AED 4,200,000",
//     date: "01 May 2024",
//     size: "3,200 sqft",
//   },
// ];

// // --- FAQ Data ---
// const faqs = [
//   {
//     q: "How do I get started with selling?",
//     a: "Simply fill out the form above and one of our agents will contact you within 24 hours.",
//   },
//   {
//     q: "What documents do I need to sell my property?",
//     a: "You will need your Title Deed, Passport copy, and Emirates ID. Our agents will guide you through the rest.",
//   },
//   {
//     q: "How is the property valuation done?",
//     a: "We use market data and recent transactions in your area to provide an accurate valuation.",
//   },
//   {
//     q: "How long does it take to sell a property?",
//     a: "It typically takes 30-90 days depending on market conditions and property type.",
//   },
// ];

// export default function SellPropertyPage() {
//   // --- STATE FOR FORM ---
//   const [purpose, setPurpose] = useState("sell");
//   const [category, setCategory] = useState(
//     "residential",
//   );
//   const [propertyType, setPropertyType] = useState("Apartment");
//   const [bedrooms, setBedrooms] = useState("2");
//   const [rentFrequency, setRentFrequency] = useState(
//     "yearly",
//   );
//   const [openFaq, setOpenFaq] = useState(null);

//   // --- TRUESTIMATE STATE ---
//   const [estimateLocation, setEstimateLocation] = useState("");
//   const [showEstimate, setShowEstimate] = useState(true);

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   return (
//     <div className="w-full bg-gray-50 flex flex-col font-sans">
//       {/* ================= SECTION 1: HERO & DYNAMIC FORM ================= */}
//       <section className="relative w-full bg-white py-12 md:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             {/* Left Content */}
//             <div className="space-y-6 lg:sticky lg:top-24">
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//                 Sell or rent your property with confidence!
//               </h1>
//               <p className="text-lg text-gray-600">
//                 Expert help from TrusT (Trusted) agents to sell your home from
//                 start to finish.
//               </p>

//               <div className="relative w-full h-64 md:h-80 mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center border border-gray-200">
//                 <div className="text-center text-gray-500">
//                   <Building2 className="w-16 h-16 mx-auto mb-3 text-[#00d16a]" />
//                   <p className="font-medium text-gray-700">
//                     Property Illustration
//                   </p>
//                   <p className="text-sm">Replace with your own asset</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Form (Bayut Style Advanced Form) */}
//             <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
//               {/* SELL / RENT TOGGLE */}
//               <div className="bg-gray-50 p-1.5 rounded-lg flex mb-6">
//                 <button
//                   onClick={() => setPurpose("sell")}
//                   className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all ${
//                     purpose === "sell"
//                       ? "bg-white shadow text-[#00d16a]"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   Sell
//                 </button>
//                 <button
//                   onClick={() => setPurpose("rent")}
//                   className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all ${
//                     purpose === "rent"
//                       ? "bg-white shadow text-[#00d16a]"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   Rent
//                 </button>
//               </div>

//               <form className="space-y-6">
//                 {/* RENT FREQUENCY (Only for Rent) */}
//                 {purpose === "rent" && (
//                   <div className="animate-fadeIn">
//                     <label className="block text-sm font-bold text-gray-800 mb-2">
//                       Rent Frequency
//                     </label>
//                     <div className="flex gap-3">
//                       <button
//                         type="button"
//                         onClick={() => setRentFrequency("yearly")}
//                         className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
//                           rentFrequency === "yearly"
//                             ? "border-[#00d16a] text-[#00d16a] bg-green-50"
//                             : "border-gray-300 text-gray-600 hover:border-gray-400"
//                         }`}
//                       >
//                         Yearly
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => setRentFrequency("monthly")}
//                         className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
//                           rentFrequency === "monthly"
//                             ? "border-[#00d16a] text-[#00d16a] bg-green-50"
//                             : "border-gray-300 text-gray-600 hover:border-gray-400"
//                         }`}
//                       >
//                         Monthly
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* LOCATION */}
//                 <div>
//                   <label className="block text-sm font-bold text-gray-800 mb-2">
//                     Location*
//                   </label>
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="Enter location, building or community"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#00d16a] focus:border-[#00d16a]"
//                     />
//                   </div>
//                 </div>

//                 {/* CATEGORY & TYPE */}
//                 <div>
//                   <label className="block text-sm font-bold text-gray-800 mb-2">
//                     Category & Type*
//                   </label>

//                   <div className="flex border border-gray-300 rounded-lg overflow-hidden mb-3">
//                     <button
//                       type="button"
//                       onClick={() => setCategory("residential")}
//                       className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
//                         category === "residential"
//                           ? "bg-green-50 text-[#00d16a]"
//                           : "bg-white text-gray-600"
//                       }`}
//                     >
//                       Residential
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setCategory("commercial")}
//                       className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
//                         category === "commercial"
//                           ? "bg-green-50 text-[#00d16a]"
//                           : "bg-white text-gray-600"
//                       }`}
//                     >
//                       Commercial
//                     </button>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {[
//                       "Apartment",
//                       "Villa",
//                       "Townhouse",
//                       "Penthouse",
//                       "Land",
//                       "Other",
//                     ].map((type) => (
//                       <button
//                         key={type}
//                         type="button"
//                         onClick={() => setPropertyType(type)}
//                         className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
//                           propertyType === type
//                             ? "border-[#00d16a] text-[#00d16a] bg-green-50"
//                             : "border-gray-300 text-gray-600 hover:border-gray-400"
//                         }`}
//                       >
//                         {type}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* BEDROOMS */}
//                 <div>
//                   <label className="block text-sm font-bold text-gray-800 mb-2">
//                     Bedrooms*
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {["Studio", "1", "2", "3", "4", "5", "6", "7", "8+"].map(
//                       (num) => (
//                         <button
//                           key={num}
//                           type="button"
//                           onClick={() => setBedrooms(num)}
//                           className={`w-10 h-10 rounded-full flex items-center justify-center text-sm border transition-colors ${
//                             bedrooms === num
//                               ? "border-[#00d16a] text-[#00d16a] bg-green-50"
//                               : "border-gray-300 text-gray-600 hover:border-gray-400"
//                           }`}
//                         >
//                           {num}
//                         </button>
//                       ),
//                     )}
//                   </div>
//                 </div>

//                 {/* AREA & FURNISHING */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-bold text-gray-800 mb-2">
//                       Area (sqft)
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter area"
//                       className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#00d16a] focus:border-[#00d16a]"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-bold text-gray-800 mb-2">
//                       Furnishing
//                     </label>
//                     <div className="relative">
//                       <select className="w-full border border-gray-300 rounded-lg p-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#00d16a] focus:border-[#00d16a] bg-white">
//                         <option>Select</option>
//                         <option>Furnished</option>
//                         <option>Unfurnished</option>
//                         <option>Semi-Furnished</option>
//                       </select>
//                       <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* URGENCY (Only for Sell) */}
//                 {purpose === "sell" && (
//                   <div className="animate-fadeIn">
//                     <label className="block text-sm font-bold text-gray-800 mb-2">
//                       Urgency
//                     </label>
//                     <div className="flex flex-wrap gap-2">
//                       {["This month", "Within 2 months", "Flexible"].map(
//                         (urg) => (
//                           <button
//                             key={urg}
//                             type="button"
//                             className="px-4 py-1.5 rounded-full text-sm border border-gray-300 text-gray-600 hover:border-[#00d16a] hover:text-[#00d16a] transition-colors"
//                           >
//                             {urg}
//                           </button>
//                         ),
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   type="button"
//                   className="w-full bg-[#00d16a] hover:bg-[#00b85c] text-white font-bold py-3.5 rounded-lg transition-colors mt-4 text-lg"
//                 >
//                   Continue
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= SECTION 2: TRUESTIMATE (Bayut Style Chart) ================= */}
//       <section className="w-full bg-white py-16 border-t border-gray-100">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Start with the right price.
//             </h2>
//             <h3 className="text-xl text-[#00d16a] font-semibold">
//               Instant valuation with TruEstimate™
//             </h3>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
//             {/* Search Bar for Estimate */}
//             <div className="flex gap-3 mb-8 max-w-2xl mx-auto">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Enter building or community name..."
//                   value={estimateLocation}
//                   onChange={(e) => setEstimateLocation(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#00d16a] focus:border-[#00d16a]"
//                 />
//               </div>
//               <button
//                 onClick={() => setShowEstimate(true)}
//                 className="bg-[#00d16a] hover:bg-[#00b85c] text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
//               >
//                 Get Estimate
//               </button>
//             </div>

//             {/* Estimate Result */}
//             {showEstimate && (
//               <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                 <div className="flex justify-between items-end mb-6">
//                   <div>
//                     <p className="text-sm text-gray-500">
//                       Estimated Price for {estimateLocation || "Your Property"}
//                     </p>
//                     <p className="text-4xl font-bold text-gray-900">
//                       AED 3,630,000
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-green-600 font-medium flex items-center gap-1 justify-end">
//                       <TrendingUp className="w-4 h-4" /> +5.2%
//                     </p>
//                     <p className="text-xs text-gray-400">Last 12 months</p>
//                   </div>
//                 </div>

//                 {/* Recharts Line Chart */}
//                 <div className="h-64 w-full">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={estimateData}>
//                       <defs>
//                         <linearGradient
//                           id="colorPrice"
//                           x1="0"
//                           y1="0"
//                           x2="0"
//                           y2="1"
//                         >
//                           <stop
//                             offset="5%"
//                             stopColor="#00d16a"
//                             stopOpacity={0.3}
//                           />
//                           <stop
//                             offset="95%"
//                             stopColor="#00d16a"
//                             stopOpacity={0}
//                           />
//                         </linearGradient>
//                       </defs>
//                       <CartesianGrid
//                         strokeDasharray="3 3"
//                         vertical={false}
//                         stroke="#E5E7EB"
//                       />
//                       <XAxis
//                         dataKey="month"
//                         axisLine={false}
//                         tickLine={false}
//                         tick={{ fill: "#6B7280", fontSize: 12 }}
//                       />
//                       <YAxis
//                         hide
//                         domain={["dataMin - 200000", "dataMax + 200000"]}
//                       />
//                       <Tooltip
//                         formatter={(value) => [
//                           `AED ${value.toLocaleString()}`,
//                           "Price",
//                         ]}
//                         contentStyle={{
//                           borderRadius: "8px",
//                           border: "1px solid #E5E7EB",
//                           boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
//                         }}
//                       />
//                       <Area
//                         type="monotone"
//                         dataKey="price"
//                         stroke="#00d16a"
//                         strokeWidth={3}
//                         fillOpacity={1}
//                         fill="url(#colorPrice)"
//                       />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>

//                 <p className="text-sm text-gray-500 mt-6 text-center">
//                   Get a free, instant estimation of your property's value based
//                   on recent market trends.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ================= SECTION 3: DUBAI TRANSACTIONS ================= */}
//       <section className="w-full bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               See what buyers are really paying with
//             </h2>
//             <h3 className="text-xl text-[#00d16a] font-semibold">
//               Dubai Transactions
//             </h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
//               <p className="text-sm text-gray-500">Sales Volume</p>
//               <p className="text-2xl font-bold text-gray-900">5,779</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
//               <p className="text-sm text-gray-500">Sales Value (AED)</p>
//               <p className="text-2xl font-bold text-gray-900">15.6 B</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
//               <p className="text-sm text-gray-500">Average Price (AED/sqft)</p>
//               <p className="text-2xl font-bold text-gray-900">2,754</p>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-gray-50 border-b border-gray-200">
//                   <tr>
//                     <th className="px-6 py-4 font-semibold text-gray-700">
//                       Location
//                     </th>
//                     <th className="px-6 py-4 font-semibold text-gray-700">
//                       Type
//                     </th>
//                     <th className="px-6 py-4 font-semibold text-gray-700">
//                       Price
//                     </th>
//                     <th className="px-6 py-4 font-semibold text-gray-700">
//                       Date
//                     </th>
//                     <th className="px-6 py-4 font-semibold text-gray-700">
//                       Size
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-100">
//                   {transactionsData.map((tx) => (
//                     <tr
//                       key={tx.id}
//                       className="hover:bg-gray-50 transition-colors"
//                     >
//                       <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-2">
//                         <MapPin className="w-4 h-4 text-[#00d16a]" />{" "}
//                         {tx.location}
//                       </td>
//                       <td className="px-6 py-4 text-gray-600">{tx.type}</td>
//                       <td className="px-6 py-4 font-semibold text-gray-900">
//                         {tx.price}
//                       </td>
//                       <td className="px-6 py-4 text-gray-500">{tx.date}</td>
//                       <td className="px-6 py-4 text-gray-500">{tx.size}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="p-4 border-t border-gray-200 text-center bg-gray-50">
//               <Link
//                 href="#"
//                 className="text-[#00d16a] font-medium text-sm hover:underline"
//               >
//                 Explore All Transactions →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= SECTION 4: FAQ ================= */}
//       <section className="w-full bg-white py-16 border-t border-gray-100">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 rounded-lg overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFaq(index)}
//                   className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
//                 >
//                   <span className="font-medium text-gray-800">{faq.q}</span>
//                   <ChevronDown
//                     className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {openFaq === index && (
//                   <div className="p-4 bg-white text-gray-600 text-sm border-t border-gray-200">
//                     {faq.a}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


















"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  ChevronDown,
  TrendingUp,
  BarChart3,
  HelpCircle,
  X,
  Search,
  Building2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const estimateData = [
  { month: "Jan", price: 3200000 },
  { month: "Feb", price: 3250000 },
  { month: "Mar", price: 3180000 },
  { month: "Apr", price: 3350000 },
  { month: "May", price: 3420000 },
  { month: "Jun", price: 3380000 },
  { month: "Jul", price: 3500000 },
  { month: "Aug", price: 3550000 },
  { month: "Sep", price: 3480000 },
  { month: "Oct", price: 3600000 },
  { month: "Nov", price: 3630000 },
  { month: "Dec", price: 3700000 },
];

const transactionsData = [
  { id: 1, location: "Dubai Marina", type: "Apartment", price: "AED 2,100,000", date: "12 May 2024", size: "1,200 sqft" },
  { id: 2, location: "Downtown Dubai", type: "Apartment", price: "AED 3,500,000", date: "10 May 2024", size: "1,800 sqft" },
  { id: 3, location: "Palm Jumeirah", type: "Villa", price: "AED 12,000,000", date: "08 May 2024", size: "4,500 sqft" },
  { id: 4, location: "Business Bay", type: "Apartment", price: "AED 1,450,000", date: "05 May 2024", size: "850 sqft" },
  { id: 5, location: "Arabian Ranches", type: "Villa", price: "AED 4,200,000", date: "01 May 2024", size: "3,200 sqft" },
];

const faqs = [
  { q: "How do I get started with selling?", a: "Simply fill out the form above and one of our agents will contact you within 24 hours." },
  { q: "What documents do I need to sell my property?", a: "You will need your Title Deed, Passport copy, and Emirates ID. Our agents will guide you through the rest." },
  { q: "How is the property valuation done?", a: "We use market data and recent transactions in your area to provide an accurate valuation." },
  { q: "How long does it take to sell a property?", a: "It typically takes 30-90 days depending on market conditions and property type." },
];

export default function SellPropertyPage() {
  const [purpose, setPurpose] = useState("sell");
  const [category, setCategory] = useState("residential");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [bedrooms, setBedrooms] = useState("2");
  const [rentFrequency, setRentFrequency] = useState("yearly");
  const [openFaq, setOpenFaq] = useState(null);
  const [estimateLocation, setEstimateLocation] = useState("");
  const [showEstimate, setShowEstimate] = useState(true);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-50 flex flex-col font-sans">
      {/* HERO & DYNAMIC FORM */}
      <section className="relative w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 lg:sticky lg:top-24">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Sell or rent your property with confidence!
              </h1>
              <p className="text-lg text-gray-600">
                Expert help from TrusT (Trusted) agents to sell your home from
                start to finish.
              </p>

              <div className="relative w-full h-64 md:h-80 mt-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#ecfdf5] to-blue-50 flex items-center justify-center border border-gray-100 shadow-md shadow-gray-200/50">
                <div className="text-center text-gray-500">
                  <Building2 className="w-16 h-16 mx-auto mb-3 text-[#00d16a]" />
                  <p className="font-medium text-gray-700">Property Illustration</p>
                  <p className="text-sm">Replace with your own asset</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-8">
              {/* SELL / RENT TOGGLE */}
              <div className="bg-gray-100 p-1.5 rounded-2xl flex mb-6">
                <button
                  onClick={() => setPurpose("sell")}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    purpose === "sell"
                      ? "bg-white shadow-md text-[#00d16a]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Sell
                </button>
                <button
                  onClick={() => setPurpose("rent")}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    purpose === "rent"
                      ? "bg-white shadow-md text-[#00d16a]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Rent
                </button>
              </div>

              <form className="space-y-6">
                {purpose === "rent" && (
                  <div className="animate-fadeIn">
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Rent Frequency
                    </label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setRentFrequency("yearly")}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                          rentFrequency === "yearly"
                            ? "border-[#00d16a] text-[#00d16a] bg-[#ecfdf5]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        Yearly
                      </button>
                      <button
                        type="button"
                        onClick={() => setRentFrequency("monthly")}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                          rentFrequency === "monthly"
                            ? "border-[#00d16a] text-[#00d16a] bg-[#ecfdf5]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Location*
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-[#00d16a]" />
                    <input
                      type="text"
                      placeholder="Enter location, building or community"
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Category & Type*
                  </label>

                  <div className="flex bg-gray-100 rounded-2xl p-1.5 mb-3">
                    <button
                      type="button"
                      onClick={() => setCategory("residential")}
                      className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                        category === "residential"
                          ? "bg-white shadow-md text-[#00d16a]"
                          : "text-gray-500"
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setCategory("commercial")}
                      className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${
                        category === "commercial"
                          ? "bg-white shadow-md text-[#00d16a]"
                          : "text-gray-500"
                      }`}
                    >
                      Commercial
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Apartment", "Villa", "Townhouse", "Penthouse", "Land", "Other"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPropertyType(type)}
                        className={`px-4 py-2 rounded-full text-sm border-2 transition-all ${
                          propertyType === type
                            ? "border-[#00d16a] text-[#00d16a] bg-[#ecfdf5]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">
                    Bedrooms*
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Studio", "1", "2", "3", "4", "5", "6", "7", "8+"].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBedrooms(num)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all ${
                          bedrooms === num
                            ? "border-[#00d16a] text-[#00d16a] bg-[#ecfdf5]"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Area (sqft)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter area"
                      className="w-full border border-gray-200 rounded-2xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                    />
                  </div>
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
                </div>

                {purpose === "sell" && (
                  <div className="animate-fadeIn">
                    <label className="block text-sm font-bold text-gray-800 mb-2">
                      Urgency
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["This month", "Within 2 months", "Flexible"].map((urg) => (
                        <button
                          key={urg}
                          type="button"
                          className="px-4 py-2 rounded-full text-sm border-2 border-gray-200 text-gray-600 hover:border-[#00d16a] hover:text-[#00d16a] hover:bg-[#ecfdf5] transition-all"
                        >
                          {urg}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#00d16a] to-[#00b85c] hover:shadow-lg hover:shadow-[#00d16a]/30 text-white font-bold py-3.5 rounded-2xl transition-all duration-200 mt-4 text-lg active:scale-[0.98]"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TRUESTIMATE */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              Start with the right price.
            </h2>
            <h3 className="text-xl text-[#00d16a] font-semibold">
              Instant valuation with TruEstimate™
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-8">
            <div className="flex gap-3 mb-8 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter building or community name..."
                  value={estimateLocation}
                  onChange={(e) => setEstimateLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                />
              </div>
              <button
                onClick={() => setShowEstimate(true)}
                className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] hover:shadow-lg hover:shadow-[#00d16a]/30 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-200 whitespace-nowrap active:scale-95"
              >
                Get Estimate
              </button>
            </div>

            {showEstimate && (
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-sm text-gray-500">
                      Estimated Price for {estimateLocation || "Your Property"}
                    </p>
                    <p className="text-4xl font-bold text-gray-900 tracking-tight">
                      AED 3,630,000
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#00d16a] font-semibold flex items-center gap-1 justify-end">
                      <TrendingUp className="w-4 h-4" /> +5.2%
                    </p>
                    <p className="text-xs text-gray-400">Last 12 months</p>
                  </div>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={estimateData}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00d16a" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#00d16a" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#6B7280", fontSize: 12 }}
                      />
                      <YAxis hide domain={["dataMin - 200000", "dataMax + 200000"]} />
                      <Tooltip
                        formatter={(value) => [`AED ${value.toLocaleString()}`, "Price"]}
                        contentStyle={{
                          borderRadius: "12px",
                          border: "1px solid #E5E7EB",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#00d16a"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorPrice)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <p className="text-sm text-gray-500 mt-6 text-center">
                  Get a free, instant estimation of your property's value based on recent market trends.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DUBAI TRANSACTIONS */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              See what buyers are really paying with
            </h2>
            <h3 className="text-xl text-[#00d16a] font-semibold">Dubai Transactions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 text-center">
              <p className="text-sm text-gray-500">Sales Volume</p>
              <p className="text-2xl font-bold text-gray-900">5,779</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 text-center">
              <p className="text-sm text-gray-500">Sales Value (AED)</p>
              <p className="text-2xl font-bold text-gray-900">15.6 B</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 text-center">
              <p className="text-sm text-gray-500">Average Price (AED/sqft)</p>
              <p className="text-2xl font-bold text-gray-900">2,754</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-700">Location</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Type</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Price</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {transactionsData.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#00d16a]" /> {tx.location}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{tx.type}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{tx.price}</td>
                      <td className="px-6 py-4 text-gray-500">{tx.date}</td>
                      <td className="px-6 py-4 text-gray-500">{tx.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-100 text-center bg-gray-50">
              <Link href="#" className="text-[#00d16a] font-semibold text-sm hover:underline">
                Explore All Transactions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-white text-gray-600 text-sm border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}