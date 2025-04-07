import React from 'react';
import { Link } from 'react-router-dom';
import Resume from './Resume';
const Home = () => {
  return (
    <>
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to CareerConnect</h1>
        <p>Your one-stop platform for jobs, internships, and career news.</p>
        <Link to="/jobs">
          <button className="cta-button">Explore Jobs</button>
        </Link>
      </section>

      {/* Feature Section */}
      <section className="features">
        <div className="feature-card">
          <h3>Jobs</h3>
          <p>Browse the latest job openings from top companies.</p>
          <Link to="/jobs">View Jobs →</Link>
        </div>

        <div className="feature-card">
          <h3>Internships</h3>
          <p>Find internships to kickstart your career journey.</p>
          <Link to="/internships">View Internships →</Link>
        </div>

        <div className="feature-card">
          <h3>Career News</h3>
          <p>Stay updated with the latest trends and job updates.</p>
          <Link to="/news">Read News →</Link>
        </div>
      </section>
    </div>

    <Resume/>
    </>
  );
};

export default Home;
