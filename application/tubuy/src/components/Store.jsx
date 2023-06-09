import React from 'react'
import Card from './Card'
import './styles/Store.css'
import Header from './Header'
import Cart from './Cart'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import Login from './Login'
import Landing from './Landing'
import Footer from './Footer'



function Store() {
    const [storeData, setStoreData] = React.useState([])
    const [show, setShow] = React.useState(true)

    

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setStoreData(data))
    }, [])

    const {info} = useContext(CartContext)
    const { isLogged } = useContext(CartContext)

    function flipShow() {
        setShow( prevShow => !prevShow )
    }



    const products = storeData.map(item => {
        return <Card
            key={item.id}
            {...item} 
        
        />
    })



    return (
        <>
            <Header
                flipShow = {flipShow}
            />
            {info && <div className='info'><p>Successfully added to cart</p></div>}
            {show ? <div className='shopping'>{products}</div> : <Cart />}
           
            
            { isLogged ? 
                <div>
                    <Header
                    flipShow = {flipShow}
                    />
                    { info && <div className='info'><p>Successfully added to cart</p></div> }
                    {show && <Landing />}
                    {show ? <div className='shopping'> {products}</div> : <Cart />}
                    {show &&<Footer /> }

                </div>
            :
            <Login />
            }
        </>
    )
}
export default Store;