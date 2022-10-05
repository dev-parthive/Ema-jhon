import React from 'react';
import './Product.css'
const Product = (props) => {
    const {handleAddToCart, product} = props
    const {id, category, seller, name, price, img, quantity, ratings} = product
    return (
        <div className='product'>
           
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p>seller: {seller}</p>
                <p>Price: ${price}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button  onClick={() => handleAddToCart(product)} className='add-to-cart-btn'>Add to cart</button>
        </div>
    );
};

export default Product;