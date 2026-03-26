import React, { useState, useMemo, useCallback } from 'react';
import './SkillsSection.css';

function SkillsSection({ skillGroups, showSearch = false, showFilters = false, showStats = false }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Extract all unique categories from skill groups
  const categories = useMemo(() => {
    const cats = new Set(['all']);
    skillGroups.forEach(group => {
      cats.add(group.title);
    });
    return Array.from(cats);
  }, [skillGroups]);
  
  // Calculate skill statistics
  const skillStats = useMemo(() => {
    let totalSkills = 0;
    let categoryCount = skillGroups.length;
    
    skillGroups.forEach(group => {
      totalSkills += group.items.length;
    });
    
    return {
      totalSkills,
      categoryCount,
      averagePerCategory: (totalSkills / categoryCount).toFixed(1)
    };
  }, [skillGroups]);
  
  // Filter skill groups based on search term
  const filteredGroups = useMemo(() => {
    let filtered = [...skillGroups];
    
    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(group => group.title === activeCategory);
    }
    
    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.map(group => ({
        ...group,
        items: group.items.filter(item => 
          item.toLowerCase().includes(term)
        )
      })).filter(group => group.items.length > 0);
    }
    
    return filtered;
  }, [skillGroups, searchTerm, activeCategory]);
  
  // Handle search
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);
  
  // Handle category filter
  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);
  
  // Clear all filters
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setActiveCategory('all');
  }, []);
  
  // Get skill type based on skill name (for icon selection)
  const getSkillType = (skill) => {
    const skillLower = skill.toLowerCase();
    if (skillLower.includes('react') || skillLower.includes('vue') || skillLower.includes('angular') || skillLower.includes('html') || skillLower.includes('css'))
      return 'frontend';
    if (skillLower.includes('node') || skillLower.includes('python') || skillLower.includes('java') || skillLower.includes('go') || skillLower.includes('php'))
      return 'backend';
    if (skillLower.includes('sql') || skillLower.includes('mongo') || skillLower.includes('postgres') || skillLower.includes('redis'))
      return 'database';
    if (skillLower.includes('docker') || skillLower.includes('kubernetes') || skillLower.includes('aws') || skillLower.includes('cloud'))
      return 'devops';
    if (skillLower.includes('react native') || skillLower.includes('flutter') || skillLower.includes('swift') || skillLower.includes('kotlin'))
      return 'mobile';
    return 'default';
  };
  
  return (
    <section className="section" id="skills" aria-label="Skills Section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        {/* Search and Filter Header */}
        {(showSearch || showFilters) && (
          <div className="skills-header">
            {showSearch && (
              <div className="skills-search">
                <span className="search-icon" aria-hidden="true">🔍</span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={handleSearch}
                  aria-label="Search skills"
                />
              </div>
            )}
            
            {showFilters && categories.length > 1 && (
              <div className="skills-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                    aria-label={`Filter by ${category}`}
                  >
                    {category === 'all' ? 'All Skills' : category}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Skill Statistics */}
        {showStats && (
          <div className="skill-stats">
            <div className="stat-card">
              <div className="stat-number">{skillStats.totalSkills}</div>
              <div className="stat-label">Total Skills</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{skillStats.categoryCount}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{skillStats.averagePerCategory}</div>
              <div className="stat-label">Avg. per Category</div>
            </div>
          </div>
        )}
        
        {/* Skills Grid */}
        <div className="row">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group, groupIndex) => (
              <div className="col-md-6 col-xl-4" key={group.title}>
                <article className="panel skill-panel">
                  <h3>{group.title}</h3>
                  <div className="tag-wrap">
                    {group.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex} 
                        className="skill-tag"
                        data-type={getSkillType(item)}
                        title={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon" aria-hidden="true">🔍</div>
              <p className="empty-state-text">
                No skills found matching "{searchTerm}"
              </p>
              {(searchTerm || activeCategory !== 'all') && (
                <button 
                  className="filter-chip" 
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

export default SkillsSection;