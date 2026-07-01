import React, { useState } from 'react';

export default function Header({ cartCount, wishlistCount, onCartOpen, onQuoteOpen, onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchValue);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchValue(val);
    if (onSearch) onSearch(val);
  };

  return (
    <header style={{ width: '100%', background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)', zIndex: 100 }}>
      {/* Top Utility Bar */}
      <div style={{ background: 'var(--primary)', color: 'white', padding: '6px 0', fontSize: '0.8rem', fontWeight: '500' }}>
        <div className="container-layout" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>⭐ India's Largest Digital Solutions Marketplace</div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#offers" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
              🔥 Offers
            </a>
            <a href="#help" style={{ color: 'white' }}>Help Center</a>
            <a href="#track" style={{ color: 'white' }}>Track Order</a>
            <a href="#partner" onClick={(e) => { e.preventDefault(); onQuoteOpen(); }} style={{ color: 'white', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px' }}>
              Become a Partner
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container-layout" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            <span style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block' }}></span>
            <span style={{ width: '16px', height: '16px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block', transform: 'translateY(-4px)' }}></span>
            <span style={{ width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block', transform: 'translateY(2px)' }}></span>
          </div>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.5px', textTransform: 'uppercase', color: 'var(--text-dark)', lineHeight: '1' }}>
              BUBBLES
            </h1>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--text-medium)', display: 'block', marginTop: '2px' }}>
              MEDIA
            </span>
          </div>
        </a>

        {/* All Categories Selector */}
        <button style={{
          background: 'var(--primary)',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '8px',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.9rem'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          All Categories
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} style={{ flex: 1, minWidth: '280px', display: 'flex', background: '#F3F4F6', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <input
            type="text"
            placeholder="Search for any service, solution or technology..."
            value={searchValue}
            onChange={handleSearchChange}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              padding: '12px 16px',
              fontSize: '0.9rem',
              outline: 'none',
              color: 'var(--text-dark)'
            }}
          />
          <button type="submit" style={{ background: 'var(--primary)', color: 'white', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>
        </form>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Call Us */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderRight: '1px solid var(--border-color)', paddingRight: '16px' }}>
            <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', display: 'block' }}>Call Us Now</span>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>+91 93815 66798</span>
            </div>
          </div>

          {/* Account */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: 'var(--text-medium)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', display: 'block' }}>My Account</span>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)', cursor: 'pointer' }} onClick={onQuoteOpen}>
                Sign In / Register
              </span>
            </div>
          </div>

          {/* Actions: Wishlist and Cart */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {/* Wishlist */}
            <button style={{ position: 'relative', color: 'var(--text-dark)', padding: '4px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlistCount}
                </span>
              )}
            </button>


          </div>
        </div>
      </div>
    </header>
  );
}
