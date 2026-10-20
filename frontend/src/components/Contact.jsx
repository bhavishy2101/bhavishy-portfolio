import React, { useState } from 'react';
import { Mail, MapPin, Download, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedName || trimmedName.length < 2) {
      setStatus({ loading: false, success: false, message: 'Please enter a valid name (at least 2 characters).' });
      return;
    }
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setStatus({ loading: false, success: false, message: 'Please provide a valid email address.' });
      return;
    }
    if (!trimmedSubject || trimmedSubject.length < 2) {
      setStatus({ loading: false, success: false, message: 'Please enter a subject (at least 2 characters).' });
      return;
    }
    if (!trimmedMessage || trimmedMessage.length < 5) {
      setStatus({ loading: false, success: false, message: 'Please enter a message (at least 5 characters).' });
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      setStatus({
        loading: false,
        success: false,
        message: 'Database connection is not configured. Please ensure Supabase environment variables are set.',
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: trimmedName,
            email: trimmedEmail,
            subject: trimmedSubject,
            message: trimmedMessage,
          },
        ]);

      if (error) {
        console.error('Supabase submission error:', error.message);
        setStatus({
          loading: false,
          success: false,
          message: error.message || 'Something went wrong. Please try again.',
        });
        return;
      }

      setStatus({
        loading: false,
        success: true,
        message: 'Thank you! Your message has been received.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        loading: false,
        success: false,
        message: 'An unexpected error occurred while sending your message. Please try again.',
      });
    }
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      {/* Decorative colored boxes */}
      <div style={{ position: 'absolute', top: 30, right: 20, width: 24, height: 24, backgroundColor: '#3b82f6', borderRadius: '50%', border: '2px solid var(--border)' }} />
      <div style={{ position: 'absolute', bottom: 40, left: -10, width: 16, height: 16, backgroundColor: '#f472b6', borderRadius: '50%', border: '2px solid var(--border)' }} />
      <div style={{ position: 'absolute', bottom: 10, left: 30, width: 14, height: 14, backgroundColor: '#22c55e', border: '2px solid var(--border)' }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--border)', padding: '4px 12px', fontWeight: 700, fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', boxShadow: '2px 2px 0px var(--border)' }}>
            05. LET'S WORK TOGETHER
          </div>
          <span style={{ width: 14, height: 14, backgroundColor: '#3b82f6', border: '2px solid var(--border)', display: 'inline-block' }} />
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--fg-muted)', letterSpacing: '0.5px', textAlign: 'right' }}>
          <div>// HAVE A PROJECT IN MIND?</div>
          <div>LET'S CONNECT!</div>
        </div>
      </div>

      <div className="contact-grid">
        {/* Left Form Box */}
        <div className="contact-form-box">
          <h3>SEND ME A MESSAGE</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status.success === true && (
              <div className="form-success">
                <CheckCircle size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                {status.message}
              </div>
            )}

            {status.success === false && (
              <div className="form-error">
                <AlertCircle size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}
              disabled={status.loading}
            >
              {status.loading ? 'SENDING...' : 'SEND MESSAGE →'}
            </button>
          </form>
        </div>

        {/* Right Info Box */}
        <div>
          <div className="contact-info-box">
            <h3>CONTACT INFO</h3>

            <ul className="contact-info-list">
              <li>
                <div className="contact-info-icon">
                  <Mail size={14} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--fg-muted)' }}>Email</div>
                  <a href="mailto:bhavishy21cse@gmail.com">bhavishy21cse@gmail.com</a>
                </div>
              </li>

              <li>
                <div className="contact-info-icon">
                  <LinkedinIcon />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--fg-muted)' }}>LinkedIn</div>
                  <a href="https://www.linkedin.com/in/bhavishy-garg-bb300135a" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/bhavishy-garg-bb300135a
                  </a>
                </div>
              </li>

              <li>
                <div className="contact-info-icon">
                  <GithubIcon />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--fg-muted)' }}>GitHub</div>
                  <a href="https://github.com/bhavishy2101" target="_blank" rel="noopener noreferrer">
                    github.com/bhavishy2101
                  </a>
                </div>
              </li>

              <li>
                <div className="contact-info-icon">
                  <MapPin size={14} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--fg-muted)' }}>Location</div>
                  <div>Jaipur, Rajasthan, India</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Download Resume Box (Matching Frame 6) */}
          <div className="download-resume-box">
            <h4 style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>
              DOWNLOAD RESUME
            </h4>
            <p>Get a copy of my latest resume in your preferred format</p>

            <div className="download-btns">
              <a
                href="/Bhavishy_Garg_Resume.pdf"
                download="Bhavishy_Garg_Resume.pdf"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={14} /> DOWNLOAD RESUME (PDF)
              </a>
              <a
                href="/Bhavishy_Garg_Resume.docx"
                download="Bhavishy_Garg_Resume.docx"
                className="btn"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <FileText size={14} /> WORD (.DOCX)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Retro Watermark */}
      <div className="footer-word">
        CONNECT
      </div>
    </section>
  );
}
