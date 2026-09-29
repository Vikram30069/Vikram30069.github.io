import React, { useState } from 'react';
import { Database, Binary, Activity, Layers, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('engineering'); // 'engineering' | 'operations'
  const [proofRecord, setProofRecord] = useState('paytm'); // 'paytm' | 'chitran'

  return (
    <section id="about" className="story-panel" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container-custom">
        {/* Panel Index */}
        <div className="panel-index">
          <span className="index-num">01</span>
          <span className="index-status">THESIS // SIGNAL EXTRACTION</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>OPERATING PHILOSOPHY &amp; RIGOR</span>
        </div>

        {/* Narrative Headline */}
        <div style={{ maxWidth: '920px', marginBottom: '3.5rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--text-high)',
              marginBottom: '1.75rem',
            }}
          >
            Finding the critical micro-signal inside a deluge of ordinary telemetry.
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontFamily: 'var(--font-sans)',
            }}
          >
            In production streams, 99.8% of telemetry is ordinary background hum: everyday UPI transactions, routine CCTV frames, and uncoordinated emergency dispatches. Modern engineering is not about accumulating more parameter weights — it is about mathematical discernment: isolating the distress call, the coerced transaction, or the localized coordinate anomaly before the window closes.
          </p>
        </div>

        {/* Two-Column Grid: Dual-Track Competence + Authentic Proof-of-Work Imagery */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Dual Degree & Operational Grounding */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Tab Selector: Engineering Architecture vs Operational Leadership */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.3rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: '3px',
                width: 'fit-content',
              }}
            >
              <button
                onClick={() => setActiveTab('engineering')}
                aria-pressed={activeTab === 'engineering'}
                aria-label="View technical architecture background"
                style={{
                  background: activeTab === 'engineering' ? 'var(--signal-cyan)' : 'transparent',
                  color: activeTab === 'engineering' ? '#000' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '0.45rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                01. TECHNICAL ARCHITECTURE
              </button>
              <button
                onClick={() => setActiveTab('operations')}
                aria-pressed={activeTab === 'operations'}
                aria-label="View operations and civic impact background"
                style={{
                  background: activeTab === 'operations' ? 'var(--signal-cyan)' : 'transparent',
                  color: activeTab === 'operations' ? '#000' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '0.45rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                02. OPERATIONS &amp; CIVIC IMPACT
              </button>
            </div>

            {activeTab === 'engineering' ? (
              <div
                className="signal-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  flex: 1,
                }}
              >
                <div>
                  <div className="telemetry-badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
                    ACADEMIC FOUNDATION
                  </div>
                  <h3
                    className="font-display"
                    style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-high)', marginBottom: '0.75rem' }}
                  >
                    Rigorous Dual-Degree Convergence
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Concurrent enrollment across two demanding programs: B.Sc. in Data Science &amp; Applications from <strong style={{ color: '#fff' }}>IIT Madras</strong> (focused on statistical inference, ML mathematical models, and database management) alongside a B.E. in Computer Science &amp; Engineering from <strong style={{ color: '#fff' }}>Matrusri Engineering College</strong> (focused on distributed systems, algorithms, and cloud infrastructure).
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1.25rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                  }}
                >
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '2px' }}>
                    <div style={{ color: 'var(--signal-cyan)', marginBottom: '0.25rem' }}>IIT MADRAS</div>
                    <div style={{ color: 'var(--text-primary)' }}>Statistical Inference</div>
                    <div style={{ color: 'var(--text-muted)' }}>Class of 2027</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '2px' }}>
                    <div style={{ color: 'var(--signal-cyan)', marginBottom: '0.25rem' }}>MATRUSRI ENGG</div>
                    <div style={{ color: 'var(--text-primary)' }}>Distributed Systems</div>
                    <div style={{ color: 'var(--text-muted)' }}>Class of 2027</div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  This dual lens allows me to architect machine learning systems not as black-box scripts, but as bounded, latency-critical production microservices backed by verifiable statistical baselines.
                </p>
              </div>
            ) : (
              <div
                className="signal-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  flex: 1,
                }}
              >
                <div>
                  <div className="telemetry-badge badge-emerald" style={{ marginBottom: '0.75rem' }}>
                    REAL-WORLD LEADERSHIP
                  </div>
                  <h3
                    className="font-display"
                    style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-high)', marginBottom: '0.75rem' }}
                  >
                    Directing Operations Beyond Code
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Engineers who understand operational execution build better software. Since 2022, I have served as <strong style={{ color: '#fff' }}>Director of Programs and Operations at Chitran Institute</strong> (a 23-year-old cultural organization), managing digital infrastructure, SEO, reputation management, and marketing funnels that grew student enrollment by <strong style={{ color: 'var(--signal-emerald)' }}>120%</strong>.
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1.25rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                  }}
                >
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '2px' }}>
                    <div style={{ color: 'var(--signal-emerald)', marginBottom: '0.25rem' }}>CHITRAN INSTITUTE</div>
                    <div style={{ color: 'var(--text-primary)' }}>+120% Enrollment Growth</div>
                    <div style={{ color: 'var(--text-muted)' }}>3,000+ Community</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '2px' }}>
                    <div style={{ color: 'var(--signal-emerald)', marginBottom: '0.25rem' }}>BAJAJ FOUNDATION</div>
                    <div style={{ color: 'var(--text-primary)' }}>Telangana Govt Program</div>
                    <div style={{ color: 'var(--text-muted)' }}>Project Facilitator</div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Additionally representing Hyderabad as City Operations Head for <strong style={{ color: '#fff' }}>Boundless (IITM BS Travel Society)</strong> and coordinating competitive forensics &amp; delegate screening in <strong style={{ color: '#fff' }}>Diplomacia</strong>.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Visual Proof of Work (Authentic Hackathon & Engineering Photography) */}
          <div
            className="signal-card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>PROOF OF WORK // FIELD RECORD</span>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    onClick={() => setProofRecord('paytm')}
                    aria-pressed={proofRecord === 'paytm'}
                    aria-label="View Paytm Hackathon field record and team recognition"
                    style={{
                      background: proofRecord === 'paytm' ? 'var(--signal-cyan)' : 'rgba(255,255,255,0.03)',
                      color: proofRecord === 'paytm' ? '#000' : 'var(--text-muted)',
                      border: proofRecord === 'paytm' ? '1px solid var(--signal-cyan)' : '1px solid var(--border-subtle)',
                      padding: '0.2rem 0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    PAYTM HACKATHON
                  </button>
                  <button
                    onClick={() => setProofRecord('chitran')}
                    aria-pressed={proofRecord === 'chitran'}
                    aria-label="View Chitran Institute web growth field record"
                    style={{
                      background: proofRecord === 'chitran' ? 'var(--signal-emerald)' : 'rgba(255,255,255,0.03)',
                      color: proofRecord === 'chitran' ? '#000' : 'var(--text-muted)',
                      border: proofRecord === 'chitran' ? '1px solid var(--signal-emerald)' : '1px solid var(--border-subtle)',
                      padding: '0.2rem 0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                  >
                    CHITRAN WEB
                  </button>
                </div>
              </div>

              {/* Dynamic Photo Slot */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 11',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  border: '1px solid var(--border-subtle)',
                  background: '#040508',
                }}
              >
                <img
                  src={
                    proofRecord === 'paytm'
                      ? '/assets/vikram_paytm_hackathon.png'
                      : '/assets/chitran_curriculum_ui.png'
                  }
                  alt={
                    proofRecord === 'paytm'
                      ? 'Vikram Banerjee engineering Datadrishti at Paytm Hackathon'
                      : 'Chitran Institute production website and curriculum portal'
                  }
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    background: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(4px)',
                    padding: '2px 8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: proofRecord === 'paytm' ? 'var(--signal-cyan)' : 'var(--signal-emerald)',
                    borderRadius: '2px',
                    border: `1px solid ${proofRecord === 'paytm' ? 'rgba(0, 240, 255, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                  }}
                >
                  {proofRecord === 'paytm' ? 'LIVE PROTOTYPING // DATADRISHTI' : 'SHIPPED CLIENT // CHITRAN.ORG'}
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1rem',
              }}
            >
              <div style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                {proofRecord === 'paytm' ? 'Field Context (Paytm):' : 'Production Scope (Chitran):'}
              </div>
              {proofRecord === 'paytm'
                ? 'Vikram on-site during the intense development cycle of Datadrishti (Paytm IntentGuard) — testing real-time UPI stress anomaly models under tight compute budgets.'
                : 'Directing full digital operations for Chitran Institute: custom web portal architecture, Google Business Profile API synchronization, and Rank Math SEO that drove +120% enrollment growth.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
