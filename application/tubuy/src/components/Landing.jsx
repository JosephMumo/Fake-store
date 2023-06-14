import React from 'react'
import './styles/Landing.css'
import logo from '../images/pic-1.png'

function Landing() {
    return(
        <div className="main">
            <img src={logo} alt='1' />
            <p>"Discover a World of Unforgettable Shopping Experiences"</p>
        </div>
    )
}
export default Landing;