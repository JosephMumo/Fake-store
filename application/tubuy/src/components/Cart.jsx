import React, { useContext } from 'react';
import './styles/Cart.css'
import { CartContext } from '../context/CartContext';
import { v4 as uuidv4 } from 'uuid';
import logo from '../images/del.png'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"


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
            <div className='payments'>
                <h2>Total Price: ${sum} </h2>
                <PayPalScriptProvider options={{
                    'client-id' : 'AelURmurEPOjIIKOF0ktM4ErVTG9DlmLPLsNk3BeHCfTVml25pevkU07RskIs-telESVawwvmaW77iCb'
                }}>
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: '100.00',
                                        },
                                    },
                                ],
                            });
                        }}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    )
}
export default Cart;