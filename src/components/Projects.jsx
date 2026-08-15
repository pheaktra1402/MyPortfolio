import React from "react";
import './style/project.css';
import pypng from '../assets/p&p.png';
import foodpng from '../assets/fooddash.png';
import expensepng from '../assets/expense.png';
import todo from '../assets/todo.png';
function Projects() {
  const projectLists = [
    {
      title: "P&Y Skin Solution",
      description:
        "A skincare and cosmetics e-commerce website built with HTML, CSS, JavaScript, and Bootstrap, featuring product categories, interactive navigation, and a user-friendly shopping experience.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/ProductWebsite",
      live: "https://product-website-murex-mu.vercel.app/",
      image:pypng
    },
   {
      title: "Food Dash",
      description:
        "A food delivery and ordering web application featuring interactive navigation, menu categories, and a user-friendly ordering experience built with a robust backend architecture.",
      tech: ["Laravel", "PHP", "JavaScript", "Bootstrap", "MySQL"],
      github:"https://github.com/pheaktra1402/FoodDash",
      live: "https://fooddash-qxgq.onrender.com/",
      image: foodpng
    },
    {
      title: "Expense Tracker",
      description:
        "A skincare and cosmetics e-commerce website built with HTML, CSS, JavaScript, and Bootstrap, featuring product categories, interactive navigation, and a user-friendly shopping experience.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/Expense_Tracker",
      live: "https://expense-tracker-black-theta-96.vercel.app/",
      image:expensepng
    },
    {
      title: "To Do List",
      description:
        "A skincare and cosmetics e-commerce website built with HTML, CSS, JavaScript, and Bootstrap, featuring product categories, interactive navigation, and a user-friendly shopping experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/pheaktra1402/todo",
      live:"https://todo-ashen-eta.vercel.app/",
      image: todo
    },
  
  ];
  return(
<section id="projects" className="projects-section">
      <h2>| My Projects</h2>
     <div className="project-grid">
  {projectLists.map((project, index) => (
    <div key={index} className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      
      <div className="project-overlay">
        <h3 style={{ color: '#ffc107', marginBottom: '10px', fontSize: '1.4rem' }}>{project.title}</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '12px', lineHeight: '1.4', color: '#f1f5f9' }}>
          {project.description}
        </p>
        <p style={{ fontSize: '0.8rem', marginBottom: '15px', color: '#cbd5e1' }}>
          <strong>Tech Stack:</strong> {project.tech.join(', ')}
        </p>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
            GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-live">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}
export default Projects;