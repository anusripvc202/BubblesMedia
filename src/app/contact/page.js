"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (subject) {
      setMessage(`Hello, I would like to enquire about: ${subject}`);
    }
  }, [subject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsSubmitted(false);
      }, 3000);
    } else {
      alert('Please fill out all the fields in the contact form.');
    }
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
          <a href="/">Home</a> / <span style={{ color: 'var(--secondary)' }}>Contact Us</span>
        </div>

        {/* Hero Section */}
        <div className="contact-hero-container">
          <div className="contact-hero-left">
            <span className="contact-hero-badge">✉️ LET'S TALK</span>
            <h2 className="contact-hero-title">
              Let's Launch Your Next Digital Venture
            </h2>
            <p className="contact-hero-desc">
              Have a project in mind or need assistance with your existing website, application, or marketing campaign? Drop a line and our expert team will respond with a custom roadmap in less than 2 hours.
            </p>
            <div className="contact-hero-bullets">
              <span>🔒 NDA Protected</span>
              <span>⚡ 2-Hour Response</span>
              <span>📊 Free Digital Audit</span>
            </div>
          </div>
          <div className="contact-hero-right">
            <img 
              src="/contact_hero.png" 
              alt="Get In Touch with Tech Mart 24" 
              className="contact-hero-img"
            />
          </div>
        </div>


        {/* Contact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px' }} className="contact-grid">

          {/* Contact Form */}
          <div className="glass-panel" style={{ padding: '32px', background: 'white' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
                  background: '#ECFDF5',
                  color: '#047857',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Enquiry Received!</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                  Thank you for writing to us. Our project lead will review your details and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '20px', color: 'var(--secondary)' }}>
                  Send us a Message
                </h3>

                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-responsive">
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      className="form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details</label>
                  <textarea
                    placeholder="Briefly explain what solutions you are looking for..."
                    rows="5"
                    className="form-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ resize: 'none' }}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Quick Contact Box */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--secondary)' }}>Direct Contacts</h3>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  📞
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block' }}>Call Support</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--secondary)', display: 'block', marginTop: '2px' }}>+91 93815 66798</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-medium)', display: 'block', marginTop: '2px' }}>Mon - Sat, 9am - 7pm IST</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  ✉️
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block' }}>Email Enquiries</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--secondary)', display: 'block', marginTop: '2px' }}>sales@bubblesmedia.in</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-medium)', display: 'block', marginTop: '2px' }}>We respond within 2 hours</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  📍
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', display: 'block' }}>Headquarters</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--secondary)', display: 'block', marginTop: '2px' }}>Tech Mart 24 Tech Tower</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-medium)', display: 'block', marginTop: '2px' }}>HSR Layout Sector 4, Bangalore, India</span>
                </div>
              </div>
            </div>

            {/* Help Callout */}
            <div style={{ background: 'var(--secondary)', color: 'white', borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'white' }}>Quick Project Onboarding</h4>
              <p style={{ fontSize: '0.75rem', color: '#94A3B8', lineHeight: '1.5' }}>
                All specifications sent to us are protected by standard Non-Disclosure Agreements (NDAs). Your source files and digital roadmaps remain secure.
              </p>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-base)' }}>Loading...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
