import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div>
            <h3>Order summary</h3>
            <h5>Items ordered:{props.cart.length}</h5>
            <br />
            <p>Total:{total}$</p>
        </div>
    );
};

export default Cart;