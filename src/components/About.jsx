import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-label">About Me</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">A little bit about me</h2>
            <p>
              I'm Kangyi (Katie) Zhang, a Computing Science student at Simon Fraser University
              in Burnaby, BC. I transferred from Douglas College where I studied Mathematics,
              and I've been passionate about the intersection of technology and problem-solving
              ever since.
            </p>
            <p>
              My experience spans software development, research, and community service.
              I've worked as a Research Assistant at SFU on projects ranging from AI-powered
              network code generation to 3D hand model animation in Unity. I love working in
              collaborative environments and am always excited to learn something new.
            </p>
            <p>
              When I'm not coding, you might find me volunteering as a transit ambassador
              for TransLink, helping people navigate the city with a smile.
            </p>
            {/* <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-num">2×</span>
                <span>Dean's Honour Roll at SFU</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-num">SFU</span>
                <span>Computing Science, 2023-2025</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-num">2025</span>
                <span>Google Research Workshop</span>
              </div>
            </div> */}
          </div>
          <div className="about-education">
            <h3>Education</h3>
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <p className="edu-degree">B.Sc. Computing Science</p>
                <p className="edu-school">Simon Fraser University</p>
                <p className="edu-year">2023 – 2025 · Burnaby, BC</p>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon">📐</div>
              <div>
                <p className="edu-degree">Associate Degree, Mathematics</p>
                <p className="edu-school">Douglas College</p>
                <p className="edu-year">2022 – 2023 · New Westminster, BC</p>
              </div>
            </div>
            <div className="awards">
              <h4>Awards & Certifications</h4>
              <ul>
                <li>Explore CS Research Workshop — Google, SFU (2025)</li>
                <li>Dean's Honour Roll — Spring 2025, SFU</li>
                <li>Dean's Honour Roll — Summer 2024, SFU</li>
                <li>Dean's Honour Roll — Summer 2023, Douglas</li>
                <li>Dean's List — Spring 2023, Douglas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
