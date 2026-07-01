import React, { useState, useEffect } from 'react';

export default function PromoBanners({ onSelectPackage }) {
  // Countdown Timer state: Initialize with 2 days, 14 hours, 36 minutes, 58 seconds
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
          // Reset timer to keep demo lively
          return { days: 2, hours: 14, minutes: 36, seconds: 58 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const packages = [
    {
      id: 'startup-special',
      title: 'Startup Special Pack',
      desc: 'All You Need to Launch Your Business Online',
      price: '₹14,999',
      badge: 'POPULAR',
      color: '#FFF5EC',
      accent: 'var(--primary)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      id: 'business-growth',
      title: 'Business Growth Pack',
      desc: 'Grow Your Business 10X Faster with Ads & SEO',
      price: '₹24,999',
      badge: 'GROWTH',
      color: '#EEF2F6',
      accent: '#2563EB',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      id: 'premium-digital',
      title: 'Premium Digital Pack',
      desc: 'Complete End-to-End Digital Transformation',
      price: '₹49,999',
      badge: 'ENTERPRISE',
      color: '#ECFDF5',
      accent: '#059669',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section style={{ marginBottom: '40px' }}>
      {/* Grid of Deals and Packages */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        
        {/* Deal of the Day Card */}
        <div style={{
          background: 'var(--bg-gradient-orange)',
          borderRadius: '16px',
          padding: '24px',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '20px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '1.2rem' }}>⚡</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', textTransform: 'uppercase', color: 'white' }}>
                Mega Deals of the Day
              </h3>
            </div>
            <p style={{ fontSize: '0.8rem', opacity: '0.9', fontWeight: '500' }}>
              Limited Time Offers on Top Digital Services. Grab before it expires!
            </p>
          </div>

          {/* Countdown Clock */}
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', opacity: '0.8', display: 'block', marginBottom: '6px' }}>
              Offer Ends In:
            </span>
            <div className="timer-container">
              {[
                { val: formatNumber(timeLeft.days), label: 'Days' },
                { val: formatNumber(timeLeft.hours), label: 'Hours' },
                { val: formatNumber(timeLeft.minutes), label: 'Mins' },
                { val: formatNumber(timeLeft.seconds), label: 'Secs' }
              ].map((time, idx) => (
                <div key={idx} className="timer-box">
                  <span className="timer-num">{time.val}</span>
                  <span className="timer-label">{time.label}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onSelectPackage({ title: 'Mega Deals of the Day', price: 'Special Quote' })}
            style={{
              background: 'white',
              color: 'var(--primary)',
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: '800',
              fontSize: '0.85rem',
              width: 'fit-content',
              boxShadow: 'var(--shadow-sm)',
              textTransform: 'uppercase'
            }}
            className="hover-card"
          >
            Grab Now
          </button>
        </div>

        {/* Dynamic packages list */}
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="hover-card"
            style={{
              background: 'var(--bg-white)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Accent Tint */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: pkg.accent
            }}></div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="badge" style={{ background: pkg.color, color: pkg.accent, fontWeight: '800' }}>
                  {pkg.badge}
                </span>
                <span style={{ color: pkg.accent }}>{pkg.icon}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '6px', color: 'var(--text-dark)' }}>
                {pkg.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', lineHeight: '1.4', marginBottom: '16px' }}>
                {pkg.desc}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color-light)', paddingTop: '16px', marginTop: '12px' }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', display: 'block' }}>Starts from</span>
                <span style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--text-dark)', fontFamily: 'var(--font-display)' }}>
                  {pkg.price}
                </span>
              </div>
              <button
                onClick={() => onSelectPackage(pkg)}
                className="btn-primary"
                style={{
                  background: pkg.accent,
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '8px 14px',
                  borderRadius: '6px'
                }}
              >
                View Package
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
