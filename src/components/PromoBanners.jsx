import React, { useState, useEffect } from 'react';

export default function PromoBanners({ onSelectPackage }) {
  // Countdown Timer state
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

  return (
    <section style={{ marginBottom: '40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '24px' }} className="promo-grid-responsive">
        
        {/* Deal of the Day Card - Solid Orange background */}
        <div style={{
          background: 'linear-gradient(135deg, #FF7E21 0%, #FF5100 100%)',
          borderRadius: '12px',
          padding: '24px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.25rem' }}>⚡</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Mega Deals of the Day
              </h3>
            </div>
            <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Limited Time Offers on Top Services</span>
            <button
              onClick={() => onSelectPackage({ title: 'Mega Deals of the Day', price: 'Special Offer' })}
              style={{
                background: 'white',
                color: 'var(--primary)',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: '800',
                fontSize: '0.75rem',
                marginTop: '8px',
                width: 'fit-content'
              }}
              className="hover-card"
            >
              Grab Now
            </button>
          </div>

          {/* Countdown Clock */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.9 }}>Offer Ends In:</span>
            <div className="timer-container" style={{ gap: '8px' }}>
              {[
                { val: formatNumber(timeLeft.days), label: 'Days' },
                { val: formatNumber(timeLeft.hours), label: 'Hours' },
                { val: formatNumber(timeLeft.minutes), label: 'Mins' },
                { val: formatNumber(timeLeft.seconds), label: 'Secs' }
              ].map((time, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '6px',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: '900' }}>{time.val}</span>
                  <span style={{ fontSize: '0.5rem', opacity: 0.8, textTransform: 'uppercase' }}>{time.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Startup Special Pack Card - Matches Image 1 precisely */}
        <div style={{
          background: 'var(--primary-light)',
          borderRadius: '12px',
          padding: '24px 32px',
          border: '1px solid rgba(255, 107, 0, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          boxShadow: 'var(--shadow-sm)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Info Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 2 }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {/* Gift SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--secondary)', letterSpacing: '-0.01em' }}>
                Startup Special Pack
              </h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', fontWeight: '600' }}>
              All You Need to Launch Your Business Online
            </p>
            <button
              onClick={() => onSelectPackage({ title: 'Startup Special Pack', price: '₹14,999' })}
              className="btn-primary"
              style={{ padding: '8px 18px', width: 'fit-content', fontSize: '0.75rem', marginTop: '6px' }}
            >
              View Package
            </button>
          </div>

          {/* Pricing & Gift Box Graphic */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', zIndex: 2 }}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-light)', fontWeight: '700' }}>Starts from</span>
              <span style={{ display: 'block', fontSize: '1.35rem', fontWeight: '900', color: 'var(--secondary)', fontFamily: 'var(--font-display)' }}>
                ₹14,999
              </span>
              <span style={{ display: 'block', fontSize: '0.6rem', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', marginTop: '2px' }}>
                Limited Time Offer
              </span>
            </div>

            {/* Gift Box 3D graphic */}
            <div style={{ fontSize: '2.5rem', animation: 'float 3.5s ease-in-out infinite' }}>
              🎁
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
