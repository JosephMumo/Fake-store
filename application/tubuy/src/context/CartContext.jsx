import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    const [info, setInfo] = useState(false)
    const [ loginData] = useState({
        username: 'Admin',
        password: 'Admin123'
    })
    const [isLogged, setIsLogged] = useState(false)

    function updateCart({title ,price, image}) {
        setCartItems((prevCart) => [...prevCart, {title, price, image}])
        setInfo(true)
        setTimeout(() => {
            setInfo(false)
        }, 2000)
    }

    function removeCartItem({index}) {
        const newCartItems = [...cartItems]
        newCartItems.splice(index, 1)
        setCartItems(newCartItems)
    }

    return (
        <CartContext.Provider value ={{cartItems, info, loginData, isLogged, setIsLogged, updateCart, removeCartItem}}>
            {children}
        </CartContext.Provider>
    )
}