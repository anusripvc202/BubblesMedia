import React from 'react';

const reasons = [
  'One Stop Solution for All Digital Needs',
  'Affordable Pricing for Every Business Scale',
  'Expert Team with Proven Global Experience',
  '100% Genuine & Result Driven Campaigns'
];

export default function WhyChooseUs() {
  return (
    <div style={{
      background: 'var(--bg-white)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '18px', color: 'var(--secondary)', letterSpacing: '-0.01em' }}>
          Why Choose Bubbles Media?
        </h3>
        
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {reasons.map((reason, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '600' }}>
              <span style={{
                background: '#ECFDF5',
                color: '#047857',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              {reason}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
        {/* Minimalist SVG Gold Trophy Cup */}
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85, animation: 'float 4s ease-in-out infinite' }}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
          <path d="M12 2a7 7 0 0 0-7 7c0 3.18 2.1 5.86 5 6.71V2h2Z"></path>
        </svg>
      </div>
    </div>
  );
}
