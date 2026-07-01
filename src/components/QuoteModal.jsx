import React, { useState, useEffect } from 'react';

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('10k-25k');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      if (initialData.estimatedPrice) {
        setBudget(initialData.estimatedPrice > 30000 ? '50k+' : '10k-25k');
        setDetails(`Custom calculated website setup specs:
Type: ${initialData.type}
Pages: ${initialData.pages}
Design complexity: ${initialData.design}
Auth: ${initialData.integrations.login ? 'Yes' : 'No'}
Payment: ${initialData.integrations.payment ? 'Yes' : 'No'}
SEO: ${initialData.integrations.seo ? 'Yes' : 'No'}
Chat: ${initialData.integrations.chat ? 'Yes' : 'No'}
Calculated Estimate: ₹${initialData.estimatedPrice}`);
      } else if (initialData.title) {
        setDetails(`Interested in package: ${initialData.title} (${initialData.price || ''})`);
      }
    }
  }, [initialData]);

  if (!isOpen) return null;

  const validate = () => {
    const tempErrors = {};
    if (!name.trim()) tempErrors.name = 'Name is required';
    if (!email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(phone)) {
      tempErrors.phone = 'Phone number must be valid';
    }
    if (!details.trim()) tempErrors.details = 'Project details are required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setDetails('');
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="overlay" style={{ padding: '20px' }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '500px',
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

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            {/* Green Tick Success Graphic */}
            <div style={{
              background: '#DEF7EC',
              color: '#03543F',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px' }}>Specification Submitted!</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
              Thank you, <strong>{name}</strong>! Our project advisor will contact you at <strong>{phone}</strong> or <strong>{email}</strong> within the next 2 hours to confirm details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', marginBottom: '8px' }}>Get a Free Expert Quote</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '24px' }}>
              Describe your project requirement and get a custom roadmap from our experts.
            </p>

            {/* Name */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderColor: errors.name ? '#EF4444' : 'var(--border-color)' }}
              />
              {errors.name && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.name}</span>}
            </div>

            {/* Email & Phone grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. john@example.com"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderColor: errors.email ? '#EF4444' : 'var(--border-color)' }}
                />
                {errors.email && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ borderColor: errors.phone ? '#EF4444' : 'var(--border-color)' }}
                />
                {errors.phone && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.phone}</span>}
              </div>
            </div>

            {/* Budget */}
            <div className="form-group">
              <label className="form-label">Approximate Budget</label>
              <select
                className="form-input"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                style={{ background: 'white' }}
              >
                <option value="under-10k">Under ₹10,000</option>
                <option value="10k-25k">₹10,000 - ₹25,000</option>
                <option value="25k-50k">₹25,000 - ₹50,000</option>
                <option value="50k+">Above ₹50,000</option>
              </select>
            </div>

            {/* Project Details */}
            <div className="form-group">
              <label className="form-label">Project Requirements</label>
              <textarea
                placeholder="Describe what features you need, target timeline, or choose items..."
                rows="4"
                className="form-input"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                style={{
                  borderColor: errors.details ? '#EF4444' : 'var(--border-color)',
                  resize: 'none',
                  fontSize: '0.85rem'
                }}
              ></textarea>
              {errors.details && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.details}</span>}
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px', padding: '12px' }}>
              Request Custom Pricing Roadmap
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
