import React, { useContext } from 'react';
import './styles/Cart.css'
import { CartContext } from '../context/CartContext';
import { v4 as uuidv4 } from 'uuid';
import logo from '../images/del.png'


function Cart() {
    const { cartItems, removeCartItem } = useContext(CartContext)

    const sum = cartItems.reduce(( accumulator, object ) => {
        return accumulator + object.price;
    }, 0)

    return (
        <div className='cart-box'>
            <h1>Cart</h1>
            {cartItems.map((item, index) => {
                return <div key={uuidv4()} className='cart-item'>
                    <img src={item.image} alt='img' />
                    <p>{item.title}</p>
                    <h6>${item.price}</h6>
                    <img src={logo} alt='del' onClick={() => removeCartItem(index)} />
                </div>
            })}
            <div>
                <h3>Total Price: ${sum} </h3>
                <button>Place Order</button>
            </div>
        </div>
    )
}
export default Cart;