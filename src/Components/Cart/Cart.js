import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const  {cart} = props
    console.log(cart)
    let total = 0;
    let oldShopping = 0;
    for(const product of cart){
        const {price, shipping} = product;
        // set total price 
        total = total + price;
        oldShopping = oldShopping + shipping;
    }
    const tax = total * 10/100;
    const grandTotal = total + tax + oldShopping

    return (
        <div className='cart'>
            <h4>Order Summery </h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price ${total}</p>
            <p>Total Shipping: ${oldShopping}</p>
            <p>Tax ${tax.toFixed(2)}</p>
            <h4>Grand  Total ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;