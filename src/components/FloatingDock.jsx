import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Download, Layers, Cpu, Award, Mail, Terminal, Home } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function FloatingDock({ activeSection = 'hero' }) {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setAudioEnabled(sound.isEnabled());
    const handleScroll = () => {
      // Reveal dock once scrolled past 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const newState = sound.toggleSound();
    setAudioEnabled(newState);
  };

  const scrollTo = (id) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Terminal },
    { id: 'projects', label: 'Work', icon: Layers },
    { id: 'capabilities', label: 'Systems', icon: Cpu },
    { id: 'experience', label: 'Timeline', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div
      className="floating-dock-container"
      role="navigation"
      aria-label="Floating quick navigation dock"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '50%',
        transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(36px)',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        visibility: isVisible ? 'visible' : 'hidden',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: '0.4rem 0.65rem',
        background: 'rgba(10, 14, 22, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '50px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 240, 255, 0.08)',
        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.45s',
      }}
    >
      {/* Navigation Pills */}
      {dockItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            onMouseEnter={() => sound.playHover()}
            className="dock-pill-btn"
            style={{
              background: isActive ? 'rgba(0, 240, 255, 0.15)' : 'transparent',
              border: isActive ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid transparent',
              color: isActive ? 'var(--signal-cyan)' : 'var(--text-secondary)',
              padding: '0.4rem 0.75rem',
              borderRadius: '50px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease',
            }}
            aria-label={`Jump to ${item.label} section`}
          >
            <Icon size={14} />
            <span className="dock-pill-text">{item.label}</span>
          </button>
        );
      })}

      <div style={{ width: '1px', height: '18px', background: 'rgba(255, 255, 255, 0.15)', margin: '0 0.2rem' }} />

      {/* Audio Synthesizer Toggle with Animated Equalizer */}
      <button
        onClick={toggleAudio}
        onMouseEnter={() => sound.playHover()}
        className="dock-pill-btn"
        style={{
          background: audioEnabled ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.04)',
          border: audioEnabled ? '1px solid var(--signal-emerald)' : '1px solid var(--border-subtle)',
          color: audioEnabled ? 'var(--signal-emerald)' : 'var(--text-muted)',
          padding: '0.4rem 0.75rem',
          borderRadius: '50px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          transition: 'all 0.2s ease',
        }}
        aria-label={audioEnabled ? "Disable UI Sound Effects" : "Enable UI Sound Effects"}
        title={audioEnabled ? "Audio Effects: ACTIVE" : "Audio Effects: MUTED (Click to Enable)"}
      >
        {audioEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
        
        {/* Micro Equalizer Visualizer */}
        {audioEnabled && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', height: '12px' }}>
            <span className="eq-bar eq-bar-1" />
            <span className="eq-bar eq-bar-2" />
            <span className="eq-bar eq-bar-3" />
          </div>
        )}
        <span className="dock-pill-text">{audioEnabled ? 'SOUND ON' : 'SOUND'}</span>
      </button>

      {/* Direct Resume Download */}
      <a
        href="/resume.html"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => sound.playHover()}
        onClick={() => sound.playClick()}
        style={{
          background: 'var(--signal-cyan)',
          color: '#05070a',
          border: 'none',
          padding: '0.4rem 0.85rem',
          borderRadius: '50px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.74rem',
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          textDecoration: 'none',
          boxShadow: '0 0 12px rgba(0, 240, 255, 0.35)',
          transition: 'all 0.2s ease',
        }}
        aria-label="Download Official Technical Resume"
      >
        <Download size={13} />
        <span>PDF</span>
      </a>

      <style>{`
        .dock-pill-btn:hover {
          color: var(--text-high) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
        }
        .eq-bar {
          width: 2px;
          background: var(--signal-emerald);
          border-radius: 1px;
          animation: eqBounce 0.8s ease-in-out infinite alternate;
        }
        .eq-bar-1 { height: 4px; animation-delay: 0s; }
        .eq-bar-2 { height: 10px; animation-delay: 0.2s; }
        .eq-bar-3 { height: 6px; animation-delay: 0.4s; }

        @keyframes eqBounce {
          0% { height: 3px; }
          100% { height: 12px; }
        }

        @media (max-width: 640px) {
          .dock-pill-text {
            display: none;
          }
          .floating-dock-container {
            bottom: 1rem;
            padding: 0.35rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
