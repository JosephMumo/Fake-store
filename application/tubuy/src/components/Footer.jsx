import React from 'react';
import './styles/Footer.css'

export default function Footer(){
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
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com">LinkedIn</a>
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
