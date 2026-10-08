// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   MapPin,
//   Search,
//   TrendingUp,
//   ChevronRight,
//   BarChart3,
//   ChevronDown,
//   Play,
//   MessageSquare,
//   ArrowRight,
// } from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// // --- MOCK DATA for Chart ---
// const chartData = [
//   { month: "Jan", price: 3100000 },
//   { month: "Feb", price: 3250000 },
//   { month: "Mar", price: 3180000 },
//   { month: "Apr", price: 3350000 },
//   { month: "May", price: 3420000 },
//   { month: "Jun", price: 3500000 },
//   { month: "Jul", price: 3650000 },
//   { month: "Aug", price: 3550000 },
//   { month: "Sep", price: 3700000 },
//   { month: "Oct", price: 3800000 },
//   { month: "Nov", price: 3900000 },
//   { month: "Dec", price: 4000000 },
// ];

// // --- MOCK DATA for Recent Transactions ---
// const recentTransactions = [
//   { id: 1, location: "Dubai Marina", price: "AED 2.1M", date: "12 May 2024" },
//   { id: 2, location: "Downtown Dubai", price: "AED 3.5M", date: "10 May 2024" },
//   { id: 3, location: "Palm Jumeirah", price: "AED 12M", date: "08 May 2024" },
// ];


// export default function TruEstimatePage() {
//   // --- Tab State --
//   const [activeTab, setActiveTab] = useState("Properties");

//   // --- Form States ---
//   const [location, setLocation] = useState("");
//   const [saleRent, setSaleRent] = useState("Sale");
//   const [buyRent, setBuyRent] = useState("Buy");
//   const [soldRented, setSoldRented] = useState("Sold");
//   const [reportType, setReportType] = useState("Unit Number");
//   const [filterType, setFilterType] = useState("All");
//   const [showResult, setShowResult] = useState(false);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (location.trim()) {
//       setShowResult(true);
//     }
//   };

//   const tabs = [
//     { name: "Properties" },
//     { name: "New Projects" },
//     { name: "Transactions" },
//     { name: "TruEstimate™", isNew: true },
//     { name: "Agents" },
//   ];

//   return (
//     <div className="w-full bg-white flex flex-col font-sans">
//       {/* ================= HERO SECTION (Bayut Style with Dynamic Tabs) ================= */}
//       {/* ================= HERO SECTION (Fixed Height - No Image Resize) ================= */}
//       <section className="relative w-full pt-10 pb-16 overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50 min-h-[650px]">
//         {/* Skyline Background Image at Bottom - FIXED */}
//         <div className="absolute bottom-0 left-0 right-0 h-64 z-0">
//           <Image
//             src="/skyline_enhanced.png"
//             alt="Dubai Skyline"
//             fill
//             className="object-cover object-bottom"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-transparent to-transparent" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             TruEstimate™
//           </h1>
//           <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
//             Get a comprehensive, data-backed property valuation for your
//             freehold property in Dubai. This includes accurate sale and rental
//             estimates along with market insights.
//           </p>

//           {/* ===== TABS ===== */}
//           <div className="flex justify-center mb-0">
//             <div className="bg-white rounded-t-xl shadow-md flex items-center px-2 py-1 gap-1 flex-wrap justify-center">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.name}
//                   onClick={() => setActiveTab(tab.name)}
//                   className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
//                     activeTab === tab.name
//                       ? "bg-green-50 text-[#00d16a]"
//                       : "text-gray-700 hover:text-[#00d16a] hover:bg-gray-50"
//                   }`}
//                 >
//                   {tab.name}
//                   {tab.isNew && (
//                     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
//                       NEW
//                     </span>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ===== SEARCH BOX (FIXED HEIGHT - Image resize nahi hoga) ===== */}
//           <div className="bg-white rounded-b-xl rounded-tr-xl shadow-xl p-5 max-w-3xl mx-auto min-h-[220px] flex flex-col">
//             {/* Forms Wrapper - Grows to fill space */}
//             <div className="flex-1">
//               {/* ========== TAB 1: PROPERTIES ========== */}
//               {activeTab === "Properties" && (
//                 <>
//                   <div className="flex flex-col md:flex-row gap-3 mb-3">
//                     <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 shrink-0">
//                       {["Buy", "Rent"].map((option) => (
//                         <button
//                           key={option}
//                           onClick={() => setBuyRent(option)}
//                           className={`px-6 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
//                             buyRent === option
//                               ? "bg-green-50 text-[#00d16a] shadow-sm"
//                               : "text-gray-600 hover:text-gray-900"
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>

