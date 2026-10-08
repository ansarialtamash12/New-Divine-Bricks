'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Building2,
  Users,
  Briefcase,
  Headphones,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

// ===== Inline SVG Social Icons =====
const FacebookIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCity, setActiveCity] = useState('Mumbai');

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const offices = [
    {
      city: 'Mumbai',
      address: 'Divine Group Tower, 12th Floor, Bandra Kurla Complex, Bandra East, Mumbai - 400051, Maharashtra',
      phone: '+91 22 4890 1234',
      email: 'mumbai@divinebricks.com',
    },
    {
      city: 'Delhi NCR',
      address: 'Divine Bricks HQ, Cyber Hub, DLF Phase 2, Sector 24, Gurugram - 122002, Haryana',
      phone: '+91 124 456 7890',
      email: 'delhi@divinebricks.com',
    },
    {
      city: 'Bangalore',
      address: 'Prestige Tech Park, Kadubeesanahalli, Outer Ring Road, Bangalore - 560103, Karnataka',
      phone: '+91 80 4567 8901',
      email: 'bangalore@divinebricks.com',
    },
    {
      city: 'Hyderabad',
      address: 'Divine Bricks Space, HITEC City, Madhapur, Hyderabad - 500081, Telangana',
      phone: '+91 40 4567 8901',
      email: 'hyderabad@divinebricks.com',
    },
  ];

  const contactTypes = [
    {
      Icon: Users,
      title: 'For Buyers & Tenants',
      desc: 'Looking for your dream home? Our team is here to help you find the perfect property.',
      email: 'buyers@divinebricks.com',
      phone: '+91 1800 200 300',
    },
    {
      Icon: Building2,
      title: 'For Sellers & Landlords',
      desc: 'List your property on Divine Bricks and reach millions of verified buyers and tenants.',
      email: 'sellers@divinebricks.com',
      phone: '+91 1800 200 400',
    },
    {
      Icon: Briefcase,
      title: 'For Agents & Developers',
      desc: 'Grow your business with our premium tools, verified leads and exclusive listings.',
      email: 'partners@divinebricks.com',
      phone: '+91 1800 200 500',
    },
    {
      Icon: Headphones,
      title: 'Customer Support',
      desc: 'Need help with the platform? Our 24/7 support team is a call or click away.',
      email: 'support@divinebricks.com',
      phone: '+91 1800 200 600',
    },
  ];

  const faqs = [
    {
      q: 'How can I list my property on Divine Bricks?',
      a: 'You can list your property for free by clicking the "Post Property" button on our homepage. Fill in the details, upload photos, and your listing will go live within 24 hours.',
    },
    {
      q: 'Is Divine Bricks available across all Indian cities?',
      a: 'Yes! We currently operate in 25+ major cities including Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, Jaipur, and more.',
    },
    {
      q: 'How do I report a fake listing?',
      a: 'Every listing has a "Report" button. You can also email us at report@divinebricks.com with the listing ID and we will investigate within 24 hours.',
    },
    {
      q: 'Do you charge for property listings?',
      a: 'Basic listings are completely free. We also offer premium listings with enhanced visibility, featured placement, and verified badges for a small fee.',
    },
    {
      q: 'How can I become a TruBroker™ on Divine Bricks?',
      a: 'TruBroker™ status is awarded to agents with high response rates, verified listings, and excellent customer feedback. Apply through our Agent Portal.',
    },
  ];

  return (
    <div className="w-full flex flex-col font-sans overflow-x-hidden" style={{ backgroundColor: '#FFFFFF' }}>

      {/* ================= 1. HERO ================= */}
      <section className="relative w-full h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden bg-[#171A1C]">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
          alt="Contact Divine Bricks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(23,26,28,0.55) 0%, rgba(23,26,28,0.35) 50%, rgba(23,26,28,0.85) 100%)',
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{
                backgroundColor: 'rgba(245, 166, 35, 0.15)',
                color: '#F5A623',
                border: '1px solid #F5A623',
              }}
            >
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              We'd Love to Hear From You
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Whether you're buying, selling, or just curious — our team is here to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 2. QUICK CONTACT CARDS ================= */}
      <section className="w-full py-14 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                Icon: Phone,
                title: 'Call Us',
                line1: '+91 1800 200 300',
                line2: 'Mon-Sun · 24/7 Support',
                href: 'tel:+911800200300',
              },
              {
                Icon: Mail,
                title: 'Email Us',
                line1: 'hello@divinebricks.com',
                line2: 'We reply within 24 hours',
                href: 'mailto:hello@divinebricks.com',
              },
              {
                Icon: MessageSquare,
                title: 'Live Chat',
                line1: 'Chat with our team',
                line2: 'Available on all pages',
                href: '#',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E8E2D5',
                  boxShadow: '0 4px 20px rgba(23, 26, 28, 0.04)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#F7F4ED', border: '1px solid #F5A623' }}
                >
                  <item.Icon className="w-7 h-7" style={{ color: '#F5A623' }} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
                  {item.title}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#171A1C' }}>
                  {item.line1}
                </p>
                <p className="text-xs" style={{ color: '#59636B' }}>
                  {item.line2}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. CONTACT FORM + INFO ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
                Send Us a Message
              </h2>
              <p className="text-sm md:text-base mb-8" style={{ color: '#59636B' }}>
                Fill in the form below and our team will get back to you as soon as possible.
              </p>

              {submitted ? (
                <div
                  className="rounded-2xl p-10 border text-center"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#F5A623' }}
                >
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: '#F5A623' }} strokeWidth={1.5} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#171A1C' }}>
                    Thank You!
                  </h3>
                  <p className="text-sm" style={{ color: '#59636B' }}>
                    Your message has been sent. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-6 md:p-8 border space-y-5"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E2D5' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: '#171A1C' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full h-12 px-4 rounded-xl border text-sm focus:outline-none transition-all"
                        style={{
                          backgroundColor: '#F7F4ED',
                          borderColor: '#E8E2D5',
                          color: '#171A1C',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: '#171A1C' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full h-12 px-4 rounded-xl border text-sm focus:outline-none transition-all"
                        style={{
                          backgroundColor: '#F7F4ED',
                          borderColor: '#E8E2D5',
                          color: '#171A1C',
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: '#171A1C' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full h-12 px-4 rounded-xl border text-sm focus:outline-none transition-all"
                        style={{
                          backgroundColor: '#F7F4ED',
                          borderColor: '#E8E2D5',
                          color: '#171A1C',
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: '#171A1C' }}>
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 rounded-xl border text-sm focus:outline-none transition-all"
                        style={{
                          backgroundColor: '#F7F4ED',
                          borderColor: '#E8E2D5',
                          color: formData.subject ? '#171A1C' : '#59636B',
                        }}
                      >
                        <option value="">Select a subject</option>
                        <option value="buying">Buying a Property</option>
                        <option value="selling">Selling / Listing a Property</option>
                        <option value="renting">Renting a Property</option>
                        <option value="agent">Agent / Broker Partnership</option>
                        <option value="support">Technical Support</option>
                        <option value="feedback">Feedback / Suggestion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: '#171A1C' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all resize-none"
                      style={{
                        backgroundColor: '#F7F4ED',
                        borderColor: '#E8E2D5',
                        color: '#171A1C',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#F5A623',
                      color: '#171A1C',
                      boxShadow: '0 8px 24px rgba(245, 166, 35, 0.35)',
                    }}
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-5">

              {/* Head Office */}
              <div
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E2D5' }}
              >
                <h3 className="text-lg font-bold mb-4 tracking-tight" style={{ color: '#171A1C' }}>
                  Head Office
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#F5A623' }} />
                    <p className="text-sm leading-relaxed" style={{ color: '#59636B' }}>
                      Divine Group Tower, 12th Floor,<br />
                      Bandra Kurla Complex, Bandra East,<br />
                      Mumbai - 400051, Maharashtra, India
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#F5A623' }} />
                    <a href="tel:+912248901234" className="text-sm hover:underline" style={{ color: '#59636B' }}>
                      +91 22 4890 1234
                    </a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#F5A623' }} />
                    <a href="mailto:hello@divinebricks.com" className="text-sm hover:underline" style={{ color: '#59636B' }}>
                      hello@divinebricks.com
                    </a>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Clock className="w-5 h-5 flex-shrink-0" style={{ color: '#F5A623' }} />
                    <p className="text-sm" style={{ color: '#59636B' }}>
                      Mon-Fri · 9:00 AM - 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E2D5' }}
              >
                <h3 className="text-lg font-bold mb-4 tracking-tight" style={{ color: '#171A1C' }}>
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { Icon: FacebookIcon, href: '#', label: 'Facebook' },
                    { Icon: TwitterIcon, href: '#', label: 'Twitter' },
                    { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                    { Icon: InstagramIcon, href: '#', label: 'Instagram' },
                    { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1"
                      style={{
                        backgroundColor: '#F7F4ED',
                        color: '#F5A623',
                        border: '1px solid #F5A623',
                      }}
                    >
                      <s.Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Promise — WHITE BACKGROUND */}
              <div
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#F5A623',
                }}
              >
                <h3 className="text-base font-bold mb-2 tracking-tight" style={{ color: '#171A1C' }}>
                  ⚡ Fast Response Promise
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#59636B' }}>
                  Every message gets a response within <strong style={{ color: '#F5A623' }}>24 hours</strong>. For urgent matters, call our 24/7 hotline.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CONTACT TYPES ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              How Can We Help You?
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#59636B' }}>
              Choose the department that fits your needs and reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactTypes.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{
                  backgroundColor: '#F7F4ED',
                  borderColor: '#E8E2D5',
                  boxShadow: '0 4px 20px rgba(23, 26, 28, 0.04)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #F5A623' }}
                >
                  <item.Icon className="w-7 h-7" style={{ color: '#F5A623' }} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold mb-2 tracking-tight" style={{ color: '#171A1C' }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed mb-5 flex-1" style={{ color: '#59636B' }}>
                  {item.desc}
                </p>
                <div className="space-y-1.5 pt-4 border-t" style={{ borderColor: '#E8E2D5' }}>
                  <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-xs hover:underline" style={{ color: '#F5A623' }}>
                    <Mail className="w-3.5 h-3.5" /> {item.email}
                  </a>
                  <a href={`tel:${item.phone}`} className="flex items-center gap-2 text-xs hover:underline" style={{ color: '#59636B' }}>
                    <Phone className="w-3.5 h-3.5" /> {item.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. OFFICE LOCATIONS ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              Our Offices Across India
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#59636B' }}>
              We have offices in every major Indian city. Find the one closest to you.
            </p>
          </div>

          {/* City Tabs */}
          <div className="flex justify-center mb-10 overflow-x-auto scrollbar-hide">
            <div
              className="flex gap-2 rounded-2xl p-1.5 border"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E2D5' }}
            >
              {offices.map((office) => (
                <button
                  key={office.city}
                  onClick={() => setActiveCity(office.city)}
                  className="px-4 md:px-5 py-2.5 text-xs md:text-sm font-semibold rounded-xl whitespace-nowrap transition-all"
                  style={{
                    backgroundColor: activeCity === office.city ? '#F5A623' : 'transparent',
                    color: activeCity === office.city ? '#171A1C' : '#59636B',
                  }}
                >
                  {office.city}
                </button>
              ))}
            </div>
          </div>

          {/* Active Office Details */}
          {offices
            .filter((o) => o.city === activeCity)
            .map((office) => (
              <div
                key={office.city}
                className="rounded-3xl p-8 md:p-10 border"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E8E2D5',
                  boxShadow: '0 8px 32px rgba(23, 26, 28, 0.06)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                      style={{ backgroundColor: '#F7F4ED', color: '#F5A623', border: '1px solid #F5A623' }}
                    >
                      {office.city} Office
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight" style={{ color: '#171A1C' }}>
                      Visit Our {office.city} Office
                    </h3>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#F5A623' }} />
                        <p className="text-sm leading-relaxed" style={{ color: '#59636B' }}>
                          {office.address}
                        </p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#F5A623' }} />
                        <a href={`tel:${office.phone}`} className="text-sm hover:underline" style={{ color: '#59636B' }}>
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#F5A623' }} />
                        <a href={`mailto:${office.email}`} className="text-sm hover:underline" style={{ color: '#59636B' }}>
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Office Map Visual */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border" style={{ borderColor: '#E8E2D5' }}>
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                      alt={`${office.city} Map`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/10 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-[#F5A623] rounded-full animate-pulse shadow-lg border-4 border-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ================= 6. FAQ ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base" style={{ color: '#59636B' }}>
              Quick answers to the most common questions.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E2D5' }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm md:text-base font-bold" style={{ color: '#171A1C' }}>
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 shrink-0" style={{ color: '#F5A623' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 shrink-0" style={{ color: '#F5A623' }} />
                  )}
                </button>
                {openFaq === i && (
                  <div
                    className="px-5 pb-5 text-sm leading-relaxed border-t"
                    style={{ color: '#59636B', borderColor: '#F7F4ED' }}
                  >
                    <div className="pt-4">{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. CTA (IVORY — Footer Alag Dikhega) ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight" style={{ color: '#171A1C' }}>
            Still Need Help?
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#59636B' }}>
            Can't find what you're looking for? Our team is available 24/7 to assist you with any question.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+911800200300"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: '#F5A623',
                color: '#171A1C',
                boxShadow: '0 8px 24px rgba(245, 166, 35, 0.35)',
              }}
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="mailto:hello@divinebricks.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: '#F5A623', color: '#F5A623', backgroundColor: 'transparent' }}
            >
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}