'use client';
import React, { useState } from 'react';

export default function SignInModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('register'); // Default to register tab based on request
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const tempErrors = {};
    if (tab === 'register' && !name.trim()) tempErrors.name = 'Full name is required';
    
    if (!email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (tab === 'register' && !phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    }
    
    if (!password) {
      tempErrors.password = 'Password is required';
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }
    
    if (tab === 'register' && password !== confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
        setConfirmPassword('');
        onClose();
      }, 2000);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 23, 42, 0.45)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 110000,
      padding: '40px 20px',
      overflowY: 'auto',
      pointerEvents: 'auto',
    }}>
      {/* Backdrop closer click */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

      {/* Main card container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '820px',
        background: 'var(--bg-white)',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(170, 223, 0, 0.05)',
        margin: 'auto',
        display: 'flex',
        overflow: 'hidden',
        zIndex: 2,
        animation: 'modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}>
        
        {/* LEFT COLUMN: Brand Showcase (Desktop only, hidden on mobile) */}
        <div className="modal-left-column" style={{
          width: '340px',
          background: 'linear-gradient(135deg, var(--secondary) 0%, #1e293b 100%)',
          color: '#ffffff',
          padding: '44px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle graphic background nodes */}
          <div style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'rgba(170, 223, 0, 0.06)',
            top: '-20px',
            left: '-20px',
          }} />
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.04)',
            bottom: '-40px',
            right: '-40px',
          }} />

          {/* Top block */}
          <div style={{ zIndex: 2 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              fontWeight: '800',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '32px',
            }}>
              🫧 Bubbles Media
            </span>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', lineHeight: '1.25', marginBottom: '24px', letterSpacing: '-0.02em', color: '#ffffff' }}>
              Accelerate Your Digital Presence
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Instant Quote Estimations', desc: 'Configure pricing metrics on the go' },
                { title: 'Personal Architect', desc: 'Direct mapping with solutions architect' },
                { title: 'Order Tracking', desc: 'Real-time live progress updates' }
              ].map((perk, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: 'rgba(170, 223, 0, 0.15)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                    fontSize: '0.65rem',
                    fontWeight: '900'
                  }}>✓</div>
                  <div>
                    <h5 style={{ fontSize: '0.8rem', fontWeight: '800', margin: '0 0 2px 0', color: '#fff' }}>{perk.title}</h5>
                    <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Trust footprint */}
          <div style={{ zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            <span style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', fontWeight: '600' }}>
              Trusted by 5,000+ businesses in India.
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Form Block */}
        <div style={{
          flex: 1,
          padding: '40px 32px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '0',
        }}>
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-medium)',
              fontSize: '0.9rem',
              transition: 'background 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e2e8f0'}
            onMouseLeave={e => e.currentTarget.style.background = '#f1f5f9'}
          >
            ✕
          </button>

          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                boxShadow: '0 8px 20px rgba(16, 185, 129, 0.15)'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '8px' }}>
                {tab === 'login' ? 'Welcome Back!' : 'Registration Complete!'}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                {tab === 'login' ? 'Signing into your profile...' : 'Creating your account dashboard...'}
              </p>
            </div>
          ) : (
            <div>
              {/* Form title */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--secondary)' }}>
                  {tab === 'login' ? 'Welcome Back' : 'Create Account'}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '4px' }}>
                  {tab === 'login' ? 'Sign in to access your digital workspace' : 'Get access to premium features and instant quotes'}
                </p>
              </div>

              {/* Tabs Wrapper (Pill selectors) */}
              <div style={{
                display: 'flex',
                background: '#f1f5f9',
                borderRadius: '10px',
                padding: '4px',
                marginBottom: '20px',
              }}>
                <button
                  type="button"
                  onClick={() => { setTab('login'); setErrors({}); }}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: tab === 'login' ? '#fff' : 'transparent',
                    color: tab === 'login' ? 'var(--secondary)' : 'var(--text-medium)',
                    boxShadow: tab === 'login' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => { setTab('register'); setErrors({}); }}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: tab === 'register' ? '#fff' : 'transparent',
                    color: tab === 'register' ? 'var(--secondary)' : 'var(--text-medium)',
                    boxShadow: tab === 'register' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  Register
                </button>
              </div>

              {/* Form details */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                {/* Full name (Register only) */}
                {tab === 'register' && (
                  <div>
                    <label style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </span>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 38px',
                          fontSize: '0.82rem',
                          borderRadius: '8px',
                          border: errors.name ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                          background: 'var(--bg-white)',
                          color: 'var(--text-dark)',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.currentTarget.style.borderColor = errors.name ? '#ef4444' : 'var(--border-color)'}
                      />
                    </div>
                    {errors.name && <span style={{ fontSize: '0.7rem', color: '#ef4444', marginTop: '3px', display: 'block', fontWeight: '600' }}>{errors.name}</span>}
                  </div>
                )}

                {/* Email address */}
                <div>
                  <label style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 38px',
                        fontSize: '0.82rem',
                        borderRadius: '8px',
                        border: errors.email ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                        background: 'var(--bg-white)',
                        color: 'var(--text-dark)',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.currentTarget.style.borderColor = errors.email ? '#ef4444' : 'var(--border-color)'}
                    />
                  </div>
                  {errors.email && <span style={{ fontSize: '0.7rem', color: '#ef4444', marginTop: '3px', display: 'block', fontWeight: '600' }}>{errors.email}</span>}
                </div>

                {/* Phone number (Register only) */}
                {tab === 'register' && (
                  <div>
                    <label style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Phone Number</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </span>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9876543210"
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 38px',
                          fontSize: '0.82rem',
                          borderRadius: '8px',
                          border: errors.phone ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                          background: 'var(--bg-white)',
                          color: 'var(--text-dark)',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : 'var(--border-color)'}
                      />
                    </div>
                    {errors.phone && <span style={{ fontSize: '0.7rem', color: '#ef4444', marginTop: '3px', display: 'block', fontWeight: '600' }}>{errors.phone}</span>}
                  </div>
                )}

                {/* Password */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', margin: 0 }}>Password</label>
                    {tab === 'login' && (
                      <a href="#forgot" style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: '800', textDecoration: 'none' }}>Forgot Password?</a>
                    )}
                  </div>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </span>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 38px',
                        fontSize: '0.82rem',
                        borderRadius: '8px',
                        border: errors.password ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                        background: 'var(--bg-white)',
                        color: 'var(--text-dark)',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.currentTarget.style.borderColor = errors.password ? '#ef4444' : 'var(--border-color)'}
                    />
                  </div>
                  {errors.password && <span style={{ fontSize: '0.7rem', color: '#ef4444', marginTop: '3px', display: 'block', fontWeight: '600' }}>{errors.password}</span>}
                </div>

                {/* Confirm Password (Register only) */}
                {tab === 'register' && (
                  <div>
                    <label style={{ fontSize: '0.72rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Confirm Password</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      </span>
                      <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 38px',
                          fontSize: '0.82rem',
                          borderRadius: '8px',
                          border: errors.confirmPassword ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                          background: 'var(--bg-white)',
                          color: 'var(--text-dark)',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.currentTarget.style.borderColor = errors.confirmPassword ? '#ef4444' : 'var(--border-color)'}
                      />
                    </div>
                    {errors.confirmPassword && <span style={{ fontSize: '0.7rem', color: '#ef4444', marginTop: '3px', display: 'block', fontWeight: '600' }}>{errors.confirmPassword}</span>}
                  </div>
                )}

                {/* Keep me signed in (Login only) */}
                {tab === 'login' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0' }}>
                    <input type="checkbox" id="rememberMe" style={{ cursor: 'pointer', width: '14px', height: '14px', accentColor: 'var(--primary)' }} />
                    <label htmlFor="rememberMe" style={{ fontSize: '0.75rem', color: 'var(--text-medium)', cursor: 'pointer', fontWeight: '500' }}>
                      Keep me signed in on this device
                    </label>
                  </div>
                )}

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{
                    width: '100%',
                    marginTop: '8px',
                    padding: '12px',
                    height: '44px',
                    fontWeight: '800',
                    fontSize: '0.86rem',
                    border: 'none',
                  }}
                >
                  {tab === 'login' ? 'Sign In to Account' : 'Create Free Account'}
                </button>
              </form>

              {/* Social Logins Divider */}
              <div style={{ display: 'flex', alignItems: 'center', margin: '22px 0 14px', gap: '10px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.06)' }} />
                <span style={{ fontSize: '0.66rem', fontWeight: '800', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Or Continue With
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.06)' }} />
              </div>

              {/* Social Logins Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px',
                    background: '#f8fafc',
                    border: '1px solid var(--border-color-light)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: 'var(--secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = 'var(--border-color-light)'; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px',
                    background: '#f8fafc',
                    border: '1px solid var(--border-color-light)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: 'var(--secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = 'var(--border-color-light)'; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalSlideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 768px) {
          .modal-left-column {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
