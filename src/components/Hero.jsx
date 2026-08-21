import React from 'react';
import './style/hero.css';
import heroImg from '../assets/me.jpg'; 
import { FaArrowRight, FaPaperPlane, FaGithub, FaTelegram } from 'react-icons/fa';
import myCv from '../assets/Thorn_Chansopheaktra.png';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for Internship & Projects
          </div>

          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">
            Thorn <span className="gradient-text">Chansopheaktra</span>
          </h1>

          <h2 className="hero-subtitle">
            Third-Year Computer Science Student at National Polytechnic Institute of Cambodia
          </h2>

          <p className="hero-description">
            Specializing in web development. A fast learner and responsible developer ready for new challenges.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore Projects <FaArrowRight className="btn-icon" />
            </a>
            {/* <a href="#contact" className="btn-secondary">
              Contact Me <FaPaperPlane className="btn-icon" />
            </a> */}
            <a href={myCv} target="_blank" className="btn-secondary">
    View my CV
</a>
            <div className="hero-socials">
              <a 
                href="https://github.com/pheaktra1402" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="social-btn"
              >
                <FaGithub />
              </a>
              <a 
                href="https://t.me/pheaktrathorn" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Telegram"
                className="social-btn"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Image Frame */}
        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <div className="hero-image-glow"></div>
            <img src={heroImg} alt="Thorn Chansopheaktra" className="hero-image" />
          </div>

          {/* Floating Experience Badges */}
          <div className="floating-badge badge-top">
            <span className="badge-icon">🎓</span>
            <div>
              <strong>3rd Year CS</strong>
              <small>@ NPIC Phnom Penh</small>
            </div>
          </div>

          <div className="floating-badge badge-bottom">
            <span className="badge-icon">🚀</span>
            <div>
              <strong>Web & Backend</strong>
              <small>Laravel / React / MySQL</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;