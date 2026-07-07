'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '../data/servicesData';
import SignInModal from './SignInModal';
import { useCart } from '../context/CartContext';

export default function Header({ wishlistCount = 0, onCartOpen, onQuoteOpen, onSearch }) {
  const { cartCount, setIsCartOpen } = useCart();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [desktopCatOpen, setDesktopCatOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const desktopCatRef = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchValue);
    else router.push(`/?search=${encodeURIComponent(searchValue)}`);
    setMenuOpen(false);
    setIsMobileSearchOpen(false);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchValue(val);
    if (onSearch) onSearch(val);
  };

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (desktopCatRef.current && !desktopCatRef.current.contains(event.target)) {
        setDesktopCatOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1023) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const selectCategoryOnDesktop = (catId) => {
    setDesktopCatOpen(false);
    router.push(`/category/${catId}`);
  };

  return (
    <>
      <header className="header-root" style={{
        width: '100%', background: '#fff',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        position: 'sticky', top: 0, zIndex: 500,
      }}>

        {/* ─── Top utility bar (desktop only) ─── */}
        <div className="header-top-bar hide-on-tablet" style={{
          background: 'var(--primary)', color: 'white',
          fontSize: '0.72rem', fontWeight: '600', padding: '6px 0',
        }}>
          <div className="container-layout" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>⭐ India's Largest Digital Solutions Marketplace</span>
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
              <a href="/offers" style={{ color: 'white' }}>🎁 Offers & Coupons</a>
              <a href="/help"   style={{ color: 'white' }}>❓ Help Center</a>
              <a href="/track"  style={{ color: 'white' }}>📋 Track Order</a>
              <a href="#partner"
                onClick={(e) => { e.preventDefault(); onQuoteOpen?.(); }}
                style={{ color: 'white', background: 'rgba(255,255,255,0.22)', padding: '2px 10px', borderRadius: '20px', fontWeight: '700' }}>
                Become a Partner
              </a>
            </div>
          </div>
        </div>

        {/* ─── Main Navbar Bar ─── */}
        <div className="container-layout header-main-nav-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          gap: '20px',
        }}>

          {/* Logo — diagonal tilt */}
          <a href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10 }}>
            <img
              src="/techmart24-logo.png"
              alt="Tech Mart 24"
              className="header-logo-img"
              style={{
                height: '68px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                transform: 'rotate(-10deg)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-10deg)'}
            />
          </a>

          {/* Global Header Bubbles (floats up across the entire navbar background) */}
          <div className="navbar-bubble-layer">
            <span className="nav-bubble nb1" />
            <span className="nav-bubble nb2" />
            <span className="nav-bubble nb3" />
            <span className="nav-bubble nb4" />
            <span className="nav-bubble nb5" />
            <span className="nav-bubble nb6" />
            <span className="nav-bubble nb7" />
            <span className="nav-bubble nb8" />
            <span className="nav-bubble nb9" />
            <span className="nav-bubble nb10" />
            <span className="nav-bubble nb11" />
            <span className="nav-bubble nb12" />
          </div>

          <style>{`
            .navbar-bubble-layer {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
              pointer-events: none;
              z-index: 1;
            }
            .nav-bubble {
              position: absolute;
              border-radius: 50%;
              bottom: -20px;
              animation: navBubbleRise 4s ease-in infinite;
              border: 1.5px solid rgba(15, 30, 60, 0.2);
              box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.05);
            }
            /* Colors & positioning distribution across full navbar */
            .nb1  { width: 14px; height: 14px; left: 5%;   background: rgba(170,223,0,0.5);  animation-delay: 0s;   animation-duration: 3.2s; }
            .nb2  { width: 11px; height: 11px; left: 14%;  background: rgba(15,30,60,0.25);  animation-delay: 0.8s; animation-duration: 4.1s; }
            .nb3  { width: 18px; height: 18px; left: 23%;  background: rgba(170,223,0,0.4);  animation-delay: 1.5s; animation-duration: 3.5s; }
            .nb4  { width: 10px; height: 10px; left: 32%;  background: rgba(15,30,60,0.2);   animation-delay: 2.2s; animation-duration: 4.5s; }
            .nb5  { width: 15px; height: 15px; left: 41%;  background: rgba(170,223,0,0.45); animation-delay: 0.3s; animation-duration: 3.0s; }
            .nb6  { width: 12px; height: 12px; left: 50%;  background: rgba(15,30,60,0.15);  animation-delay: 1.1s; animation-duration: 3.8s; }
            .nb7  { width: 16px; height: 16px; left: 59%;  background: rgba(170,223,0,0.5);  animation-delay: 2.6s; animation-duration: 3.4s; }
            .nb8  { width: 9px;  height: 9px;  left: 68%;  background: rgba(15,30,60,0.25);  animation-delay: 0.5s; animation-duration: 4.2s; }
            .nb9  { width: 20px; height: 20px; left: 77%;  background: rgba(170,223,0,0.35); animation-delay: 1.8s; animation-duration: 3.1s; }
            .nb10 { width: 13px; height: 13px; left: 85%;  background: rgba(15,30,60,0.2);   animation-delay: 2.9s; animation-duration: 3.9s; }
            .nb11 { width: 15px; height: 15px; left: 92%;  background: rgba(170,223,0,0.4);  animation-delay: 1.0s; animation-duration: 3.6s; }
            .nb12 { width: 11px; height: 11px; left: 97%;  background: rgba(15,30,60,0.15);  animation-delay: 2.1s; animation-duration: 4.3s; }

            @keyframes navBubbleRise {
              0%   { transform: translateY(0) scale(0.4); opacity: 0; }
              15%  { opacity: 0.9; }
              85%  { opacity: 0.7; }
              100% { transform: translateY(-110px) scale(1.3); opacity: 0; }
            }
          `}</style>




          {/* Categories dropdown (Desktop only) */}
          <div className="hide-on-tablet" ref={desktopCatRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setDesktopCatOpen(!desktopCatOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              Categories
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: desktopCatOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {desktopCatOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                width: '260px',
                background: '#fff',
                borderRadius: '10px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
                padding: '8px',
                zIndex: 999,
              }}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => selectCategoryOnDesktop(cat.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      background: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--primary-light)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{cat.icon}</span>
                    <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-dark)' }}>{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search — desktop */}
          <form onSubmit={handleSearchSubmit}
            className="hide-on-tablet"
            style={{ flex: 1, display: 'flex', border: '1.5px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', background: '#fff', maxWidth: '420px' }}>
            <input
              type="text"
              placeholder="Search for any service, solution or technology..."
              value={searchValue}
              onChange={handleSearchChange}
              style={{ flex: 1, border: 'none', outline: 'none', padding: '8px 12px', fontSize: '0.8rem', color: 'var(--text-dark)', background: 'transparent', minWidth: 0 }}
            />
            <button type="submit" style={{
              background: 'var(--primary)', color: 'white',
              padding: '0 14px', display: 'flex', alignItems: 'center', border: 'none', cursor: 'pointer',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
          </form>

          {/* Right controls — desktop */}
          <div className="hide-on-tablet" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            {/* Call */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ background: 'rgba(170, 223, 0, 0.12)', color: 'var(--primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-light)', fontWeight: '600', lineHeight: 1 }}>Call Us Now</div>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--secondary)', marginTop: '2px' }}>+91 93815 66798</div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.08)' }} />

            {/* Account */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setSignInOpen(true)}>
              <div style={{ background: 'rgba(170, 223, 0, 0.12)', color: 'var(--primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-light)', fontWeight: '600', lineHeight: 1 }}>My Account</div>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--secondary)', marginTop: '2px' }}>Sign In</div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.08)' }} />

            {/* Cart */}
            <button onClick={() => setIsCartOpen(true)} style={{ position: 'relative', color: 'var(--secondary)', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && (
                <span style={{ position: 'absolute', top: '-3px', right: '-3px', background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '15px', height: '15px', fontSize: '0.55rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* ─── Mobile right action items (wishlist, cart, burger) ─── */}
          <div className="show-on-tablet-flex" style={{ marginLeft: 'auto', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {/* Search Toggle Icon */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              style={{ padding: '4px', background: 'none', border: 'none', cursor: 'pointer', color: isMobileSearchOpen ? 'var(--primary)' : 'var(--secondary)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Cart */}
            <button onClick={() => setIsCartOpen(true)} style={{ position: 'relative', padding: '4px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && (
                <span style={{ position: 'absolute', top: '-3px', right: '-3px', background: 'var(--primary)', color: 'white', borderRadius: '50%', width: '15px', height: '15px', fontSize: '0.55rem', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
              style={{ padding: '6px', background: menuOpen ? 'var(--primary-light)' : 'transparent', borderRadius: '6px', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? 'var(--primary)' : 'var(--secondary)', borderRadius: '2px', transition: 'transform 0.25s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? 'var(--primary)' : 'var(--secondary)', borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span style={{ display: 'block', width: '20px', height: '2px', background: menuOpen ? 'var(--primary)' : 'var(--secondary)', borderRadius: '2px', transition: 'transform 0.25s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* ─── Mobile search bar toggle entry (Tablet & Mobile only) ─── */}
        {isMobileSearchOpen && (
          <div className="show-on-tablet-flex" style={{
            padding: '4px 24px 12px',
            background: '#fff',
            animation: 'fadeInUp 0.2s ease-out',
            borderTop: '1px solid #f1f5f9'
          }}>
            <form onSubmit={handleSearchSubmit} style={{ flex: 1, display: 'flex', border: '1.5px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
              <input
                type="text"
                autoFocus
                placeholder="Search services, solutions..."
                value={searchValue}
                onChange={handleSearchChange}
                style={{ flex: 1, border: 'none', outline: 'none', padding: '10px 14px', fontSize: '0.85rem', color: 'var(--text-dark)' }}
              />
              <button type="submit" style={{ background: 'var(--primary)', color: 'white', padding: '0 16px', display: 'flex', alignItems: 'center', border: 'none', cursor: 'pointer' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
              </button>
            </form>
          </div>
        )}
      </header>

      {/* ─── Backdrop ─── */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(3px)', zIndex: 600 }}
        />
      )}

      {/* ─── Mobile Drawer ─── */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(300px, 82vw)',
        background: '#fff',
        boxShadow: '-6px 0 32px rgba(15,23,42,0.18)',
        zIndex: 700,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column', overflowY: 'auto',
      }}>
        {/* Drawer header */}
        <div style={{ background: 'linear-gradient(135deg,#FF7E21,#FF5100)', padding: '18px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <div>
            <img
              src="/techmart24-logo.png"
              alt="Tech Mart 24"
              style={{ height: '54px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <button onClick={() => setMenuOpen(false)}
            style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '6px', width: '30px', height: '30px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Account row */}
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '38px', height: '38px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>👤</div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>My Account</div>
            <button onClick={() => { setSignInOpen(true); setMenuOpen(false); }}
              style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              Sign In / Register
            </button>
          </div>
        </div>

        {/* Categories list in Mobile Menu */}
        <div style={{ borderBottom: '1px solid var(--border-color)' }}>
          <button
            onClick={() => setCatOpen(o => !o)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '13px 16px', background: catOpen ? 'var(--primary-light)' : 'transparent',
              border: 'none', cursor: 'pointer', fontWeight: '800', fontSize: '0.84rem',
              color: catOpen ? 'var(--primary)' : 'var(--text-dark)', transition: 'background 0.2s',
            }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              All Categories
            </span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: catOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.25s' }}>
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {catOpen && (
            <div style={{ background: '#FAFAFA', maxHeight: '45vh', overflowY: 'auto', borderTop: '1px solid var(--border-color-light)' }}>
              {categories.map((cat) => (
                <a key={cat.id} href={`/category/${cat.id}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', borderBottom: '1px solid var(--border-color-light)', textDecoration: 'none', color: 'inherit' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--primary-light)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '28px', height: '28px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {cat.icon}
                  </div>
                  <div style={{ overflow: 'hidden', flex: 1 }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--text-dark)' }}>{cat.name}</div>
                    <div style={{ fontSize: '0.62rem', color: 'var(--text-light)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cat.desc}</div>
                  </div>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35, flexShrink: 0 }}>
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Nav links */}
        <nav>
          {[
            { label: '🏠 Home', href: '/' },
            { label: '🎁 Offers & Deals', href: '/offers' },
            { label: '❓ Help Center', href: '/help' },
            { label: '📋 Track Order', href: '/track' },
          ].map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 16px', fontSize: '0.83rem', fontWeight: '600', color: 'var(--text-dark)', borderBottom: '1px solid var(--border-color-light)', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-light)'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-dark)'; }}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div style={{ marginTop: 'auto', padding: '14px 16px', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-medium)', display: 'flex', alignItems: 'center', gap: '6px' }}>📞 +91 93815 66798</div>
          <button onClick={() => { onQuoteOpen?.(); setMenuOpen(false); }}
            style={{ background: 'linear-gradient(135deg,#FF7E21,#FF5100)', color: 'white', padding: '11px', borderRadius: '8px', fontWeight: '800', fontSize: '0.83rem', border: 'none', cursor: 'pointer' }}>
            🚀 Get Free Quote
          </button>
        </div>
      </div>
      <SignInModal isOpen={signInOpen} onClose={() => setSignInOpen(false)} />
    </>
  );
}
