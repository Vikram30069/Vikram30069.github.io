import React, { useState, useEffect } from 'react';
import { Terminal, ShieldAlert, Cpu, Award, Mail, ExternalLink, Activity } from 'lucide-react';

export default function Navigation({ activeSection = 'hero' }) {
  const [currentTime, setCurrentTime] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live Hyderabad Clock (UTC+05:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'INDEX', index: '00' },
    { id: 'about', label: 'THESIS', index: '01' },
    { id: 'projects', label: 'SYSTEMS', index: '02' },
    { id: 'capabilities', label: 'CAPABILITIES', index: '03' },
    { id: 'experience', label: 'CHRONOLOGY', index: '04' },
    { id: 'education', label: 'CREDENTIALS', index: '05' },
    { id: 'contact', label: 'TRANSMIT', index: '06' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(7, 8, 12, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Left: Identity & Telemetry */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button
            onClick={() => scrollTo('hero')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-high)',
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <span>VIKRAM BANERJEE</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--signal-cyan)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                padding: '0.1rem 0.4rem',
                borderRadius: '2px',
                fontWeight: 500,
              }}
            >
              IITM // MATRUSRI
            </span>
          </button>

          {/* Real-time Telemetry (Desktop) */}
          <div
            className="telemetry-badge"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.74rem',
            }}
            id="nav-telemetry"
          >
            <span style={{ color: 'var(--text-muted)' }}>HYD [IST]</span>
            <span style={{ color: 'var(--signal-cyan)', fontWeight: 600 }}>{currentTime || '12:40:00'}</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--signal-emerald)' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--signal-emerald)',
                  boxShadow: '0 0 6px var(--signal-emerald)',
                }}
              />
              SIGNAL ONLINE
            </span>
          </div>
        </div>

        {/* Desktop Numbered Index Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: activeSection === item.id ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
                border: activeSection === item.id ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid transparent',
                color: activeSection === item.id ? 'var(--signal-cyan)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                padding: '0.4rem 0.65rem',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = 'var(--text-high)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <span style={{ color: activeSection === item.id ? 'var(--signal-cyan)' : 'var(--text-muted)', fontSize: '0.7rem' }}>
                {item.index}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-nav-toggle"
          style={{
            display: 'none',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-high)',
            padding: '0.5rem 0.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
          aria-label="Toggle Navigation Index"
        >
          {mobileMenuOpen ? '[CLOSE]' : '[INDEX]'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(7, 8, 12, 0.98)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-high)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                textAlign: 'left',
                padding: '0.5rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                cursor: 'pointer',
              }}
            >
              <span style={{ color: 'var(--signal-cyan)' }}>{item.index}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Media Query Styles for Desktop/Mobile Nav */}
      <style>{`
        @media (min-width: 992px) {
          #nav-telemetry {
            display: inline-flex !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
