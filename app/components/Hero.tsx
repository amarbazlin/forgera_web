'use client';

import { useEffect, useState, useRef } from 'react';
import AICard from './AICard';

const SCREENS = [
    {
        label: 'Dashboard',
        src: '/dashboard.webp',
        url: 'os.forgera.app / dashboard',
        chips: [
            { top: '12%', left: '2%', dot: '#4CAF50', label: 'Sales 30d', val: 'Rs. 543.1K' },
            { top: '12%', right: '2%', dot: '#E8700D', label: 'Low Stock', val: '745 items' },
            { bottom: '18%', left: '3%', dot: '#378ADD', label: 'Orders', val: '135 today' },
        ],
    },
    {
        label: 'AI Agent',
        src: '/ai_assistant.webp',
        url: 'os.forgera.app / ai-agent',
        chips: [
            { top: '10%', left: '2%', dot: '#7F77DD', label: 'AI Mode', val: 'Live data' },
            { bottom: '22%', right: '3%', dot: '#4CAF50', label: 'Accuracy', val: '98.3%' },
        ],
    },
];

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(0);
    const heroRef = useRef(null);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={heroRef}
            className="section-hero"
            style={{
                minHeight: '100vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '120px 5% 80px',
                position: 'relative', overflow: 'hidden',
                background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,112,13,0.13) 0%, transparent 70%), #0A0A0A',
            }}
        >
            {/* Glow orb */}
            <div style={{
                position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
                width: 700, height: 400, borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(232,112,13,0.07) 0%, transparent 70%)',
                pointerEvents: 'none', filter: 'blur(40px)',
            }} />

            {/* Heading */}
            <h1 style={{
                opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s ease 0.2s',
                fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 800,
                textAlign: 'center', maxWidth: 820, lineHeight: 1.1,
                color: '#fff', letterSpacing: '-0.02em',
            }}>
                Stop Guessing What to Buy.<br />
                <span style={{ color: '#E8700D' }}>Let AI Decide With You.</span>
            </h1>

            {/* Subheading */}
            <p style={{
                opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s ease 0.35s',
                fontSize: 'clamp(16px, 2vw, 20px)', color: '#888',
                textAlign: 'center', maxWidth: 600, marginTop: 24, lineHeight: 1.7,
            }}>
                Our platform ForgeraAI helps inventory-driven businesses predict demand, prevent stockouts, optimize purchasing, and gain complete visibility into inventory, suppliers, and cash flow—all from one intelligent platform.</p>

            {/* CTAs */}
            <div style={{
                opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.7s ease 0.5s',
                display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center',
            }}>
                <button
                    onClick={() => window.location.href = 'mailto:amar@forgera.app?subject=Contact%20Us%20-%20Forgera'}
                    style={{
                        background: '#E8700D', color: '#fff', borderRadius: 10,
                        padding: '14px 32px', fontSize: 16, fontWeight: 600,
                        transition: 'all 0.25s', boxShadow: '0 0 30px rgba(232,112,13,0.3)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#C45D0A'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 40px rgba(232,112,13,0.45)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#E8700D'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(232,112,13,0.3)'; }}
                >Contact</button>
                <button
                    onClick={() => scrollTo('features')}
                    style={{
                        background: 'transparent', color: '#fff',
                        border: '1px solid rgba(255,255,255,0.18)', borderRadius: 10,
                        padding: '14px 32px', fontSize: 16, fontWeight: 500,
                        transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8700D'; e.currentTarget.style.color = '#E8700D'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = '#fff'; }}
                >See Features</button>
            </div>

            {/* Stats */}
            <div
              className="hero-stats"
              style={{
                  opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.7s ease 0.65s',
                  display: 'flex', gap: 48, marginTop: 64, flexWrap: 'wrap', justifyContent: 'center',
              }}>
                {[
                    { val: '10+', label: 'Modules' },
                    { val: 'Multi', label: 'Location Support' },
                    { val: 'Real-time', label: 'AI Insights' },
                ].map((s) => (
                    <div key={s.label} className="hero-stat-item" style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 28, fontWeight: 800, color: '#E8700D', fontFamily: 'Sora' }}>{s.val}</div>
                        <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>{s.label}</div>
                    </div>
                ))}
            </div>

            {/* AI 3D Card with tabs */}
            <div style={{
                opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.96)',
                transition: 'all 0.9s ease 0.75s',
                marginTop: 72, width: '100%', maxWidth: 900,
            }}>
                <AICard
                    screens={SCREENS as any}
                    currentIndex={currentScreen}
                    onIndexChange={(idx) => setCurrentScreen(idx)}
                    autoRotate={true}
                    showTabs={true}
                    showStatusBar={true}
                    showLabel={true}
                    scrollTriggerConfig={{
                        start: 'top 85%',
                        end: 'top 15%',
                        scrub: 1.5,
                        rotateX: { start: 18, end: 4 },
                        rotateY: { start: -8, end: 0 },
                    }}
                />
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
                @media (max-width: 640px) {
                    .section-hero { padding: 100px 5% 50px !important; }
                    .hero-stats { gap: 24px !important; }
                }
            `}</style>
        </section>
    );
}