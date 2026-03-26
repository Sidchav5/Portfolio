import React, { useState } from 'react';
import './EducationSection.css';

function EducationSection({ education, multiple = false, showCourses = false, showHonors = false, layout = 'grid' }) {
  const [expandedItems, setExpandedItems] = useState(new Set());
  
  // Handle single education entry
  const renderSingleEducation = (edu) => {
    const hasHonors = showHonors && edu.honors && edu.honors.length > 0;
    const hasCourses = showCourses && edu.courses && edu.courses.length > 0;
    
    return (
      <article className="panel edu-panel">
        <h3>{edu.degree}</h3>
        <p>{edu.institute}</p>
        <p>
          <span className="timeline-badge">{edu.timeline}</span>
          <span className="cgpa-badge">
            CGPA: {edu.cgpa}
            {edu.gpaScale && <span className="gpa-scale"> / {edu.gpaScale}</span>}
          </span>
        </p>
        
        {hasHonors && (
          <div className="education-honors">
            {edu.honors.map((honor, idx) => (
              <span key={idx} className="honor-badge">{honor}</span>
            ))}
          </div>
        )}
        
        {hasCourses && (
          <div className="courses-section">
            <div className="courses-title">Relevant Courses</div>
            <div className="courses-list">
              {edu.courses.map((course, idx) => (
                <span key={idx} className="course-tag">{course}</span>
              ))}
            </div>
          </div>
        )}
      </article>
    );
  };
  
  // Toggle expanded state for timeline items
  const toggleExpand = (id) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  
  // Render multiple education entries (grid layout)
  const renderMultipleGrid = (educations) => {
    return (
      <div className="education-grid">
        {educations.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institute}</p>
            <p className="education-meta">
              <span className="timeline-badge">{edu.timeline}</span>
              <span className="cgpa-badge">CGPA: {edu.cgpa}</span>
            </p>
            {showHonors && edu.honors && edu.honors.length > 0 && (
              <div className="education-honors">
                {edu.honors.slice(0, 2).map((honor, idx) => (
                  <span key={idx} className="honor-badge">{honor}</span>
                ))}
                {edu.honors.length > 2 && (
                  <span className="honor-badge">+{edu.honors.length - 2}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  // Render multiple education entries (timeline layout)
  const renderMultipleTimeline = (educations) => {
    return (
      <div className="education-timeline">
        {educations.map((edu, index) => {
          const isExpanded = expandedItems.has(index);
          const hasHonors = showHonors && edu.honors && edu.honors.length > 0;
          const hasCourses = showCourses && edu.courses && edu.courses.length > 0;
          const showExpand = hasHonors || hasCourses;
          
          return (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <p className="institute-name">{edu.institute}</p>
                <div className="timeline-meta">
                  <span className="timeline-badge">{edu.timeline}</span>
                  <span className="cgpa-badge">CGPA: {edu.cgpa}</span>
                </div>
                
                {showExpand && (
                  <button 
                    className="expand-btn"
                    onClick={() => toggleExpand(index)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show less ↑' : 'Show more ↓'}
                  </button>
                )}
                
                {isExpanded && (
                  <>
                    {hasHonors && (
                      <div className="education-honors">
                        {edu.honors.map((honor, idx) => (
                          <span key={idx} className="honor-badge">{honor}</span>
                        ))}
                      </div>
                    )}
                    {hasCourses && (
                      <div className="courses-section">
                        <div className="courses-title">Relevant Courses</div>
                        <div className="courses-list">
                          {edu.courses.map((course, idx) => (
                            <span key={idx} className="course-tag">{course}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  // Check if education is an array (multiple entries) or single object
  const isMultiple = multiple || Array.isArray(education);
  const educations = isMultiple ? education : [education];
  
  return (
    <section className="section" id="education" aria-label="Education Section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        {!multiple && renderSingleEducation(education)}
        
        {multiple && (
          <>
            {layout === 'timeline' ? renderMultipleTimeline(educations) : renderMultipleGrid(educations)}
          </>
        )}
        
        {/* Optional: Timeline layout can be enabled by passing layout="timeline" prop */}
      </div>
    </section>
  );
}

export default EducationSection;