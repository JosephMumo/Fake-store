import React, { useContext } from 'react'
import cart from '../images/cart.png'
import './styles/Header.css'
import { CartContext} from '../context/CartContext'

function Header(props) {
    const { cartItems } = useContext(CartContext)

    return (
        <div className='header-container'>
            <h1>TuBuy</h1>
            <div className='cart-box' onClick={props.flipShow}>
                <img src={cart} alt='cart' />
                <span>{cartItems.length}</span>
            </div>
        </div>
    )
}
export default Header