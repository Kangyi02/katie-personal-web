import './Projects.css'

const projects = [
  {
    title: 'Issue Tracking System',
    year: '2024',
    org: 'SFU',
    status: 'Academic',
    description:
      'A functional Issue Tracking System with features like change requests and product management, built collaboratively with a team of four SFU students. Followed a full software engineering lifecycle from requirements gathering to documentation.',
    tech: ['C++', 'Git / GitHub', 'OOP', 'Team Collaboration'],
    highlights: [
      'Built entirely in C++ applying object-oriented design principles',
      'Collaborated in a 4-person team with iterative customer refinement sessions',
      'Produced full project documentation: Specifications, Design & User Manuals',
      'Managed source control and code reviews via GitHub',
    ],
    videoEmbed: 'https://drive.google.com/file/d/1vrEl3TF-zMQagXLgK_JH-wLDI4Rb9H9d/preview',
    link: 'https://github.com/Kangyi02',
  },
  {
    title: 'Baddie Report App',
    year: '2023',
    org: 'SFU',
    status: 'Academic',
    description:
      'A four-page Angular web application with interactive map visualization for superhero crime reporting. Users can log in, report criminals, view them on a live map, and edit their status in a responsive, mobile-friendly UI.',
    tech: ['Angular', 'Leaflet.js', 'Bootstrap', 'JavaScript', 'HTML / CSS'],
    highlights: [
      'Interactive crime map using Leaflet.js with marker clustering',
      'Authentication system for superhero users to log in and manage reports',
      'Full CRUD: report, view, edit, and update criminal status',
      'Responsive Bootstrap layout optimised for desktop and mobile',
    ],
    videoEmbed: 'https://drive.google.com/file/d/1DzlB_YkqdSKG5TBu_TuBHyRly_FlroIY/preview',
    link: 'https://github.com/Kangyi02',
  },
  {
    title: 'Skin Tone AI Library & GUI',
    year: '2025',
    org: 'SFU \u00b7 CMPT 340',
    status: 'Academic',
    description:
      'A Python-based AI library for automatic skin tone extraction, cross-scale conversion, and skin tone transformation for data augmentation. Built to tackle dataset bias in medical AI — the system segments skin regions from images, calculates ITA values, and converts between the Fitzpatrick, Monk, and ITA skin tone scales. Includes an interactive Tkinter GUI and a batch conversion script.',
    tech: ['Python', 'Tkinter', 'U\u00b2-Net', 'TensorFlow / Keras', 'OpenCV', 'Rembg', 'Machine Learning'],
    highlights: [
      "Built and refined the full Tkinter GUI — from Lacey's prototype to a polished, functional interface",
      'Integrated the conversion library into the frontend, enabling seamless user interaction',
      'Implemented Monk to ITA and Fitzpatrick to ITA/Monk conversion functions',
      'Collaborated on skin tone scale research to inform accurate, bias-aware conversion logic',
      'Contributed to UI testing and debugging across the full application pipeline',
    ],
    videoEmbed: 'https://drive.google.com/file/d/1w1Jngxkr8Qy3bYDanvNiIQ9y-NQcQWNz/preview',
    link: 'https://github.com/Kangyi02',
  },
]

function VideoPlayer({ embedUrl, title }) {
  if (embedUrl) {
    return (
      <div className="project-video-wrap">
        <iframe
          src={embedUrl}
          className="project-video-iframe"
          allow="autoplay"
          allowFullScreen
          title={`${title} demo video`}
        />
      </div>
    )
  }

  return (
    <div className="project-video-wrap project-video-placeholder">
      <div className="placeholder-inner">
        <div className="placeholder-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <p className="placeholder-text">Demo video coming soon</p>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects section alt-bg">
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-title">Things I've built</h2>

        <div className="projects-list">
          {projects.map((p, i) => (
            <article className="project-card" key={i}>

              <div className="project-header">
                <div className="project-meta">
                  <span className="project-year">{p.year} · {p.org}</span>
                  <span className="project-status">{p.status}</span>
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="project-github-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-highlights-block">
                <p className="highlights-heading">What I did</p>
                <ul className="project-highlights">
                  {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>

              <div className="project-tech">
                {p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
              </div>

              <VideoPlayer embedUrl={p.videoEmbed} title={p.title} />

            </article>
          ))}
        </div>

        <p className="projects-more">
          More on <a href="https://github.com/Kangyi02" target="_blank" rel="noreferrer">GitHub →</a>
        </p>
      </div>
    </section>
  )
}