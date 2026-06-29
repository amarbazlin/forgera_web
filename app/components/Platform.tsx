'use client';

import AICard from './AICard';

const pillars = [
    {
        label: 'Retail',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 21V14H8v7"/>
                <polyline points="2 7 12 2 22 7"/>
                <line x1="5" y1="11" x2="7" y2="11"/>
                <line x1="17" y1="11" x2="19" y2="11"/>
            </svg>
        ),
        points: ['POS-ready inventory sync', 'Customer credit accounts', 'Daily sales reporting'],
    },
    {
        label: 'Wholesale',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <rect x="3" y="4" width="18" height="16" rx="2"/>
                <line x1="9" y1="4" x2="9" y2="20"/>
                <line x1="15" y1="4" x2="15" y2="20"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <line x1="3" y1="14" x2="21" y2="14"/>
            </svg>
        ),
        points: ['Bulk order management', 'Trade pricing tiers', 'Supplier coordination'],
    },
    {
        label: 'Distribution',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <rect x="1" y="13" width="13" height="5" rx="2"/>
                <rect x="11" y="8" width="8" height="5" rx="2"/>
                <line x1="19" y1="13" x2="19" y2="16"/>
                <circle cx="5" cy="18" r="2"/>
                <circle cx="15" cy="18" r="2"/>
                <path d="M23 10l-3-3-3 3"/>
            </svg>
        ),
        points: ['Warehouse-to-branch flow', 'Dispatch tracking', 'Route-level visibility'],
    },
];

const AI_SCREENS = [
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

export default function Platform() {
    return (
        <section id="platform" className="section-platform" style={{
            padding: '100px 5%',
            background: '#0A0A0A',
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                {/* Two-column layout */}
                <div style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
                    alignItems: 'center', marginBottom: 100,
                }} className="platform-grid">
                    {/* Left */}
                    <div>
                        <div className="reveal-left" style={{
                            display: 'inline-block',
                            background: 'rgba(232,112,13,0.1)', border: '1px solid rgba(232,112,13,0.2)',
                            borderRadius: 50, padding: '5px 14px', marginBottom: 16,
                            fontSize: 12, fontWeight: 600, color: '#E8700D', letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                        }}>Intelligence Layer</div>
                        <h2 className="reveal-left delay-1" style={{
                            fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, color: '#fff',
                            marginBottom: 20,
                        }}>
                            Beyond record-keeping.<br />
                            <span style={{ color: '#E8700D' }}>Actual intelligence.</span>
                        </h2>
                        <p className="reveal-left delay-2" style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 32 }}>
                            Traditional ERPs store data. Forgera understands it. Our AI layer continuously analyzes your operations to surface what matters — before problems become costly.
                        </p>
                        {[
                            'Ask your data anything in plain language',
                            'Demand forecasting based on historical patterns',
                            'Automatic reorder recommendations',
                            'Branch-level performance comparison',
                        ].map((item, i) => (
                            <div key={item} className={`reveal-left delay-${i + 2}`} style={{
                                display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14,
                            }}>
                                <div style={{
                                    width: 20, height: 20, borderRadius: '50%',
                                    background: 'rgba(232,112,13,0.15)', border: '1px solid rgba(232,112,13,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0, marginTop: 2,
                                }}>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M2 5L4.5 7.5L8 3" stroke="#E8700D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span style={{ fontSize: 15, color: '#aaa' }}>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right — AI 3D Card */}
                    <div className="reveal-right">
                        <AICard
                            screens={AI_SCREENS as any}
                            autoRotate={true}
                            showTabs={false}
                            showStatusBar={true}
                            showLabel={false}
                            scrollTriggerConfig={{
                                start: 'top 85%',
                                end: 'top 15%',
                                scrub: 1.5,
                                rotateX: { start: -12, end: 4 },
                                rotateY: { start: 10, end: 0 },
                            }}
                        />
                    </div>
                </div>

                {/* Built for section */}
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <h2 className="reveal" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff' }}>
                        Built for <span style={{ color: '#E8700D' }}>every business type.</span>
                    </h2>
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    maxWidth: 900,
                    margin: '0 auto',
                    gap: 20,
                }}>
                    {pillars.map((p, i) => (
                        <div key={p.label} className={`reveal delay-${i + 1}`} style={{
                            background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: 16, padding: '28px 24px',
                            transition: 'border-color 0.3s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(232,112,13,0.3)'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                        >
                            <div style={{
                                width: 48, height: 48, borderRadius: 12,
                                background: 'rgba(232,112,13,0.12)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                marginBottom: 16,
                            }}>{p.icon}</div>
                            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 16, fontFamily: 'Sora' }}>{p.label}</h3>
                            {p.points.map(pt => (
                                <div key={pt} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
                                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8700D', flexShrink: 0 }} />
                                    <span style={{ fontSize: 14, color: '#888' }}>{pt}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .platform-grid { grid-template-columns: 1fr !important; gap: 40px !important; margin-bottom: 50px !important; }
                }
                @media (max-width: 640px) {
                    .section-platform { padding: 60px 5% !important; }
                    .platform-grid { gap: 28px !important; margin-bottom: 40px !important; }
                }
            `}</style>
        </section>
    );
}