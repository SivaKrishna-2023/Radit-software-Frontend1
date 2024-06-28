import React from 'react';
import './LandingPage.css';
import Testimonials from './Testimonials';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header>
        <img src="https://res.cloudinary.com/dy5xxxedo/image/upload/v1719507058/sy0y8w8ccba0fec7j5fm.jpg" alt="TechPro Consultants Logo" className="logo" />
        <h1>Welcome to TechPro Consultants</h1>
        <p>Your partner in technology solutions</p>
      </header>
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Consulting</h3>
            <p>Expert advice to guide your tech journey.</p>
          </div>
          <div className="service-item">
            <h3>Development</h3>
            <p>Custom software solutions to meet your needs.</p>
          </div>
          <div className="service-item">
            <h3>Support</h3>
            <p>Reliable support to keep your systems running.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <Testimonials />
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
