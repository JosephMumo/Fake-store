import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    const [info, setInfo] = useState(false)

    function updateCart({title ,price, image}) {
        setCartItems((prevCart) => [...prevCart, {title, price, image}])
        setInfo(true)
        setTimeout(() => {
            setInfo(false)
        }, 2000)
    }

    return (
        <CartContext.Provider value ={{cartItems, info, updateCart}}>
            {children}
        </CartContext.Provider>
    )
}