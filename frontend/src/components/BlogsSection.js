import React from 'react';
import './BlogsSection.css';

function BlogsSection({ blogs }) {
  return (
    <section className="section" id="blogs" aria-label="Blogs and Experience Section">
      <div className="container">
        <h2 className="section-title">Blogs & Experience</h2>
        <p className="blogs-intro">
          Writing about project execution, architecture decisions, and leadership learnings from real team experiences.
        </p>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <article key={index} className="panel blog-card">
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
              </div>

              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>

              <div className="blog-tags" aria-label={`Tags for ${blog.title}`}>
                {blog.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="blog-actions">
                <a
                  href={`#/blog/${encodeURIComponent(blog.slug)}`}
                  className="blog-link"
                  aria-label={`Read full blog for ${blog.title}`}
                >
                  Read More
                </a>
                {blog.link && (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-source"
                    aria-label={`Open source link for ${blog.title}`}
                  >
                    Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsSection;
