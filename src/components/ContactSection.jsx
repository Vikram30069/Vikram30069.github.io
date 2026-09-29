import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Radio, MapPin, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderRole, setSenderRole] = useState('Recruiter / Engineering Lead');
  const [messageIntent, setMessageIntent] = useState('Internship / Full-time Opportunity');
  const [customNote, setCustomNote] = useState('');

  const email = 'vikramb9291@gmail.com';
  const phone = '+91 6304589007';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Transmission] ${messageIntent} — ${senderName || 'Team'}`);
    const body = encodeURIComponent(
      `Hello Vikram,\n\nSender: ${senderName || 'Anonymous'}\nRole/Context: ${senderRole}\nObjective: ${messageIntent}\n\nMessage:\n${customNote || 'I reviewed your portfolio and would like to discuss technical opportunities and systems work.'}\n\nSent via Signal Transmission Console`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="story-panel" style={{ backgroundColor: 'var(--bg-canvas)', borderBottom: 'none' }}>
      <div className="container-custom">
        {/* Panel Index */}
        <div className="panel-index">
          <span className="index-num">06</span>
          <span className="index-status">OPEN TRANSMISSION // DIRECT CHANNEL</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>HYDERABAD, INDIA</span>
        </div>

        <div style={{ maxWidth: '840px', marginBottom: '3.5rem' }}>
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
            Initiate communication.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Direct channels open for technical interviews, hackathon collaboration, research inquiries, and engineering roles.
          </p>
        </div>

        {/* Contact Layout: Left Info Console + Right Transmission Dispatcher */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Direct Access Coordinates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Primary Email Card */}
            <div className="signal-card" style={{ padding: '1.75rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                PRIMARY TRANSMISSION ENDPOINT
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: 600,
                  color: 'var(--signal-cyan)',
                  marginBottom: '1.25rem',
                  wordBreak: 'break-all',
                }}
              >
                {email}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={`mailto:${email}`}
                  className="btn-signal"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <Mail size={15} />
                  <span>COMPOSE EMAIL</span>
                </a>
                <button
                  onClick={copyToClipboard}
                  className="btn-secondary"
                  style={{ padding: '0.8rem 1rem' }}
                  title="Copy email address"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? <Check size={16} color="var(--signal-emerald)" /> : <Copy size={16} />}
                </button>
              </div>

              {copied && (
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--signal-emerald)', marginTop: '0.6rem' }}>
                  [COPIED TO CLIPBOARD]
                </div>
              )}
            </div>

            {/* Direct Phone & Voice Endpoint */}
            <div className="signal-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                DIRECT VOICE &amp; WHATSAPP
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--text-high)', fontWeight: 600 }}>
                  {phone}
                </span>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="telemetry-badge badge-cyan"
                  style={{ textDecoration: 'none' }}
                >
                  CALL DIRECT
                </a>
              </div>
            </div>

            {/* Profiles & Public Coordinates */}
            <div
              className="signal-card"
              style={{
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}
            >
              <a
                href="https://github.com/Vikram30069"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-subtle)',
                  padding: '1rem',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--signal-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-high)' }}>
                  <GithubIcon size={16} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600 }}>GITHUB</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  @Vikram30069
                </span>
              </a>

              <a
                href="https://linkedin.com/in/vikram-banerjee-a10111282"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-subtle)',
                  padding: '1rem',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--signal-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-high)' }}>
                  <LinkedinIcon size={16} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600 }}>LINKEDIN</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  in/vikram-banerjee
                </span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Signal Transmission Console */}
          <div
            className="signal-card"
            style={{
              padding: '2rem',
              borderTop: '2px solid var(--signal-cyan)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="telemetry-badge badge-cyan">SIGNAL CONSOLE // TRANSMIT</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--signal-emerald)' }}>
                ENCRYPTION: 256-BIT
              </span>
            </div>

            <form onSubmit={handleTransmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label
                  htmlFor="contact-sender-name"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}
                >
                  YOUR IDENTIFIER / NAME:
                </label>
                <input
                  id="contact-sender-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Elena Rostova / Hiring Lead"
                  style={{
                    width: '100%',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    padding: '0.65rem 0.85rem',
                    color: 'var(--text-high)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    outline: 'none',
                  }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message-intent"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}
                >
                  COMMUNICATION PURPOSE:
                </label>
                <select
                  id="contact-message-intent"
                  value={messageIntent}
                  onChange={(e) => setMessageIntent(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(10, 14, 22, 0.95)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    padding: '0.65rem 0.85rem',
                    color: 'var(--text-high)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    outline: 'none',
                  }}
                >
                  <option value="Internship / Full-time Opportunity">Engineering Role / Internship Opportunity</option>
                  <option value="Multi-Agent AI Research Collaboration">Multi-Agent AI / CV Research Collaboration</option>
                  <option value="Hackathon / Technical Panel">Hackathon Judging / Speaking Invitation</option>
                  <option value="Chitran Operations Inquiry">Chitran Institute Operations Inquiry</option>
                  <option value="Direct Technical Consultation">Technical Consultation / Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-custom-note"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}
                >
                  TRANSMISSION PAYLOAD / NOTE:
                </label>
                <textarea
                  id="contact-custom-note"
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  rows={4}
                  placeholder="Share details regarding the role, problem statement, or project scope..."
                  style={{
                    width: '100%',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '2px',
                    padding: '0.65rem 0.85rem',
                    color: 'var(--text-high)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-signal"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.9rem',
                  fontSize: '0.86rem',
                }}
              >
                <Send size={15} />
                <span>DISPATCH TRANSMISSION</span>
              </button>
            </form>
          </div>
        </div>

        {/* Engineering Colophon & Architectural Footer */}
        <footer
          style={{
            marginTop: '5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            <span style={{ color: 'var(--text-high)' }}>VIKRAM BANERJEE</span> &copy; 2026 // HYDERABAD, INDIA
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span>IIT MADRAS &amp; MATRUSRI</span>
            <span>&bull;</span>
            <span style={{ color: 'var(--signal-cyan)' }}>SIGNAL VS. NOISE SPECIFICATION</span>
            <span>&bull;</span>
            <span>60 FPS WEBGL</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
