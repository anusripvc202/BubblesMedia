"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { serviceDatabase, categories } from '../data/servicesData';
import { industryServicesMap } from '../data/industryServicesMap';

// Accent color map for service categories
const categoryColorMap = {
  'websites':           { color: '#AADF00', bg: '#F2FFD4', label: 'Website' },
  'mobile-apps':        { color: '#6366f1', bg: '#eef2ff', label: 'Mobile App' },
  'digital-marketing':  { color: '#D946EF', bg: '#fdf4ff', label: 'Marketing' },
  'whatsapp-marketing': { color: '#10B981', bg: '#ecfdf5', label: 'WhatsApp' },
  'gmb':                { color: '#F59E0B', bg: '#fffbeb', label: 'GMB' },
  'branding-graphics':  { color: '#F43F5E', bg: '#fff1f2', label: 'Branding' },
  'ai-solutions':       { color: '#06B6D4', bg: '#ecfeff', label: 'AI' },
  'business-software':  { color: '#334155', bg: '#f1f5f9', label: 'Software' },
  'industry-solutions': { color: '#7C3AED', bg: '#f5f3ff', label: 'Industry' },
  'hosting-domain':     { color: '#0EA5E9', bg: '#f0f9ff', label: 'Hosting' },
};

// Service type icon by category
function ServiceTypeIcon({ category }) {
  const icons = {
    'websites': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    'mobile-apps': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    'digital-marketing': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    ),
    'business-software': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    'whatsapp-marketing': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
    'ai-solutions': (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 7.54 16.59c-.44.49-.69 1.11-.69 1.76V21a1 1 0 0 1-1 1H6.15a1 1 0 0 1-1-1v-.65c0-.65-.25-1.27-.69-1.76A10 10 0 0 1 12 2z"></path>
        <line x1="6" y1="10" x2="18" y2="10"></line>
        <line x1="10" y1="14" x2="14" y2="14"></line>
      </svg>
    ),
  };
  return icons[category] || icons['websites'];
}

// Helper to parse price string to number for sorting
const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  // Remove currency symbol, commas, and "/mo" suffix
  const cleanStr = priceStr.replace(/[₹,]/g, '').split('/')[0].trim();
  const num = parseInt(cleanStr, 10);
  return isNaN(num) ? 0 : num;
};

// Industry header image mapping
const industryImageMap = {
  'Doctors & Healthcare': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80&v=3',
  'Schools & Colleges': '/school-bg.jpg?v=3',
  'Real Estate & Builders': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80&v=3',
  'E-commerce Stores': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80&v=3',
  'Restaurants & Cafes': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80&v=3',
  'Salons & Wellness': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80&v=3',
  'Travel & Tourism': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80&v=3',
  'Law Firms & Advocates': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80&v=3',
  'Manufacturing & Industries': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80&v=3',
  'NGOs & Non Profits': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80&v=3',
  'Startups & Entrepreneurs': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80&v=3',
  'Finance & Banking': 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80&v=3',
  'Insurance Solutions': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80&v=3',
  'Logistics Solutions': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80&v=3',
  'Automobile Solutions': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80&v=3',
  'Fitness Solutions': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80&v=3',
  'Event Management Solutions': 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80&v=3',
  'Agriculture Solutions': 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80&v=3',
  'Recruitment Solutions': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80&v=3',
  'Hospitality Solutions': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80&v=3',
  'Media & Entertainment Solutions': 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1000&q=80&v=3',
  'Sports Management Solutions': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80&v=3',
  'More Industries': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80&v=3',
};

// Unique color palette array for card borders (ensuring non-repeating colors)
const cardColors = [
  { color: '#0284c7', bg: '#f0f9ff' }, // Sky Blue
  { color: '#10b981', bg: '#ecfdf5' }, // Emerald
  { color: '#8b5cf6', bg: '#f5f3ff' }, // Purple
  { color: '#f97316', bg: '#fff7ed' }, // Orange
  { color: '#ec4899', bg: '#fdf2f8' }, // Pink
  { color: '#06b6d4', bg: '#ecfeff' }, // Cyan
  { color: '#ea580c', bg: '#fff7ed' }, // Deep Orange
  { color: '#14b8a6', bg: '#f0fdfa' }, // Teal
];

