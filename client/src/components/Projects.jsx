import React, { useState, useEffect } from 'react';
import {
  Sprout,
  Shield,
  ExternalLink,
  GitBranch,
  X,
  Maximize2,
  CheckCircle2,
  Zap,
  ShoppingBag,
  Award,
  Wrench
} from 'lucide-react';

const projects = [
  {
    id: 'crop-yield',
    title: 'Crop Yield Prediction Using Machine Learning',
    category: 'AI/ML',
    cardIcon: <Sprout size={32} color="#22c55e" />,
    shortDesc: 'High-accuracy agricultural yield forecasting model predicting crop yield (kg/ha) using Random Forest (R² = 0.93) based on environmental and farming conditions.',
    tags: ['Python', 'Machine Learning', 'Random Forest', 'XGBoost', 'Kaggle'],
    githubUrl: 'https://github.com/bhavishy2101/Crop-Yield-Prediction-ML',
    liveUrl: 'https://lnkd.in/gdY6hvzb',
    mediaType: 'poster',
    mediaSrc: '/crop_yield_prediction.png',
    metrics: [
      { label: 'Best R² Score', val: '0.93', bg: '#86efac' },
      { label: 'Lowest MAE (kg/ha)', val: '708.53', bg: '#fde047' },
      { label: 'Models Compared', val: '4 Models', bg: '#67e8f9' },
      { label: 'Farming Features', val: '9 Features', bg: '#f472b6' },
    ],
    collaborators: 'Mayank Shekhar Pathak · Gourang Tak · Bhavishy Garg',
    problem: 'Agriculture is one of the most data-rich yet underserved domains when it comes to technology adoption. Predicting crop yield (kg/ha) given environmental and farming conditions enables smarter decisions for farmers, planners, and policymakers.',
    dataset: {
      source: 'Kaggle Agricultural Dataset',
      target: 'Crop Yield (kg/ha)',
      features: ['Crop Type', 'Crop Year', 'State', 'Season', 'Area', 'Rainfall', 'Temperature', 'Fertilizer Usage', 'Pesticide Usage']
    },
    methodology: [
      'Data Preprocessing: Zero missing values, unit normalization (tonnes → kg/ha), One-Hot Encoding for categorical features.',
      'Train/Test Split: 80% Training / 20% Evaluation set.',
      'Feature Engineering: Regional, seasonal, and climate-crop interaction analysis.',
      'Model Evaluation: Compared Linear Regression, Decision Tree, Random Forest & XGBoost across R², MAE & RMSE.'
    ],
    modelTable: [
      { name: 'Linear Regression', type: 'Baseline (Simple Linear)', r2: '0.70', mae: '2,515.89', rmse: '5,812.98', isBest: false, badge: 'Baseline' },
      { name: 'Decision Tree', type: 'Rule-based Splits', r2: '0.87', mae: '830.07', rmse: '3,763.66', isBest: false, badge: 'Interpretable' },
      { name: 'Random Forest', type: 'Ensemble of Trees', r2: '0.93', mae: '708.53', rmse: '2,737.54', isBest: true, badge: '★ Best Overall' },
      { name: 'XGBoost', type: 'Sequential Boosting', r2: '0.93', mae: '878.13', rmse: '2,838.01', isBest: false, badge: 'High Accuracy' },
    ],
    takeaways: [
      'Crop type is the dominant predictor of yield variations.',
      'Environmental conditions drive regional and seasonal variability.',
      'Ensemble models consistently outperform single-model and linear baselines.'
    ]
  },
  {
    id: 'warranty-service',
    title: 'Warranty & Service Management System',
    category: 'Salesforce',
    cardIcon: <Shield size={32} color="#3b82f6" />,
    shortDesc: 'Centralized enterprise service operations platform developed during Salesforce Developer Internship at BytePX using Salesforce CRM & OmniStudio.',
    tags: ['Salesforce', 'OmniStudio', 'OmniScripts', 'FlexCards', 'Agentforce'],
    githubUrl: 'https://github.com/bhavishy2101/Warranty-Service-Management-System',
    liveUrl: 'https://www.salesforce.com/trailblazer/lyftbxxgexkkblvprr',
    mediaType: 'dashboard',
    mediaSrc: '/salesforce_warranty_dashboard.jpg',
    metrics: [
      { label: 'Role / Org', val: 'BytePX Intern', bg: '#67e8f9' },
      { label: 'Core Entities', val: '6 Objects', bg: '#fde047' },
      { label: 'OmniStudio Stack', val: 'FlexCards + Scripts', bg: '#86efac' },
      { label: 'AI Integration', val: 'Agentforce', bg: '#f472b6' },
    ],
    collaborators: 'Bhavishy Garg (Salesforce Developer Intern @ BytePX)',
    problem: 'In a typical service business, customer issues arrive through fragmented channels (phone calls, emails, WhatsApp). Managing customer info, warranty claims, service tickets, technician dispatches, and on-site visits separately creates severe tracking bottlenecks and SLA slippage.',
    solution: 'Designed and deployed a unified, centralized company-side service management system within Salesforce CRM to streamline end-to-end service lifecycles across six core business entities.',
    entities: [
      { name: 'Customer', icon: '👤', desc: 'Centralized account records, contact channels, communication history & verification.' },
      { name: 'Registered Product', icon: '📦', desc: 'Product brand, model, serial numbers, categories (AC, TV, Microwave, etc.) & active state.' },
      { name: 'Warranty', icon: '🛡️', desc: 'Warranty types (Manufacturer, Extended, AMC), status, coverage terms & expiry timelines.' },
      { name: 'Service Request', icon: '🔧', desc: 'Automated ticket creation, problem classification, priority matrix & SLA tracking.' },
      { name: 'Technician', icon: '👨‍🔧', desc: 'Technician profiles, skillsets, territory coverage, availability & workload balancing.' },
      { name: 'Service Visit', icon: '📅', desc: 'Visit scheduling, dispatch routing, on-site diagnostics, and completion reporting.' },
    ],
    technologies: [
      'Salesforce CRM & Custom Objects',
      'Salesforce Administration',
      'OmniStudio',
      'Data Mappers / DataRaptors',
      'OmniScripts',
      'FlexCards',
      'Integration Procedures',
      'Agentforce'
    ],
    devProcess: [
      { step: '1️⃣ Data Model', desc: 'Architected custom objects, master-detail and lookup relationships for all 6 entities.' },
      { step: '2️⃣ Data Mapping', desc: 'Built Data Mappers / DataRaptors for bidirectional field-level extraction and load from Salesforce records.' },
      { step: '3️⃣ OmniScripts', desc: 'Constructed guided, validated multi-step screens for service intakes and customer registration.' },
      { step: '4️⃣ FlexCards', desc: 'Engineered responsive contextual cards summarizing customer, warranty, request, and technician statuses.' },
      { step: '5️⃣ Testing & Validation', desc: 'Rigorous end-to-end verification of object relationships, rules, mapping procedures, and UI workflows.' },
    ]
  },
  {
    id: 'quickpicks-vending',
    title: 'QuickPicks - Reward-Based Smart Vending System',
    category: 'Full Stack',
    cardIcon: <ShoppingBag size={32} color="#0d9488" />,
    shortDesc: 'Reward-based smart college vending machine platform applying DBMS principles to incentivize students through automated purchase tracking, milestone-based free rewards, and anti-misuse spend thresholds.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Flask (Python)', 'DBMS & SQL', 'Loyalty Engine'],
    githubUrl: 'https://github.com/bhavishy2101/QuickPicks---Reward-Based-Smart-Vending-System',
    liveUrl: 'https://github.com/bhavishy2101/QuickPicks---Reward-Based-Smart-Vending-System#readme',
    mediaType: 'dashboard',
    mediaSrc: '/quickpicks_vending.png',
    screenshots: [
      { title: 'Snack Catalog', src: '/quickpicks_vending.png', desc: 'Real-time snack dispensing catalog with pricing, stock status & quick cart drawer' },
      { title: 'Shopping Cart', src: '/quickpicks_cart.png', desc: 'Order summary, fee calculation, milestone notifications & dispensing checkout' },
      { title: 'Student Authentication', src: '/quickpicks_auth.png', desc: 'Student ID / email registration with welcome perks & loyalty progress onboarding' },
      { title: 'Rewards Catalog', src: '/quickpicks_rewards.png', desc: 'Purchase milestone tracker and 100% free unlocked reward items' }
    ],
    metrics: [
      { label: 'Domain', val: 'Campus Vending', bg: '#67e8f9' },
      { label: 'Milestone Rule', val: 'Every 5th Purchase', bg: '#fde047' },
      { label: 'Anti-Abuse', val: 'Min Spend Limit', bg: '#86efac' },
      { label: 'Architecture', val: 'Flask + DBMS', bg: '#f472b6' },
    ],
    collaborators: 'Bhavishy Garg & Project Group',
    problem: 'College vending machines currently offer only a dry, transactional experience with no benefits for frequent users. Students purchase snacks and drinks daily without any loyalty rewards, discount incentives, or purchase history tracking.',
    solution: 'Designed and implemented QuickPicks—a reward-driven smart vending system applying core Database Management System (DBMS) concepts. The system records every transaction under student IDs, accumulates loyalty reward points, validates minimum spending thresholds to prevent misuse, and unlocks 100% free products and discount coupons upon milestone purchases.',
    systemOverview: [
      'Each transaction is recorded using the user’s name or student ID.',
      'Users earn reward points on every purchase made at the machine.',
      'Rewards are unlocked when a specific purchase count is completed (e.g., multiples of five).',
      'Enforces a minimum spending threshold to prevent misuse or artificial milestone gaming.',
      'Eligible users receive free products or discount coupons.',
      'Reward points can be redeemed as instant discounts on future purchases.',
      'Ensures repeat purchases while maintaining fairness and data consistency using DBMS principles.'
    ],
    dbmsRules: [
      { rule: 'Transaction Ledger & Consistency', desc: 'ACID principles guarantee inventory updates, user points balance, and order logs commit synchronously without inconsistencies.' },
      { rule: 'Anti-Misuse Threshold Validation', desc: 'Integrity checks verify order value against minimum spending limits before qualifying transactions toward milestone rewards.' },
      { rule: 'Relational Schema Architecture', desc: 'Normalized tables for Students, Products, Cart/Dispense, Transactions, and Loyalty Vouchers linked through foreign keys.' },
      { rule: 'Dual Incentive Reward Logic', desc: 'Combines continuous point accrual for discounts with discrete milestone-based 100% free product unlocks.' }
    ],
    technologies: [
      'Frontend: HTML5, CSS3, JavaScript',
      'Backend: Flask (Python Web Framework)',
      'Database / DBMS: Relational Database Design, Transaction Tracking, Referential Integrity',
      'Business Logic: Automated Reward Calculation, Threshold Validation, Milestone Engine'
    ]
  },
  {
    id: 'resqcharge-ev',
    title: 'Smart EV Battery & Route Prediction Platform',
    category: 'Full Stack',
    cardIcon: <Zap size={32} color="#06b6d4" />,
    shortDesc: 'Innovation-driven prototype platform predicting EV battery range, validating reachable destinations, calculating optimal routes with charging stations, and dispatching on-demand mobile charging vans.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Flask (Python)', 'Route Prediction', 'EV Mobility'],
    githubUrl: 'https://github.com/bhavishy2101/Smart-EV-Battery-Route-Prediction-Platform',
    liveUrl: 'https://github.com/bhavishy2101/Smart-EV-Battery-Route-Prediction-Platform#readme',
    mediaType: 'dashboard',
    mediaSrc: '/resqcharge_dashboard.png',
    screenshots: [
      { title: 'Live EV Analytics Dashboard', src: '/resqcharge_dashboard.png', desc: 'Real-time battery health monitoring, AI route optimization map, nearest stations & dynamic alerts' },
      { title: 'Platform Landing Interface', src: '/resqcharge_landing.png', desc: 'ResQCharge hero view with EV smart assistant overview and feature exploration' },
      { title: 'Subscription & Van Tiers', src: '/resqcharge_pricing.png', desc: 'Commercial business model: On-demand ResQCharge Van (₹300), Basic (Free), and Plus (₹249/mo)' }
    ],
    metrics: [
      { label: 'Domain', val: 'EV Mobility Tech', bg: '#67e8f9' },
      { label: 'Battery Analytics', val: 'Health & Range Est.', bg: '#86efac' },
      { label: 'Emergency Support', val: 'Mobile Charging Van', bg: '#fde047' },
      { label: 'Business Model', val: 'Subscription Plans', bg: '#f472b6' },
    ],
    collaborators: 'Bhavishy Garg & 3rd Sem Innovation Team',
    problem: 'A major hurdle in electric vehicle adoption is range anxiety—uncertainty surrounding real-time battery range, unexpected charge depletion, and route planning dilemmas. Getting stranded with zero charge in areas lacking accessible charging infrastructure is an acute real-world challenge.',
    solution: 'Built ResQCharge, an intelligent full-stack EV assistant and route prediction web platform combining real-time battery status tracking, algorithmic range estimation, charging station route mapping, and an emergency mobile charging van roadside dispatch service supported by a sustainable subscription model.',
    systemOverview: [
      'Displays real-time battery status and state-of-charge of the electric vehicle.',
      'Predicts maximum drivable distance based on current charge and driving efficiency.',
      'Validates whether a user-entered destination is reachable on existing battery charge.',
      'Suggests the most optimal route with waypoint charging stops when direct travel is not possible.',
      'Shows all active charging stations along the selected travel corridor.',
      'Generates proactive live alerts (low battery, weather headwinds, traffic) to prevent users from getting stranded.',
      'Emergency roadside support: Users can book an on-demand mobile charging van to receive emergency roadside charge.',
      'Sustainable business model: Built around tiered subscriptions ensuring long-term operational viability.'
    ],
    features: [
      { title: 'Live Battery Health Gauge', icon: '⚡', desc: 'Real-time telemetry showing battery charge %, regenerative braking efficiency, and health diagnostics.' },
      { title: 'AI Route Optimization Map', icon: '🗺️', desc: 'Dynamic navigation mapping user location, nearest charging stations, and mobile charging vans.' },
      { title: 'Predictive Live Alerts', icon: '🚨', desc: 'Contextual notification system warning of battery drops, traffic rerouting, and weather effects on range.' },
      { title: 'Mobile ResQCharge Van', icon: '🚐', desc: 'Roadside assistance dispatch enabling drivers to order high-speed emergency charging units on the go.' },
      { title: 'Subscription Business Model', icon: '💎', desc: 'Commercial architecture featuring pay-per-use emergency van dispatch (₹300), free basic monitoring, and premium Plus tier (₹249/mo).' }
    ],
    technologies: [
      'Frontend: HTML5, CSS3 (Modern Dark-Mode UI), Vanilla JavaScript',
      'Backend: Flask (Python Web Framework)',
      'Mapping & Algorithms: Distance calculation, Route waypoint optimization, Battery range forecasting',
      'Business Architecture: Subscription tiers and emergency roadside dispatch service model'
    ]
  }
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Salesforce'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxImg) {
          setLightboxImg(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, lightboxImg]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject || lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, lightboxImg]);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ position: 'relative' }}>
      {/* Decorative accent boxes */}
      <div style={{ position: 'absolute', top: 30, right: 30, width: 16, height: 16, backgroundColor: '#22c55e', border: '2px solid var(--border)' }} />
      <div style={{ position: 'absolute', top: 70, right: 80, width: 12, height: 12, backgroundColor: '#3b82f6', border: '2px solid var(--border)' }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--border)', padding: '4px 12px', fontWeight: 700, fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', boxShadow: '2px 2px 0px var(--border)', marginBottom: '0.5rem' }}>
            02. MY PROJECTS
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, margin: 0 }}>
            FEATURED ENGINEERING PROJECTS
          </h2>
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--fg-muted)', letterSpacing: '0.5px', maxWidth: '350px' }}>
          // SELECT ANY PROJECT TO VIEW FULL INTERACTIVE ARCHITECTURE & DETAILS
        </div>
      </div>

      {/* Category filter tabs */}
      <div className="filter-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat} {cat === 'All' ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Clean Project Cards Grid (Matching Reference Screenshot) */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            {/* Card Icon */}
            <div style={{
              width: 56,
              height: 56,
              border: '2px solid var(--border)',
              backgroundColor: 'var(--bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              boxShadow: '2px 2px 0px var(--border)'
            }}>
              {project.cardIcon}
            </div>

            {/* Category tag */}
            <div style={{ marginBottom: '0.4rem' }}>
              <span className="tag" style={{
                backgroundColor: project.category === 'AI/ML' ? '#86efac' : project.category === 'Full Stack' ? '#fde047' : '#93c5fd',
                color: '#000',
                fontWeight: 700,
                fontSize: '0.65rem'
              }}>
                {project.category}
              </span>
            </div>

            {/* Title & Description */}
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>
              {project.title}
            </h3>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {project.shortDesc}
            </p>

            {/* Tech Badges */}
            <div className="project-card-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag" style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)', border: '1.5px solid var(--border)' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="project-card-links" style={{ marginTop: 'auto', paddingTop: '0.75rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedProject(project)}
                className="btn btn-primary btn-sm"
                style={{ flex: 1, minWidth: '95px', justifyContent: 'center' }}
              >
                Details →
              </button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ justifyContent: 'center' }}
                  title="View GitHub Repository"
                >
                  <GitBranch size={13} /> Repo
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                  style={{ justifyContent: 'center' }}
                  title="View Live Demo or Project"
                >
                  <ExternalLink size={13} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ===== ANIMATED PROJECT DETAILS POPUP MODAL ===== */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="project-modal-window">
            {/* Modal Header */}
            <div className="project-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: 10, height: 10, backgroundColor: 'var(--accent-yellow)', display: 'inline-block' }} />
                <span>PROJECT_DETAILS://{selectedProject.id}.exe</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="project-modal-close-btn"
                title="Close (Esc)"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="project-modal-body">
              {/* Project Headline */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <span className="tag" style={{
                      backgroundColor: selectedProject.category === 'AI/ML' ? '#86efac' : selectedProject.category === 'Full Stack' ? '#fde047' : '#93c5fd',
                      color: '#000',
                      fontWeight: 700
                    }}>
                      {selectedProject.category}
                    </span>
                    {selectedProject.tags.map(t => (
                      <span key={t} className="tag" style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)', border: '1.5px solid var(--border)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', fontWeight: 700, margin: '0 0 0.4rem 0' }}>
                    {selectedProject.title}
                  </h2>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--fg-muted)' }}>
                    Contributors: <strong>{selectedProject.collaborators}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <GitBranch size={13} /> GitHub Repo <ExternalLink size={12} />
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => setLightboxImg(selectedProject.mediaSrc)}
                    className="btn btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <Maximize2 size={13} /> Enlarge Image
                  </button>
                </div>
              </div>

              {/* Quick Metrics Bar */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '0.85rem',
                marginBottom: '1.5rem'
              }}>
                {selectedProject.metrics.map(m => (
                  <div key={m.label} style={{ border: '2px solid var(--border)', backgroundColor: m.bg, padding: '0.85rem', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', lineHeight: 1, color: '#000' }}>{m.val}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', fontWeight: 700, color: '#000' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Two Column Layout: Media Preview & Description */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
                {/* Media Preview Box */}
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--fg)' }}>
                    {selectedProject.mediaType === 'poster' ? '📊 RESEARCH POSTER PREVIEW' : '💻 LIVE SALESFORCE DASHBOARD'}
                  </div>
                  <div
                    onClick={() => setLightboxImg(selectedProject.mediaSrc)}
                    style={{
                      border: '3px solid var(--border)',
                      backgroundColor: '#000',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow)'
                    }}
                    title="Click to view full image"
                  >
                    <img
                      src={selectedProject.mediaSrc}
                      alt={selectedProject.title}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      opacity: 0,
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                    >
                      <div style={{
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--fg)',
                        border: '2px solid var(--border)',
                        padding: '6px 14px',
                        boxShadow: '2px 2px 0px #000',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}>
                        <Maximize2 size={14} /> Click to expand
                      </div>
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: 'var(--fg-muted)', marginTop: '0.4rem' }}>
                    Click preview to open full high-resolution image
                  </div>
                </div>

                {/* Problem Statement & Solution */}
                <div>
                  <div style={{
                    backgroundColor: 'var(--bg)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '1rem'
                  }}>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: 8, height: 8, backgroundColor: 'var(--accent-pink)', display: 'inline-block' }} />
                      The Problem
                    </h4>
                    <p style={{ color: 'var(--fg-muted)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                      {selectedProject.problem}
                    </p>
                  </div>

                  {selectedProject.solution && (
                    <div style={{
                      backgroundColor: 'var(--bg)',
                      border: '2px solid var(--border)',
                      padding: '1.25rem',
                      boxShadow: 'var(--shadow)'
                    }}>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: 8, height: 8, backgroundColor: '#22c55e', display: 'inline-block' }} />
                        The Solution
                      </h4>
                      <p style={{ color: 'var(--fg-muted)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                        {selectedProject.solution}
                      </p>
                    </div>
                  )}

                  {selectedProject.dataset && (
                    <div style={{
                      backgroundColor: 'var(--bg)',
                      border: '2px solid var(--border)',
                      padding: '1.25rem',
                      boxShadow: 'var(--shadow)'
                    }}>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        📊 Dataset & Target Variable
                      </h4>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', color: 'var(--fg-muted)', marginBottom: '0.5rem' }}>
                        Source: <strong>{selectedProject.dataset.source}</strong> | Target: <strong>{selectedProject.dataset.target}</strong>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {selectedProject.dataset.features.map(f => (
                          <span key={f} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', padding: '2px 6px' }}>
                            • {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Specific Content: Crop Yield (Model Comparison & Methodology) */}
              {selectedProject.id === 'crop-yield' && (
                <>
                  {/* Model Table */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--fg)' }}>
                      🤖 MODEL COMPARISON & EVALUATION (R², MAE & RMSE)
                    </div>
                    <div style={{ overflowX: 'auto', border: '2px solid var(--border)', boxShadow: 'var(--shadow)', backgroundColor: 'var(--card-bg)' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem' }}>
                        <thead>
                          <tr style={{ backgroundColor: 'var(--fg)', color: 'var(--bg)', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem' }}>
                            <th style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)' }}>MODEL</th>
                            <th style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)' }}>TYPE</th>
                            <th style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)', textAlign: 'center' }}>R² SCORE</th>
                            <th style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)', textAlign: 'center' }}>MAE (kg/ha)</th>
                            <th style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)', textAlign: 'center' }}>RMSE (kg/ha)</th>
                            <th style={{ padding: '0.65rem 0.85rem', textAlign: 'center' }}>STATUS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedProject.modelTable.map((row, idx) => (
                            <tr
                              key={row.name}
                              style={{
                                borderBottom: idx !== selectedProject.modelTable.length - 1 ? '1.5px solid var(--border-light)' : 'none',
                                backgroundColor: row.isBest ? 'rgba(34, 197, 94, 0.12)' : 'transparent'
                              }}
                            >
                              <td style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)', fontWeight: 700 }}>{row.name}</td>
                              <td style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)', color: 'var(--fg-muted)' }}>{row.type}</td>
                              <td style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)', textAlign: 'center', fontFamily: "'Space Mono', monospace", fontWeight: 700, color: row.isBest ? '#16a34a' : 'inherit' }}>{row.r2}</td>
                              <td style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)', textAlign: 'center', fontFamily: "'Space Mono', monospace", fontWeight: row.isBest ? 700 : 400, color: row.isBest ? '#16a34a' : 'inherit' }}>{row.mae}</td>
                              <td style={{ padding: '0.65rem 0.85rem', borderRight: '1px solid var(--border-light)', textAlign: 'center', fontFamily: "'Space Mono', monospace" }}>{row.rmse}</td>
                              <td style={{ padding: '0.65rem 0.85rem', textAlign: 'center' }}>
                                <span style={{
                                  display: 'inline-block',
                                  padding: '2px 8px',
                                  border: '1.5px solid var(--border)',
                                  fontFamily: "'Space Mono', monospace",
                                  fontSize: '0.65rem',
                                  fontWeight: 700,
                                  backgroundColor: row.isBest ? '#22c55e' : 'var(--bg)',
                                  color: row.isBest ? '#000' : 'var(--fg)'
                                }}>
                                  {row.badge}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Key Takeaways */}
                  <div style={{
                    backgroundColor: 'var(--bg)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Award size={18} color="#f59e0b" /> Key Takeaways
                    </h4>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', lineHeight: 1.8, color: 'var(--fg-muted)' }}>
                      {selectedProject.takeaways.map((t, idx) => (
                        <li key={idx}>• {t}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Specific Content: Salesforce (6 Entities & Development Process) */}
              {selectedProject.id === 'warranty-service' && (
                <>
                  {/* 6 Business Entities */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--fg)' }}>
                      🏛️ SIX MAIN BUSINESS ENTITIES ARCHITECTED IN SALESFORCE
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '0.85rem'
                    }}>
                      {selectedProject.entities.map(e => (
                        <div key={e.name} style={{
                          border: '2px solid var(--border)',
                          backgroundColor: 'var(--bg)',
                          padding: '1rem',
                          boxShadow: 'var(--shadow)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                            <span style={{ fontSize: '1.25rem' }}>{e.icon}</span>
                            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9rem' }}>{e.name}</span>
                          </div>
                          <div style={{ color: 'var(--fg-muted)', fontSize: '0.75rem', lineHeight: 1.5 }}>
                            {e.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5-Stage Development Process */}
                  <div style={{
                    backgroundColor: 'var(--bg)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Wrench size={18} color="#3b82f6" /> 5-Stage Development Process
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {selectedProject.devProcess.map(step => (
                        <div key={step.step} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                          <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.75rem', color: 'var(--fg)' }}>
                            {step.step}:{' '}
                          </span>
                          <span style={{ fontSize: '0.78rem', color: 'var(--fg-muted)' }}>
                            {step.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used Matrix */}
                  <div style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--fg)' }}>
                      ⚙️ TECHNOLOGIES & OMNISTUDIO COMPONENTS
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          backgroundColor: '#e0f2fe',
                          color: '#0369a1',
                          border: '1.5px solid var(--border)',
                          padding: '3px 9px'
                        }}>
                          🔹 {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Specific Content: QuickPicks Vending System */}
              {selectedProject.id === 'quickpicks-vending' && (
                <>
                  {/* System Overview Highlights */}
                  <div style={{
                    backgroundColor: 'var(--bg)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={18} color="#0d9488" /> System Architecture & Overview
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.65rem' }}>
                      {selectedProject.systemOverview.map((item, idx) => (
                        <div key={idx} style={{
                          border: '1.5px solid var(--border-light)',
                          backgroundColor: 'var(--card-bg)',
                          padding: '0.65rem 0.85rem',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.78rem',
                          lineHeight: 1.5,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#0d9488', fontWeight: 700 }}>✔</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DBMS & Logic Rules */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--fg)' }}>
                      🗄️ CORE DBMS PRINCIPLES & BUSINESS LOGIC
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '0.85rem'
                    }}>
                      {selectedProject.dbmsRules.map(r => (
                        <div key={r.rule} style={{
                          border: '2px solid var(--border)',
                          backgroundColor: 'var(--bg)',
                          padding: '1rem',
                          boxShadow: 'var(--shadow)'
                        }}>
                          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem', color: 'var(--fg)' }}>
                            {r.rule}
                          </div>
                          <div style={{ color: 'var(--fg-muted)', fontSize: '0.75rem', lineHeight: 1.5 }}>
                            {r.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screenshots Showcase Gallery */}
                  {selectedProject.screenshots && (
                    <div style={{ marginBottom: '1.75rem' }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--fg)' }}>
                        📸 APPLICATION INTERFACE SHOWCASE (CLICK ANY TO ENLARGE)
                      </div>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '0.85rem'
                      }}>
                        {selectedProject.screenshots.map(s => (
                          <div
                            key={s.title}
                            onClick={() => setLightboxImg(s.src)}
                            style={{
                              border: '2px solid var(--border)',
                              backgroundColor: 'var(--card-bg)',
                              overflow: 'hidden',
                              boxShadow: 'var(--shadow)',
                              cursor: 'pointer',
                              transition: 'transform 0.15s ease'
                            }}
                          >
                            <div style={{ height: '140px', overflow: 'hidden', borderBottom: '2px solid var(--border)', backgroundColor: '#000' }}>
                              <img src={s.src} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '0.65rem 0.85rem' }}>
                              <div style={{ fontWeight: 700, fontSize: '0.82rem', fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</div>
                              <div style={{ color: 'var(--fg-muted)', fontSize: '0.7rem', lineHeight: 1.4, marginTop: '2px' }}>{s.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Matrix */}
                  <div style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--fg)' }}>
                      ⚙️ TECH STACK & ARCHITECTURE
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          backgroundColor: '#ccfbf1',
                          color: '#0f766e',
                          border: '1.5px solid var(--border)',
                          padding: '3px 9px'
                        }}>
                          🔹 {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Specific Content: Smart EV Battery & Route Prediction Platform */}
              {selectedProject.id === 'resqcharge-ev' && (
                <>
                  {/* System Overview Highlights */}
                  <div style={{
                    backgroundColor: 'var(--bg)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={18} color="#06b6d4" /> Project Highlights & Journey Intelligence
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.65rem' }}>
                      {selectedProject.systemOverview.map((item, idx) => (
                        <div key={idx} style={{
                          border: '1.5px solid var(--border-light)',
                          backgroundColor: 'var(--card-bg)',
                          padding: '0.65rem 0.85rem',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.78rem',
                          lineHeight: 1.5,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem'
                        }}>
                          <span style={{ color: '#06b6d4', fontWeight: 700 }}>⚡</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Features & Business Architecture */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--fg)' }}>
                      🚗 CORE CAPABILITIES, EMERGENCY SUPPORT & BUSINESS MODEL
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '0.85rem'
                    }}>
                      {selectedProject.features.map(f => (
                        <div key={f.title} style={{
                          border: '2px solid var(--border)',
                          backgroundColor: 'var(--bg)',
                          padding: '1rem',
                          boxShadow: 'var(--shadow)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>{f.icon}</span>
                            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem' }}>{f.title}</span>
                          </div>
                          <div style={{ color: 'var(--fg-muted)', fontSize: '0.75rem', lineHeight: 1.5 }}>
                            {f.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screenshots Showcase Gallery */}
                  {selectedProject.screenshots && (
                    <div style={{ marginBottom: '1.75rem' }}>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--fg)' }}>
                        📸 APPLICATION INTERFACE SHOWCASE (CLICK ANY TO ENLARGE)
                      </div>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '0.85rem'
                      }}>
                        {selectedProject.screenshots.map(s => (
                          <div
                            key={s.title}
                            onClick={() => setLightboxImg(s.src)}
                            style={{
                              border: '2px solid var(--border)',
                              backgroundColor: 'var(--card-bg)',
                              overflow: 'hidden',
                              boxShadow: 'var(--shadow)',
                              cursor: 'pointer',
                              transition: 'transform 0.15s ease'
                            }}
                          >
                            <div style={{ height: '140px', overflow: 'hidden', borderBottom: '2px solid var(--border)', backgroundColor: '#000' }}>
                              <img src={s.src} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '0.65rem 0.85rem' }}>
                              <div style={{ fontWeight: 700, fontSize: '0.82rem', fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</div>
                              <div style={{ color: 'var(--fg-muted)', fontSize: '0.7rem', lineHeight: 1.4, marginTop: '2px' }}>{s.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Matrix */}
                  <div style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '2px solid var(--border)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow)',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--fg)' }}>
                      ⚙️ TECH STACK & ARCHITECTURE
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {selectedProject.technologies.map(tech => (
                        <span key={tech} style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          backgroundColor: '#cffafe',
                          color: '#0891b2',
                          border: '1.5px solid var(--border)',
                          padding: '3px 9px'
                        }}>
                          🔹 {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Bottom Close Bar */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', borderTop: '2px solid var(--border-light)', paddingTop: '1rem' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn-sm"
                >
                  Close Window
                </button>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Open GitHub Repository ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== FULLSCREEN LIGHTBOX FOR IMAGES ===== */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            animation: 'modalBackdropFade 0.2s ease-out'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div style={{ position: 'relative', maxWidth: '95vw', maxHeight: '95vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: -40,
                right: 0,
                background: 'var(--accent-yellow)',
                border: '2px solid #000',
                color: '#000',
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: '0.8rem',
                padding: '4px 12px',
                cursor: 'pointer',
                boxShadow: '2px 2px 0px #000'
              }}
            >
              CLOSE [ESC] ✕
            </button>
            <img
              src={lightboxImg}
              alt="Fullscreen Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                border: '3px solid #fff',
                boxShadow: '0 0 30px rgba(0,0,0,0.8)'
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
