import React from 'react';
import './Navbar.css';

function Navbar({ name }) {
  return (
    <header className="hero-wrap" id="home">
      <nav className="navbar navbar-expand-lg portfolio-nav py-3">
        <div className="container">
          <a className="navbar-brand brand" href="#home">{name}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto gap-lg-3">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
              <li className="nav-item">
                <a className="btn btn-sm btn-outline-dark contact-btn" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
