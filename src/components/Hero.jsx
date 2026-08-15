import React from 'react';
import './style/hero.css';
import heroImg from '../assets/me.jpg'; 

function Hero() {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <span className="hero-greeting">Hello, I'm</span>
        <h1 className="hero-title">Thorn</h1>
        <h1 className="hero-title">Chansopheaktra</h1>
        <h2 className="hero-subtitle">Third-Year Computer Science Student</h2>
        <p className="hero-description">
          Passionate about building modern web applications, learning new backend architectures, and turning creative ideas into functional code.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={heroImg} alt="Profile" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;