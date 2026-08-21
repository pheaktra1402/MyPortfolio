import React, { useState } from "react";
import './style/project.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const pypng = '/pandp.png';
const foodpng = '/fooddash.png';
const expensepng = '/expense.png';
const todo = '/todo.png';
const attendSystem = '/attendanceSystem.png';

function Projects() {
  const [filter, setFilter] = useState("all");

  const projectLists = [
    {
      id: 1,
      title: "P&Y Skin Solution",
      category: "frontend",
      categoryLabel: "E-Commerce",
      description:
        "A modern skincare & cosmetics e-commerce platform featuring curated product categories, responsive showcase grids, and an intuitive online shopping experience.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/ProductWebsite",
      live: "https://product-website-murex-mu.vercel.app/",
      image: pypng
    },
    {
      id: 2,
      title: "Food Dash Delivery",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description:
        "A dynamic food delivery and ordering web application built with a robust backend architecture, offering interactive food menus, category filters, and checkout workflows.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/FoodDash",
      live: "https://fooddash-qxgq.onrender.com/",
      image: foodpng
    },
    {
      id: 3,
      title: "Attendance System",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description:
        "A dynamic food delivery and ordering web application built with a robust backend architecture, offering interactive food menus, category filters, and checkout workflows.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/attendanceSystem",
      live: "https://fooddash-qxgq.onrender.com/",
      image: attendSystem
    },
    {
      id: 4,
      title: "Personal Expense Tracker",
      category: "utility",
      categoryLabel: "Financial Utility",
      description:
        "An interactive personal finance application for logging daily income and expenses, organizing spending categories, and keeping track of budget totals.",
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/pheaktra1402/Expense_Tracker",
      live: "https://expense-tracker-black-theta-96.vercel.app/",
      image: expensepng
    },
    {
      id: 4,
      title: "Personal Expense Tracker",
      category: "utility",
      categoryLabel: "Financial Utility",
      description:
        "An interactive personal finance application for logging daily income and expenses, organizing spending categories, and keeping track of budget totals.",
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/pheaktra1402/Expense_Tracker",
      live: "https://expense-tracker-black-theta-96.vercel.app/",
      image: expensepng
    },
    {
      id: 6,
      title: "Interactive Task Manager",
      category: "utility",
      categoryLabel: "Productivity App",
      description:
        "A streamlined To-Do web application enabling users to organize daily tasks, mark completions, filter by status, and store task state persistently.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/pheaktra1402/todo",
      live: "https://todo-ashen-eta.vercel.app/",
      image: todo
    }
  ];

  const filteredProjects = filter === "all" 
    ? projectLists 
    : projectLists.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">My Recent Projects</h2>
          <p className="section-subtitle">Real-world web applications and projects I've designed & built.</p>
        </div>

        {/* Filter Category Tabs */}
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full-Stack / Laravel
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend & E-Commerce
          </button>
          <button 
            className={`filter-btn ${filter === 'utility' ? 'active' : ''}`}
            onClick={() => setFilter('utility')}
          >
            Utilities & Web Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Image Window Frame Header */}
              <div className="project-image-container">
                <div className="browser-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="browser-url">{project.title.toLowerCase().replace(/\s+/g, '')}.dev</span>
                </div>
                <div className="image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              </div>
              
              {/* Card Details */}
              <div className="project-info">
                <div className="project-meta">
                  <span className="category-badge">{project.categoryLabel}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Tech Badges */}
                <div className="project-tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      <FaCode className="tech-icon" /> {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-project btn-github"
                  >
                    <FaGithub /> Source Code
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-project btn-live"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;