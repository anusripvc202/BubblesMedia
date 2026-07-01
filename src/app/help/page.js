"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import QuoteModal from '../../components/QuoteModal';

const faqs = [
  {
    q: "How does the fixed pricing work?",
    a: "Every service in our catalog starts at a predefined flat rate. When you request a booking, our technical advisor reviews your requirements to see if any custom specifications are needed, then delivers a final blueprint showing exactly what you pay."
  },
  {
    q: "Do you provide hosting and domains for websites?",
    a: "Yes! All website blueprints (Business Website, E-commerce Website) include free premium hosting and a .com/.in/.org domain registry for the first full year. Renewals after the first year are charged at standard domain registry cost."
  },
  {
    q: "What is the average timeline for custom mobile apps?",
    a: "Standard mobile applications take between 4 to 8 weeks depending on database features and API integrations. We provide an active tracking ID so you can monitor progress step-by-step."
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Absolutely. We prioritize your code security and business concepts. Our standard agreements contain comprehensive mutual NDA clauses to ensure complete legal safety of your assets."
  },
  {
    q: "Can I upgrade or change my plans later?",
    a: "Yes, you can upgrade from single service setups (like local profile setup) to comprehensive bundles (growth pack, digital pack) at any stage of your roadmap."
  }
];

export default function Help() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
          <a href="/">Home</a> / <span style={{ color: 'var(--secondary)' }}>Help Center</span>
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--secondary)', letterSpacing: '-0.02em' }}>
            Help Center & FAQ
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginTop: '4px' }}>
            Have a question about our blueprints, hosting, or onboarding timeline? Find answers below.
          </p>
        </div>

        {/* Help Grid Categories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '48px'
        }} className="help-categories-grid">
          {[
            { title: 'Project Onboarding', count: '12 Articles', desc: 'Kickoff checklists, blueprint contracts, timelines.' },
            { title: 'Hosting & Domains', count: '8 Articles', desc: 'Email setups, SSL configurations, cPanel accesses.' },
            { title: 'Billing & Invoices', count: '6 Articles', desc: 'Payment getaways, Razorpay link setups, GST billing.' }
          ].map((cat, i) => (
            <div key={i} className="glass-panel" style={{ padding: '24px', background: 'white' }}>
              <span className="badge badge-orange" style={{ fontSize: '0.6rem', marginBottom: '10px', display: 'inline-block' }}>{cat.count}</span>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '4px' }}>{cat.title}</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.4' }}>{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Accordion FAQ Panels */}
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '20px', color: 'var(--secondary)', textAlign: 'center' }}>
            Frequently Asked Questions
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'white',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      color: 'var(--secondary)'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '1rem', color: 'var(--primary)' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 20px 16px 20px',
                      fontSize: '0.8' + 'rem',
                      color: 'var(--text-medium)',
                      lineHeight: '1.6',
                      borderTop: '1px solid var(--border-color-light)',
                      paddingTop: '14px'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
