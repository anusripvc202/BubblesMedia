import React, { useState } from 'react';

export default function SignInModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('login'); // 'login' or 'register'
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
    if (tab === 'register' && !name.trim()) tempErrors.name = 'Full Name is required';
    
    if (!email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Email is invalid';
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
      }, 2500);
    }
  };

  return (
    <div className="overlay" style={{ padding: '20px', zIndex: 1000 }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '440px',
        padding: '32px 28px',
        borderRadius: '24px',
        background: '#fff',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(170, 223, 0, 0.05)',
        position: 'relative',
        animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        overflow: 'hidden'
      }}>
        {/* Top brand accent stripe */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)' }} />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '1rem',
            color: 'var(--text-light)',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e2e8f0'}
          onMouseLeave={e => e.currentTarget.style.background = '#f1f5f9'}
        >
          ✕
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{
              background: '#DEF7EC',
              color: '#03543F',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              boxShadow: '0 8px 20px rgba(3, 84, 63, 0.12)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '8px' }}>
              {tab === 'login' ? 'Welcome Back!' : 'Account Created Successfully!'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-medium)', lineHeight: '1.5' }}>
              {tab === 'login' ? 'Signing you into your dashboard...' : 'Preparing your workspace tools...'}
            </p>
          </div>
        ) : (
          <div>
            {/* Header Title */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.38rem', fontWeight: '900', color: 'var(--secondary)' }}>
                {tab === 'login' ? 'Access Portal' : 'Join Tech24'}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '4px' }}>
                {tab === 'login' ? 'Sign in to manage your services and orders' : 'Get access to premium features and instant quotes'}
              </p>
            </div>

            {/* Tab Selectors */}
            <div style={{
              display: 'flex',
              background: '#f8fafc',
              borderRadius: '10px',
              padding: '4px',
              marginBottom: '24px',
              border: '1px solid var(--border-color-light)'
            }}>
              <button
                onClick={() => { setTab('login'); setErrors({}); }}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  background: tab === 'login' ? '#fff' : 'transparent',
                  color: tab === 'login' ? 'var(--secondary)' : 'var(--text-medium)',
                  boxShadow: tab === 'login' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab('register'); setErrors({}); }}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  background: tab === 'register' ? '#fff' : 'transparent',
                  color: tab === 'register' ? 'var(--secondary)' : 'var(--text-medium)',
                  boxShadow: tab === 'register' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                Register
              </button>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {tab === 'register' && (
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ borderColor: errors.name ? '#EF4444' : 'var(--border-color)', height: '42px', fontSize: '0.84rem' }}
                  />
                  {errors.name && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.name}</span>}
                </div>
              )}

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. alex@company.com"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ borderColor: errors.email ? '#EF4444' : 'var(--border-color)', height: '42px', fontSize: '0.84rem' }}
                />
                {errors.email && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.email}</span>}
              </div>

              {tab === 'register' && (
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    className="form-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ borderColor: errors.phone ? '#EF4444' : 'var(--border-color)', height: '42px', fontSize: '0.84rem' }}
                  />
                  {errors.phone && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.phone}</span>}
                </div>
              )}

              <div className="form-group" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <label className="form-label" style={{ margin: 0 }}>Password</label>
                  {tab === 'login' && (
                    <a href="#forgot" style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>
                      Forgot Password?
                    </a>
                  )}
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ borderColor: errors.password ? '#EF4444' : 'var(--border-color)', height: '42px', fontSize: '0.84rem' }}
                />
                {errors.password && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.password}</span>}
              </div>

              {tab === 'register' && (
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="form-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ borderColor: errors.confirmPassword ? '#EF4444' : 'var(--border-color)', height: '42px', fontSize: '0.84rem' }}
                  />
                  {errors.confirmPassword && <span style={{ fontSize: '0.7rem', color: '#EF4444', marginTop: '2px', display: 'block' }}>{errors.confirmPassword}</span>}
                </div>
              )}

              {tab === 'login' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0' }}>
                  <input type="checkbox" id="rememberMe" style={{ cursor: 'pointer', width: '14px', height: '14px', accentColor: 'var(--primary)' }} />
                  <label htmlFor="rememberMe" style={{ fontSize: '0.75rem', color: 'var(--text-medium)', cursor: 'pointer', fontWeight: '500' }}>
                    Keep me signed in on this device
                  </label>
                </div>
              )}

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '6px', padding: '12px', height: '44px', fontWeight: '800', fontSize: '0.86rem' }}>
                {tab === 'login' ? 'Sign In to Account' : 'Create Free Account'}
              </button>
            </form>

            {/* Social Logins Divider */}
            <div style={{ display: 'flex', alignItems: 'center', margin: '24px 0 16px', gap: '10px' }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.06)' }} />
              <span style={{ fontSize: '0.68rem', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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
  );
}
