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
    <div style={{ position: 'relative', width: '100%', marginBottom: '24px' }}>
      
      {/* Main Hero Card Container - Solid Orange Theme exactly as Image 1 */}
      <div className="hero-card" style={{
        background: 'linear-gradient(135deg, #FF7E21 0%, #FF5100 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-md)',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 2 }}>
          
          {/* Main Headline */}
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', lineHeight: '1.1', color: 'white' }}>
            One Platform.<br />All Digital Solutions.
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: '0.9rem', opacity: 0.95, fontWeight: '500', lineHeight: '1.5', maxWidth: '460px', color: 'white' }}>
            Websites, Apps, Marketing, Branding, AI & More – Everything You Need to Grow Your Business Online.
          </p>

          {/* Stats Row inside Hero - Translucent White Box */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '12px 14px',
            borderRadius: '8px',
            maxWidth: '480px'
          }}>
            {[
              { num: '5000+', label: 'Happy Clients' },
              { num: '15000+', label: 'Projects Delivered' },
              { num: '50+', label: 'Expert Team' },
              { num: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '1.05rem', fontWeight: '900', color: 'white', fontFamily: 'var(--font-display)' }}>
                  {stat.num}
                </span>
                <span style={{ display: 'block', fontSize: '0.55rem', opacity: 0.9, fontWeight: '700', color: 'white', textTransform: 'uppercase', marginTop: '2px' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Inner Search Box */}
          <form onSubmit={handleSearchSubmit} style={{
            display: 'flex',
            background: 'white',
            borderRadius: '6px',
            padding: '3px',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '480px'
          }}>
            <span style={{ paddingLeft: '12px', display: 'flex', alignItems: 'center', color: 'var(--text-light)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                padding: '10px 12px',
                fontSize: '0.85rem',
                outline: 'none',
                color: 'var(--text-dark)'
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '8px 18px', borderRadius: '4px', background: 'var(--primary)', fontWeight: '700' }}>
              Search
            </button>
          </form>

          {/* Popular searches tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'white', opacity: 0.95 }}>
              Popular Searches:
            </span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handlePopularSearch(tag)}
                style={{
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  padding: '3px 8px',
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

        {/* Right Graphic Mockup Column */}
        <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '280px' }}>
          
          {/* CSS Devices Layout */}
          <div style={{ position: 'relative', width: '260px', height: '170px', zIndex: 2 }}>
            {/* MacBook Pro CSS Mockup */}
            <div style={{
              width: '240px',
              height: '140px',
              background: '#0F172A',
              border: '6px solid #1E293B',
              borderRadius: '8px 8px 0 0',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              overflow: 'hidden'
            }}>
              {/* Laptop Screen Content */}
              <div style={{ width: '100%', height: '100%', background: '#F8FAFC', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '3px' }}>
                  <div style={{ fontSize: '0.4rem', fontWeight: '800', color: 'var(--primary)' }}>BUBBLES MEDIA</div>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--secondary)' }}></div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3px' }}>
                  <div style={{ width: '80%', height: '3px', background: '#E2E8F0', borderRadius: '1.5px' }}></div>
                  <div style={{ width: '60%', height: '3px', background: '#E2E8F0', borderRadius: '1.5px' }}></div>
                  <div style={{ width: '35%', height: '5px', background: 'var(--primary)', borderRadius: '1.5px', marginTop: '2px' }}></div>
                </div>
              </div>
            </div>
            {/* Laptop Base */}
            <div style={{
              width: '280px',
              height: '6px',
              background: '#94A3B8',
              borderRadius: '0 0 8px 8px',
              position: 'absolute',
              bottom: '24px',
              left: '-20px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}></div>

            {/* iPhone CSS Mockup */}
            <div style={{
              width: '60px',
              height: '110px',
              background: '#0F172A',
              border: '2.5px solid #1E293B',
              borderRadius: '8px',
              position: 'absolute',
              bottom: '20px',
              right: '-10px',
              zIndex: 3,
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              overflow: 'hidden'
            }}>
              {/* Screen Content */}
              <div style={{ width: '100%', height: '100%', background: 'var(--primary)', padding: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white' }}>
                <div style={{ width: '18px', height: '3px', background: '#000', borderRadius: '1.5px', alignSelf: 'center', marginBottom: '2px' }}></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.35rem', fontWeight: '800' }}>B</div>
                  <div style={{ width: '70%', height: '2px', background: 'rgba(255,255,255,0.4)', borderRadius: '1px' }}></div>
                  <div style={{ width: '50%', height: '2px', background: 'rgba(255,255,255,0.4)', borderRadius: '1px' }}></div>
                </div>
                <div style={{ height: '6px', background: 'white', borderRadius: '1px' }}></div>
              </div>
            </div>
          </div>

          {/* Floating Mega Offer Circle Badge exactly as Image 1 */}
          <div
            onClick={onExploreOffers}
            style={{
              position: 'absolute',
              top: '10px',
              right: '-10px',
              width: '115px',
              height: '115px',
              background: 'white',
              borderRadius: '50%',
              padding: '14px 10px',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 4,
              cursor: 'pointer',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2px',
              animation: 'float 4s ease-in-out infinite'
            }}
          >
            <span style={{ fontSize: '0.55rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Limited Time</span>
            <span style={{ fontSize: '1.05rem', fontWeight: '900', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: '1.0' }}>MEGA</span>
            <span style={{ fontSize: '1.05rem', fontWeight: '900', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: '1.0' }}>OFFERS</span>
            <span style={{ fontSize: '0.6rem', fontWeight: '800', color: 'var(--secondary)', textTransform: 'uppercase', marginTop: '2px' }}>Up to 50% Off</span>
            
            {/* Black button inside circle */}
            <button style={{ background: '#0F172A', color: 'white', fontSize: '0.55rem', fontWeight: '800', padding: '3px 8px', borderRadius: '4px', border: 'none', marginTop: '4px', width: '90%' }}>
              EXPLORE OFFERS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
