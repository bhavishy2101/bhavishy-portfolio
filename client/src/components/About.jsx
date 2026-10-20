import React from 'react';
import { Globe, Shield, Cloud, Layout, GitBranch, Gamepad2, Dumbbell } from 'lucide-react';

const personalInfo = [
  { key: 'Name', val: 'Bhavishy Garg' },
  { key: 'Role', val: 'Computer Science Undergraduate' },
  { key: 'Education', val: 'B.Tech CSE (JKLU, Jaipur)' },
  { key: 'Location', val: 'Jaipur, Rajasthan, India' },
  { key: 'Email', val: 'bhavishy21cse@gmail.com' },
  { key: 'Availability', val: 'Open to opportunities' },
];

const interests = [
  { name: 'Web Dev', icon: <Globe size={22} /> },
  { name: 'Cyber Security', icon: <Shield size={22} /> },
  { name: 'Cloud', icon: <Cloud size={22} /> },
  { name: 'UI/UX', icon: <Layout size={22} /> },
  { name: 'Open Source', icon: <GitBranch size={22} /> },
  { name: 'Gaming', icon: <Gamepad2 size={22} /> },
  { name: 'Fitness', icon: <Dumbbell size={22} /> },
];

export default function About() {
  return (
    <section id="about" style={{ position: 'relative' }}>
      {/* Decorative colored boxes */}
      <div style={{ position: 'absolute', top: 50, right: 30, width: 18, height: 18, backgroundColor: '#3b82f6', border: '2px solid var(--border)' }} />
      <div style={{ position: 'absolute', top: 120, left: -10, width: 14, height: 14, backgroundColor: '#a855f7', border: '2px solid var(--border)' }} />
      <div style={{ position: 'absolute', top: 280, right: '45%', width: 16, height: 16, backgroundColor: '#3b82f6', border: '2px solid var(--border)' }} />

      <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--border)', padding: '4px 12px', fontWeight: 700, fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', marginBottom: '1.25rem', boxShadow: '2px 2px 0px var(--border)' }}>
        01. ABOUT ME
      </div>

      <div className="about-grid">
        {/* Left Column */}
        <div>
          <h2 className="about-title">
            LET ME<br />
            INTRODUCE<br />
            MYSELF.
            <span style={{ display: 'inline-block', width: 14, height: 14, backgroundColor: '#3b82f6', border: '2px solid var(--border)', marginLeft: 8, verticalAlign: 'middle' }} />
          </h2>

          <p className="about-bio">
            Hi, I'm Bhavishy Garg, a BTech CSE student who loves building web applications, solving real world problems and learning new technologies. I enjoy working on full stack development, cybersecurity and cloud technologies.
          </p>

          <ul className="about-list">
            <li>Always learning...</li>
            <li>Always building...</li>
            <li>Always curious...</li>
          </ul>

          {/* Personal Info Box */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ width: 12, height: 12, backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--border)', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                PERSONAL INFO
              </span>
            </div>

            <div className="info-table">
              {personalInfo.map((item, idx) => (
                <div className="info-row" key={idx}>
                  <div className="info-key">{item.key}</div>
                  <div className="info-val">
                    {item.key === 'Email' ? (
                      <a href={`mailto:${item.val}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {item.val}
                      </a>
                    ) : (
                      item.val
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Photo frame */}
          <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto 2.5rem auto' }}>
            <div style={{
              border: '3px solid var(--border)',
              padding: '8px',
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80"
                alt="Workspace / Coding Setup"
                style={{ width: '100%', maxWidth: '380px', height: '240px', objectFit: 'cover', display: 'block', border: '2px solid var(--border)' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-12px',
              right: '10px',
              backgroundColor: 'var(--card-bg)',
              border: '2px solid var(--border)',
              padding: '4px 12px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.75rem',
              fontWeight: 700,
              boxShadow: '2px 2px 0px var(--border)'
            }}>
              &lt; living in code /&gt;
            </div>
          </div>

          {/* Stats Boxes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Top Pink Card */}
            <div style={{
              backgroundColor: '#f472b6',
              border: '2px solid var(--border)',
              padding: '1.25rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow)'
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', lineHeight: 1, color: '#000' }}>3+</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, color: '#000', letterSpacing: '1px' }}>
                Years of Learning
              </div>
            </div>

            {/* Bottom 2 Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div style={{
                backgroundColor: '#67e8f9',
                border: '2px solid var(--border)',
                padding: '1rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow)'
              }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', lineHeight: 1, color: '#000' }}>4+</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', fontWeight: 700, color: '#000' }}>
                  Projects Built
                </div>
              </div>

              <div style={{
                backgroundColor: '#86efac',
                border: '2px solid var(--border)',
                padding: '1rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow)'
              }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', lineHeight: 1, color: '#000' }}>50+</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', fontWeight: 700, color: '#000' }}>
                  Problems Solved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interests Bar */}
      <div style={{ marginTop: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span style={{ width: 12, height: 12, backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--border)', display: 'inline-block' }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.5px' }}>
            INTERESTS
          </span>
        </div>

        <div className="interests-grid">
          {interests.map((item, idx) => (
            <div className="interest-item" key={idx}>
              <div className="icon" style={{ display: 'flex', justifyContent: 'center', color: 'var(--fg)' }}>{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
