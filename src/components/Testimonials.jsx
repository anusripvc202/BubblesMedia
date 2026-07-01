import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Bubbles Media delivered our e-commerce portal in record time. Sales went up 40% in two months!",
    author: "Rajesh Kumar",
    company: "FreshMart CEO",
    rating: 5
  },
  {
    quote: "Their GMB optimization and local SEO services brought a massive wave of patients to our dental clinic.",
    author: "Dr. Ananya Sharma",
    company: "Smile Dental Clinic",
    rating: 5
  },
  {
    quote: "Very professional team. The custom CRM software they developed solved all our tracking bottlenecks.",
    author: "Vikram Malhotra",
    company: "Aura Builders Director",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIdx];

  return (
    <div style={{
      background: 'var(--bg-white)',
      border: '1px solid var(--border-color)',
      borderRadius: '16px',
      padding: '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px', color: 'var(--text-dark)' }}>
          Our Work Speaks
        </h3>
        
        {/* Rating Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-dark)', fontFamily: 'var(--font-display)' }}>
            4.9/5
          </span>
          <div style={{ display: 'flex', color: '#FBBF24' }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ fontSize: '1rem' }}>★</span>
            ))}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: '600' }}>
            (5000+ Reviews)
          </span>
        </div>

        {/* Dynamic testimonial quote box */}
        <div style={{
          background: 'var(--primary-light)',
          borderRadius: '12px',
          padding: '16px',
          minHeight: '110px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <span style={{ position: 'absolute', top: '2px', left: '8px', fontSize: '2.5rem', opacity: 0.15, fontWeight: 'bold', color: 'var(--primary)', lineHeight: '1' }}>“</span>
          <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-medium)', lineHeight: '1.5', margin: 0, padding: '0 8px', zIndex: 2 }}>
            {current.quote}
          </p>
          <div style={{ marginTop: '8px', paddingLeft: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary)', display: 'block' }}>{current.author}</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>{current.company}</span>
          </div>
        </div>
      </div>

      {/* Control navigation and avatar group */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        {/* Mock Avatar Pile */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {[
            '#3B82F6',
            '#EF4444',
            '#10B981',
            '#F59E0B'
          ].map((color, idx) => (
            <div
              key={idx}
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: color,
                border: '2px solid white',
                marginLeft: idx === 0 ? '0' : '-8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.55rem',
                fontWeight: '900',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {String.fromCharCode(65 + idx)}
            </div>
          ))}
          <span style={{ fontSize: '0.7rem', color: 'var(--text-light)', fontWeight: '700', marginLeft: '6px' }}>
            +15k happy clients
          </span>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={prev}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              color: 'var(--text-medium)',
              background: 'white'
            }}
          >
            ←
          </button>
          <button
            onClick={next}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              color: 'var(--text-medium)',
              background: 'white'
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
