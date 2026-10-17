'use client';

import React, { useState } from 'react';
import { X, MapPin, ChevronDown } from 'lucide-react';

export default function SellModal({ isOpen, onClose }) {
  const [purpose, setPurpose] = useState('Sell');
  const [rentFrequency, setRentFrequency] = useState('Monthly');
  const [category, setCategory] = useState('Residential');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [bedrooms, setBedrooms] = useState('1');
  const [urgency, setUrgency] = useState('This month');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#171A1C]/60 backdrop-blur-md p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="rounded-3xl w-full max-w-lg my-8 relative shadow-2xl"
        style={{ backgroundColor: '#F7F4ED' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 px-6 pt-6 pb-4 border-b flex justify-between items-center rounded-t-3xl"
          style={{ backgroundColor: '#F7F4ED', borderColor: 'rgba(89, 99, 107, 0.15)' }}
        >
          <h2 className="text-xl font-bold tracking-tight" style={{ color: '#171A1C' }}>
            Enter Property Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full transition-colors hover:bg-[#F5A623]/10"
            style={{ color: '#59636B' }}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">

          {/* Sell / Rent Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setPurpose('Sell')}
              className="flex-1 py-2.5 text-sm font-bold rounded-xl transition-all"
              style={{
                backgroundImage: purpose === 'Sell' ? 'linear-gradient(to right, #F5A623, #E09400)' : 'none',
                color: purpose === 'Sell' ? '#171A1C' : '#59636B',
                boxShadow: purpose === 'Sell' ? '0 8px 20px rgba(245, 166, 35, 0.3)' : 'none',
                border: purpose === 'Sell' ? 'none' : '2px solid #E8E2D5',
              }}
            >
              Sell
            </button>
            <button
              onClick={() => setPurpose('Rent')}
              className="flex-1 py-2.5 text-sm font-bold rounded-xl transition-all"
              style={{
                backgroundImage: purpose === 'Rent' ? 'linear-gradient(to right, #F5A623, #E09400)' : 'none',
                color: purpose === 'Rent' ? '#171A1C' : '#59636B',
                boxShadow: purpose === 'Rent' ? '0 8px 20px rgba(245, 166, 35, 0.3)' : 'none',
                border: purpose === 'Rent' ? 'none' : '2px solid #E8E2D5',
              }}
            >
              Rent
            </button>
          </div>

          {/* Rent Frequency */}
          {purpose === 'Rent' && (
            <div className="animate-fadeIn">
              <label className="block text-sm font-bold mb-2" style={{ color: '#171A1C' }}>
                Rent Frequency
              </label>
              <div className="flex gap-2">
                {['Monthly', 'Yearly'].map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setRentFrequency(freq)}
                    className="px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all"
                    style={{
                      borderColor: rentFrequency === freq ? '#F5A623' : '#E8E2D5',
                      backgroundColor: rentFrequency === freq ? 'rgba(245, 166, 35, 0.1)' : '#FFFFFF',
                      color: rentFrequency === freq ? '#F5A623' : '#59636B',
                    }}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Location */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: '#171A1C' }}>
              Location*
            </label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3.5 w-4 h-4" style={{ color: '#F5A623' }} />
              <input
                type="text"
                placeholder="Enter locality, project or city"
                className="w-full pl-10 pr-4 py-3 border rounded-2xl text-sm focus:outline-none transition-all placeholder:text-[#59636B]/60"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E8E2D5',
                  color: '#171A1C',
                }}
              />
            </div>
          </div>

          {/* Category & Type */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: '#171A1C' }}>
              Category & Type*
            </label>

            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setCategory('Residential')}
                className="flex-1 py-2 text-sm font-bold rounded-xl transition-all"
                style={{
                  backgroundImage: category === 'Residential' ? 'linear-gradient(to right, #F5A623, #E09400)' : 'none',
                  color: category === 'Residential' ? '#171A1C' : '#59636B',
                  boxShadow: category === 'Residential' ? '0 8px 20px rgba(245, 166, 35, 0.3)' : 'none',
                  border: category === 'Residential' ? 'none' : '2px solid #E8E2D5',
                }}
              >
                Residential
              </button>
              <button
                onClick={() => setCategory('Commercial')}
                className="flex-1 py-2 text-sm font-bold rounded-xl transition-all"
                style={{
                  backgroundImage: category === 'Commercial' ? 'linear-gradient(to right, #F5A623, #E09400)' : 'none',
                  color: category === 'Commercial' ? '#171A1C' : '#59636B',
                  boxShadow: category === 'Commercial' ? '0 8px 20px rgba(245, 166, 35, 0.3)' : 'none',
                  border: category === 'Commercial' ? 'none' : '2px solid #E8E2D5',
                }}
              >
                Commercial
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Apartment', 'Villa', 'Row House', 'Penthouse', 'Plot', 'Other'].map((type) => (
                <button
                  key={type}
                  onClick={() => setPropertyType(type)}
                  className="px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all"
                  style={{
                    borderColor: propertyType === type ? '#F5A623' : '#E8E2D5',
                    backgroundColor: propertyType === type ? 'rgba(245, 166, 35, 0.1)' : '#FFFFFF',
                    color: propertyType === type ? '#F5A623' : '#59636B',
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: '#171A1C' }}>
              Bedrooms*
            </label>
            <div className="flex flex-wrap gap-2">
              {['1 RK', '1', '2', '3', '4', '5', '6', '7', '8+'].map((num) => (
                <button
                  key={num}
                  onClick={() => setBedrooms(num)}
                  className="min-w-[44px] h-11 px-3 rounded-xl flex items-center justify-center text-xs font-semibold border-2 transition-all"
                  style={{
                    borderColor: bedrooms === num ? '#F5A623' : '#E8E2D5',
                    backgroundColor: bedrooms === num ? 'rgba(245, 166, 35, 0.1)' : '#FFFFFF',
                    color: bedrooms === num ? '#F5A623' : '#59636B',
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Furnishing */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: '#171A1C' }}>
              Furnishing
            </label>
            <div className="relative">
              <select
                className="w-full border rounded-2xl p-3 text-sm appearance-none focus:outline-none transition-all"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E8E2D5',
                  color: '#171A1C',
                }}
              >
                <option>Select</option>
                <option>Furnished</option>
                <option>Unfurnished</option>
                <option>Semi-Furnished</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 pointer-events-none" style={{ color: '#59636B' }} />
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: '#171A1C' }}>
              Urgency
            </label>
            <div className="flex flex-wrap gap-2">
              {['This month', 'Within 2 months', 'Flexible'].map((urg) => (
                <button
                  key={urg}
                  onClick={() => setUrgency(urg)}
                  className="px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all"
                  style={{
                    borderColor: urgency === urg ? '#F5A623' : '#E8E2D5',
                    backgroundColor: urgency === urg ? 'rgba(245, 166, 35, 0.1)' : '#FFFFFF',
                    color: urgency === urg ? '#F5A623' : '#59636B',
                  }}
                >
                  {urg}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-bold mb-2" style={{ color: '#171A1C' }}>
              {purpose === 'Sell' ? 'Expected Price (₹)*' : 'Expected Rent (₹ Per Month)*'}
            </label>
            <input
              type="text"
              placeholder={purpose === 'Sell' ? 'Enter expected price' : 'Enter expected monthly rent'}
              className="w-full border rounded-2xl p-3 text-sm focus:outline-none transition-all placeholder:text-[#59636B]/60"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E8E2D5',
                color: '#171A1C',
              }}
            />
          </div>

          {/* Contact Details */}
          <div
            className="rounded-2xl p-4 space-y-3 border"
            style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(245, 166, 35, 0.3)' }}
          >
            <input
              type="text"
              placeholder="Name*"
              className="w-full border rounded-xl p-3 text-sm focus:outline-none transition-all placeholder:text-[#59636B]/60"
              style={{
                backgroundColor: '#F7F4ED',
                borderColor: '#E8E2D5',
                color: '#171A1C',
              }}
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full border rounded-xl p-3 text-sm focus:outline-none transition-all placeholder:text-[#59636B]/60"
              style={{
                backgroundColor: '#F7F4ED',
                borderColor: '#E8E2D5',
                color: '#171A1C',
              }}
            />
            <div className="relative">
              <span className="absolute left-3 top-3 text-sm font-medium" style={{ color: '#171A1C' }}>
                🇮🇳 +91
              </span>
              <input
                type="tel"
                className="w-full pl-20 border rounded-xl p-3 text-sm focus:outline-none transition-all"
                style={{
                  backgroundColor: '#F7F4ED',
                  borderColor: '#E8E2D5',
                  color: '#171A1C',
                }}
              />
            </div>

            <button
              className="w-full bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/30 text-[#171A1C] font-bold py-3 rounded-xl transition-all duration-200 active:scale-[0.98] mt-2"
            >
              Submit
            </button>

            <p className="text-[10px] leading-relaxed text-center" style={{ color: '#59636B' }}>
              By submitting, you agree to 3G Realtors'{' '}
              <a href="#" className="underline font-semibold" style={{ color: '#F5A623' }}>Terms</a> &{' '}
              <a href="#" className="underline font-semibold" style={{ color: '#F5A623' }}>Privacy Policy</a>.
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="#" className="underline font-semibold" style={{ color: '#F5A623' }}>Privacy Policy</a> and{' '}
              <a href="#" className="underline font-semibold" style={{ color: '#F5A623' }}>Terms of Service</a> apply.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}