//                     <div className="relative flex-1">
//                       <input
//                         type="text"
//                         placeholder="Enter location"
//                         className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]"
//                       />
//                       <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
//                     </div>

//                     <button className="bg-[#00d16a] hover:bg-[#00b85c] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
//                       Search
//                     </button>
//                   </div>

//                   <div className="flex flex-wrap gap-3">
//                     <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 shrink-0">
//                       {["All", "Ready", "Off-Plan"].map((option) => (
//                         <button
//                           key={option}
//                           onClick={() => setFilterType(option)}
//                           className={`px-4 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
//                             filterType === option
//                               ? "bg-green-50 text-[#00d16a]"
//                               : "text-gray-600 hover:text-gray-900"
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Residential</option>
//                       <option>Commercial</option>
//                     </select>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Beds & Baths</option>
//                       <option>1 Bed</option>
//                       <option>2 Beds</option>
//                     </select>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Price (AED)</option>
//                       <option>Under 1M</option>
//                       <option>1M - 3M</option>
//                     </select>
//                   </div>
//                 </>
//               )}

//               {/* ========== TAB 2: NEW PROJECTS ========== */}
//               {activeTab === "New Projects" && (
//                 <>
//                   <div className="flex flex-col md:flex-row gap-3 mb-3">
//                     <div className="relative flex-1">
//                       <input
//                         type="text"
//                         placeholder="Enter location"
//                         className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]"
//                       />
//                       <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
//                     </div>
//                     <button className="bg-[#00d16a] hover:bg-[#00b85c] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
//                       Search
//                     </button>
//                   </div>

//                   <div className="flex flex-wrap gap-3">
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Residential</option>
//                       <option>Commercial</option>
//                     </select>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Handover By</option>
//                       <option>2026</option>
//                       <option>2027</option>
//                     </select>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Payment Plan</option>
//                       <option>Post Handover</option>
//                     </select>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>% Completion</option>
//                       <option>0-25%</option>
//                       <option>25-50%</option>
//                     </select>
//                   </div>
//                 </>
//               )}

//               {/* ========== TAB 3: TRANSACTIONS ========== */}
//               {activeTab === "Transactions" && (
//                 <>
//                   <div className="flex flex-col md:flex-row gap-3 mb-3">
//                     <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 shrink-0">
//                       {["Sold", "Rented"].map((option) => (
//                         <button
//                           key={option}
//                           onClick={() =>
//                             setSoldRented(option)
//                           }
//                           className={`px-6 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
//                             soldRented === option
//                               ? "bg-green-50 text-[#00d16a] shadow-sm"
//                               : "text-gray-600 hover:text-gray-900"
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>

//                     <div className="relative flex-1">
//                       <input
//                         type="text"
//                         defaultValue="Dubai"
//                         className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]"
//                       />
//                       <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
//                     </div>

//                     <button className="bg-[#00d16a] hover:bg-[#00b85c] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
//                       Search
//                     </button>
//                   </div>

//                   <div className="flex flex-wrap gap-3">
//                     <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 shrink-0">
//                       {["All", "Ready", "Off-Plan"].map((option) => (
//                         <button
//                           key={option}
//                           className={`px-4 py-2 text-xs font-medium rounded-md transition-all ${
//                             option === "All"
//                               ? "bg-green-50 text-[#00d16a]"
//                               : "text-gray-600"
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Residential</option>
//                       <option>Commercial</option>
//                     </select>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Beds</option>
//                       <option>1</option>
//                       <option>2</option>
//                     </select>
//                     <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg py-2.5 px-3 text-xs font-medium focus:outline-none">
//                       <option>Price (AED)</option>
//                       <option>Under 1M</option>
//                       <option>1M - 3M</option>
//                     </select>
//                   </div>
//                 </>
//               )}

