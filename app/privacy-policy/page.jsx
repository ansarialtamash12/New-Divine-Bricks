'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  Database,
  UserCheck,
  Share2,
  Cookie,
  Lock,
  Clock,
  UserCog,
  Link2,
  Baby,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Eye,
  Server,
  Globe,
  FileCheck,
  AlertCircle,
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (i) => setOpenSection(openSection === i ? null : i);

  const privacySections = [
    {
      id: 1,
      Icon: Shield,
      title: '1. Introduction',
      content: `Divine Bricks ("we", "our", "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, store, and safeguard your personal information when you use our website, mobile application, or related services (collectively, the "Services").

This policy is prepared in accordance with:
• The Digital Personal Data Protection Act, 2023 (DPDP Act)
• The Information Technology Act, 2000
• The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
• The Real Estate (Regulation and Development) Act, 2016 (RERA)

By using Divine Bricks, you consent to the data practices described in this Privacy Policy. If you do not agree, please discontinue use of our Services immediately.`,
    },
    {
      id: 2,
      Icon: Database,
      title: '2. Information We Collect',
      content: `We collect the following types of information:

**A) Personal Information (provided by you):**
• Full name, email address, phone number
• Postal address and PIN code
• Date of birth and gender (optional)
• Government-issued ID (PAN, Aadhaar - for verification when required)
• Payment information (processed securely by third-party gateways)
• Property preferences and search history
• Communication history with agents/owners

**B) Automatically Collected Information:**
• IP address and geolocation (city-level)
• Browser type, operating system, device information
• Pages visited, time spent, click patterns
• Referring URLs and exit pages
• Cookies, web beacons, and similar technologies

**C) Information from Third Parties:**
• Social media profiles (when you sign in via Google/Facebook)
• Publicly available property records
• Business information from RERA registrations`,
    },
    {
      id: 3,
      Icon: UserCheck,
      title: '3. How We Use Your Information',
      content: `We use your information for the following purposes:

**A) Service Delivery:**
• Provide, operate, and improve our Services
• Connect buyers, sellers, tenants, landlords, and agents
• Enable property search and listing functionality
• Process payments and issue receipts

**B) Communication:**
• Send property recommendations and updates
• Notify you about new listings matching your preferences
• Respond to your inquiries and provide support
• Send transactional emails (OTP, booking confirmations)
• Share important policy updates

**C) Personalization:**
• Customize your experience on the platform
• Show relevant advertisements and listings
• Suggest properties based on your search history

**D) Safety & Security:**
• Verify identity and prevent fraud
• Detect and prevent spam, abuse, or illegal activity
• Comply with legal obligations (RERA, DPDP Act)
• Enforce our Terms and Conditions

**E) Analytics & Research:**
• Analyze usage patterns to improve user experience
• Conduct market research and generate insights
• Create anonymized reports for industry analysis`,
    },
    {
      id: 4,
      Icon: Share2,
      title: '4. How We Share Your Information',
      content: `We may share your information in the following ways:

**A) With Real Estate Agents & Developers:**
When you inquire about a property, your contact details are shared with the listing agent or developer so they can respond to your query.

**B) With Service Providers:**
We engage trusted third-party vendors for:
• Payment processing (Razorpay, PayU, etc.)
• Cloud hosting (AWS, Google Cloud)
• Analytics (Google Analytics, Mixpanel)
• SMS/Email/WhatsApp communication (Twilio, Gupshup)
• Customer support tools
• Marketing and advertising partners

**C) With Legal Authorities:**
We may disclose information when required by law, court order, or government request, or to protect the rights, property, or safety of Divine Bricks, our users, or the public.

**D) Business Transfers:**
In case of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.

**E) With Your Consent:**
We may share information for other purposes with your explicit consent.

**⚠️ Important:** We do NOT sell your personal information to third parties for their own marketing purposes.`,
    },
    {
      id: 5,
      Icon: Cookie,
      title: '5. Cookies & Tracking Technologies',
      content: `Divine Bricks uses cookies, web beacons, pixel tags, and similar technologies to enhance your experience.

**Types of Cookies We Use:**

**A) Essential Cookies:**
• Remember your login status
• Enable core functionality (search, filters)
• Ensure security and prevent fraud

**B) Performance Cookies:**
• Analyze site traffic and user behavior
• Identify popular pages and features
• Measure page load times

**C) Functional Cookies:**
• Remember your preferences (language, location)
• Save your search filters
• Personalize your experience

**D) Advertising Cookies:**
• Show relevant property ads
• Limit repetitive advertisements
• Measure ad campaign effectiveness

**Managing Cookies:**
You can control cookies through your browser settings. However, disabling cookies may affect the functionality of certain features on Divine Bricks.

For more details, please review our Cookie Policy.`,
    },
    {
      id: 6,
      Icon: Lock,
      title: '6. Data Security',
      content: `We implement industry-standard security measures to protect your personal information:

**Technical Safeguards:**
• SSL/TLS encryption for all data transmission (HTTPS)
• Encrypted storage of sensitive data (AES-256)
• Firewalls and intrusion detection systems
• Regular security audits and vulnerability assessments
• Two-factor authentication for account access

**Organizational Safeguards:**
• Access controls - only authorized personnel can access data
• Employee training on data protection
• Strict confidentiality agreements
• Incident response and breach notification procedures

**⚠️ Important:** While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.`,
    },
    {
      id: 7,
      Icon: Clock,
      title: '7. Data Retention',
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.

**Retention Periods:**

• **Active Accounts:** Data retained while your account is active
• **Inactive Accounts:** Data deleted after 3 years of inactivity
• **Transaction Records:** Retained for 8 years (as per Income Tax Act)
• **Legal Compliance:** Retained as required by RERA, DPDP Act, or other laws
• **Fraud Prevention:** Retained as long as necessary to prevent abuse
• **Deleted Accounts:** Data removed or anonymized within 90 days

**After Retention Period:**
Data is either:
• Permanently deleted from our servers
• Anonymized (so it cannot be linked to you)
• Archived for legal compliance purposes only`,
    },
    {
      id: 8,
      Icon: UserCog,
      title: '8. Your Rights (Under DPDP Act, 2023)',
      content: `As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the following rights:

**A) Right to Access:**
• Request a copy of the personal data we hold about you
• Know how your data is being processed

**B) Right to Correction:**
• Request correction of inaccurate or incomplete data
• Update your personal information anytime

