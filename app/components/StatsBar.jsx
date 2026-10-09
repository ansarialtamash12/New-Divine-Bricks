'use client';

import React from 'react';
import { CheckCircle2, IndianRupee, TrendingUp, MapPin } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      value: '45K+',
      label: 'Verified Listings',
      Icon: CheckCircle2,
    },
    {
      value: '₹0',
      label: 'Commission Paid by Users',
      Icon: IndianRupee,
    },
    {
      value: '96%',
      label: 'Fair-Price Accuracy',
      Icon: TrendingUp,
    },
    {
      value: '28',
      label: 'States Covered',
      Icon: MapPin,
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16" style={{ backgroundColor: '#F7F4ED' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(23,26,28,0.08)] border border-[#59636B]/10 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-[#59636B]/10 overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative p-6 sm:p-8 flex flex-col items-center justify-center text-center group hover:bg-[#F7F4ED]/50 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-[#F7F4ED] border border-[#F5A623]/30 group-hover:bg-[#F5A623]/10 group-hover:scale-110 transition-all duration-300">
                <stat.Icon
                  className="w-6 h-6"
                  style={{ color: '#F5A623' }}
                  strokeWidth={1.8}
                />
              </div>

              {/* Value */}
              <div
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
                style={{ color: '#F5A623' }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div
                className="text-xs sm:text-sm font-medium tracking-tight"
                style={{ color: '#59636B' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}