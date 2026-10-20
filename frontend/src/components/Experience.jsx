import React from 'react';
import { Rocket } from 'lucide-react';

const experiences = [
  {
    year: '2026',
    yearColor: '#facc15', // yellow
    title: 'Salesforce Developer Intern • BytePX Technologies',
    period: '10 June 2026 – 24 July 2026 (Jaipur, Rajasthan)',
    points: [
      'Architected enterprise Warranty & Service Management System on Salesforce CRM & OmniStudio.',
      'Configured Data Mappers, OmniScripts, FlexCards, Integration Procedures, and Agentforce AI.',
      'Contributed to Data and AI solutions, receiving official Certificate of Internship Completion.',
    ],
  },
  {
    year: '2026',
    yearColor: '#38bdf8', // sky blue
    title: 'Python with AWS Cloud • LinuxWorld (#13)',
    period: '13 July 2026 – 27 July 2026',
    points: [
      'Completed 20+ hours of hands-on cloud engineering mentored by Syed Jibbran Ali Sir & Vimal Daga.',
      'Hands-on practical training covering AWS EC2, S3, DynamoDB, Lambda, SNS, and Boto3.',
      'Implemented automated infrastructure logging, CloudWatch monitoring, and security best practices.',
    ],
  },
  {
    year: '2026',
    yearColor: '#4ade80', // green
    title: 'Crop Yield Prediction ML Research',
    period: '2026',
    points: [
      'Engineered agricultural yield forecasting model with Random Forest achieving R² = 0.93.',
      'Benchmarked 4 machine learning models across 9 environmental and farming parameters.',
      'Authored comprehensive research presentation poster and open source repository.',
    ],
  },
  {
    year: '2026',
    yearColor: '#ef4444', // red
    title: 'Red Hat System Administration (RH124)',
    period: 'April 2026 (40 Credit Hours)',
    points: [
      'Completed 40 hours of Red Hat Enterprise Linux system administration training.',
      'Mastered command-line operations, user permissions, and systemd service management.',
      'Verified digital credential issued by Red Hat on Credly.',
    ],
  },
  {
    year: '2026',
    yearColor: '#06b6d4', // cyan
    title: 'Pre Hackathon 2026 • WsCube x HackJKLU',
    period: 'February 2026 (Jaipur)',
    points: [
      'Participated in HackJKLU 5.0 pre-hackathon solving real-world challenges.',
      'Collaborated on rapid prototyping, system ideation, and agile technical delivery.',
      'Gained deep experience in cross-functional team coordination and rapid problem solving.',
    ],
  },
  {
    year: '2024',
    yearColor: '#f472b6', // pink
    title: 'BTech Computer Science & Engineering',
    period: '2024 – Present',
    points: [
      'Salesforce Trailhead RANGER rank (134 Badges, 75,925 Points, Agentblazer Innovator \'26).',
      'Completed Database Management System certification by Infosys Springboard.',
      'Specializing in Full Stack Development, Salesforce CRM, Cloud Computing & Applied AI.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative' }}>
      {/* Decorative colored boxes */}
      <div style={{ position: 'absolute', top: 50, right: 30, width: 14, height: 14, backgroundColor: '#22c55e', border: '2px solid var(--border)' }} />
      <div style={{ position: 'absolute', bottom: 120, right: 20, width: 16, height: 16, backgroundColor: '#f472b6', border: '2px solid var(--border)' }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--border)', padding: '4px 12px', fontWeight: 700, fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', boxShadow: '2px 2px 0px var(--border)' }}>
            03. EXPERIENCE
          </div>
          <span style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#f472b6', border: '2px solid var(--border)', display: 'inline-block' }} />
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--fg-muted)', letterSpacing: '0.5px' }}>
          // MY JOURNEY SO FAR
        </div>
      </div>

      <div className="experience-grid">
        {/* Timeline Column */}
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              {/* Year badge */}
              <div
                className="timeline-year"
                style={{ backgroundColor: exp.yearColor }}
              >
                {exp.year}
              </div>

              {/* Timeline dot */}
              <div className="timeline-dot" />

              {/* Content box */}
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <div className="subtitle">{exp.period}</div>
                <ul>
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Inspirational quote */}
          <div className="experience-quote">
            "Consistent learning and small wins lead to big results."
          </div>
        </div>

        {/* Right Graphic Column: Rocket & Next Stop Badge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', minWidth: '180px' }}>
          {/* Rocket Icon Graphic */}
          <div style={{
            position: 'relative',
            padding: '1.5rem',
            border: '2px dashed var(--border)',
            backgroundColor: 'var(--card-bg)',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <Rocket size={72} color="#f97316" style={{ transform: 'rotate(-45deg)', margin: '0 auto', display: 'block' }} />
            <div style={{
              width: 12,
              height: 12,
              backgroundColor: '#eab308',
              margin: '0.5rem auto 0 auto',
              borderRadius: '50%',
              boxShadow: '0 0 10px #eab308'
            }} />
          </div>

          {/* Badge */}
          <div style={{
            border: '2px solid var(--border)',
            backgroundColor: 'var(--card-bg)',
            padding: '0.5rem 1rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow)',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            fontWeight: 700
          }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--fg-muted)' }}>NEXT STOP</div>
            <div>BIGGER THINGS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
