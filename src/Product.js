import React from 'react'
import "./css/Product.css"

function Product() {
  return (
    <div>
        <div className="product">
            <div className="product_info">
                <p>Title</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>30</strong>
                </p>
                <div className="product_rating">⭐⭐</div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="product-image" />

            <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product