import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioPage() {
  const location = useLocation();

  useEffect(() => {
    // If the path is a section (e.g. /about or /#about), scroll to that section
    const path = location.pathname.replace(/^\//, '').toLowerCase();
    const validSections = ['about', 'projects', 'experience', 'skills', 'certifications', 'contact'];

    if (validSections.includes(path)) {
      // Delay slightly for initial render/animations to mount
      const timer = setTimeout(() => {
        const el = document.getElementById(path);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (path === '' || path === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <main>
      {/* Landing / Hero Frame */}
      <Hero />

      {/* 01. About Me Frame */}
      <About />

      {/* 02. My Projects Frame */}
      <Projects />

      {/* 03. Experience Frame */}
      <Experience />

      {/* 04. Skills Frame */}
      <Skills />

      {/* Certifications & Achievements (Assignment Rubric) */}
      <Certifications />

      {/* 05. Contact / Work Together Frame */}
      <Contact />
    </main>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="portfolio-app">
      {/* Retro Grid Background */}
      <div className="grid-bg" />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* React Router Routes */}
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/:section" element={<PortfolioPage />} />
        <Route path="*" element={<PortfolioPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}
