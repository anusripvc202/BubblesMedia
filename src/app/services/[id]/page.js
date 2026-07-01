"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import QuoteModal from '../../../components/QuoteModal';

const serviceDatabase = {
  'business-websites': {
    title: 'Business Websites Blueprint',
    price: '₹9,999',
    desc: 'Establish a credible online presence with a clean, responsive, and search-optimized company profile.',
    plans: [
      { name: 'Silver Plan', price: '₹9,999', desc: 'Best for small profiles', features: ['5 Responsive Pages', 'Free .com/.in Domain (1 Yr)', 'Free Shared Hosting (1 Yr)', 'Standard Contact Form', '1 Week Delivery'] },
      { name: 'Gold Plan', price: '₹14,999', desc: 'Best for growing startups', features: ['10 Responsive Pages', 'Free Domain & Premium SSD Hosting', 'WhatsApp & Social Integrations', 'Admin Dashboard CMS (WordPress)', '2 Weeks Delivery'] },
      { name: 'Platinum Plan', price: '₹24,999', desc: 'Custom React corporate portals', features: ['Unlimited Pages', 'Bespoke Next.js/React Coding', 'Custom SVG Graphics & Illustrations', 'Basic SEO Setup & Speed Fixes', '3 Weeks Delivery'] }
    ]
  },
  'ecommerce-websites': {
    title: 'E-commerce Websites Blueprint',
    price: '₹14,999',
    desc: 'Launch a secure online store to sell products, manage inventory, and process digital payments.',
    plans: [
      { name: 'Silver Plan', price: '₹14,999', desc: 'Basic shop catalog', features: ['Up to 50 Products', 'Razorpay/UPI Payment Gateway', 'Standard Cart & Checkout', 'Admin Inventory Dashboard', '2 Weeks Delivery'] },
      { name: 'Gold Plan', price: '₹24,999', desc: 'Advanced e-commerce store', features: ['Up to 500 Products', 'Razorpay & Stripe integration', 'Discount Coupon System', 'Automatic Invoice PDF Generator', '3 Weeks Delivery'] },
      { name: 'Platinum Plan', price: '₹44,999', desc: 'Custom multi-vendor marketplace', features: ['Unlimited Products', 'Vendor Dashboard Panels', 'Advanced Analytics Tracker', 'Custom Search Engine Filtering', '5 Weeks Delivery'] }
    ]
  },
  'mobile-app-dev': {
    title: 'Mobile App Development',
    price: '₹49,999',
    desc: 'Build cross-platform Android & iOS applications using Flutter/React Native with custom backend systems.',
    plans: [
      { name: 'Silver Plan', price: '₹49,999', desc: 'Simple utility apps', features: ['Single App (Android or iOS)', 'Custom Clean UI Design', 'Firebase Auth & Database', 'Push Notifications', '4 Weeks Delivery'] },
      { name: 'Gold Plan', price: '₹79,999', desc: 'Cross-platform apps', features: ['Dual Apps (Android & iOS)', 'Payment Gateway Integration', 'Camera/GPS Device Access', 'Admin panel web portal', '6 Weeks Delivery'] },
      { name: 'Platinum Plan', price: '₹1,29,999', desc: 'Custom advanced apps', features: ['Android & iOS Apps', 'Real-time Chats / WebSockets', 'Social Media Login Integrations', 'Custom Analytics Dashboard', '8 Weeks Delivery'] }
    ]
  },
  'seo-services': {
    title: 'SEO Services Plan',
    price: '₹7,999/mo',
    desc: 'Boost your Google rankings, drive organic search traffic, and optimize technical speed index scores.',
    plans: [
      { name: 'Silver Plan', price: '₹7,999/mo', desc: 'Local Search Optimization', features: ['10 Target Keywords', 'On-Page Meta Optimizations', 'Google Maps Listing Rank', 'Monthly Traffic Reports', '3 Month Minimum Commit'] },
      { name: 'Gold Plan', price: '₹14,999/mo', desc: 'National Search Rank', features: ['25 Target Keywords', 'Technical SEO Code Fixes', 'High-DA Backlinks (10/mo)', 'Competitor Analysis Audit', '3 Month Minimum Commit'] },
      { name: 'Platinum Plan', price: '₹24,999/mo', desc: 'Hyper competitive search rank', features: ['50+ Target Keywords', 'Custom Content/Blogs Writing', 'High-DA Backlinks (25/mo)', 'Priority Weekly Audits', 'No Contract - Cancel Anytime'] }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    price: '₹9,999/mo',
    desc: 'Build brand authority and drive paid leads across Facebook, Instagram, LinkedIn, and Google Ads.',
    plans: [
      { name: 'Silver Plan', price: '₹9,999/mo', desc: 'Brand maintenance', features: ['12 Custom Graphic Posts / Month', 'Facebook & Instagram Management', 'Audience Growth Strategy', 'Basic Ad Campaign Setup', 'Cancel Anytime'] },
      { name: 'Gold Plan', price: '₹19,999/mo', desc: 'Active Lead Generation', features: ['20 Custom Posts + 4 Video Reels', 'FB, Insta & LinkedIn Management', 'Targeted Paid Ad Campaigns', 'Lead Form Integrations', 'Cancel Anytime'] },
      { name: 'Platinum Plan', price: '₹29,999/mo', desc: 'Full Scale Agency Growth', features: ['Daily Posts (30 Custom Graphics)', 'Video/Reels Production Scripts', 'Ad budget optimizations', 'Weekly ROI Reporting Calls', 'Cancel Anytime'] }
    ]
  },
  'whatsapp-marketing': {
    title: 'WhatsApp Marketing API',
    price: '₹4,999/mo',
    desc: 'Automate customer support and send broadcast updates using the official WhatsApp Business API.',
    plans: [
      { name: 'Silver Plan', price: '₹4,999/mo', desc: 'API Broadcast Tool', features: ['Official API Account Setup', 'Green Tick Verification Aid', 'Bulk Broadcast Senders', 'Standard CRM Contact Book', 'Cancel Anytime'] },
      { name: 'Gold Plan', price: '₹9,999/mo', desc: 'Interactive Chatbot Flow', features: ['Official API Account Setup', 'Custom Chatbot Flow Scripts', 'Auto FAQ Auto-responders', 'Team Chat Inbox Dashboard', 'Cancel Anytime'] }
    ]
  },
  'google-business-profile': {
    title: 'Google Business Profile GMB',
    price: '₹2,999',
    desc: 'Verify and optimize your Google Maps profile to rank first for local search keywords.',
    plans: [
      { name: 'Standard Setup', price: '₹2,999', desc: 'One-time onboarding setup', features: ['Google Maps Profile Creation', 'Verification Aid Assistance', 'Keyword Rich Description', 'Business Citations (10 directory)', '3 Days Delivery'] },
      { name: 'Growth Setup', price: '₹5,999', desc: 'Advanced optimization setup', features: ['Google Maps Profile Setup', 'Verification Aid', 'Local Competitor Audit', 'Business Citations (30 directories)', 'GMB Review Widget Code', '5 Days Delivery'] }
    ]
  },
  'logo-branding': {
    title: 'Logo & Branding Design',
    price: '₹2,999',
    desc: 'Establish a modern brand identity with customized vector logo concepts and complete style palettes.',
    plans: [
      { name: 'Silver Design', price: '₹2,999', desc: 'Best for standard branding', features: ['3 Logo Concepts (Vector format)', 'Brand Style Sheet (Hex colors, fonts)', 'High-Res PNG & PDF files', '2 Free Revisions', '3 Days Delivery'] },
      { name: 'Gold Design', price: '₹5,999', desc: 'Complete Startup Identity', features: ['5 Logo Concepts', 'Full Brand Identity Guide (PDF)', 'Business Card & Letterhead layouts', 'Social Media Banner Kits', 'Unlimited Revisions', '5 Days Delivery'] }
    ]
  }
};

export default function ServiceDetails() {
  const { id } = useParams();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState(null);

  const service = serviceDatabase[id];

  if (!service) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-base)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Service Blueprint Not Found</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '16px' }}>The dynamic ID "{id}" does not exist in our catalog.</p>
        <a href="/" className="btn-primary" style={{ textTransform: 'uppercase', fontSize: '0.8rem' }}>Go to Home</a>
      </div>
    );
  }

  const handleBookPlan = (plan) => {
    setQuoteData({
      title: `Book Plan: ${service.title} - ${plan.name}`,
      price: `Plan Price: ${plan.price}`
    });
    setIsQuoteOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        cartCount={0}
        wishlistCount={0}
        onQuoteOpen={() => {
          setQuoteData(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Main Content */}
      <main className="container-layout" style={{ marginTop: '48px', marginBottom: '64px', flex: 1 }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '16px', fontWeight: '600' }}>
          <a href="/">Home</a> / <a href="/#solutions">Services</a> / <span style={{ color: 'var(--secondary)' }}>{service.title}</span>
        </div>

        {/* Hero Header Segment */}
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-color)', paddingBottom: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--secondary)', letterSpacing: '-0.02em' }}>
            {service.title}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: '1.6', marginTop: '10px', maxWidth: '640px' }}>
            {service.desc}
          </p>
        </div>

        {/* Pricing Tables Grid */}
        <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '24px', color: 'var(--secondary)' }}>
          Choose Your Blueprint Level
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${service.plans.length}, 1fr)`, gap: '24px' }} className="pricing-grid-responsive">
          {service.plans.map((plan, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-color)',
                position: 'relative'
              }}
            >
              {/* Gold Highlight Badge */}
              {plan.name.includes('Gold') && (
                <span className="badge badge-orange" style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.6rem', fontWeight: '800' }}>
                  Recommended
                </span>
              )}

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '4px' }}>
                  {plan.name}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '20px' }}>
                  {plan.desc}
                </p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.4' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleBookPlan(plan)}
                className="btn-primary"
                style={{
                  width: '100%',
                  background: plan.name.includes('Gold') ? 'var(--primary)' : 'var(--secondary)'
                }}
              >
                Book Plan
              </button>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--secondary)',
        color: 'white',
        borderTop: '1px solid var(--border-color)',
        padding: '36px 0 24px 0'
      }}>
        <div className="container-layout" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'white', letterSpacing: '-0.5px' }}>
                BUBBLES <span style={{ color: 'var(--primary)' }}>MEDIA</span>
              </span>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>
                India's Premium Digital Solutions Marketplace.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '24px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
              <a href="/about" style={{ color: 'white' }}>About Us</a>
              <a href="/contact" style={{ color: 'white' }}>Contact Us</a>
              <a href="/help" style={{ color: 'white' }}>Help Center</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.75rem', color: 'var(--text-light)' }}>
            <span>© {new Date().getFullYear()} Bubbles Media. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={quoteData}
      />
    </div>
  );
}
