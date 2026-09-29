import React from 'react';
import { sound } from '../utils/soundEffects';

export default function KineticMarquee({ speed = 25, direction = 'left' }) {
  const items = [
    { text: 'AI SYSTEMS ENGINEER', highlight: true },
    { text: '10-AGENT CREWAI ORCHESTRATION', highlight: false },
    { text: 'BEHAVIORAL FRAUD DETECTION [MEDIAN/MAD]', highlight: true },
    { text: 'COMPUTER VISION ANTI-SPOOFING', highlight: false },
    { text: 'AWS DATA ENGINEERING [AICTE ACCREDITED]', highlight: true },
    { text: 'REGIONAL LLM PRE-TRAINING [15GB+ PIPELINE]', highlight: false },
    { text: '120% YoY SHIPPED PLATFORM GROWTH', highlight: true },
    { text: 'IIT MADRAS BS DSA · MATRUSRI CSE', highlight: false },
  ];

  return (
    <div
      className="kinetic-marquee-container"
      onMouseEnter={() => sound.playHover()}
      style={{
        width: '100%',
        overflow: 'hidden',
        background: 'rgba(7, 8, 12, 0.95)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0.85rem 0',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marqueeScroll ${speed}s linear infinite`,
        }}
      >
        {/* Render 3 repetitions for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              padding: '0 1.25rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.78rem, 1.2vw, 0.95rem)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
              color: item.highlight ? 'var(--signal-cyan)' : 'var(--text-secondary)',
            }}
          >
            <span>{item.text}</span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: item.highlight ? 'var(--signal-cyan)' : 'var(--border-subtle)',
                boxShadow: item.highlight ? '0 0 8px var(--signal-cyan)' : 'none',
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .kinetic-marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
