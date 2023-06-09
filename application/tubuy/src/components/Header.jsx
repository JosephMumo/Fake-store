import React, { useContext } from 'react'
import cart from '../images/cart.png'
import './styles/Header.css'
import { CartContext} from '../context/CartContext'

function Header(props) {
    const { cartItems } = useContext(CartContext)

    return (
        <div className='header-container'>
            <a href='#' id='homePage'>TuBuy</a>
            <div className='cart-box' onClick={props.flipShow}>
                <img src={cart} alt='cart' />
                <span>{cartItems.length}</span>
            </div>
        </div>
    )
}
export default Header