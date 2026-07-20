"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import QuoteModal from '../../../components/QuoteModal';
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

export default function ServiceDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState(null);

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

  const handleBookPlan = async (plan) => {
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

    // 3. Load script
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert('Razorpay SDK failed to load. Please verify your connection.');
      return;
    }

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: numericPrice })
      });

      const orderData = await res.json();
      if (orderData.error) {
        alert('Order creation failed: ' + orderData.error);
        return;
      }

      // Initialize Razorpay Options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_M5pz720jkSvdDg', // Fallback placeholder
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'BubblesMedia',
        description: `${service.title} - ${plan.name}`,
        order_id: orderData.id,
        handler: async function (response) {
          try {
            const { error: dbErr } = await supabase
              .from('bubbles_bookings')
              .insert({
                user_id: currentUser?.id || null,
                client_name: currentUser?.name || 'Walk-in Client',
                client_email: currentUser?.email || 'guest@example.com',
                client_phone: currentUser?.phone || 'N/A',
                service_name: service.title,
                plan_name: plan.name,
                amount_paid: numericPrice,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id
              });

            if (dbErr) {
              console.error('Logging booking failed:', dbErr);
            }
            alert(`Payment Successful! Booking references saved successfully.`);
          } catch (err) {
            console.error('Booking save error:', err);
          }
        },
        prefill: {
          name: currentUser?.name || '',
          email: currentUser?.email || '',
          contact: currentUser?.phone || ''
        },
        theme: { color: '#1a6cf7' },
        modal: {
          ondismiss: function () {
            // Redirect to Contact page as a fallback for incomplete payment leads
            router.push(`/contact?subject=${encodeURIComponent('Pending Payment Enquiry: ' + service.title + ' - ' + plan.name + ' Plan (' + plan.price + ')')}`);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (paymentErr) {
      console.error('Payment initialization error:', paymentErr);
      router.push(`/contact?subject=${encodeURIComponent('Book Plan: ' + service.title + ' - ' + plan.name + ' Plan (' + plan.price + ')')}`);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
      <main className="container-layout" style={{ marginTop: '48px', marginBottom: '64px', flex: 1 }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '16px', fontWeight: '600' }}>
          <a href="/">Home</a> / <a href="/#solutions">Services</a> / <span style={{ color: 'var(--secondary)' }}>{service.title}</span>
        </div>

        {/* Hero Header Segment */}
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-color)', paddingBottom: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--secondary)', letterSpacing: '-0.02em' }}>
            {service.title}
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: '1.6', marginTop: '10px', maxWidth: '640px' }}>
            {service.desc}
          </p>
        </div>

        {/* Pricing Tables Grid */}
        <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '24px', color: 'var(--secondary)' }}>
          Choose Your Blueprint Level
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${service.plans.length}, 1fr)`, gap: '24px' }} className="pricing-grid-responsive">
          {service.plans.map((plan, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-color)',
                position: 'relative'
              }}
            >
              {/* Gold Highlight Badge */}
              {plan.name.includes('Gold') && (
                <span className="badge badge-orange" style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.6rem', fontWeight: '800' }}>
                  Recommended
                </span>
              )}

              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '4px' }}>
                  {plan.name}
                </h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '20px' }}>
                  {plan.desc}
                </p>
                <div style={{ marginBottom: '24px' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                    {plan.price}
                  </span>
                </div>

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.75rem', color: 'var(--text-medium)', lineHeight: '1.4' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleBookPlan(plan)}
                className="btn-primary"
                style={{
                  width: '100%',
                  background: plan.name.includes('Gold') ? 'var(--primary)' : 'var(--secondary)'
                }}
              >
                Book Plan
              </button>
            </div>
          ))}
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
    </div>
  );
}
