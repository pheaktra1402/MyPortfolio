import React from 'react';
import './style/about.css';
import { 
  FaUserGraduate, 
  FaLaptopCode, 
  FaGlobe, 
  FaLightbulb, 
  FaCheckCircle,
  FaCube
} from 'react-icons/fa';

function AboutMe() {
  const highlights = [
    {
      icon: <FaLaptopCode className="highlight-icon" />,
      title: "Full-Stack Development",
      description: "Building responsive web interfaces with React and scalable backend services with Laravel & MySQL."
    },
    {
      icon: <FaCube className="highlight-icon" />,
      title: "3D Design & Graphics",
      description: "Exploring 3D modeling, asset creation pipelines, and digital sculpting to blend art with code."
    },
    {
      icon: <FaGlobe className="highlight-icon" />,
      title: "Multilingual Communication",
      description: "Native Khmer speaker with working proficiency in English and actively studying Mandarin Chinese."
    },
    {
      icon: <FaLightbulb className="highlight-icon" />,
      title: "Problem Solving",
      description: "Passionate about clean code architecture, data structures, and intuitive user experiences."
    }
  ];

  const quickStats = [
    { label: "Current Status", value: "3rd-Year CS Student" },
    { label: "University", value: "NPIC Phnom Penh" },
    { label: "Focus", value: "Web development" },
    { label: "Availability", value: "Internship & Freelance" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-title-wrapper">
          <span className="section-tag">Get To Know Me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science student passionate about  web development and learn something new about technology.
          </p>
        </div>

        <div className="about-content-wrapper">
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
                My main technical focus is on <strong>Web Development</strong>, utilizing modern technologies such as <strong>React, PHP, Laravel, JavaScript, and MySQL</strong>. I enjoy crafting smooth front-end user experiences while ensuring clean, reliable back-end logic.
              </p>
              <p>
                To broaden my creative and professional horizons, I am also undertaking short courses in <strong>3D modeling</strong> and studying <strong>Chinese language & culture</strong>. I believe in lifelong learning, attention to detail, and creating software that makes a real impact.
              </p>
            </div>

            {/* Core Values Badges */}
            <div className="bio-values">
              <span className="value-badge"><FaCheckCircle /> Clean Code</span>
              <span className="value-badge"><FaCheckCircle /> User-Centric Design</span>
              <span className="value-badge"><FaCheckCircle /> Continuous Learning</span>
              <span className="value-badge"><FaCheckCircle /> Team Collaboration</span>
            </div>
          </div>

          {/* Right Column: Highlights & Quick Stats */}
          <div className="about-sidebar">
            {/* Quick Stats Grid */}
            <div className="stats-card card-glass">
              <h4 className="stats-heading">Quick Highlights</h4>
              <div className="stats-grid">
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <span className="stat-label">{stat.label}</span>
                    <strong className="stat-value">{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card card-glass">
                  <div className="highlight-header">
                    <div className="highlight-icon-box">{item.icon}</div>
                    <h4 className="highlight-title">{item.title}</h4>
                  </div>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
