import React from 'react'
import "./css/Product.css"

function Product({id, title, image, price, rating}) {
  return (
    <div>
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} alt="product-image" />

            <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product