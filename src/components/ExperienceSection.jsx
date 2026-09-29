import React from 'react';
import { Briefcase, TrendingUp, Cpu, Users, Building2, Award } from 'lucide-react';
import sound from '../utils/soundEffects';

export default function ExperienceSection() {
  const experiences = [
    {
      index: '00',
      role: 'Machine Learning and Data Engineering Intern',
      organization: 'Viswam AI',
      period: '2023–2024',
      status: 'COMPLETED',
      location: 'Hyderabad, India',
      category: 'ENGINEERING & DEEP LEARNING',
      metrics: ['15GB+ Ingestion Pipeline', '-20% Deployment Latency', '-15% EC2 Compute Overhead'],
      bullets: [
        'Built automated data ingestion and cleansing pipelines processing 15GB+ of unstructured domain data.',
        'Contributed to training and optimizing a regional LLM prototype, reducing deployment latency by 20%.',
        'Optimized distributed inference workloads on AWS EC2, cutting operational compute overhead by 15%.',
      ],
    },
    {
      index: '01',
      role: 'Director of Programs and Operations',
      organization: 'Chitran Institute of Drawing, Painting, Music, Dance & Handwriting',
      period: '2022–Present',
      status: 'PRESENT',
      location: 'Hyderabad, India',
      category: 'DIGITAL OPERATIONS & GROWTH',
      metrics: ['+120% Enrollment Growth', '3,000+ Instagram Community', 'Rank Math SEO Leadership'],
      bullets: [
        'Manages the 23-year-old institute’s core website infrastructure, Google Business Profile, and SEO (Rank Math).',
        'Runs digital outreach and social media growth, scaling community presence to over 3,000 followers.',
        'Handles institutional reputation management and designed digital marketing campaigns that grew student enrollment by 120%.',
      ],
    },
    {
      index: '02',
      role: 'Project Executive & Facilitator',
      organization: 'Bajaj Foundation',
      period: 'Present',
      status: 'PRESENT',
      location: 'Government of Telangana Program',
      category: 'GOVERNMENT CIVIC PROGRAM',
      metrics: ['Govt of Telangana Program', 'Multi-Stakeholder Coordination'],
      bullets: [
        'Facilitates high-priority program execution for Government of Telangana civic initiatives.',
        'Coordinates inter-agency stakeholder communications, resource mapping, and ground field tracking.',
      ],
    },
    {
      index: '03',
      role: 'City Operations Head, Hyderabad',
      organization: 'Boundless, IITM BS Travel Society',
      period: 'May 2025–Present',
      status: 'PRESENT',
      location: 'Hyderabad (Hybrid)',
      category: 'COLLEGIATE NETWORK LEADERSHIP',
      metrics: ['Official City Representative', 'Tour Logistics & Meetups'],
      bullets: [
        'Serves as the official Hyderabad city representative for IIT Madras BS student society.',
        'Organizes regional collegiate meetups, oversees inter-city tour logistics, and drives active student community engagement.',
      ],
    },
    {
      index: '04',
      role: 'Core Member',
      organization: 'Diplomacia',
      period: 'Jun 2024–Nov 2024',
      status: 'COMPLETED',
      location: 'Hyderabad, India',
      category: 'DEBATE & EXECUTIVE SCREENING',
      metrics: ['JAM Rounds & Forensics', 'Executive Board Selections'],
      bullets: [
        'Leads debate moderation, Just-A-Minute (JAM) competitive rounds, and technical candidate screening.',
        'Executes Model United Nations (MUN) delegate evaluations and Executive Board (EB) selection committees.',
      ],
    },
    {
      index: '05',
      role: 'Public Relations Specialist',
      organization: 'NebulaPioneers',
      period: 'Jul 2024–Present',
      status: 'PRESENT',
      location: 'Hyderabad (On-site)',
      category: 'OUTREACH & INTERVIEWS',
      metrics: ['Candidate Interview Pipelines', 'Cross-Functional Outreach'],
      bullets: [
        'Directs institutional stakeholder communications and external organizational partnerships.',
        'Manages candidate screening protocols, interview assessment pipelines, and cross-functional team outreach.',
      ],
    },
  ];

  return (
    <section id="experience" className="story-panel" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container-custom">
        {/* Panel Index */}
        <div className="panel-index scroll-reveal-left">
          <span className="index-num">04</span>
          <span className="index-status">CHRONOLOGY // TIMELINE &amp; OPERATIONS</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>6 CONCURRENT &amp; PROGRESSIVE TRACKS</span>
        </div>

        <div className="scroll-reveal" style={{ maxWidth: '840px', marginBottom: '3.5rem' }}>
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
            Chronological accountability.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Engineering rigor paired with active operational responsibility across technology companies, educational institutes, and state initiatives.
          </p>
        </div>

        {/* Timeline Sequence Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((item, idx) => (
            <div
              key={item.index}
              className={`signal-card scroll-reveal-scale reveal-delay-${(idx % 2) + 1}`}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                borderLeft: '2px solid var(--border-subtle)',
                transition: 'border-left-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                sound.playHover();
                e.currentTarget.style.borderLeftColor = 'var(--signal-cyan)';
              }}
              onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = 'var(--border-subtle)')}
            >
              {/* Left Column: Organization, Role, Period */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.6rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--signal-cyan)',
                      background: 'var(--signal-cyan-dim)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '2px',
                    }}
                  >
                    INDEX {item.index}
                  </span>
                  <span className="telemetry-badge" style={{ fontSize: '0.7rem' }}>
                    {item.category}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-high)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.role}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    color: 'var(--signal-cyan)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.organization}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}
                >
                  {item.status === 'PRESENT' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--signal-emerald)', fontWeight: 600 }}>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--signal-emerald)',
                          boxShadow: '0 0 6px var(--signal-emerald)',
                        }}
                      />
                      {item.period} [ACTIVE]
                    </span>
                  ) : (
                    <span style={{ color: 'var(--text-primary)' }}>
                      {item.period} <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>[COMPLETED]</span>
                    </span>
                  )}
                  <span style={{ color: 'var(--border-subtle)' }}>//</span>
                  <span>{item.location}</span>
                </div>

                {/* Metric Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-primary)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '2px',
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Responsibilities & Concrete Evidence */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {item.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55,
                      }}
                    >
                      <span style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '3px' }}>
                        +
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
