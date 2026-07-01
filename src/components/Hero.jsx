import React, { useState } from 'react';

export default function Hero({ onSearch, onExploreOffers }) {
  const [theme, setTheme] = useState('orange'); // 'orange' or 'cream'
  const [inputVal, setInputVal] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(inputVal);
  };

  const handlePopularSearch = (tag) => {
    setInputVal(tag);
    if (onSearch) onSearch(tag);
  };

  const popularTags = ['Website', 'SEO', 'Mobile App', 'WhatsApp API', 'Logo Design', 'GMB'];

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '24px' }}>
      {/* Theme Selector Toggle - Refined SaaS Style */}
      <div style={{ position: 'absolute', top: '-44px', right: '0', display: 'flex', gap: '4px', background: '#F1F5F9', padding: '3px', borderRadius: '6px', border: '1px solid var(--border-color)', zIndex: 10 }}>
        <button
          onClick={() => setTheme('orange')}
          style={{
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: '700',
            background: theme === 'orange' ? 'var(--secondary)' : 'transparent',
            color: theme === 'orange' ? 'white' : 'var(--text-medium)'
          }}
        >
          ⚡ Premium Slate (Image 1 Refined)
        </button>
        <button
          onClick={() => setTheme('cream')}
          style={{
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: '700',
            background: theme === 'cream' ? 'var(--secondary)' : 'transparent',
            color: theme === 'cream' ? 'white' : 'var(--text-medium)'
          }}
        >
          🎁 Soft Cream (Image 2 Refined)
        </button>
      </div>

      {/* Main Hero Card Container */}
      <div className={`hero-card ${theme === 'orange' ? 'hero-theme-orange' : 'hero-theme-cream'}`} style={{
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: theme === 'orange' ? 'var(--bg-gradient-slate)' : 'var(--bg-gradient-cream)',
        color: theme === 'orange' ? 'white' : 'var(--text-dark)',
        border: '1px solid var(--border-color)'
      }}>
        {/* Decorative Grid Overlay for Slate Theme */}
        {theme === 'orange' && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            opacity: 0.05,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            pointerEvents: 'none'
          }}></div>
        )}

        {/* Left Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 2 }}>
          {/* Main Headline */}
          {theme === 'orange' ? (
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: '1.1', color: 'white' }}>
              One Platform.<br />All Digital <span style={{ color: 'var(--primary)' }}>Solutions</span>.
            </h1>
          ) : (
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: '1.1', color: 'var(--text-dark)' }}>
              ONE PLATFORM.<br />ALL YOUR <span style={{ color: 'var(--primary)' }}>DIGITAL NEEDS</span>.
            </h1>
          )}

          {/* Subtitle */}
          <p style={{ fontSize: '0.95rem', opacity: 0.9, fontWeight: '500', lineHeight: '1.6', maxWidth: '480px', color: theme === 'orange' ? '#CBD5E1' : 'var(--text-medium)' }}>
            Websites, Apps, Marketing, Branding, AI & More – Everything You Need to Grow Your Business Online.
          </p>

          {/* Core Stats Row - Ultra Modern */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
            background: theme === 'orange' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.02)',
            border: theme === 'orange' ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(15, 23, 42, 0.06)',
            padding: '12px 14px',
            borderRadius: '8px',
            maxWidth: '500px'
          }}>
            {[
              { num: '5000+', label: 'Clients' },
              { num: '15000+', label: 'Delivered' },
              { num: '50+', label: 'Experts' },
              { num: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: '800', color: theme === 'orange' ? 'white' : 'var(--secondary)', fontFamily: 'var(--font-display)' }}>
                  {stat.num}
                </span>
                <span style={{ display: 'block', fontSize: '0.6rem', opacity: 0.8, fontWeight: '700', color: theme === 'orange' ? '#94A3B8' : 'var(--text-light)', textTransform: 'uppercase', marginTop: '2px', letterSpacing: '0.5px' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Inner Search Box */}
          <form onSubmit={handleSearchSubmit} style={{
            display: 'flex',
            background: 'var(--bg-white)',
            borderRadius: '6px',
            padding: '3px',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '500px',
            border: '1px solid var(--border-color)'
          }}>
            <span style={{ paddingLeft: '12px', display: 'flex', alignItems: 'center', color: 'var(--text-light)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder={theme === 'orange' ? "What do you need today?" : "What do you want to build or grow today?"}
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
            <button type="submit" className="btn-primary" style={{ padding: '8px 18px', borderRadius: '4px', background: 'var(--secondary)' }}>
              {theme === 'orange' ? 'Search' : 'Find Solutions'}
            </button>
          </form>

          {/* Popular searches tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: '700', color: theme === 'orange' ? '#94A3B8' : 'var(--text-medium)' }}>
              Popular:
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
                  background: theme === 'orange' ? 'rgba(255, 255, 255, 0.06)' : '#FFF',
                  color: theme === 'orange' ? '#F1F5F9' : 'var(--secondary)',
                  border: theme === 'orange' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid var(--border-color)',
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
                {/* Dynamic Island detail */}
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

          {/* Floating Mega Offer Badge */}
          <div
            onClick={onExploreOffers}
            style={{
              position: 'absolute',
              top: '10px',
              right: '-10px',
              width: '110px',
              background: 'white',
              borderRadius: '12px',
              padding: '12px 10px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-color)',
              zIndex: 4,
              cursor: 'pointer',
              textAlign: 'center',
              animation: 'float 4s ease-in-out infinite'
            }}
          >
            <span style={{ fontSize: '0.55rem', fontWeight: '800', color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>Limited Offer</span>
            <span style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', margin: '2px 0' }}>MEGA OFFERS</span>
            <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--primary)', display: 'block', marginBottom: '6px' }}>UP TO 50% OFF</span>
            <button style={{ background: 'var(--primary)', color: 'white', fontSize: '0.6rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', border: 'none', width: '100%' }}>
              Explore →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
