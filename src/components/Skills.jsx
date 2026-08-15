import React from 'react';
import './style/skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "💻 Programming Languages",
      skills: ["PHP", "JavaScript", "Java", "Python"]
    },
    {
      title: "🌐 Frontend",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React"]
    },
    {
      title: "⚙️ Backend",
      skills: ["PHP", "Laravel"]
    },
    {
      title: "🗄️ Database & Management",
      skills: ["MySQL", "phpMyAdmin"]
    },
    {
      title: "🛠️ Tools",
      skills: ["Git", "GitHub", "VS Code", "Docker"]
    },
    {
      title: "🗣️ Languages",
      skills: ["Khmer: Native", "English: Medium ", "Chinese: HSK1"]
    }
  ];

  return (
    <section id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-card">
            <h3>{category.title}</h3>
            <div className="skills-badges">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;