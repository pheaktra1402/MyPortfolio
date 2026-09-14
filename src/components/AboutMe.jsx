import React from 'react';
import './style/about.css';
import { 
  FaUserGraduate, 
  FaCheckCircle 
} from 'react-icons/fa';
import profileImage from '../assets/persional.JPG'; // Update with your actual image path

function AboutMe() {
  return (
    <section id="about" className="about-section">
      
      <div className="about-container">
        
        {/* Section Header */}
        <div className="section-title-wrapper">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science student passionate about web development and learn something new about technology.
          </p>
        </div>

        <div className="about-content-wrapper">
              {/* Right Column: Profile Image Card */}
          <div className="about-sidebar">
            <div className="about-image-card card-glass">
              <img 
                src={profileImage} 
                alt="Thorn Chansopheaktra" 
                className="about-profile-img" 
              />
            </div>
          </div>
          {/* Left Column: Bio Card */}
          <div className="about-bio-card card-glass">
            <div className="bio-header">
              <div className="bio-avatar-box">
                <FaUserGraduate className="bio-avatar-icon" />
              </div>
              <div>
                <h3 className="bio-name">Thorn Chansopheaktra</h3>
                <p className="bio-title">Web Developer</p>
              </div>
            </div>

            <div className="bio-body">
              <p>
                Hello! I am a 3rd-year <strong>Computer Science</strong> student at the <strong>National Polytechnic Institute of Cambodia (NPIC)</strong> in Phnom Penh. I have a deep curiosity for technology and a strong passion for transforming ideas into elegant, functional digital products.
              </p>
              <p>
                My main technical focus is on <strong>Web Development</strong>, utilizing modern technologies such as <strong>React, PHP, Laravel, JavaScript, and MySQL, </strong>alongside version control tools like<strong> Git and GitHub</strong>. I enjoy crafting smooth front-end user experiences while ensuring clean, reliable back-end logic.
              </p>
              <p>
                To broaden my creative and professional horizons, I am also undertaking short courses in <strong>3D modeling</strong> and studying <strong>Chinese language & culture</strong>. I believe in lifelong learning, attention to detail, and creating software that makes a real impact.
              </p>
            </div>

            {/* Core Values Badges */}
            <div className="bio-values">
              <span className="value-badge"><FaCheckCircle /> User-Centric Design</span>
              <span className="value-badge"><FaCheckCircle /> Continuous Learning</span>
              <span className="value-badge"><FaCheckCircle /> Team Collaboration</span>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
}

export default AboutMe;