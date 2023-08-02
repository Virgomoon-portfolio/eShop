import React from 'react'
import "./css/CheckoutProduct.css"

function CheckoutProduct() {
  return (  
    <div className="checkoutProduct">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="product-image" className='checkoutProduct_image' />

        <div className="product_info">
            <p className="checkoutProduct_title">title</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>30</strong>
            </p>
            <div className="checkoutProduct_rating">
                    <p>⭐</p>
            </div>
        </div>

        <button>Remove from Basket</button>
    </div>
    // <div className="checkoutProduct">
    //     <img src={image} alt="product-image" className='checkoutProduct_image' />

    //     <div className="product_info">
    //         <p className="checkoutProduct_title">{title}</p>
    //         <p className="checkoutProduct_price">
    //             <small>$</small>
    //             <strong>{price}</strong>
    //         </p>
    //         <div className="checkoutProduct_rating">
    //             {Array(rating)
    //             .fill()
    //             .map((_, i) =>(
    //                 <p>⭐</p>
    //             ))}
    //         </div>
    //     </div>

    //     <button>Remove from Basket</button>
    // </div>

  )
}

export default CheckoutProduct