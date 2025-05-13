import React from 'react';
import './Card.scss';
import Button from '../components/Button.jsx';

const MenuCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

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
          <Button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
