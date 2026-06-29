'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

const links = ['Features', 'How it Works', 'Platform', 'Pricing', 'FAQ'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s+/g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0 5%',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 68,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src={logo} alt="Forgera" style={{ height: 36, width: 36, borderRadius: 8 }} />
          <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: '#fff' }}>Forgera</span>
        </div>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            alignItems: 'center',
          }}
          className="nav-links"
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: 'none',
                color: 'rgba(255,255,255,0.7)',
                fontSize: 14,
                fontWeight: 500,
                transition: 'color 0.2s',
                cursor: 'pointer',
                border: 'none',
                fontFamily: 'Inter',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E8700D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              {l}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => scrollTo('pricing')}
            style={{
              background: '#E8700D',
              color: '#fff',
              borderRadius: 8,
              padding: '9px 20px',
              fontSize: 14,
              fontWeight: 600,
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#C45D0A';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#E8700D';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get Started
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              flexDirection: 'column',
              gap: 5,
              padding: 4,
            }}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#fff',
                borderRadius: 2,
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#fff',
                borderRadius: 2,
                transition: 'all 0.3s',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 2,
                background: '#fff',
                borderRadius: 2,
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(17,17,17,0.98)',
            backdropFilter: 'blur(20px)',
            padding: '20px 5%',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: 'none',
                color: 'rgba(255,255,255,0.8)',
                fontSize: 16,
                fontWeight: 500,
                textAlign: 'left',
                padding: '12px 0',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'Inter',
                cursor: 'pointer',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}

    </nav>
  );
}