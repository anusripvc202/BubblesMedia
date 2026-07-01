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
      {/* Theme Selector Toggle */}
      <div style={{ position: 'absolute', top: '-44px', right: '0', display: 'flex', gap: '6px', background: '#E5E7EB', padding: '3px', borderRadius: '8px', zIndex: 10 }}>
        <button
          onClick={() => setTheme('orange')}
          style={{
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '700',
            background: theme === 'orange' ? 'var(--primary)' : 'transparent',
            color: theme === 'orange' ? 'white' : 'var(--text-medium)'
          }}
        >
          💥 Orange Theme (Image 1)
        </button>
        <button
          onClick={() => setTheme('cream')}
          style={{
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '700',
            background: theme === 'cream' ? 'var(--primary)' : 'transparent',
            color: theme === 'cream' ? 'white' : 'var(--text-medium)'
          }}
        >
          🎁 Cream Theme (Image 2)
        </button>
      </div>

      {/* Main Hero Card Container */}
      <div className={`hero-card ${theme === 'orange' ? 'hero-theme-orange' : 'hero-theme-cream'}`} style={{ transition: 'all 0.4s ease' }}>
        {/* Left Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 2 }}>
          {/* Main Headline */}
          {theme === 'orange' ? (
            <h1 style={{ fontSize: '2.6rem', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-1px' }}>
              One Platform.<br />All Digital Solutions.
            </h1>
          ) : (
            <h1 style={{ fontSize: '2.6rem', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-1px', color: '#111827' }}>
              ONE PLATFORM.<br />ALL YOUR <span style={{ color: 'var(--primary)' }}>DIGITAL NEEDS</span>.
            </h1>
          )}

          {/* Subtitle */}
          <p style={{ fontSize: '1rem', opacity: theme === 'orange' ? 0.95 : 0.8, fontWeight: '500', lineHeight: '1.5', maxWidth: '520px', color: theme === 'orange' ? 'white' : 'var(--text-medium)' }}>
            Websites, Apps, Marketing, Branding, AI & More – Everything You Need to Grow Your Business Online.
          </p>

          {/* Core Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            background: theme === 'orange' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 107, 0, 0.05)',
            border: theme === 'orange' ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid rgba(255, 107, 0, 0.15)',
            padding: '12px 16px',
            borderRadius: '12px',
            backdropFilter: 'blur(4px)',
            maxWidth: '560px'
          }}>
            {[
              { num: '5000+', label: 'Happy Clients' },
              { num: '15000+', label: 'Projects Delivered' },
              { num: '50+', label: 'Expert Team' },
              { num: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: '900', color: theme === 'orange' ? 'white' : 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                  {stat.num}
                </span>
                <span style={{ display: 'block', fontSize: '0.65rem', opacity: 0.9, fontWeight: '600', color: theme === 'orange' ? 'white' : 'var(--text-medium)', textTransform: 'uppercase', marginTop: '2px' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Inner Search Box */}
          <form onSubmit={handleSearchSubmit} style={{
            display: 'flex',
            background: 'var(--bg-white)',
            borderRadius: '8px',
            padding: '4px',
            boxShadow: 'var(--shadow-md)',
            maxWidth: '560px',
            border: theme === 'cream' ? '1px solid var(--border-color)' : 'none'
          }}>
            <span style={{ paddingLeft: '14px', display: 'flex', alignItems: 'center', color: 'var(--text-light)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                padding: '12px 14px',
                fontSize: '0.9rem',
                outline: 'none',
                color: 'var(--text-dark)'
              }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '8px 24px', borderRadius: '6px' }}>
              {theme === 'orange' ? 'Search' : 'Find Solutions'}
            </button>
          </form>

          {/* Popular searches tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: theme === 'orange' ? 'white' : 'var(--text-medium)' }}>
              Popular Searches:
            </span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handlePopularSearch(tag)}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: theme === 'orange' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 107, 0, 0.08)',
                  color: theme === 'orange' ? 'white' : 'var(--primary)',
                  border: theme === 'orange' ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 107, 0, 0.15)'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right Graphic Mockup Column */}
        <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          
          {/* CSS Devices Layout */}
          <div style={{ position: 'relative', width: '280px', height: '180px', zIndex: 2 }}>
            {/* Laptop CSS Mockup */}
            <div style={{
              width: '260px',
              height: '150px',
              background: '#000',
              border: '8px solid #374151',
              borderRadius: '12px 12px 0 0',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              overflow: 'hidden'
            }}>
              {/* Laptop Screen Content */}
              <div style={{ width: '100%', height: '100%', background: theme === 'orange' ? '#FFF5EC' : '#FFF', padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E5E7EB', paddingBottom: '3px' }}>
                  <div style={{ fontSize: '0.45rem', fontWeight: '800', color: 'var(--primary)' }}>BUBBLES MEDIA</div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3px' }}>
                  <div style={{ width: '80%', height: '4px', background: '#E5E7EB', borderRadius: '2px' }}></div>
                  <div style={{ width: '60%', height: '4px', background: '#E5E7EB', borderRadius: '2px' }}></div>
                  <div style={{ width: '40%', height: '6px', background: 'var(--primary)', borderRadius: '2px', marginTop: '3px' }}></div>
                </div>
              </div>
            </div>
            {/* Laptop Base */}
            <div style={{
              width: '300px',
              height: '8px',
              background: '#9CA3AF',
              borderRadius: '0 0 12px 12px',
              position: 'absolute',
              bottom: '22px',
              left: '-20px',
              boxShadow: '0 5px 10px rgba(0,0,0,0.15)'
            }}></div>
            <div style={{
              width: '60px',
              height: '4px',
              background: '#4B5563',
              borderRadius: '0 0 4px 4px',
              position: 'absolute',
              bottom: '18px',
              left: '100px'
            }}></div>

            {/* Mobile CSS Mockup */}
            <div style={{
              width: '64px',
              height: '120px',
              background: '#000',
              border: '3px solid #111827',
              borderRadius: '10px',
              position: 'absolute',
              bottom: '15px',
              right: '-15px',
              zIndex: 3,
              boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
              overflow: 'hidden'
            }}>
              {/* Mobile Screen Content */}
              <div style={{ width: '100%', height: '100%', background: 'var(--primary)', padding: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white' }}>
                <div style={{ width: '8px', height: '2px', background: '#FFF', borderRadius: '1px', alignSelf: 'center', marginBottom: '2px' }}></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.4rem', fontWeight: '800' }}>B</div>
                  <div style={{ width: '80%', height: '3px', background: 'rgba(255,255,255,0.5)', borderRadius: '1px' }}></div>
                  <div style={{ width: '60%', height: '3px', background: 'rgba(255,255,255,0.5)', borderRadius: '1px' }}></div>
                </div>
                <div style={{ height: '8px', background: 'white', borderRadius: '2px' }}></div>
              </div>
            </div>
          </div>

          {/* Theme Special Decor (e.g. Gift boxes in Cream theme, promo circle in Orange theme) */}
          {theme === 'orange' ? (
            <div
              onClick={onExploreOffers}
              style={{
                position: 'absolute',
                top: '15px',
                right: '-15px',
                width: '120px',
                height: '120px',
                background: 'white',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid var(--primary-light)',
                zIndex: 4,
                cursor: 'pointer',
                animation: 'float 4s ease-in-out infinite'
              }}
            >
              <span style={{ fontSize: '0.55rem', fontWeight: '800', color: 'var(--text-light)', textTransform: 'uppercase', tracking: '1px' }}>Limited Time</span>
              <span style={{ fontSize: '0.9rem', fontWeight: '900', color: 'var(--primary)', textTransform: 'uppercase', lineHeight: '1' }}>Mega Offers</span>
              <span style={{ fontSize: '0.65rem', fontWeight: '800', background: 'var(--primary)', color: 'white', padding: '2px 6px', borderRadius: '4px', marginTop: '4px' }}>Up to 50% Off</span>
            </div>
          ) : (
            <>
              {/* Gift 1 */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '-15px',
                width: '45px',
                height: '45px',
                background: '#EF4444',
                borderRadius: '6px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ position: 'absolute', width: '6px', height: '45px', background: '#FBBF24' }}></div>
                <div style={{ position: 'absolute', width: '45px', height: '6px', background: '#FBBF24' }}></div>
                <div style={{ width: '12px', height: '8px', background: '#FBBF24', borderRadius: '50%', transform: 'translateY(-20px)' }}></div>
              </div>
              {/* Gift 2 */}
              <div style={{
                position: 'absolute',
                bottom: '40px',
                right: '-45px',
                width: '50px',
                height: '50px',
                background: '#FBBF24',
                borderRadius: '6px',
                boxShadow: 'var(--shadow-md)',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ position: 'absolute', width: '8px', height: '50px', background: '#EF4444' }}></div>
                <div style={{ position: 'absolute', width: '50px', height: '8px', background: '#EF4444' }}></div>
                <div style={{ width: '14px', height: '8px', background: '#EF4444', borderRadius: '50%', transform: 'translateY(-22px)' }}></div>
              </div>
              {/* Floating Mega Offer badge (cream theme style) */}
              <div
                onClick={onExploreOffers}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '-15px',
                  width: '125px',
                  background: 'white',
                  borderRadius: '12px',
                  padding: '12px',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-color)',
                  zIndex: 4,
                  cursor: 'pointer',
                  textAlign: 'center',
                  animation: 'float 4.5s ease-in-out infinite'
                }}
              >
                <span style={{ fontSize: '0.55rem', fontWeight: '800', color: 'var(--text-light)', textTransform: 'uppercase', display: 'block' }}>LIMITED TIME</span>
                <span style={{ fontSize: '1rem', fontWeight: '900', color: '#111827', display: 'block', margin: '2px 0' }}>MEGA OFFERS</span>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>UP TO 50% OFF</span>
                <button style={{ background: 'var(--primary)', color: 'white', fontSize: '0.65rem', fontWeight: '700', padding: '4px 10px', borderRadius: '6px', border: 'none', width: '100%' }}>
                  Explore Offers →
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
