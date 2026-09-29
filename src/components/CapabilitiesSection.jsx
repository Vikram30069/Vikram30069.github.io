import React, { useState } from 'react';
import { Code2, BrainCircuit, Server, Globe2, Network, BarChart3, Terminal, Cpu } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';
import { sound } from '../utils/soundEffects';

export default function CapabilitiesSection() {
  const [activeGroup, setActiveGroup] = useState(null);

  const capabilityGroups = [
    {
      id: 'languages',
      category: 'Languages',
      badge: 'POLYGLOT RUNTIMES',
      description: 'Typed systems programming and analytical script foundations.',
      items: [
        { name: 'Python', role: 'Primary ML/Agent pipelines, asynchronous backends', level: 'Core' },
        { name: 'SQL', role: 'Complex analytical queries, window functions, schema design', level: 'Core' },
        { name: 'Java', role: 'Object-oriented architectures, enterprise computing', level: 'Proficient' },
        { name: 'JavaScript', role: 'Full-stack client/runtime engineering, event loops', level: 'Core' },
        { name: 'TypeScript', role: 'Type-safe interfaces, Pydantic/Zod contract parity', level: 'Core' },
        { name: 'C', role: 'Low-level memory dynamics, systems engineering fundamentals', level: 'Foundational' },
      ],
    },
    {
      id: 'aiml',
      category: 'AI & Machine Learning',
      badge: 'AUTONOMOUS REASONING & CV',
      description: 'Orchestrating agent graphs, statistical inference, and deep neural vision.',
      items: [
        { name: 'CrewAI', role: 'Multi-agent sequential & hierarchical task-context chaining', level: 'Production' },
        { name: 'LangChain', role: 'Tool routing, memory management, prompt optimization', level: 'Production' },
        { name: 'PyTorch', role: 'Neural network modeling, tensor manipulation', level: 'Advanced' },
        { name: 'TensorFlow', role: 'Model evaluation, classification layers', level: 'Advanced' },
        { name: 'Scikit-learn', role: 'Statistical anomaly baselines, MAD, regressions', level: 'Advanced' },
        { name: 'XGBoost', role: 'Gradient-boosted decision trees, fraud classification', level: 'Production' },
        { name: 'OpenCV', role: 'Matrix transformations, continuous live frame processing', level: 'Production' },
      ],
    },
    {
      id: 'systems',
      category: 'Systems & Cloud Infrastructure',
      badge: 'DISTRIBUTED & CLOUD-NATIVE',
      description: 'Sub-second microservice orchestration, caching, and CI/CD automation.',
      items: [
        { name: 'AWS', role: 'ECS, RDS, S3, CloudFront, Bedrock, EC2 distributed tuning', level: 'Production' },
        { name: 'Docker', role: 'Containerized multi-agent workloads, reproducible environments', level: 'Production' },
        { name: 'FastAPI', role: 'Asynchronous REST APIs with strict Pydantic v2 schemas', level: 'Production' },
        { name: 'PostgreSQL', role: 'Relational storage, Supabase real-time indexing', level: 'Advanced' },
        { name: 'MongoDB', role: 'Document stores, flexible operational schemas', level: 'Proficient' },
        { name: 'Redis', role: 'Low-latency in-memory caching, rate-limiting, session locks', level: 'Advanced' },
        { name: 'GitHub CI/CD', role: 'Automated test runners, linting pipelines, deployments', level: 'Production' },
      ],
    },
    {
      id: 'web',
      category: 'Web & Interface Engineering',
      badge: 'COMMAND CENTERS & CMS',
      description: 'High-density incident dashboards and high-conversion institute platforms.',
      items: [
        { name: 'MERN Stack', role: 'Full-stack reactive web applications and persistence', level: 'Advanced' },
        { name: 'Next.js', role: 'Server-side rendering, incident command centers', level: 'Advanced' },
        { name: 'REST APIs', role: 'Deterministic contract design, OpenAPI documentation', level: 'Production' },
        { name: 'WordPress', role: 'CMS customization, Rank Math SEO tuning, Chitran portal', level: 'Operational' },
      ],
    },
    {
      id: 'integrations',
      category: 'Integrations & Foundation Models',
      badge: 'TELEPHONY & LLM ROUTING',
      description: 'Connecting generative intelligence with live communications hardware.',
      items: [
        { name: 'Twilio (Voice/WhatsApp)', role: 'Automated SMS, WhatsApp alerts, voice dispatch sandbox', level: 'Production' },
        { name: 'OpenAI', role: 'GPT-4o function calling, structured extraction', level: 'Production' },
        { name: 'Gemini', role: 'Multimodal vision and long-context emergency synthesis', level: 'Production' },
        { name: 'Ollama', role: 'Local zero-cost LLM development and private embeddings', level: 'Advanced' },
        { name: 'LiteLLM', role: 'Multi-provider fallback routing and cost-governance layer', level: 'Production' },
      ],
    },
    {
      id: 'analysis',
      category: 'Analytical Foundations & Business BI',
      badge: 'STATISTICAL DECISION SUPPORT',
      description: 'Quantifying behavioral anomalies and communicating operational metrics.',
      items: [
        { name: 'Pandas', role: 'High-volume data wrangling, cleaning 15GB+ datasets', level: 'Core' },
        { name: 'NumPy', role: 'High-performance vector operations, mathematical baselines', level: 'Core' },
        { name: 'Power BI', role: 'Executive dashboards, operational KPI tracking', level: 'Proficient' },
        { name: 'Tableau', role: 'Multi-dimensional data visualization and cohort analysis', level: 'Proficient' },
      ],
    },
  ];

  return (
    <section id="capabilities" className="story-panel" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container-custom">
        {/* Panel Index */}
        <div className="panel-index">
          <span className="index-num">03</span>
          <span className="index-status">TECHNICAL MATRIX // CAPABILITIES</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
          <span style={{ color: 'var(--text-muted)' }}>PRODUCTION CAPACITIES</span>
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
            Capabilities structured for system integrity.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Every stack selection is tied to production accountability: sub-second latency, deterministic error budgets, and multi-agent coordination.
          </p>
        </div>

        {/* Live Interactive Command Center (Typing Simulator) */}
        <InteractiveTerminal />

        {/* 6 Architectural Matrices */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {capabilityGroups.map((group) => (
            <div
              key={group.id}
              className="signal-card"
              onMouseEnter={() => sound.playHover()}
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Card Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="telemetry-badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                    {group.badge}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    [{group.items.length} TECHNOLOGIES]
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: 'var(--text-high)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {group.category}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  {group.description}
                </p>

                {/* Structured Item List with roles and levels */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '3px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-high)' }}>
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: item.level === 'Production' ? 'var(--signal-cyan)' : 'var(--text-muted)',
                            background: item.level === 'Production' ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                            padding: '0.1rem 0.35rem',
                            borderRadius: '2px',
                          }}
                        >
                          {item.level}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                        {item.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
