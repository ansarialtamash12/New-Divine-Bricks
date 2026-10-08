'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Shield,
  Lock,
  UserCheck,
  Scale,
  AlertCircle,
  Cookie,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';

export default function TermsPrivacyPage() {
  const [activeTab, setActiveTab] = useState('terms');
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (i) => setOpenSection(openSection === i ? null : i);

  // ===== Terms & Conditions Sections =====
  const termsSections = [
    {
      id: 1,
      title: '1. Acceptance of Terms',
      content: `Welcome to Divine Bricks. By accessing or using our website, mobile application, or any related services (collectively, the "Services"), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our Services.`,
    },
    {
      id: 2,
      title: '2. Eligibility',
      content: `You must be at least 18 years of age and legally capable of entering into binding contracts under the Indian Contract Act, 1872. By using Divine Bricks, you represent and warrant that you meet these eligibility requirements and that all information you provide is accurate and complete.`,
    },
    {
      id: 3,
      title: '3. User Accounts',
      content: `To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. Divine Bricks will not be liable for any loss arising from unauthorized access to your account.`,
    },
    {
      id: 4,
      title: '4. Property Listings & Content',
      content: `All property listings, descriptions, images, and other content on Divine Bricks are provided by users, agents, developers, and third parties. While we strive to ensure accuracy, we do not guarantee the completeness, reliability, or accuracy of any listing. Users are advised to independently verify all information before making any transaction. Divine Bricks acts solely as a platform and is not a party to any transaction between buyers, sellers, tenants, or landlords.`,
    },
    {
      id: 5,
      title: '5. Prohibited Conduct',
      content: `You agree not to:
• Post false, misleading, or fraudulent listings
• Use the Services for any illegal or unauthorized purpose
• Violate any applicable laws, including RERA regulations
• Infringe on intellectual property rights of others
• Attempt to gain unauthorized access to our systems
• Use automated tools to scrape or harvest data
• Post discriminatory, offensive, or harmful content
Violation of these rules may result in account suspension or permanent ban.`,
    },
    {
      id: 6,
      title: '6. Intellectual Property',
      content: `All content on Divine Bricks, including logos, trademarks, text, graphics, images, and software, is the property of Divine Bricks or its licensors and is protected by Indian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.`,
    },
    {
      id: 7,
      title: '7. Fees & Payments',
      content: `Basic listings on Divine Bricks are free. Premium listings, featured placements, and additional services may be subject to fees. All fees are non-refundable unless otherwise stated. Payments are processed through secure third-party payment gateways, and you agree to their terms when making payments.`,
    },
    {
      id: 8,
      title: '8. Limitation of Liability',
      content: `To the maximum extent permitted by law, Divine Bricks shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Services. Our total liability shall not exceed the amount paid by you (if any) in the last 12 months.`,
    },
    {
      id: 9,
      title: '9. Termination',
      content: `We reserve the right to suspend or terminate your access to Divine Bricks at any time, without notice, for conduct that violates these Terms, harms other users, or is otherwise deemed inappropriate by us. Upon termination, your right to use the Services will immediately cease.`,
    },
    {
      id: 10,
      title: '10. Governing Law & Dispute Resolution',
      content: `These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the Services shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra. We encourage users to first contact us to resolve disputes amicably.`,
    },
    {
      id: 11,
      title: '11. Changes to Terms',
      content: `We may update these Terms & Conditions from time to time. When we make significant changes, we will notify you via email or through a prominent notice on our website. Your continued use of the Services after such changes constitutes your acceptance of the updated Terms.`,
    },
    {
      id: 12,
      title: '12. Contact Information',
      content: `For any questions about these Terms & Conditions, please contact us at:
Email: legal@divinebricks.com
Phone: +91 22 4890 1234
Address: Divine Group Tower, 12th Floor, Bandra Kurla Complex, Mumbai - 400051, Maharashtra, India`,
    },
  ];

  // ===== Privacy Policy Sections =====
  const privacySections = [
    {
      id: 1,
      title: '1. Introduction',
      content: `Divine Bricks ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website, mobile application, or services. By using Divine Bricks, you consent to the practices described in this policy.`,
    },
    {
      id: 2,
      title: '2. Information We Collect',
      content: `We may collect the following types of information:

**Personal Information:**
• Name, email address, phone number
• Postal address and location data
• Government-issued ID (for verification, when required)
• Payment information (processed securely by third parties)

**Usage Information:**
• IP address, browser type, device information
• Pages viewed, time spent, click patterns
• Search queries and property preferences
• Cookies and similar tracking technologies`,
    },
    {
      id: 3,
      title: '3. How We Use Your Information',
      content: `We use your information to:
• Provide, operate, and improve our Services
• Connect buyers, sellers, tenants, and agents
• Send relevant property recommendations and updates
• Verify identity and prevent fraud
• Comply with legal obligations (including RERA guidelines)
• Analyze usage patterns to enhance user experience
• Respond to your inquiries and provide customer support`,
    },
    {
      id: 4,
      title: '4. Sharing Your Information',
      content: `We may share your information with:
• Real estate agents and developers (when you inquire about a property)
• Service providers (payment processors, cloud hosting, analytics)
• Legal authorities (when required by law)
• Business partners (with your explicit consent)

We do NOT sell your personal information to third parties.`,
    },
    {
      id: 5,
      title: '5. Cookies & Tracking',
      content: `Divine Bricks uses cookies, web beacons, and similar technologies to:
• Remember your preferences and login status
• Analyze site traffic and user behavior
• Show personalized content and advertisements
• Improve our Services

You can control cookies through your browser settings. However, disabling cookies may affect the functionality of certain features.`,
    },
    {
      id: 6,
      title: '6. Data Security',
      content: `We implement industry-standard security measures including SSL encryption, secure servers, access controls, and regular security audits to protect your personal information. While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`,
    },
    {
      id: 7,
      title: '7. Data Retention',
      content: `We retain your personal information for as long as necessary to provide our Services and comply with legal obligations. When you delete your account, we will remove or anonymize your data within 90 days, unless retention is required by law.`,
    },
    {
      id: 8,
      title: '8. Your Rights',
      content: `You have the right to:
• Access the personal information we hold about you
• Request corrections to inaccurate data
• Request deletion of your data
• Opt-out of marketing communications
• Object to certain data processing activities
• Withdraw consent at any time

To exercise these rights, contact us at privacy@divinebricks.com`,
    },
    {
      id: 9,
      title: '9. Third-Party Links',
      content: `Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before providing any personal information.`,
    },
    {
      id: 10,
      title: '10. Children\'s Privacy',
      content: `Divine Bricks is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately, and we will take steps to delete it.`,
    },
    {
      id: 11,
      title: '11. Updates to This Policy',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Significant changes will be communicated via email or a prominent notice on our website. Your continued use of Divine Bricks after changes constitutes acceptance of the updated policy.`,
    },
    {
      id: 12,
      title: '12. Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact our Data Protection Officer:

Email: privacy@divinebricks.com
Phone: +91 22 4890 1234
Address: Divine Group Tower, 12th Floor, Bandra Kurla Complex, Mumbai - 400051, Maharashtra, India`,
    },
  ];

  const activeSections = activeTab === 'terms' ? termsSections : privacySections;

  return (
    <div className="w-full flex flex-col font-sans overflow-x-hidden" style={{ backgroundColor: '#FFFFFF' }}>

      {/* ================= 1. HERO ================= */}
      <section className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-[#171A1C]">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
          alt="Terms and Privacy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(23,26,28,0.6) 0%, rgba(23,26,28,0.4) 50%, rgba(23,26,28,0.9) 100%)',
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
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Terms & Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Please read these terms carefully before using Divine Bricks. Your trust and privacy matter to us.
            </p>
            <p className="text-xs text-white/60 mt-4">
              Last Updated: 9 October 2026
            </p>
          </div>
        </div>
      </section>

      {/* ================= 2. TAB SWITCHER ================= */}
      <section className="w-full py-10 md:py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div
              className="inline-flex gap-2 rounded-2xl p-1.5 border"
              style={{ backgroundColor: '#F7F4ED', borderColor: '#E8E2D5' }}
            >
              <button
                onClick={() => { setActiveTab('terms'); setOpenSection(null); }}
                className="flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl text-xs md:text-sm font-bold transition-all"
                style={{
                  backgroundColor: activeTab === 'terms' ? '#F5A623' : 'transparent',
                  color: activeTab === 'terms' ? '#171A1C' : '#59636B',
                  boxShadow: activeTab === 'terms' ? '0 4px 16px rgba(245, 166, 35, 0.3)' : 'none',
                }}
              >
                <FileText className="w-4 h-4" />
                Terms & Conditions
              </button>
              <button
                onClick={() => { setActiveTab('privacy'); setOpenSection(null); }}
                className="flex items-center gap-2 px-6 md:px-8 py-3 rounded-xl text-xs md:text-sm font-bold transition-all"
                style={{
                  backgroundColor: activeTab === 'privacy' ? '#F5A623' : 'transparent',
                  color: activeTab === 'privacy' ? '#171A1C' : '#59636B',
                  boxShadow: activeTab === 'privacy' ? '0 4px 16px rgba(245, 166, 35, 0.3)' : 'none',
                }}
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. QUICK SUMMARY CARDS ================= */}
      <section className="w-full pb-14 md:pb-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                Icon: Lock,
                title: 'Your Data is Safe',
                desc: 'We use industry-standard encryption to protect your personal information.',
              },
              {
                Icon: UserCheck,
                title: 'You Are in Control',
                desc: 'Access, correct, or delete your data anytime through your account.',
              },
              {
                Icon: Scale,
                title: 'Fair & Transparent',
                desc: 'Clear terms, no hidden clauses, and full transparency in all dealings.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
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
                <p className="text-xs leading-relaxed" style={{ color: '#59636B' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CONTENT SECTIONS ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Active Tab Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              {activeTab === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#59636B' }}>
              {activeTab === 'terms'
                ? 'These terms govern your use of Divine Bricks and its services. Please read them carefully.'
                : 'Learn how we collect, use, and protect your personal information when you use our Services.'}
            </p>
          </div>

          {/* Sections — Accordion */}
          <div className="space-y-3">
            {activeSections.map((section, i) => {
              const isOpen = openSection === i;
              return (
                <div
                  key={section.id}
                  className="rounded-2xl overflow-hidden border transition-all duration-300"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: isOpen ? '#F5A623' : '#E8E2D5',
                    boxShadow: isOpen ? '0 8px 24px rgba(245, 166, 35, 0.1)' : '0 2px 8px rgba(23, 26, 28, 0.03)',
                  }}
                >
                  <button
                    onClick={() => toggleSection(i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  >
                    <span
                      className="text-sm md:text-base font-bold tracking-tight"
                      style={{ color: '#171A1C' }}
                    >
                      {section.title}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all"
                      style={{
                        backgroundColor: isOpen ? '#F5A623' : '#F7F4ED',
                        color: isOpen ? '#171A1C' : '#F5A623',
                      }}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed border-t"
                      style={{ color: '#59636B', borderColor: '#F7F4ED' }}
                    >
                      <div className="pt-5 whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. ACKNOWLEDGEMENT ================= */}
      <section className="w-full py-14 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 md:p-10 border text-center"
            style={{
              backgroundColor: '#F7F4ED',
              borderColor: '#F5A623',
              boxShadow: '0 8px 32px rgba(245, 166, 35, 0.08)',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #F5A623' }}
            >
              <CheckCircle2 className="w-8 h-8" style={{ color: '#F5A623' }} strokeWidth={1.8} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              By Using Divine Bricks, You Agree
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#59636B' }}>
              Your continued use of our Services constitutes your acceptance of these Terms & Conditions and Privacy Policy. If you have any concerns, please contact us before continuing to use the platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: '#F5A623',
                  color: '#171A1C',
                  boxShadow: '0 8px 24px rgba(245, 166, 35, 0.35)',
                }}
              >
                <Mail className="w-4 h-4" /> Contact Legal Team
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:-translate-y-0.5"
                style={{ borderColor: '#F5A623', color: '#F5A623', backgroundColor: 'transparent' }}
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. CONTACT INFO ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              Have Legal Questions?
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#59636B' }}>
              Our legal team is here to help. Reach out for any clarification regarding our terms or privacy practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                Icon: Mail,
                title: 'Email',
                line1: 'legal@divinebricks.com',
                line2: 'privacy@divinebricks.com',
                href: 'mailto:legal@divinebricks.com',
              },
              {
                Icon: Phone,
                title: 'Phone',
                line1: '+91 22 4890 1234',
                line2: 'Mon-Fri · 9 AM - 7 PM IST',
                href: 'tel:+912248901234',
              },
              {
                Icon: MapPin,
                title: 'Address',
                line1: 'Divine Group Tower',
                line2: 'BKC, Mumbai - 400051',
                href: '#',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 text-center block"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E8E2D5',
                  boxShadow: '0 4px 20px rgba(23, 26, 28, 0.04)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
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

    </div>
  );
}