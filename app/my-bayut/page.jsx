// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { 
//   Search, MapPin, Sun, Clock, ChevronRight, 
//   BookOpen, TrendingUp, Tag, User, Calendar,
//   Smartphone, ChevronLeft
// } from 'lucide-react';

// // --- MOCK DATA for Articles ---
// const featuredArticle = {
//   id: 1,
//   title: 'Popular Areas to Rent Flats and Villas in Palm Jumeirah',
//   category: 'MARKET TRENDS',
//   readTime: '14 min read',
//   image: '/blog-featured.jpg',
//   isFeatured: true,
// };

// const trendingArticles = [
//   { id: 2, title: 'Dubai Marina vs JLT: Where Should You Live?', category: 'MARKET TRENDS', readTime: '8 min read', image: '/blog-trend1.jpg' },
//   { id: 3, title: 'Pros and Cons of Living in...', category: 'MARKET TRENDS', readTime: '7 min read', image: '/blog-trend2.jpg' },
//   { id: 4, title: 'Naia Island: The Ultimate L...', category: 'MARKET TRENDS', readTime: '5 min read', image: '/blog-trend3.jpg' },
// ];

// const mainArticles = [
//   { id: 5, title: 'How Your AECB Credit Score Affects Home Loan Approval', category: 'TIPS', readTime: '5 min read', date: '22 Sep 2026', image: '/blog1.jpg' },
//   { id: 6, title: 'Second Mortgage on a Property in Dubai: Rules, Costs and Registration', category: 'TIPS', readTime: '7 min read', date: '22 Sep 2026', image: '/blog2.jpg' },
//   { id: 7, title: 'Legal Implications of Bounced Cheques in UAE Property Transactions', category: 'RULES & REGULATIONS', readTime: '8 min read', date: '22 Sep 2026', image: '/blog3.jpg' },
//   { id: 8, title: 'Dubai Property Handover: Procedure, Cost & Checklist', category: 'RULES & REGULATIONS', readTime: '15 min read', date: '22 Sep 2026', image: '/blog4.jpg' },
//   { id: 9, title: 'What is a Building Completion Certificate?', category: 'RULES & REGULATIONS', readTime: '4 min read', date: '22 Sep 2026', image: '/blog5.jpg' },
//   { id: 10, title: 'What Is Property Snagging & What To Include In Your Snagging List', category: 'MARKET TRENDS', readTime: '4 min read', date: '22 Sep 2026', image: '/blog6.jpg' },
//   { id: 11, title: 'How to Sell a Property in Dubai from Abroad: Complete POA Process Guide', category: 'RULES & REGULATIONS', readTime: '9 min read', date: '22 Sep 2026', image: '/blog7.jpg' },
//   { id: 12, title: 'How to Write a Non-Renewal Notice to Your Landlord', category: 'TIPS', readTime: '6 min read', date: '22 Sep 2026', image: '/blog8.jpg' },
// ];

// const popularArticles = [
//   { id: 13, title: 'Complete Guide to Real Estate Investor Visa in the UAE', date: '29 Sep 2026', image: '/pop1.jpg' },
//   { id: 14, title: 'Understanding Rent Increase Rules in Dubai', date: '28 Sep 2026', image: '/pop2.jpg' },
//   { id: 15, title: 'Top Luxury Villa Communities in Dubai', date: '22 Sep 2026', image: '/pop3.jpg' },
// ];

// export default function MyBayutPage() {
//   return (
//     <div className="w-full bg-white flex flex-col font-sans min-h-screen">
      
//       {/* ================= TOP NAVBAR ================= */}
//       <header className="w-full bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <Link href="/" className="text-xl font-bold text-[#00d16a] flex items-center gap-1">
//               <span className="text-2xl">my</span>Divine Bricks
//             </Link>

//             {/* Nav Links */}
//             <div className="hidden md:flex space-x-8">
//               <Link href="/new-projects" className="text-gray-700 hover:text-[#00d16a] text-sm font-medium">NEW PROJECTS</Link>
//               <Link href="/find-agent" className="text-gray-700 hover:text-[#00d16a] text-sm font-medium">FIND MY AGENT</Link>
//               <Link href="/contact" className="text-gray-700 hover:text-[#00d16a] text-sm font-medium">GET IN TOUCH</Link>
//             </div>

