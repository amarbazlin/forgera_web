'use client';

export default function CTA() {
  return (
    <section className="section-cta" style={{
      padding: '100px 5%',
      background: '#0A0A0A',
    }}>
      <div style={{
        maxWidth: 900, margin: '0 auto',
        background: 'linear-gradient(135deg, #1a0e00 0%, #111 50%, #0e0a00 100%)',
        border: '1px solid rgba(232,112,13,0.25)',
        borderRadius: 28, padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 80px)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        boxShadow: '0 0 100px rgba(232,112,13,0.07)',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 300, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(232,112,13,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="reveal-scale" style={{
          display: 'inline-block',
          background: 'rgba(232,112,13,0.1)', border: '1px solid rgba(232,112,13,0.25)',
          borderRadius: 50, padding: '5px 16px', marginBottom: 20,
          fontSize: 12, fontWeight: 600, color: '#E8700D', letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>Ready to get started?</div>

        <h2 className="reveal delay-1" style={{
          fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 800,
          color: '#fff', marginBottom: 20, position: 'relative',
        }}>
          Take control of your<br />
          <span style={{ color: '#E8700D' }}>business operations.</span>
        </h2>

        <p className="reveal delay-2" style={{
          fontSize: 18, color: '#666', maxWidth: 520, margin: '0 auto 36px',
          lineHeight: 1.7, position: 'relative',
        }}>
          Join businesses across Sri Lanka who are using Forgera to run smarter, move faster, and grow with confidence.
        </p>

        <div className="reveal delay-3" style={{
          display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap',
          position: 'relative',
        }}>
          <button
            onClick={() => window.location.href = 'mailto:amar@forgera.app?subject=Contact%20Us%20-%20Forgera'}
            style={{
              background: 'transparent', color: '#aaa',
              border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10,
              padding: '14px 36px', fontSize: 16, fontWeight: 500,
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8700D'; e.currentTarget.style.color = '#E8700D'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#aaa'; }}
          >Contact Us</button>
        </div>
      </div>
    </section>
  );
}