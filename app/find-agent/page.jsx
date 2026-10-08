export default function FindAgentPage() {
  const agents = [
    { name: 'Rajesh Sharma', serves: 'Serves in Mumbai', speaks: 'Speaks Hindi, English', sale: 4, rent: 16, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200', badge: '' },
    { name: 'Sabahuddin Khan', serves: 'Serves in Mumbai', speaks: 'Speaks Urdu +3 more', sale: 4, rent: 8, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200', badge: '' },
    { name: 'Upma Kumar', serves: 'Serves in Bandra West, Juhu…', speaks: 'Speaks Hindi, Marathi, English', sale: 14, rent: 12, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200', badge: 'bluechip' },
    { name: 'Uday Manvani Prakash', serves: 'Serves in Mumbai', speaks: 'Speaks Sindhi, Hindi, Gujarati, English', sale: 26, rent: 11, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200', badge: 'wealth' },
    { name: 'Blossom Fernandez', serves: 'Serves in Mumbai', speaks: 'Speaks Hindi, English, Konkani', sale: 2, rent: 5, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200', badge: 'range' },
    { name: 'Tamilia Kiria', serves: 'Serves in Mumbai', speaks: 'Speaks Tamil +1 more', sale: 2, rent: 19, image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200', badge: 'vanguard' },
  ];

  return (
    <>
      <main className="w-full bg-[#F7F4ED] min-h-screen">
        {/* Search Filter Bar */}
        <div className="w-full border-b border-[#59636B]/15 bg-[#F7F4ED] py-5">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-3">
            <select className="border border-[#59636B]/20 rounded-xl px-4 py-2.5 text-sm text-[#171A1C] bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all">
              <option>Agents</option>
              <option>Agencies</option>
            </select>

            <select className="border border-[#59636B]/20 rounded-xl px-4 py-2.5 text-sm text-[#171A1C] bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all">
              <option>Buy / Residential / Ready</option>
              <option>Rent / Residential</option>
              <option>Commercial</option>
            </select>

            <input
              type="text"
              placeholder="Enter locality or city"
              className="border border-[#59636B]/20 rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[180px] text-[#171A1C] placeholder-[#59636B]/70 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
            />

            <input
              type="text"
              placeholder="Agent Name"
              className="border border-[#59636B]/20 rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[180px] text-[#171A1C] placeholder-[#59636B]/70 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
            />

            <input
              type="text"
              placeholder="Enter languages"
              className="border border-[#59636B]/20 rounded-xl px-4 py-2.5 text-sm flex-1 min-w-[180px] text-[#171A1C] placeholder-[#59636B]/70 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
            />

            <button className="bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/30 text-[#171A1C] font-bold px-8 py-2.5 rounded-xl text-sm transition-all duration-200 active:scale-95">
              Find
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Agents List */}
          <div className="lg:col-span-2">
            {/* TruBroker Box */}
            <div className="bg-white border border-[#59636B]/15 rounded-3xl p-6">
              <span className="inline-block bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                TruBroker™
              </span>
              <div className="flex flex-wrap items-center justify-between mt-5 mb-6 gap-4">
                <p className="text-sm text-[#59636B] max-w-md">
                  Explore agents with a proven track record of high response
                  rates and authentic listings.
                </p>
                <div className="flex gap-0 border border-[#59636B]/20 rounded-xl overflow-hidden shadow-sm">
                  <button className="px-6 py-2 text-sm font-semibold bg-[#171A1C] text-[#F5A623] transition-colors">
                    Mumbai
                  </button>
                  <button className="px-6 py-2 text-sm font-medium text-[#59636B] bg-white hover:text-[#F5A623] transition-colors">
                    Delhi NCR
                  </button>
                </div>
              </div>

              {/* Agent Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agents.map((agent, i) => (
                  <div
                    key={i}
                    className="bg-[#F7F4ED] rounded-2xl p-4 flex gap-4 border border-[#59636B]/15 shadow-md shadow-[#171A1C]/5 hover:shadow-xl hover:shadow-[#F5A623]/10 hover:-translate-y-0.5 hover:border-[#F5A623]/30 transition-all duration-300"
                  >
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-20 h-20 rounded-xl object-cover ring-2 ring-[#F5A623]/20"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-[#171A1C] text-base tracking-tight">
                        {agent.name}
                      </h3>
                      <p className="text-xs text-[#59636B] mt-0.5">
                        {agent.serves}
                      </p>
                      <p className="text-xs text-[#59636B]">{agent.speaks}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs border border-[#F5A623]/30 text-[#F5A623] bg-[#F5A623]/10 px-2 py-0.5 rounded-lg font-bold">
                          {agent.sale} SALE
                        </span>
                        <span className="text-xs border border-[#F5A623]/30 text-[#F5A623] bg-[#F5A623]/10 px-2 py-0.5 rounded-lg font-bold">
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
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/30 text-[#171A1C] font-bold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95">
                View All TruBrokers™ →
              </button>
            </div>
          </div>

          {/* Right: Badges Sidebar */}
          <div className="lg:col-span-1">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🏅</div>
              <h3 className="font-bold text-lg text-[#171A1C] tracking-tight">
                How Do Agents Earn Badges?
              </h3>
              <p className="text-xs text-[#59636B] mt-2">
                To highlight great performance, we reward agents with customised
                badges on Divine Bricks.
              </p>
            </div>

            <div className="bg-white border border-[#59636B]/15 rounded-2xl p-5 mb-4 text-center shadow-md shadow-[#171A1C]/5">
              <span className="inline-block bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] text-xs font-bold px-3 py-1 rounded-full mb-3">
                TruBroker™
              </span>
              <p className="text-xs text-[#59636B]">
                Exclusive badge awarded to agents who are highly responsive and
                advertise genuine properties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#171A1C]/5 to-white border border-[#171A1C]/15 rounded-2xl p-5 mb-4 text-center shadow-md shadow-[#171A1C]/5">
              <span className="inline-block bg-[#171A1C]/10 text-[#171A1C] text-xs font-bold px-3 py-1 rounded-full mb-3">
                💎 Quality Lister
              </span>
              <p className="text-xs text-[#59636B]">
                Exclusive badge awarded to agents who have authentic listings.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5A623]/10 to-white border border-[#F5A623]/25 rounded-2xl p-5 text-center shadow-md shadow-[#F5A623]/10">
              <span className="inline-block bg-[#F5A623]/15 text-[#F5A623] text-xs font-bold px-3 py-1 rounded-full mb-3">
                ⚡ Responsive Broker
              </span>
              <p className="text-xs text-[#59636B]">
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