**C) Right to Erasure (Right to be Forgotten):**
• Request deletion of your personal data
• Withdraw consent for data processing (subject to legal obligations)

**D) Right to Grievance Redressal:**
• File a complaint with our Data Protection Officer
• Escalate to the Data Protection Board of India if unsatisfied

**E) Right to Nominate:**
• Nominate a person to exercise your rights in case of death or incapacity

**F) Right to Withdraw Consent:**
• Withdraw consent at any time
• Note: This may affect your ability to use certain Services

**How to Exercise Your Rights:**
Email us at privacy@divinebricks.com with your request. We will respond within 30 days.

For more details, refer to the DPDP Act, 2023.`,
    },
    {
      id: 9,
      Icon: Link2,
      title: '9. Third-Party Links & Services',
      content: `Our Services may contain links to third-party websites, applications, or services that are not owned or controlled by Divine Bricks. These may include:

• Real estate developer websites
• Property listing aggregators
• Social media platforms
• Payment gateways
• Analytics providers
• Advertising networks

**Important:**
• We are NOT responsible for the privacy practices of these third parties
• Their data collection is governed by their own privacy policies
• We encourage you to review their policies before providing any information

**Social Sign-In:**
When you sign in using Google or Facebook, we receive limited profile information (name, email) as authorized by you. We do not access your other social media data.`,
    },
    {
      id: 10,
      Icon: Baby,
      title: '10. Children\'s Privacy',
      content: `Divine Bricks is NOT intended for use by children under 18 years of age. We do not knowingly collect, use, or disclose personal information from children.

**Our Commitment:**
• We do not knowingly allow children under 18 to register accounts
• We do not knowingly collect personal information from children
• We do not knowingly market our Services to children

**If We Discover:**
If you believe we have inadvertently collected information from a child under 18, please contact us immediately at privacy@divinebricks.com. We will take prompt steps to:
1. Verify the report
2. Delete the information from our systems
3. Terminate the account if applicable

