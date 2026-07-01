"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import QuoteModal from '../../components/QuoteModal';

export default function About() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

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
          <a href="/">Home</a> / <span style={{ color: 'var(--secondary)' }}>About Us</span>
        </div>

        {/* Hero Section */}
        <div style={{
          background: 'var(--bg-gradient-slate)',
          borderRadius: 'var(--radius-lg)',
          padding: '48px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '48px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'white', marginBottom: '12px' }}>
            Empowering Businesses Globally
          </h2>
          <p style={{ fontSize: '1rem', color: '#CBD5E1', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Bubbles Media is India's largest integrated digital marketplace, delivering premium web development, branding, SEO, and AI automation solutions.
          </p>
        </div>

        {/* Grid Info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' }} className="about-grid">
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '16px', color: 'var(--secondary)' }}>
              Our Story & Philosophy
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: '1.7', marginBottom: '16px' }}>
              Founded with the vision of bridging the digital divide for small and medium enterprises, Bubbles Media provides transparent pricing, high-quality engineering, and verified digital workflows.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: '1.7' }}>
              We believe in result-driven execution. Every line of code, every marketing campaign, and every design framework is tailored to drive measurable ROI for our partners.
            </p>
          </div>
          <div style={{ background: 'var(--bg-white)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--secondary)' }}>Core Values</h4>
            {[
              { title: 'Transparency First', desc: 'No hidden charges. Fixed, affordable prices for all services.' },
              { title: 'Obsessive Quality', desc: 'Engineered by senior developers and custom brand artists.' },
              { title: 'Always-On Support', desc: 'Active customer success leads assigned to every kickoff project.' }
            ].map((v, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--secondary)' }}>{v.title}</span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '2px' }}>{v.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          padding: '32px 0',
          marginBottom: '48px'
        }} className="about-stats-grid">
          {[
            { num: '8+ Years', label: 'Agency Experience' },
            { num: '5,000+', label: 'Happy Industries' },
            { num: '15,000+', label: 'Projects Completed' },
            { num: '50+', label: 'Team Members' }
          ].map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                {stat.num}
              </span>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-medium)', fontWeight: '700', textTransform: 'uppercase', marginTop: '4px' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Team Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--secondary)' }}>Meet Our Leadership</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '4px' }}>The technologists and creators behind the marketplace</p>
        </div>

        {/* Team Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="about-team-grid">
          {[
            { name: 'Nikhil Jai', role: 'Chief Executive Officer', desc: 'Directs strategic partnerships and corporate blueprint operations.' },
            { name: 'Arun Kumar', role: 'VP of Technology', desc: 'Leads Next.js frameworks, cloud infrastructure, and database integrations.' },
            { name: 'Priya Sharma', role: 'Head of Brand Identity', desc: 'Oversees visual styling, layouts, and logo concepts.' }
          ].map((t, i) => (
            <div key={i} className="glass-panel" style={{ padding: '24px', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                fontSize: '1.25rem',
                fontWeight: '900',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--secondary)' }}>{t.name}</h4>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', display: 'block', marginTop: '2px', marginBottom: '12px' }}>{t.role}</span>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>{t.desc}</p>
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
      />
    </div>
  );
}
