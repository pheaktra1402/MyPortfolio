import React from "react";
import "./style/education.css";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen,
} from "react-icons/fa";

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Computer Science",
      institution: "National Polytechnic Institute of Cambodia",
      location: "Phnom Penh, Cambodia",
      period: "2023 - Present (3rd Year)",
      tag: "Higher Education",
      description:
        "Comprehensive study of software engineering principles, algorithm design, full-stack web development (Laravel/React), database systems (MySQL), and computer networking.",
      courses: [
        "Web Architecture",
        "Database Systems",
        "OOP with Java & PHP",
        "Data Structures & Algorithms",
      ],
    },
    {
      degree: "Chinese Language & Culture",
      institution: "柬中英学校 (Cambodia-China-English School)",
      location: "Phnom Penh, Cambodia",
      period: "Ongoing Part-Time",
      tag: "Language Skills",
      description:
        "Developing practical mandarin vocabulary, character writing, and business conversation skills to broaden global communication opportunities.",
      courses: ["Mandarin Speaking", "Hanzi Writing", "HSK Preparation"],
    },
    {
      degree: "Short Course 3D",
      institution: "National Polytechnic Institute of Cambodia",
      location: "Phnom Penh, Cambodia",
      period: "Ongoing Part-Time",
      tag: "3D Design",
      description:
        "Learning 3D modeling fundamentals, digital sculpting techniques, and asset creation pipelines to build practical skills in computer graphics and digital design.",
      courses: ["3D Modeling", "Digital Sculpting", "Character Design"],
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and continuous skill development.
          </p>
        </div>

        <div className="timeline-wrapper">
          {educationList.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <FaGraduationCap className="marker-icon" />
              </div>
              <div className="timeline-content card-glass">
                <div className="timeline-header">
                  <div>
                    <span className="edu-tag">{edu.tag}</span>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <h4 className="edu-institution">{edu.institution}</h4>
                  </div>
                  <span className="edu-period">
                    <FaCalendarAlt /> {edu.period}
                  </span>
                </div>

                <div className="edu-location">
                  <FaMapMarkerAlt /> {edu.location}
                </div>

                <p className="edu-description">{edu.description}</p>

                <div className="edu-courses">
                  <span className="courses-label">
                    <FaBookOpen /> Key Focus:
                  </span>
                  <div className="course-badges">
                    {edu.courses.map((course, cIdx) => (
                      <span key={cIdx} className="course-badge">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
