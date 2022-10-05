import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb} from '../../utilities/fakedb'
const Shop = () => {
    //amara first a useState korsi 
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]) 

    // amara useEffect use korteci fetch kore data gulare niye asar jonno 

    useEffect( ()=> {
        fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])
    // declare a event handler 
    const handleAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product]
         setCart(newCart)
         addToDb(newCart)
        
    }
    return (
        <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product handleAddToCart={handleAddToCart} product={product} key={product.id}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Shop;