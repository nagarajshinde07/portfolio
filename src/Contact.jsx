import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">

      {/* Heading */}
      <div className="contact-header">
        <span className="contact-small">CONTACT</span>
        <h2>Contact With Me</h2>
      </div>

      <div className="contact-container">

      
        <div className="contact-card">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500"
            alt="contact"
            className="contact-image"
          />

          <h3>Nagaraj shinde </h3>
          <p className="contact-role">MERN Stack Developer and AI Automation </p>

          <p className="contact-desc">
            I am available for freelance work. Connect with me via phone or email.
          </p>

          <p className="contact-info">Phone: +91 9355324964</p>
          <p className="contact-info">Email: nagarajshinde7714@gmail.com</p>

          <p className="find-me">FIND ME IN</p>

          <div className="social-icons">
             <div className="icon"><a href="https://github.com/dashboard"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912097/git-icon-md.png" alt="" /></a></div>       
            <div className="icon"><a href="https://www.linkedin.com/in/nagaraj-shinde-19587b383/'"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912623/linkedin-icon-md.png" alt="" /></a></div>
          </div>

        </div>

     
        <div className="contact-form">

          <div className="form-row">
            <div className="form-group">
              <label>YOUR NAME</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-group">
            <label>EMAIL</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>SUBJECT</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>MESSAGE</label>
            <textarea rows="6"></textarea>
          </div>

          <button className="send-btn">SEND MESSAGE</button>

        </div>

      </div>

   
      <div className="footer">

        <div className="footer-col">
          <h4>INBIO</h4>
          <div className="social-icons">
             <div className="icon"><a href="https://github.com/dashboard"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912097/git-icon-md.png" alt="" /></a></div>       
            <div className="icon"><a href="https://www.linkedin.com/in/nagaraj-shinde-19587b383/'"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912623/linkedin-icon-md.png" alt="" /></a></div>

          </div>
        </div>

        <div className="footer-col">
          <h4>QUICK LINK</h4>
          <p>About</p>
          <p>Portfolio</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div className="footer-col">
          <h4>RESOURCES</h4>
          <p>Authentication</p>
          <p>System Status</p>
          <p>Terms of Service</p>
          <p>Pricing</p>
          <p>Over Right</p>
        </div>

        <div className="footer-col">
          <h4>DEVELOPERS</h4>
          <p>Documentation</p>
          <p>Authentication</p>
          <p>API Reference</p>
          <p>Support</p>
          <p>Open Source</p>
        </div>
      

      </div>

    </section>
  );
};

export default Contact;