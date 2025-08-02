import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="contact-split">
      <div className="contact-header">
        <h2 className="section-title">Contact Me</h2>
        <a href="/RResume Deepana (1).pdf" download className="resume-download">
          📄 Download Resume
        </a>
      </div>

      <p className="subtitle">💼Feel free to reach out for collaborations or just a friendly chat🚀</p>

      <div className="contact-grid">
        {/* LEFT: Contact Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          

          <ul className="info-list">
            <li><FaEnvelope /> <a href="mailto:2005deepana@gmail.com">2005deepana@gmail.com</a></li>
            <li><FaPhoneAlt /> +91 8122760811</li>
            <li><FaMapMarkerAlt /> Karur, Tamil Nadu, India</li>
            <li><FaLinkedin /> <a href="https://www.linkedin.com/in/deepana-dhanagopal-193278259" target="_blank" rel="noreferrer">linkedin.com/in/deepana-dhanagopal-193278259</a></li>
            <li><FaGithub /> <a href="https://github.com/Deepana-06" target="_blank" rel="noreferrer">github.com/Deepana-06</a></li>
          </ul>
        </div>

        {/* RIGHT: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleChange} required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p><strong>Deepana D</strong></p>
        <p>AI & Data Science Student | Web Developer</p>
        <p>© 2025 Deepana D. All rights reserved.</p>
        <button className="top-btn" onClick={scrollToTop}>🔝 Back to Top</button>
      </footer>
    </section>
  );
};

export default Contact;
