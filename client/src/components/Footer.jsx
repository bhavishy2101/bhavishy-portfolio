import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div>
        <strong>BHAVISHY.exe</strong> © 2026 · ALL RIGHTS RESERVED
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={scrollToTop}
          className="btn btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
          title="Back to Top"
        >
          <ArrowUp size={12} /> TOP
        </button>
      </div>
    </footer>
  );
}
