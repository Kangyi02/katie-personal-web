import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">Katie Zhang</p>
        <p className="footer-copy">
           {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a href="https://github.com/Kangyi02" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kangyi02/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:kza73@sfu.ca">Email</a>
        </div>
      </div>
    </footer>
  )
}
