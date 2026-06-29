'use client';

import { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        monthly: 'LKR 9,900',
        yearly: 'LKR 7,900',
        desc: 'Perfect for single-location small businesses getting started.',
        cta: 'Get started',
        popular: false,
        features: [
            '1 location / branch',
            'Inventory management',
            'Sales & purchase orders',
            'Customer credit control',
            'Basic reporting',
            'Email support',
        ],
    },
    {
        name: 'Growth',
        monthly: 'LKR 24,900',
        yearly: 'LKR 19,900',
        desc: 'For growing businesses with multiple locations and teams.',
        cta: 'Get started',
        popular: true,
        features: [
            'Up to 5 locations',
            'Everything in Starter',
            'Multi-branch stock flow',
            'AI-powered insights',
            'Demand forecasting',
            'WhatsApp notifications',
            'Priority support',
        ],
    },
    {
        name: 'Enterprise',
        monthly: 'Custom',
        yearly: 'Custom',
        desc: 'For large distributors and multi-entity businesses.',
        cta: 'Contact us',
        popular: false,
        features: [
            'Unlimited locations',
            'Everything in Growth',
            'Full AI assistant access',
            'Custom integrations',
            'Dedicated account manager',
            'SLA guarantee',
            'On-site onboarding',
        ],
    },
];

export default function Pricing() {
    const [yearly, setYearly] = useState(false);

    return (
        <section id="pricing" className="section-pricing" style={{
            padding: '100px 5%',
            background: 'linear-gradient(180deg, #0A0A0A 0%, #0d0d0d 100%)',
        }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 52 }}>
                    <div className="reveal" style={{
                        display: 'inline-block',
                        background: 'rgba(232,112,13,0.1)', border: '1px solid rgba(232,112,13,0.2)',
                        borderRadius: 50, padding: '5px 14px', marginBottom: 16,
                        fontSize: 12, fontWeight: 600, color: '#E8700D', letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}>Pricing</div>
                    <h2 className="reveal delay-1" style={{
                        fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 16,
                    }}>Choose your plan.</h2>
                    <p className="reveal delay-2" style={{ fontSize: 17, color: '#666', marginBottom: 28 }}>
                        Transparent pricing. No hidden fees. Scale as you grow.
                    </p>

                    {/* Toggle */}
                    <div className="reveal delay-3" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 14,
                        background: '#111', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 50, padding: '6px 10px',
                    }}>
                        <span style={{ fontSize: 14, color: yearly ? '#555' : '#fff', fontWeight: yearly ? 400 : 600, paddingLeft: 6 }}>Monthly</span>
                        <div
                            onClick={() => setYearly(!yearly)}
                            style={{
                                width: 44, height: 24, borderRadius: 12,
                                background: yearly ? '#E8700D' : '#333',
                                position: 'relative', cursor: 'pointer',
                                transition: 'background 0.3s',
                            }}
                        >
                            <div style={{
                                position: 'absolute', top: 3, left: yearly ? 23 : 3,
                                width: 18, height: 18, borderRadius: '50%', background: '#fff',
                                transition: 'left 0.3s',
                            }} />
                        </div>
                        <span style={{ fontSize: 14, color: yearly ? '#fff' : '#555', fontWeight: yearly ? 600 : 400 }}>Yearly</span>
                        <span style={{
                            fontSize: 11, fontWeight: 600, color: '#E8700D',
                            background: 'rgba(232,112,13,0.12)', borderRadius: 50,
                            padding: '2px 8px', marginRight: 4,
                        }}>20% OFF</span>
                    </div>
                </div>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20,
                    alignItems: 'stretch',
                }}>
                    {plans.map((plan, i) => (
                        <div key={plan.name} className={`reveal delay-${i + 1}`} style={{
                            background: plan.popular ? 'linear-gradient(135deg, #1a1200, #111)' : '#111',
                            border: `1px solid ${plan.popular ? 'rgba(232,112,13,0.4)' : 'rgba(255,255,255,0.07)'}`,
                            borderRadius: 20, padding: '32px 28px',
                            position: 'relative', overflow: 'hidden',
                            boxShadow: plan.popular ? '0 0 60px rgba(232,112,13,0.1)' : 'none',
                            transition: 'transform 0.3s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute', top: 20, right: 20,
                                    background: '#E8700D', color: '#fff',
                                    fontSize: 11, fontWeight: 700, borderRadius: 50,
                                    padding: '3px 12px',
                                }}>Popular</div>
                            )}
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', fontFamily: 'Sora', marginBottom: 8 }}>{plan.name}</div>
                            <div style={{ marginBottom: 12 }}>
                                <span style={{ fontSize: 34, fontWeight: 800, color: plan.popular ? '#E8700D' : '#fff', fontFamily: 'Sora' }}>
                                    {yearly ? plan.yearly : plan.monthly}
                                </span>
                                {plan.monthly !== 'Custom' && (
                                    <span style={{ fontSize: 14, color: '#555', marginLeft: 4 }}>/mo</span>
                                )}
                            </div>
                            <p style={{ fontSize: 13, color: '#666', marginBottom: 24, lineHeight: 1.6 }}>{plan.desc}</p>

                            <button
                                style={{
                                    width: '100%', padding: '12px', borderRadius: 10,
                                    background: plan.popular ? '#E8700D' : 'transparent',
                                    color: plan.popular ? '#fff' : '#aaa',
                                    border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.15)',
                                    fontSize: 14, fontWeight: 600, marginBottom: 28,
                                    transition: 'all 0.2s',
                                }}
                                onMouseEnter={e => {
                                    if (!plan.popular) { e.currentTarget.style.borderColor = '#E8700D'; e.currentTarget.style.color = '#E8700D'; }
                                    else { e.currentTarget.style.background = '#C45D0A'; }
                                }}
                                onMouseLeave={e => {
                                    if (!plan.popular) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#aaa'; }
                                    else { e.currentTarget.style.background = '#E8700D'; }
                                }}
                            >{plan.cta}</button>

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20 }}>
                                {plan.features.map(f => (
                                    <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                                            <circle cx="8" cy="8" r="7" stroke="rgba(232,112,13,0.3)" />
                                            <path d="M5 8L7 10L11 6" stroke="#E8700D" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span style={{ fontSize: 14, color: '#888' }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}