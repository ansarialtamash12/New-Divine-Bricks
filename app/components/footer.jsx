// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';

// // --- Custom SVG Icons for Social Media ---
// const FacebookIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//   </svg>
// );

// const XIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//   </svg>
// );

// const LinkedInIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//   </svg>
// );

// const InstagramIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//   </svg>
// );

// const YouTubeIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//   </svg>
// );

// // --- App Store Badge Component ---
// const AppBadge = ({ icon, topText, bottomText }) => (
//   <button className="flex items-center gap-2 bg-black border border-gray-700 hover:border-gray-500 rounded-md px-3 py-1.5 transition-colors text-left min-w-[120px]">
//     {icon}
//     <div className="flex flex-col">
//       <span className="text-[8px] text-gray-300 uppercase leading-tight">{topText}</span>
//       <span className="text-sm font-semibold text-white leading-tight">{bottomText}</span>
//     </div>
//   </button>
// );

// // --- Country Data ---
// const countries = [
//   { name: 'United Arab Emirates', flag: '🇦🇪' },
//   { name: 'Saudi Arabia', flag: '🇸🇦' },
//   { name: 'Jordan', flag: '🇯🇴' },
//   { name: 'Oman', flag: '🇴🇲' },
//   { name: 'Egypt', flag: '🇪🇬' },
//   { name: 'Kuwait', flag: '🇰🇼' },
//   { name: 'Qatar', flag: '🇶🇦' },
//   { name: 'Bahrain', flag: '🇧🇭' },
// ];

// export default function Footer() {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsCountryDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="relative w-full bg-[#1a1a1a] text-white pt-12 pb-8 overflow-hidden">
      
