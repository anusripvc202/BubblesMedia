"use client";

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
    { title: 'Business Websites Blueprint', normalPrice: '₹19,999', offerPrice: '₹9,999', discount: '50% OFF', category: 'Websites', img: '/cat-websites.png' },
    { title: 'Mobile App Custom Development', normalPrice: '₹79,999', offerPrice: '₹49,999', discount: '38% OFF', category: 'Mobile Apps', img: '/cat-mobile-apps.png' },
    { title: 'Local Business GMB Optimization', normalPrice: '₹5,999', offerPrice: '₹2,999', discount: '50% OFF', category: 'Google Profile', img: '/cat-gmb.png' },
    { title: 'Complete Brand Identity & Logo Kit', normalPrice: '₹5,999', offerPrice: '₹2,999', discount: '50% OFF', category: 'Branding', img: '/cat-branding-graphics.png' },
    { title: 'Enterprise WhatsApp Chatbot Setup', normalPrice: '₹9,999', offerPrice: '₹4,999', discount: '50% OFF', category: 'WhatsApp API', img: '/cat-whatsapp-marketing.png' }
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

        {/* Hero Section with Large Ticking Clock and Illustration */}
        <div className="offers-hero-container">
          <div className="offers-hero-left">
            <span className="offers-hero-badge">🔥 FLASH SALE</span>
            <h2 className="offers-hero-title">
              Limited Time Mega Offers
            </h2>
            <p className="offers-hero-desc">
              Get up to 50% discount on industry-leading digital services. Setup your business online with certified blueprints.
            </p>
            <div className="offers-hero-bullets">
              <span>✓ Instant Activations</span>
              <span>✓ Verified Digital Workflows</span>
              <span>✓ Complete Brand Toolkits</span>
            </div>
          </div>

          <div className="offers-hero-middle">
            <img 
              src="/offers_hero.png" 
              alt="Exclusive Promo Deals" 
              className="offers-hero-img"
            />
          </div>

          <div className="offers-hero-right">
            <span className="offers-timer-title">
              Countdown to Expiry:
            </span>
            <div className="timer-container">
              {[
                { val: formatNumber(timeLeft.days), label: 'Days' },
                { val: formatNumber(timeLeft.hours), label: 'Hours' },
                { val: formatNumber(timeLeft.minutes), label: 'Mins' },
                { val: formatNumber(timeLeft.seconds), label: 'Secs' }
              ].map((time, idx) => (
                <div key={idx} className="timer-box-custom">
                  <span className="timer-num-custom">{time.val}</span>
                  <span className="timer-label-custom">{time.label}</span>
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
                flexWrap: 'wrap',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flex: 1, minWidth: '280px' }}>
                {off.img && (
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'var(--bg-base)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src={off.img} 
                      alt={off.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <span className="badge badge-orange" style={{ fontSize: '0.65rem', margin: 0 }}>{off.discount}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>{off.category}</span>
                  </div>
                  <span style={{ display: 'block', fontSize: '1rem', fontWeight: '800', color: 'var(--secondary)', marginTop: '2px' }}>{off.title}</span>
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
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={quoteData}
      />
    </div>
  );
}
