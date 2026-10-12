'use client';

import React from 'react';
import {
  ShieldCheck,
  FileText,
  BadgeCheck,
  MessageSquare,
} from 'lucide-react';

export default function Why3GRealtors() {
  const features = [
    {
      Icon: BadgeCheck,
      title: 'Verified Listings',
      desc: 'Photos, ownership and pricing are checked by our team before a property goes live.',
    },
    {
      Icon: ShieldCheck,
      title: 'Verified Professionals',
      desc: 'Agents carry verified licenses and a profile with real reviews from past clients.',
    },
    {
      Icon: FileText,
      title: 'Clear Paperwork',
      desc: 'Ask for documents upfront. Listings show the RERA license number where it applies.',
    },
    {
      Icon: MessageSquare,
      title: 'Talk Directly',
      desc: 'Call, WhatsApp or request a callback. No middle layers, no hidden fees for seekers.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F7F4ED' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ===== LEFT SIDE ===== */}
          <div className="lg:sticky lg:top-32">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-[2px]" style={{ backgroundColor: '#F5A623' }} />
              <span
                className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: '#F5A623' }}
              >
                Why 3G Realtors
              </span>
            </div>

            {/* Heading — Normal font, no serif */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight mb-6"
              style={{ color: '#171A1C' }}
            >
              A marketplace built on
              <br />
              <span className="italic font-medium">
                trust, not noise
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-sm sm:text-base leading-relaxed max-w-md"
              style={{ color: '#59636B' }}
            >
              Whether you are buying your first flat or leasing a warehouse, every step on 3G Realtors is designed to be clear and verifiable — so you can decide with confidence.
            </p>
          </div>

          {/* ===== RIGHT SIDE (2x2 Grid) ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col">
                {/* Icon Circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <feature.Icon
                    className="w-5 h-5"
                    style={{ color: '#F5A623' }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-base sm:text-lg font-bold mb-2 tracking-tight"
                  style={{ color: '#171A1C' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#59636B' }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}