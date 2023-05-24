import React from 'react'
import './styles/Card.css'
import star from '../images/star.png'

function Card(props) {
    return(
        <div className='card-container'>
            <img src={props.image} alt='img' />
            <p>{props.title}</p>
            <div className='rating'>
                <div className='rate'>
                    <img src={star} alt='star' />
                    <h5>{props.rating.rate}</h5>
                </div>
                <h5>Stock({props.rating.count})</h5>
            </div>
            <h4>${props.price}</h4>
            <button onClick={props.handleCartClick}>Buy Now</button>
        </div>
    )
}
export default Card;