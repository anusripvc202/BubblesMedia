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
        overflow: 'hidden',
        padding: '16px 24px',
        alignItems: 'center',
        minHeight: '235px',
        display: 'grid'
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

        {/* Column 1 (Left): Info Content */}
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
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '6px',
            padding: '8px 12px',
            gap: '8px',
            maxWidth: '430px'
          }}>
            {[
              { num: '5000+', label: 'HAPPY CLIENTS', icon: '👥' },
              { num: '15000+', label: 'PROJECTS DELIVERED', icon: '💼' },
              { num: '50+', label: 'EXPERT TEAM', icon: '🧑‍💻' },
              { num: '24/7', label: 'SUPPORT', icon: '📞' }
            ].map((s, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                borderRight: idx < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                paddingRight: idx < 3 ? '4px' : '0'
              }}>
                <span style={{ fontSize: '0.9rem', flexShrink: 0 }}>{s.icon}</span>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: '900', color: 'white', letterSpacing: '-0.2px', whiteSpace: 'nowrap' }}>
                    {s.num}
                  </span>
                  <span style={{ fontSize: '0.45rem', fontWeight: '800', color: 'white', opacity: 0.95, whiteSpace: 'nowrap', textTransform: 'uppercase', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Inline Search Bar inside Hero Card */}
          <form onSubmit={handleSearchSubmit} style={{
            display: 'flex',
            background: 'white',
            borderRadius: '6px',
            padding: '4px',
            alignItems: 'center',
            maxWidth: '430px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{ color: 'var(--text-light)', marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
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
                  fontSize: '0.65rem',
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

        {/* Column 2 (Center): Centered Mockup Devices */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', zIndex: 2 }}>
          <img 
            src="/hero-devices.png?v=3" 
            alt="Hero Mockups" 
            style={{
              maxHeight: '215px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Column 2 (Right): Centered Mockup Devices */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', zIndex: 2 }}>
          <img 
            src="/hero-devices.png?v=3" 
            alt="Hero Mockups" 
            style={{
              maxHeight: '215px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              pointerEvents: 'none'
            }}
          />
        </div>

      </div>
    </div>
  );
}
