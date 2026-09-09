import React, { useState } from "react";
import "./style/project.css";

// Web App Images
import pypng from "../assets/pandp.png";
import foodpng from "../assets/fooddash.png";
import expensepng from "../assets/expense.png";
import attendSystem from "../assets/attendanceSystem.png";
import todo from "../assets/todo.png";
import movieapp from "../assets/movieapp.png";
import hoteladmindashboard from "../assets/hoteladmindashboard.png";

// 2D Design Assets
import lakhonKhol from "../assets/design/2d/ល្ខោនខោលខ្មែរ.png";
import independenceDay from "../assets/design/2d/independentday.jpg";
import menuDesign from "../assets/design/2d/Menu copy.png";
import finalPicDesign from "../assets/design/2d/final pic copy.png";
import graphicPoster from "../assets/design/2d/photo_2024-08-08_14-06-32.jpg";
import camel from "../assets/design/2d/camel.PNG";

// 3D Design Assets
import classroom3dImage from "../assets/design/3d/classroom3d.jpg";
import classroom3dVideo from "../assets/design/3d/democlassroom.mp4";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaExpand,
  FaPlay,
  FaTimes,
  FaPalette,
  FaCube,
} from "react-icons/fa";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const projectLists = [
    {
      id: 1,
      title: "Food Dash Delivery",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description:
        "A dynamic food delivery and ordering web application built with a robust backend architecture, offering interactive food menus, category filters, and checkout workflows.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/FoodDash",
      live: "https://fooddash-qxgq.onrender.com/",
      image: foodpng,
    },
    {
      id: 2,
      title: "Movie App",
      category: "frontend",
      categoryLabel: "Frontend",
      description:
        "A dynamic movie search platform built with React, leveraging the TMDb API to display popular films, real-time search results, and high-quality posters.",
      tech: ["React", "JavaScript", "HTML", "CSS", "TMDb API"],
      github: "https://github.com/pheaktra1402/movieWebsite",
      live: "https://pheaktra1402-movie-website.vercel.app/",
      image: movieapp,
    },
    {
      id: 3,
      title: "Hotel Admin Dashboard",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description:
        "An administrative dashboard for hotel management featuring full CRUD operations for rooms, real-time room status tracking, and filtering capabilities.",
      tech: ["Laravel", "PHP", "JavaScript", "CSS"],
      github: "https://github.com/pheaktra1402/HotelAdminDashboard",
      live: "https://hotel-admin-dashboard-eta.vercel.app/",
      image: hoteladmindashboard,
    },
    {
      id: 4,
      title: "P&Y Skin Solution",
      category: "frontend",
      categoryLabel: "E-Commerce",
      description:
        "A modern skincare & cosmetics e-commerce platform featuring curated product collections and an intuitive online shopping experience.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/pheaktra1402/ProductWebsite",
      live: "https://product-website-murex-mu.vercel.app/",
      image: pypng,
    },
    {
      id: 5,
      title: "Attendance System",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      description:
        "Student attendance tracking system with real-time status summaries (Present, Absent, Late).",
      tech: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/pheaktra1402/attendanceSystem",
      image: attendSystem,
    },
    {
      id: 6,
      title: "Personal Expense Tracker",
      category: "utility",
      categoryLabel: "Financial Utility",
      description:
        "An interactive personal finance application for logging daily income and expenses, organizing spending categories, and keeping track of budget totals.",
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/pheaktra1402/Expense_Tracker",
      live: "https://expense-tracker-black-theta-96.vercel.app/",
      image: expensepng,
    },
    {
      id: 7,
      title: "Interactive Task Manager",
      category: "utility",
      categoryLabel: "Productivity App",
      description:
        "A streamlined To-Do web application enabling users to organize daily tasks, mark completions, filter by status, and store task state persistently.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/pheaktra1402/todo",
      live: "https://todo-ashen-eta.vercel.app/",
      image: todo,
    },
    {
      id: 8,
      title: "3D Classroom Environment",
      category: "3d",
      categoryLabel: "3D Modeling",
      description:
        "Detailed 3D classroom environment modeled, textured, and rendered in Blender.",
      tech: ["Blender"],
      image: classroom3dImage,
      video: classroom3dVideo,
    },
    {
      id: 9,
      title: "Lakhon Khol Khmer",
      category: "2d",
      categoryLabel: "2D Graphic Design",
      description:
        "Cultural poster artwork celebrating Lakhon Khol, the traditional Cambodian masked theater, crafted with vibrant colors and traditional motifs.",
      tech: ["Adobe Photoshop"],
      image: lakhonKhol,
    },
    {
      id: 10,
      title: "Cambodian Independence Day Poster",
      category: "2d",
      categoryLabel: "2D Graphic Design",
      description:
        "Independence Day poster design showcasing national symbols.",
      tech: ["Adobe Illustrator"],
      image: independenceDay,
    },
    {
      id: 11,
      title: "CAMEL",
      category: "2d",
      categoryLabel: "2D Graphic Design",
      description:
        "Camel Cement bags.",
      tech: ["Adobe Illustrator"],
      image: camel,
    },
    {
      id: 12,
      title: "Restaurant Menu",
      category: "2d",
      categoryLabel: "Menu Design",
      description:
        "Restaurant menu layout and food promotional graphic artwork created for brand presentation.",
      tech: ["Adobe Photoshop"],
      image: menuDesign,
    },
    {
      id: 13,
      title: "Restaurant Menu",
      category: "2d",
      categoryLabel: "2D Graphic Design",
      description:
        "Food discount",
      tech: ["Adobe Photoshop"],
      image: finalPicDesign,
    },
    {
      id: 14,
      title: "Skincare",
      category: "2d",
      categoryLabel: "2D Graphic Designn",
      description:
        "",
      tech: ["Photoshop"],
      image: graphicPoster,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectLists
      : projectLists.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-title-wrapper">
          <h2 className="section-title">My Recent Projects & Designs</h2>
          <p className="section-subtitle">
            Real-world web applications, 2D graphic artworks, and 3D Blender designs.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="project-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Works
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full-Stack / Laravel
          </button>
          <button
            className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend & E-Commerce
          </button>
          <button
            className={`filter-btn ${filter === "utility" ? "active" : ""}`}
            onClick={() => setFilter("utility")}
          >
            Utilities & Web Apps
          </button>
          <button
            className={`filter-btn ${filter === "2d" ? "active" : ""}`}
            onClick={() => setFilter("2d")}
          >
            <FaPalette style={{ marginRight: "6px" }} /> 2D Design
          </button>
          <button
            className={`filter-btn ${filter === "3d" ? "active" : ""}`}
            onClick={() => setFilter("3d")}
          >
            <FaCube style={{ marginRight: "6px" }} /> 3D Design
          </button>
        </div>

        {/* Projects Grid */}
        <div className="project-grid">
          {filteredProjects.map((project) => {
            const isDesign =
              project.category === "2d" || project.category === "3d";
            return (
              <div key={project.id} className="project-card">
                {/* Image Window Frame Header */}
                <div
                  className={`project-image-container ${
                    isDesign ? "is-design" : ""
                  }`}
                >
                  <div className="browser-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="browser-url">
                      {isDesign
                        ? `${project.category.toUpperCase()} WORKSPACE // ${project.categoryLabel}`
                        : `${project.title
                            .toLowerCase()
                            .replace(/\s+/g, "")}.dev`}
                    </span>
                  </div>
                  <div
                    className="image-wrapper"
                    onClick={() =>
                      setSelectedMedia({
                        type: "image",
                        src: project.image,
                        title: project.title,
                      })
                    }
                    style={{ cursor: "pointer" }}
                    title="Click to view full preview"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="image-overlay-hover">
                      <FaExpand className="expand-icon" />
                      <span>Preview Image</span>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="project-info">
                  <div className="project-meta">
                    <span
                      className={`category-badge ${
                        isDesign ? "badge-design" : ""
                      }`}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Tech Badges */}
                  <div className="project-tech-stack">
                    {project.tech &&
                      project.tech.map((t, idx) => (
                        <span key={idx} className="tech-tag">
                          {isDesign ? (
                            <FaPalette className="tech-icon" />
                          ) : (
                            <FaCode className="tech-icon" />
                          )}{" "}
                          {t}
                        </span>
                      ))}
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-project btn-github"
                      >
                        <FaGithub /> Source Code
                      </a>
                    )}
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
                    {project.video && (
                      <button
                        type="button"
                        className="btn-project btn-live"
                        onClick={() =>
                          setSelectedMedia({
                            type: "video",
                            src: project.video,
                            title: project.title,
                          })
                        }
                      >
                        <FaPlay /> Watch 3D Video
                      </button>
                    )}
                    {isDesign && !project.live && (
                      <button
                        type="button"
                        className="btn-project btn-preview"
                        onClick={() =>
                          setSelectedMedia({
                            type: "image",
                            src: project.image,
                            title: project.title,
                          })
                        }
                      >
                        <FaExpand /> View Design
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Media Lightbox Modal */}
      {selectedMedia && (
        <div
          className="media-modal-overlay"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="media-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3 className="modal-title">{selectedMedia.title}</h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedMedia(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="modal-video"
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="modal-image"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

