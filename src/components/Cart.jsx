import React, { Component } from 'react';
import basket from '../assets/Cart.png';
import './Cart.scss';

class Cart extends Component {
  render() {
    const { cartCount } = this.props;

    return (
      <div className="cart-container">
        <img src={basket} alt="Cart" className="cart-icon" />
        <span className="cart-counter">{cartCount}</span>
      </div>
    );
  }
}

export default Cart;