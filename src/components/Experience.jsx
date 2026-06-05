import './Experience.css'

const experiences = [
  {
    role: 'Research Assistant',
    org: 'Simon Fraser University',
    period: '2025',
    type: 'Research',
    bullets: [
      'Automated P4 network code generation using Large Language Models (DeepSeek).',
      'Implemented testing workflows with P4Validator to evaluate code quality and functionality.',
      'Fine-tuned the DeepSeek model, leading to substantial improvement in code quality and reliability.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'Simon Fraser University',
    period: '2024',
    type: 'Research',
    bullets: [
      'Rigged and animated hand models using Blender and Unity for human pose tracking.',
      'Developed C# scripts in Unity to access and control hand model joints for real-time manipulation.',
      'Implemented external Python scripts to animate and automate movements of the hand model.',
    ],
  },
  {
    role: 'Community Transit Volunteer',
    org: 'TransLink',
    period: '2024 – Present',
    type: 'Volunteer',
    bullets: [
      'Assisted passengers with transit navigation and local information.',
      'Shared insights on communities and tourist spots.',
      'Provided friendly, effective customer service.',
    ],
  },
]

const typeColors = {
  Research: 'green',
  Volunteer: 'warm',
}

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-label">Experience</div>
        <h2 className="section-title">Where I've been</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-org">{exp.org}</p>
                  </div>
                  <div className="exp-meta">
                    <span className={`exp-type type-${typeColors[exp.type]}`}>{exp.type}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
