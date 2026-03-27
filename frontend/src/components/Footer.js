import React, { useState, useEffect, useCallback } from 'react';
import './Footer.css';

function Footer({ contact, showNewsletter = false, showSocialLinks = false, showFooterNav = false }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);
  
  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  // Handle newsletter submission
  const handleNewsletterSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus(null), 3000);
      return;
    }
    
    setNewsletterStatus('loading');
    
    // Simulate API call - replace with actual endpoint
    try {
      // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email: newsletterEmail }) });
      setTimeout(() => {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus(null), 3000);
      }, 500);
    } catch (error) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus(null), 3000);
    }
  }, [newsletterEmail]);
  
  // Footer navigation links
  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#achievements', label: 'Achievements' }
  ];
  
  // Social media links
  const socialLinks = [
    { href: contact.linkedin, label: 'LinkedIn', icon: '💼' },
    { href: contact.github, label: 'GitHub', icon: '🐙' },
    { href: `mailto:${contact.email}`, label: 'Email', icon: '✉️' }
  ];
  
  return (
    <footer className="section footer-block" id="contact" aria-label="Contact Footer">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        {/* Newsletter Signup */}
        {showNewsletter && (
          <div className="newsletter">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-subtitle">
              Get notified about new projects and opportunities
            </p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                aria-label="Email for newsletter"
                disabled={newsletterStatus === 'loading'}
              />
              <button 
                type="submit" 
                className="newsletter-btn"
                disabled={newsletterStatus === 'loading'}
              >
                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus === 'success' && (
              <p style={{ color: 'var(--accent)', marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
                ✓ Successfully subscribed!
              </p>
            )}
            {newsletterStatus === 'error' && (
              <p style={{ color: '#e74c3c', marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
                Please enter a valid email address.
              </p>
            )}
          </div>
        )}
        
        {/* Contact Grid */}
        <div className="panel contact-grid">
          <a 
            href={`mailto:${contact.email}`}
            aria-label={`Email me at ${contact.email}`}
          >
            {contact.email}
          </a>
          <a 
            href={`tel:${contact.phoneRaw}`}
            aria-label={`Call me at ${contact.phoneDisplay}`}
          >
            {contact.phoneDisplay}
          </a>
          <a 
            href={contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Connect with me on LinkedIn"
          >
            LinkedIn
          </a>
          <a 
            href={contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View my GitHub profile"
          >
            GitHub
          </a>
          {contact.resumeUrl && (
            <a
              className="resume-link"
              href={contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my resume"
            >
              Resume
            </a>
          )}
        </div>
        
        {/* Social Links Grid */}
        {showSocialLinks && (
          <div className="social-grid">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        )}
        
        {/* Footer Navigation */}
        {showFooterNav && (
          <nav className="footer-nav" aria-label="Footer Navigation">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        )}
        
        {/* Copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} {contact.name}. All rights reserved.
        </p>
      </div>
      
      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;