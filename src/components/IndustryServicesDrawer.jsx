"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { serviceDatabase, categories } from '../data/servicesData';
import { industryServicesMap } from '../data/industryServicesMap';

// Accent color map for service categories
const categoryColorMap = {
  'websites':           { color: '#FF6B00', bg: '#fff7ed', label: 'Website' },
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

function ServiceCard({ serviceEntry, industryColor, onClose }) {
  const { id: serviceId, label } = serviceEntry;
  const service = serviceDatabase[serviceId];
  if (!service) return null;

  const catMeta = categoryColorMap[service.category] || { color: industryColor, bg: '#fff7ed', label: 'Service' };

  return (
    <Link href={`/services/${serviceId}`} onClick={onClose} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{
          background: '#fff',
          border: '1.5px solid #e2e8f0',
          borderRadius: '14px',
          padding: '18px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          cursor: 'pointer',
          transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
          height: '100%',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = catMeta.color;
          e.currentTarget.style.boxShadow = `0 8px 24px ${catMeta.color}22`;
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.background = catMeta.bg;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#e2e8f0';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.background = '#fff';
        }}
      >
        {/* Icon + badge row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            width: '38px', height: '38px',
            borderRadius: '10px',
            background: catMeta.bg,
            border: `1px solid ${catMeta.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: catMeta.color, flexShrink: 0,
          }}>
            <ServiceTypeIcon category={service.category} />
          </div>
          <span style={{
            fontSize: '0.58rem', fontWeight: '800',
            color: catMeta.color,
            background: catMeta.bg,
            border: `1px solid ${catMeta.color}30`,
            padding: '2px 7px', borderRadius: '999px',
            textTransform: 'uppercase', letterSpacing: '0.04em',
          }}>
            {catMeta.label}
          </span>
        </div>

        {/* Title */}
        <div>
          <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#1e293b', lineHeight: '1.3', marginBottom: '4px' }}>
            {service.title}
          </div>
          <div style={{ fontSize: '0.68rem', color: '#64748b', lineHeight: '1.45' }}>
            {service.desc?.substring(0, 72)}{service.desc?.length > 72 ? '…' : ''}
          </div>
        </div>

        {/* Footer: price + arrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '6px', borderTop: '1px solid #f1f5f9' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: '900', color: catMeta.color }}>
            From {service.price}
          </span>
          <div style={{
            width: '24px', height: '24px',
            borderRadius: '50%',
            background: catMeta.color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
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
  const serviceEntries = meta?.services || [];

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
          {/* Modal Header */}
          <div style={{
            background: meta?.bg || '#fff7ed',
            padding: '24px 28px 20px',
            borderBottom: '1px solid #e2e8f0',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
              {/* Left: industry info */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '14px',
                  background: '#fff',
                  border: `2px solid ${meta?.color || '#ff6b00'}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: meta?.color || '#ff6b00',
                  boxShadow: `0 4px 12px ${meta?.color || '#ff6b00'}18`,
                  flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: '800', color: meta?.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                    Industry Solutions
                  </div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1e293b', margin: 0, letterSpacing: '-0.02em' }}>
                    {industryName}
                  </h2>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', margin: '4px 0 0', lineHeight: '1.5' }}>
                    {meta?.tagline}
                  </p>
                </div>
              </div>
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(0,0,0,0.07)',
                  border: 'none',
                  borderRadius: '10px',
                  width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#475569',
                  flexShrink: 0, transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.14)'; e.currentTarget.style.color = '#1e293b'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.07)'; e.currentTarget.style.color = '#475569'; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Sub count */}
            <div style={{ marginTop: '14px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{
                fontSize: '0.68rem', fontWeight: '700',
                background: meta?.color + '15',
                color: meta?.color,
                border: `1px solid ${meta?.color}30`,
                padding: '3px 10px', borderRadius: '999px',
              }}>
                {serviceEntries.length} Services Available
              </span>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: '600' }}>
                Click any service to view plans & pricing →
              </span>
            </div>
          </div>

          {/* Services Grid (Scrollable body) */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '14px',
            }}>
              {serviceEntries.map((entry, idx) => (
                <ServiceCard
                  key={`${entry.id}-${idx}`}
                  serviceEntry={entry}
                  industryColor={meta?.color}
                  onClose={onClose}
                />
              ))}
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