//       {/* Background Diagonal Pattern */}
//       <div 
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)`,
//           backgroundSize: '10px 10px'
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
        
//         {/* Top Section: Links & Socials */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          
//           {/* Navigation Links */}
//           <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold tracking-wide">
//             <Link href="/about" className="hover:text-[#00a651] transition-colors uppercase">About Us</Link>
//             <span className="text-gray-600">|</span>
//             <Link href="/careers" className="hover:text-[#00a651] transition-colors uppercase">Careers</Link>
//             <span className="text-gray-600">|</span>
//             <Link href="/contact" className="hover:text-[#00a651] transition-colors uppercase">Contact Us</Link>
//             <span className="text-gray-600">|</span>
//             <Link href="/terms" className="hover:text-[#00a651] transition-colors uppercase">Terms & Privacy Policy</Link>
//           </div>

//           {/* Social Icons & App Badges */}
//           <div className="flex flex-wrap items-center gap-6">
            
//             {/* Social Icons */}
//             <div className="flex items-center gap-3">
//               {[
//                 { icon: <FacebookIcon />, href: '#' },
//                 { icon: <XIcon />, href: '#' },
//                 { icon: <LinkedInIcon />, href: '#' },
//                 { icon: <InstagramIcon />, href: '#' },
//                 { icon: <YouTubeIcon />, href: '#' },
//               ].map((social, index) => (
//                 <a 
//                   key={index} 
//                   href={social.href} 
//                   className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#00a651] hover:scale-110 transition-all duration-200"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>

//             {/* App Store Badges */}
//             <div className="flex items-center gap-3">
//               <AppBadge 
//                 icon={<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3-.02 2.5.87 3.29.87.78 0 2.3-1.07 3.9-.91 1.46.14 2.61.85 3.37 1.95-.11.07-2.01 1.18-1.97 3.57.04 2.84 2.43 3.73 2.47 3.75-.03.09-.38 1.31-1.17 2.38zM13 3.5c.68-.82 1.13-1.96.98-3.1-1.02.04-2.27.68-2.98 1.5-.63.73-1.17 1.89-.99 3.03 1.14.09 2.31-.62 2.99-1.43z"/></svg>} 
//                 topText="Download on the" 
//                 bottomText="App Store" 
//               />
//               <AppBadge 
//                 icon={<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.028 2.028 0 0 1-1.11-1.82V3.634c0-.76.42-1.43 1.11-1.82zM14.5 12.7l3.5 3.5-11.19 5.6 7.69-9.1zM18 16.2l-3.5-3.5 3.5-3.5 3.5 3.5-3.5 3.5zM6.81 2.2l11.19 5.6-3.5 3.5-7.69-9.1z"/></svg>} 
//                 topText="GET IT ON" 
//                 bottomText="Google Play" 
//               />
//               <AppBadge 
//                 icon={<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>} 
//                 topText="EXPLORE IT ON" 
//                 bottomText="AppGallery" 
//               />
//             </div>
//           </div>
//         </div>

//         {/* Middle Section: Country Selector Dropdown */}
//         <div className="flex items-center gap-2 text-sm mb-12 relative" ref={dropdownRef}>
//           <span className="font-semibold text-gray-300 uppercase">Country:</span>
          
//           <button 
//             onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
//             className="flex items-center gap-2 hover:text-[#00a651] transition-colors font-medium border border-transparent hover:border-gray-700 rounded-md px-2 py-1"
//           >
//             <span className="text-lg">{selectedCountry.flag}</span>
//             {selectedCountry.name}
//             {isCountryDropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//           </button>

//           {/* Dropdown Menu (Opens upwards) */}
//           {isCountryDropdownOpen && (
//             <div className="absolute bottom-full left-20 mb-2 w-56 bg-white rounded-md shadow-xl border border-gray-200 overflow-hidden z-50">
//               <ul className="py-1 max-h-60 overflow-y-auto">
//                 {countries.map((country, index) => (
//                   <li key={index}>
//                     <button
//                       onClick={() => {
//                         setSelectedCountry(country);
//                         setIsCountryDropdownOpen(false);
//                       }}
//                       className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
//                         selectedCountry.name === country.name 
//                           ? 'bg-[#e8f8f0] text-[#00a651] font-medium' 
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <span className="text-lg">{country.flag}</span>
//                       {country.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Bottom Section: Copyright & TOP Button */}
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
//           <p className="text-sm text-gray-400">
//             © 2008 - 2026 Bayut.com
//           </p>
          
//           <button 
//             onClick={scrollToTop}
//             className="flex items-center gap-2 group text-sm font-medium text-gray-300 hover:text-white transition-colors"
//           >
//             TOP
//             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#00a651] transition-colors">
//               <ArrowUp className="w-4 h-4 text-black group-hover:text-white transition-colors" />
//             </div>
//           </button>
//         </div>

//       </div>
//     </footer>
//   );
// }











// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';

// const FacebookIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);
// const XIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);
// const LinkedInIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
// const InstagramIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);
// const YouTubeIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>);

// const AppBadge = ({ icon, topText, bottomText }) => (
//   <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#00d16a]/50 hover:bg-white/10 rounded-xl px-3 py-2 transition-all duration-200 text-left min-w-[120px]">
//     {icon}
//     <div className="flex flex-col">
//       <span className="text-[8px] text-gray-400 uppercase leading-tight">{topText}</span>
//       <span className="text-sm font-semibold text-white leading-tight">{bottomText}</span>
//     </div>
//   </button>
// );

// const countries = [
//   { name: 'United Arab Emirates', flag: '🇦🇪' },
//   { name: 'Saudi Arabia', flag: '🇸🇦' },
//   { name: 'Jordan', flag: '🇯🇴' },
//   { name: 'Oman', flag: '🇴🇲' },
//   { name: 'Egypt', flag: '🇪🇬' },
//   { name: 'Kuwait', flag: '🇰🇼' },
//   { name: 'Qatar', flag: '🇶🇦' },
//   { name: 'Bahrain', flag: '🇧🇭' },
// ];

// export default function Footer() {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsCountryDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="relative w-full bg-[#0a0e1a] text-white pt-14 pb-8 overflow-hidden">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00d16a]/50 to-transparent" />
//       <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#00d16a]/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
//           <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold tracking-wide">
//             {['About Us', 'Careers', 'Contact Us', 'Terms & Privacy Policy'].map((item, i, arr) => (
//               <React.Fragment key={item}>
//                 <Link href={`/${item.toLowerCase().replace(/[^a-z]/g, '-')}`} className="hover:text-[#00d16a] transition-colors duration-200 uppercase text-gray-300">
//                   {item}
//                 </Link>
//                 {i < arr.length - 1 && <span className="text-gray-700">|</span>}
//               </React.Fragment>
//             ))}
//           </div>

//           <div className="flex flex-wrap items-center gap-6">
//             <div className="flex items-center gap-2">
//               {[{ icon: <FacebookIcon /> }, { icon: <XIcon /> }, { icon: <LinkedInIcon /> }, { icon: <InstagramIcon /> }, { icon: <YouTubeIcon /> }].map((social, index) => (
//                 <a key={index} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#00d16a] hover:border-[#00d16a] hover:text-white hover:scale-110 transition-all duration-200">
//                   {social.icon}
//                 </a>
//               ))}
//             </div>

//             <div className="flex items-center gap-2">
//               <AppBadge icon={<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3-.02 2.5.87 3.29.87.78 0 2.3-1.07 3.9-.91 1.46.14 2.61.85 3.37 1.95-.11.07-2.01 1.18-1.97 3.57.04 2.84 2.43 3.73 2.47 3.75-.03.09-.38 1.31-1.17 2.38zM13 3.5c.68-.82 1.13-1.96.98-3.1-1.02.04-2.27.68-2.98 1.5-.63.73-1.17 1.89-.99 3.03 1.14.09 2.31-.62 2.99-1.43z"/></svg>} topText="Download on the" bottomText="App Store" />
//               <AppBadge icon={<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.028 2.028 0 0 1-1.11-1.82V3.634c0-.76.42-1.43 1.11-1.82zM14.5 12.7l3.5 3.5-11.19 5.6 7.69-9.1zM18 16.2l-3.5-3.5 3.5-3.5 3.5 3.5-3.5 3.5zM6.81 2.2l11.19 5.6-3.5 3.5-7.69-9.1z"/></svg>} topText="GET IT ON" bottomText="Google Play" />
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center gap-2 text-sm mb-12 relative" ref={dropdownRef}>
//           <span className="font-semibold text-gray-400 uppercase text-xs tracking-wider">Country:</span>
//           <button onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} className="flex items-center gap-2 hover:text-[#00d16a] transition-colors font-medium border border-white/10 hover:border-[#00d16a]/50 rounded-lg px-3 py-1.5 bg-white/5">
//             <span className="text-lg">{selectedCountry.flag}</span>
//             <span className="text-gray-200">{selectedCountry.name}</span>
//             {isCountryDropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//           </button>

//           {isCountryDropdownOpen && (
//             <div className="absolute bottom-full left-20 mb-2 w-60 bg-[#1a1f2e] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50 animate-slideDown">
//               <ul className="py-1 max-h-60 overflow-y-auto">
//                 {countries.map((country, index) => (
//                   <li key={index}>
//                     <button onClick={() => { setSelectedCountry(country); setIsCountryDropdownOpen(false); }} className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${selectedCountry.name === country.name ? 'bg-[#00d16a]/10 text-[#00d16a] font-medium' : 'text-gray-300 hover:bg-white/5'}`}>
//                       <span className="text-lg">{country.flag}</span>
//                       {country.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>

