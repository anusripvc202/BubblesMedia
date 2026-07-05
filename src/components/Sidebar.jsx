'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '../data/servicesData';

export default function Sidebar({ selectedCategory, onSelectCategory }) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (catId) => {
    const isActive = selectedCategory === catId;
    setDropdownOpen(false);
    if (isActive) {
      router.push('/');
      if (onSelectCategory) onSelectCategory(null);
    } else {
      router.push(`/category/${catId}`);
      if (onSelectCategory) onSelectCategory(catId);
    }
  };

  const handleViewAll = () => {
    setDropdownOpen(false);
    router.push('/');
    if (onSelectCategory) onSelectCategory(null);
  };

  const activeCategoryObj = categories.find(cat => cat.id === selectedCategory);

  return (
    <aside
      style={{ position: 'sticky', top: '92px', alignSelf: 'start', zIndex: 100 }}
      className="responsive-sidebar-container"
    >
      {/* ─── DESKTOP SIDEBAR (visible only on desktop > 1024px) ─── */}
      <div className="desktop-sidebar-inner" style={{
        background: 'var(--bg-white)',
        borderRadius: '10px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
      }}>
        {/* Title Bar */}
        <div style={{
          background: 'var(--primary)',
          color: 'white',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
            ALL CATEGORIES
          </span>
        </div>

        {/* Categories List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  textAlign: 'left',
                  borderBottom: '1px solid var(--border-color-light)',
                  background: isActive ? 'var(--primary-light)' : 'transparent',
                  borderLeft: isActive ? '3.5px solid var(--primary)' : '3.5px solid transparent',
                  transition: 'all 0.2s ease',
                }}
                className={`category-item-btn ${isActive ? 'active' : ''}`}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: 0 }}>
                  <div style={{
                    color: isActive ? 'var(--primary)' : 'var(--text-medium)',
                    background: isActive ? '#fff' : '#FAF9F6',
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(0,0,0,0.03)',
                  }}>
                    {cat.icon}
                  </div>
                  <div style={{ overflow: 'hidden', flex: 1 }}>
                    <span style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: isActive ? 'var(--primary)' : 'var(--text-dark)', lineHeight: '1.2' }}>
                      {cat.name}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.62rem', color: 'var(--text-light)', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {cat.desc}
                    </span>
                  </div>
                </div>
                
                <div style={{ color: isActive ? 'var(--primary)' : 'var(--text-light)', marginLeft: '6px', display: 'flex', alignItems: 'center', opacity: 0.7 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </button>
            );
          })}
        </div>

        {/* View All Button */}
        <button 
          onClick={handleViewAll}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            width: '100%',
            fontSize: '0.72rem',
            fontWeight: '700',
            color: 'var(--primary)',
            justifyContent: 'center',
            background: 'rgba(170, 223, 0, 0.04)',
            borderTop: '1px solid var(--border-color)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(170, 223, 0, 0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(170, 223, 0, 0.04)'}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          View All Categories
        </button>
      </div>

      {/* ─── MOBILE/TABLET CATEGORY DROPDOWN ─── */}
      <div className="mobile-category-dropdown-wrapper" ref={dropdownRef} style={{ width: '100%' }}>
        <button
          onClick={() => setDropdownOpen(o => !o)}
          style={{
            width: '100%',
            background: '#fff',
            border: '1.5px solid var(--border-color)',
            borderRadius: '10px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.1rem' }}>
              {activeCategoryObj ? activeCategoryObj.icon : '📂'}
            </span>
            <div>
              <div style={{ fontSize: '0.62rem', fontWeight: '800', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Select Category
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--secondary)' }}>
                {activeCategoryObj ? activeCategoryObj.name : 'All Categories'}
              </div>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--text-medium)' }}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {dropdownOpen && (
          <div style={{
            position: 'absolute',
            left: 0,
            right: 0,
            marginTop: '6px',
            background: '#fff',
            borderRadius: '12px',
            border: '1.5px solid var(--border-color)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
            zIndex: 999,
            maxHeight: '380px',
            overflowY: 'auto',
            animation: 'fadeInUp 0.18s ease-out',
            padding: '8px',
          }}>
            {/* All categories entry */}
            <button
              onClick={handleViewAll}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                borderRadius: '8px',
                background: !selectedCategory ? 'var(--primary-light)' : 'transparent',
                textAlign: 'left',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '4px',
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContainer: 'center', fontSize: '1rem', flexShrink: 0, justifyContent: 'center' }}>
                📂
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: '800', color: !selectedCategory ? 'var(--primary)' : 'var(--text-dark)' }}>
                  All Categories & Services
                </div>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-light)' }}>
                  Browse our complete range of digital solutions
                </div>
              </div>
            </button>

            {/* List entries */}
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelect(cat.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: isActive ? 'var(--primary-light)' : 'transparent',
                    textAlign: 'left',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '4px',
                  }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: isActive ? '#fff' : '#f1f5f9',
                    color: isActive ? 'var(--primary)' : 'var(--text-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}>
                    {cat.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: '800', color: isActive ? 'var(--primary)' : 'var(--text-dark)' }}>
                      {cat.name}
                    </div>
                    <div style={{ fontSize: '0.62rem', color: 'var(--text-light)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '240px' }}>
                      {cat.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
