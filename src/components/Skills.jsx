import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['C / C++', 'Python', 'SQL', 'JavaScript', 'HTML / CSS', 'C#'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚙',
    skills: ['React', 'Angular', 'Bootstrap', 'Leaflet.js'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠',
    skills: ['Git / GitHub', 'Visual Studio', 'Linux', 'macOS', 'Windows', 'Unity', 'Blender'],
  },
  {
    category: 'Research & AI',
    icon: '🔬',
    skills: ['Large Language Models', 'DeepSeek Fine-tuning', 'P4 Networking', 'P4Validator', 'Human Pose Tracking'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section alt-bg">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {skillGroups.map(group => (
            <div className="skill-card" key={group.category}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
