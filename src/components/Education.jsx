import React from 'react';
import './style/education.css';

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Computer Science",
      institution: "National Polytechnic Institute of Cambodia",
      period: "Third-Year Student",
      description: "Focused on core computer science concepts, web development, software engineering, and database management systems."
    },
    {
      degree: "Learn Chinese part-time",
      institution: "柬中英学校",
      period: "Ongoing",
      description: "Focusing on vocabulary, handwriting practice and conversational foundations."
    }
  ];

  return (
    <section id="education" className="education-container">
      <h2>Education</h2>
      <div className="education-grid">
        {educationList.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <h4 className="institution-name">{edu.institution}</h4>
            <span className="education-period">{edu.period}</span>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;