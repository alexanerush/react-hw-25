import React from 'react';
import basket from '../assets/Cart.png';
import './Cart.scss';

interface CartProps {
  cartCount: number;
}

const Cart: React.FC<CartProps> = ({ cartCount }) => {
  return (
    <div className="cart-container">
      <img src={basket} alt="Cart" className="cart-icon" />
      <span className="cart-counter">{cartCount}</span>
    </div>
  );
};

export default Cart;

