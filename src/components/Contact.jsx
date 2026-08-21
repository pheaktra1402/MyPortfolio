import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style/contact.css';
import { FaTelegram, FaPhoneAlt, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCopy, FaCheck } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Map your form variables to match your EmailJS template fields
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Replace these placeholder strings with your actual EmailJS credentials
    emailjs.send(
      'service_rak3yno', 
      'template_gc0f1pt', 
      templateParams, 
      't54gSrs604iulp_Q-'
    )
    .then((response) => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
    }, (error) => {
        setLoading(false);
        alert('Failed to send message, please try again later.');
        console.log('FAILED...', error.text);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-title-wrapper">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Have a question, job opportunity, or project idea? Feel free to reach out directly or send a message.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="contact-info">
            <h3 className="info-heading">Contact Information</h3>
            <p className="info-subtext">
              I am open to internship opportunities, freelance web projects, and software developer roles.
            </p>

            <div className="contact-cards">
              {/* Location */}
              <div className="info-card">
                <div className="card-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="card-details">
                  <span className="card-label">Location</span>
                  <strong className="card-value">Phum Prey Popel, Sangkat Samrong Krom, Khan Por Sen Chey, Phnom Penh</strong>
                </div>
              </div>

              {/* Phone */}
              <div className="info-card">
                <div className="card-icon-box">
                  <FaPhoneAlt />
                </div>
                <div className="card-details">
                  <span className="card-label">Phone & Call</span>
                  <a href="tel:+855965853087" className="card-value link-hover">
                    +855 965 853 087
                  </a>
                </div>
                <button 
                  onClick={() => handleCopy('+855 965 853 087', 'phone')} 
                  className="copy-btn" 
                  title="Copy Phone Number"
                >
                  {copiedText === 'phone' ? <FaCheck className="copied" /> : <FaCopy />}
                </button>
              </div>

              {/* Telegram */}
              <div className="info-card">
                <div className="card-icon-box telegram-color">
                  <FaTelegram />
                </div>
                <div className="card-details">
                  <span className="card-label">Telegram Chat</span>
                  <a href="https://t.me/pheaktrathorn" target="_blank" rel="noopener noreferrer" className="card-value link-hover">
                    @pheaktrathorn
                  </a>
                </div>
                <button 
                  onClick={() => handleCopy('https://t.me/pheaktrathorn', 'telegram')} 
                  className="copy-btn" 
                  title="Copy Telegram Link"
                >
                  {copiedText === 'telegram' ? <FaCheck className="copied" /> : <FaCopy />}
                </button>
              </div>

              {/* GitHub */}
              <div className="info-card">
                <div className="card-icon-box">
                  <FaGithub />
                </div>
                <div className="card-details">
                  <span className="card-label">GitHub Repository</span>
                  <a href="https://github.com/pheaktra1402" target="_blank" rel="noopener noreferrer" className="card-value link-hover">
                    github.com/pheaktra1402
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-container card-glass">
            {submitted && (
              <div className="success-banner">
                <FaCheck /> Thank you! Your message has been sent successfully. I will get back to you soon.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="Project Inquiry / Job Opportunity"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Write your message or inquiry here..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;