'use client';

const testimonials = [
    {
        name: 'Kasun Perera',
        role: 'Owner, Perera Hardware Distributors',
        location: 'Galle, Sri Lanka',
        text: 'Before Forgera, we had no idea which branch had what stock. Now I get a full picture every morning without calling anyone. The AI assistant alone has saved us hours every week.',
        avatar: 'KP',
    },
    {
        name: 'Nilufar Hashim',
        role: 'Operations Manager, SL Building Materials',
        location: 'Colombo, Sri Lanka',
        text: 'The credit management feature is a game changer for us. We deal with hundreds of wholesale clients and tracking who owes what was a nightmare. Forgera made it effortless.',
        avatar: 'NH',
    },
    {
        name: 'Roshan Fernando',
        role: 'Founder, RF Tiles & Sanitary',
        location: 'Matara, Sri Lanka',
        text: 'We scaled from one showroom to three branches within six months because Forgera gave us the visibility to do it confidently. The multi-location stock tracking is excellent.',
        avatar: 'RF',
    },
];

export default function Testimonials() {
    return (
        <section className="section-testimonials" style={{
            padding: '100px 5%',
            background: '#0A0A0A',
        }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div className="reveal" style={{
                        display: 'inline-block',
                        background: 'rgba(232,112,13,0.1)', border: '1px solid rgba(232,112,13,0.2)',
                        borderRadius: 50, padding: '5px 14px', marginBottom: 16,
                        fontSize: 12, fontWeight: 600, color: '#E8700D', letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}>Testimonials</div>
                    <h2 className="reveal delay-1" style={{
                        fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, color: '#fff',
                    }}>
                        Trusted by businesses across <span style={{ color: '#E8700D' }}>Sri Lanka.</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20,
                }}>
                    {testimonials.map((t, i) => (
                        <div key={t.name} className={`reveal delay-${i + 1}`} style={{
                            background: '#111', border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: 18, padding: '28px 24px',
                            transition: 'border-color 0.3s, transform 0.3s',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(232,112,13,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            {/* Stars */}
                            <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                                {[...Array(5)].map((_, j) => (
                                    <span key={j} style={{ color: '#E8700D', fontSize: 14 }}>★</span>
                                ))}
                            </div>
                            <p style={{ fontSize: 15, color: '#aaa', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
                                "{t.text}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{
                                    width: 42, height: 42, borderRadius: '50%',
                                    background: 'rgba(232,112,13,0.15)', border: '1px solid rgba(232,112,13,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 13, fontWeight: 700, color: '#E8700D',
                                }}>{t.avatar}</div>
                                <div>
                                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                                    <div style={{ fontSize: 12, color: '#555', marginTop: 2 }}>{t.role}</div>
                                    <div style={{ fontSize: 11, color: '#444', marginTop: 1 }}>{t.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}