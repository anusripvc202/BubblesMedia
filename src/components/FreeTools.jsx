import React from 'react';

export default function FreeTools({ onOpenCalculator, onOpenSEOAudit }) {
  const tools = [
    { name: 'Website Cost Calculator', action: onOpenCalculator },
    { name: 'SEO Audit Tool', action: onOpenSEOAudit },
    { name: 'GMB Optimization Guide', action: () => alert('Downloading GMB Optimization Guide (PDF)...') },
    { name: 'Digital Marketing Guide', action: () => alert('Downloading Digital Marketing Playbook (PDF)...') }
  ];

  return (
    <div style={{
      background: 'var(--bg-white)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '18px', color: 'var(--secondary)', letterSpacing: '-0.01em' }}>
          Free Tools & Resources
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {tools.map((tool, index) => (
            <button
              key={index}
              onClick={tool.action}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '6px',
                background: 'var(--bg-base)',
                border: '1px solid var(--border-color-light)',
                textAlign: 'left',
                width: '100%',
                transition: 'all 0.2s ease'
              }}
              className="hover-card"
            >
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--secondary)' }}>
                {tool.name}
              </span>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Screen Chart Mockup */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '24px' }}>
        <div style={{
          width: '64px',
          height: '38px',
          background: '#0F172A',
          borderRadius: '4px',
          position: 'relative',
          padding: '4px',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '3px',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ width: '8px', height: '12px', background: '#10B981', borderRadius: '1px' }}></div>
          <div style={{ width: '8px', height: '22px', background: '#F59E0B', borderRadius: '1px' }}></div>
          <div style={{ width: '8px', height: '28px', background: 'var(--primary)', borderRadius: '1px' }}></div>
          <div style={{ width: '8px', height: '8px', background: '#3B82F6', borderRadius: '1px' }}></div>
          {/* Laptop base */}
          <div style={{
            position: 'absolute',
            bottom: '-4px',
            left: '-6px',
            width: '76px',
            height: '4px',
            background: '#94A3B8',
            borderRadius: '2px'
          }}></div>
        </div>
      </div>
    </div>
  );
}
