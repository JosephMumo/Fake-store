import React from 'react'
import logo from '../images/lans.jpg'
import './styles/Landing.css'

function Landing() {
    return(
        <div className="main">
            <div className="text-box">
                <h2><span>Tubuy</span> Online Shop</h2>
                <h5>Upto 50% Off on Selected Items!</h5>
                <p>"Elevate Your Shopping Experience: Explore Limitless Choices"</p>
                <br />
                <button>Explore</button>
            </div>
            <div className="img-box">
                <img src={logo} alt='1' />
            </div>
        </div>
    )
}
export default Landing;