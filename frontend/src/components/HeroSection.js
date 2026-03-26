// src/components/HeroSection.js
import React from 'react';
import Navbar from './Navbar';

function HeroSection() {
  return (
    <header>
      <div className="hero-section">
        <Navbar />
        <div className="poster">
          <p className="poster-name">Welcome to Password Protector !!</p>
        </div>
        <div className="poster-info">
          <p>
          "GuardPass is an intelligent password security platform where users can test, strengthen, and manage their passwords with AI-driven insights. Whether you're a tech newbie or a security expert, it's the perfect space to ensure your digital keys stay strong, safe, and smart."
          </p>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
