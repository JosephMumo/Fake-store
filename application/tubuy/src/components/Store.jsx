import React from 'react'
import Card from './Card'
import './styles/Store.css'
import Header from './Header'
import Cart from './Cart'


function Store() {
    const [storeData, setStoreData] = React.useState([])
    const [cartCount, setCartCount] = React.useState(0)
    

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setStoreData(data))
    }, [])

    function handleCartClick() {
        setCartCount(prevCount => prevCount + 1)
    }


    const products = storeData.map(item => {
        return <Card
            key={item.id}
            {...item} 

            handleCartClick = {handleCartClick}
        
        />
    })

    return (
        <>
            <Header
                cartCount = {cartCount}
            />
            <div className='shopping'>
                {products}
            </div>
        </>
    )
}
export default Store;