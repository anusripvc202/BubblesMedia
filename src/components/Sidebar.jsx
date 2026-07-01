import React from 'react';

const categories = [
  {
    id: 'websites',
    name: 'Websites',
    desc: 'Business, E-commerce, Portfolio',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'mobile-apps',
    name: 'Mobile Apps',
    desc: 'Android, iOS, Cross Platform',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    desc: 'SEO, SMM, Ads, Email Marketing',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    id: 'whatsapp-marketing',
    name: 'WhatsApp Marketing',
    desc: 'Automation, API, Chatbot',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    )
  },
  {
    id: 'gmb',
    name: 'Google Business (GMB)',
    desc: 'Profile Setup & Optimization',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  },
  {
    id: 'branding-graphics',
    name: 'Branding & Graphics',
    desc: 'Logo, Brand Identity, Print',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
        <path d="M12 6V12L16 14"></path>
      </svg>
    )
  },
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    desc: 'AI Agents, Automation, Chatbot',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 7.54 16.59c-.44.49-.69 1.11-.69 1.76V21a1 1 0 0 1-1 1H6.15a1 1 0 0 1-1-1v-.65c0-.65-.25-1.27-.69-1.76A10 10 0 0 1 12 2z"></path>
        <line x1="6" y1="10" x2="18" y2="10"></line>
        <line x1="10" y1="14" x2="14" y2="14"></line>
      </svg>
    )
  },
  {
    id: 'business-software',
    name: 'Business Software',
    desc: 'CRM, ERP, POS, HRMS',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    desc: 'Doctors, Schools, Real Estate',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 'hosting-domain',
    name: 'Hosting & Domain',
    desc: 'Domain, Hosting, SSL, Email',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    )
  }
];

export default function Sidebar({ selectedCategory, onSelectCategory }) {
  return (
    <aside style={{ background: 'var(--bg-white)', borderRadius: '6px', border: '1px solid var(--border-color)', overflow: 'hidden', height: 'fit-content', boxShadow: 'var(--shadow-sm)' }}>
      {/* Title Bar - Solid Orange "ALL CATEGORIES" */}
      <div style={{ background: 'var(--primary)', color: 'white', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
          ALL CATEGORIES
        </span>
      </div>

      {/* Categories List */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(isActive ? null : cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 20px',
                textAlign: 'left',
                borderBottom: '1px solid var(--border-color-light)',
                background: isActive ? 'var(--primary-light)' : 'transparent',
                borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent'
              }}
              className="category-item"
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1 }}>
                <div style={{ color: 'var(--primary)', background: '#FAF9F6', width: '32px', height: '32px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {cat.icon}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: isActive ? 'var(--primary)' : 'var(--text-dark)', lineHeight: '1.2' }}>
                    {cat.name}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-light)', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {cat.desc}
                  </span>
                </div>
              </div>
              
              <div style={{ color: 'var(--text-light)', marginLeft: '8px', display: 'flex', alignItems: 'center', opacity: 0.6 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer link */}
      <button 
        onClick={() => onSelectCategory && onSelectCategory(null)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '14px 20px',
          width: '100%',
          fontSize: '0.75rem',
          fontWeight: '700',
          color: 'var(--primary)',
          justifyContent: 'center',
          background: 'rgba(255, 107, 0, 0.03)'
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        View All Categories
      </button>
    </aside>
  );
}
