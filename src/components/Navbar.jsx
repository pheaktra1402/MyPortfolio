import React, { useState } from 'react';
import './style/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Your Name */}
        <a href="#hero" className="navbar-logo">
          Pheaktra<span className="logo-dot">.</span>
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#hero" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link" onClick={closeMenu}>Education</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link nav-btn" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;