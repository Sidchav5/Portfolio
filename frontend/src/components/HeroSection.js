import React, { useEffect, useRef } from 'react';
import sidPhoto from '../assets/sid.jpeg';
import './HeroSection.css';

function HeroSection({ hero, showScrollIndicator = false }) {
  const sectionRef = useRef(null);
  
  // Optional: Parallax effect on scroll
  useEffect(() => {
    const handleParallax = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        sectionRef.current.style.backgroundPosition = `0 ${rate}px`;
      }
    };
    
    if (showScrollIndicator) {
      window.addEventListener('scroll', handleParallax);
      return () => window.removeEventListener('scroll', handleParallax);
    }
  }, [showScrollIndicator]);
  
  // Handle smooth scroll to projects
  const handleViewProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      className="hero-section-main" 
      ref={sectionRef}
      aria-label="Hero Section"
    >
      <div className="container hero-content">
        <div className="row">
          <div className="reveal-up">
            <span className="eyebrow">{hero.role}</span>
            <h1 className="display-title">{hero.tagline}</h1>
            <p className="hero-summary">{hero.description}</p>
            <div className="hero-cta">
              <a 
                href={`mailto:${hero.email}`} 
                className="btn btn-dark"
                aria-label={`Hire me via email at ${hero.email}`}
              >
                Hire Me
              </a>
              {hero.resumeUrl && (
                <a
                  href={hero.resumeUrl}
                  className="btn btn-outline-dark btn-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my resume"
                >
                  View Resume
                </a>
              )}
              <a 
                href="#projects" 
                className="btn btn-outline-dark"
                onClick={handleViewProjects}
                aria-label="View my projects"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="reveal-up delay-2">
            <div className="profile-card">
              <img 
                src={sidPhoto} 
                alt={`${hero.name} - Professional Headshot`} 
                className="profile-photo"
                loading="eager"
              />
              <h2>{hero.name}</h2>
              <p>{hero.location}</p>
              <ul aria-label="Quick facts about me">
                {hero.quickFacts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional: Scroll Indicator */}
      {showScrollIndicator && (
        <div className="scroll-indicator" aria-hidden="true">
          <div className="mouse" />
          <span>Scroll</span>
        </div>
      )}
    </section>
  );
}

export default HeroSection;