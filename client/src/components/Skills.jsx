import React from 'react';

const skillCategories = [
  {
    name: 'FRONTEND',
    skills: [
      {
        name: 'React',
        level: '75%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'JavaScript',
        level: '70%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'HTML5',
        level: '80%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        level: '75%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
    ],
  },
  {
    name: 'BACKEND',
    skills: [
      {
        name: 'Node.js',
        level: '70%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express.js',
        level: '67%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Python',
        level: '65%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'C++',
        level: '60%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      },
      {
        name: 'Git',
        level: '73%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
    ],
  },
  {
    name: 'DATABASE & CLOUD',
    skills: [
      {
        name: 'AWS Cloud',
        level: '70%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'Salesforce & OmniStudio',
        level: '75%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
      },
      {
        name: 'MongoDB',
        level: '70%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'MySQL',
        level: '65%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'Firebase',
        level: '60%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
    ],
  },
  {
    name: 'TOOLS & OTHERS',
    skills: [
      {
        name: 'VS Code',
        level: '80%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'GitHub',
        level: '75%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'Red Hat Linux (RH124)',
        level: '73%',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg',
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'var(--accent-yellow)', border: '2px solid var(--border)', padding: '4px 12px', fontWeight: 700, fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', boxShadow: '2px 2px 0px var(--border)' }}>
            04. SKILLS
          </div>
          <span style={{ width: 14, height: 14, backgroundColor: '#22c55e', border: '2px solid var(--border)', display: 'inline-block' }} />
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--fg-muted)', letterSpacing: '0.5px', textAlign: 'right' }}>
          <div>// TECHNOLOGIES & TOOLS</div>
          <div>I WORK WITH</div>
        </div>
      </div>

      {/* Categories */}
      {skillCategories.map(cat => (
        <div className="skills-category" key={cat.name}>
          <div className="skills-cat-label">
            <span style={{ width: 8, height: 8, backgroundColor: 'var(--accent-yellow)', border: '1.5px solid var(--border)', display: 'inline-block' }} />
            {cat.name}
          </div>

          <div className="skills-icons-grid">
            {cat.skills.map(skill => (
              <div
                className="skill-item"
                key={skill.name}
              >
                {/* Tooltip */}
                <div className="skill-tooltip">
                  Proficiency: {skill.level}
                </div>

                {/* Icon */}
                <div className="skill-icon">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{
                      filter: skill.name === 'Express.js' || skill.name === 'GitHub'
                        ? 'var(--icon-filter, none)'
                        : 'none'
                    }}
                  />
                </div>

                {/* Name */}
                <div className="skill-name">{skill.name}</div>

                {/* Mini progress bar on card */}
                <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--border-light)', marginTop: '4px', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: skill.level, height: '100%', backgroundColor: 'var(--accent-green)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
