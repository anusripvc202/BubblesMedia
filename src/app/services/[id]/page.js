"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import QuoteModal from '../../../components/QuoteModal';
import PaymentModal from '../../../components/PaymentModal';
import { serviceDatabase } from '../../../data/servicesData';
import { supabase } from '../../../lib/supabaseClient';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const getCategoryLabel = (category) => {
  switch (category) {
    case 'branding-graphics': return '🎨 Branding & Graphics';
    case 'websites': return '🌐 Web Development';
    case 'mobile-apps': return '📱 Mobile Applications';
    case 'gmb': return '📍 Google Maps & Local SEO';
    case 'ai-solutions': return '🤖 AI Solutions & Automation';
    case 'business-software': return '⚙️ Business Software & CRM';
    default: return '⚡ Digital Solution';
  }
};

const isRecommendedPlan = (planName) => {
  const nameLower = planName.toLowerCase();
  return nameLower.includes('gold') || nameLower.includes('growth') || nameLower.includes('platinum') || nameLower.includes('advanced');
};

export default function ServiceDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState(null);

  // Payment Modal States
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // State for dynamic service loaded from Supabase (falling back to local)
  const [service, setService] = useState(() => serviceDatabase[id] || null);
  const [currentUser, setCurrentUser] = useState(null);

  // Check active session
  useEffect(() => {
    async function getUser() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();
          setCurrentUser({
            id: session.user.id,
            email: session.user.email,
            name: profile?.name || 'Customer',
            phone: profile?.phone || ''
          });
        }
      } catch (err) {
        console.warn('Session check failed:', err);
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    async function fetchService() {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.warn('Supabase fetch failed for service, using local fallback:', error.message);
          return;
        }

        if (data) {
          setService({
            id: data.id,
            title: data.title,
            tagline: data.tagline,
            desc: data.desc,
            price: data.price,
            features: data.features || [],
            plans: data.plans || [],
            popular: data.popular || false
          });
        }
      } catch (err) {
        console.error('Error fetching service:', err);
      }
    }
    fetchService();
  }, [id]);

  if (!service) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--bg-base)' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Service Blueprint Not Found</h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '16px' }}>The dynamic ID "{id}" does not exist in our catalog.</p>
        <a href="/" className="btn-primary" style={{ textTransform: 'uppercase', fontSize: '0.8rem' }}>Go to Home</a>
      </div>
    );
  }

  const handleBookPlan = (plan) => {
    // 1. Static Link Check
    const paymentLink = plan.payment_link || plan.paymentLink;
    if (paymentLink) {
      window.open(paymentLink, '_blank', 'noopener,noreferrer');
      return;
    }

    // 2. Parse price to integer
    const numericPrice = Number(plan.price.replace(/[^0-9]/g, ''));
    if (!numericPrice || isNaN(numericPrice)) {
      router.push(`/contact?subject=${encodeURIComponent('Book Plan: ' + service.title + ' - ' + plan.name + ' Plan (' + plan.price + ')')}`);
      return;
    }

    setPaymentAmount(numericPrice);
    setSelectedPlan(plan);
    setIsPaymentOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-base)', position: 'relative' }}>
      {/* Mesh Glow Background */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '100%', 
        maxWidth: '1200px',
        height: '400px', 
        background: 'radial-gradient(circle at 50% 0%, rgba(170, 223, 0, 0.08) 0%, rgba(248, 250, 252, 0) 70%)', 
        pointerEvents: 'none', 
        zIndex: 0 
      }} />

      {/* Header */}
      <Header
        cartCount={0}
        wishlistCount={0}
        onQuoteOpen={() => {
          setQuoteData(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Main Content */}
      <main className="container-layout" style={{ marginTop: '48px', marginBottom: '80px', flex: 1, zIndex: 1, position: 'relative' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '24px', fontWeight: '600' }}>
          <a href="/" style={{ color: 'var(--text-medium)' }} className="footer-link-hover">Home</a> / <a href="/#solutions" style={{ color: 'var(--text-medium)' }} className="footer-link-hover">Services</a> / <span style={{ color: 'var(--text-dark)' }}>{service.title}</span>
        </div>

        {/* Hero Header Segment */}
        <div style={{ 
          marginBottom: '56px', 
          background: 'rgba(255, 255, 255, 0.7)', 
          backdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px 32px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle Category Badge */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '0.7rem',
            fontWeight: '800',
            color: 'var(--secondary)',
            background: 'var(--primary-light)',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            {getCategoryLabel(service.category)}
          </span>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--secondary)', letterSpacing: '-0.03em', lineHeight: '1.2' }}>
            {service.title}
          </h2>
          
          <p style={{ fontSize: '0.95rem', color: 'var(--text-medium)', lineHeight: '1.6', marginTop: '14px', maxWidth: '720px' }}>
            {service.desc}
          </p>

          {/* Core Highlights */}
          {service.features && service.features.length > 0 && (
            <div style={{ marginTop: '28px', borderTop: '1px solid rgba(15, 23, 42, 0.05)', paddingTop: '24px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                Key Capabilities Included:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {service.features.map((item, idx) => (
                  <span key={idx} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--secondary-light)',
                    background: 'rgba(15, 30, 60, 0.04)',
                    border: '1px solid rgba(15, 30, 60, 0.06)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    ✨ {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing Tables Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Select Your Solution Level
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
            Transparent tiered pricing models. Choose the plan that aligns with your scale.
          </p>
        </div>

        {/* Grid pricing */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${service.plans.length}, minmax(0, 1fr))`, gap: '28px', marginBottom: '64px' }} className="pricing-grid-responsive">
          {service.plans.map((plan, idx) => {
            const isRec = isRecommendedPlan(plan.name);
            const deliveryFeature = plan.features.find(f => f.toLowerCase().includes('delivery'));
            const otherFeatures = plan.features.filter(f => !f.toLowerCase().includes('delivery'));

            return (
              <div
                key={idx}
                className="glass-panel hover-card"
                style={{
                  background: isRec ? 'var(--secondary)' : 'white',
                  color: isRec ? 'white' : 'var(--text-dark)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '40px 28px 32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isRec ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                  boxShadow: isRec ? 'var(--shadow-xl), var(--shadow-orange)' : 'var(--shadow-md)',
                  position: 'relative',
                  transform: isRec ? 'scale(1.02)' : 'none',
                  zIndex: isRec ? 2 : 1
                }}
              >
                {/* Floating Recommended Badge */}
                {isRec && (
                  <span style={{
                    position: 'absolute',
                    top: '-14px',
                    right: '28px',
                    background: 'var(--primary)',
                    color: 'var(--secondary)',
                    fontSize: '0.65rem',
                    fontWeight: '900',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    boxShadow: 'var(--shadow-orange)'
                  }}>
                    ⚡ RECOMMENDED
                  </span>
                )}

                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '900', color: isRec ? 'white' : 'var(--secondary)', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                    {plan.name}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: isRec ? '#94A3B8' : 'var(--text-light)', marginBottom: '24px', lineHeight: '1.4' }}>
                    {plan.desc}
                  </p>
                  
                  <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: '900', color: isRec ? 'var(--primary)' : 'var(--secondary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                      {plan.price.split('/')[0]}
                    </span>
                    {plan.price.includes('/') && (
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', color: isRec ? '#94A3B8' : 'var(--text-light)' }}>
                        /{plan.price.split('/')[1]}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div style={{ borderBottom: isRec ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border-color)', marginBottom: '24px' }} />

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {otherFeatures.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.8rem', color: isRec ? '#CBD5E1' : 'var(--text-medium)', lineHeight: '1.4' }}>
                        <div style={{
                          background: isRec ? 'rgba(170, 223, 0, 0.15)' : '#ECFDF5',
                          borderRadius: '50%',
                          width: '18px',
                          height: '18px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '1px'
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isRec ? 'var(--primary)' : '#059669'} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Delivery time footer if available */}
                  {deliveryFeature && (
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      fontSize: '0.75rem', 
                      fontWeight: '600', 
                      color: isRec ? 'var(--primary)' : 'var(--text-medium)', 
                      marginBottom: '16px',
                      justifyContent: 'center'
                    }}>
                      <span>⚡ {deliveryFeature}</span>
                    </div>
                  )}

                  <button
                    onClick={() => handleBookPlan(plan)}
                    className={isRec ? "btn-primary" : "btn-outline"}
                    style={{
                      width: '100%',
                      padding: '12px 18px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      background: isRec ? 'var(--primary)' : 'transparent',
                      color: isRec ? 'var(--secondary)' : 'var(--secondary)',
                      border: isRec ? 'none' : '1.5px solid var(--secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* What's Included Section */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--secondary)', letterSpacing: '-0.02em', marginBottom: '8px' }}>
              What's Included in Every Blueprint
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
              Standard professional assurances delivered with every project layout.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '24px', background: 'white' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>🔒</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '6px' }}>100% NDA Protected</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                Your project parameters, source databases, and concepts are legally protected by standard non-disclosure practices.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: '24px', background: 'white' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>⚡</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '6px' }}>2-Hour Response Time</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                Our digital coordinators maintain real-time correspondence. All tickets receive replies in less than two hours.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: '24px', background: 'white' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>🛠️</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '6px' }}>Complete Handover</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                Full source code access, modular components, API schema integration documentation, and database seeds are fully yours.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: '24px', background: 'white' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>🚀</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '6px' }}>Serverless Optimization</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                Engineered to execute inside serverless parameters on platforms like Vercel with clean code paths and zero database lag.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Request Banner */}
        <div style={{
          background: 'var(--bg-gradient-slate)',
          color: 'white',
          borderRadius: 'var(--radius-lg)',
          padding: '48px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '32px',
          boxShadow: 'var(--shadow-xl)',
          position: 'relative',
          overflow: 'hidden'
        }} className="form-row-responsive">
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            width: '300px', 
            height: '300px', 
            background: 'radial-gradient(circle, rgba(170, 223, 0, 0.08) 0%, rgba(15, 30, 60, 0) 70%)', 
            pointerEvents: 'none' 
          }} />

          <div style={{ maxWidth: '640px', zIndex: 1 }}>
            <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Bespoke Requirements?
            </span>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', letterSpacing: '-0.02em', marginBottom: '10px' }}>
              Need a Custom Tailored Blueprint?
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: '1.6' }}>
              If your enterprise specs, custom APIs, or database models require custom layout parameters, our Solutions Architect can configure a custom quote for you.
            </p>
          </div>
          
          <button
            onClick={() => {
              setQuoteData({ service_title: service.title });
              setIsQuoteOpen(true);
            }}
            className="btn-primary"
            style={{
              background: 'var(--primary)',
              color: 'var(--secondary)',
              padding: '14px 28px',
              fontSize: '0.9rem',
              fontWeight: '800',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: 'var(--shadow-orange)',
              zIndex: 1
            }}
          >
            Request Custom Quote
          </button>
        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={quoteData}
      />

      {/* Payment Simulation Modal */}
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        amount={paymentAmount}
        serviceName={service.title}
        planName={selectedPlan?.name || 'Selected Plan'}
        currentUser={currentUser}
      />
    </div>
  );
}
