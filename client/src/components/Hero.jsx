import { useEffect, useRef, useState } from 'react';

const roles = ['Full Stack Developer', 'MERN Stack Dev', 'Problem Solver', 'CSE Student'];

const techStack = [
  { name: 'React',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Express',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
];


const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/+$/, '');

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false);
        setRoleIdx(i => (i + 1) % roles.length);
      }, 300);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="home" className="hero-section">
      {/* Status bar */}
      <div className="hero-status fade-in-up">
        <span className="status-dot" />
        SYSTEM STATUS: ONLINE
      </div>

      {/* Main title grid */}
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title fade-in-up">
            <span>BHAVISHY</span>
            <span>GARG</span>
          </h1>

          <div className="hero-desc-box fade-in-up">
            <p>I build digital products that refuse to be boring.</p>
            <p className="hero-tech">React · Python · JavaScript · Node</p>
          </div>

          {/* Typewriter role */}
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.9rem',
            color: 'var(--fg-muted)',
            margin: '0.5rem 0 1rem',
            minHeight: '1.5em'
          }}>
            &gt; {displayed}<span className="cursor-blink" />
          </p>

          <div className="hero-actions fade-in-up">
            <a href="#projects" className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              VIEW PROJECTS →
            </a>
            <a
              href={`${API_BASE}/api/download/cv/pdf`}
              download="Bhavishy_Garg_Resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              title="Download CV in PDF format via Express backend"
            >
              ⬇ CV (PDF)
            </a>
            <a
              href={`${API_BASE}/api/download/cv/docx`}
              download="Bhavishy_Garg_Resume.docx"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              title="Download CV in Word (.docx) format via Express backend"
            >
              📄 CV (WORD)
            </a>
          </div>
        </div>

        {/* Hero photo */}
        <div className="hero-photo-wrapper fade-in-up">
          <img
            src="/bhavishy.jpg?v=2"
            alt="Bhavishy Garg"
            className="hero-photo"
          />
          <span className="hero-photo-tag">&lt; developer /&gt;</span>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="tech-stack-section fade-in-up">
        <div className="tech-stack-label">
          <strong>TECH STACK</strong>
          <span>// TECHNOLOGIES I WORK WITH</span>
        </div>
        <div className="tech-icons">
          {techStack.map(t => (
            <div className="tech-icon-item" key={t.name}>
              <img src={t.icon} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>


      {/* Decorative squares */}
      <div className="accent-square" style={{ width: 16, height: 16, background: 'var(--accent-pink)', top: '12%', right: '5%' }} />
      <div className="accent-square" style={{ width: 12, height: 12, background: 'var(--accent-blue)', bottom: '15%', right: '8%' }} />
      <div className="accent-circle" style={{ width: 20, height: 20, background: 'var(--accent-green)', top: '35%', right: '2%' }} />
    </section>
  );
}
