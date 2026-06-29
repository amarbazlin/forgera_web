'use client';

import { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        monthly: 'LKR 5,900',
        yearly: 'LKR 59,000',
        desc: 'Perfect for small businesses getting started with smarter inventory management.',
        cta: 'Start Free Trial',
        popular: false,
        features: [
            'Inventory Management',
            'Product & Category Management',
            'Supplier Management',
            'Purchase Orders',
            'Sales Tracking',
            'Finance Dashboard & Cash Flow Overview',
            'Low Stock Alerts',
            'Inventory Reports',
            'PDF & Excel Export',
            'Up to 3 Users',
            'Email Support',
        ],
    },
    {
        name: 'Professional',
        monthly: 'LKR 11,900',
        yearly: 'LKR 119,000',
        desc: 'AI-powered inventory intelligence for growing distributors and SMEs.',
        cta: 'Start Free Trial',
        popular: true,
        features: [
            'Everything in Starter',
            'AI Inventory Advisor',
            'Demand Forecasting',
            'Reorder Recommendations',
            'Dead Stock Detection',
            'Fast Moving Product Analysis',
            'Inventory Health Score',
            'Supplier Performance Analytics',
            'Stockout Prediction',
            'AI Business Insights',
            'Up to 10 Users',
            'Priority Support',
        ],
    },
    {
        name: 'Enterprise',
        monthly: 'LKR 19,900',
        yearly: 'LKR 199,000',
        desc: 'Advanced AI procurement and forecasting for large inventory-driven businesses.',
        cta: 'Contact Sales',
        popular: false,
        features: [
            'Everything in Professional',
            'Advanced Demand Forecasting',
            'Seasonal Demand Prediction',
            'AI Purchase Order Generation',
            'AI Supplier Email Drafting',
            'Purchase Approval Workflow',
            'Multi-Branch Management',
            'Unlimited Users',
            'Advanced Analytics Dashboard',
            'Priority Support',
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
                    }}>Pricing built for growing inventory-driven businesses</h2>
                    <p className="reveal delay-2" style={{ fontSize: 17, color: '#666', marginBottom: 28, maxWidth: 700, margin: '0 auto', lineHeight: 1.6 }}>
                        Choose a plan that fits your business today and scale as your operations grow. Every plan includes secure cloud hosting, continuous updates and intelligent inventory management.
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
                        <span style={{ fontSize: 14, color: yearly ? '#fff' : '#555', fontWeight: yearly ? 600 : 400 }}>Annual</span>
                        <span style={{
                            fontSize: 11, fontWeight: 600, color: '#E8700D',
                            background: 'rgba(232,112,13,0.12)', borderRadius: 50,
                            padding: '2px 8px', marginRight: 4,
                        }}>Save 17%</span>
                    </div>
                </div>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20,
                    alignItems: 'stretch',
                }}>
                    {plans.map((plan, i) => (
                        <div key={plan.name} className={`reveal delay-${i + 1}`} style={{
                            background: plan.popular ? 'linear-gradient(135deg, #1a1200, #111)' : '#111',
                            border: `1px solid ${plan.popular ? 'rgba(232,112,13,0.5)' : 'rgba(255,255,255,0.07)'}`,
                            borderRadius: 20, padding: '32px 28px',
                            position: 'relative', overflow: 'hidden',
                            boxShadow: plan.popular ? '0 0 80px rgba(232,112,13,0.15)' : 'none',
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
                                }}>⭐ Most Popular</div>
                            )}
                            <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', fontFamily: 'Sora', marginBottom: 8 }}>{plan.name}</div>
                            <div style={{ marginBottom: 12 }}>
                                <span style={{ fontSize: 34, fontWeight: 800, color: plan.popular ? '#E8700D' : '#fff', fontFamily: 'Sora' }}>
                                    {yearly ? plan.yearly : plan.monthly}
                                </span>
                                <span style={{ fontSize: 14, color: '#555', marginLeft: 4 }}>
                                    /{yearly ? 'year' : 'mo'}
                                </span>
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

                <div className="reveal" style={{
                    marginTop: 60, padding: '28px 32px', borderRadius: 16,
                    background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                    textAlign: 'center',
                }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 16, fontFamily: 'Sora' }}>
                        All Paid Plans Include
                    </h3>
                    <div style={{
                        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 24px',
                        maxWidth: 700, margin: '0 auto',
                    }}>
                        {[
                            'Secure cloud hosting',
                            'Automatic backups',
                            'Continuous software updates',
                            'SSL encryption',
                            'Mobile responsive dashboard',
                            'Inventory & supplier management',
                            'Free onboarding',
                            'Email support',
                        ].map(item => (
                            <span key={item} style={{ fontSize: 14, color: '#888', display: 'flex', alignItems: 'center', gap: 8 }}>
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7" stroke="rgba(232,112,13,0.3)" />
                                    <path d="M5 8L7 10L11 6" stroke="#E8700D" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}