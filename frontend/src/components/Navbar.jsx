import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const sections = ['about', 'projects', 'experience', 'skills', 'certifications', 'contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPath = location.pathname.replace(/^\//, '').toLowerCase();
  const activeSection = sections.includes(currentPath) ? currentPath : active;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a
        href="/"
        className="nav-logo"
        onClick={e => {
          e.preventDefault();
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        BHAVISHY.exe
      </a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {sections.map(s => (
          <li key={s}>
            <a
              href={`/${s}`}
              className={activeSection === s ? 'active' : ''}
              onClick={e => {
                e.preventDefault();
                navigate(`/${s}`);
                scrollTo(s);
              }}
            >
              /{s.toUpperCase()}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/contact"
            className="hire-btn"
            onClick={e => {
              e.preventDefault();
              navigate('/contact');
              scrollTo('contact');
            }}
          >
            HIRE ME
          </a>
        </li>
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
