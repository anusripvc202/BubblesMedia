import React from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '../data/servicesData';

export default function Sidebar({ selectedCategory, onSelectCategory }) {
  const router = useRouter();

  const handleSelect = (catId) => {
    const isActive = selectedCategory === catId;
    if (isActive) {
      router.push('/');
      if (onSelectCategory) onSelectCategory(null);
    } else {
      router.push(`/category/${catId}`);
      if (onSelectCategory) onSelectCategory(catId);
    }
  };

  const handleViewAll = () => {
    router.push('/');
    if (onSelectCategory) onSelectCategory(null);
  };

  return (
    <aside style={{ background: 'var(--bg-white)', borderRadius: '6px', border: '1px solid var(--border-color)', overflowY: 'auto', maxHeight: 'calc(100vh - 110px)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: '92px', alignSelf: 'start' }}>
      {/* Title Bar - Solid Orange "ALL CATEGORIES" */}
      <div style={{ background: 'var(--primary)', color: 'white', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
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
                padding: '7px 14px',
                textAlign: 'left',
                borderBottom: '1px solid var(--border-color-light)',
                background: isActive ? 'var(--primary-light)' : 'transparent',
                borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent'
              }}
              className="category-item"
            >
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 1 }}>
                <div style={{ color: 'var(--primary)', background: '#FAF9F6', width: '26px', height: '26px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {cat.icon}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span style={{ display: 'block', fontSize: '0.73rem', fontWeight: '700', color: isActive ? 'var(--primary)' : 'var(--text-dark)', lineHeight: '1.2' }}>
                    {cat.name}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--text-light)', marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {cat.desc}
                  </span>
                </div>
              </div>
              
              <div style={{ color: 'var(--text-light)', marginLeft: '6px', display: 'flex', alignItems: 'center', opacity: 0.6 }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer link */}
      <button 
        onClick={handleViewAll}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '6px 14px',
          width: '100%',
          fontSize: '0.65rem',
          fontWeight: '700',
          color: 'var(--primary)',
          justifyContent: 'center',
          background: 'rgba(255, 107, 0, 0.03)'
        }}
      >
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        View All Categories
      </button>
    </aside>
  );
}


