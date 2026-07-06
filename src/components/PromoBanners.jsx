import React, { useState, useEffect } from 'react';

export default function PromoBanners({ onSelectPackage }) {
  // Countdown Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 58
  });

  const [leftHovered, setLeftHovered] = useState(false);

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
    <section style={{ marginBottom: '32px' }}>
      <div className="promo-layout-grid">
        
        {/* LEFT COLUMN: Tall Image Showcase Box */}
        <div 
          onMouseEnter={() => setLeftHovered(true)}
          onMouseLeave={() => setLeftHovered(false)}
          style={{
            background: 'linear-gradient(135deg, #0F1E3C 0%, #1e293b 100%)',
            borderRadius: '16px',
            padding: '32px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: leftHovered 
              ? '0 20px 40px rgba(15, 30, 60, 0.15), 0 0 30px rgba(170, 223, 0, 0.05)'
              : 'var(--shadow-sm)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: leftHovered ? 'translateY(-4px)' : 'translateY(0)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => onSelectPackage({ title: 'Premium Platform Blueprints', price: 'Custom Consultation' })}
        >
          {/* Top category label & rosette */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              background: 'rgba(170, 223, 0, 0.15)',
              color: 'var(--primary)',
              fontSize: '0.68rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              padding: '4px 10px',
              borderRadius: '99px',
              border: '1px solid rgba(170, 223, 0, 0.25)'
            }}>
              ⭐ Premium Blueprint
            </span>
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>Custom Architectures</span>
          </div>

          {/* Heading Content */}
          <div style={{ zIndex: 2 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#fff', letterSpacing: '-0.02em', margin: '6px 0 8px 0', lineHeight: '1.3' }}>
              Launch Your Premium Platform 🚀
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5', margin: 0, fontWeight: '500' }}>
              From initial UI mockups to robust production-ready platforms, we build digital solutions engineered to scale your business.
            </p>
          </div>

          {/* Centered Showcase Mockup Image with floating transition */}
          <div style={{ 
            marginTop: 'auto', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingTop: '20px'
          }}>
            <img 
              src="/Screenshot 2026-07-01 125319.png" 
              alt="Responsive Mockup Showcase" 
              style={{
                width: '100%',
                maxWidth: '380px',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: leftHovered 
                  ? '0 15px 30px rgba(0, 0, 0, 0.3)' 
                  : '0 8px 20px rgba(0, 0, 0, 0.2)',
                transform: leftHovered ? 'translateY(-6px) scale(1.03)' : 'translateY(0) scale(1)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Three smaller boxes stacked vertically */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          justifyContent: 'space-between'
        }}>
          
          {/* BOX 1: Mega Deals of the Day with Countdown Clock */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #9cc500 100%)',
            borderRadius: '16px',
            padding: '18px 24px',
            color: 'var(--secondary)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            boxShadow: 'var(--shadow-sm)',
            minHeight: '120px',
            border: '1px solid rgba(170, 223, 0, 0.3)',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
          }}
          onClick={() => onSelectPackage({ title: 'Mega Deals of the Day', price: 'Special Offer' })}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Left rosette & text info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img 
                src="/promo-rosette.png?v=1" 
                alt="Rosette" 
                style={{
                  width: '42px',
                  height: 'auto',
                  objectFit: 'contain',
                  flexShrink: 0
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <h3 style={{ fontSize: '0.98rem', fontWeight: '900', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '4px', margin: 0, letterSpacing: '-0.01em' }}>
                  Mega Deals of the Day 🔥
                </h3>
                <span style={{ fontSize: '0.72rem', opacity: 0.85, fontWeight: '600', color: 'var(--secondary)' }}>Limited Time Offers on Top Services</span>
                <span style={{
                  background: 'var(--secondary)',
                  color: 'var(--primary)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontWeight: '800',
                  fontSize: '0.7rem',
                  marginTop: '6px',
                  width: 'fit-content',
                  textAlign: 'center'
                }}>
                  Grab Now
                </span>
              </div>
            </div>

            {/* Countdown Clock */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: '0.62rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.9 }}>Offer Ends In:</span>
              <div className="timer-container" style={{ gap: '4px' }}>
                {[
                  { val: formatNumber(timeLeft.days), label: 'Days' },
                  { val: formatNumber(timeLeft.hours), label: 'Hours' },
                  { val: formatNumber(timeLeft.minutes), label: 'Mins' },
                  { val: formatNumber(timeLeft.seconds), label: 'Secs' }
                ].map((time, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.16)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    borderRadius: '6px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: '900', lineHeight: 1.1 }}>{time.val}</span>
                    <span style={{ fontSize: '0.45rem', opacity: 0.85, textTransform: 'uppercase', marginTop: '1px' }}>{time.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOX 2: Startup Special Pack Card */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-light) 0%, #EAFFC4 100%)',
            borderRadius: '16px',
            padding: '18px 24px',
            border: '1px solid rgba(170, 223, 0, 0.25)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            boxShadow: 'var(--shadow-sm)',
            minHeight: '120px',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
          }}
          onClick={() => onSelectPackage({ title: 'Startup Special Pack', price: '₹14,999' })}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Left blocks badge & text info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img 
                src="/promo-blocks.png?v=1" 
                alt="Startup pack" 
                style={{
                  width: '44px',
                  height: 'auto',
                  objectFit: 'contain',
                  flexShrink: 0
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <h3 style={{ fontSize: '0.98rem', fontWeight: '900', color: 'var(--secondary)', margin: 0, letterSpacing: '-0.01em' }}>
                  Startup Special Pack
                </h3>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-medium)', fontWeight: '600', margin: 0 }}>
                  All You Need to Launch Your Business Online
                </p>
                <span style={{
                  background: 'var(--primary)',
                  color: 'var(--secondary)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontWeight: '800',
                  fontSize: '0.7rem',
                  marginTop: '6px',
                  width: 'fit-content',
                  textAlign: 'center'
                }}>
                  View Package
                </span>
              </div>
            </div>

            {/* Pricing & Gift Box Graphic */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
              <img 
                src="/promo-gift.png?v=1" 
                alt="Gift box" 
                style={{
                  width: '44px',
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
                <span style={{ display: 'block', fontSize: '0.58rem', color: 'var(--primary-dark)', fontWeight: '800', textTransform: 'uppercase', marginTop: '2px' }}>
                  Limited Offer
                </span>
              </div>
            </div>
          </div>

          {/* BOX 3: Enterprise Custom Solutions Pack */}
          <div style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            borderRadius: '16px',
            padding: '18px 24px',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            boxShadow: 'var(--shadow-sm)',
            minHeight: '120px',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
          }}
          onClick={() => onSelectPackage({ title: 'Enterprise Custom Solutions', price: 'Custom Quote' })}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Left custom badge & info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                background: '#3b82f6',
                color: '#fff',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                flexShrink: 0,
                boxShadow: '0 4px 10px rgba(59, 130, 246, 0.2)'
              }}>
                ⚙️
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <h3 style={{ fontSize: '0.98rem', fontWeight: '900', color: '#1e3a8a', margin: 0, letterSpacing: '-0.01em' }}>
                  Enterprise Solutions Suite
                </h3>
                <p style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: '600', margin: 0 }}>
                  Custom ERPs, API Systems & Scale Consultations
                </p>
                <span style={{
                  background: '#3b82f6',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontWeight: '800',
                  fontSize: '0.7rem',
                  marginTop: '6px',
                  width: 'fit-content',
                  textAlign: 'center',
                  boxShadow: '0 3px 8px rgba(59, 130, 246, 0.25)'
                }}>
                  Enquire Now
                </span>
              </div>
            </div>

            {/* Right checklist badge */}
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <span style={{ display: 'block', fontSize: '0.62rem', color: '#60a5fa', fontWeight: '800', textTransform: 'uppercase' }}>Consultation</span>
              <span style={{ display: 'block', fontSize: '1.12rem', fontWeight: '900', color: '#1e3a8a', fontFamily: 'var(--font-display)', lineHeight: 1.1, marginTop: '2px' }}>
                FREE AUDIT
              </span>
              <span style={{ display: 'block', fontSize: '0.58rem', color: '#2563eb', fontWeight: '800', textTransform: 'uppercase', marginTop: '2px' }}>
                1-on-1 Strategy
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