//             {/* Right Side: Search & Weather */}
//             <div className="flex items-center gap-4">
//               <button className="p-2 text-gray-500 hover:text-[#00d16a]">
//                 <Search className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Sub Navigation Bar */}
//         <div className="w-full border-t border-gray-100 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-xs text-gray-500">
//             <div className="flex gap-6">
//               <Link href="#" className="hover:text-[#00d16a] font-medium">MARKET TRENDS</Link>
//               <Link href="#" className="hover:text-[#00d16a] font-medium">MY HOME</Link>
//               <Link href="#" className="hover:text-[#00d16a] font-medium">LAWS</Link>
//               <Link href="#" className="hover:text-[#00d16a] font-medium">TIPS</Link>
//               <Link href="#" className="hover:text-[#00d16a] font-medium">PARTNERS</Link>
//               <Link href="#" className="hover:text-[#00d16a] font-medium">LIFE AT BAYUT</Link>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Dubai, UAE</span>
//               <span className="flex items-center gap-1"><Sun className="w-3 h-3" /> 33°C</span>
//               <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 9:44</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ================= MAIN CONTENT ================= */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
//         {/* ===== SECTION 1: HERO & TRENDING ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
//           {/* Featured Article (Left - 2 columns) */}
//           <div className="lg:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer h-96">
//             {/* Background Image Placeholder */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
//             <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
//               <Image src="/blog-featured.jpg" alt="Featured" fill className="object-cover" />
//             </div>
            
//             {/* Content */}
//             <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
//               <span className="bg-[#00d16a] text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">
//                 {featuredArticle.category}
//               </span>
//               <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
//                 {featuredArticle.title}
//               </h2>
//               <p className="text-sm text-gray-300 flex items-center gap-2">
//                 <Clock className="w-4 h-4" /> {featuredArticle.readTime}
//               </p>
//             </div>
//             {/* Featured Badge */}
//             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded z-20">
//               Featured
//             </div>
//           </div>

//           {/* Trending Articles (Right - 1 column) */}
//           <div className="lg:col-span-1 space-y-4">
//             <div className="flex items-center justify-between mb-2">
//               <h3 className="font-bold text-gray-900 text-lg">Trending</h3>
//             </div>
//             {trendingArticles.map((article) => (
//               <div key={article.id} className="relative rounded-lg overflow-hidden group cursor-pointer h-28">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
//                 <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
//                   <Image src={article.image} alt={article.title} fill className="object-cover" />
//                 </div>
//                 <div className="absolute bottom-0 left-0 p-3 z-20">
//                   <span className="bg-[#00d16a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded mb-1 inline-block">
//                     {article.category}
//                   </span>
//                   <h4 className="text-sm font-bold text-white leading-tight line-clamp-2">{article.title}</h4>
//                   <p className="text-[10px] text-gray-300 mt-1">{article.readTime}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ===== SECTION 2: MAIN GRID & SIDEBAR ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
//           {/* Main Article Grid (Left - 3 columns) */}
//           <div className="lg:col-span-3">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {mainArticles.map((article) => (
//                 <div key={article.id} className="group cursor-pointer flex flex-col">
//                   {/* Image */}
//                   <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gray-200">
//                     <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
//                     <span className={`absolute bottom-2 left-2 text-[10px] font-bold px-2 py-1 rounded ${
//                       article.category === 'TIPS' ? 'bg-green-500' : 
//                       article.category === 'RULES & REGULATIONS' ? 'bg-blue-600' : 'bg-purple-600'
//                     } text-white`}>
//                       {article.category}
//                     </span>
//                   </div>
//                   {/* Content */}
//                   <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#00d16a] transition-colors">
//                     {article.title}
//                   </h3>
//                   <p className="text-xs text-gray-500 flex items-center gap-2 mt-auto">
//                     <Clock className="w-3 h-3" /> {article.readTime} • Updated: {article.date}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* App Promo Banner */}
//             <div className="my-12 bg-[#00d16a] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between text-white">
//               <div className="flex items-center gap-4 mb-4 md:mb-0">
//                 <div className="bg-white/20 p-3 rounded-lg">
//                   <Smartphone className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">Get the Divine Bricks App</h3>
//                   <p className="text-sm opacity-90">Find your dream home on the go.</p>
//                 </div>
//               </div>
//               <div className="flex gap-3">
//                 <button className="bg-black/20 hover:bg-black/30 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
//                    App Store
//                 </button>
//                 <button className="bg-black/20 hover:bg-black/30 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
//                    Google Play
//                 </button>
//               </div>
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center items-center gap-2 mt-8">
//               <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//               <button className="w-9 h-9 rounded border border-[#00d16a] bg-[#00d16a] text-white flex items-center justify-center text-sm font-medium">1</button>
//               <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">2</button>
//               <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">3</button>
//               <span className="text-gray-400">...</span>
//               <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">202</button>
//               <button className="w-9 h-9 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Sidebar (Right - 1 column) */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               <h3 className="font-bold text-gray-900 text-lg mb-4 border-b border-gray-200 pb-2">Popular</h3>
//               <div className="space-y-4">
//                 {popularArticles.map((article) => (
//                   <div key={article.id} className="flex gap-3 group cursor-pointer">
//                     <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0 bg-gray-200">
//                       <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform" />
//                     </div>
//                     <div>
//                       <h4 className="text-sm font-bold text-gray-800 leading-tight group-hover:text-[#00d16a] transition-colors line-clamp-2">
//                         {article.title}
//                       </h4>
//                       <p className="text-[10px] text-gray-500 mt-1">Updated: {article.date}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* ================= FOOTER ================= */}
//       <footer className="w-full bg-gray-900 text-white py-12 mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <h4 className="font-bold text-sm mb-3">ABOUT US</h4>
//               <ul className="space-y-2 text-xs text-gray-400">
//                 <li><Link href="#" className="hover:text-white">About Divine Bricks</Link></li>
//                 <li><Link href="#" className="hover:text-white">Careers</Link></li>
//                 <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-sm mb-3">POPULAR SEARCHES</h4>
//               <ul className="space-y-2 text-xs text-gray-400">
//                 <li><Link href="#" className="hover:text-white">Apartments for Sale</Link></li>
//                 <li><Link href="#" className="hover:text-white">Villas for Sale</Link></li>
//                 <li><Link href="#" className="hover:text-white">Off Plan Properties</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-sm mb-3">LEGAL</h4>
//               <ul className="space-y-2 text-xs text-gray-400">
//                 <li><Link href="#" className="hover:text-white">Terms & Privacy Policy</Link></li>
//                 <li><Link href="#" className="hover:text-white">Cookie Policy</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-sm mb-3">DOWNLOAD APP</h4>
//               <div className="flex gap-2">
//                 <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded text-[10px] flex items-center gap-1 transition-colors">
//                    App Store
//                 </button>
//                 <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded text-[10px] flex items-center gap-1 transition-colors">
//                    Google Play
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
//             © 2026 Divine Bricks. All rights reserved.
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }


















