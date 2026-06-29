'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Platform from './components/Platform';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export const dynamic = 'force-dynamic';

export default function Home() {
  useScrollAnimation();

  // Re-run observer after a short delay to catch dynamically revealed elements
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
        observer.observe(el);
      });
      return () => observer.disconnect();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Platform />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
