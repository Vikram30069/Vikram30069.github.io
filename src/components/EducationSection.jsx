import React, { useState } from 'react';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, BookmarkCheck, FileCheck, Eye } from 'lucide-react';
import sound from '../utils/soundEffects';

export default function EducationSection() {
  const [showMural, setShowMural] = useState(false);
  const credentials = [
    {
      degree: 'B.Sc. in Data Science and Applications',
      institution: 'Indian Institute of Technology Madras (IIT Madras)',
      timeline: 'Expected 2027',
      focus: 'Machine Learning, Statistical Inference, Database Management',
      type: 'PREMIER DEGREE',
      highlights: [
        'Rigorous mathematical treatment of statistical learning models and anomaly distributions.',
        'High-dimensional data wrangling, probabilistic modeling, and relational database systems.',
      ],
    },
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'Matrusri Engineering College, Hyderabad',
      timeline: 'Expected 2027',
      focus: 'Algorithms, Distributed Systems, Cloud Computing',
      type: 'ENGINEERING DEGREE',
      highlights: [
        'Core computational theory, algorithm design, data structures, and computer organization.',
        'Distributed systems architecture, asynchronous networked services, and cloud pipelines.',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Data Engineering Virtual Internship (8 Weeks)',
      issuer: 'AICTE EduSkills (Curriculum by AWS Academy)',
      period: 'Jun–Aug 2026',
      grade: 'Grade: A',
      certId: '4bba844946995c080f93',
      details: 'Intensive immersion in AWS storage architectures, ETL pipeline optimization, data lake design, and scalable cloud processing.',
    },
  ];

  const honors = [
    {
      title: 'Gold Medalist — National Science Olympiad (NSO)',
      years: '2019–2021',
      details: 'Demonstrated top-tier national analytical problem-solving and scientific deductive reasoning across multi-year cycles.',
    },
    {
      title: 'Gold Medalist — International Mathematics Olympiad (IMO)',
      years: '2020–2021',
      details: 'Awarded gold medal standing in competitive mathematical proofs, number theory, and discrete combinatorics.',
    },
    {
      title: '5th State Rank — National Level Yoga Competitions',
      years: 'State Rank',
      details: 'Recognized for physiological discipline, mental fortitude, and competitive precision.',
    },
    {
      title: '1st Place — National Level Fine Arts Exhibition',
      years: 'Pondicherry',
      details: 'First place distinction in national visual arts, bridging visual design discipline with engineering systems.',
    },
  ];

  return (
    <section id="education" className="story-panel" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container-custom">
        {/* Panel Index */}
        <div className="panel-index">
          <span className="index-num">05</span>
          <span className="index-status">PEDIGREE // EDUCATION &amp; CREDENTIALS</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>DUAL ACADEMIC &amp; COMPETITIVE RECORD</span>
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
            Academic pedigree &amp; verified distinction.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Dual-degree rigor in computer science and data science, complemented by accredited cloud data engineering and competitive mathematics honors.
          </p>
        </div>

        {/* Dual Degrees Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {credentials.map((edu, idx) => (
            <div
              key={idx}
              className="signal-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="telemetry-badge badge-cyan">{edu.type}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--signal-cyan)' }}>
                    {edu.timeline}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--text-high)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {edu.degree}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {edu.institution}
                </div>

                <div
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.85rem',
                    borderRadius: '3px',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    CURRICULAR FOCUS:
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {edu.focus}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {edu.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: 'var(--signal-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', marginTop: '3px' }}>
                        &bull;
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Olympiads 2-Col Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* AWS / AICTE Certification Card */}
          {certifications.map((cert, cIdx) => (
            <div
              key={cIdx}
              className="signal-card"
              style={{
                padding: '2rem',
                borderLeft: '3px solid var(--signal-cyan)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="telemetry-badge badge-emerald">OFFICIAL ACCREDITATION</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--signal-emerald)', fontWeight: 600 }}>
                  {cert.grade}
                </span>
              </div>

              <h3
                className="font-display"
                style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-high)', marginBottom: '0.35rem' }}
              >
                {cert.title}
              </h3>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--signal-cyan)', marginBottom: '0.75rem' }}>
                {cert.issuer}
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                {cert.details}
              </p>

              <div
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '2px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>CERTIFICATE ID:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{cert.certId}</span>
              </div>
            </div>
          ))}

          {/* Olympiad Honors Card */}
          <div
            className="signal-card"
            style={{
              padding: '2rem',
              borderLeft: '3px solid var(--signal-amber)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="telemetry-badge" style={{ color: 'var(--signal-amber)', borderColor: 'rgba(245, 158, 11, 0.3)', background: 'var(--signal-amber-dim)' }}>
                NATIONAL &amp; GLOBAL DISTINCTIONS
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--signal-amber)', fontWeight: 600 }}>
                GOLD MEDALS
              </span>
            </div>

            <h3
              className="font-display"
              style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-high)', marginBottom: '1rem' }}
            >
              STEM Olympiad Record
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {honors.map((hon, hIdx) => {
                const isArt = hon.title.includes('Fine Arts');
                return (
                  <div key={hIdx} style={{ borderBottom: hIdx < honors.length - 1 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: hIdx < honors.length - 1 ? '1rem' : 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-high)' }}>
                        {hon.title}
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--signal-cyan)' }}>
                        {hon.years}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: isArt ? '0.6rem' : 0 }}>
                      {hon.details}
                    </div>

                    {isArt && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <button
                          onClick={() => {
                            sound.playClick();
                            setShowMural((prev) => !prev);
                          }}
                          onMouseEnter={() => sound.playHover()}
                          aria-expanded={showMural}
                          aria-label="Toggle Salvador Dali mural artwork preview"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            background: showMural ? 'var(--signal-amber-dim)' : 'rgba(255,255,255,0.03)',
                            border: showMural ? '1px solid var(--signal-amber)' : '1px solid var(--border-subtle)',
                            color: showMural ? 'var(--signal-amber)' : 'var(--text-muted)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            padding: '0.3rem 0.6rem',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          <Eye size={12} />
                          <span>{showMural ? 'HIDE ARTWORK PREVIEW' : 'VIEW SALVADOR DALI MURAL [PHOTO]'}</span>
                        </button>

                        {showMural && (
                          <div
                            style={{
                              marginTop: '0.75rem',
                              borderRadius: '3px',
                              overflow: 'hidden',
                              border: '1px solid rgba(245, 158, 11, 0.4)',
                              background: '#04060a',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                            }}
                          >
                            <img
                              src="/assets/vikram_dali_mural.png"
                              alt="Award-winning Salvador Dali fine arts mural by Vikram Banerjee"
                              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '220px', objectFit: 'cover' }}
                              loading="lazy"
                            />
                            <div
                              style={{
                                padding: '0.5rem 0.75rem',
                                background: 'rgba(10, 14, 22, 0.9)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <span style={{ color: 'var(--signal-amber)' }}>1ST PLACE NATIONAL EXHIBITION // PONDICHERRY</span>
                              <span style={{ color: 'var(--text-muted)' }}>Original Composition by Vikram</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
