import React from 'react';
import Link from 'next/link';

const solutions = [
  {
    id: 'business-websites',
    category: 'websites',
    title: 'Business Websites',
    price: '₹9,999',
    period: '',
    features: ['5 Pages Responsive Design', 'Free Domain & Hosting (1 Yr)', 'SSL Certificate & Professional Email', 'WhatsApp Integration & Contact Form'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'ecommerce-websites',
    category: 'websites',
    title: 'E-commerce Websites',
    price: '₹14,999',
    period: '',
    features: ['Unlimited Product Listings', 'Secure Payment Gateway Integration', 'Shopping Cart & Order Tracking', 'Admin Dashboard & Inventory Manager'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    )
  },
  {
    id: 'mobile-app-dev',
    category: 'mobile-apps',
    title: 'Mobile App Development',
    price: '₹49,999',
    period: '',
    features: ['Android & iOS Apps (Flutter/React Native)', 'Custom UI/UX & Responsive Layouts', 'Push Notifications & App Stores Publish', 'Admin panel & Real-time Database'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 'seo-services',
    category: 'digital-marketing',
    title: 'SEO Services',
    price: '₹7,999',
    period: '/mo',
    features: ['Keyword Research & On-Page SEO', 'Technical SEO Audit & Speed Fixes', 'High-Quality Backlink Building', 'Monthly Traffic & Ranking Reports'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    )
  },
  {
    id: 'social-media-marketing',
    category: 'digital-marketing',
    title: 'Social Media Marketing',
    price: '₹9,999',
    period: '/mo',
    features: ['Facebook, Instagram, LinkedIn Setup', '12 Custom Graphic Posts / Month', 'Targeted Ad Campaign Management', 'Audience Growth & Engagement Strategy'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    id: 'whatsapp-marketing',
    category: 'whatsapp-marketing',
    title: 'WhatsApp Marketing',
    price: '₹4,999',
    period: '/mo',
    features: ['WhatsApp Business API Setup', 'Bulk Message Senders & Templates', 'Custom Chatbot Workflows & Automation', 'Green Tick Verification Assistance'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  {
    id: 'google-business-profile',
    category: 'gmb',
    title: 'Google Business Profile',
    price: '₹2,999',
    period: '',
    features: ['Google Maps Listing Setup', 'Profile Verification Assistance', 'Local SEO & Keyword Keywords Optimization', 'Review Management & Citation Boost'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  },
  {
    id: 'logo-branding',
    category: 'branding-graphics',
    title: 'Logo & Branding',
    price: '₹2,999',
    period: '',
    features: ['3 Unique Custom Logo Concepts', 'Complete Brand Style Guide (Colors, Fonts)', 'Business Card & Letterhead Layouts', 'Social Media Kit (Banners, Profiles)'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
      </svg>
    )
  }
];

export default function SolutionsGrid({ searchTerm, activeCategory, onEnquire }) {
  // Filter based on search query and/or active category sidebar selection
  const filteredSolutions = solutions.filter((sol) => {
    const matchesSearch = searchTerm
      ? sol.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sol.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;

    const matchesCategory = activeCategory
      ? sol.category === activeCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="solutions" style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '-0.02em', color: 'var(--secondary)' }}>
            Explore Popular Solutions
            {activeCategory && <span className="badge badge-orange">{activeCategory.replace('-', ' ')}</span>}
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginTop: '4px' }}>High-converting digital services ready to scale your business</p>
        </div>
        <a href="#all-solutions" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
          View All Solutions
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      {filteredSolutions.length === 0 ? (
        <div style={{
          background: 'var(--bg-white)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '48px',
          textAlign: 'center',
          color: 'var(--text-light)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', opacity: 0.5 }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>No Solutions Found</p>
          <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>We couldn't find matches for "{searchTerm}". Try another search keyword.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className="glass-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-white)'
              }}
            >
              {/* Central Icon */}
              <div style={{
                background: '#F8FAFC',
                color: 'var(--secondary)',
                border: '1px solid var(--border-color-light)',
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {sol.icon}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '6px', color: 'var(--secondary)', letterSpacing: '-0.01em' }}>
                {sol.title}
              </h3>

              {/* Pricing */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: '500' }}>Starting from</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>{sol.price}</span>
                {sol.period && <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: '500' }}>{sol.period}</span>}
              </div>

              {/* Bullet Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {sol.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.4' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <Link
                  href={`/services/${sol.id}`}
                  className="btn-outline"
                  style={{ flex: 1, padding: '8px 10px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  Details
                </Link>
                <button
                  onClick={() => onEnquire && onEnquire(sol)}
                  className="btn-primary"
                  style={{ flex: 1.2, padding: '8px 10px', fontSize: '0.75rem' }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
