// Footer.js

import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
    <div className='footer-content'> 
      <div className="footer-logo">
        <h1>LOGO</h1>
      </div>
        <div className="footer-mid">
        <h2>Quick Links</h2>
        <div className="footer-links">
          <span>Home</span>
          <span>About</span>
          <span>Products</span>
          <span>Contact</span>
        </div>
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Contact Information</p>
          <p>Address: XYZ Street, City</p>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        </div>
        <div className='footer-bottom'>
         <span>END TEXT</span>
        </div>
    </footer>
  );
};

export default Footer;
