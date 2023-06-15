import React from 'react'
import './styles/Landing.css'
import logo from '../images/pic-1.png'

function Landing() {
    return(
        <div className="main">
            <div className="text-box">
                <h2><span>Tubuy</span> Online Shop</h2>
                <h5>Upto 50% Off on Selected Items!</h5>
                <p><q>Elevate Your Shopping Experience: Explore Limitless Choices</q></p>
                <br />
                <button>Explore</button>
            </div>
            <div className="img-box">
                <img src={logo} alt='1' />
            </div>
            <img src={logo} alt='1' />
            <p><q>Discover a World of Unforgettable Shopping Experiences</q></p>
        </div>
    )
}
export default Landing;