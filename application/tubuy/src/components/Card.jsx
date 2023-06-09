import React, { useContext } from 'react'
import './styles/Card.css'
import star from '../images/star.png'
import { CartContext } from '../context/CartContext'


export default function Card({image, title, rating, price}) {

    const {updateCart}= useContext(CartContext)

    
    return(
        <div className='card-container'>
            <img src={image} alt='img' />
            <p>{title}</p>
            <div className='rating'>
                <div className='rate'>
                    <img src={star} alt='star' />
                    <h5>{rating.rate}</h5>
                </div>
                <h5>Stock({rating.count})</h5>
            </div>
            <h4>${price}</h4>
            <button onClick={() => updateCart({title, price, image})}>Add To Cart</button>
        </div>
    )
}
