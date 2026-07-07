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
    if (tab === 'register' && !name.trim()) tempErrors.name = 'Name is required';
    
    if (!email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Email is invalid';
    }
    
    if (tab === 'register' && !phone.trim()) {
      tempErrors.phone = 'Phone is required';
    }
    
    if (!password) {
      tempErrors.password = 'Password is required';
    } else if (password.length < 6) {
      tempErrors.password = 'Min 6 characters';
    }
    
    if (tab === 'register' && password !== confirmPassword) {
      tempErrors.confirmPassword = 'Passwords mismatch';
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
      padding: '20px',
      pointerEvents: 'auto',
    }}>
      {/* Backdrop closer click */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

      {/* Main card container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        background: 'var(--bg-white)',
        borderRadius: '20px',
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 30px rgba(170, 223, 0, 0.04)',
        display: 'flex',
        overflow: 'hidden',
        zIndex: 2,
        animation: 'modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}>
        
        {/* LEFT COLUMN: Brand Showcase (Desktop only, hidden on mobile) */}
        <div className="modal-left-column" style={{
          width: '300px',
          background: 'linear-gradient(135deg, var(--secondary) 0%, #1e293b 100%)',
          color: '#ffffff',
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle graphic background nodes */}
          <div style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(170, 223, 0, 0.05)',
            top: '-20px',
            left: '-20px',
          }} />
          
          {/* Top block */}
          <div style={{ zIndex: 2 }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: '800',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '20px',
            }}>
              🫧 Bubbles Media
            </span>
            
            <h3 style={{ fontSize: '1.35rem', fontWeight: '900', lineHeight: '1.25', marginBottom: '20px', letterSpacing: '-0.02em', color: '#ffffff' }}>
              Accelerate Your Digital Presence
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'Instant Quote Estimations', desc: 'Configure pricing metrics on the go' },
                { title: 'Personal Architect', desc: 'Direct mapping with solutions architect' },
                { title: 'Order Tracking', desc: 'Real-time live progress updates' }
              ].map((perk, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'rgba(170, 223, 0, 0.15)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                    fontSize: '0.6rem',
                    fontWeight: '900'
                  }}>✓</div>
                  <div>
                    <h5 style={{ fontSize: '0.75rem', fontWeight: '800', margin: '0 0 2px 0', color: '#fff' }}>{perk.title}</h5>
                    <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Trust footprint */}
          <div style={{ zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: '16px' }}>
            <span style={{ display: 'block', fontSize: '0.68rem', color: 'rgba(255,255,255,0.6)', fontWeight: '600' }}>
              Trusted by 5,000+ businesses in India.
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Form Block */}
        <div style={{
          flex: 1,
          padding: '28px 24px',
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
              top: '16px',
              right: '16px',
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '26px',
              height: '26px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-medium)',
              fontSize: '0.85rem',
              transition: 'background 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e2e8f0'}
            onMouseLeave={e => e.currentTarget.style.background = '#f1f5f9'}
          >
            ✕
          </button>

          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                boxShadow: '0 6px 16px rgba(16, 185, 129, 0.12)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '6px' }}>
                {tab === 'login' ? 'Welcome Back!' : 'Registration Complete!'}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
                {tab === 'login' ? 'Signing into your profile...' : 'Creating your account dashboard...'}
              </p>
            </div>
          ) : (
            <div>
              {/* Form title */}
              <div style={{ marginBottom: '14px' }}>
                <h3 style={{ fontSize: '1.18rem', fontWeight: '900', color: 'var(--secondary)' }}>
                  {tab === 'login' ? 'Welcome Back' : 'Create Account'}
                </h3>
                <p style={{ fontSize: '0.74rem', color: 'var(--text-light)', marginTop: '2px' }}>
                  {tab === 'login' ? 'Sign in to access your digital workspace' : 'Get access to premium features and instant quotes'}
                </p>
              </div>

              {/* Tabs Wrapper (Pill selectors) */}
              <div style={{
                display: 'flex',
                background: '#f1f5f9',
                borderRadius: '8px',
                padding: '3px',
                marginBottom: '14px',
              }}>
                <button
                  type="button"
                  onClick={() => { setTab('login'); setErrors({}); }}
                  style={{
                    flex: 1,
                    padding: '6px 10px',
                    fontSize: '0.76rem',
                    fontWeight: '800',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    background: tab === 'login' ? '#fff' : 'transparent',
                    color: tab === 'login' ? 'var(--secondary)' : 'var(--text-medium)',
                    boxShadow: tab === 'login' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
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
                    padding: '6px 10px',
                    fontSize: '0.76rem',
                    fontWeight: '800',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    background: tab === 'register' ? '#fff' : 'transparent',
                    color: tab === 'register' ? 'var(--secondary)' : 'var(--text-medium)',
                    boxShadow: tab === 'register' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  Register
                </button>
              </div>

              {/* Form details */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                
                {/* Full name + Phone (Side by side on desktop) */}
                {tab === 'register' ? (
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 150px' }}>
                      <label style={{ fontSize: '0.68rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Full Name</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </span>
                        <input 
                          type="text" 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Alex Morgan"
                          style={{
                            width: '100%',
                            padding: '8px 10px 8px 30px',
                            fontSize: '0.78rem',
                            borderRadius: '6px',
                            border: errors.name ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                            background: 'var(--bg-white)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                      {errors.name && <span style={{ fontSize: '0.64rem', color: '#ef4444', marginTop: '2px', display: 'block' }}>{errors.name}</span>}
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                      <label style={{ fontSize: '0.68rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phone Number</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </span>
                        <input 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="9876543210"
                          style={{
                            width: '100%',
                            padding: '8px 10px 8px 30px',
                            fontSize: '0.78rem',
                            borderRadius: '6px',
                            border: errors.phone ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                            background: 'var(--bg-white)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                      {errors.phone && <span style={{ fontSize: '0.64rem', color: '#ef4444', marginTop: '2px', display: 'block' }}>{errors.phone}</span>}
                    </div>
                  </div>
                ) : null}

                {/* Email address */}
                <div>
                  <label style={{ fontSize: '0.68rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      style={{
                        width: '100%',
                        padding: '8px 10px 8px 30px',
                        fontSize: '0.78rem',
                        borderRadius: '6px',
                        border: errors.email ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                        background: 'var(--bg-white)',
                        color: 'var(--text-dark)',
                        outline: 'none',
                      }}
                    />
                  </div>
                  {errors.email && <span style={{ fontSize: '0.64rem', color: '#ef4444', marginTop: '2px', display: 'block' }}>{errors.email}</span>}
                </div>

                {/* Password / Confirm Password (Side by side on register) */}
                {tab === 'register' ? (
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 150px' }}>
                      <label style={{ fontSize: '0.68rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Password</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </span>
                        <input 
                          type="password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          style={{
                            width: '100%',
                            padding: '8px 10px 8px 30px',
                            fontSize: '0.78rem',
                            borderRadius: '6px',
                            border: errors.password ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                            background: 'var(--bg-white)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                      {errors.password && <span style={{ fontSize: '0.64rem', color: '#ef4444', marginTop: '2px', display: 'block' }}>{errors.password}</span>}
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                      <label style={{ fontSize: '0.68rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Confirm</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </span>
                        <input 
                          type="password" 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="••••••••"
                          style={{
                            width: '100%',
                            padding: '8px 10px 8px 30px',
                            fontSize: '0.78rem',
                            borderRadius: '6px',
                            border: errors.confirmPassword ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                            background: 'var(--bg-white)',
                            color: 'var(--text-dark)',
                            outline: 'none',
                          }}
                        />
                      </div>
                      {errors.confirmPassword && <span style={{ fontSize: '0.64rem', color: '#ef4444', marginTop: '2px', display: 'block' }}>{errors.confirmPassword}</span>}
                    </div>
                  </div>
                ) : (
                  /* Password for Login */
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <label style={{ fontSize: '0.68rem', fontWeight: '800', color: 'var(--text-medium)', textTransform: 'uppercase', margin: 0 }}>Password</label>
                      <a href="#forgot" style={{ fontSize: '0.68rem', color: 'var(--primary)', fontWeight: '800', textDecoration: 'none' }}>Forgot Password?</a>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', display: 'flex', alignItems: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      </span>
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        style={{
                          width: '100%',
                          padding: '8px 10px 8px 30px',
                          fontSize: '0.78rem',
                          borderRadius: '6px',
                          border: errors.password ? '1.5px solid #ef4444' : '1px solid var(--border-color)',
                          background: 'var(--bg-white)',
                          color: 'var(--text-dark)',
                          outline: 'none',
                        }}
                      />
                    </div>
                    {errors.password && <span style={{ fontSize: '0.64rem', color: '#ef4444', marginTop: '2px', display: 'block' }}>{errors.password}</span>}
                  </div>
                )}

                {/* Keep me signed in (Login only) */}
                {tab === 'login' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '2px 0' }}>
                    <input type="checkbox" id="rememberMe" style={{ cursor: 'pointer', width: '13px', height: '13px', accentColor: 'var(--primary)' }} />
                    <label htmlFor="rememberMe" style={{ fontSize: '0.72rem', color: 'var(--text-medium)', cursor: 'pointer', fontWeight: '500' }}>
                      Keep me signed in
                    </label>
                  </div>
                )}

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{
                    width: '100%',
                    marginTop: '4px',
                    padding: '10px',
                    height: '38px',
                    fontWeight: '800',
                    fontSize: '0.82rem',
                    border: 'none',
                    borderRadius: '6px',
                  }}
                >
                  {tab === 'login' ? 'Sign In to Account' : 'Create Free Account'}
                </button>
              </form>

              {/* Social Logins Divider */}
              <div style={{ display: 'flex', alignItems: 'center', margin: '14px 0 10px', gap: '8px' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.05)' }} />
                <span style={{ fontSize: '0.62rem', fontWeight: '800', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Or Continue With
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.05)' }} />
              </div>

              {/* Social Logins Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '8px',
                    background: '#f8fafc',
                    border: '1px solid var(--border-color-light)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    color: 'var(--secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
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
                    gap: '6px',
                    padding: '8px',
                    background: '#f8fafc',
                    border: '1px solid var(--border-color-light)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    color: 'var(--secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
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
          from { transform: translateY(20px); opacity: 0; }
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
