import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function TypewriterPrompt() {
  const phrases = [
    'initializing agentic-pipeline --target="148_telangana_centers"',
    'calibrating behavioral anomaly radar on UPI payload [median/mad]',
    'verifying computer vision anti-spoof liveness [99.4% confidence]',
    'processing 15 GB+ regional LLM training pipeline on AWS EC2',
    'scaling Chitran digital operations [+120% YoY verified enrollment]',
    'compiling dual-degree curriculum: IIT Madras BS + Matrusri CSE',
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && charIndex <= currentPhrase.length) {
      // Typing phase
      setDisplayText(currentPhrase.substring(0, charIndex));
      // Subtle mechanical typing sound on random key intervals
      if (charIndex > 0 && charIndex % 2 === 0) {
        sound.playType();
      }
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 35 + Math.random() * 25);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
      // Pause at full sentence
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && charIndex > 0) {
      // Deleting phase
      setDisplayText(currentPhrase.substring(0, charIndex));
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 18);
    } else if (isDeleting && charIndex === 0) {
      // Loop to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div
      className="terminal-typewriter-box"
      onMouseEnter={() => sound.playHover()}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.65rem 1rem',
        background: 'rgba(10, 14, 22, 0.75)',
        border: '1px solid rgba(0, 240, 255, 0.25)',
        borderRadius: '4px',
        marginBottom: '1.75rem',
        maxWidth: '640px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.82rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), inset 0 0 12px rgba(0, 240, 255, 0.04)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--signal-cyan)' }}>
        <Terminal size={14} />
        <span style={{ fontWeight: 700 }}>LIVE //</span>
      </div>

      <div style={{ flex: 1, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <span style={{ color: 'var(--signal-emerald)' }}>$ </span>
        <span>{displayText}</span>
        <span className="blinking-terminal-cursor">_</span>
      </div>

      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--signal-cyan)',
          background: 'rgba(0, 240, 255, 0.1)',
          padding: '0.1rem 0.4rem',
          borderRadius: '2px',
          fontWeight: 600,
        }}
      >
        ACTIVE
      </span>

      <style>{`
        .blinking-terminal-cursor {
          display: inline-block;
          color: var(--signal-cyan);
          font-weight: 800;
          animation: terminalBlink 0.9s infinite;
          margin-left: 2px;
        }
        @keyframes terminalBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
