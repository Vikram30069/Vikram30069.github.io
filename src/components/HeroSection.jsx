import React, { useState, useEffect } from 'react';
import { Mail, ShieldAlert, Cpu, Terminal, ArrowUpRight, Radio, RefreshCw } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import SignalCanvas3D from './SignalCanvas3D';

/**
 * HeroSection
 * Full-viewport story panel [00].
 * Orchestrated load sequence with live WebGL 3D signal matrix,
 * high-impact typography, real-time telemetry, and art-directed portrait slot.
 */
export default function HeroSection() {
  const [photoMode, setPhotoMode] = useState('editorial'); // 'editorial' | 'raw'
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="story-panel"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* 3D WebGL Signal Waveform / Tensor Matrix Layer */}
      <SignalCanvas3D currentSection={0} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        {/* Panel Index & Telemetry Bar */}
        <div
          className="panel-index"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="index-num">00</span>
          <span className="index-status">INDEX // SIGNAL TRANSMISSION</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>HYDERABAD, INDIA [17.3850° N, 78.4867° E]</span>
        </div>

        {/* Hero Grid: Left Content (2 Cols) + Right Art-Directed Photo Frame */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Thesis & Statement */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className="telemetry-badge badge-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
                IIT MADRAS B.SC + MATRUSRI B.E
              </span>
              <span className="telemetry-badge">
                CLASS OF 2027
              </span>
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 5.2rem)',
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
                color: 'var(--text-high)',
                marginBottom: '1.75rem',
              }}
            >
              VIKRAM<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #f8fafc 30%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BANERJEE
              </span>
            </h1>

            {/* Positioning line: EXACT facts from brief */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.6,
                maxWidth: '620px',
                marginBottom: '2rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Dual-degree Computer Science &amp; Data Science undergraduate who builds{' '}
              <strong style={{ color: 'var(--signal-cyan)', fontWeight: 600 }}>multi-agent AI</strong>,{' '}
              <strong style={{ color: '#f8fafc', fontWeight: 600 }}>behavioral fraud-detection</strong>, and{' '}
              <strong style={{ color: '#f8fafc', fontWeight: 600 }}>computer vision systems</strong> — and separately runs real digital operations and civic leadership work outside the classroom.
            </p>

            {/* Real-time Oscilloscope Telemetry Line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '0.75rem 1rem',
                background: 'rgba(12, 16, 24, 0.7)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}
            >
              <div className="signal-live-bar">
                <div className="signal-bar-segment" style={{ animationDelay: '0s' }} />
                <div className="signal-bar-segment" style={{ animationDelay: '0.2s' }} />
                <div className="signal-bar-segment" style={{ animationDelay: '0.4s' }} />
                <div className="signal-bar-segment" style={{ animationDelay: '0.1s' }} />
                <div className="signal-bar-segment" style={{ animationDelay: '0.3s' }} />
                <div className="signal-bar-segment" style={{ animationDelay: '0.5s' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--signal-cyan)' }}>SIGNAL PROTOCOL:</span> 4 PRODUCTION ARCHITECTURES ACTIVE (INCL. CLIENT SHIPPED)
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a
                href="https://github.com/Vikram30069"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-signal"
              >
                <GithubIcon size={16} />
                <span>GITHUB // REPOSITORIES</span>
              </a>

              <a
                href="https://linkedin.com/in/vikram-banerjee-a10111282"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon size={16} />
                <span>LINKEDIN // PROFILE</span>
              </a>

              <a
                href="mailto:vikramb9291@gmail.com"
                className="btn-secondary"
                style={{ padding: '0.8rem 1.1rem' }}
                title="Send transmission to Vikram"
              >
                <Mail size={16} />
                <span>vikramb9291@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Art-Directed Portrait Terminal */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* 
              ============================================================
              PHOTO CONTAINER: Art-directed portrait frame.
              To swap in a new photo, replace the image paths below:
              - Editorial Version: '/assets/vikram_portrait_editorial.jpg'
              - Original Studio Headshot: '/assets/vikram_portrait_original.jpg'
              ============================================================
            */}
            <div
              style={{
                position: 'relative',
                maxWidth: '420px',
                width: '100%',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '0.75rem',
                boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.75)',
              }}
            >
              {/* Corner Coordinate Brackets */}
              <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '12px', height: '12px', borderTop: '2px solid var(--signal-cyan)', borderLeft: '2px solid var(--signal-cyan)', zIndex: 5 }} />
              <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '12px', height: '12px', borderTop: '2px solid var(--signal-cyan)', borderRight: '2px solid var(--signal-cyan)', zIndex: 5 }} />
              <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '12px', height: '12px', borderBottom: '2px solid var(--signal-cyan)', borderLeft: '2px solid var(--signal-cyan)', zIndex: 5 }} />
              <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '12px', height: '12px', borderBottom: '2px solid var(--signal-cyan)', borderRight: '2px solid var(--signal-cyan)', zIndex: 5 }} />

              {/* Photo Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.35rem 0.5rem 0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  marginBottom: '0.65rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--signal-cyan)' }} />
                  <span>SUBJECT ID: VB-2027</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>MODE:</span>
                  <button
                    onClick={() => setPhotoMode(photoMode === 'editorial' ? 'raw' : 'editorial')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--signal-cyan)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      padding: '0.1rem 0.4rem',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                    title="Toggle between Art-Directed Signal Editorial and Raw Authentic Portrait"
                  >
                    <RefreshCw size={10} />
                    <span>{photoMode === 'editorial' ? 'SIGNAL [ART]' : 'RAW [ORIGINAL]'}</span>
                  </button>
                </div>
              </div>

              {/* Image Frame with Optical Vignette and Scan Overlay */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  background: '#040508',
                }}
              >
                {/* 
                  PHOTO SWAP SLOT:
                  Uses Art-Directed Editorial portrait or Original Authentic studio portrait based on state
                */}
                <img
                  src={
                    photoMode === 'editorial'
                      ? '/assets/vikram_portrait_editorial.jpg'
                      : '/assets/vikram_portrait_original.jpg'
                  }
                  alt="Vikram Banerjee — Dual-Degree Data Scientist & AI Systems Engineer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: photoMode === 'editorial' ? 'contrast(1.05) brightness(1.02)' : 'none',
                    transition: 'opacity 0.4s ease',
                  }}
                  loading="eager"
                />

                {/* Subtle Technical Grid Overlay on Image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.04) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    pointerEvents: 'none',
                  }}
                />

                {/* Reticle / Focal Crosshair in center */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60px',
                    height: '60px',
                    border: '1px dashed rgba(0, 240, 255, 0.2)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                  }}
                />

                {/* Bottom Overlay Telemetry Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(7, 9, 14, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    padding: '0.4rem 0.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                  }}
                >
                  <span style={{ color: 'var(--text-primary)' }}>VIKRAM BANERJEE</span>
                  <span style={{ color: 'var(--signal-cyan)' }}>IITM BS // MEC BE</span>
                </div>
              </div>

              {/* Photo Caption & Footnote */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '0.65rem',
                  padding: '0 0.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>FOCAL: 50mm // ISO 100</span>
                <span>STATUS: VERIFIED CREDENTIALS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
