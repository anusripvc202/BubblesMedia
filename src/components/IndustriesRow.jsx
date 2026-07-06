import React from 'react';

const industries = [
  {
    name: 'Doctors & Healthcare',
    desc: 'Clinics, Hospitals & Doctors',
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
    desc: 'LMS, Portals & E-learning',
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
    desc: 'Property Listing & Builders',
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
    desc: 'Online Retail & Shops',
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
    desc: 'Digital Menus & Delivery',
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
    desc: 'Appointment Booking Systems',
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
    desc: 'Agency Portals & Booking',
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
    desc: 'Legal Portals & Case Tracking',
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
    desc: 'B2B Catalog & ERP Solutions',
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
    desc: 'Donations & Campaigns Sites',
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
    desc: 'MVP & Product Engineering',
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
    name: 'Finance & Banking',
    desc: 'Fintech apps & banking portals',
    color: '#1d4ed8',
    bg: '#eff6ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="21" y2="21"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <polyline points="3 10 12 3 21 10"></polyline>
        <line x1="6" y1="10" x2="6" y2="21"></line>
        <line x1="10" y1="10" x2="10" y2="21"></line>
        <line x1="14" y1="10" x2="14" y2="21"></line>
        <line x1="18" y1="10" x2="18" y2="21"></line>
      </svg>
    )
  },
  {
    name: 'Insurance Solutions',
    desc: 'Policy & claims management systems',
    color: '#0f766e',
    bg: '#f0fdfa',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    name: 'Logistics Solutions',
    desc: 'Fleet & shipment tracking systems',
    color: '#b45309',
    bg: '#fffbeb',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    )
  },
  {
    name: 'Automobile Solutions',
    desc: 'Dealership & service center portals',
    color: '#374151',
    bg: '#f9fafb',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
        <circle cx="7" cy="17" r="2"></circle>
        <circle cx="17" cy="17" r="2"></circle>
        <path d="M5 17h10"></path>
      </svg>
    )
  },
  {
    name: 'Fitness Solutions',
    desc: 'Gym membership & workout apps',
    color: '#16a34a',
    bg: '#f0fdf4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5h11M6.5 17.5h11M12 3v18M3 6.5h3.5v11H3zM17.5 6.5H21v11h-3.5z"></path>
      </svg>
    )
  },
  {
    name: 'Event Management Solutions',
    desc: 'Event booking & ticketing systems',
    color: '#7c3aed',
    bg: '#faf5ff',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"></path>
        <line x1="12" y1="5" x2="12" y2="19"></line>
      </svg>
    )
  },
  {
    name: 'Agriculture Solutions',
    desc: 'AgriTech portals & farm management',
    color: '#65a30d',
    bg: '#f7fee7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12a10 10 0 0 1 10-10z"></path>
        <path d="M12 6a6 6 0 0 1 6 6c0 3.31-2.69 6-6 6s-6-2.69-6-6a6 6 0 0 1 6-6z" opacity="0.3"></path>
        <path d="M12 2v20M12 10a4 4 0 0 1 4-4M12 14a4 4 0 0 0-4 4"></path>
      </svg>
    )
  },
  {
    name: 'Recruitment Solutions',
    desc: 'Job portals & applicant tracking',
    color: '#0369a1',
    bg: '#e0f2fe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    )
  },
  {
    name: 'Hospitality Solutions',
    desc: 'Hotel booking & property PMS',
    color: '#b45309',
    bg: '#fef3c7',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16M2 11h20M22 4v16M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M12 15h.01"></path>
      </svg>
    )
  },
  {
    name: 'Media & Entertainment Solutions',
    desc: 'OTT apps & content streaming portals',
    color: '#dc2626',
    bg: '#fff1f2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    )
  },
  {
    name: 'Sports Management Solutions',
    desc: 'Sports club & tournament management',
    color: '#ea580c',
    bg: '#fff7ed',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 1 4 4v7H8V6a4 4 0 0 1 4-4z"></path>
      </svg>
    )
  },
  {
    name: 'More Industries',
    desc: 'Custom Domain Digital Blueprints',
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

const DEFAULT_VISIBLE_IND = 8; // 2 rows × 4

export default function IndustriesRow({ onSelectIndustry }) {
  const [showAll, setShowAll] = React.useState(false);

  const visibleIndustries = showAll ? industries : industries.slice(0, DEFAULT_VISIBLE_IND);
  const hiddenCount = industries.length - DEFAULT_VISIBLE_IND;

  return (
    <section style={{ marginBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--secondary)' }}>Solutions for Every Industry</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginTop: '4px' }}>Custom-tailored digital blueprints built specifically for your business domain</p>
        </div>
        {hiddenCount > 0 && (
          <button
            onClick={() => setShowAll(v => !v)}
            style={{
              fontSize: '0.82rem',
              color: 'var(--primary)',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'opacity 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {showAll ? (
              <>Show Less ↑</>
            ) : (
              <>View All Industries <span style={{
                background: 'var(--primary)',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: '800',
                borderRadius: '999px',
                padding: '1px 7px',
                marginLeft: '2px',
              }}>+{hiddenCount}</span> →</>
            )}
          </button>
        )}
      </div>

      {/* Grid of Industry blocks */}
      <div className="industries-row-desktop" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '18px',
        width: '100%',
        padding: '6px 6px 12px',
        boxSizing: 'border-box'
      }}>
        {visibleIndustries.map((ind, idx) => (
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
              padding: '36px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '14px',
              cursor: 'pointer',
              minWidth: '0px',
              minHeight: '240px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = ind.color;
              e.currentTarget.style.background = ind.bg;
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = `0 6px 20px ${ind.color}22`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.background = 'var(--bg-white)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="industries-icon-container" style={{
              background: ind.bg,
              color: ind.color,
              border: '1px solid var(--border-color-light)',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '4px',
              flexShrink: 0
            }}>
              {ind.icon}
            </div>
            <span className="industries-card-text" style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--secondary)', lineHeight: '1.25' }}>
              {ind.name}
            </span>
            <span className="industries-card-sub" style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: '500', display: 'block', marginTop: '2px', lineHeight: '1.4' }}>
              {ind.desc}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
