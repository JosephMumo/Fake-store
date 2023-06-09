import React from 'react'

import Store from './components/Store'
import { CartProvider } from './context/CartContext'



function App() {
  return(
    <div>
      <CartProvider>
        <Store />
      
      </CartProvider>
      
    </div>
  )
}
export default App