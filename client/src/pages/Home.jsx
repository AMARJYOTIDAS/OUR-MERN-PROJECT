import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Build Something Amazing</h1>

          <p>
            A modern and professional web application built with React, designed
            for performance, simplicity and scalability.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>Modern</h3>
            <p>
              Clean and modern interface designed for a great user experience.
            </p>
          </div>

          <div className="feature-card">
            <h3>Fast</h3>
            <p>Optimized React application with fast and smooth performance.</p>
          </div>

          <div className="feature-card">
            <h3>Secure</h3>
            <p>Built with security and scalability in mind.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
