import React from 'react'
import Card from './Card'
import './styles/Store.css'


function Store() {
    const [storeData, setStoreData] = React.useState([])
    

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setStoreData(data))
    }, [])


    const products = storeData.map(item => {
        return <Card
            key={item.id}
            {...item} 
        
        />
    })

    return (
        <div className='shopping'>
            {products}
        </div>
    )
}
export default Store;