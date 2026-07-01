import React, { useState } from 'react';
import Link from 'next/link';

export default function Header({ cartCount, wishlistCount, onCartOpen, onQuoteOpen, onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    } else {
      window.location.href = `/?search=${encodeURIComponent(searchValue)}`;
    }
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchValue(val);
    if (onSearch) onSearch(val);
  };

  return (
    <header style={{ width: '100%', background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)', zIndex: 100, position: 'sticky', top: 0 }}>
      {/* Top Utility Bar - Vibrant Orange */}
      <div style={{ background: 'var(--primary)', color: 'white', padding: '4px 0', fontSize: '0.72rem', fontWeight: '600' }}>
        <div className="container-layout" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>⭐</span> 
            <span>India's Largest Digital Solutions Marketplace</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/offers" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
              🎁 Offers
            </Link>
            <Link href="/help" style={{ color: 'white' }}>❓ Help Center</Link>
            <Link href="/track" style={{ color: 'white' }}>📋 Track Order</Link>
            <a href="#partner" onClick={(e) => { e.preventDefault(); onQuoteOpen(); }} style={{ color: 'white', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
              Become a Partner
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container-layout" style={{ padding: '8px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        
        {/* Logo - Bubbles Media matching original */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            <span style={{ width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block' }}></span>
            <span style={{ width: '13px', height: '13px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block', transform: 'translateY(-3px)' }}></span>
            <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block', transform: 'translateY(1px)' }}></span>
          </div>
          <div>
            <h1 style={{ fontSize: '1.3rem', fontWeight: '900', letterSpacing: '-0.5px', textTransform: 'uppercase', color: 'var(--primary)', lineHeight: '1' }}>
              BUBBLES
            </h1>
            <span style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '4.1px', textTransform: 'uppercase', color: 'var(--secondary)', display: 'block', marginTop: '1px' }}>
              MEDIA
            </span>
          </div>
        </a>

        {/* All Categories Dropdown - Vibrant Orange */}
        <button style={{
          background: 'var(--primary)',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '6px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.85rem'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          All Categories
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(90deg)' }}>
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>

        {/* Search Bar - White background, grey border, orange search button */}
        <form onSubmit={handleSearchSubmit} style={{ flex: 1, minWidth: '300px', display: 'flex', background: 'white', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <input
            type="text"
            placeholder="Search for any service, solution or technology..."
            value={searchValue}
            onChange={handleSearchChange}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              padding: '12px 18px',
              fontSize: '0.85rem',
              outline: 'none',
              color: 'var(--text-dark)'
            }}
          />
          <button type="submit" style={{ background: 'var(--primary)', color: 'white', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '700', fontSize: '0.85rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            Search
          </button>
        </form>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          {/* Call Us Now */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              📞
            </div>
            <div>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-light)', display: 'block' }}>Call Us Now</span>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--secondary)' }}>+91 93815 66798</span>
            </div>
          </div>

          {/* Account */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderLeft: '1px solid var(--border-color)', paddingLeft: '16px' }}>
            <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              👤
            </div>
            <div>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-light)', display: 'block' }}>My Account</span>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--secondary)', cursor: 'pointer' }} onClick={onQuoteOpen}>
                Sign In / Register
              </span>
            </div>
          </div>

          {/* Wishlist */}
          <button style={{ position: 'relative', color: 'var(--secondary)', padding: '4px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '0.6rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {wishlistCount}
            </span>
          </button>

          {/* Cart */}
          <button style={{ position: 'relative', color: 'var(--secondary)', padding: '4px' }} onClick={onCartOpen}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '0.6rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {cartCount}
            </span>
          </button>

        </div>
      </div>
    </header>
  );
}
