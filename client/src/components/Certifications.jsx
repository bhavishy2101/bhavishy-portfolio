import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Maximize2, X, Download, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    id: 'trailhead-ranger',
    title: 'Salesforce Ranger & Agentblazer Innovator',
    issuer: 'Salesforce Trailhead',
    date: 'Aug 2026',
    category: 'Salesforce & AI',
    badgeColor: '#0284c7',
    certNo: 'Trailhead Profile',
    desc: 'Achieved prestigious Ranger rank with 134 Badges, 75,925 Points, and 13 completed Trails. Recognized as Agentblazer Innovator \'26.',
    image: '/salesforce_trailhead_ranger.jpg',
    verifyUrl: 'https://www.salesforce.com/trailblazer/lyftbxxgexkkblvprr',
    pdfUrl: null,
    highlights: [
      '134 Badges earned across Salesforce Administration, Developer, and OmniStudio tracks',
      '75,925 Trailhead points accumulated',
      'Agentblazer Innovator \'26 recognition',
      'Rank: RANGER (Top Tier Achievement)'
    ]
  },
  {
    id: 'bytepx-internship',
    title: 'Certificate of Internship Completion',
    issuer: 'BytePX Technologies Pvt. Ltd.',
    date: '5th Aug 2026',
    category: 'Internship',
    badgeColor: '#16a34a',
    certNo: 'CIN: U62012RJ2024PTC092322',
    desc: 'Awarded for successfully completing internship in the domain of Data and AI (10/06/2026 to 24/07/2026) in Jaipur, demonstrating exceptional technical and collaborative skills.',
    image: '/certificate_bytepx_internship.png',
    verifyUrl: null,
    pdfUrl: '/Bhavishy_Garg_BytePX_Internship_Certificate.pdf',
    highlights: [
      'Contributed significantly to Data and AI projects',
      'Architected Warranty & Service Management System on Salesforce CRM & OmniStudio',
      'Tenure: 10/06/2026 – 24/07/2026 in Jaipur, Rajasthan',
      'Issued by Purva Mangal, Head of Business Enablement'
    ]
  },
  {
    id: 'redhat-rh124',
    title: 'Red Hat System Administration I (RH124) Ver. 10',
    issuer: 'Red Hat',
    date: '18th April 2026',
    category: 'Linux & Cloud',
    badgeColor: '#ef4444',
    certNo: 'Credit Hours: 40',
    desc: 'Completed 40 hours of comprehensive hands-on Linux system administration covering operating system fundamentals, user/file permissions, process controls, and systemd service management.',
    image: '/certificate_redhat_rh124.png',
    verifyUrl: 'https://www.credly.com/badges/8b1e3a3b-2814-4e4a-83c8-b8065633f278',
    pdfUrl: null,
    highlights: [
      '40 Credit hours of official Red Hat Enterprise Linux training',
      'Linux command-line mastery, bash operations & filesystem hierarchy',
      'User, group, and advanced file permissions administration',
      'Process monitoring, daemon management, and systemd service control',
      'Verified digital credential issued on Credly'
    ]
  },
  {
    id: 'python-aws',
    title: 'Python with AWS Cloud Training (20+ Hours)',
    issuer: 'LinuxWorld Informatics (#13)',
    date: '13th - 27th July 2026',
    category: 'Linux & Cloud',
    badgeColor: '#d97706',
    certNo: 'LW-JPR-2026-5353',
    desc: '20+ hours of hands-on training featuring practical demonstrations covering Python OOP, REST APIs, and core AWS services (EC2, S3, DynamoDB, Lambda, SNS, CloudWatch, Boto3).',
    image: '/certificate_python_aws.png',
    verifyUrl: null,
    pdfUrl: '/Bhavishy_Garg_Python_AWS_Certificate.pdf',
    highlights: [
      '20+ hours of rigorous hands-on cloud development',
      'AWS Services: EC2, S3, DynamoDB, Lambda, SNS, CloudWatch, IAM, Boto3',
      'Hands-on practical demonstrations across core AWS services',
      'Mentored by Syed Jibbran Ali Sir & Vimal Daga (Founder #13)'
    ]
  },
  {
    id: 'wscube-hackathon',
    title: 'Pre Hackathon 2026 (HackJKLU 5.0)',
    issuer: 'WsCube Career School, Jaipur x HackJKLU 5.0',
    date: '23rd Feb 2026',
    category: 'Hackathon',
    badgeColor: '#06b6d4',
    certNo: 'Issued: 23-Feb-2026',
    desc: 'Actively participated in Pre Hackathon 2026 in collaboration with HackJKLU 5.0, solving real-world challenges through collaborative ideation, rapid decision-making, and software solution building.',
    image: '/certificate_wscube_hackathon.png',
    verifyUrl: null,
    pdfUrl: null,
    highlights: [
      'Collaborative problem solving and rapid technical prototyping under time constraints',
      'Organized by WsCube Career School, Jaipur in partnership with HackJKLU 5.0',
      'Cross-disciplinary teamwork and architectural brainstorming',
      'Certified by Kushagra Bhatia (Founder) & Bhagirath Giri (Director)'
    ]
  },
  {
    id: 'infosys-dbms',
    title: 'Database Management System Part – 1',
    issuer: 'Infosys Springboard',
    date: '30th Nov 2025',
    category: 'Databases & SQL',
    badgeColor: '#3b82f6',
    certNo: 'verify.onwingspan.com',
    desc: 'Completed in-depth certification in core database concepts, relational DBMS architectures, schema design, and practical SQL query formulation through Infosys Springboard.',
    image: '/certificate_infosys_dbms.png',
    verifyUrl: 'https://verify.onwingspan.com',
    pdfUrl: null,
    highlights: [
      'Core relational database management systems (RDBMS) architecture',
      'Practical SQL query formulation, joins, indexing, and data modeling',
      'Database normalization, integrity constraints, and transaction management',
      'Issued by Satheesha B. Nanjappa, Senior VP, Infosys Limited'
    ]
  }
];

