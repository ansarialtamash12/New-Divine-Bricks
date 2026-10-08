// export default function FindAgentPage() {
// const agents = [
//   {
//     name: 'Sam Bowen',
//     serves: 'Serves in Dubai',
//     speaks: 'Speaks English',
//     sale: 4,
//     rent: 16,
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     badge: '',
//   },
//   {
//     name: 'Sabahuddin Khan',
//     serves: 'Serves in Dubai',
//     speaks: 'Speaks Urdu +3 more',
//     sale: 4,
//     rent: 8,
//     image: 'https://randomuser.me/api/portraits/men/45.jpg',
//     badge: '',
//   },
//   {
//     name: 'Upma Kumar',
//     serves: 'Serves in Dubai Marina, Jumeirah…',
//     speaks: 'Speaks Hindi, English',
//     sale: 14,
//     rent: 12,
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     badge: 'bluechip',
//   },
//   {
//     name: 'UDAY MANVANI PRAKA…',
//     serves: 'Serves in Dubai',
//     speaks: 'Speaks Sindhi, English, Urdu/Hindi',
//     sale: 26,
//     rent: 11,
//     image: 'https://randomuser.me/api/portraits/men/52.jpg',
//     badge: 'wealth',
//   },
//   {
//     name: 'Blossom Fernandez',
//     serves: 'Serves in Dubai',
//     speaks: 'Speaks Hindi, English',
//     sale: 2,
//     rent: 5,
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//     badge: 'range',
//   },
//   {
//     name: 'Tamilia Kiria',
//     serves: 'Serves in Dubai',
//     speaks: 'Speaks Russian +1 more',
//     sale: 2,
//     rent: 19,
//     image: 'https://randomuser.me/api/portraits/women/12.jpg',
//     badge: 'vanguard',
//   },
// ];

//   return (
//     <>
//       <main className="w-full bg-white min-h-screen">
//         {/* Search Filter Bar */}
//         <div className="w-full border-b border-gray-200 bg-white py-4">
//           <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-3">
//             <select className="border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 bg-white">
//               <option>Agents</option>
//               <option>Agencies</option>
//             </select>

//             <select className="border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 bg-white">
//               <option>Buy / Residential / Ready</option>
//               <option>Rent / Residential</option>
//               <option>Commercial</option>
//             </select>

//             <input
//               type="text"
//               placeholder="Enter location"
//               className="border border-gray-300 rounded-md px-4 py-2.5 text-sm flex-1 min-w-[180px]"
//             />

//             <input
//               type="text"
//               placeholder="Agent Name"
//               className="border border-gray-300 rounded-md px-4 py-2.5 text-sm flex-1 min-w-[180px]"
//             />

//             <input
//               type="text"
//               placeholder="Enter languages"
//               className="border border-gray-300 rounded-md px-4 py-2.5 text-sm flex-1 min-w-[180px]"
//             />

//             <button className="bg-teal-800 hover:bg-teal-900 text-white font-semibold px-8 py-2.5 rounded-md text-sm">
//               Find
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left: Agents List */}
//           <div className="lg:col-span-2">
//             {/* TruBroker Box */}
//             <div className="bg-gray-100 rounded-lg p-6">
//               <span className="inline-block bg-teal-800 text-white text-xs font-bold px-3 py-1 rounded">
//                 TruBroker™
//               </span>
//               <div className="flex flex-wrap items-center justify-between mt-4 mb-6 gap-4">
//                 <p className="text-sm text-gray-700 max-w-md">
//                   Explore agents with a proven track record of high response
//                   rates and authentic listings.
//                 </p>
//                 <div className="flex gap-0 border border-gray-300 rounded-md overflow-hidden">
//                   <button className="px-6 py-2 text-sm font-medium bg-green-50 text-green-800">
//                     Dubai
//                   </button>
//                   <button className="px-6 py-2 text-sm font-medium text-gray-600 bg-white">
//                     Abu Dhabi
//                   </button>
//                 </div>
//               </div>

