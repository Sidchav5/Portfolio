import React from 'react';
import './BlogDetailPage.css';

function BlogDetailPage({ blog }) {
  if (!blog) {
    return (
      <section className="section" id="blog-detail" aria-label="Blog details">
        <div className="container">
          <article className="panel blog-detail-panel">
            <h2 className="section-title">Blog Not Found</h2>
            <p className="blog-detail-lead">
              The blog you are looking for does not exist. Go back to the blogs section and select a valid post.
            </p>
            <a href="#blogs" className="blog-back-link" aria-label="Back to blogs">
              Back to Blogs
            </a>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="blog-detail" aria-label="Blog details">
      <div className="container">
        <article className="panel blog-detail-panel">
          <div className="blog-detail-meta">
            <span className="blog-detail-category">{blog.category}</span>
            <span className="blog-detail-date">{blog.date}</span>
          </div>

          <h2 className="section-title">{blog.title}</h2>
          <p className="blog-detail-lead">{blog.excerpt}</p>

          <div className="blog-detail-tags" aria-label={`Tags for ${blog.title}`}>
            {blog.tags.map((tag, index) => (
              <span key={index} className="blog-detail-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="blog-detail-content">
            {blog.details.map((section, index) => (
              <section key={index} className="blog-content-section" aria-label={section.heading}>
                <h3>{section.heading}</h3>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="blog-detail-actions">
            <a href="#blogs" className="blog-back-link" aria-label="Back to blogs">
              Back to Blogs
            </a>
            {blog.link && (
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-source-link"
                aria-label={`Open source link for ${blog.title}`}
              >
                Open Project Link
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogDetailPage;
