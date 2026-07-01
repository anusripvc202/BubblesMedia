"use client";

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import QuoteModal from '../../components/QuoteModal';

export default function Offers() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState(null);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 58
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          return { days: 2, hours: 14, minutes: 36, seconds: 58 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const offersList = [
    { title: 'Business Websites Blueprint', normalPrice: '₹19,999', offerPrice: '₹9,999', discount: '50% OFF', category: 'Websites' },
    { title: 'Mobile App Custom Development', normalPrice: '₹79,999', offerPrice: '₹49,999', discount: '38% OFF', category: 'Mobile Apps' },
    { title: 'Local Business GMB Optimization', normalPrice: '₹5,999', offerPrice: '₹2,999', discount: '50% OFF', category: 'Google Profile' },
    { title: 'Complete Brand Identity & Logo Kit', normalPrice: '₹5,999', offerPrice: '₹2,999', discount: '50% OFF', category: 'Branding' },
    { title: 'Enterprise WhatsApp Chatbot Setup', normalPrice: '₹9,999', offerPrice: '₹4,999', discount: '50% OFF', category: 'WhatsApp API' }
  ];

  const handleClaim = (off) => {
    setQuoteData({
      title: `Claim Offer: ${off.title}`,
      price: `Special Offer Price: ${off.offerPrice}`
    });
    setIsQuoteOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        cartCount={0}
        wishlistCount={0}
        onQuoteOpen={() => {
          setQuoteData(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Main Content */}
      <main className="container-layout" style={{ marginTop: '48px', marginBottom: '64px', flex: 1 }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '16px', fontWeight: '600' }}>
          <a href="/">Home</a> / <span style={{ color: 'var(--secondary)' }}>Mega Offers</span>
        </div>

        {/* Hero Section with Large Ticking Clock */}
        <div style={{
          background: 'var(--bg-gradient-orange)',
          borderRadius: 'var(--radius-lg)',
          padding: '48px',
          color: 'white',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          alignItems: 'center',
          gap: '32px',
          marginBottom: '48px',
          border: '1px solid rgba(255,255,255,0.1)'
        }} className="offers-hero-responsive">
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', background: 'white', color: 'var(--primary)', padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '14px' }}>
              Flash Sale
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'white', marginBottom: '10px', letterSpacing: '-0.02em' }}>
              Limited Time Mega Offers
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.5', marginBottom: '8px' }}>
              Get up to 50% discount on industry-leading digital services. Setup your business online with certified blueprints.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.85)', letterSpacing: '0.5px' }}>
              Countdown to Expiry:
            </span>
            <div className="timer-container" style={{ gap: '16px' }}>
              {[
                { val: formatNumber(timeLeft.days), label: 'Days' },
                { val: formatNumber(timeLeft.hours), label: 'Hours' },
                { val: formatNumber(timeLeft.minutes), label: 'Mins' },
                { val: formatNumber(timeLeft.seconds), label: 'Secs' }
              ].map((time, idx) => (
                <div key={idx} className="timer-box" style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <span className="timer-num" style={{ fontSize: '1.25rem' }}>{time.val}</span>
                  <span className="timer-label" style={{ fontSize: '0.55rem', opacity: 0.6 }}>{time.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Discounts Grid */}
        <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '24px', color: 'var(--secondary)' }}>Active Flash Deals</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {offersList.map((off, idx) => (
            <div
              key={idx}
              className="glass-panel hover-card"
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
                background: 'white',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span className="badge badge-orange" style={{ fontSize: '0.65rem' }}>{off.discount}</span>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>{off.category}</span>
                  <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: '800', color: 'var(--secondary)', marginTop: '2px' }}>{off.title}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'right' }} className="price-align-responsive">
                  <span style={{ textDecoration: 'line-through', color: 'var(--text-light)', fontSize: '0.8rem', marginRight: '8px' }}>{off.normalPrice}</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>{off.offerPrice}</span>
                </div>
                <button
                  onClick={() => handleClaim(off)}
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.8rem' }}
                >
                  Claim Deal
                </button>
              </div>
            </div>
          ))}
        </div>

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
        initialData={quoteData}
      />
    </div>
  );
}
