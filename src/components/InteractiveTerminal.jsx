import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, CornerDownLeft, Sparkles, Check, Copy } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Vikram Banerjee System Shell v2.4 [Connected to telemetry server at Hyderabad (IST)]',
    },
    {
      type: 'system',
      text: 'Type a command or click an executable below to query real-time production metrics.',
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalEndRef = useRef(null);

  const quickCommands = [
    { label: 'cat /sys/architecture', cmd: 'cat /sys/architecture' },
    { label: 'scan --projects', cmd: 'scan --projects' },
    { label: 'test --fraud-weights', cmd: 'test --fraud-weights' },
    { label: 'query --viswam-llm', cmd: 'query --viswam-llm' },
    { label: 'sudo hire-vikram', cmd: 'sudo hire-vikram' },
  ];

  const executeCommand = (cmdText) => {
    if (!cmdText.trim()) return;
    sound.playClick();

    const normalized = cmdText.trim().toLowerCase();
    const newEntry = { type: 'user', text: `$ ${cmdText}` };

    let output = '';

    if (normalized.includes('architecture') || normalized.includes('cat')) {
      output = `[SYSTEM ARCHITECTURE]
• AI Pipelines: CrewAI (10-agent context chaining), LangChain, LiteLLM, Ollama
• Distributed Backends: FastAPI, Pydantic v2, PostgreSQL / Supabase, Redis
• Cloud & DevOps: AWS EC2 / ECS / RDS / S3 / CloudFront, Docker Compose, GitHub CI/CD
• Mathematical Models: Median Absolute Deviation (MAD), Outlier Invariant UPI Fraud Scoring`;
    } else if (normalized.includes('projects') || normalized.includes('scan')) {
      output = `[FLAGSHIP PRODUCTION PLATFORMS]
01. RescueNet AI: 10-agent disaster triage & Twilio dispatch across 148 Telangana facilities.
02. Datadrishti (Paytm IntentGuard): Anomaly layer with 6 weighted risk signals & adaptive friction.
03. NodIn: Computer vision facial recognition + anti-spoof geofencing perimeter.
04. Chitran Digital Ecosystem: Shipped client portal yielding +120% YoY institutional enrollment.`;
    } else if (normalized.includes('fraud') || normalized.includes('test')) {
      output = `[DATADRISHTI FRAUD WEIGHT MATRIX]
• Amount Anomaly (+30) | Novelty Recipient (+20) | Device Fingerprint (+20)
• Time Variance (+15)  | Geofence Radius (+10)  | Velocity Surge (+5)
=> Current Friction Policy: 0-30 Seamless | 56-80 Step-up Biometric | >80 Hard Out-of-Band Hold`;
    } else if (normalized.includes('viswam') || normalized.includes('llm')) {
      output = `[VISWAM AI FIELD METRICS]
• Task: Automated data cleansing and regional LLM prototype inference scripts.
• Volume: 15 GB+ unstructured domain datasets ingested in Python.
• Impact: -20% deployment latency, -15% EC2 cluster computational overhead.`;
    } else if (normalized.includes('hire')) {
      output = `[OFFER ACKNOWLEDGED]
Status: Open to high-impact AI Engineering, Distributed Systems & Software Engineering roles.
Location: Hyderabad, India (Open to Hybrid / Remote / On-site).
Direct Line: vikramb9291@gmail.com | +91 6304589007
Resume: Download at https://vikram30069.github.io/resume.html`;
    } else if (normalized === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      output = `Command not recognized: '${cmdText}'. Available commands: ${quickCommands.map((q) => q.cmd).join(', ')}, clear`;
    }

    setHistory((prev) => [...prev, newEntry, { type: 'output', text: output }]);
    setInputVal('');
  };

  const simulateTypeAndRun = (cmd) => {
    if (isTyping) return;
    setIsTyping(true);
    setInputVal('');
    let idx = 0;

    const interval = setInterval(() => {
      sound.playType();
      idx++;
      setInputVal(cmd.substring(0, idx));
      if (idx >= cmd.length) {
        clearInterval(interval);
        setTimeout(() => {
          executeCommand(cmd);
          setIsTyping(false);
        }, 200);
      }
    }, 45);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div
      className="interactive-terminal-card"
      style={{
        background: 'rgba(8, 11, 18, 0.95)',
        border: '1px solid var(--border-active)',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 240, 255, 0.05)',
        margin: '2.5rem 0',
      }}
    >
      {/* Terminal Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1rem',
          background: 'rgba(15, 20, 32, 0.9)',
          borderBottom: '1px solid var(--border-subtle)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ marginLeft: '0.5rem', color: 'var(--signal-cyan)', fontWeight: 600 }}>
            vikram@telemetry-engine: ~ (interactive bash)
          </span>
        </div>
        <div style={{ color: 'var(--text-muted)' }}>TTY // SESSION ACTIVE</div>
      </div>

      {/* Terminal History Output */}
      <div
        style={{
          padding: '1.25rem',
          maxHeight: '260px',
          overflowY: 'auto',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          lineHeight: 1.55,
          color: 'var(--text-primary)',
        }}
      >
        {history.map((h, i) => (
          <div
            key={i}
            style={{
              marginBottom: '0.65rem',
              color:
                h.type === 'user'
                  ? 'var(--signal-cyan)'
                  : h.type === 'system'
                  ? 'var(--text-muted)'
                  : 'var(--text-high)',
              whiteSpace: 'pre-wrap',
            }}
          >
            {h.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Executable Chips */}
      <div
        style={{
          padding: '0.5rem 1rem',
          background: 'rgba(12, 16, 26, 0.7)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.45rem',
          alignItems: 'center',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginRight: '0.25rem' }}>
          RUN EXECUTABLE:
        </span>
        {quickCommands.map((q) => (
          <button
            key={q.cmd}
            onClick={() => simulateTypeAndRun(q.cmd)}
            onMouseEnter={() => sound.playHover()}
            disabled={isTyping}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--signal-cyan)',
              padding: '0.25rem 0.55rem',
              borderRadius: '3px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              cursor: isTyping ? 'not-allowed' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.15s ease',
            }}
            aria-label={`Run terminal command: ${q.cmd}`}
          >
            <Play size={10} />
            <span>{q.label}</span>
          </button>
        ))}
      </div>

      {/* Terminal Input Line */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          executeCommand(inputVal);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.75rem 1rem',
          background: 'rgba(10, 14, 22, 0.95)',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--signal-emerald)', fontWeight: 700, marginRight: '0.5rem' }}>
          $&nbsp;
        </span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'cat /sys/architecture', 'scan --projects', or click an executable above..."
          disabled={isTyping}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--text-high)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
          }}
          aria-label="Interactive terminal command input"
        />
        <button
          type="submit"
          disabled={isTyping || !inputVal.trim()}
          style={{
            background: 'none',
            border: 'none',
            color: inputVal.trim() ? 'var(--signal-cyan)' : 'var(--text-muted)',
            cursor: inputVal.trim() ? 'pointer' : 'default',
            display: 'inline-flex',
            alignItems: 'center',
          }}
          aria-label="Send command"
        >
          <CornerDownLeft size={15} />
        </button>
      </form>
    </div>
  );
}
