import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import './styles/Categories.css'


function Categories() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div className="cat--box">
            <h1>Hot Offers</h1>
            <Carousel responsive={responsive}>
                <div>
                  <h5>Save upto</h5>
                  <h2>50% OFF!!</h2>
                  <p>Black Friday</p>
                </div>
                <div>
                  <h5>Weekend Sale</h5>
                  <h1>70% OFF!!</h1>
                  <p>Men/ Women</p>
                </div>
                <div>
                  <h5>Flash Sale</h5>
                  <h1>20% OFF!!</h1>
                  <p>Electronic Devices</p>
                </div>
                <div>
                  <h5>Clearance Sale</h5>
                  <h1>2 for 1</h1>
                  <p>Jewelery</p>
                </div>
            </Carousel>;
        </div>
    )
}
export default Categories;