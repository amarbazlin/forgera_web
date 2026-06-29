'use client';

import { useState } from 'react';

const faqs = [
    {
        q: 'What is Forgera?',
        a: 'Forgera is an AI-powered business operations platform for retail, wholesale, and distribution companies. It centralizes inventory, sales, purchasing, customer credit, and supply chain operations into one intelligent system.',
    },
    {
        q: 'Is Forgera suitable for small businesses?',
        a: 'Yes. Forgera is specifically designed for SMEs and growing multi-location businesses in Sri Lanka. The Starter plan works for single-location businesses, while Growth and Enterprise plans support expansion.',
    },
    {
        q: 'How does the AI assistant work?',
        a: 'You can ask the AI assistant questions about your business in plain language — such as "which products are running low?" or "show me this week\'s sales by branch." It accesses your live operational data to give instant, accurate answers.',
    },
    {
        q: 'Does Forgera support multiple locations?',
        a: 'Yes. Forgera is built around multi-location and warehouse-to-branch workflows. The Growth plan supports up to 5 locations, and the Enterprise plan supports unlimited locations.',
    },
    {
        q: 'What languages does the platform support?',
        a: 'Forgera\'s interface is in English, and the AI assistant understands both English and Sinhala queries to support Sri Lankan business owners and staff.',
    },
    {
        q: 'Is there a free trial available?',
        a: 'Yes. You can start with a 14-day free trial on any plan with no credit card required. Contact us to get started.',
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="section-faq" style={{
            padding: '100px 5%',
            background: '#0d0d0d',
        }}>
            <div style={{ maxWidth: 780, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div className="reveal" style={{
                        display: 'inline-block',
                        background: 'rgba(232,112,13,0.1)', border: '1px solid rgba(232,112,13,0.2)',
                        borderRadius: 50, padding: '5px 14px', marginBottom: 16,
                        fontSize: 12, fontWeight: 600, color: '#E8700D', letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}>FAQ</div>
                    <h2 className="reveal delay-1" style={{
                        fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff',
                    }}>Common questions.</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {faqs.map((faq, i) => (
                        <div key={faq.q} className={`reveal delay-${(i % 3) + 1}`} style={{
                            background: '#111', border: `1px solid ${open === i ? 'rgba(232,112,13,0.3)' : 'rgba(255,255,255,0.07)'}`,
                            borderRadius: 14, overflow: 'hidden',
                            transition: 'border-color 0.3s',
                        }}>
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: '100%', padding: '20px 24px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    background: 'none', color: '#fff',
                                    fontSize: 16, fontWeight: 600, textAlign: 'left',
                                    fontFamily: 'Sora', cursor: 'pointer',
                                }}
                            >
                                {faq.q}
                                <div style={{
                                    width: 28, height: 28, borderRadius: '50%',
                                    background: open === i ? '#E8700D' : 'rgba(255,255,255,0.07)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    flexShrink: 0, transition: 'background 0.3s, transform 0.3s',
                                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                                }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 2V10M2 6H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </button>
                            {open === i && (
                                <div style={{
                                    padding: '0 24px 20px',
                                    fontSize: 15, color: '#777', lineHeight: 1.75,
                                    animation: 'fadeIn 0.2s ease',
                                }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }`}</style>
        </section>
    );
}