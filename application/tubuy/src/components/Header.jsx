import React from 'react'
import cart from '../images/cart.png'
import './styles/Header.css'

function Header(props) {
    return (
        <div className='header-container'>
            <h1>TuBuy</h1>
            <div className='cart-box'>
                <img src={cart} alt='cart' />
                <span>{props.cartCount}</span>
            </div>
        </div>
    )
}
export default Header