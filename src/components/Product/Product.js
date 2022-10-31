import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img,name,seller,wholePrice, priceFraction, stock, starCount} = props.product;
    return (
        <div className='product-container'>
            
            <div className="product-image">
                <img src={img} alt="{img}" />
            </div>
            <div className="product-details">
                <h4 className='productName'><a href={img} target="blank">{name}</a></h4>
                <div className="columns">
                    <div className="column-1">
                        <p className='brand'><small>By: {seller}</small></p>
                        <p>Price: ${wholePrice}.{priceFraction}</p>
                        <p>Only {stock} left in stock - order soon</p>
                        <button className='addtocartbutton' onClick= {()=> props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faCartPlus}/> Add to Cart</button>
                    </div>
                    <div className="column-2">
                        <div className="review">
                        </div>
                        <div className="reviewCount">
                            Total Reviews = {starCount}
                        </div>
                        

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Product;