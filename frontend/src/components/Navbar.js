// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-name">
        <p className="nav-name-text">
          <i className="fa-solid fa-utensils"></i> 
          PassWord Helper
        </p>
      </div>
      <div className="nav-main"><a href="/blogs">Pass Strength</a></div>
      <div className="nav-signUp"><a href="/signup">SignUp</a></div>
      <div className="nav-login"><a href="/login">Login</a></div>
      <div className="nav-profile"><a href="/post_it">Profile</a></div>
    </nav>
  );
}

export default Navbar;
