// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo1 from '../icons/harshatechlogo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img className='nav-logo' src={Logo1}></img>
      <div
        className={`navbar-toggler ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/Products">Products</Link></li>
          <li><a href="#">Services</a></li>
          <li><Link to ="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;