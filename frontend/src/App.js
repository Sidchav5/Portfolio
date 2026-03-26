import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogsSection from './components/BlogsSection';
import BlogDetailPage from './components/BlogDetailPage';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';
import {
  hero,
  summary,
  skillGroups,
  projects,
  blogs,
  education,
  achievements,
  contact,
} from './data/portfolioData';

function App() {
  const [hash, setHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const activeBlogSlug = useMemo(() => {
    if (!hash.startsWith('#/blog/')) return null;
    return decodeURIComponent(hash.replace('#/blog/', ''));
  }, [hash]);

  const activeBlog = useMemo(
    () => blogs.find((blog) => blog.slug === activeBlogSlug),
    [activeBlogSlug]
  );

  const isBlogPage = Boolean(activeBlogSlug);

  return (
    <div className="portfolio-page">
      <Navbar name={hero.name} />

      {!isBlogPage && <HeroSection hero={hero} />}

      <main>
        {isBlogPage ? (
          <BlogDetailPage blog={activeBlog} />
        ) : (
          <>
            <AboutSection summary={summary} />
            <SkillsSection skillGroups={skillGroups} />
            <ProjectsSection projects={projects} />
            <BlogsSection blogs={blogs} />
            <EducationSection education={education} />
            <AchievementsSection achievements={achievements} />
          </>
        )}
      </main>

      <Footer contact={contact} />
    </div>
  );
}

export default App;
