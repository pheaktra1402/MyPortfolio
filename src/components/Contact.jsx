import React, { useState } from 'react';
import './style/contact.css';
import { FaTelegram, FaPhone, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., EmailJS or backend API)
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">Have a question or want to work together? Feel free to send a message!</p>

      <div className="contact-wrapper">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I'm currently a third-year computer science student open to web development opportunities and collaborations.</p>
          
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>National Polytechnic Institute of Cambodia</span>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon"/>
            <a href="tel:+855965853087">+855 965 853 087</a>
          </div>
          <div className="info-item">
            <FaTelegram className="info-icon"/>
            <a href="https://t.me/pheaktrathorn" target="_blank" rel="noopener noreferrer">
              t.me/pheaktrathorn
            </a>
          </div>
          <div className="info-item">
            <FaGithub className="info-icon"/>
            <a href="https://github.com/pheaktra1402" target="_blank" rel="noopener noreferrer">
              github.com/pheaktra1402
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">Thank you! Your message has been sent successfully.</div>}
          
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;