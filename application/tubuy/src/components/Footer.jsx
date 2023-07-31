import React, { useState } from 'react';
import './styles/Footer.css'
import { useContext } from 'react';
import '../context/CartContext';
import { CartContext } from '../context/CartContext';

function Footer() {

  const { subscription, setSubscription } = useContext(CartContext)
  const [ subData, setSubData ] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setSubData((prevData) => {
      return { ...prevData,
        [name] : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubscription((prevData) => {
      return [...prevData, subData]
    })
  }

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
        <h4>Categories</h4>
        <ul>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Mens Clothing</li>
          <li>Women Clothing</li>
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
        <form onSubmit={handleSubmit}> 
          <input type="email" placeholder="Enter your email" name='email' onChange={handleChange} />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    
     
    </footer>
  );
}
export default Footer;
