import React from 'react';
import './style/skills.css';
import { 
  FaPhp, FaJs, FaJava, FaPython, 
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap, 
  FaLaravel, FaDatabase, FaGitAlt, FaGithub, 
  FaDocker, FaGlobe, FaCode, FaLayerGroup, 
  FaServer, FaTools 
} from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="cat-icon" />,
      skills: [
        { name: "PHP", icon: <FaPhp />, level: "basic" },
        { name: "JavaScript", icon: <FaJs />, level: "basic" },
        { name: "Java", icon: <FaJava />, level: "Basic" },
        { name: "Python", icon: <FaPython />, level: "Basic" }
      ]
    },
    {
      title: "Frontend Engineering",
      icon: <FaLayerGroup className="cat-icon" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 />, level: "Intermediate" },
        { name: "CSS / Modern CSS", icon: <FaCss3Alt />, level: "Intermediate" },
        { name: "React", icon: <FaReact />, level: "Intermediate" },
        { name: "Bootstrap", icon: <FaBootstrap />, level: "Intermediate" },
        { name: "Tailwind CSS", icon: <FaCss3Alt />, level: "basic" }
      ]
    },
    {
      title: "Backend & Frameworks",
      icon: <FaServer className="cat-icon" />,
      skills: [
        { name: "Laravel", icon: <FaLaravel />, level: "Intermediate" },
        { name: "PHP Core", icon: <FaPhp />, level: "basic" },
        { name: "RESTful APIs", icon: <FaCode />, level: "basic" }
      ]
    },
    {
      title: "Database & Management",
      icon: <FaDatabase className="cat-icon" />,
      skills: [
        { name: "MySQL", icon: <FaDatabase />, level: "Intermediate" },
        { name: "phpMyAdmin", icon: <FaDatabase />, level: "Intermediate" },
        { name: "Relational Design", icon: <FaDatabase />, level: "Intermediate" }
      ]
    },
    {
      title: "Developer Tools",
      icon: <FaTools className="cat-icon" />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: "Basic" },
        { name: "GitHub", icon: <FaGithub />, level: "Intermediate" },
        { name: "Docker", icon: <FaDocker />, level: "Basic" },
        { name: "VS Code", icon: <FaCode />, level: "Intermediate" }
      ]
    },
    {
      title: "Languages",
      icon: <FaGlobe className="cat-icon" />,
      skills: [
        { name: "Khmer (Native)", icon: <FaGlobe />, level: "Native" },
        { name: "English (Working)", icon: <FaGlobe />, level: "Intermediate" },
        { name: "Chinese (Beginner HSK1)", icon: <FaGlobe />, level: "Elementary" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Languages, frameworks, databases, and developer tools I work with.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-card card-glass">
              <div className="skills-card-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>

              <div className="skills-badges">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;