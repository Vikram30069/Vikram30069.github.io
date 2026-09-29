import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize Lenis Smooth Inertia Scroll
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Section Observer for Active Navigation Index
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'capabilities', 'experience', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      {/* Background Matrix & Subtle Gradient Mesh */}
      <div className="matrix-grid-bg" />
      <div className="ambient-vignette" />

      {/* Persistent Navigation & Telemetry */}
      <Navigation activeSection={activeSection} />

      {/* Full-Viewport Story Panels in Sequence */}
      <main>
        <HeroSection />
        <AboutSection />
        <SelectedWorkSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}