Parents and guardians are encouraged to monitor their children's online activities.`,
    },
    {
      id: 11,
      Icon: Globe,
      title: '11. Cross-Border Data Transfers',
      content: `Divine Bricks primarily stores and processes your data on servers located in India.

**Data Localization:**
• Personal data of Indian users is stored on Indian servers
• We comply with data localization requirements under Indian law

**International Transfers:**
In limited circumstances, we may transfer data to servers outside India for:
• Cloud backup and disaster recovery
• Third-party service providers located abroad
• Global analytics and fraud detection

When we transfer data internationally, we ensure:
• Adequate data protection measures
• Contractual safeguards (standard data protection clauses)
• Compliance with the DPDP Act, 2023 and IT Act, 2000

**By using our Services, you consent to such transfers.**`,
    },
    {
      id: 12,
      Icon: FileCheck,
      title: '12. Compliance with Indian Laws',
      content: `Divine Bricks complies with all applicable Indian laws and regulations, including:

• **Digital Personal Data Protection Act, 2023** - Data protection framework
• **Information Technology Act, 2000** - Cyber law compliance
• **IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021** - Platform obligations
• **Real Estate (Regulation and Development) Act, 2016** - Property transaction rules
• **Income Tax Act, 1961** - Financial record retention
• **Companies Act, 2013** - Corporate governance
• **Consumer Protection Act, 2019** - User rights

**Grievance Officer (as per IT Rules, 2021):**
Name: [Grievance Officer Name]
Email: grievance@divinebricks.com
Phone: +91 22 4890 1234
Address: Divine Group Tower, 12th Floor, BKC, Mumbai – 400051

The Grievance Officer will acknowledge your complaint within 24 hours and resolve it within 15 days.`,
    },
    {
      id: 13,
      Icon: RefreshCw,
      title: '13. Updates to This Privacy Policy',
      content: `We may update this Privacy Policy from time to time to reflect:
• Changes in our data practices
• Updates to applicable laws
• New features or services
• Feedback from users and regulators

**How We Notify You:**
• When we make material changes, we will:
  - Post a prominent notice on our website
  - Send an email to registered users
  - Update the "Last Updated" date at the top of this page
  - Provide a summary of key changes

**Your Acceptance:**
Your continued use of Divine Bricks after such changes constitutes your acceptance of the updated Privacy Policy. If you do not agree with the changes, you may:
• Discontinue use of our Services
• Delete your account
• Contact us with your concerns

We encourage you to review this Privacy Policy periodically.`,
    },
    {
      id: 14,
      Icon: AlertCircle,
      title: '14. Data Breach Notification',
      content: `In the unlikely event of a data breach, Divine Bricks is committed to transparent and prompt notification:

**What We Will Do:**
1. **Detect & Contain:** Immediately investigate and contain the breach
2. **Assess Impact:** Determine what data was affected and the potential risk
3. **Notify You:** Inform affected users within 72 hours via email
4. **Notify Authorities:** Report to the Data Protection Board of India as required by law
5. **Remediate:** Fix the vulnerability and prevent future breaches
6. **Support:** Provide guidance on protective measures you can take

**What We Will Tell You:**
• Nature of the breach
• Categories of data affected
• Likely consequences
• Steps we have taken
• Recommended actions for you
• Contact for further information

**For Breach Reports:**
Email: security@divinebricks.com
Emergency Hotline: +91 22 4890 1235 (24/7)`,
    },
    {
      id: 15,
      Icon: Mail,
      title: '15. Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:

**Data Protection Officer (DPO):**
Email: privacy@divinebricks.com
Phone: +91 22 4890 1234

**Registered Office:**
Divine Group Tower, 12th Floor
Bandra Kurla Complex, Bandra East
Mumbai – 400051, Maharashtra, India

**Business Hours:**
Monday to Friday: 9:00 AM – 7:00 PM IST
Saturday: 10:00 AM – 4:00 PM IST

**For Specific Requests:**
• Data Access/Deletion: privacy@divinebricks.com
• Grievance Redressal: grievance@divinebricks.com
• Security Concerns: security@divinebricks.com
• Marketing Opt-Out: unsubscribe@divinebricks.com

**Response Time:**
We aim to respond to all privacy-related inquiries within 30 days.`,
    },
  ];

  return (
    <div className="w-full flex flex-col font-sans overflow-x-hidden" style={{ backgroundColor: '#FFFFFF' }}>

      {/* ================= 1. HERO ================= */}
      <section className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-[#171A1C]">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80"
          alt="Privacy Policy"
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
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how Divine Bricks collects, uses, and protects your personal information.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              {
                Icon: Lock,
                title: 'Encrypted',
                desc: 'Your data is protected with SSL and AES-256 encryption.',
              },
              {
                Icon: Eye,
                title: 'Transparent',
                desc: 'You know exactly what data we collect and why.',
              },
              {
                Icon: UserCog,
                title: 'Your Control',
                desc: 'Access, correct, or delete your data anytime.',
              },
              {
                Icon: Shield,
                title: 'DPDP Compliant',
                desc: 'Fully compliant with India\'s DPDP Act, 2023.',
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
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #F5A623' }}
                >
                  <item.Icon className="w-6 h-6" style={{ color: '#F5A623' }} strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold mb-2 tracking-tight" style={{ color: '#171A1C' }}>
                  {item.title}
                </h3>
                <p className="text-[11px] leading-relaxed" style={{ color: '#59636B' }}>
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
              Privacy Policy
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#59636B' }}>
              Learn how we collect, use, and protect your personal information when you use Divine Bricks.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {privacySections.map((section, i) => {
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
              <Shield className="w-8 h-8" style={{ color: '#F5A623' }} strokeWidth={1.8} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight" style={{ color: '#171A1C' }}>
              Your Privacy is Our Priority
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#59636B' }}>
              We are committed to protecting your personal data and being transparent about our practices. If you have any concerns, our Data Protection Officer is here to help.
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
                <Mail className="w-4 h-4" /> Contact DPO
              </Link>
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:-translate-y-0.5"
                style={{ borderColor: '#F5A623', color: '#F5A623', backgroundColor: 'transparent' }}
              >
                View Terms & Conditions
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
              Privacy-Related Inquiries?
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#59636B' }}>
              Our Data Protection Officer is here to help with any privacy concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                Icon: Mail,
                title: 'Email',
                line1: 'privacy@divinebricks.com',
                line2: 'We reply within 30 days',
                href: 'mailto:privacy@divinebricks.com',
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
                title: 'Office',
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