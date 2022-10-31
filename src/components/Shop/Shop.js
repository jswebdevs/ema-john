import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const produts30= fakeData.slice(0,10);
    const [products, setProducts] =  useState(produts30);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{

        const newCart = [...cart, product];
        setCart (newCart);

        
    }

    return (
        <div className='shopContainer'>
            <div className="productContainer">
                {
                    products.map(pd =><Product product={pd} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;