import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="Logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/Review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;