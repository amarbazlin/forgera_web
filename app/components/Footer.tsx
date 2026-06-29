'use client';

import Image from 'next/image';
import logo from '../../public/logo.png';

const navLinks = {
    Product: ['Features', 'How it Works', 'Platform', 'Pricing'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
    return (
        <footer style={{
            background: '#080808',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '64px 5% 32px',
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr repeat(3, auto)',
                    gap: 48, marginBottom: 56,
                }} className="footer-grid">
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <Image src={logo} alt="Forgera" style={{ height: 32, width: 32, borderRadius: 7 }} />
                            <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 18, color: '#fff' }}>Forgera</span>
                        </div>
                        <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, maxWidth: 260, marginBottom: 20 }}>
                            AI-powered business operations platform for retail, wholesale, and distribution companies.
                        </p>
                        <div style={{ fontSize: 13, color: '#444' }}>
                            Colombo, Sri Lanka
                        </div>
                        <a
                            href="mailto:amar@forgera.app"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                marginTop: 16, color: '#E8700D', fontSize: 13, fontWeight: 500,
                                transition: 'opacity 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.75'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 4L12 13L2 4" />
                            </svg>
                            amar@forgera.app
                        </a>
                    </div>

                    {/* Nav columns */}
                    {Object.entries(navLinks).map(([col, items]) => (
                        <div key={col}>
                            <div style={{ fontSize: 12, fontWeight: 700, color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{col}</div>
                            {items.map(item => (
                                <div key={item} style={{ marginBottom: 10 }}>
                                    <a href="#" style={{
                                        fontSize: 14, color: '#555', transition: 'color 0.2s',
                                    }}
                                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#E8700D'}
                                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#555'}
                                    >{item}</a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: 28, display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: 12,
                }}>
                    <span style={{ fontSize: 13, color: '#444' }}>
                        © {new Date().getFullYear()} Forgera. All rights reserved.
                    </span>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .footer-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 480px) {
                    .footer-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </footer>
    );
}