//               {/* ========== TAB 4: TRUESTIMATE™ ========== */}
//               {activeTab === "TruEstimate™" && (
//                 <>
//                   <div className="flex flex-col md:flex-row gap-3 mb-3">
//                     <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 shrink-0">
//                       {["Sale", "Rent"].map((option) => (
//                         <button
//                           key={option}
//                           onClick={() => setSaleRent(option)}
//                           className={`px-6 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
//                             saleRent === option
//                               ? "bg-green-50 text-[#00d16a] shadow-sm"
//                               : "text-gray-600 hover:text-gray-900"
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>

//                     <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 flex-1">
//                       {["Unit Number", "Title Deed", "Oqood"].map((option) => (
//                         <button
//                           key={option}
//                           onClick={() => setReportType(option)}
//                           className={`flex-1 py-2 text-xs font-medium rounded-md transition-all ${
//                             reportType === option
//                               ? "bg-green-50 text-[#00d16a]"
//                               : "text-gray-600 hover:text-gray-900"
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex flex-col md:flex-row gap-3">
//                     <div className="relative flex-1">
//                       <input
//                         type="text"
//                         placeholder="Enter location name"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]"
//                       />
//                       <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
//                     </div>

//                     <div className="relative md:w-48">
//                       <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg py-3 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00d16a]">
//                         <option>Unit Number</option>
//                         <option>101</option>
//                         <option>202</option>
//                       </select>
//                       <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
//                     </div>

//                     <button
//                       onClick={handleSearch}
//                       className="bg-[#00d16a] hover:bg-[#00b85c] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
//                     >
//                       Get Report
//                     </button>
//                   </div>

//                   <p className="text-[11px] text-gray-500 mt-4 leading-relaxed text-center">
//                     *Start by typing a neighbourhood, community or building
//                     name. To generate a report, select a detailed sub-location
//                     (e.g. building or villa cluster) and the unit number as per
//                     the Title Deed.{" "}
//                     <Link
//                       href="#"
//                       className="text-[#00d16a] font-medium hover:underline"
//                     >
//                       View Sample
//                     </Link>
//                   </p>
//                 </>
//               )}

//               {/* ========== TAB 5: AGENTS ========== */}
//               {activeTab === "Agents" && (
//                 <>
//                   <div className="flex flex-col md:flex-row gap-3">
//                     <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200 shrink-0">
//                       {["Buy", "Rent"].map((option) => (
//                         <button
//                           key={option}
//                           onClick={() => setBuyRent(option)}
//                           className={`px-6 py-2 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
//                             buyRent === option
//                               ? "bg-green-50 text-[#00d16a] shadow-sm"
//                               : "text-gray-600 hover:text-gray-900"
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>

//                     <div className="relative flex-1">
//                       <input
//                         type="text"
//                         placeholder="Enter location"
//                         className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]"
//                       />
//                       <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
//                     </div>

//                     <button className="bg-[#00d16a] hover:bg-[#00b85c] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
//                       Search
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= RESULT SECTION ================= */}
//       {showResult && (
//         <section className="w-full bg-gray-50 py-16 border-t border-gray-200 animate-fadeIn">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <p className="text-sm text-gray-500 mb-1">
//                   Estimated Value for {location || "Your Property"}
//                 </p>
//                 <p className="text-3xl font-bold text-gray-900">
//                   AED 4,000,000
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <p className="text-sm text-gray-500 mb-1">
//                   Price Trend (12 Months)
//                 </p>
//                 <p className="text-3xl font-bold text-green-600 flex items-center gap-2">
//                   <TrendingUp className="w-6 h-6" /> +8.5%
//                 </p>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <p className="text-sm text-gray-500 mb-1">Avg. Price / sqft</p>
//                 <p className="text-3xl font-bold text-gray-900">AED 2,800</p>
//               </div>
//             </div>

//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200 mb-10">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Price Trend Over Time
//                 </h2>
//                 <span className="text-xs bg-green-100 text-[#00d16a] px-3 py-1 rounded-full font-medium">
//                   Live Data
//                 </span>
//               </div>

