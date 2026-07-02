import React from 'react';
import Link from 'next/link';
import { serviceDatabase, categories } from '../data/servicesData';

// Custom icons mapping for specific services, falling back to parent category icons if not mapped
const getServiceIcon = (serviceId, categoryId) => {
  const categoryMeta = categories.find(c => c.id === categoryId);
  const categoryIcon = categoryMeta ? categoryMeta.icon : null;

  switch (serviceId) {
    case 'ecommerce-websites':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
      );
    case 'seo-services':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      );
    case 'social-media-marketing':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
    case 'logo-branding':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
        </svg>
      );
    case 'ai-agents':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 7.54 16.59c-.44.49-.69 1.11-.69 1.76V21a1 1 0 0 1-1 1H6.15a1 1 0 0 1-1-1v-.65c0-.65-.25-1.27-.69-1.76A10 10 0 0 1 12 2z"></path>
          <line x1="6" y1="10" x2="18" y2="10"></line>
          <line x1="10" y1="14" x2="14" y2="14"></line>
        </svg>
      );
    case 'custom-software':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    case 'clinic-management':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case 'cloud-hosting':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      );
    default:
      return categoryIcon;
  }
};

const solutions = Object.entries(serviceDatabase).map(([key, val]) => ({
  id: key,
  icon: getServiceIcon(key, val.category),
  ...val
}));

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
        <div className="solutions-row-desktop" style={{ display: 'grid' }}>
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className="glass-panel solutions-card-desktop hover-card"
              style={{
                padding: '16px 12px',
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
              {/* Circular Icon */}
              <div style={{
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
                flexShrink: 0
              }}>
                {sol.icon}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '0.72rem', fontWeight: '800', marginBottom: '4px', color: 'var(--secondary)', letterSpacing: '-0.01em', minHeight: '28px', display: 'flex', alignItems: 'center', lineHeight: '1.2' }}>
                {sol.title}
              </h3>

              {/* Pricing */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.58rem', color: 'var(--text-light)', fontWeight: '600' }}>Starting from</span>
                <span style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>{sol.price}</span>
              </div>

              {/* View Details Button */}
              <Link
                href={`/services/${sol.id}`}
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  color: 'var(--primary)',
                  background: 'var(--primary-light)',
                  border: 'none',
                  borderRadius: '4px',
                  textAlign: 'center',
                  display: 'block',
                  marginTop: 'auto',
                  transition: 'all 0.2s ease'
                }}
                className="hover-card"
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

