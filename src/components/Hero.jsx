import React, { useState, useEffect } from 'react';
import { categories } from '../data/servicesData';

const WORDS = ['Websites', 'Mobile Apps', 'SEO & Marketing', 'AI Solutions', 'Branding'];

function getHueRotateFilter(hexColor) {
  if (!hexColor) return 'none';
  let hex = hexColor.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;

  if (max !== min) {
    const d = max - min;
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  const targetHue = Math.round(h * 360);
  const defaultHue = 74; // Default hue of #AADF00 is 74deg
  const diff = targetHue - defaultHue;

  const l = (max + min) / 2;
  const s = max === min ? 0 : (l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min));

  let filterStr = `hue-rotate(${diff}deg)`;
  if (s < 0.25) {
    filterStr += ` saturate(${Math.round(s * 100)}%)`;
  }
  return filterStr;
}

export default function Hero({ activeCategory, onSearch, onExploreOffers }) {
  const [inputVal, setInputVal] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  const handleSubmit = (e) => { e.preventDefault(); if (onSearch) onSearch(inputVal); };

  // Typewriter effect
  useEffect(() => {
    const word = WORDS[wordIdx];
    let timeout;
    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setWordIdx((i) => (i + 1) % WORDS.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIdx]);

  // Dynamic theme extraction
  const categoryData = activeCategory ? categories.find(c => c.id === activeCategory) : null;
  const heroBg = categoryData?.colorTheme || 'linear-gradient(135deg, #AADF00 0%, #C8F000 50%, #92C200 100%)';
  const heroShadow = categoryData ? `0 12px 48px ${categoryData.accentColor}50` : '0 12px 48px rgba(170,223,0,0.5)';
  const accentColor = categoryData?.accentColor || '#AADF00';

  return (
    <div style={{ width: '100%', marginBottom: '20px', position: 'relative' }}>
      {/* Background card with overflow hidden to clip orbs and gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: heroBg,
        borderRadius: '14px',
        boxShadow: heroShadow,
        overflow: 'hidden',
        zIndex: 1,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Animated background orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.08,
          backgroundImage: 'linear-gradient(rgba(15,30,60,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(15,30,60,0.5) 1px,transparent 1px)',
          backgroundSize: '26px 26px',
        }} />
      </div>

      {/* Main Grid Content (no overflow hidden to allow pop-out image) */}
      <div className="hero-inner-grid" style={{ position: 'relative', zIndex: 2 }}>
        {/* ── LEFT ── */}
        <div className="hero-left-col">

          {/* TOP GROUP — badges + headline + sub + bullets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div className="hero-badge-row">
              <span className="hero-badge-primary">
                <span className="hero-badge-dot" />
                🚀 India's #1 Digital Agency
              </span>
              <span className="hero-badge-gold" style={{ color: accentColor, transition: 'color 0.5s ease' }}>⭐ 4.9/5 Rating</span>
            </div>
            <h1 className="hero-headline">
              We Build <span className="hero-headline-accent">{displayed}</span>
              <span className="hero-cursor">|</span>
            </h1>
            <p className="hero-sub">
              Grow your business online with websites, mobile apps, SEO, and AI marketing.
            </p>
            <div style={{ display: 'flex', gap: '10px', fontSize: '0.68rem', color: 'rgba(15,30,60,0.75)', fontWeight: '700', flexWrap: 'wrap' }}>
              <span>✓ Free Consultation</span>
              <span>✓ 100% Satisfaction Guarantee</span>
              <span>✓ Dedicated Support</span>
            </div>
          </div>

          {/* MIDDLE — Service chips */}
          <div className="hero-chips-row">
            {['🌐 Web Design', '📱 Mobile Apps', '🔍 SEO', '🤖 AI Tools', '🎨 Branding'].map(chip => (
              <span key={chip} className="hero-chip">{chip}</span>
            ))}
          </div>

          {/* BOTTOM GROUP — stats + search + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Stats row — compact width */}
            <div className="hero-stats-row">
              <div className="hero-stat">
                <span className="hero-stat-num">500+</span>
                <span className="hero-stat-label">Projects Done</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">50+</span>
                <span className="hero-stat-label">Expert Team</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">98%</span>
                <span className="hero-stat-label">Client Satisfaction</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">10+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
            </div>
            {/* Search */}
            <form onSubmit={handleSubmit} className="hero-search-form">
              <span style={{ paddingLeft: '12px', display: 'flex', alignItems: 'center', color: '#bbb', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <input
                type="text" placeholder="What do you need today?"
                value={inputVal} onChange={e => setInputVal(e.target.value)}
                style={{ flex: 1, border: 'none', background: 'transparent', padding: '9px 8px', fontSize: '0.82rem', outline: 'none', color: '#333', minWidth: 0 }}
              />
              <button type="submit" className="hero-search-btn" style={{ color: accentColor, transition: 'color 0.5s ease' }}>Search</button>
            </form>
            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button onClick={onExploreOffers} className="hero-btn-primary">
                🔥 Explore Mega Offers
              </button>
              <button className="hero-btn-outline">Get Free Quote</button>
            </div>
          </div>

        </div>


        {/* ── RIGHT — Image ── */}
        <div className="hero-right-col">
          <img
            src="/hero-sec-logo.png"
            alt="Platform Showcase & Mega Offers"
            draggable={false}
            className="hero-img"
            style={{
              filter: getHueRotateFilter(accentColor),
              transition: 'filter 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>
      </div>

      <style>{`
        /* ── Animated orbs ── */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: heroOrb 6s ease-in-out infinite;
        }
        .hero-orb-1 {
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%);
          top: -80px; right: 35%;
          animation-delay: 0s;
        }
        .hero-orb-2 {
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(15,30,60,0.10) 0%, transparent 70%);
          bottom: -60px; left: 15%;
          animation-delay: 2s;
        }
        .hero-orb-3 {
          width: 180px; height: 180px;
          background: radial-gradient(circle, rgba(255,255,255,0.20) 0%, transparent 70%);
          top: 40%; left: 40%;
          animation-delay: 4s;
        }
        @keyframes heroOrb {
          0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
          50%       { transform: translateY(-18px) scale(1.06); opacity: 0.8; }
        }

        /* ── Grid ── */
        .hero-inner-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          min-height: 400px;
          position: relative;
          z-index: 2;
        }

        /* ── Left column ── */
        .hero-left-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          padding: 22px 24px;
          overflow: hidden;
          min-width: 0;
        }

        /* ── Service chips ── */
        .hero-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          width: 100%;
          max-width: 100%;
        }
        .hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: rgba(15,30,60,0.1);
          border: 1px solid rgba(15,30,60,0.18);
          border-radius: 20px;
          font-size: 0.63rem;
          font-weight: 700;
          color: #0F1E3C;
          cursor: pointer;
          transition: background 0.18s, transform 0.15s;
        }
        .hero-chip:hover {
          background: rgba(15,30,60,0.2);
          transform: translateY(-1px);
        }


        /* ── Stats row ── */
        .hero-stats-row {
          display: flex;
          align-items: center;
          gap: 12px;
          width: fit-content;
          padding: 8px 14px;
          background: rgba(15,30,60,0.08);
          border-radius: 10px;
          border: 1px solid rgba(15,30,60,0.12);
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
        }
        .hero-stat-num {
          font-size: 1.05rem;
          font-weight: 900;
          color: #0F1E3C;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 0.56rem;
          font-weight: 700;
          color: rgba(15,30,60,0.65);
          text-align: center;
          white-space: nowrap;
        }
        .hero-stat-divider {
          width: 1px;
          height: 28px;
          background: rgba(15,30,60,0.2);
          flex-shrink: 0;
        }

        /* ── Badges ── */
        .hero-badge-row { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
        .hero-badge-primary {
          display: flex; align-items: center; gap: 6px;
          background: rgba(15,30,60,0.15);
          border: 1px solid rgba(15,30,60,0.25);
          backdrop-filter: blur(8px);
          border-radius: 20px; padding: 4px 12px;
          font-size: 0.65rem; font-weight: 800; color: #0F1E3C; letter-spacing: 0.3px;
          animation: fadeInDown 0.5s ease both;
        }
        .hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #0F1E3C;
          box-shadow: 0 0 6px rgba(15,30,60,0.5);
          animation: pulse-dot 1.5s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { box-shadow: 0 0 4px rgba(15,30,60,0.4); }
          50%      { box-shadow: 0 0 10px rgba(15,30,60,0.7), 0 0 20px rgba(15,30,60,0.3); }
        }
        .hero-badge-gold {
          background: #0F1E3C; border-radius: 20px; padding: 4px 12px;
          font-size: 0.62rem; font-weight: 900; color: #AADF00;
          animation: fadeInDown 0.6s ease both;
        }

        /* ── Headline ── */
        .hero-headline {
          font-size: clamp(1.5rem, 2.8vw, 2.2rem);
          font-weight: 900; line-height: 1.1; color: #0F1E3C; margin: 0 0 5px;
          text-shadow: 0 2px 8px rgba(255,255,255,0.3);
          animation: fadeInUp 0.6s ease both 0.1s;
        }
        .hero-headline-accent {
          color: #0F1E3C;
          display: inline-block;
          min-width: 10px;
          text-decoration: underline;
          text-decoration-color: rgba(15,30,60,0.35);
          text-underline-offset: 4px;
        }
        .hero-cursor {
          color: #0F1E3C;
          animation: blink 0.7s step-end infinite;
          font-weight: 300;
        }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

        .hero-sub {
          font-size: 0.78rem; line-height: 1.4;
          color: rgba(15,30,60,0.8); margin: 0; font-weight: 600;
          animation: fadeInUp 0.6s ease both 0.2s;
        }

        /* ── Search ── */
        .hero-search-form {
          display: flex; background: rgba(255,255,255,0.9); border-radius: 8px; padding: 2px;
          box-shadow: 0 4px 20px rgba(15,30,60,0.2);
          max-width: 380px;
          animation: fadeInUp 0.5s ease both 0.35s;
          border: 1.5px solid rgba(15,30,60,0.12);
        }
        .hero-search-btn {
          padding: 6px 14px; border-radius: 6px;
          background: #0F1E3C;
          color: #AADF00; font-weight: 800; font-size: 0.75rem;
          border: none; cursor: pointer; white-space: nowrap;
          transition: transform 0.15s, box-shadow 0.15s;
          flex-shrink: 0;
        }
        .hero-search-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(15,30,60,0.4);
        }

        /* ── CTA Buttons ── */
        .hero-btn-primary {
          padding: 8px 18px; border-radius: 8px;
          background: #0F1E3C; color: white;
          font-weight: 900; font-size: 0.78rem; border: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(15,30,60,0.35);
          transition: transform 0.18s, box-shadow 0.18s;
          animation: pulse-btn 2.5s ease-in-out infinite 1s;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15,30,60,0.5);
        }
        @keyframes pulse-btn {
          0%,100% { box-shadow: 0 4px 16px rgba(15,30,60,0.35); }
          50%      { box-shadow: 0 4px 28px rgba(15,30,60,0.5), 0 4px 12px rgba(15,30,60,0.2); }
        }
        .hero-btn-outline {
          padding: 8px 18px; border-radius: 8px;
          background: rgba(255,255,255,0.25); color: #0F1E3C;
          font-weight: 800; font-size: 0.78rem;
          border: 2px solid rgba(15,30,60,0.4); cursor: pointer;
          transition: background 0.2s, transform 0.18s, border-color 0.2s;
        }
        .hero-btn-outline:hover {
          background: rgba(255,255,255,0.45);
          transform: translateY(-2px);
          border-color: #0F1E3C;
        }

        /* ── Right column ── */
        .hero-right-col {
          position: relative;
          display: flex; align-items: center; justify-content: flex-end;
          padding: 0;
        }
        .hero-img {
          width: 100%;
          max-height: 380px;
          object-fit: contain;
          object-position: right center;
          display: block;
          mix-blend-mode: multiply;
          transform: scale(1.42);
          transform-origin: right center;
          animation: heroImgFloat 4s ease-in-out infinite;
          user-select: none;
          -webkit-user-select: none;
        }
        @keyframes heroImgFloat {
          0%,100% { transform: scale(1.42) translateY(0); }
          50%      { transform: scale(1.42) translateY(-6px); }
        }

        /* ── Shared animations ── */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-inner-grid { grid-template-columns: 1fr 1fr; min-height: 270px; }
          .hero-left-col { padding: 16px 14px; gap: 8px; }
        }
        @media (max-width: 768px) {
          .hero-inner-grid { grid-template-columns: 1fr; min-height: auto; }
          .hero-left-col { padding: 18px 14px 10px; gap: 10px; }
          .hero-right-col { padding: 0 16px 16px; }
          .hero-img { max-height: 220px; }
          .hero-stats-bar { max-width: 100%; }
          .hero-search-form { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .hero-left-col { padding: 14px 12px 6px; gap: 8px; }
          .hero-img { max-height: 180px; }
          .hero-headline { font-size: 1.4rem !important; }
        }
      `}</style>
    </div>
  );
}