function ServiceCard({ serviceEntry, cardColorTheme, onClose }) {
  const { id: serviceId } = serviceEntry;
  const service = serviceDatabase[serviceId];
  const [isHovered, setIsHovered] = React.useState(false);

  if (!service) return null;

  const catMeta = {
    color: cardColorTheme.color,
    bg: cardColorTheme.bg,
    label: categoryColorMap[service.category]?.label || 'Service'
  };

  return (
    <Link href={`/services/${serviceId}`} onClick={onClose} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: '#fff',
          borderTop: `4px solid ${catMeta.color}`,
          borderLeft: isHovered ? `1px solid ${catMeta.color}80` : '1px solid rgba(226, 232, 240, 0.8)',
          borderRight: isHovered ? `1px solid ${catMeta.color}80` : '1px solid rgba(226, 232, 240, 0.8)',
          borderBottom: isHovered ? `1px solid ${catMeta.color}80` : '1px solid rgba(226, 232, 240, 0.8)',
          borderRadius: '16px',
          padding: '24px 20px 20px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          height: '100%',
          boxShadow: isHovered 
            ? `0 20px 40px rgba(15, 23, 42, 0.03), 0 8px 24px ${catMeta.color}15` 
            : '0 4px 12px rgba(15, 23, 42, 0.012)',
          transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        }}
      >
        {/* Icon + badge row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            width: '42px', height: '42px',
            borderRadius: '12px',
            background: catMeta.bg,
            border: `1px solid ${catMeta.color}25`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: catMeta.color, flexShrink: 0,
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
          }}>
            <ServiceTypeIcon category={service.category} />
          </div>
          <span style={{
            fontSize: '0.62rem', fontWeight: '800',
            color: catMeta.color,
            background: catMeta.bg,
            border: `1px solid ${catMeta.color}25`,
            padding: '3px 10px', borderRadius: '999px',
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            {catMeta.label}
          </span>
        </div>

        {/* Title & Desc */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ 
            fontSize: '0.95rem', 
            fontWeight: '900', 
            lineHeight: '1.35',
            transition: 'color 0.2s ease',
            color: isHovered ? catMeta.color : '#0f172a',
            letterSpacing: '-0.015em'
          }}>
            {service.title}
          </div>
          <div style={{ 
            fontSize: '0.74rem', 
            color: '#64748b', 
            lineHeight: '1.55',
            fontWeight: '500',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {service.desc}
          </div>
        </div>

        {/* Redesigned Premium Price block at the bottom */}
        <div style={{
          background: '#f8fafc',
          padding: '10px 14px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '6px',
          border: isHovered ? `1px dashed ${catMeta.color}60` : '1px dashed #e2e8f0',
          transition: 'all 0.2s ease'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.58rem', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Starting From
            </span>
            <span style={{ fontSize: '0.95rem', fontWeight: '900', color: catMeta.color, fontFamily: 'var(--font-display)', transition: 'color 0.2s ease' }}>
              {service.price}
            </span>
          </div>
          <div style={{
            width: '28px', height: '28px',
            borderRadius: '50%',
            background: isHovered ? catMeta.color : '#fff',
            border: `1.5px solid ${catMeta.color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: isHovered ? '#fff' : catMeta.color,
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'rotate(-45deg)' : 'rotate(0deg)',
            boxShadow: isHovered ? `0 4px 10px ${catMeta.color}30` : 'none'
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function IndustryServicesDrawer({ industryName, onClose }) {
  const isOpen = !!industryName;
  const meta = industryName ? industryServicesMap[industryName] : null;
  
  // Sort the service entries from lowest price to highest price
  const serviceEntries = React.useMemo(() => {
    if (!meta?.services) return [];
    return [...meta.services].sort((a, b) => {
      const serviceA = serviceDatabase[a.id];
      const serviceB = serviceDatabase[b.id];
      const priceA = serviceA ? parsePrice(serviceA.price) : 0;
      const priceB = serviceB ? parsePrice(serviceB.price) : 0;
      return priceA - priceB;
    });
  }, [meta]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const headerBgImage = industryImageMap[industryName] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80';

  return (
    <>
      {/* Full-screen Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(4px)',
          zIndex: 9000,
          animation: 'fadeInOverlay 0.25s ease',
        }}
      />

      {/* Centered full-page Modal */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 16px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            background: '#f8fafc',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '88vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 32px 64px rgba(0,0,0,0.28)',
            border: '1px solid #e2e8f0',
            pointerEvents: 'all',
            animation: 'slideUpModal 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            overflow: 'hidden',
          }}
        >
          {/* Modal Header with Industry Related Background Image */}
          <div style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.76), rgba(15, 23, 42, 0.88)), url(${headerBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '28px 28px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            flexShrink: 0,
            color: 'white',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
              {/* Left: industry info */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: '800', color: meta?.color || 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                    Industry Solutions
                  </div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: '900', color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
                    {industryName}
                  </h2>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.85)', margin: '6px 0 0', lineHeight: '1.5', fontWeight: '500' }}>
                    {meta?.tagline}
                  </p>
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '10px',
                  width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                  flexShrink: 0, transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.28)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Sub count */}
            <div style={{ marginTop: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{
                fontSize: '0.68rem', fontWeight: '800',
                background: 'rgba(255, 255, 255, 0.18)',
                color: '#fff',
                border: '1.5px solid rgba(255, 255, 255, 0.25)',
                padding: '3px 10px', borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.02em'
              }}>
                {serviceEntries.length} Services Available
              </span>
              <span style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.65)', fontWeight: '700' }}>
                Click any service to view plans & pricing →
              </span>
            </div>
          </div>

          {/* Services Grid (Scrollable body) */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
            <div 
              className="industry-drawer-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '14px',
              }}
            >
              {serviceEntries.map((entry, idx) => {
                const colorTheme = cardColors[idx % cardColors.length];
                return (
                  <ServiceCard
                    key={`${entry.id}-${idx}`}
                    serviceEntry={entry}
                    cardColorTheme={colorTheme}
                    onClose={onClose}
                  />
                );
              })}
            </div>
          </div>

          {/* Modal Footer */}
          <div style={{
            padding: '16px 28px',
            borderTop: '1px solid #e2e8f0',
            background: '#fff',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}>
            <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0, fontWeight: '600' }}>
              💡 Need a custom solution? Contact us for a free consultation.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
              <button
                onClick={onClose}
                style={{
                  padding: '9px 20px', borderRadius: '8px',
                  border: '1.5px solid #e2e8f0', background: '#fff',
                  fontSize: '0.78rem', fontWeight: '700', color: '#475569',
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f1f5f9'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                Close
              </button>
              <a
                href="/#solutions"
                onClick={onClose}
                style={{
                  padding: '9px 20px', borderRadius: '8px',
                  background: 'var(--primary)', color: '#fff',
                  fontSize: '0.78rem', fontWeight: '800',
                  textDecoration: 'none', display: 'inline-flex',
                  alignItems: 'center', gap: '6px', transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                All Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}
