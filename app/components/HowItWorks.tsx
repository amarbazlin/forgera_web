'use client';

const steps = [
    {
        num: '01',
        title: 'Connect Your Business',
        desc: 'Set up your locations, product catalogue, suppliers, and teams in minutes. Forgera adapts to your existing structure.',
    },
    {
        num: '02',
        title: 'Centralize Operations',
        desc: 'All your inventory, orders, purchases, and customer accounts flow into one unified system — across every branch.',
    },
    {
        num: '03',
        title: 'Gain Intelligence',
        desc: 'The AI layer analyzes your data to surface insights, predict demand, flag risks, and recommend actions automatically.',
    },
    {
        num: '04',
        title: 'Scale with Confidence',
        desc: 'Add new locations, products, and teams as you grow. Forgera scales with your business without added complexity.',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section-howitworks" style={{
            padding: '100px 5%',
            background: 'linear-gradient(180deg, #0A0A0A 0%, #0f0f0f 100%)',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{
                position: 'absolute', right: -200, top: '50%', transform: 'translateY(-50%)',
                width: 500, height: 500, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(232,112,13,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 72 }}>
                    <div className="reveal" style={{
                        display: 'inline-block',
                        background: 'rgba(232,112,13,0.1)', border: '1px solid rgba(232,112,13,0.2)',
                        borderRadius: 50, padding: '5px 14px', marginBottom: 16,
                        fontSize: 12, fontWeight: 600, color: '#E8700D', letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}>How it Works</div>
                    <h2 className="reveal delay-1" style={{
                        fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff',
                    }}>
                        Up and running in <span style={{ color: '#E8700D' }}>four steps.</span>
                    </h2>
                </div>

                <div
                    className="how-it-works-grid"
                    style={{
                        display: 'grid',
                        gap: 20,
                        position: 'relative',
                    }}
                >
                    {steps.map((step, i) => (
                        <div key={step.num} className={`reveal delay-${i + 1}`} style={{ position: 'relative', padding: '0 8px' }}>
                            {i < steps.length - 1 && (
                                <div style={{
                                    position: 'absolute', top: 36, left: '60%', right: '-10%',
                                    height: 1, background: 'linear-gradient(90deg, rgba(232,112,13,0.3), transparent)',
                                    display: 'block',
                                }} className="step-connector" />
                            )}

                            <div style={{
                                background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                                borderRadius: 16, padding: '32px 24px',
                                height: '100%', position: 'relative', zIndex: 1,
                            }}>
                                <div style={{
                                    fontSize: 42, fontWeight: 800, fontFamily: 'Sora',
                                    color: 'rgba(232,112,13,0.15)', lineHeight: 1, marginBottom: 20,
                                }}>{step.num}</div>
                                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12, fontFamily: 'Sora' }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{step.desc}</p>
                                <div style={{
                                    marginTop: 24, width: 32, height: 3, borderRadius: 2,
                                    background: '#E8700D',
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .how-it-works-grid {
                    grid-template-columns: repeat(4, 1fr);
                }
                @media (max-width: 768px) {
                    .how-it-works-grid { grid-template-columns: 1fr 1fr !important; }
                    .step-connector { display: none !important; }
                }
                @media (max-width: 480px) {
                    .how-it-works-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}