import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#0B0F19',
      color: '#E2E8F0',
      borderTop: '1px solid rgba(255, 90, 0, 0.1)',
      padding: '64px 0 32px 0',
      marginTop: 'auto',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle bottom orange accent glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '20%',
        right: '20%',
        height: '4px',
        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
        opacity: 0.8,
        filter: 'blur(4px)'
      }} />

      <div className="container-layout" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          paddingBottom: '40px'
        }} className="footer-links-grid">
          
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: 'white', letterSpacing: '-0.5px' }}>
                BUBBLES <span style={{ color: 'var(--primary)' }}>MEDIA</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: '1.6', margin: 0 }}>
              India's largest digital solutions marketplace. Delivering high-quality websites, SEO, automation, and tech tools with fixed transparent pricing.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform, idx) => (
                <a
                  key={idx}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  className="social-icon-hover"
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {platform === 'facebook' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    )}
                    {platform === 'twitter' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    )}
                    {platform === 'linkedin' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    )}
                    {platform === 'instagram' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'white', margin: 0 }}>
              Our Solutions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
              <Link href="/#solutions" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">Business Websites</Link>
              <Link href="/#solutions" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">E-commerce Stores</Link>
              <Link href="/#solutions" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">Mobile App Dev</Link>
              <Link href="/#solutions" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">SEO Optimization</Link>
              <Link href="/#solutions" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">WhatsApp Automation</Link>
              <Link href="/#solutions" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">AI Agents & Chatbots</Link>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'white', margin: 0 }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8rem' }}>
              <Link href="/about" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">About Us</Link>
              <Link href="/contact" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">Contact Us</Link>
              <Link href="/offers" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">Mega Offers</Link>
              <Link href="/help" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">Help Center</Link>
              <Link href="/track" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">Track Order Roadmap</Link>
            </div>
          </div>

          {/* Column 4: Support Office */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'white', margin: 0 }}>
              Support Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.8rem', color: '#94A3B8', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary)', flexShrink: 0 }}>📍</span>
                <span>
                  Bubbles Media Tech Tower<br />
                  HSR Layout Sector 4, Bangalore, India
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--primary)', flexShrink: 0 }}>✉️</span>
                <a href="mailto:sales@bubblesmedia.in" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link-hover">sales@bubblesmedia.in</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ color: 'var(--primary)', flexShrink: 0 }}>📞</span>
                <a href="tel:+919381566798" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link-hover">+91 93815 66798</a>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-footer Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '0.75rem',
          color: '#64748B'
        }}>
          <div>
            <span>© {new Date().getFullYear()} Bubbles Media. All Rights Reserved.</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span>Made with ❤️ for Indian Businesses.</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🔒 SSL Secured</span>
            <span>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🛡️ 100% Satisfaction</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
