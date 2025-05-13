import React, { Component } from 'react';
import './Card.scss';
import Button from '../components/Button.jsx'; 

class MenuCard extends Component {
  handleAddToCart = () => {
    this.props.onAddToCart(this.props.product);
  };

  render() {
    const { product } = this.props;

    return (
      <div className="item-card" key={product.id}>
        <div className="item-card-left">
          <img src={product.img} alt={product.meal} className="item-img" />
        </div>
        <div className="item-card-right">
          <div className="item-info">
            <h2 className="product-title">{product.meal}</h2>
            <span className="card-price">${product.price}</span>
          </div>
          <p className="item-description">
            {product.instructions ? product.instructions.slice(0, 100) + '...' : ''}
          </p>
          <div className="item-footer">
            <div className="item-amount">
              <span>1</span>
            </div>
            <Button className="add-to-cart" onClick={this.handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuCard;