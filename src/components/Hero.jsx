import React, { useState } from 'react';

export default function Hero({ onSearch, onExploreOffers }) {
  const [inputVal, setInputVal] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(inputVal);
  };

  const handlePopularSearch = (tag) => {
    setInputVal(tag);
    if (onSearch) onSearch(tag);
  };

  const popularTags = ['Website', 'SEO', 'Mobile App', 'WhatsApp API', 'Logo Design'];

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '16px' }}>
      {/* Main Hero Card Container - Vibrant Orange Theme matching Image 1 exactly */}
      <div className="hero-card" style={{
        background: 'linear-gradient(135deg, #FF7E21 0%, #FF5100 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-sm)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background grid pattern */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.08,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none'
        }}></div>

        {/* Left Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 2 }}>
          
          {/* Main Headline */}
          <h1 style={{ fontSize: '2.1rem', fontWeight: '900', lineHeight: '1.1', color: 'white', margin: 0 }}>
            One Platform.<br />All Digital Solutions.
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: '0.8rem', opacity: 0.95, fontWeight: '500', lineHeight: '1.3', maxWidth: '390px', color: 'white', margin: 0 }}>
            Websites, Apps, Marketing, Branding, AI & More – Everything You Need to Grow Your Business Online.
          </p>

          {/* Stats Row inside Hero - Translucent White Box with Icons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.96)',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            maxWidth: '450px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            {[
              {
                num: '5000+',
                label: 'Happy Clients',
                icon: (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )
              },
              {
                num: '15000+',
                label: 'Projects Delivered',
                icon: (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                )
              },
              {
                num: '50+',
                label: 'Expert Team',
                icon: (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                num: '24/7',
                label: 'Support',
                icon: (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                )
              }
            ].map((stat, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '5px',
                borderRight: idx < 3 ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
                paddingRight: idx < 3 ? '5px' : '0'
              }}>
                <div style={{
                  background: 'rgba(255, 90, 0, 0.1)',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {stat.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', overflow: 'hidden' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--text-dark)', lineHeight: 1.1, fontFamily: 'var(--font-display)' }}>
                    {stat.num}
                  </span>
                  <span style={{ fontSize: '0.45rem', opacity: 0.8, fontWeight: '700', color: 'var(--text-medium)', textTransform: 'capitalize', marginTop: '1px', lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Inner Search Box */}
          <form onSubmit={handleSearchSubmit} style={{
            display: 'flex',
            background: 'white',
            borderRadius: '6px',
            padding: '2px',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '450px',
            width: '100%'
          }}>
            <span style={{ paddingLeft: '10px', display: 'flex', alignItems: 'center', color: 'var(--text-light)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="What do you need today?"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                padding: '6px 8px',
                fontSize: '0.8rem',
                outline: 'none',
                color: 'var(--text-dark)'
              }}
            />
            <button type="submit" className="btn-primary" style={{
              padding: '6px 14px',
              borderRadius: '4px',
              background: 'var(--primary)',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              border: 'none',
              cursor: 'pointer'
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              Search
            </button>
          </form>

          {/* Popular searches tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'white', opacity: 0.95 }}>
              Popular Searches:
            </span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handlePopularSearch(tag)}
                style={{
                  fontSize: '0.6rem',
                  fontWeight: '700',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'transparent',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  cursor: 'pointer'
                }}
                className="hover-card"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Column 2 (Right): Mockup Devices */}
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <img 
            src="/hero-devices.png?v=3" 
            alt="Hero Mockups" 
            style={{
              maxHeight: '215px',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          />
        </div>

      </div>
    </div>
  );
}