//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
//           <p className="text-sm text-gray-500">© 2008 - 2026 Divine Bricks. All rights reserved.</p>
//           <button onClick={scrollToTop} className="flex items-center gap-2 group text-sm font-medium text-gray-400 hover:text-white transition-colors">
//             TOP
//             <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00d16a] group-hover:border-[#00d16a] transition-all duration-200">
//               <ArrowUp className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
//             </div>
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }






'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';

const FacebookIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);
const XIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);
const LinkedInIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
const InstagramIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);
const YouTubeIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>);

const AppBadge = ({ icon, topText, bottomText }) => (
  <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#00d16a]/50 hover:bg-white/10 rounded-xl px-3 py-2 transition-all duration-200 text-left min-w-[120px]">
    {icon}
    <div className="flex flex-col">
      <span className="text-[8px] text-gray-400 uppercase leading-tight">{topText}</span>
      <span className="text-sm font-semibold text-white leading-tight">{bottomText}</span>
    </div>
  </button>
);

const countries = [
  { name: 'United Arab Emirates', flag: '🇦🇪' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'Jordan', flag: '🇯🇴' },
  { name: 'Oman', flag: '🇴🇲' },
  { name: 'Egypt', flag: '🇪🇬' },
  { name: 'Kuwait', flag: '🇰🇼' },
  { name: 'Qatar', flag: '🇶🇦' },
  { name: 'Bahrain', flag: '🇧🇭' },
];

