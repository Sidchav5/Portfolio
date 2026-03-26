import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';
import {
  hero,
  summary,
  skillGroups,
  projects,
  education,
  achievements,
  contact,
} from './data/portfolioData';

function App() {
  return (
    <div className="portfolio-page">
      <Navbar name={hero.name} />
      <HeroSection hero={hero} />

      <main>
        <AboutSection summary={summary} />
        <SkillsSection skillGroups={skillGroups} />
        <ProjectsSection projects={projects} />
        <EducationSection education={education} />
        <AchievementsSection achievements={achievements} />
      </main>

      <Footer contact={contact} />
    </div>
  );
}

export default App;
