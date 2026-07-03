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
    <section style={{ marginBottom: '24px' }}>
      <div className="promo-grid-responsive promo-row-scroll">
        
        {/* Deal of the Day Card - Solid Orange background */}
        <div style={{
          background: '#FF6004',
          borderRadius: '8px',
          padding: '16px 20px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          boxShadow: 'var(--shadow-sm)',
          minHeight: '94px'
        }}>
          {/* Left badge & text info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* White Rosette % Badge */}
            <img 
              src="/promo-rosette.png?v=1" 
              alt="Rosette" 
              style={{
                width: '38px',
                height: 'auto',
                objectFit: 'contain',
                flexShrink: 0
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: 'white', display: 'flex', alignItems: 'center', gap: '4px', margin: 0, letterSpacing: '-0.01em' }}>
                Mega Deals of the Day 🔥
              </h3>
              <span style={{ fontSize: '0.72rem', opacity: 0.95, fontWeight: '500' }}>Limited Time Offers on Top Services</span>
              <button
                onClick={() => onSelectPackage({ title: 'Mega Deals of the Day', price: 'Special Offer' })}
                style={{
                  background: 'white',
                  color: '#FF6004',
                  padding: '5px 12px',
                  borderRadius: '4px',
                  fontWeight: '800',
                  fontSize: '0.72rem',
                  marginTop: '4px',
                  width: 'fit-content',
                  border: 'none',
                  cursor: 'pointer'
                }}
                className="hover-card"
              >
                Grab Now
              </button>
            </div>
          </div>

          {/* Countdown Clock */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.9 }}>Offer Ends In:</span>
            <div className="timer-container" style={{ gap: '4px' }}>
              {[
                { val: formatNumber(timeLeft.days), label: 'Days' },
                { val: formatNumber(timeLeft.hours), label: 'Hours' },
                { val: formatNumber(timeLeft.minutes), label: 'Mins' },
                { val: formatNumber(timeLeft.seconds), label: 'Secs' }
              ].map((time, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '900', lineHeight: 1.1 }}>{time.val}</span>
                  <span style={{ fontSize: '0.45rem', opacity: 0.85, textTransform: 'uppercase', marginTop: '1px' }}>{time.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Startup Special Pack Card - Matches Image 1 precisely */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF6F2 0%, #FFF1E9 100%)',
          borderRadius: '8px',
          padding: '16px 20px',
          border: '1px solid rgba(255, 107, 0, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          boxShadow: 'var(--shadow-sm)',
          minHeight: '94px'
        }}>
          {/* Left blocks badge & text info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Startup Isometric Building Blocks */}
            <img 
              src="/promo-blocks.png?v=1" 
              alt="Startup pack" 
              style={{
                width: '42px',
                height: 'auto',
                objectFit: 'contain',
                flexShrink: 0
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: 'var(--secondary)', margin: 0, letterSpacing: '-0.01em' }}>
                Startup Special Pack
              </h3>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-medium)', fontWeight: '600', margin: 0 }}>
                All You Need to Launch Your Business Online
              </p>
              <button
                onClick={() => onSelectPackage({ title: 'Startup Special Pack', price: '₹14,999' })}
                style={{
                  background: '#FF6004',
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '4px',
                  fontWeight: '800',
                  fontSize: '0.72rem',
                  marginTop: '4px',
                  width: 'fit-content',
                  border: 'none',
                  cursor: 'pointer'
                }}
                className="hover-card"
              >
                View Package
              </button>
            </div>
          </div>

          {/* Pricing & Gift Box Graphic */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Gift Box Graphic */}
            <img 
              src="/promo-gift.png?v=1" 
              alt="Gift box" 
              style={{
                width: '42px',
                height: 'auto',
                objectFit: 'contain',
                animation: 'float 3.5s ease-in-out infinite',
                flexShrink: 0
              }}
            />
            
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: '0.62rem', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>Starts from</span>
              <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: '900', color: 'var(--secondary)', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
                ₹14,999
              </span>
              <span style={{ display: 'block', fontSize: '0.58rem', color: '#FF6004', fontWeight: '800', textTransform: 'uppercase', marginTop: '2px' }}>
                Limited Time Offer
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
