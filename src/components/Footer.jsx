import React from 'react';
import './style/footer.css';
import { FaGithub, FaTelegram, FaArrowUp, FaHeart } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              Pheaktra<span className="logo-dot">.</span>
            </a>
            <p className="footer-bio">
              Third-Year Computer Science Student passionate about creating clean, scalable web applications and intuitive digital experiences.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials-group">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-icons">
              <a 
                href="https://github.com/pheaktra1402" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="footer-social-btn"
              >
                <FaGithub />
              </a>
              <a 
                href="https://t.me/pheaktrathorn" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Telegram"
                className="footer-social-btn"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Thorn Chansopheaktra. Crafted with <FaHeart className="heart-icon" /> using React & Vite.
          </p>
          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            Back to Top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
