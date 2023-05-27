import React from 'react'
import Card from './Card'
import './styles/Store.css'
import Header from './Header'
import Cart from './Cart'



function Store() {
    const [storeData, setStoreData] = React.useState([])
    const [cartCount, setCartCount] = React.useState(0)
    const [info, setInfo] = React.useState(false)
    const [show, setShow] = React.useState(true)

    

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setStoreData(data))
    }, [])

    function flipShow() {
        setShow( prevShow => !prevShow )
    }

    function handleCartClick() {
        setInfo(true)
        setTimeout(() => {
            setInfo(false)
        }, 2000)
        setCartCount( prevCount => prevCount + 1)
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
                flipShow = {flipShow}
                cartCount = {cartCount}
            />
            {info && <div className='info'><p>Successfully added to cart</p></div>}
            {show ? <div className='shopping'>{products}</div> : <Cart />}
        </>
    )
}
export default Store;