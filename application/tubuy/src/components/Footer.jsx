import React from 'react';
import './styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Tubuy</h4>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Products</h4>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <ul className="social-media-links">
          <li>
          <a href="https://www.facebook.com" className="fa fa-facebook"></a>
        </li>
          <li>
            <a href="https://www.twitter.com" className="fa fa-twitter"></a>
          </li>
          <li>
            <a href="https://www.instagram.com" className='fa fa-instagram'></a>
          </li>
          <li>
            <a href="https://www.linkedin.com" className='fa fa-linkedin'></a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Subscribe</h4>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    
     
    </footer>
  );
}
export default Footer;
