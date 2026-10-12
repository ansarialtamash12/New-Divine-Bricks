'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Lock,
  UserCheck,
  Scale,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Building2,
  ShieldCheck,
  AlertCircle,
  IndianRupee,
  Ban,
  Copyright,
  RefreshCw,
  Gavel,
  MessageSquare,
} from 'lucide-react';

export default function TermsPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (i) => setOpenSection(openSection === i ? null : i);

  const termsSections = [
    {
      id: 1,
      Icon: FileText,
      title: '1. Acceptance of Terms',
      content: `Welcome to Divine Bricks ("Company", "we", "our", "us"). By accessing or using our website, mobile application, or any related services (collectively, the "Services"), you agree to be bound by these Terms and Conditions ("Terms"). 

If you do not agree with any part of these Terms, you must immediately discontinue use of our Services. Your continued use of Divine Bricks constitutes your acceptance of these Terms and any future amendments.`,
    },
    {
      id: 2,
      Icon: UserCheck,
      title: '2. Eligibility & Registration',
      content: `You must be at least 18 years of age and legally capable of entering into binding contracts under the Indian Contract Act, 1872. By using Divine Bricks, you represent and warrant that:

• You are at least 18 years old
• You are an Indian resident or legally permitted to transact in Indian real estate
• All information you provide is accurate, current, and complete
• You will maintain the accuracy of your account information

To access certain features, you must register as a user by creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.`,
    },
    {
      id: 3,
      Icon: Building2,
      title: '3. Property Listings & Content',
      content: `All property listings, descriptions, images, floor plans, pricing, and other content on Divine Bricks are provided by:
• Property owners and landlords
• Licensed real estate agents and brokers
• Real estate developers and builders
• Other authorized third parties

While we strive to ensure accuracy, Divine Bricks does not guarantee the completeness, reliability, or accuracy of any listing. Users are strongly advised to:

• Independently verify all property details
• Physically inspect properties before making any commitment
• Verify legal documents (title deed, RERA registration, encumbrance certificate)
• Conduct due diligence with legal and financial advisors

Divine Bricks acts solely as a listing platform and is NOT a party to any transaction between buyers, sellers, tenants, landlords, or agents.`,
    },
    {
      id: 4,
      Icon: IndianRupee,
      title: '4. Listing Services & Fees',
      content: `Divine Bricks offers both free and paid services:

**Free Services:**
• Basic property listings
• Property search and browse
• Contacting listed agents/owners
• Using TruEstimate™ valuation tool

**Paid Services (Optional):**
• Premium/Featured listings
• Enhanced visibility and priority ranking
• Verified badges (TruCheck™)
• Agent/developer promotional packages

All fees are in Indian Rupees (INR) and are subject to applicable GST. Payments are processed through secure third-party payment gateways (Razorpay, PayU, etc.). By making a payment, you agree to their respective terms of service.

**Refund Policy:** Fees paid for premium listings are non-refundable unless otherwise specified in writing. If a listing is removed by us for policy violations, no refund will be issued.`,
    },
    {
      id: 5,
      Icon: Ban,
      title: '5. Prohibited Conduct',
      content: `By using Divine Bricks, you agree NOT to:

• Post false, misleading, or fraudulent property listings
• Use the Services for any illegal, unlawful, or unauthorized purpose
• Violate any applicable Indian laws including RERA, FEMA, and IT Act
• Infringe on the intellectual property rights of others
• Attempt to gain unauthorized access to our systems, servers, or data
• Use automated bots, scrapers, or crawlers to harvest data
• Post discriminatory, offensive, obscene, or harmful content
• Impersonate another person, agent, or business
• Spam other users with unwanted messages or solicitations
• Post duplicate or repeated listings for the same property
• Bypass our listing fees by sharing direct contact details in prohibited areas
• Collect user information without consent

Violation of these rules may result in:
• Immediate account suspension or permanent ban
• Removal of listings without notice
• Legal action as per applicable Indian laws`,
    },
    {
      id: 6,
      Icon: Copyright,
      title: '6. Intellectual Property Rights',
      content: `All content on Divine Bricks — including but not limited to:

• Logos, brand names, and trademarks
• Text, articles, blogs, and descriptions
• Graphics, images, and illustrations
• Software, code, and databases
• Product names (TruCheck™, TruBroker™, TruEstimate™, DivineGPT)

— are the exclusive property of Divine Bricks or its licensors, and are protected under the Indian Copyright Act, 1957, and international copyright laws.

You may NOT:
• Copy, reproduce, or republish our content without written permission
• Use our trademarks for commercial purposes
• Modify, distribute, or create derivative works
• Reverse engineer any part of our platform

**User Content License:** By posting content (listings, reviews, images), you grant Divine Bricks a non-exclusive, worldwide, royalty-free license to use, display, and distribute that content on our platform and for marketing purposes.`,
    },
    {
      id: 7,
      Icon: AlertCircle,
      title: '7. Disclaimer of Warranties',
      content: `Divine Bricks provides its Services on an "as is" and "as available" basis. We make NO warranties, express or implied, including but not limited to:

• Accuracy or completeness of property listings
• Uninterrupted or error-free Service
• Fitness for a particular purpose
• Non-infringement of third-party rights
• That the properties listed are legally clear and free from disputes

**Important:** We do NOT guarantee:
• That any transaction will be completed successfully
• The creditworthiness of buyers/tenants
• The legitimacy of sellers/landlords/agents
• The legal validity of any property title

All transactions are at your own risk. Always consult legal, financial, and tax professionals before making real estate decisions.`,
    },
    {
      id: 8,
      Icon: Scale,
      title: '8. Limitation of Liability',
      content: `To the maximum extent permitted by law, Divine Bricks and its parent company, directors, employees, and affiliates shall NOT be liable for any:

• Indirect, incidental, special, or consequential damages
• Loss of profits, revenue, or business opportunities
• Loss of data or goodwill
• Property disputes between users
• Financial losses from fraudulent listings
• Damages arising from reliance on any listing

Our total aggregate liability shall NOT exceed the amount paid by you (if any) to Divine Bricks in the preceding 12 months, or ₹10,000, whichever is lower.

This limitation applies regardless of the legal theory (contract, tort, negligence, strict liability, or otherwise).`,
    },
    {
      id: 9,
      Icon: Lock,
      title: '9. Privacy & Data Protection',
      content: `Your privacy is important to us. Our collection, use, and protection of your personal data is governed by our Privacy Policy, which is incorporated into these Terms by reference.

By using Divine Bricks, you consent to:
• Collection of personal information as described in our Privacy Policy
• Use of cookies and similar tracking technologies
• Communication via email, SMS, WhatsApp, and phone
• Sharing of your contact details with agents/owners you contact

You can manage your communication preferences from your account settings. To delete your data, contact privacy@divinebricks.com.`,
    },
    {
      id: 10,
      Icon: ShieldCheck,
      title: '10. Third-Party Services & Links',
      content: `Divine Bricks may contain links to third-party websites, services, or advertisements. We are NOT responsible for:

• The content, accuracy, or privacy practices of third parties
• Products or services offered by third parties
• Any damages arising from interactions with third parties

Your interactions with third parties are governed by their own terms and conditions. We strongly recommend reviewing their policies before engaging.`,
    },
    {
      id: 11,
      Icon: RefreshCw,
      title: '11. Modifications to Terms',
      content: `Divine Bricks reserves the right to modify these Terms at any time without prior notice. When we make significant changes, we will:

• Post a prominent notice on our website
• Send an email to registered users
• Update the "Last Updated" date at the top of this page

Your continued use of Divine Bricks after such modifications constitutes your acceptance of the updated Terms. It is your responsibility to review these Terms periodically.`,
    },
    {
      id: 12,
      Icon: Gavel,
      title: '12. Governing Law & Dispute Resolution',
      content: `These Terms shall be governed by and construed in accordance with the laws of India.

**Jurisdiction:** Any disputes arising out of or relating to these Terms or the use of Divine Bricks shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.

**Dispute Resolution Process:**
1. First, contact us at legal@divinebricks.com with details of the dispute
2. We will attempt to resolve the matter amicably within 30 days
3. If unresolved, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996
4. The arbitration shall be conducted in Mumbai in English

**Class Action Waiver:** You agree to resolve disputes individually and waive any right to participate in class actions or class-wide arbitration.`,
    },
    {
      id: 13,
      Icon: UserCheck,
      title: '13. Termination of Account',
      content: `Divine Bricks reserves the right to suspend or terminate your account at any time, with or without notice, for:

• Violation of these Terms
• Fraudulent or illegal activity
• Multiple complaints from other users
• Non-payment of applicable fees
• Any conduct deemed harmful to our platform or users

Upon termination:
• Your access to the Services will be revoked immediately
• Your listings will be removed
• No refunds will be issued for pre-paid services
• Sections on liability, indemnification, and governing law will survive termination`,
    },
    {
      id: 14,
      Icon: Scale,
      title: '14. Indemnification',
      content: `You agree to indemnify and hold harmless Divine Bricks, its parent company, directors, officers, employees, and agents from any and all claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising from:

• Your violation of these Terms
• Your violation of any third-party rights
• Your use of the Services
• Any content you post or transmit
• Any fraudulent, illegal, or harmful activity conducted through your account

This indemnification obligation will survive the termination of your account and these Terms.`,
    },
    {
      id: 15,
      Icon: MessageSquare,
      title: '15. Contact Us',
      content: `If you have any questions, concerns, or complaints about these Terms and Conditions, please contact us:

**Legal Team:**
Email: legal@divinebricks.com
Phone: +91 22 4890 1234

**Registered Office:**
Divine Group Tower, 12th Floor
Bandra Kurla Complex, Bandra East
Mumbai – 400051, Maharashtra, India

**Business Hours:**
Monday to Friday: 9:00 AM – 7:00 PM IST
Saturday: 10:00 AM – 4:00 PM IST

For privacy-related matters, please write to: privacy@divinebricks.com
For reporting fake listings, please write to: report@divinebricks.com`,
    },
  ];

  return (
    <div className="w-full flex flex-col font-sans overflow-x-hidden" style={{ backgroundColor: '#FFFFFF' }}>

      {/* ================= 1. HERO ================= */}
      <section className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-[#171A1C]">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt="Terms and Conditions"
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
              Terms & Conditions
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Please read these terms carefully before using Divine Bricks. By using our Services, you agree to be bound by these terms.
            </p>
            <p className="text-xs text-white/60 mt-4">
              Last Updated: 9 October 2026
            </p>
          </div>
        </div>
      </section>

      {/* ================= 2. QUICK SUMMARY CARDS ================= */}
      <section className="w-full py-14 md:py-16" style={{ backgroundColor: '#FFFFFF' }}>
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

      {/* ================= 3. CONTENT SECTIONS ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              Terms & Conditions
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#59636B' }}>
              These terms govern your use of Divine Bricks and its services. Please read them carefully.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {termsSections.map((section, i) => {
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
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all"
                        style={{
                          backgroundColor: isOpen ? '#F5A623' : '#F7F4ED',
                          border: isOpen ? '1px solid #F5A623' : '1px solid #E8E2D5',
                        }}
                      >
                        <section.Icon
                          className="w-5 h-5"
                          style={{ color: isOpen ? '#171A1C' : '#F5A623' }}
                          strokeWidth={1.8}
                        />
                      </div>
                      <span
                        className="text-sm md:text-base font-bold tracking-tight"
                        style={{ color: '#171A1C' }}
                      >
                        {section.title}
                      </span>
                    </div>
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
                      <div className="pt-5 whitespace-pre-line">{section.content}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. ACKNOWLEDGEMENT ================= */}
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
              Your continued use of our Services constitutes your acceptance of these Terms and Conditions. If you have any concerns, please contact us before continuing to use the platform.
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

      {/* ================= 5. CONTACT INFO ================= */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#F7F4ED' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              Have Legal Questions?
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#59636B' }}>
              Our legal team is here to help. Reach out for any clarification regarding our terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                Icon: Mail,
                title: 'Email',
                line1: 'legal@divinebricks.com',
                line2: 'We reply within 48 hours',
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