import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

function AboutSection({ summary, highlights, quote }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  
  const truncateLength = 400; // Characters before showing read more
  const needsTruncation = summary.length > truncateLength;
  
  const displayText = isExpanded || !needsTruncation 
    ? summary 
    : `${summary.substring(0, truncateLength)}...`;
  
  // Optional: Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const observedSection = sectionRef.current;
    if (observedSection) {
      observer.observe(observedSection);
    }

    return () => {
      if (observedSection) {
        observer.unobserve(observedSection);
      }
    };
  }, []);
  
  // Optional: Process summary to highlight keywords
  const highlightKeywords = (text) => {
    const keywords = ['expertise', 'experience', 'passionate', 'skilled', 'leadership'];
    let processedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      processedText = processedText.replace(regex, match => `<mark>${match}</mark>`);
    });
    return processedText;
  };
  
  return (
    <section 
      className="section" 
      id="about" 
      ref={sectionRef}
      aria-label="Professional Summary"
    >
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        
        <div className="about-text-wrapper">
          <p 
            className="about-text" 
            dangerouslySetInnerHTML={{ 
              __html: highlightKeywords(displayText) 
            }}
          />
          
          {/* Read More/Read Less button */}
          {needsTruncation && (
            <button 
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Show less" : "Read more"}
            >
              {isExpanded ? '← Read Less' : 'Read More →'}
            </button>
          )}
        </div>
        
        {/* Optional: Statistics/Highlights Section */}
        {highlights && highlights.length > 0 && (
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-number">{item.number}</div>
                <div className="highlight-label">{item.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Optional: Quote/Testimonial */}
        {quote && (
          <blockquote className="about-quote">
            <p>"{quote.text}"</p>
            {quote.author && (
              <footer className="about-quote-author">— {quote.author}</footer>
            )}
          </blockquote>
        )}
      </div>
      
      {/* Decorative element */}
      <div className="section-decoration" aria-hidden="true" />
    </section>
  );
}

export default AboutSection;