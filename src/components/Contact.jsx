import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact section alt-bg">
      <div className="container">
        <div className="section-label">Contact</div>
        <div className="contact-inner">
          <div className="contact-text">
            <h2 className="section-title">Let's connect</h2>
            <p>
              I'm always open to new opportunities, collaborations, or just a friendly chat
              about technology, research, or anything in between. Feel free to reach out!
            </p>
            <div className="contact-links">
              <a href="mailto:kza73@sfu.ca" className="contact-link">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="contact-link-label">Email</p>
                  <p className="contact-link-value">kza73@sfu.ca</p>
                </div>
              </a>
              <a href="https://github.com/Kangyi02" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </div>
                <div>
                  <p className="contact-link-label">GitHub</p>
                  <p className="contact-link-value">github.com/Kangyi02</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/kangyi02/" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <p className="contact-link-label">LinkedIn</p>
                  <p className="contact-link-value">linkedin.com/in/kangyi02</p>
                </div>
              </a>
              {/* <div className="contact-link no-link">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .92h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <p className="contact-link-label">Phone</p>
                  <p className="contact-link-value">236-308-3686</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-deco">🌿</div>
            <p className="contact-card-quote">
              Always laugh, always appreciate. 😆🤗
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