'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, MapPin, Sun, Clock, ChevronRight, 
  BookOpen, TrendingUp, Tag, User, Calendar,
  Smartphone, ChevronLeft
} from 'lucide-react';

const featuredArticle = {
  id: 1,
  title: 'Popular Areas to Rent Flats and Villas in Palm Jumeirah',
  category: 'MARKET TRENDS',
  readTime: '14 min read',
  image: '/blog-featured.jpg',
  isFeatured: true,
};

const trendingArticles = [
  { id: 2, title: 'Dubai Marina vs JLT: Where Should You Live?', category: 'MARKET TRENDS', readTime: '8 min read', image: '/blog-trend1.jpg' },
  { id: 3, title: 'Pros and Cons of Living in...', category: 'MARKET TRENDS', readTime: '7 min read', image: '/blog-trend2.jpg' },
  { id: 4, title: 'Naia Island: The Ultimate L...', category: 'MARKET TRENDS', readTime: '5 min read', image: '/blog-trend3.jpg' },
];

const mainArticles = [
  { id: 5, title: 'How Your AECB Credit Score Affects Home Loan Approval', category: 'TIPS', readTime: '5 min read', date: '22 Sep 2026', image: '/blog1.jpg' },
  { id: 6, title: 'Second Mortgage on a Property in Dubai: Rules, Costs and Registration', category: 'TIPS', readTime: '7 min read', date: '22 Sep 2026', image: '/blog2.jpg' },
  { id: 7, title: 'Legal Implications of Bounced Cheques in UAE Property Transactions', category: 'RULES & REGULATIONS', readTime: '8 min read', date: '22 Sep 2026', image: '/blog3.jpg' },
  { id: 8, title: 'Dubai Property Handover: Procedure, Cost & Checklist', category: 'RULES & REGULATIONS', readTime: '15 min read', date: '22 Sep 2026', image: '/blog4.jpg' },
  { id: 9, title: 'What is a Building Completion Certificate?', category: 'RULES & REGULATIONS', readTime: '4 min read', date: '22 Sep 2026', image: '/blog5.jpg' },
  { id: 10, title: 'What Is Property Snagging & What To Include In Your Snagging List', category: 'MARKET TRENDS', readTime: '4 min read', date: '22 Sep 2026', image: '/blog6.jpg' },
  { id: 11, title: 'How to Sell a Property in Dubai from Abroad: Complete POA Process Guide', category: 'RULES & REGULATIONS', readTime: '9 min read', date: '22 Sep 2026', image: '/blog7.jpg' },
  { id: 12, title: 'How to Write a Non-Renewal Notice to Your Landlord', category: 'TIPS', readTime: '6 min read', date: '22 Sep 2026', image: '/blog8.jpg' },
];