export default function Footer() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0a0e1a] text-white pt-14 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00d16a]/50 to-transparent" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#00d16a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold tracking-wide">
            {['About Us', 'Careers', 'Contact Us', 'Terms & Privacy Policy'].map((item, i, arr) => (
              <React.Fragment key={item}>
                <Link href={`/${item.toLowerCase().replace(/[^a-z]/g, '-')}`} className="hover:text-[#00d16a] transition-colors duration-200 uppercase text-gray-300">
                  {item}
                </Link>
                {i < arr.length - 1 && <span className="text-gray-700">|</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              {[{ icon: <FacebookIcon /> }, { icon: <XIcon /> }, { icon: <LinkedInIcon /> }, { icon: <InstagramIcon /> }, { icon: <YouTubeIcon /> }].map((social, index) => (
                <a key={index} href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#00d16a] hover:border-[#00d16a] hover:text-white hover:scale-110 transition-all duration-200">
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <AppBadge icon={<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3-.02 2.5.87 3.29.87.78 0 2.3-1.07 3.9-.91 1.46.14 2.61.85 3.37 1.95-.11.07-2.01 1.18-1.97 3.57.04 2.84 2.43 3.73 2.47 3.75-.03.09-.38 1.31-1.17 2.38zM13 3.5c.68-.82 1.13-1.96.98-3.1-1.02.04-2.27.68-2.98 1.5-.63.73-1.17 1.89-.99 3.03 1.14.09 2.31-.62 2.99-1.43z"/></svg>} topText="Download on the" bottomText="App Store" />
              <AppBadge icon={<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.028 2.028 0 0 1-1.11-1.82V3.634c0-.76.42-1.43 1.11-1.82zM14.5 12.7l3.5 3.5-11.19 5.6 7.69-9.1zM18 16.2l-3.5-3.5 3.5-3.5 3.5 3.5-3.5 3.5zM6.81 2.2l11.19 5.6-3.5 3.5-7.69-9.1z"/></svg>} topText="GET IT ON" bottomText="Google Play" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm mb-12 relative" ref={dropdownRef}>
          <span className="font-semibold text-gray-400 uppercase text-xs tracking-wider">Country:</span>
          <button onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)} className="flex items-center gap-2 hover:text-[#00d16a] transition-colors font-medium border border-white/10 hover:border-[#00d16a]/50 rounded-lg px-3 py-1.5 bg-white/5">
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="text-gray-200">{selectedCountry.name}</span>
            {isCountryDropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {isCountryDropdownOpen && (
            <div className="absolute bottom-full left-20 mb-2 w-60 bg-[#1a1f2e] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50 animate-slideDown">
              <ul className="py-1 max-h-60 overflow-y-auto">
                {countries.map((country, index) => (
                  <li key={index}>
                    <button onClick={() => { setSelectedCountry(country); setIsCountryDropdownOpen(false); }} className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${selectedCountry.name === country.name ? 'bg-[#00d16a]/10 text-[#00d16a] font-medium' : 'text-gray-300 hover:bg-white/5'}`}>
                      <span className="text-lg">{country.flag}</span>
                      {country.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-500">© 2008 - 2026 Divine Bricks. All rights reserved.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 group text-sm font-medium text-gray-400 hover:text-white transition-colors">
            TOP
            <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00d16a] group-hover:border-[#00d16a] transition-all duration-200">
              <ArrowUp className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}