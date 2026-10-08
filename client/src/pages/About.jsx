import React from "react";

const About = () => {
  return (
    <div className="page-container">
      <div className="about-section">
        <h1>About Us</h1>

        <p>
          Welcome to our platform. We are building a modern web application
          focused on providing users with a simple, fast and reliable
          experience.
        </p>

        <p>
          Our application is developed using modern technologies such as
          React.js, Node.js, Express.js and MongoDB.
        </p>

        <div className="about-cards">
          <div>
            <h3>Our Mission</h3>
            <p>To create simple and useful digital experiences for everyone.</p>
          </div>

          <div>
            <h3>Our Vision</h3>
            <p>
              To build scalable and innovative applications using modern
              technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