//               <div className="h-80 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart
//                     data={chartData}
//                     margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
//                   >
//                     <defs>
//                       <linearGradient
//                         id="colorPrice"
//                         x1="0"
//                         y1="0"
//                         x2="0"
//                         y2="1"
//                       >
//                         <stop
//                           offset="5%"
//                           stopColor="#00d16a"
//                           stopOpacity={0.3}
//                         />
//                         <stop
//                           offset="95%"
//                           stopColor="#00d16a"
//                           stopOpacity={0}
//                         />
//                       </linearGradient>
//                     </defs>
//                     <CartesianGrid
//                       strokeDasharray="3 3"
//                       vertical={false}
//                       stroke="#E5E7EB"
//                     />
//                     <XAxis
//                       dataKey="month"
//                       axisLine={false}
//                       tickLine={false}
//                       tick={{ fill: "#6B7280", fontSize: 12 }}
//                       dy={10}
//                     />
//                     <YAxis
//                       hide
//                       domain={["dataMin - 200000", "dataMax + 200000"]}
//                     />
//                     <Tooltip
//                       formatter={(value) => [
//                         `AED ${value.toLocaleString()}`,
//                         "Price",
//                       ]}
//                       contentStyle={{
//                         borderRadius: "12px",
//                         border: "1px solid #E5E7EB",
//                         boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
//                       }}
//                     />
//                     <Area
//                       type="monotone"
//                       dataKey="price"
//                       stroke="#00d16a"
//                       strokeWidth={3}
//                       fillOpacity={1}
//                       fill="url(#colorPrice)"
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="p-6 border-b border-gray-200 flex justify-between items-center">
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Recent Transactions in {location || "Area"}
//                 </h2>
//                 <Link
//                   href="/transactions"
//                   className="text-sm text-[#00d16a] font-medium hover:underline flex items-center gap-1"
//                 >
//                   View All <ChevronRight className="w-4 h-4" />
//                 </Link>
//               </div>
//               <div className="divide-y divide-gray-100">
//                 {recentTransactions.map((tx) => (
//                   <div
//                     key={tx.id}
//                     className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
//                   >
//                     <div>
//                       <p className="font-medium text-gray-900">{tx.location}</p>
//                       <p className="text-xs text-gray-500">{tx.date}</p>
//                     </div>
//                     <p className="font-bold text-[#00d16a]">{tx.price}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ================= HOW IT WORKS ================= */}
//       <section className="w-full bg-white py-16 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             How TruEstimate™ Works
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-6">
//               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Search className="w-8 h-8 text-[#00d16a]" />
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 1. Search Property
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Enter your building or community name to get started.
//               </p>
//             </div>
//             <div className="text-center p-6">
//               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <BarChart3 className="w-8 h-8 text-[#00d16a]" />
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 2. Get Instant Value
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Our algorithm analyzes recent market data to give you a price.
//               </p>
//             </div>
//             <div className="text-center p-6">
//               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <TrendingUp className="w-8 h-8 text-[#00d16a]" />
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 3. Track Trends
//               </h3>
//               <p className="text-sm text-gray-600">
//                 See how property prices have changed over the last 12 months.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

















"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Search,
  TrendingUp,
  ChevronRight,
  BarChart3,
  ChevronDown,
  Play,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", price: 3100000 },
  { month: "Feb", price: 3250000 },
  { month: "Mar", price: 3180000 },
  { month: "Apr", price: 3350000 },
  { month: "May", price: 3420000 },
  { month: "Jun", price: 3500000 },
  { month: "Jul", price: 3650000 },
  { month: "Aug", price: 3550000 },
  { month: "Sep", price: 3700000 },
  { month: "Oct", price: 3800000 },
  { month: "Nov", price: 3900000 },
  { month: "Dec", price: 4000000 },
];

const recentTransactions = [
  { id: 1, location: "Dubai Marina", price: "AED 2.1M", date: "12 May 2024" },
  { id: 2, location: "Downtown Dubai", price: "AED 3.5M", date: "10 May 2024" },
  { id: 3, location: "Palm Jumeirah", price: "AED 12M", date: "08 May 2024" },
];

