import React, { useState, useMemo, useCallback } from 'react';
import './AchievementsSection.css';

function AchievementsSection({ 
  achievements, 
  categories, 
  stats, 
  showFilters = false,
  showSearch = false,
  showStats = false 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter achievements based on category and search
  const filteredAchievements = useMemo(() => {
    let filtered = [...achievements];
    
    // Category filter
    if (activeCategory !== 'all' && categories) {
      filtered = filtered.filter(achievement => 
        achievement.category === activeCategory || 
        (typeof achievement === 'object' && achievement.category === activeCategory)
      );
    }
    
    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(achievement => {
        const text = typeof achievement === 'object' ? achievement.text : achievement;
        return text.toLowerCase().includes(term);
      });
    }
    
    return filtered;
  }, [achievements, activeCategory, searchTerm, categories]);

  const splitAchievements = useMemo(() => {
    const certificationKeywords = [
      'certification',
      'certificate',
      'course',
      'nvidia',
      'linkedin',
      'publication',
      'published',
      'journal',
      'paper',
    ];

    const leadershipAndAchievements = [];
    const certificationsAndPublications = [];

    filteredAchievements.forEach((item) => {
      const text = (typeof item === 'object' ? item.text : item).toLowerCase();
      const category = typeof item === 'object' ? (item.category || '').toLowerCase() : '';
      const isByCategory = category === 'certification' || category === 'publication';
      const isByKeyword = certificationKeywords.some((keyword) => text.includes(keyword));
      const isCertificationOrPublication = isByCategory || isByKeyword;

      if (isCertificationOrPublication) {
        certificationsAndPublications.push(item);
      } else {
        leadershipAndAchievements.push(item);
      }
    });

    return {
      leadershipAndAchievements,
      certificationsAndPublications,
    };
  }, [filteredAchievements]);
  
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
  
  // Render achievement item (handles both string and object formats)
  const renderAchievementItem = (item, index) => {
    const isObject = typeof item === 'object';
    const text = isObject ? item.text : item;
    const date = isObject ? item.date : null;
    const badge = isObject ? item.badge : null;
    const link = isObject ? item.link : null;
    const linkLabel =
      badge && badge.toLowerCase().includes('publication') ? 'View Publication' : 'View Certificate';
    
    return (
      <li key={index}>
        {text}
        {date && <span className="achievement-date">{date}</span>}
        {badge && (
          <span className="achievement-badge">
            {badge}
          </span>
        )}
        {link && (
          <a 
            href={link} 
            className="achievement-badge achievement-badge-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View certificate for ${text}`}
          >
            {linkLabel}
          </a>
        )}
      </li>
    );
  };
  
  // Render categories filter
  const renderFilters = () => {
    if (!showFilters || !categories) return null;
    
    return (
      <div className="achievement-filters">
        <button
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('all')}
          aria-pressed={activeCategory === 'all'}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
            aria-pressed={activeCategory === category.id}
          >
            {category.icon && <span className="category-icon">{category.icon}</span>}
            {category.name}
            {category.count && (
              <span className="achievement-count">{category.count}</span>
            )}
          </button>
        ))}
      </div>
    );
  };
  
  // Render search input
  const renderSearch = () => {
    if (!showSearch) return null;
    
    return (
      <div className="achievement-search">
        <span className="search-icon" aria-hidden="true">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search achievements..."
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Search achievements"
        />
      </div>
    );
  };
  
  // Render statistics
  const renderStats = () => {
    if (!showStats || !stats) return null;
    
    return (
      <div className="achievement-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <section className="section" id="achievements" aria-label="Achievements Section">
      <div className="container">
        <h2 className="section-title">Leadership, Achievements, Certifications & Publications</h2>
        
        {renderSearch()}
        {renderFilters()}
        
        <article className="panel">
          {filteredAchievements.length > 0 ? (
            <div className="achievement-columns">
              <section className="achievement-column" aria-label="Leadership and Achievements">
                <h3 className="achievement-column-title">Leadership & Achievements</h3>
                {splitAchievements.leadershipAndAchievements.length > 0 ? (
                  <ul className="achievement-list">
                    {splitAchievements.leadershipAndAchievements.map((item, index) =>
                      renderAchievementItem(item, index)
                    )}
                  </ul>
                ) : (
                  <p className="achievement-column-empty">No leadership or achievement items found.</p>
                )}
              </section>

              <section className="achievement-column" aria-label="Certifications and Publications">
                <h3 className="achievement-column-title">Certifications & Publications</h3>
                {splitAchievements.certificationsAndPublications.length > 0 ? (
                  <ul className="achievement-list">
                    {splitAchievements.certificationsAndPublications.map((item, index) =>
                      renderAchievementItem(item, index)
                    )}
                  </ul>
                ) : (
                  <p className="achievement-column-empty">No certification or publication items found.</p>
                )}
              </section>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon" aria-hidden="true">🏆</div>
              <p className="empty-state-text">No achievements found matching your criteria.</p>
              {searchTerm && (
                <button 
                  className="filter-btn" 
                  onClick={clearFilters}
                  aria-label="Clear search filters"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </article>
        
        {renderStats()}
      </div>
    </section>
  );
}

export default AchievementsSection;