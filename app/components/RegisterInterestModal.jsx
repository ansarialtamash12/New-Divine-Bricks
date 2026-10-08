'use client';

import React, { useState } from 'react';
import { X, Mail, Phone, Wallet, Send } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default function RegisterInterestModal({ isOpen, onClose, project, whatsappNumber = '919999999999' }) {
  const [formData, setFormData] = useState({ email: '', mobile: '', budget: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${project?.title || 'a project'} located at ${project?.location || ''}. Please share more details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { project: project?.title, ...formData });
    alert(`Thank you! We've received your interest for ${project?.title || 'this project'}. Our team will contact you shortly.`);
    onClose();
    setFormData({ email: '', mobile: '', budget: '' });
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#171A1C]/70 backdrop-blur-md p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F4ED] rounded-3xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto border border-[#59636B]/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#59636B] hover:text-[#171A1C] p-1.5 rounded-full hover:bg-[#59636B]/10 transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-[#F5A623] to-[#E09400] text-[#171A1C] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            Register Interest
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#171A1C] tracking-tight">
            {project?.title || 'Interested in this project?'}
          </h2>
          {project?.location && (
            <p className="text-sm text-[#59636B] mt-1">{project.location}</p>
          )}
        </div>

        {/* WhatsApp Option */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b358] text-white font-bold py-3 rounded-xl transition-all text-sm active:scale-[0.98] shadow-md shadow-[#25D366]/20 mb-5"
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-[#59636B]/20"></div>
          <span className="text-[#59636B] text-xs font-semibold uppercase tracking-wider">or fill details</span>
          <div className="flex-1 h-px bg-[#59636B]/20"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-[#171A1C] mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#F5A623]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] placeholder-[#59636B]/70 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-xs font-bold text-[#171A1C] mb-1.5">Mobile Number</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#F5A623]" />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-3 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] placeholder-[#59636B]/70 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all"
              />
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-xs font-bold text-[#171A1C] mb-1.5">Budget Range</label>
            <div className="relative">
              <Wallet className="absolute left-3.5 top-3.5 w-4 h-4 text-[#F5A623]" />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-[#59636B]/20 rounded-xl text-sm text-[#171A1C] bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#F5A623]/30 focus:border-[#F5A623] transition-all cursor-pointer"
              >
                <option value="">Select budget range</option>
                <option value="Under ₹25L">Under ₹25L</option>
                <option value="₹25L – ₹50L">₹25L – ₹50L</option>
                <option value="₹50L – ₹1Cr">₹50L – ₹1Cr</option>
                <option value="₹1Cr – ₹2Cr">₹1Cr – ₹2Cr</option>
                <option value="Above ₹2Cr">Above ₹2Cr</option>
              </select>
            </div>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F5A623] to-[#E09400] hover:shadow-lg hover:shadow-[#F5A623]/40 text-[#171A1C] font-bold py-3.5 rounded-xl transition-all text-sm active:scale-[0.98] mt-2"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
}