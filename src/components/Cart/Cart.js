import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, prd) => total+ prd.price, 0);
    const shipping = cart.reduce( (shipping, prd) => total+ prd.shipping, 0);


    return (
        <div>
            <h3>Order Summary:</h3>
            <p>Items Ordered:{cart.length}</p>
            <p>Item Price:{(total).toFixed(2)}</p>
            <p>Shipping & Handling: {(shipping).toFixed(2)}</p>
            <p>Total before tax:{(total+shipping).toFixed(2)}</p>
            <p>Tax:{((total+shipping)/10).toFixed(2)}</p>
            <hr />
            <p>Total: {(total+shipping+(total+shipping)/10).toFixed(2)}</p>
            <button>Review your Order</button>
        </div>
    );
};

export default Cart;