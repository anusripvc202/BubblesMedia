import React from 'react';
import Link from 'next/link';

const solutions = [
  {
    id: 'business-websites',
    category: 'websites',
    title: 'Business Websites',
    price: '₹9,999',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 'seo-services',
    category: 'digital-marketing',
    title: 'SEO Services',
    price: '₹7,999/mo',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    )
  },
  {
    id: 'social-media-marketing',
    category: 'digital-marketing',
    title: 'Social Media Marketing',
    price: '₹9,999/mo',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    id: 'whatsapp-marketing',
    category: 'whatsapp-marketing',
    title: 'WhatsApp Marketing',
    price: '₹4,999/mo',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  {
    id: 'google-business-profile',
    category: 'gmb',
    title: 'Google Business Profile',
    price: '₹2,999',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
      </svg>
    )
  }
];

export default function SolutionsGrid({ searchTerm, activeCategory, onEnquire }) {
  const filteredSolutions = solutions.filter((sol) => {
    const matchesSearch = searchTerm
      ? sol.title.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h2 style={{ fontSize: '1.4rem', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '-0.02em', color: 'var(--secondary)' }}>
            Explore Popular Solutions
            {activeCategory && <span className="badge badge-orange">{activeCategory.replace('-', ' ')}</span>}
          </h2>
        </div>
        <a href="#all-solutions" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
          View All Solutions →
        </a>
      </div>

      {filteredSolutions.length === 0 ? (
        <div style={{
          background: 'var(--bg-white)',
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          padding: '48px',
          textAlign: 'center',
          color: 'var(--text-light)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>No Solutions Found</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className="glass-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '8px',
                background: 'var(--bg-white)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-color)'
              }}
            >
              {/* Circular Orange Icon in center */}
              <div style={{
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                flexShrink: 0
              }}>
                {sol.icon}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '8px', color: 'var(--secondary)', letterSpacing: '-0.01em', minHeight: '36px', display: 'flex', alignItems: 'center' }}>
                {sol.title}
              </h3>

              {/* Pricing */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: '600' }}>Starting from</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>{sol.price}</span>
              </div>

              {/* A Single Outlined Details Button at bottom */}
              <Link
                href={`/services/${sol.id}`}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--primary)',
                  border: '1px solid var(--primary)',
                  borderRadius: '6px',
                  textAlign: 'center',
                  background: 'transparent',
                  display: 'block',
                  marginTop: 'auto',
                  transition: 'all 0.2s ease'
                }}
                className="btn-outline-primary-hover"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
