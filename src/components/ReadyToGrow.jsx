import React from 'react';

export default function ReadyToGrow({ onOpenQuote }) {
  return (
    <div style={{
      background: 'var(--bg-gradient-orange)',
      borderRadius: '16px',
      padding: '32px',
      color: 'white',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      alignItems: 'center',
      gap: '24px',
      boxShadow: 'var(--shadow-orange)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Decorative background bubbles */}
      <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '80px', height: '80px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-40px', right: '40px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }}></div>

      <div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', marginBottom: '8px' }}>
          Ready to Grow Your Business?
        </h3>
        <p style={{ fontSize: '0.85rem', opacity: 0.95, lineHeight: '1.5', marginBottom: '20px', maxWidth: '420px', fontWeight: '500' }}>
          Tell us about your requirement and our expert team will contact you within 2 hours with a custom roadmap!
        </p>
        <button
          onClick={onOpenQuote}
          style={{
            background: 'white',
            color: 'var(--primary)',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '800',
            fontSize: '0.85rem',
            boxShadow: 'var(--shadow-sm)',
            textTransform: 'uppercase'
          }}
          className="hover-card"
        >
          Get a Free Quote →
        </button>
      </div>

      {/* 3D-styled SVG Rocket */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'float 3.5s ease-in-out infinite' }}>
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5h20s-1-2.25-2.5-3.5"></path>
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.2.2 2.4.6 3.5h18.8c.4-1.1.6-2.3.6-3.5 0-5.5-4.5-10-10-10z"></path>
          <circle cx="12" cy="9" r="2" fill="white"></circle>
          {/* Flame */}
          <path d="M12 17c-1.5 2.5-1.5 5 0 5s1.5-2.5 0-5z" fill="#FBBF24" stroke="none"></path>
        </svg>
      </div>
    </div>
  );
}
