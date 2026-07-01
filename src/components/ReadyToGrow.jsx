import React from 'react';

export default function ReadyToGrow({ onOpenQuote }) {
  return (
    <div style={{
      background: 'var(--bg-gradient-slate)',
      borderRadius: 'var(--radius-lg)',
      padding: '36px 48px',
      color: 'white',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      alignItems: 'center',
      gap: '32px',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid rgba(255,255,255,0.06)'
    }}>
      {/* Decorative background bubbles - refined */}
      <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '80px', height: '80px', background: 'rgba(255,255,255,0.02)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-40px', right: '40px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.02)', borderRadius: '50%' }}></div>

      <div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'white', marginBottom: '8px', letterSpacing: '-0.02em' }}>
          Ready to Grow Your Business?
        </h3>
        <p style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.6', marginBottom: '24px', maxWidth: '420px', fontWeight: '500', color: '#CBD5E1' }}>
          Tell us about your requirement and our expert team will contact you within 2 hours with a custom roadmap!
        </p>
        <button
          onClick={onOpenQuote}
          style={{
            background: 'var(--primary)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 'var(--radius-md)',
            fontWeight: '800',
            fontSize: '0.85rem',
            boxShadow: 'var(--shadow-sm)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
          className="hover-card"
        >
          Get a Free Quote →
        </button>
      </div>

      {/* 3D-styled SVG Rocket */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85, animation: 'float 3.5s ease-in-out infinite' }}>
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5h20s-1-2.25-2.5-3.5"></path>
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.2.2 2.4.6 3.5h18.8c.4-1.1.6-2.3.6-3.5 0-5.5-4.5-10-10-10z"></path>
          <circle cx="12" cy="9" r="2" fill="white"></circle>
          {/* Flame - brand orange */}
          <path d="M12 17c-1.5 2.5-1.5 5 0 5s1.5-2.5 0-5z" fill="var(--primary)" stroke="none"></path>
        </svg>
      </div>
    </div>
  );
}
