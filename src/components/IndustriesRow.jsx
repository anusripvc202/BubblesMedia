import React from 'react';

const industries = [
  {
    name: 'Doctors & Healthcare',
    desc: 'Clinics, Hospitals & Doctors',
    color: '#0284c7',
    bg: '#f0f9ff',
    icon: '🩺'
  },
  {
    name: 'Schools & Colleges',
    desc: 'LMS, Portals & E-learning',
    color: '#6366f1',
    bg: '#eef2ff',
    icon: '🎓'
  },
  {
    name: 'Real Estate & Builders',
    desc: 'Property Listing & Builders',
    color: '#f97316',
    bg: '#fff7ed',
    icon: '🏠'
  },
  {
    name: 'E-commerce Stores',
    desc: 'Online Retail & Shops',
    color: '#ec4899',
    bg: '#fdf2f8',
    icon: '🛒'
  },
  {
    name: 'Restaurants & Cafes',
    desc: 'Digital Menus & Delivery',
    color: '#d97706',
    bg: '#fffbeb',
    icon: '☕'
  },
  {
    name: 'Salons & Wellness',
    desc: 'Appointment Booking Systems',
    color: '#10b981',
    bg: '#ecfdf5',
    icon: '💇'
  },
  {
    name: 'Travel & Tourism',
    desc: 'Agency Portals & Booking',
    color: '#06b6d4',
    bg: '#ecfeff',
    icon: '✈️'
  },
  {
    name: 'Law Firms & Advocates',
    desc: 'Legal Portals & Case Tracking',
    color: '#4b5563',
    bg: '#f3f4f6',
    icon: '⚖️'
  },
  {
    name: 'Manufacturing & Industries',
    desc: 'B2B Catalog & ERP Solutions',
    color: '#78716c',
    bg: '#f5f5f4',
    icon: '🏭'
  },
  {
    name: 'NGOs & Non Profits',
    desc: 'Donations & Campaigns Sites',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    icon: '❤️'
  },
  {
    name: 'Startups & Entrepreneurs',
    desc: 'MVP & Product Engineering',
    color: '#3b82f6',
    bg: '#eff6ff',
    icon: '🚀'
  },
  {
    name: 'Finance & Banking',
    desc: 'Fintech apps & banking portals',
    color: '#1d4ed8',
    bg: '#eff6ff',
    icon: '🏦'
  },
  {
    name: 'Insurance Solutions',
    desc: 'Policy & claims management systems',
    color: '#0f766e',
    bg: '#f0fdfa',
    icon: '🛡️'
  },
  {
    name: 'Logistics Solutions',
    desc: 'Fleet & shipment tracking systems',
    color: '#b45309',
    bg: '#fffbeb',
    icon: '🚚'
  },
  {
    name: 'Automobile Solutions',
    desc: 'Dealership & service center portals',
    color: '#374151',
    bg: '#f9fafb',
    icon: '🚗'
  },
  {
    name: 'Fitness Solutions',
    desc: 'Gym membership & workout apps',
    color: '#16a34a',
    bg: '#f0fdf4',
    icon: '🏋️'
  },
  {
    name: 'Event Management Solutions',
    desc: 'Event booking & ticketing systems',
    color: '#7c3aed',
    bg: '#faf5ff',
    icon: '🎟️'
  },
  {
    name: 'Agriculture Solutions',
    desc: 'AgriTech portals & farm management',
    color: '#65a30d',
    bg: '#f7fee7',
    icon: '🌱'
  },
  {
    name: 'Recruitment Solutions',
    desc: 'Job portals & applicant tracking',
    color: '#0369a1',
    bg: '#e0f2fe',
    icon: '💼'
  },
  {
    name: 'Hospitality Solutions',
    desc: 'Hotel booking & property PMS',
    color: '#b45309',
    bg: '#fef3c7',
    icon: '🏨'
  },
  {
    name: 'Media & Entertainment Solutions',
    desc: 'OTT apps & content streaming portals',
    color: '#dc2626',
    bg: '#fff1f2',
    icon: '🎬'
  },
  {
    name: 'Sports Management Solutions',
    desc: 'Sports club & tournament management',
    color: '#ea580c',
    bg: '#fff7ed',
    icon: '🏆'
  },
  {
    name: 'More Industries',
    desc: 'Custom Domain Digital Blueprints',
    color: '#1e293b',
    bg: '#f8fafc',
    icon: '✨'
  }
];

const DEFAULT_VISIBLE_IND = 8; // 2 rows × 4

export default function IndustriesRow({ onSelectIndustry }) {
  const [showAll, setShowAll] = React.useState(false);
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

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
        rowGap: '28px',
        columnGap: '18px',
        width: '100%',
        padding: '6px 6px 12px',
        boxSizing: 'border-box'
      }}>
        {visibleIndustries.map((ind, idx) => (
          <button
            key={idx}
            onClick={() => onSelectIndustry && onSelectIndustry(ind.name)}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="hover-card industries-card-desktop"
            style={{
              '--card-theme': ind.color,
              '--card-theme-light': ind.bg,
              background: '#fff',
              border: hoveredIdx === idx ? `1.5px solid ${ind.color}` : '1px solid rgba(226, 232, 240, 0.8)',
              borderRadius: '16px',
              padding: '28px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '12px',
              cursor: 'pointer',
              minWidth: '0px',
              minHeight: '220px',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: hoveredIdx === idx 
                ? `0 20px 38px rgba(0, 0, 0, 0.04), 0 4px 18px ${ind.color}18` 
                : '0 4px 12px rgba(0, 0, 0, 0.015)',
              transform: hoveredIdx === idx ? 'translateY(-6px)' : 'translateY(0)',
            }}
          >
            <div className="industries-icon-container" style={{
              background: ind.bg,
              color: ind.color,
              border: `1px solid ${ind.color}20`,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '4px',
              flexShrink: 0,
              fontSize: '22px',
              transition: 'transform 0.3s ease',
              transform: hoveredIdx === idx ? 'scale(1.08)' : 'scale(1)'
            }}>
              {ind.icon}
            </div>
            <span className="industries-card-text" style={{ 
              fontSize: '0.98rem', 
              fontWeight: '800', 
              color: hoveredIdx === idx ? ind.color : 'var(--secondary)', 
              lineHeight: '1.25',
              transition: 'color 0.2s ease'
            }}>
              {ind.name}
            </span>
            <span className="industries-card-sub" style={{ 
              fontSize: '0.76rem', 
              color: 'var(--text-medium)', 
              fontWeight: '500', 
              display: 'block', 
              lineHeight: '1.4',
              flexGrow: 1
            }}>
              {ind.desc}
            </span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontSize: '0.72rem',
              fontWeight: '800',
              color: ind.color,
              opacity: hoveredIdx === idx ? 1 : 0.8,
              transition: 'all 0.2s ease',
              marginTop: '4px',
              width: '100%'
            }}>
              View Details
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                style={{
                  transition: 'transform 0.2s ease',
                  transform: hoveredIdx === idx ? 'translateX(4px)' : 'translateX(0)'
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
