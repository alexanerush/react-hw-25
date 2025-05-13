import React from 'react';
import basket from '../assets/Cart.png';
import './Cart.scss';

const Cart = ({ cartCount }) => {
  return (
    <div className="cart-container">
      <img src={basket} alt="Cart" className="cart-icon" />
      <span className="cart-counter">{cartCount}</span>
    </div>
  );
};

export default Cart;
