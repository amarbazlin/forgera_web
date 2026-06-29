'use client';

'use client';

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
                <line x1="7" y1="9.5" x2="17" y2="9.5"/>
            </svg>
        ),
        title: 'Inventory Management',
        desc: 'Real-time stock tracking across multiple locations and warehouses. Get instant alerts for low stock, expiry, and movement anomalies.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <rect x="4" y="14" width="4" height="6" rx="1"/>
                <rect x="10" y="10" width="4" height="10" rx="1"/>
                <rect x="16" y="6" width="4" height="14" rx="1"/>
                <polyline points="6 14 12 10 18 6"/>
            </svg>
        ),
        title: 'Sales & Order Tracking',
        desc: 'Monitor sales performance, customer orders, and revenue trends. Drill down by branch, product, or time period.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                <polyline points="13 9 15 11 19 7"/>
            </svg>
        ),
        title: 'Purchasing & Suppliers',
        desc: 'Streamline purchase orders, track supplier performance, and automate reorder triggers based on stock thresholds.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <rect x="1" y="7" width="22" height="14" rx="2"/>
                <line x1="1" y1="11" x2="23" y2="11"/>
                <path d="M12 4l-5 3v4c0 3.5 3 6.5 5 7 2-.5 5-3.5 5-7V7l-5-3z"/>
            </svg>
        ),
        title: 'Customer Credit Control',
        desc: 'Manage credit limits, outstanding balances, and payment histories for your wholesale and retail customers.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <path d="M12 8l1.5 3 3 1.5-3 1.5L12 17l-1.5-3-3-1.5 3-1.5Z"/>
            </svg>
        ),
        title: 'AI Agent',
        desc: 'Ask questions about your business in plain language. Get instant answers, forecasts, and recommendations from your operational data.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                <line x1="3" y1="20" x2="21" y2="20"/>
                <line x1="3" y1="20" x2="3" y2="4"/>
                <polyline points="4 16 10 14 13 10 17 9"/>
                <polyline points="17 9 21 5" strokeDasharray="2 3"/>
            </svg>
        ),
        title: 'AI Analytics & Forecasting',
        desc: 'Demand forecasting, stock optimization, and financial decision support powered by your historical and real-time data.',
    },
];

export default function Features() {
    return (
        <section id="features" className="section-features" style={{
            padding: '100px 5%',
            background: '#0A0A0A',
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <div className="reveal" style={{
                        display: 'inline-block',
                        background: 'rgba(232,112,13,0.1)', border: '1px solid rgba(232,112,13,0.2)',
                        borderRadius: 50, padding: '5px 14px', marginBottom: 16,
                        fontSize: 12, fontWeight: 600, color: '#E8700D', letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}>Features</div>
                    <h2 className="reveal delay-1" style={{
                        fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 800, color: '#fff',
                        marginBottom: 16,
                    }}>
                        Everything your business needs.<br />
                        <span style={{ color: '#E8700D' }}>All in one platform.</span>
                    </h2>
                    <p className="reveal delay-2" style={{ fontSize: 18, color: '#666', maxWidth: 560, margin: '0 auto' }}>
                        From stock management to AI-powered insights, Forgera covers every layer of your operations.
                    </p>
                </div>

                {/* Grid */}
                <div
                    className="features-grid"
                    style={{
                        display: 'grid',
                        gap: 20,
                    }}>
                    {features.map((f, i) => (
                        <div
                            key={f.title}
                            className={`reveal delay-${Math.min(i % 4 + 1, 5)}`}
                            style={{
                                background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                                borderRadius: 16, padding: '28px 24px',
                                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                                cursor: 'default',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(232,112,13,0.3)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: 48, height: 48, borderRadius: 12,
                                background: 'rgba(232,112,13,0.12)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                fontSize: 22, marginBottom: 16,
                            }}>{f.icon}</div>
                            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: 'Sora' }}>
                                {f.title}
                            </h3>
                            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}