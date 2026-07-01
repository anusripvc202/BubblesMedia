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
      borderRadius: '16px',
      padding: '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-dark)' }}>
          Free Tools & Resources
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {tools.map((tool, index) => (
            <button
              key={index}
              onClick={tool.action}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'var(--bg-base)',
                textAlign: 'left',
                width: '100%'
              }}
              className="hover-card"
            >
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>
                {tool.name}
              </span>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Screen Chart Mockup */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '12px' }}>
        <div style={{
          width: '70px',
          height: '42px',
          background: '#1F2937',
          borderRadius: '4px',
          position: 'relative',
          padding: '4px',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '3px'
        }}>
          <div style={{ width: '8px', height: '15px', background: '#34D399', borderRadius: '1px' }}></div>
          <div style={{ width: '8px', height: '25px', background: '#F59E0B', borderRadius: '1px' }}></div>
          <div style={{ width: '8px', height: '32px', background: 'var(--primary)', borderRadius: '1px' }}></div>
          <div style={{ width: '8px', height: '10px', background: '#3B82F6', borderRadius: '1px' }}></div>
          {/* Laptop base */}
          <div style={{
            position: 'absolute',
            bottom: '-4px',
            left: '-6px',
            width: '82px',
            height: '4px',
            background: '#9CA3AF',
            borderRadius: '2px'
          }}></div>
        </div>
      </div>
    </div>
  );
}
