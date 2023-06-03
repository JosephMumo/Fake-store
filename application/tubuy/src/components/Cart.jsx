import React, { useContext } from 'react';
import './styles/Cart.css'
import { CartContext } from '../context/CartContext';
import { v4 as uuidv4 } from 'uuid';


function Cart() {
    const { cartItems } = useContext(CartContext)

    console.log(cartItems)

    return (
        <div className='cart-box'>
            <h1>Cart</h1>
            {cartItems.map((item) => {
                return <div key={uuidv4} className='cart-item'>
                    <img src={item.image} alt='img' />
                    <p>{item.title}</p>
                    <h6>${item.price}</h6>
                </div>
            })}
        </div>
    )
}
export default Cart;