export default function TruEstimatePage() {
  const [activeTab, setActiveTab] = useState("Properties");
  const [location, setLocation] = useState("");
  const [saleRent, setSaleRent] = useState("Sale");
  const [buyRent, setBuyRent] = useState("Buy");
  const [soldRented, setSoldRented] = useState("Sold");
  const [reportType, setReportType] = useState("Unit Number");
  const [filterType, setFilterType] = useState("All");
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      setShowResult(true);
    }
  };

  const tabs = [
    { name: "Properties" },
    { name: "New Projects" },
    { name: "Transactions" },
    { name: "TruEstimate™", isNew: true },
    { name: "Agents" },
  ];

  return (
    <div className="w-full bg-white flex flex-col font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full pt-10 pb-16 overflow-hidden bg-gradient-to-b from-[#ecfdf5] via-sky-50 to-white min-h-[650px]">
        <div className="absolute bottom-0 left-0 right-0 h-64 z-0">
          <Image
            src="/skyline_enhanced.png"
            alt="Dubai Skyline"
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            TruEstimate™
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get a comprehensive, data-backed property valuation for your freehold property in Dubai. This includes accurate sale and rental estimates along with market insights.
          </p>

          {/* TABS */}
          <div className="flex justify-center mb-0">
            <div className="bg-white rounded-t-2xl shadow-lg flex items-center px-2 py-1 gap-1 flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeTab === tab.name
                      ? "bg-[#ecfdf5] text-[#00d16a]"
                      : "text-gray-600 hover:text-[#00d16a] hover:bg-gray-50"
                  }`}
                >
                  {tab.name}
                  {tab.isNew && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* SEARCH BOX */}
          <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-2xl p-5 max-w-3xl mx-auto min-h-[220px] flex flex-col">
            <div className="flex-1">
              {/* PROPERTIES */}
              {activeTab === "Properties" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex bg-gray-100 rounded-xl p-1 shrink-0">
                      {["Buy", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setBuyRent(option)}
                          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                            buyRent === option
                              ? "bg-white shadow-md text-[#00d16a]"
                              : "text-gray-500"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter location"
                        className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#00d16a]" />
                    </div>

                    <button className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] hover:shadow-lg hover:shadow-[#00d16a]/30 text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex bg-gray-100 rounded-xl p-1 shrink-0">
                      {["All", "Ready", "Off-Plan"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFilterType(option)}
                          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                            filterType === option
                              ? "bg-white shadow-md text-[#00d16a]"
                              : "text-gray-500"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all cursor-pointer">
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all cursor-pointer">
                      <option>Beds & Baths</option>
                      <option>1 Bed</option>
                      <option>2 Beds</option>
                    </select>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all cursor-pointer">
                      <option>Price (AED)</option>
                      <option>Under 1M</option>
                      <option>1M - 3M</option>
                    </select>
                  </div>
                </>
              )}

              {/* NEW PROJECTS */}
              {activeTab === "New Projects" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter location"
                        className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#00d16a]" />
                    </div>
                    <button className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all cursor-pointer">
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all cursor-pointer">
                      <option>Handover By</option>
                      <option>2026</option>
                      <option>2027</option>
                    </select>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all cursor-pointer">
                      <option>Payment Plan</option>
                      <option>Post Handover</option>
                    </select>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all cursor-pointer">
                      <option>% Completion</option>
                      <option>0-25%</option>
                      <option>25-50%</option>
                    </select>
                  </div>
                </>
              )}

              {/* TRANSACTIONS */}
              {activeTab === "Transactions" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex bg-gray-100 rounded-xl p-1 shrink-0">
                      {["Sold", "Rented"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setSoldRented(option)}
                          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                            soldRented === option
                              ? "bg-white shadow-md text-[#00d16a]"
                              : "text-gray-500"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        defaultValue="Dubai"
                        className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#00d16a]" />
                    </div>

                    <button className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95">
                      Search
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex bg-gray-100 rounded-xl p-1 shrink-0">
                      {["All", "Ready", "Off-Plan"].map((option) => (
                        <button
                          key={option}
                          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                            option === "All" ? "bg-white shadow-md text-[#00d16a]" : "text-gray-500"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none transition-all cursor-pointer">
                      <option>Residential</option>
                      <option>Commercial</option>
                    </select>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none transition-all cursor-pointer">
                      <option>Beds</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                    <select className="appearance-none bg-white border border-gray-200 rounded-xl py-2.5 px-3 text-xs font-medium focus:outline-none transition-all cursor-pointer">
                      <option>Price (AED)</option>
                      <option>Under 1M</option>
                      <option>1M - 3M</option>
                    </select>
                  </div>
                </>
              )}

              {/* TRUESTIMATE™ */}
              {activeTab === "TruEstimate™" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3 mb-3">
                    <div className="flex bg-gray-100 rounded-xl p-1 shrink-0">
                      {["Sale", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setSaleRent(option)}
                          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                            saleRent === option
                              ? "bg-white shadow-md text-[#00d16a]"
                              : "text-gray-500"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="flex bg-gray-100 rounded-xl p-1 flex-1">
                      {["Unit Number", "Title Deed", "Oqood"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setReportType(option)}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                            reportType === option
                              ? "bg-white shadow-md text-[#00d16a]"
                              : "text-gray-500"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter location name"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#00d16a]" />
                    </div>

                    <div className="relative md:w-48">
                      <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-3 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 transition-all cursor-pointer">
                        <option>Unit Number</option>
                        <option>101</option>
                        <option>202</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    <button
                      onClick={handleSearch}
                      className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] hover:shadow-lg hover:shadow-[#00d16a]/30 text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95"
                    >
                      Get Report
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-500 mt-4 leading-relaxed text-center">
                    *Start by typing a neighbourhood, community or building name. To generate a report, select a detailed sub-location (e.g. building or villa cluster) and the unit number as per the Title Deed.{" "}
                    <Link href="#" className="text-[#00d16a] font-semibold hover:underline">View Sample</Link>
                  </p>
                </>
              )}

              {/* AGENTS */}
              {activeTab === "Agents" && (
                <>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex bg-gray-100 rounded-xl p-1 shrink-0">
                      {["Buy", "Rent"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setBuyRent(option)}
                          className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                            buyRent === option
                              ? "bg-white shadow-md text-[#00d16a]"
                              : "text-gray-500"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Enter location"
                        className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
                      />
                      <MapPin className="absolute right-3.5 top-3.5 w-5 h-5 text-[#00d16a]" />
                    </div>

                    <button className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap active:scale-95">
                      Search
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RESULT SECTION */}
      {showResult && (
        <section className="w-full bg-gray-50 py-16 border-t border-gray-100 animate-fadeIn">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Estimated Value for {location || "Your Property"}</p>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">AED 4,000,000</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Price Trend (12 Months)</p>
                <p className="text-3xl font-bold text-[#00d16a] flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" /> +8.5%
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Avg. Price / sqft</p>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">AED 2,800</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 mb-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Price Trend Over Time</h2>
                <span className="text-xs bg-[#ecfdf5] text-[#00d16a] px-3 py-1 rounded-full font-semibold">Live Data</span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00d16a" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00d16a" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} dy={10} />
                    <YAxis hide domain={["dataMin - 200000", "dataMax + 200000"]} />
                    <Tooltip
                      formatter={(value) => [`AED ${value.toLocaleString()}`, "Price"]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #E5E7EB",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Area type="monotone" dataKey="price" stroke="#00d16a" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md shadow-gray-200/50 border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Recent Transactions in {location || "Area"}</h2>
                <Link href="/transactions" className="text-sm text-[#00d16a] font-semibold hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="divide-y divide-gray-100">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div>
                      <p className="font-semibold text-gray-900">{tx.location}</p>
                      <p className="text-xs text-gray-500">{tx.date}</p>
                    </div>
                    <p className="font-bold text-[#00d16a]">{tx.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 tracking-tight">
            How TruEstimate™ Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-3xl bg-gradient-to-b from-[#ecfdf5] to-white border border-[#a7f3d0]/50 shadow-md shadow-[#00d16a]/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#00d16a]/10">
                <Search className="w-8 h-8 text-[#00d16a]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">1. Search Property</h3>
              <p className="text-sm text-gray-600">Enter your building or community name to get started.</p>
            </div>
            <div className="text-center p-6 rounded-3xl bg-gradient-to-b from-[#ecfdf5] to-white border border-[#a7f3d0]/50 shadow-md shadow-[#00d16a]/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#00d16a]/10">
                <BarChart3 className="w-8 h-8 text-[#00d16a]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">2. Get Instant Value</h3>
              <p className="text-sm text-gray-600">Our algorithm analyzes recent market data to give you a price.</p>
            </div>
            <div className="text-center p-6 rounded-3xl bg-gradient-to-b from-[#ecfdf5] to-white border border-[#a7f3d0]/50 shadow-md shadow-[#00d16a]/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#00d16a]/10">
                <TrendingUp className="w-8 h-8 text-[#00d16a]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">3. Track Trends</h3>
              <p className="text-sm text-gray-600">See how property prices have changed over the last 12 months.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