const categories = ['All', 'Salesforce & AI', 'Linux & Cloud', 'Internship', 'Hackathon', 'Databases & SQL'];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCert, setActiveCert] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeCert]);

  const filteredCerts = activeCategory === 'All'
    ? certificates
    : certificates.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" style={{ position: 'relative' }}>
      {/* Decorative box */}
      <div style={{ position: 'absolute', top: 40, right: 30, width: 14, height: 14, backgroundColor: '#f59e0b', border: '2px solid var(--border)' }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--border)', padding: '4px 12px', fontWeight: 700, fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', boxShadow: '2px 2px 0px var(--border)' }}>
            CERTIFICATIONS & CREDENTIALS
          </div>
          <span style={{ width: 14, height: 14, backgroundColor: '#a855f7', border: '2px solid var(--border)', display: 'inline-block' }} />
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--fg-muted)', letterSpacing: '0.5px' }}>
          // 6 VERIFIED INDUSTRY CREDENTIALS & SPECIALIZED TRAINING
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat} {cat === 'All' ? `(${certificates.length})` : `(${certificates.filter(c => c.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="cert-grid">
        {filteredCerts.map((cert) => (
          <div className="cert-card" key={cert.id} style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header / Category */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div className="cert-platform" style={{ fontWeight: 700 }}>{cert.issuer}</div>
              <span className="tag" style={{
                fontSize: '0.65rem',
                backgroundColor: 'var(--bg)',
                border: '1.5px solid var(--border)',
                fontWeight: 700
              }}>
                {cert.category}
              </span>
            </div>

            {/* Certificate Image Thumbnail (Clickable) */}
            <div
              onClick={() => setActiveCert(cert)}
              style={{
                position: 'relative',
                border: '2px solid var(--border)',
                backgroundColor: '#000',
                marginBottom: '1rem',
                cursor: 'pointer',
                overflow: 'hidden',
                aspectRatio: '16/10'
              }}
              title="Click to inspect certificate"
            >
              <img
                src={cert.image}
                alt={cert.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.25s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.2s ease',
                color: '#fff',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.75rem',
                fontWeight: 700
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0'}
              >
                <div style={{
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--fg)',
                  border: '1.5px solid var(--border)',
                  padding: '4px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  boxShadow: '2px 2px 0px #000'
                }}>
                  <Maximize2 size={12} /> Inspect
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '1.02rem', lineHeight: 1.3, marginBottom: '0.5rem' }}>
              <Award size={18} color="#eab308" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{cert.title}</span>
            </h3>

            {/* Description */}
            <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', margin: '0 0 1rem 0', lineHeight: 1.5, flex: 1 }}>
              {cert.desc}
            </p>

            {/* Footer with Date, Verification & View */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid var(--border-light)', paddingTop: '0.75rem', marginTop: 'auto' }}>
              <span className="cert-date" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem' }}>
                {cert.date}
              </span>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  onClick={() => setActiveCert(cert)}
                  className="btn btn-sm"
                  style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem' }}
                >
                  View
                </button>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                  >
                    Verify <ExternalLink size={11} />
                  </a>
                ) : cert.pdfUrl ? (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                  >
                    PDF <Download size={11} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== ANIMATED CERTIFICATE LIGHTBOX / POPUP ===== */}
      {activeCert && (
        <div
          className="project-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveCert(null);
          }}
        >
          <div className="project-modal-window" style={{ maxWidth: '820px' }}>
            {/* Header */}
            <div className="project-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} color="var(--accent-yellow)" />
                <span>CERTIFICATE_VERIFICATION://{activeCert.id}.pdf</span>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="project-modal-close-btn"
                title="Close (Esc)"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="project-modal-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div>
                  <span className="tag" style={{ backgroundColor: 'var(--accent-yellow)', color: '#000', fontWeight: 700, marginBottom: '0.4rem', display: 'inline-block' }}>
                    {activeCert.issuer}
                  </span>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.2rem 0' }}>
                    {activeCert.title}
                  </h2>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: 'var(--fg-muted)' }}>
                    Credential Identifier: <strong>{activeCert.certNo}</strong> · Issued: {activeCert.date}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {activeCert.verifyUrl && (
                    <a
                      href={activeCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <ExternalLink size={13} /> Verify Credential
                    </a>
                  )}
                  {activeCert.pdfUrl && (
                    <a
                      href={activeCert.pdfUrl}
                      download
                      className="btn btn-primary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <Download size={13} /> Download Certificate PDF
                    </a>
                  )}
                </div>
              </div>

              {/* Full Image Display */}
              <div style={{
                border: '3px solid var(--border)',
                backgroundColor: '#000',
                padding: '4px',
                boxShadow: 'var(--shadow)',
                marginBottom: '1.25rem'
              }}>
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>

              {/* Key Skills & Highlights */}
              <div style={{
                backgroundColor: 'var(--bg)',
                border: '2px solid var(--border)',
                padding: '1rem',
                boxShadow: 'var(--shadow)'
              }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--fg)' }}>
                  ✅ KEY HIGHLIGHTS & VALIDATED SKILLS
                </div>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', lineHeight: 1.8, color: 'var(--fg-muted)' }}>
                  {activeCert.highlights.map((h, i) => (
                    <li key={i}>• {h}</li>
                  ))}
                </ul>
              </div>

              {/* Bottom close action */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                <button
                  onClick={() => setActiveCert(null)}
                  className="btn btn-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
