import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import basket from '../assets/Cart.png';
import './Cart.scss';

const Cart: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const cartCount = orders.reduce((sum, order) => sum + order.quantity, 0);

  return (
    <div className="cart-container">
      <img src={basket} alt="Cart" className="cart-icon" />
      {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
    </div>
  );
};

export default Cart;


