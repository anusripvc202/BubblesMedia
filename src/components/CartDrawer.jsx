import React from 'react';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) {
  // Compute subtotal
  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      // Parse out number from price string like "₹9,999" or "₹4,999"
      const priceNum = parseInt(item.price.replace(/[^\d]/g, ''), 10);
      return acc + (isNaN(priceNum) ? 0 : priceNum);
    }, 0);
  };

  const subtotal = getSubtotal();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(3px)',
            zIndex: 1005
          }}
        ></div>
      )}

      {/* Side Drawer */}
      <div className={`drawer ${isOpen ? 'open' : ''}`} style={{ zIndex: 1010 }}>
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Your Service Cart</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: '600' }}>
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
            </span>
          </div>
          <button
            onClick={onClose}
            style={{ fontSize: '1.4rem', color: 'var(--text-light)', fontWeight: 'bold' }}
          >
            ✕
          </button>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {cartItems.length === 0 ? (
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: 'var(--text-light)',
              gap: '12px'
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <div>
                <p style={{ fontWeight: '700', color: 'var(--text-dark)' }}>Your Cart is Empty</p>
                <p style={{ fontSize: '0.75rem', marginTop: '4px' }}>Add popular digital solutions to build your customized growth bundle!</p>
              </div>
              <button onClick={onClose} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem', marginTop: '8px' }}>
                Browse Solutions
              </button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-base)',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color-light)'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--text-dark)' }}>
                    {item.title}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '2px', textTransform: 'uppercase', fontWeight: '600' }}>
                    {item.category}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', marginTop: '6px' }}>
                    {item.price} {item.period || ''}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveItem(idx)}
                  style={{
                    color: '#EF4444',
                    background: '#FFF1F1',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem'
                  }}
                  title="Remove Service"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary (only if items exist) */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid var(--border-color)',
            background: 'var(--bg-base)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontWeight: '700', color: 'var(--text-medium)', fontSize: '0.9rem' }}>Estimated Subtotal:</span>
              <span style={{ fontWeight: '900', fontSize: '1.25rem', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                ₹{subtotal.toLocaleString()}
              </span>
            </div>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', lineHeight: '1.4', marginBottom: '16px' }}>
              * Checkout generates an immediate digital summary and notifies our technical lead to arrange your kickoff session.
            </p>
            <button
              onClick={onCheckout}
              className="btn-primary"
              style={{ width: '100%', padding: '12px', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: '800' }}
            >
              Checkout Bundle Specs
            </button>
          </div>
        )}
      </div>
    </>
  );
}
