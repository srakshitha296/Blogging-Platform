import React from 'react';
import {Link} from 'react-router-dom';
import '../css/HomePage.css'

const Hero = () => {
  return (
    <>
      <div className="homepage">
        <h1>Welcome to the Blogging Platform</h1>
        <p>Share your thoughts, ideas, and stories with the world.</p>
        <div className="cta-buttons">
          <Link to="/login" className="cta-button">Login</Link>
          <Link to="/register" className="cta-button">Register</Link>
        </div>
      </div>
    </>
  )
}

export default Hero