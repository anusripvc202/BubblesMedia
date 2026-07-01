import React, { useState } from 'react';

export default function CalculatorModal({ isOpen, onClose, onSubmitEnquiry }) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('business');
  const [pages, setPages] = useState('5');
  const [design, setDesign] = useState('custom');
  const [integrations, setIntegrations] = useState({
    login: false,
    payment: false,
    seo: false,
    chat: false
  });

  if (!isOpen) return null;

  // Pricing calculations
  const calculatePrice = () => {
    let base = 5000;
    
    // Type pricing
    if (type === 'business') base = 9999;
    if (type === 'ecommerce') base = 14999;
    if (type === 'custom') base = 29999;
    
    // Pages pricing multiplier
    let pageMult = 1.0;
    if (pages === '10') pageMult = 1.4;
    if (pages === '20') pageMult = 1.8;
    if (pages === 'unlimited') pageMult = 2.5;

    let subtotal = base * pageMult;

    // Design pricing additions
    if (design === 'premium') subtotal += 5000;
    if (design === 'interactive') subtotal += 10000;

    // Integrations additions
    let integrationsPrice = 0;
    if (integrations.login) integrationsPrice += 3000;
    if (integrations.payment) integrationsPrice += 4000;
    if (integrations.seo) integrationsPrice += 3000;
    if (integrations.chat) integrationsPrice += 2000;

    return {
      subtotal: Math.round(subtotal),
      integrations: integrationsPrice,
      total: Math.round(subtotal + integrationsPrice)
    };
  };

  const prices = calculatePrice();

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const resetAndSubmit = () => {
    onSubmitEnquiry({
      type,
      pages,
      design,
      integrations,
      estimatedPrice: prices.total
    });
    setStep(1);
  };

  return (
    <div className="overlay" style={{ padding: '20px' }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '560px',
        padding: '32px',
        borderRadius: '20px',
        background: 'white',
        boxShadow: 'var(--shadow-xl)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '1.25rem', color: 'var(--text-light)', fontWeight: 'bold' }}
        >
          ✕
        </button>

        {/* Header indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', background: 'var(--primary-light)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '6px' }}>
            STEP {step} OF 5
          </span>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '900' }}>Website Cost Calculator</h3>
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '16px', fontWeight: '500' }}>
              What type of website is required for your project?
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'business', name: 'Business Website', desc: 'Standard business profile, contact forms, services list' },
                { id: 'ecommerce', name: 'E-commerce Website', desc: 'Sell products online, payment gateway, inventory management' },
                { id: 'custom', name: 'Custom Web Portal', desc: 'SaaS platforms, directories, high-end database tools' }
              ].map(opt => (
                <label
                  key={opt.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: type === opt.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    background: type === opt.id ? 'var(--primary-light)' : 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="radio"
                    name="type"
                    checked={type === opt.id}
                    onChange={() => setType(opt.id)}
                    style={{ marginTop: '3px', accentColor: 'var(--primary)' }}
                  />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>{opt.name}</span>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '2px' }}>{opt.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '16px', fontWeight: '500' }}>
              How many pages do you expect to build?
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {[
                { id: '5', name: 'Up to 5 Pages', desc: 'Standard setup' },
                { id: '10', name: '5 - 10 Pages', desc: 'Mid-sized profiles' },
                { id: '20', name: '10 - 20 Pages', desc: 'Large catalogs' },
                { id: 'unlimited', name: '20+ Pages', desc: 'Huge index / blog' }
              ].map(opt => (
                <label
                  key={opt.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '12px',
                    borderRadius: '8px',
                    border: pages === opt.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    background: pages === opt.id ? 'var(--primary-light)' : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <input
                    type="radio"
                    name="pages"
                    checked={pages === opt.id}
                    onChange={() => setPages(opt.id)}
                    style={{ display: 'none' }}
                  />
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>{opt.name}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '2px' }}>{opt.desc}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '16px', fontWeight: '500' }}>
              Choose visual layout and design customization:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'standard', name: 'Standard Layout', desc: 'Pre-designed UI tailored for your branding (Included)' },
                { id: 'custom', name: 'Custom Brand Identity', desc: 'Handcrafted UI with standard graphics (+ ₹5,000)' },
                { id: 'premium', name: 'Ultra Modern Design & Micro-Animations', desc: 'State of the art animations, bespoke illustrations (+ ₹10,000)' }
              ].map(opt => (
                <label
                  key={opt.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: design === opt.id ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    background: design === opt.id ? 'var(--primary-light)' : 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="radio"
                    name="design"
                    checked={design === opt.id}
                    onChange={() => setDesign(opt.id)}
                    style={{ marginTop: '3px', accentColor: 'var(--primary)' }}
                  />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>{opt.name}</span>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '2px' }}>{opt.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '16px', fontWeight: '500' }}>
              Select integrations and add-ons required (Optional):
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'login', name: 'User Authentication / Login (+ ₹3,000)', desc: 'Register, sign-in, and database profiles' },
                { id: 'payment', name: 'Payment Gateway Integration (+ ₹4,000)', desc: 'Razorpay, Stripe, UPI checkout support' },
                { id: 'seo', name: 'Premium SEO Optimization Pack (+ ₹3,000)', desc: 'Meta tags, speed fixes, Sitemap generation' },
                { id: 'chat', name: 'WhatsApp & Live Chat Widgets (+ ₹2,000)', desc: 'Connect with visitors instantly' }
              ].map(opt => (
                <label
                  key={opt.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: integrations[opt.id] ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    background: integrations[opt.id] ? 'var(--primary-light)' : 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={integrations[opt.id]}
                    onChange={(e) => setIntegrations(prev => ({ ...prev, [opt.id]: e.target.checked }))}
                    style={{ marginTop: '3px', accentColor: 'var(--primary)' }}
                  />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>{opt.name}</span>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '2px' }}>{opt.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', marginBottom: '16px', fontWeight: '500' }}>
              Here is your calculated estimated quote:
            </p>
            
            {/* Calculation details panel */}
            <div style={{ background: 'var(--bg-base)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--text-light)' }}>Website Base Layout:</span>
                <span style={{ fontWeight: '700' }}>₹{prices.subtotal.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--text-light)' }}>Selected Integrations:</span>
                <span style={{ fontWeight: '700' }}>₹{prices.integrations.toLocaleString()}</span>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '4px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem' }}>
                <span style={{ fontWeight: '800', color: 'var(--text-dark)' }}>Total Estimated Price:</span>
                <span style={{ fontWeight: '900', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>₹{prices.total.toLocaleString()}</span>
              </div>
            </div>

            <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', textAlign: 'center', lineHeight: '1.4', marginBottom: '16px' }}>
              💡 Pricing is indicative. Submit your details below, and our engineering team will review your choices to finalize the roadmap.
            </p>
          </div>
        )}

        {/* Modal Buttons Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '24px', borderTop: '1px solid var(--border-color-light)', paddingTop: '20px' }}>
          {step > 1 ? (
            <button onClick={handlePrev} className="btn-outline" style={{ padding: '10px 20px' }}>
              ← Back
            </button>
          ) : (
            <div></div>
          )}

          {step < 5 ? (
            <button onClick={handleNext} className="btn-primary" style={{ padding: '10px 24px' }}>
              Continue
            </button>
          ) : (
            <button onClick={resetAndSubmit} className="btn-primary" style={{ padding: '10px 24px' }}>
              Submit Specifications
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
