import React from "react";
function Projects() {
  const projectLists = [
    {
      title: "P&Y Skin Solution",
      description:
        "A skincare and cosmetics e-commerce website built with HTML, CSS, JavaScript, and Bootstrap, featuring product categories, interactive navigation, and a user-friendly shopping experience.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/ProductWebsite",
      live: "https://product-website-murex-mu.vercel.app/",
    },
   {
      title: "Food Dash",
      description:
        "A food delivery and ordering web application featuring interactive navigation, menu categories, and a user-friendly ordering experience built with a robust backend architecture.",
      tech: ["Laravel", "PHP", "JavaScript", "Bootstrap", "MySQL"],
      github:"https://github.com/pheaktra1402/FoodDash",
      live: "https://fooddash-qxgq.onrender.com/",
    },
    {
      title: "Expense Tracker",
      description:
        "A skincare and cosmetics e-commerce website built with HTML, CSS, JavaScript, and Bootstrap, featuring product categories, interactive navigation, and a user-friendly shopping experience.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/Expense_Tracker",
      live: "https://expense-tracker-black-theta-96.vercel.app/",
    },
    {
      title: "To Do List",
      description:
        "A skincare and cosmetics e-commerce website built with HTML, CSS, JavaScript, and Bootstrap, featuring product categories, interactive navigation, and a user-friendly shopping experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/pheaktra1402/todo",
      live:"https://todo-ashen-eta.vercel.app/"
    },
   
  ];
  return(
  <section id="projects" style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Featured Projects</h2>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {projectLists.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', background: '#fff' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech.join(',')}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', fontWeight: 'bold' }}>
              View on GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', fontWeight: 'bold'}}>View live project </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;