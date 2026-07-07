'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, removeFromCart, isCartOpen, setIsCartOpen, cartCount } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isCartOpen) return null;

  // Calculate total price estimate
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const num = parseInt(priceStr.replace(/[^\d]/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + parsePrice(item.price), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Success state, clear cart items logic can go here
    }, 1500);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 100000,
      display: 'flex',
      justifyContent: 'flex-end',
      pointerEvents: 'auto',
    }}>
      {/* Backdrop overlay */}
      <div 
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer content box */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        height: '100%',
        background: 'var(--bg-white)',
        boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2,
        animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 20px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--bg-white)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--secondary)' }}>
              Selected Services
            </span>
            <span style={{
              background: 'var(--primary)',
              color: 'var(--secondary)',
              fontSize: '0.72rem',
              fontWeight: '800',
              borderRadius: '999px',
              padding: '2px 8px',
            }}>
              {cartCount}
            </span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '50%',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'none'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Scrollable list */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {submitSuccess ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '8px' }}>
                Proposal Request Sent!
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', lineHeight: '1.5', marginBottom: '24px' }}>
                We have received your selection. Our digital solutions architect will contact you shortly with a custom tailored strategy.
              </p>
              <button 
                onClick={() => {
                  setSubmitSuccess(false);
                  setShowCheckoutForm(false);
                  setIsCartOpen(false);
                  // Refresh/reset cart if desired
                }}
                className="btn-primary" 
                style={{ padding: '10px 24px', fontSize: '0.85rem' }}
              >
                Continue Browsing
              </button>
            </div>
          ) : showCheckoutForm ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '4px' }}>
                Contact Information
              </h3>
              <div>
                <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-medium)', display: 'block', marginBottom: '6px' }}>Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem', background: 'var(--bg-white)', color: 'var(--text-dark)' }} placeholder="e.g. John Doe" />
              </div>
              <div>
                <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-medium)', display: 'block', marginBottom: '6px' }}>Email Address *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem', background: 'var(--bg-white)', color: 'var(--text-dark)' }} placeholder="e.g. john@company.com" />
              </div>
              <div>
                <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-medium)', display: 'block', marginBottom: '6px' }}>Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem', background: 'var(--bg-white)', color: 'var(--text-dark)' }} placeholder="e.g. +91 98765 43210" />
              </div>
              <div>
                <label style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-medium)', display: 'block', marginBottom: '6px' }}>Requirement Note (Optional)</label>
                <textarea name="note" value={formData.note} onChange={handleInputChange} rows={3} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem', background: 'var(--bg-white)', color: 'var(--text-dark)', resize: 'vertical' }} placeholder="Any specific feature or requests..." />
              </div>

              <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                <button type="button" onClick={() => setShowCheckoutForm(false)} style={{ flex: 1, padding: '12px', fontSize: '0.82rem', fontWeight: '800', background: 'var(--bg-white)', border: '1px solid var(--border-color)', borderRadius: '8px', cursor: 'pointer', color: 'var(--secondary)' }}>
                  Back to List
                </button>
                <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ flex: 1, padding: '12px', fontSize: '0.82rem', border: 'none' }}>
                  {isSubmitting ? 'Sending Request...' : 'Send Request'}
                </button>
              </div>
            </form>
          ) : cartCount === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 10px', color: 'var(--text-light)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px', opacity: 0.5 }}>
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <p style={{ fontWeight: '700', color: 'var(--text-medium)', marginBottom: '6px' }}>Your Cart is Empty</p>
              <p style={{ fontSize: '0.78rem' }}>Browse services and add them to your selection to request a package proposal.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color-light)',
                  background: 'var(--bg-white)',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#f0fdf4',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: '0.82rem', fontWeight: '800', color: 'var(--secondary)', margin: '0 0 4px 0', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      {item.title}
                    </h4>
                    <span style={{ fontSize: '0.76rem', color: 'var(--primary)', fontWeight: '800' }}>
                      {item.price}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#ef4444',
                      padding: '4px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#fef2f2'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer summary actions */}
        {!submitSuccess && cartCount > 0 && (
          <div style={{
            padding: '20px',
            borderTop: '1px solid var(--border-color)',
            background: 'var(--bg-white)',
          }}>
            {!showCheckoutForm ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-medium)', fontWeight: '700' }}>Estimated Total:</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--secondary)' }}>
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <button 
                  onClick={() => setShowCheckoutForm(true)}
                  className="btn-primary" 
                  style={{ width: '100%', padding: '14px', fontSize: '0.85rem', display: 'block', textAlign: 'center', border: 'none' }}
                >
                  Request Custom Proposal →
                </button>
              </>
            ) : null}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
