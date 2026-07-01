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
      badge: 'Popular',
      color: 'var(--primary-light)',
      accent: 'var(--primary)',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      id: 'business-growth',
      title: 'Business Growth Pack',
      desc: 'Grow Your Business 10X Faster with Ads & SEO',
      price: '₹24,999',
      badge: 'Growth',
      color: '#EFF6FF',
      accent: '#2563EB',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      id: 'premium-digital',
      title: 'Premium Digital Pack',
      desc: 'Complete End-to-End Digital Transformation',
      price: '₹49,999',
      badge: 'Enterprise',
      color: '#ECFDF5',
      accent: '#059669',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
        
        {/* Deal of the Day Card - Redesigned to look extremely premium */}
        <div style={{
          background: 'var(--bg-gradient-slate)',
          borderRadius: 'var(--radius-lg)',
          padding: '28px',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          {/* Subtle Orange Glow Dot */}
          <div style={{ position: 'absolute', top: '15px', right: '15px', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>⚡</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'white' }}>
                Mega Deals of the Day
              </h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: '1.5', fontWeight: '500' }}>
              Limited Time Offers on Top Digital Services. Grab before it expires!
            </p>
          </div>

          {/* Countdown Clock */}
          <div>
            <span style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '8px', letterSpacing: '0.5px' }}>
              Offer Ends In:
            </span>
            <div className="timer-container">
              {[
                { val: formatNumber(timeLeft.days), label: 'Days' },
                { val: formatNumber(timeLeft.hours), label: 'Hrs' },
                { val: formatNumber(timeLeft.minutes), label: 'Mins' },
                { val: formatNumber(timeLeft.seconds), label: 'Secs' }
              ].map((time, idx) => (
                <div key={idx} className="timer-box" style={{ borderRadius: '50%', width: '48px', height: '48px' }}>
                  <span className="timer-num" style={{ fontSize: '1.05rem' }}>{time.val}</span>
                  <span className="timer-label" style={{ fontSize: '0.55rem', opacity: 0.6 }}>{time.label}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onSelectPackage({ title: 'Mega Deals of the Day', price: 'Special Quote' })}
            style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              fontWeight: '800',
              fontSize: '0.8rem',
              width: '100%',
              boxShadow: 'var(--shadow-sm)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
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
            className="glass-panel"
            style={{
              background: 'var(--bg-white)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px',
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
              height: '3px',
              background: pkg.accent
            }}></div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge" style={{ background: pkg.color, color: pkg.accent, fontWeight: '800', fontSize: '0.65rem' }}>
                  {pkg.badge}
                </span>
                <span style={{ color: pkg.accent }}>{pkg.icon}</span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '6px', color: 'var(--secondary)', letterSpacing: '-0.01em' }}>
                {pkg.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', lineHeight: '1.5', marginBottom: '16px' }}>
                {pkg.desc}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color-light)', paddingTop: '16px', marginTop: '12px' }}>
              <div>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-light)', display: 'block' }}>Starts from</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--secondary)', fontFamily: 'var(--font-display)' }}>
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
                View Pack
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
