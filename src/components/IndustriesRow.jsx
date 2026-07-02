import React from 'react';

const industries = [
  {
    name: 'Doctors & Healthcare',
    color: '#0284c7',
    bg: '#f0f9ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    )
  },
  {
    name: 'Schools & Colleges',
    color: '#6366f1',
    bg: '#eef2ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
      </svg>
    )
  },
  {
    name: 'Real Estate & Builders',
    color: '#f97316',
    bg: '#fff7ed',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )
  },
  {
    name: 'E-commerce Stores',
    color: '#ec4899',
    bg: '#fdf2f8',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    )
  },
  {
    name: 'Restaurants & Cafes',
    color: '#d97706',
    bg: '#fffbeb',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    name: 'Salons & Wellness',
    color: '#10b981',
    bg: '#ecfdf5',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 7.54 16.59c-.44.49-.69 1.11-.69 1.76V21a1 1 0 0 1-1 1H6.15a1 1 0 0 1-1-1v-.65c0-.65-.25-1.27-.69-1.76A10 10 0 0 1 12 2z"></path>
      </svg>
    )
  },
  {
    name: 'Travel & Tourism',
    color: '#06b6d4',
    bg: '#ecfeff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 1 0-3-3L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 2-2.5-.5c-.3-.1-.6 0-.8.2l-.4.4c-.2.3-.2.8.1 1l2.5 1.5 1.5 2.5c.2.3.7.3 1 .1l.4-.4c.2-.2.3-.5.2-.8l-.5-2.5 2-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path>
      </svg>
    )
  },
  {
    name: 'Law Firms & Advocates',
    color: '#4b5563',
    bg: '#f3f4f6',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7V9a7 7 0 0 0-14 0v6a7 7 0 0 0 7 7z"></path>
        <path d="M12 2v2"></path>
        <path d="M19 9h2"></path>
        <path d="M5 9H3"></path>
      </svg>
    )
  },
  {
    name: 'Manufacturing & Industries',
    color: '#78716c',
    bg: '#f5f5f4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 21H2V3l7 4 5-4 8 5Z"></path>
        <path d="M12 17h2"></path>
        <path d="M12 13h2"></path>
        <path d="M6 17h2"></path>
        <path d="M6 13h2"></path>
      </svg>
    )
  },
  {
    name: 'NGOs & Non Profits',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    name: 'Startups & Entrepreneurs',
    color: '#3b82f6',
    bg: '#eff6ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5h20s-1-2.25-2.5-3.5"></path>
        <path d="M12 2C6.5 2 2 6.5 2 12c0 1.2.2 2.4.6 3.5h18.8c.4-1.1.6-2.3.6-3.5 0-5.5-4.5-10-10-10z"></path>
      </svg>
    )
  },
  {
    name: 'More Industries',
    color: '#1e293b',
    bg: '#f8fafc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    )
  }
];

export default function IndustriesRow({ onSelectIndustry }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--secondary)' }}>Solutions for Every Industry</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginTop: '4px' }}>Custom-tailored digital blueprints built specifically for your business domain</p>
        </div>
        <a href="#all-industries" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
          View All Industries
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      {/* Grid of Industry blocks - single row horizontal scroll */}
      <div className="industries-row-desktop" style={{
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: '1fr',
        gap: '10px',
        width: '100%'
      }}>
        {industries.map((ind, idx) => (
          <button
            key={idx}
            onClick={() => onSelectIndustry && onSelectIndustry(ind.name)}
            className="hover-card industries-card-desktop"
            style={{
              '--card-theme': ind.color,
              '--card-theme-light': ind.bg,
              background: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '6px 3px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '2px',
              cursor: 'pointer',
              minWidth: '0px'
            }}
          >
            <div className="industries-icon-container" style={{
              background: '#F8FAFC',
              color: 'var(--secondary)',
              border: '1px solid var(--border-color-light)',
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {ind.icon}
            </div>
            <span className="industries-card-text" style={{ fontSize: '0.55rem', fontWeight: '700', color: 'var(--secondary)', lineHeight: '1.1' }}>
              {ind.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