const popularArticles = [
  { id: 13, title: 'Complete Guide to Real Estate Investor Visa in the UAE', date: '29 Sep 2026', image: '/pop1.jpg' },
  { id: 14, title: 'Understanding Rent Increase Rules in Dubai', date: '28 Sep 2026', image: '/pop2.jpg' },
  { id: 15, title: 'Top Luxury Villa Communities in Dubai', date: '22 Sep 2026', image: '/pop3.jpg' },
];

export default function MyBayutPage() {
  return (
    <div className="w-full bg-white flex flex-col font-sans min-h-screen">
      
      {/* TOP NAVBAR */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-[#00d16a] flex items-center gap-1">
              <span className="text-2xl">my</span><span className="text-[#0e4b3e]">Divine Bricks</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link href="/new-projects" className="text-gray-600 hover:text-[#00d16a] text-sm font-medium transition-colors">NEW PROJECTS</Link>
              <Link href="/find-agent" className="text-gray-600 hover:text-[#00d16a] text-sm font-medium transition-colors">FIND MY AGENT</Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#00d16a] text-sm font-medium transition-colors">GET IN TOUCH</Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-[#00d16a] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-100 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-xs text-gray-500">
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#00d16a] font-medium transition-colors">MARKET TRENDS</Link>
              <Link href="#" className="hover:text-[#00d16a] font-medium transition-colors">MY HOME</Link>
              <Link href="#" className="hover:text-[#00d16a] font-medium transition-colors">LAWS</Link>
              <Link href="#" className="hover:text-[#00d16a] font-medium transition-colors">TIPS</Link>
              <Link href="#" className="hover:text-[#00d16a] font-medium transition-colors">PARTNERS</Link>
              <Link href="#" className="hover:text-[#00d16a] font-medium transition-colors">LIFE AT BAYUT</Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Dubai, UAE</span>
              <span className="flex items-center gap-1"><Sun className="w-3 h-3" /> 33°C</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 9:44</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* HERO & TRENDING */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer h-96 shadow-xl shadow-gray-200/50">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
              <Image src="/blog-featured.jpg" alt="Featured" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
              <span className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 inline-block">
                {featuredArticle.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <Clock className="w-4 h-4" /> {featuredArticle.readTime}
              </p>
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-lg">
              Featured
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-900 text-lg tracking-tight">Trending</h3>
            </div>
            {trendingArticles.map((article) => (
              <div key={article.id} className="relative rounded-2xl overflow-hidden group cursor-pointer h-28 shadow-md shadow-gray-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent z-10" />
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-3 z-20">
                  <span className="bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 inline-block">
                    {article.category}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-tight line-clamp-2">{article.title}</h4>
                  <p className="text-[10px] text-gray-300 mt-1">{article.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainArticles.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-gray-200 shadow-md shadow-gray-200/50">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className={`absolute bottom-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      article.category === 'TIPS' ? 'bg-gradient-to-r from-[#00d16a] to-[#00b85c]' : 
                      article.category === 'RULES & REGULATIONS' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-purple-600'
                    } text-white shadow-lg`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#00d16a] transition-colors tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-2 mt-auto">
                    <Clock className="w-3 h-3" /> {article.readTime} • Updated: {article.date}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-12 bg-gradient-to-br from-[#00d16a] via-[#00b85c] to-[#0e4b3e] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-xl shadow-[#00d16a]/20">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Get the Divine Bricks App</h3>
                  <p className="text-sm opacity-90">Find your dream home on the go.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="bg-black/30 hover:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all active:scale-95">
                   App Store
                </button>
                <button className="bg-black/30 hover:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all active:scale-95">
                   Google Play
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00d16a] to-[#00b85c] text-white flex items-center justify-center text-sm font-semibold shadow-lg shadow-[#00d16a]/30">1</button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">2</button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">3</button>
              <span className="text-gray-400">...</span>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">202</button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-bold text-gray-900 text-lg mb-4 border-b border-gray-100 pb-2 tracking-tight">Popular</h3>
              <div className="space-y-4">
                {popularArticles.map((article) => (
                  <div key={article.id} className="flex gap-3 group cursor-pointer">
                    <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200 shadow-md shadow-gray-200/50">
                      <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 leading-tight group-hover:text-[#00d16a] transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-1">Updated: {article.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-gradient-to-br from-[#0a0e1a] to-[#0e4b3e] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-sm mb-3 tracking-tight">ABOUT US</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><Link href="#" className="hover:text-[#00d16a] transition-colors">About Divine Bricks</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 tracking-tight">POPULAR SEARCHES</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Apartments for Sale</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Villas for Sale</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Off Plan Properties</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 tracking-tight">LEGAL</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Terms & Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-[#00d16a] transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3 tracking-tight">DOWNLOAD APP</h4>
              <div className="flex gap-2">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-semibold flex items-center gap-1 transition-all">
                   App Store
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-semibold flex items-center gap-1 transition-all">
                   Google Play
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
            © 2026 Divine Bricks. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}