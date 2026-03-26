import React, { useState, useMemo, useCallback } from 'react';
import './ProjectsSection.css';

function ProjectsSection({ projects, showFilters = false, showSearch = false }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Extract unique categories from projects
  const categories = useMemo(() => {
    if (!projects.length) return [];
    
    const cats = new Set(['all']);
    projects.forEach(project => {
      if (project.category) {
        cats.add(project.category);
      }
    });
    
    return Array.from(cats).map(cat => ({
      id: cat,
      name: cat === 'all' ? 'All Projects' : cat,
      count: cat === 'all' 
        ? projects.length 
        : projects.filter(p => p.category === cat).length
    }));
  }, [projects]);
  
  // Filter projects based on category and search
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];
    
    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => 
        project.category === activeCategory
      );
    }
    
    // Search filter (title, impact, points)
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(project => {
        const titleMatch = project.title.toLowerCase().includes(term);
        const impactMatch = project.impact.toLowerCase().includes(term);
        const pointsMatch = project.points.some(point => 
          point.toLowerCase().includes(term)
        );
        const techMatch = project.techStack && project.techStack.some(tech =>
          tech.toLowerCase().includes(term)
        );
        
        return titleMatch || impactMatch || pointsMatch || techMatch;
      });
    }
    
    return filtered;
  }, [projects, activeCategory, searchTerm]);
  
  // Handle category change
  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);
  
  // Handle search
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);
  
  // Clear filters
  const clearFilters = useCallback(() => {
    setActiveCategory('all');
    setSearchTerm('');
  }, []);
  
  // Get status badge class
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'live':
      case 'active':
        return 'live';
      case 'completed':
        return 'completed';
      default:
        return '';
    }
  };
  
  return (
    <section className="section" id="projects" aria-label="Projects Section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        {/* Search Input */}
        {showSearch && (
          <div className="projects-search">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search projects by title, technology, or description..."
              value={searchTerm}
              onChange={handleSearch}
              aria-label="Search projects"
            />
          </div>
        )}
        
        {/* Category Filters */}
        {showFilters && categories.length > 1 && (
          <div className="projects-filter" role="tablist" aria-label="Project categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-label={`Filter by ${category.name}`}
              >
                {category.name}
                <span className="project-count" style={{ marginLeft: '0.25rem', opacity: 0.7 }}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        )}
        
        {/* Projects Grid */}
        <div className="row">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div className="col-lg-6" key={project.title}>
                <article className="panel project-panel">
                  <div className="project-head">
                    <h3>
                      {project.title}
                      {project.status && (
                        <span className={`project-status ${getStatusClass(project.status)}`}>
                          {project.status}
                        </span>
                      )}
                    </h3>
                    <a
                      className="project-github"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub
                    </a>
                  </div>
                  
                  <p className="impact">{project.impact}</p>
                  
                  <ul>
                    {project.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  
                  {/* Tech Stack Tags */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="project-tech-stack">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                  
                  {/* Project Metrics */}
                  {project.metrics && (
                    <div className="project-metrics">
                      {project.metrics.map((metric, idx) => (
                        <span key={idx} className="metric">{metric}</span>
                      ))}
                    </div>
                  )}
                </article>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon" aria-hidden="true">📁</div>
              <p className="empty-state-text">
                No projects found matching your criteria.
              </p>
              {(activeCategory !== 'all' || searchTerm) && (
                <button 
                  className="filter-btn" 
                  onClick={clearFilters}
                  aria-label="Clear all filters"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;