//               {/* Agent Cards Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {agents.map((agent, i) => (
//                   <div
//                     key={i}
//                     className="bg-white rounded-lg p-4 flex gap-4 shadow-sm hover:shadow-md transition"
//                   >
//                     <img
//                       src={agent.image}
//                       alt={agent.name}
//                       className="w-20 h-20 rounded object-cover"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-bold text-gray-900 text-base">
//                         {agent.name}
//                       </h3>
//                       <p className="text-xs text-gray-600 mt-0.5">
//                         {agent.serves}
//                       </p>
//                       <p className="text-xs text-gray-600">{agent.speaks}</p>
//                       <div className="flex gap-2 mt-2">
//                         <span className="text-xs border border-gray-300 px-2 py-0.5 rounded">
//                           {agent.sale} SALE
//                         </span>
//                         <span className="text-xs border border-gray-300 px-2 py-0.5 rounded">
//                           {agent.rent} RENT
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* View All Button */}
//             <div className="flex justify-center mt-8">
//               <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-teal-800 font-semibold px-6 py-3 rounded-md">
//                 View All TruBrokers™ →
//               </button>
//             </div>
//           </div>

//           {/* Right: Badges Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="text-center mb-6">
//               <div className="text-5xl mb-2">🏅</div>
//               <h3 className="font-bold text-lg text-gray-900">
//                 How Do Agents Earn Badges?
//               </h3>
//               <p className="text-xs text-gray-600 mt-1">
//                 To highlight great performance, we reward agents with customised
//                 badges on Bayut.
//               </p>
//             </div>

//             <div className="bg-gray-100 rounded-lg p-5 mb-4 text-center">
//               <span className="inline-block bg-teal-800 text-white text-xs font-bold px-3 py-1 rounded mb-3">
//                 TruBroker™
//               </span>
//               <p className="text-xs text-gray-700">
//                 Exclusive badge awarded to agents who are highly responsive and
//                 advertise genuine properties.
//               </p>
//             </div>

//             <div className="bg-gray-100 rounded-lg p-5 mb-4 text-center">
//               <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded mb-3">
//                 💎 Quality Lister
//               </span>
//               <p className="text-xs text-gray-700">
//                 Exclusive badge awarded to agents who have authentic listings.
//               </p>
//             </div>

//             <div className="bg-gray-100 rounded-lg p-5 text-center">
//               <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded mb-3">
//                 ⚡ Responsive Broker
//               </span>
//               <p className="text-xs text-gray-700">
//                 Exclusive badge awarded to agents who are highly reachable and
//                 responsive.
//               </p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
























