"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import QuoteModal from '../../components/QuoteModal';

const mockOrders = {
  'BM-101': {
    service: 'Business Website Development',
    customer: 'FreshMart',
    statusStep: 5,
    lastUpdate: 'Project completed and domain linked to server.',
    timeline: [
      { name: 'Blueprint Confirmed', date: 'Jun 12', done: true },
      { name: 'UI/UX Wireframing', date: 'Jun 15', done: true },
      { name: 'Core Engineering', date: 'Jun 22', done: true },
      { name: 'Quality Testing', date: 'Jun 26', done: true },
      { name: 'Live Launch', date: 'Jun 28', done: true }
    ]
  },
  'BM-202': {
    service: 'E-commerce Website & Payment Integration',
    customer: 'Smile Dental Clinic',
    statusStep: 3,
    lastUpdate: 'Payment gateway API keys connected. Starting admin dashboard layout.',
    timeline: [
      { name: 'Blueprint Confirmed', date: 'Jun 18', done: true },
      { name: 'UI/UX Wireframing', date: 'Jun 22', done: true },
      { name: 'Core Engineering', date: 'In Progress', done: 'active' },
      { name: 'Quality Testing', date: 'Pending', done: false },
      { name: 'Live Launch', date: 'Pending', done: false }
    ]
  },
  'BM-303': {
    service: 'Local Business GMB & Citation Boost',
    customer: 'Aura Builders',
    statusStep: 2,
    lastUpdate: 'Google Maps listings submitted. Awaiting postcard verification.',
    timeline: [
      { name: 'Blueprint Confirmed', date: 'Jun 28', done: true },
      { name: 'Profile Optimization', date: 'In Progress', done: 'active' },
      { name: 'Citation Building', date: 'Pending', done: false },
      { name: 'Verification & Review Setup', date: 'Pending', done: false },
      { name: 'Live Listing', date: 'Pending', done: false }
    ]
  }
};

export default function Track() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    const id = orderId.trim().toUpperCase();
    if (mockOrders[id]) {
      setSearchResult(mockOrders[id]);
    } else {
      setSearchResult(null);
    }
    setHasSearched(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        cartCount={0}
        wishlistCount={0}
        onQuoteOpen={() => setIsQuoteOpen(true)}
      />

      {/* Main Content */}
      <main className="container-layout" style={{ marginTop: '48px', marginBottom: '64px', flex: 1 }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '16px', fontWeight: '600' }}>
          <a href="/">Home</a> / <span style={{ color: 'var(--secondary)' }}>Track Order</span>
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--secondary)', letterSpacing: '-0.02em' }}>
            Track Your Project Roadmap
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginTop: '4px' }}>
            Enter your Bubbles Media tracking ID (e.g. BM-101, BM-202, BM-303) below to verify execution milestones.
          </p>
        </div>

        {/* Input Card */}
        <div className="glass-panel" style={{ maxWidth: '540px', margin: '0 auto 40px auto', padding: '28px', background: 'white' }}>
          <form onSubmit={handleTrackSubmit} style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                placeholder="Enter Project ID (e.g., BM-202)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                style={{ textTransform: 'uppercase' }}
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="btn-primary" style={{ padding: '10px 24px' }}>
              Track
            </button>
          </form>
          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '10px', textAlign: 'center' }}>
            💡 Try mock IDs: <strong style={{ color: 'var(--primary)' }}>BM-101</strong> (Completed), <strong style={{ color: 'var(--primary)' }}>BM-202</strong> (Development), or <strong style={{ color: 'var(--primary)' }}>BM-303</strong> (Optimization).
          </span>
        </div>

        {/* Result Container */}
        {hasSearched && (
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            {searchResult ? (
              <div className="glass-panel" style={{ padding: '32px', background: 'white' }}>
                {/* Result Header */}
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', background: 'var(--secondary)', color: 'white', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    Active Project status
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--secondary)', marginTop: '10px' }}>
                    {searchResult.service}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block', marginTop: '4px' }}>
                    Partner Client: <strong>{searchResult.customer}</strong>
                  </span>
                </div>

                {/* Progress Vertical Layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', paddingLeft: '24px' }}>
                  
                  {/* Vertical Connection Line */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    bottom: '8px',
                    left: '8px',
                    width: '2px',
                    background: '#E2E8F0',
                    zIndex: 1
                  }}></div>

                  {searchResult.timeline.map((step, sIdx) => {
                    const isDone = step.done === true;
                    const isActive = step.done === 'active';
                    
                    return (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', position: 'relative', zIndex: 2 }}>
                        {/* Dot indicator */}
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: isDone ? '#10B981' : isActive ? 'var(--primary)' : 'white',
                          border: isDone ? 'none' : isActive ? '3px solid white' : '2px solid #CBD5E1',
                          boxShadow: isActive ? '0 0 0 2px var(--primary)' : 'none',
                          marginLeft: '-22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          {isDone && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </div>

                        {/* Step Details */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                          <div>
                            <span style={{
                              display: 'block',
                              fontSize: '0.85rem',
                              fontWeight: '700',
                              color: isActive ? 'var(--primary)' : isDone ? 'var(--secondary)' : 'var(--text-light)'
                            }}>
                              {step.name}
                            </span>
                            {isActive && (
                              <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: '600' }}>Active Sprint</span>
                            )}
                          </div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: '600' }}>{step.date}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Status Update Banner */}
                <div style={{ background: 'var(--primary-light)', borderRadius: '8px', padding: '16px', marginTop: '32px', borderLeft: '4px solid var(--primary)' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--primary)', display: 'block' }}>
                    Latest engineer logs:
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '600', lineHeight: '1.4', marginTop: '4px', margin: 0 }}>
                    "{searchResult.lastUpdate}"
                  </p>
                </div>
              </div>
            ) : (
              <div style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px',
                textAlign: 'center',
                color: 'var(--text-light)'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', opacity: 0.5 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Order ID Not Found</p>
                <p style={{ fontSize: '0.8rem', marginTop: '4px' }}>No active blueprint match found for "{orderId}". Check for typos and try again.</p>
              </div>
            )}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--secondary)',
        color: 'white',
        borderTop: '1px solid var(--border-color)',
        padding: '36px 0 24px 0'
      }}>
        <div className="container-layout" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '24px' }}>
            <div>
              <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'white', letterSpacing: '-0.5px' }}>
                BUBBLES <span style={{ color: 'var(--primary)' }}>MEDIA</span>
              </span>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '4px' }}>
                India's Premium Digital Solutions Marketplace.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '24px', fontSize: '0.8rem', color: 'var(--text-light)' }}>
              <a href="/about" style={{ color: 'white' }}>About Us</a>
              <a href="/contact" style={{ color: 'white' }}>Contact Us</a>
              <a href="/help" style={{ color: 'white' }}>Help Center</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.75rem', color: 'var(--text-light)' }}>
            <span>© {new Date().getFullYear()} Bubbles Media. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}
