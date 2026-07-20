"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function PaymentModal({ isOpen, onClose, amount, serviceName, planName, currentUser }) {
  const [activeTab, setActiveTab] = useState('card'); // 'card' or 'upi'
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset modal state on close/open
  useEffect(() => {
    if (isOpen) {
      setCardNumber('');
      setExpiry('');
      setCvv('');
      setCardName(currentUser?.name || '');
      setUpiId('');
      setIsProcessing(false);
      setIsSuccess(false);
    }
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate network delay
    setTimeout(async () => {
      try {
        const mockPaymentId = 'PAY_MOCK_' + Math.floor(10000000 + Math.random() * 90000000);
        const mockOrderId = 'ORD_MOCK_' + Math.floor(10000000 + Math.random() * 90000000);

        // Save booking to Supabase bubbles_bookings table
        const { error } = await supabase
          .from('bubbles_bookings')
          .insert({
            user_id: currentUser?.id || null,
            client_name: currentUser?.name || 'Walk-in Client',
            client_email: currentUser?.email || 'guest@example.com',
            client_phone: currentUser?.phone || 'N/A',
            service_name: serviceName || 'Bespoke Setup',
            plan_name: planName || 'Custom Budget',
            amount_paid: amount,
            razorpay_order_id: mockOrderId,
            razorpay_payment_id: mockPaymentId,
            status: 'paid'
          });

        if (error) {
          console.error('Failed to log booking in database:', error);
          alert('Database logging failed: ' + error.message);
          setIsProcessing(false);
          return;
        }

        setIsSuccess(true);
        setTimeout(() => {
          setIsProcessing(false);
          onClose();
          alert(`Success! Payment of ₹${amount.toLocaleString('en-IN')} received. Booking logged with Transaction ID: ${mockPaymentId}`);
        }, 1500);

      } catch (err) {
        console.error('Payment processing exception:', err);
        setIsProcessing(false);
      }
    }, 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg-white)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '460px',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        overflow: 'hidden',
        animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--secondary)' }}>Secure Checkout</h3>
            <p style={{ fontSize: '0.65rem', color: 'var(--text-light)', marginTop: '2px' }}>BubblesMedia Payments Portal</p>
          </div>
          <button
            onClick={onClose}
            disabled={isProcessing}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '1.25rem',
              cursor: 'pointer',
              color: 'var(--text-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px'
            }}
          >
            ×
          </button>
        </div>

        {/* Processing State Overlay */}
        {isProcessing && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.95)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center'
          }}>
            {isSuccess ? (
              <div style={{ animation: 'scaleUp 0.3s ease' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#ECFDF5',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 16px auto',
                  border: '2px solid #10B981'
                }}>
                  ✓
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#047857' }}>Payment Successful!</h4>
                <p style={{ fontSize: '0.73rem', color: '#065F46', marginTop: '6px' }}>Redirecting & logging details...</p>
              </div>
            ) : (
              <div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  border: '3px solid #e2e8f0',
                  borderTopColor: 'var(--primary)',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                  margin: '0 auto 16px auto'
                }}></div>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--secondary)' }}>Processing Transaction</h4>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '4px' }}>Please do not close or reload this page...</p>
              </div>
            )}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handlePaymentSubmit} style={{ padding: '24px' }}>
          {/* Order Summary Summary Banner */}
          <div style={{
            background: 'var(--bg-base)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
            padding: '16px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.58rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', tracking: '0.05em' }}>Booking Details</span>
              <h4 style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--secondary)', marginTop: '3px' }}>{serviceName}</h4>
              <p style={{ fontSize: '0.68rem', color: 'var(--text-medium)', marginTop: '1px' }}>{planName}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-light)' }}>Total Due</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '900', color: 'var(--secondary)', marginTop: '2px', fontFamily: 'var(--font-display)' }}>
                ₹{amount.toLocaleString('en-IN')}
              </h3>
            </div>
          </div>

          {/* Payment Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderBottom: '1px solid var(--border-color)',
            marginBottom: '20px'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('card')}
              style={{
                padding: '10px',
                background: 'transparent',
                border: 'none',
                borderBottom: `2.5px solid ${activeTab === 'card' ? 'var(--primary)' : 'transparent'}`,
                fontWeight: '700',
                fontSize: '0.75rem',
                color: activeTab === 'card' ? 'var(--primary)' : 'var(--text-medium)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              💳 Credit / Debit Card
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('upi')}
              style={{
                padding: '10px',
                background: 'transparent',
                border: 'none',
                borderBottom: `2.5px solid ${activeTab === 'upi' ? 'var(--primary)' : 'transparent'}`,
                fontWeight: '700',
                fontSize: '0.75rem',
                color: activeTab === 'upi' ? 'var(--primary)' : 'var(--text-medium)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              ⚡ UPI / QR Code
            </button>
          </div>

          {activeTab === 'card' ? (
            /* Card Fields */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: '0.62rem', fontWeight: '800' }}>Card Number</label>
                <input
                  type="text"
                  placeholder="4111 2222 3333 4444"
                  maxLength="19"
                  className="form-input"
                  style={{ fontSize: '0.73rem', padding: '10px' }}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.62rem', fontWeight: '800' }}>Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength="5"
                    className="form-input"
                    style={{ fontSize: '0.73rem', padding: '10px' }}
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label" style={{ fontSize: '0.62rem', fontWeight: '800' }}>CVV</label>
                  <input
                    type="password"
                    placeholder="123"
                    maxLength="3"
                    className="form-input"
                    style={{ fontSize: '0.73rem', padding: '10px' }}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label" style={{ fontSize: '0.62rem', fontWeight: '800' }}>Cardholder Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="form-input"
                  style={{ fontSize: '0.73rem', padding: '10px' }}
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>
            </div>
          ) : (
            /* UPI Fields */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', textAlign: 'center' }}>
              {/* Mock QR Code */}
              <div style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                maxWidth: '180px'
              }}>
                {/* QR graphic placeholder */}
                <div style={{
                  width: '110px',
                  height: '110px',
                  border: '1px solid #cbd5e1',
                  background: 'white',
                  padding: '8px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '2px',
                  justifyContent: 'center',
                  alignContent: 'center'
                }}>
                  {/* Mock QR squares */}
                  {Array.from({ length: 49 }).map((_, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: '12px',
                        height: '12px',
                        background: (idx % 3 === 0 || idx % 7 === 0 || idx === 0 || idx === 6 || idx === 42 || idx === 48) ? 'var(--secondary)' : 'white'
                      }}
                    ></div>
                  ))}
                </div>
                <span style={{ fontSize: '0.58rem', color: 'var(--text-light)', fontWeight: '700' }}>Scan QR to Pay Instantly</span>
              </div>

              <span style={{ fontSize: '0.68rem', color: 'var(--text-light)' }}>- OR ENTER UPI ID -</span>

              <div className="form-group" style={{ margin: 0, width: '100%' }}>
                <input
                  type="text"
                  placeholder="e.g. testuser@okaxis"
                  className="form-input"
                  style={{ fontSize: '0.73rem', padding: '10px', textAlign: 'center' }}
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required={activeTab === 'upi'}
                />
              </div>
            </div>
          )}

          {/* Checkout Footer Button */}
          <button
            type="submit"
            className="btn-primary"
            style={{
              width: '100%',
              marginTop: '24px',
              padding: '12px',
              fontSize: '0.8rem',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            🔐 Pay ₹{amount.toLocaleString('en-IN')} (Simulator)
          </button>
        </form>
      </div>
    </div>
  );
}