export default function FindAgentPage() {
const agents = [
  { name: 'Sam Bowen', serves: 'Serves in Dubai', speaks: 'Speaks English', sale: 4, rent: 16, image: 'https://randomuser.me/api/portraits/men/32.jpg', badge: '' },
  { name: 'Sabahuddin Khan', serves: 'Serves in Dubai', speaks: 'Speaks Urdu +3 more', sale: 4, rent: 8, image: 'https://randomuser.me/api/portraits/men/45.jpg', badge: '' },
  { name: 'Upma Kumar', serves: 'Serves in Dubai Marina, Jumeirah…', speaks: 'Speaks Hindi, English', sale: 14, rent: 12, image: 'https://randomuser.me/api/portraits/women/44.jpg', badge: 'bluechip' },
  { name: 'UDAY MANVANI PRAKA…', serves: 'Serves in Dubai', speaks: 'Speaks Sindhi, English, Urdu/Hindi', sale: 26, rent: 11, image: 'https://randomuser.me/api/portraits/men/52.jpg', badge: 'wealth' },
  { name: 'Blossom Fernandez', serves: 'Serves in Dubai', speaks: 'Speaks Hindi, English', sale: 2, rent: 5, image: 'https://randomuser.me/api/portraits/women/68.jpg', badge: 'range' },
  { name: 'Tamilia Kiria', serves: 'Serves in Dubai', speaks: 'Speaks Russian +1 more', sale: 2, rent: 19, image: 'https://randomuser.me/api/portraits/women/12.jpg', badge: 'vanguard' },
];

  return (
    <>
      <main className="w-full bg-white min-h-screen">
        {/* Search Filter Bar */}
        <div className="w-full border-b border-gray-100 bg-white py-5">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-3">
            <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all">
              <option>Agents</option>
              <option>Agencies</option>
            </select>

            <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all">
              <option>Buy / Residential / Ready</option>
              <option>Rent / Residential</option>
              <option>Commercial</option>
            </select>

            <input
              type="text"
              placeholder="Enter location"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
            />

            <input
              type="text"
              placeholder="Agent Name"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
            />

            <input
              type="text"
              placeholder="Enter languages"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-[#00d16a]/30 focus:border-[#00d16a] transition-all"
            />

            <button className="bg-gradient-to-r from-[#0e4b3e] to-[#0a3d30] hover:shadow-lg hover:shadow-[#0e4b3e]/30 text-white font-semibold px-8 py-2.5 rounded-xl text-sm transition-all duration-200 active:scale-95">
              Find
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Agents List */}
          <div className="lg:col-span-2">
            {/* TruBroker Box */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6">
              <span className="inline-block bg-gradient-to-r from-[#0e4b3e] to-[#0a3d30] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                TruBroker™
              </span>
              <div className="flex flex-wrap items-center justify-between mt-5 mb-6 gap-4">
                <p className="text-sm text-gray-600 max-w-md">
                  Explore agents with a proven track record of high response
                  rates and authentic listings.
                </p>
                <div className="flex gap-0 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <button className="px-6 py-2 text-sm font-semibold bg-[#ecfdf5] text-[#0e4b3e] transition-colors">
                    Dubai
                  </button>
                  <button className="px-6 py-2 text-sm font-medium text-gray-500 bg-white hover:text-[#0e4b3e] transition-colors">
                    Abu Dhabi
                  </button>
                </div>
              </div>

              {/* Agent Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agents.map((agent, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4 flex gap-4 border border-gray-100 shadow-md shadow-gray-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base tracking-tight">
                        {agent.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {agent.serves}
                      </p>
                      <p className="text-xs text-gray-500">{agent.speaks}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs border border-[#a7f3d0] text-[#0e4b3e] bg-[#ecfdf5] px-2 py-0.5 rounded-lg font-semibold">
                          {agent.sale} SALE
                        </span>
                        <span className="text-xs border border-[#a7f3d0] text-[#0e4b3e] bg-[#ecfdf5] px-2 py-0.5 rounded-lg font-semibold">
                          {agent.rent} RENT
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-8">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#0e4b3e] to-[#0a3d30] hover:shadow-lg hover:shadow-[#0e4b3e]/30 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95">
                View All TruBrokers™ →
              </button>
            </div>
          </div>

          {/* Right: Badges Sidebar */}
          <div className="lg:col-span-1">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🏅</div>
              <h3 className="font-bold text-lg text-gray-900 tracking-tight">
                How Do Agents Earn Badges?
              </h3>
              <p className="text-xs text-gray-500 mt-2">
                To highlight great performance, we reward agents with customised
                badges on Bayut.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-4 text-center shadow-md shadow-gray-200/50">
              <span className="inline-block bg-gradient-to-r from-[#0e4b3e] to-[#0a3d30] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                TruBroker™
              </span>
              <p className="text-xs text-gray-600">
                Exclusive badge awarded to agents who are highly responsive and
                advertise genuine properties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 mb-4 text-center shadow-md shadow-blue-100/50">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                💎 Quality Lister
              </span>
              <p className="text-xs text-gray-600">
                Exclusive badge awarded to agents who have authentic listings.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-2xl p-5 text-center shadow-md shadow-pink-100/50">
              <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                ⚡ Responsive Broker
              </span>
              <p className="text-xs text-gray-600">
                Exclusive badge awarded to agents who are highly reachable and
                responsive.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}