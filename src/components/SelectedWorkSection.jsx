import React, { useState } from 'react';
import { ShieldAlert, Users, Camera, ExternalLink, Activity, AlertTriangle, Check, Layers, Sparkles, MapPin, Radio, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import sound from '../utils/soundEffects';

export default function SelectedWorkSection() {
  // View states for high-res UI mockups vs interactive simulators
  const [datadrishtiView, setDatadrishtiView] = useState('simulator'); // 'simulator' | 'mockup'
  const [rescuenetView, setRescuenetView] = useState('graph'); // 'graph' | 'mockup'
  const [nodinView, setNodinView] = useState('radar'); // 'radar' | 'mockup'

  // Datadrishti Interactive Simulator State
  const [datadrishtiSignals, setDatadrishtiSignals] = useState({
    amountAnomaly: true,      // +30
    recipientNovelty: true,   // +20
    deviceNovelty: false,     // +20
    timeAnomaly: true,        // +15
    geoAnomaly: false,        // +10
    velocitySurges: false,    // +5
  });

  // Calculate dynamic score
  const calculateScore = () => {
    let score = 0;
    if (datadrishtiSignals.amountAnomaly) score += 30;
    if (datadrishtiSignals.recipientNovelty) score += 20;
    if (datadrishtiSignals.deviceNovelty) score += 20;
    if (datadrishtiSignals.timeAnomaly) score += 15;
    if (datadrishtiSignals.geoAnomaly) score += 10;
    if (datadrishtiSignals.velocitySurges) score += 5;
    return score;
  };

  const riskScore = calculateScore();

  const getFrictionPolicy = (score) => {
    if (score <= 30) {
      return {
        label: 'FRICTIONLESS 1-TAP TRANSFER',
        badge: 'badge-emerald',
        color: 'var(--signal-emerald)',
        action: 'Immediate settlement approved. Personal baseline within normal MAD bounds.',
      };
    } else if (score <= 55) {
      return {
        label: 'PASS-THROUGH LOGGING',
        badge: 'badge-cyan',
        color: 'var(--signal-cyan)',
        action: 'Transfer authorized with enhanced risk logging. Velocity monitor active.',
      };
    } else if (score <= 80) {
      return {
        label: 'STEP-UP BIOMETRICS REQUIRED',
        badge: 'badge-amber',
        color: 'var(--signal-amber)',
        action: 'Secondary biometric challenge initiated. Coercion check heuristics active.',
      };
    } else {
      return {
        label: 'OUT-OF-BAND HOLD & VERIFICATION',
        badge: 'badge-alert',
        color: 'var(--alert-red)',
        action: 'CRITICAL THREAT: Transaction suspended. Out-of-band verification dispatch triggered.',
      };
    }
  };

  const policy = getFrictionPolicy(riskScore);

  // RescueNet AI Active Agent Inspector State
  const [selectedAgent, setSelectedAgent] = useState('triage');

  const agents = [
    {
      id: 'triage',
      title: 'Triage & Urgency Agent',
      role: 'Evaluates survivor distress text/audio, extracts medical urgency class, vitals, and hazard levels.',
      model: 'Gemini 1.5 Pro / Claude',
      chainTo: 'Resource Allocator',
    },
    {
      id: 'allocator',
      title: 'Resource Allocation Agent',
      role: 'Optimizes scarce emergency equipment (O2, trauma kits, cutters) across active geographic clusters.',
      model: 'OpenAI GPT-4o / LiteLLM',
      chainTo: 'Hospital Matcher',
    },
    {
      id: 'matcher',
      title: 'Hospital Matching Agent',
      role: 'Queries real-time Supabase/PostgreSQL index of 148 Telangana medical facilities against trauma bed availability.',
      model: 'FastAPI + Vector Index',
      chainTo: 'Voice Dispatcher',
    },
    {
      id: 'dispatcher',
      title: 'Twilio Voice / WhatsApp Dispatcher',
      role: 'Triggers live WhatsApp alerts and Twilio sandbox automated voice calls with coordinates directly to ambulances.',
      model: 'Twilio API + Webhooks',
      chainTo: 'Incident Command',
    },
  ];

  // NodIn Simulation State
  const [inGeofence, setInGeofence] = useState(true);
  const [faceConfidence, setFaceConfidence] = useState(99.4);

  // Chitran Institute Client Project Telemetry State
  const [chitranView, setChitranView] = useState('production'); // 'production' | 'baseline'
  const [chitranTab, setChitranTab] = useState('dance'); // 'dance' | 'curriculum'

  return (
    <section id="projects" className="story-panel" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container-custom">
        {/* Panel Index */}
        <div className="panel-index scroll-reveal-left">
          <span className="index-num">02</span>
          <span className="index-status">SELECTED WORK // PRODUCTION ARCHITECTURES</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>BEHAVIORAL ML, MULTI-AGENT, COMPUTER VISION</span>
        </div>

        <div className="scroll-reveal" style={{ maxWidth: '840px', marginBottom: '4rem' }}>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--text-high)',
              marginBottom: '1rem',
            }}
          >
            Four production systems engineered to isolate critical truth.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Production codebases and client-shipped ecosystems: sub-second ML inference, multi-agent coordination, computer vision, and high-conversion web infrastructure.
          </p>
        </div>

        {/* =========================================================================
            PROJECT 01: DATADRISHTI (Paytm IntentGuard)
            ========================================================================= */}
        <div
          className={`signal-card scroll-reveal-scale ${riskScore > 80 ? 'card-alert' : ''}`}
          style={{
            padding: 'clamp(1.75rem, 3.5vw, 3rem)',
            marginBottom: '4rem',
            borderLeft: riskScore > 80 ? '3px solid var(--alert-red)' : '3px solid var(--signal-cyan)',
          }}
        >
          {/* Project Meta Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="telemetry-badge badge-cyan">SYSTEM 01 // BEHAVIORAL FRAUD DEFENSE</span>
              <span className="telemetry-badge">UPI SECURITY LAYER</span>
            </div>

            <a
              href="https://github.com/Vikram30069/datadrishti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <GithubIcon size={14} />
              <span>SOURCE // github.com/Vikram30069/datadrishti</span>
            </a>
          </div>

          <h3
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-high)',
              marginBottom: '0.5rem',
            }}
          >
            Datadrishti (Paytm IntentGuard)
          </h3>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              color: 'var(--signal-cyan)',
              marginBottom: '1.5rem',
            }}
          >
            Contextual Payment Security Layer Against Panic &amp; Coercion
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {/* The Problem & Engineering Solution */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  THE CORE PROBLEM:
                </div>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Standard binary fraud blockers block safe high-value transfers (e.g. ₹50,000 monthly rent to a known landlord) while missing authorized transactions made under duress, coercion, or panic scams.
                </p>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  PERSONAL BASELINE ANALYTICS (MAD):
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Evaluates transactions against personal <strong style={{ color: '#fff' }}>Median and Median Absolute Deviation (MAD)</strong> distributions rather than vulnerable arithmetic averages that are skewed by outliers.
                </p>
              </div>
            </div>

            {/* Interactive Live Risk Engine Simulator / High-Res Dashboard Mockup */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '0.75rem',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(255,255,255,0.03)', padding: '2px', borderRadius: '3px' }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setDatadrishtiView('simulator');
                    }}
                    onMouseEnter={() => sound.playHover()}
                    aria-pressed={datadrishtiView === 'simulator'}
                    aria-label="View interactive risk engine simulator"
                    style={{
                      background: datadrishtiView === 'simulator' ? 'var(--signal-cyan)' : 'transparent',
                      color: datadrishtiView === 'simulator' ? '#000' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '2px',
                      padding: '0.25rem 0.6rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    01. RISK SIMULATOR
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setDatadrishtiView('mockup');
                    }}
                    onMouseEnter={() => sound.playHover()}
                    aria-pressed={datadrishtiView === 'mockup'}
                    aria-label="View high-resolution production UI mockup"
                    style={{
                      background: datadrishtiView === 'mockup' ? 'var(--signal-cyan)' : 'transparent',
                      color: datadrishtiView === 'mockup' ? '#000' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '2px',
                      padding: '0.25rem 0.6rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    02. PRODUCTION UI MOCKUP
                  </button>
                </div>
                <span style={{ color: policy.color, fontWeight: 700 }}>
                  {datadrishtiView === 'simulator' ? `SCORE: ${riskScore} / 100` : 'TELEMETRY: LIVE'}
                </span>
              </div>

              {datadrishtiView === 'simulator' ? (
                <>
                  {/* 6 Calibrated Risk Signals Toggle Checklist */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    {[
                      { key: 'amountAnomaly', label: 'Amount Anomaly', weight: '+30' },
                      { key: 'recipientNovelty', label: 'Recipient Novelty', weight: '+20' },
                      { key: 'deviceNovelty', label: 'Device Novelty', weight: '+20' },
                      { key: 'timeAnomaly', label: 'Time Anomaly', weight: '+15' },
                      { key: 'geoAnomaly', label: 'Geo Anomaly', weight: '+10' },
                      { key: 'velocitySurges', label: 'Velocity Surges', weight: '+5' },
                    ].map((sig) => (
                      <button
                        key={sig.key}
                        onClick={() => {
                          sound.playType();
                          setDatadrishtiSignals((prev) => ({
                            ...prev,
                            [sig.key]: !prev[sig.key],
                          }));
                        }}
                        onMouseEnter={() => sound.playHover()}
                        aria-pressed={!!datadrishtiSignals[sig.key]}
                        aria-label={`Toggle ${sig.label} risk signal weight ${sig.weight}`}
                        style={{
                          background: datadrishtiSignals[sig.key] ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.015)',
                          border: datadrishtiSignals[sig.key]
                            ? '1px solid rgba(0, 240, 255, 0.4)'
                            : '1px solid var(--border-subtle)',
                          padding: '0.5rem 0.6rem',
                          borderRadius: '2px',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: datadrishtiSignals[sig.key] ? 'var(--text-high)' : 'var(--text-muted)',
                          textAlign: 'left',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <span>{sig.label}</span>
                        <span style={{ color: datadrishtiSignals[sig.key] ? 'var(--signal-cyan)' : 'var(--text-subtle)', fontWeight: 600 }}>
                          {sig.weight}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Friction Policy Output */}
                  <div
                    style={{
                      background: 'rgba(10, 12, 18, 0.95)',
                      border: `1px solid ${policy.color}`,
                      padding: '1rem',
                      borderRadius: '3px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: policy.color,
                          boxShadow: `0 0 10px ${policy.color}`,
                        }}
                      />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 700, color: policy.color }}>
                        {policy.label}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}>
                      {policy.action}
                    </p>
                  </div>
                </>
              ) : (
                /* High-Res Production UI Mockup */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      background: '#04060a',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.7)',
                    }}
                  >
                    <img
                      src="/assets/datadrishti_dashboard_ui.jpg"
                      alt="Datadrishti IntentGuard Production Dashboard Mockup"
                      style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '250px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(4px)',
                        padding: '3px 8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.66rem',
                        color: 'var(--signal-cyan)',
                        borderRadius: '2px',
                        border: '1px solid rgba(0, 240, 255, 0.4)',
                      }}
                    >
                      PAYTM INTENTGUARD // UPI RISK RADAR
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      background: 'rgba(10, 14, 22, 0.7)',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '3px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    Production view showing real-time UPI stress anomaly scores, personal baseline Median Absolute Deviation (MAD) bounds, and adaptive friction intercept modal.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Technical Policy Thresholds Breakdown */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
            }}
          >
            <div>
              <span style={{ color: 'var(--signal-emerald)' }}>0–30 PTS:</span>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Frictionless 1-Tap</div>
              <div style={{ color: 'var(--text-muted)' }}>Verified normal velocity &amp; baseline</div>
            </div>
            <div>
              <span style={{ color: 'var(--signal-cyan)' }}>31–55 PTS:</span>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Pass-Through Logging</div>
              <div style={{ color: 'var(--text-muted)' }}>Telemetry flagged for background audit</div>
            </div>
            <div>
              <span style={{ color: 'var(--signal-amber)' }}>56–80 PTS:</span>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Step-Up Biometrics</div>
              <div style={{ color: 'var(--text-muted)' }}>Coercion-resistant challenge prompt</div>
            </div>
            <div>
              <span style={{ color: 'var(--alert-red)' }}>&gt;80 PTS:</span>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Out-of-Band Hold</div>
              <div style={{ color: 'var(--text-muted)' }}>Immediate hold; secondary verifier</div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROJECT 02: RESCUENET AI
            ========================================================================= */}
        <div
          className="signal-card scroll-reveal-scale"
          style={{
            padding: 'clamp(1.75rem, 3.5vw, 3rem)',
            marginBottom: '4rem',
            borderLeft: '3px solid var(--signal-cyan)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="telemetry-badge badge-cyan">SYSTEM 02 // MULTI-AGENT ORCHESTRATION</span>
              <span className="telemetry-badge">10-AGENT CREWAI ARCHITECTURE</span>
            </div>

            <a
              href="https://github.com/Vikram30069/RescueNet-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <GithubIcon size={14} />
              <span>SOURCE // github.com/Vikram30069/RescueNet-AI</span>
            </a>
          </div>

          <h3
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-high)',
              marginBottom: '0.5rem',
            }}
          >
            RescueNet AI
          </h3>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              color: 'var(--signal-cyan)',
              marginBottom: '1.5rem',
            }}
          >
            Multi-Agent Disaster Response &amp; Survivor Prioritization System
          </div>

          {/* Key Facts Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '2.5rem',
            }}
          >
            <div>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Architected a <strong style={{ color: '#fff' }}>10-agent CrewAI pipeline</strong> (triage, resource allocation, hospital matching, automated dispatch) with strict task-context chaining so each agent&apos;s output mathematically grounds the next agent&apos;s reasoning.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>[INFRA]</span>
                  <span>FastAPI backend with Pydantic v2 validation, PostgreSQL/Supabase database.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>[GEO-DATA]</span>
                  <span>Integrated 148 real Telangana emergency assets (hospitals, blood banks, fire stations, ambulances) parsed from structured PDFs.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>[DISPATCH]</span>
                  <span>Twilio WhatsApp messaging &amp; automated voice call dispatch tested end-to-end with live Twilio sandbox credentials.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>[DEPLOY]</span>
                  <span>Multi-provider LLM support (OpenAI, Gemini, Ollama, LiteLLM) deployed on AWS (ECS, RDS, S3, CloudFront, Bedrock) with GitHub CI/CD and Next.js command center on Amplify.</span>
                </li>
              </ul>
            </div>

            {/* Interactive 10-Agent CrewAI Context Chaining Visualizer / Disaster Ops UI Mockup */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(255,255,255,0.03)', padding: '2px', borderRadius: '3px' }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setRescuenetView('graph');
                    }}
                    onMouseEnter={() => sound.playHover()}
                    aria-pressed={rescuenetView === 'graph'}
                    aria-label="View 10-agent context chaining graph"
                    style={{
                      background: rescuenetView === 'graph' ? 'var(--signal-cyan)' : 'transparent',
                      color: rescuenetView === 'graph' ? '#000' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '2px',
                      padding: '0.25rem 0.6rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    01. 10-AGENT GRAPH
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setRescuenetView('mockup');
                    }}
                    onMouseEnter={() => sound.playHover()}
                    aria-pressed={rescuenetView === 'mockup'}
                    aria-label="View high-resolution disaster operations mockup"
                    style={{
                      background: rescuenetView === 'mockup' ? 'var(--signal-cyan)' : 'transparent',
                      color: rescuenetView === 'mockup' ? '#000' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '2px',
                      padding: '0.25rem 0.6rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    02. DISASTER OPS MOCKUP
                  </button>
                </div>
                <span style={{ color: 'var(--signal-cyan)', fontWeight: 600 }}>
                  {rescuenetView === 'graph' ? 'CREWAI CONTEXT' : 'OPS DASHBOARD'}
                </span>
              </div>

              {rescuenetView === 'graph' ? (
                <>
                  {/* Agent Nodes */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    {agents.map((agent) => (
                      <button
                        key={agent.id}
                        onClick={() => {
                          sound.playClick();
                          setSelectedAgent(agent.id);
                        }}
                        onMouseEnter={() => sound.playHover()}
                        aria-pressed={selectedAgent === agent.id}
                        aria-label={`Select agent: ${agent.title} (${agent.model})`}
                        style={{
                          background: selectedAgent === agent.id ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255,255,255,0.02)',
                          border: selectedAgent === agent.id ? '1px solid var(--signal-cyan)' : '1px solid var(--border-subtle)',
                          padding: '0.6rem 0.8rem',
                          borderRadius: '3px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-high)' }}>
                            {agent.title}
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            Provider: {agent.model}
                          </div>
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--signal-cyan)' }}>
                          CHAIN &gt;
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Selected Agent Inspector */}
                  {(() => {
                    const cur = agents.find((a) => a.id === selectedAgent);
                    return (
                      <div
                        style={{
                          background: 'rgba(10, 14, 22, 0.95)',
                          border: '1px solid rgba(0, 240, 255, 0.25)',
                          padding: '0.9rem',
                          borderRadius: '3px',
                        }}
                      >
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--signal-cyan)', marginBottom: '0.3rem' }}>
                          TASK SPECIFICATION // {cur.title.toUpperCase()}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                          {cur.role}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          Outputs context to: <strong style={{ color: '#fff' }}>{cur.chainTo}</strong>
                        </div>
                      </div>
                    );
                  })()}
                </>
              ) : (
                /* High-Res Disaster Ops Mockup */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-subtle)',
                      background: '#04060a',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.7)',
                    }}
                  >
                    <img
                      src="/assets/rescuenet_dashboard_ui.jpg"
                      alt="RescueNet AI Disaster Response Command Center Mockup"
                      style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '250px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        background: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(4px)',
                        padding: '3px 8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.66rem',
                        color: 'var(--signal-cyan)',
                        borderRadius: '2px',
                        border: '1px solid rgba(0, 240, 255, 0.4)',
                      }}
                    >
                      TELANGANA DISASTER OPS // LIVE 10-AGENT ORCHESTRATION
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      background: 'rgba(10, 14, 22, 0.7)',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '3px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    Emergency command center displaying real-time survivor triage status, GIS mapping of 148 Telangana facilities, bed availability vector matching, and automated Twilio voice call dispatches.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROJECT 03: NODIN
            ========================================================================= */}
        <div
          className="signal-card scroll-reveal-scale"
          style={{
            padding: 'clamp(1.75rem, 3.5vw, 3rem)',
            borderLeft: '3px solid var(--signal-cyan)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="telemetry-badge badge-cyan">SYSTEM 03 // COMPUTER VISION &amp; EMBEDDED GEOMETRY</span>
              <span className="telemetry-badge">REAL-TIME ATTENDANCE AUTOMATION</span>
            </div>

            <a
              href="https://github.com/Vikram30069/NodIn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <GithubIcon size={14} />
              <span>SOURCE // github.com/Vikram30069/NodIn</span>
            </a>
          </div>

          <h3
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-high)',
              marginBottom: '0.5rem',
            }}
          >
            NodIn
          </h3>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              color: 'var(--signal-cyan)',
              marginBottom: '1.5rem',
            }}
          >
            Computer Vision Framework with Geofencing &amp; Attendance Automation
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            <div>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                A high-throughput computer vision pipeline that replaces spoofable manual logs with automated biometrics grounded in spatial coordinate boundaries.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    01. Matrix-Level Image Transformations
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    Real-time face recognition and attendance automation pipeline applying deep learning and affine/perspective matrix transformations directly to continuous live video streams.
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    02. Anti-Spoofing Geofence Logic
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    Restricts attendance registration strictly to validated physical GPS/Wi-Fi polygon bounds, eliminating location spoofing and remote attendance injection attacks.
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    03. Continuous Behavioral Anomaly Detection
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    Behavioral classification models applied to continuous live camera streams for automated monitoring and anomaly detection.
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive CV Matrix Transformation Visualizer / High-Res CV Surveillance Mockup */}
            <div
              style={{
                background: 'rgba(0,0,0,0.45)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                padding: '1.25rem',
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
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    alignItems: 'center',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(255,255,255,0.03)', padding: '2px', borderRadius: '3px' }}>
                    <button
                      onClick={() => {
                        sound.playClick();
                        setNodinView('radar');
                      }}
                      onMouseEnter={() => sound.playHover()}
                      aria-pressed={nodinView === 'radar'}
                      aria-label="View interactive geofence radar simulator"
                      style={{
                        background: nodinView === 'radar' ? 'var(--signal-cyan)' : 'transparent',
                        color: nodinView === 'radar' ? '#000' : 'var(--text-muted)',
                        border: 'none',
                        borderRadius: '2px',
                        padding: '0.25rem 0.6rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      01. GEOFENCE RADAR
                    </button>
                    <button
                      onClick={() => {
                        sound.playClick();
                        setNodinView('mockup');
                      }}
                      onMouseEnter={() => sound.playHover()}
                      aria-pressed={nodinView === 'mockup'}
                      aria-label="View high-resolution computer vision surveillance mockup"
                      style={{
                        background: nodinView === 'mockup' ? 'var(--signal-cyan)' : 'transparent',
                        color: nodinView === 'mockup' ? '#000' : 'var(--text-muted)',
                        border: 'none',
                        borderRadius: '2px',
                        padding: '0.25rem 0.6rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      02. CV VISION MOCKUP
                    </button>
                  </div>
                  <span style={{ color: inGeofence ? 'var(--signal-emerald)' : 'var(--alert-red)' }}>
                    {nodinView === 'radar'
                      ? inGeofence
                        ? 'GEOFENCE: VERIFIED'
                        : 'GEOFENCE: BREACHED'
                      : 'CV STREAM: 12ms'}
                  </span>
                </div>

                {nodinView === 'radar' ? (
                  <>
                    {/* Spatial Grid representation */}
                    <div
                      style={{
                        position: 'relative',
                        height: '160px',
                        background: '#07090e',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Grid Lines */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />

                      {/* Geofence Perimeter Box */}
                      <div
                        style={{
                          width: '120px',
                          height: '90px',
                          border: `1.5px dashed ${inGeofence ? 'var(--signal-emerald)' : 'var(--alert-red)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: inGeofence ? 'var(--signal-emerald)' : 'var(--alert-red)',
                          background: inGeofence ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255, 51, 68, 0.05)',
                        }}
                      >
                        AUTHORIZED PERIMETER
                      </div>

                      {/* Face Tracking Reticle */}
                      <div
                        style={{
                          position: 'absolute',
                          width: '32px',
                          height: '32px',
                          border: '1.5px solid var(--signal-cyan)',
                          borderRadius: '50%',
                          transform: inGeofence ? 'translate(0, 0)' : 'translate(75px, -30px)',
                          transition: 'transform 0.4s ease',
                          boxShadow: '0 0 10px var(--signal-cyan-glow)',
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        onClick={() => {
                          sound.playChirp();
                          setInGeofence(true);
                        }}
                        onMouseEnter={() => sound.playHover()}
                        aria-pressed={inGeofence}
                        aria-label="Test verified in-bounds geofence coordinate"
                        style={{
                          flex: 1,
                          background: inGeofence ? 'var(--signal-emerald-dim)' : 'rgba(255,255,255,0.02)',
                          border: inGeofence ? '1px solid var(--signal-emerald)' : '1px solid var(--border-subtle)',
                          color: inGeofence ? 'var(--signal-emerald)' : 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          padding: '0.45rem',
                          borderRadius: '2px',
                          cursor: 'pointer',
                        }}
                      >
                        TEST IN-BOUNDS
                      </button>

                      <button
                        onClick={() => {
                          sound.playClick();
                          setInGeofence(false);
                        }}
                        onMouseEnter={() => sound.playHover()}
                        aria-pressed={!inGeofence}
                        aria-label="Test spoof anomaly out-of-bounds coordinate"
                        style={{
                          flex: 1,
                          background: !inGeofence ? 'var(--alert-red-dim)' : 'rgba(255,255,255,0.02)',
                          border: !inGeofence ? '1px solid var(--alert-red)' : '1px solid var(--border-subtle)',
                          color: !inGeofence ? 'var(--alert-red)' : 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          padding: '0.45rem',
                          borderRadius: '2px',
                          cursor: 'pointer',
                        }}
                      >
                        TEST SPOOF ANOMALY
                      </button>
                    </div>
                  </>
                ) : (
                  /* High-Res Computer Vision Surveillance Mockup */
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div
                      style={{
                        position: 'relative',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        border: '1px solid var(--border-subtle)',
                        background: '#04060a',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.7)',
                      }}
                    >
                      <img
                        src="/assets/nodin_dashboard_ui.jpg"
                        alt="NodIn Computer Vision Biometric Tracking and Geofence Mockup"
                        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '250px', objectFit: 'cover' }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: '8px',
                          background: 'rgba(0,0,0,0.85)',
                          backdropFilter: 'blur(4px)',
                          padding: '3px 8px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.66rem',
                          color: 'var(--signal-cyan)',
                          borderRadius: '2px',
                          border: '1px solid rgba(0, 240, 255, 0.4)',
                        }}
                      >
                        NODIN CV // FACIAL LANDMARK &amp; LIVENESS TELEMETRY
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        background: 'rgba(10, 14, 22, 0.7)',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '3px',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      Continuous biometric stream verification: facial landmark bounding boxes, 99.4% anti-spoof liveness graph, and strict GPS perimeter polygon lockdown.
                    </div>
                  </div>
                )}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.85rem',
                  marginTop: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span>CONFIDENCE: 99.4%</span>
                <span>LATENCY: 12ms / FRAME</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROJECT 04: CHITRAN INSTITUTE (CLIENT SHIPPED PROJECT)
            ========================================================================= */}
        <div
          className="signal-card scroll-reveal-scale"
          style={{
            padding: 'clamp(1.75rem, 3.5vw, 3rem)',
            marginTop: '4rem',
            borderLeft: '3px solid var(--signal-emerald)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="telemetry-badge badge-emerald">SYSTEM 04 // CLIENT SHIPPED PRODUCTION</span>
              <span className="telemetry-badge">23-YEAR ARTS INSTITUTE INFRASTRUCTURE</span>
            </div>

            <a
              href="https://github.com/Vikram30069/chitran-digital-ecosystem"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <GithubIcon size={14} />
              <span>SOURCE // github.com/Vikram30069/chitran-digital-ecosystem</span>
            </a>
          </div>

          <h3
            className="font-display"
            style={{
              fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-high)',
              marginBottom: '0.5rem',
            }}
          >
            Chitran Institute — Digital Ecosystem &amp; Growth Engine
          </h3>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              color: 'var(--signal-emerald)',
              marginBottom: '1.5rem',
            }}
          >
            Client Shipped Portal, Rank Math SEO Automation &amp; Conversion Pipeline
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
            }}
          >
            <div>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Engineered and shipped full-cycle digital transformation for Chitran Institute (23-year-old cultural institution specializing in drawing, painting, music, dance, and handwriting in Hyderabad). Directed end-to-end technical infrastructure, automated search indexing, and customer acquisition funnels.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--signal-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    01. Web Platform &amp; Local Search Authority
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    Custom responsive portal built with modular CMS architecture, integrated Rank Math SEO automation with localized schema markup, and live Google Business Profile synchronization.
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--signal-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    02. Quantified Conversion &amp; Enrollment Surge (+120%)
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    Architected digital marketing campaigns and streamlined enrollment intake funnels that directly increased active student enrollment by 120% year-over-year.
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--signal-emerald)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                    03. Community Scaling &amp; Reputation Pipeline
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    Scaled organic Instagram community to 3,000+ targeted followers, established automated review collection protocols, and maintained stellar institutional reputation.
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Client Metric Telemetry Engine */}
            <div
              style={{
                background: 'rgba(0,0,0,0.45)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
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
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  <span>CLIENT TELEMETRY COMPARATOR</span>
                  <span style={{ color: 'var(--signal-emerald)' }}>
                    STATUS: SHIPPED &amp; LIVE
                  </span>
                </div>

                {/* View Switch Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setChitranView('baseline');
                    }}
                    onMouseEnter={() => sound.playHover()}
                    aria-pressed={chitranView === 'baseline'}
                    aria-label="View pre-deployment baseline metrics (2022)"
                    style={{
                      flex: 1,
                      background: chitranView === 'baseline' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)',
                      border: chitranView === 'baseline' ? '1px solid var(--border-highlight)' : '1px solid var(--border-subtle)',
                      color: chitranView === 'baseline' ? 'var(--text-high)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.45rem',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    PRE-DEPLOYMENT [2022]
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setChitranView('production');
                    }}
                    onMouseEnter={() => sound.playHover()}
                    aria-pressed={chitranView === 'production'}
                    aria-label="View shipped production live metrics"
                    style={{
                      flex: 1,
                      background: chitranView === 'production' ? 'var(--signal-emerald-dim)' : 'rgba(255,255,255,0.02)',
                      border: chitranView === 'production' ? '1px solid var(--signal-emerald)' : '1px solid var(--border-subtle)',
                      color: chitranView === 'production' ? 'var(--signal-emerald)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.45rem',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    SHIPPED CLIENT [LIVE]
                  </button>
                </div>

                {/* Metric Readout Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      STUDENT ENROLLMENT
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: chitranView === 'production' ? 'var(--signal-emerald)' : 'var(--text-muted)' }}>
                      {chitranView === 'production' ? '+120% SURGE' : 'BASELINE'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
                      {chitranView === 'production' ? 'Multiplied intake capacity' : 'Offline walk-ins only'}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      RANK MATH SEO SCORE
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: chitranView === 'production' ? 'var(--signal-emerald)' : 'var(--text-muted)' }}>
                      {chitranView === 'production' ? '98 / 100' : '41 / 100'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
                      {chitranView === 'production' ? '#1-3 Local Hyderabad Search' : 'Unindexed keywords'}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      COMMUNITY REACH
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: chitranView === 'production' ? 'var(--signal-emerald)' : 'var(--text-muted)' }}>
                      {chitranView === 'production' ? '3,000+' : '< 200'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
                      {chitranView === 'production' ? 'Active student community' : 'Stagnant digital reach'}
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '3px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                      INFRASTRUCTURE
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: chitranView === 'production' ? 'var(--signal-emerald)' : 'var(--text-muted)' }}>
                      {chitranView === 'production' ? '99.9% UPTIME' : 'LEGACY'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-secondary)' }}>
                      {chitranView === 'production' ? 'Automated daily backup' : 'Manual unmanaged'}
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '0.85rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>CLIENT TENURE: 2022–PRESENT</span>
                <span style={{ color: 'var(--signal-emerald)' }}>VERIFIED PRODUCTION DEPLOYMENT</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              LIVE CLIENT INTERFACE CAPTURES (PHOTOS FROM CHITRAN WEBSITE)
              ========================================================================= */}
          <div
            style={{
              marginTop: '2.5rem',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.25rem',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--signal-emerald)', fontWeight: 600 }}>
                  PRODUCTION CLIENT INTERFACE CAPTURES
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  Live architectural captures from the shipped Chitran Institute web portal &amp; conversion funnels
                </div>
              </div>

              {/* Toggle Switch between the 2 Website Captures */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => {
                    sound.playClick();
                    setChitranTab('dance');
                  }}
                  onMouseEnter={() => sound.playHover()}
                  aria-pressed={chitranTab === 'dance'}
                  aria-label="Show Chitran Hero & WhatsApp funnel website capture"
                  style={{
                    background: chitranTab === 'dance' ? 'var(--signal-emerald)' : 'rgba(255,255,255,0.03)',
                    color: chitranTab === 'dance' ? '#000' : 'var(--text-secondary)',
                    border: chitranTab === 'dance' ? '1px solid var(--signal-emerald)' : '1px solid var(--border-subtle)',
                    padding: '0.4rem 0.85rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  01. HERO &amp; WHATSAPP FUNNEL
                </button>
                <button
                  onClick={() => {
                    sound.playClick();
                    setChitranTab('curriculum');
                  }}
                  onMouseEnter={() => sound.playHover()}
                  aria-pressed={chitranTab === 'curriculum'}
                  aria-label="Show Chitran 4-Academy petal UI website capture"
                  style={{
                    background: chitranTab === 'curriculum' ? 'var(--signal-emerald)' : 'rgba(255,255,255,0.03)',
                    color: chitranTab === 'curriculum' ? '#000' : 'var(--text-secondary)',
                    border: chitranTab === 'curriculum' ? '1px solid var(--signal-emerald)' : '1px solid var(--border-subtle)',
                    padding: '0.4rem 0.85rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  02. 4-ACADEMY PETAL UI
                </button>
              </div>
            </div>

            {/* Browser Frame */}
            <div
              style={{
                background: '#07090e',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 20px 48px rgba(0,0,0,0.6)',
              }}
            >
              {/* Browser Header Bar */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderBottom: '1px solid var(--border-subtle)',
                  padding: '0.65rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                  </div>
                  <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                    {chitranTab === 'dance'
                      ? 'https://chitran.org/western-dance-academy'
                      : 'https://chitran.org/curriculum-and-fees'}
                  </span>
                </div>

                <span style={{ color: 'var(--signal-emerald)', fontWeight: 600 }}>
                  [SHIPPED CLIENT INTERFACE]
                </span>
              </div>

              {/* Screenshot Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  background: '#040508',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={
                    chitranTab === 'dance'
                      ? '/assets/chitran_hero_dance.png'
                      : '/assets/chitran_curriculum_ui.png'
                  }
                  alt={
                    chitranTab === 'dance'
                      ? 'Chitran Institute Western Dance Academy Hero and WhatsApp intake funnel'
                      : 'Chitran Institute interactive 4-academy petal curriculum and fee architecture'
                  }
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '620px',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'opacity 0.25s ease',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Technical Footnote Bar */}
              <div
                style={{
                  padding: '0.85rem 1.25rem',
                  background: 'rgba(12, 16, 24, 0.95)',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                }}
              >
                <div style={{ color: 'var(--text-secondary)' }}>
                  {chitranTab === 'dance'
                    ? 'Western Dance Academy: Admissions Open ticker, MSME & IFAA affiliations, direct WhatsApp conversion funnel, and studio video choreography.'
                    : 'Interactive 4-Academy Petals: Custom radial navigation for Drawing, Music, Dance & Handwriting with verified 4.9 rating and IFAA certifications.'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="telemetry-badge badge-emerald" style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}>
                    120% CONVERSION ENGINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
