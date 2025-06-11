import React, { useState, useEffect } from 'react';
import MenuCard from '../components/Card';
import Button from '../components/Button';
import './MenuPage.css';

const MenuPage = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching meals:', err));
  }, []);

  const handleSeeMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  const visibleItems = filteredProducts.slice(0, visibleCount);

  return (
    <div className="menu-page">
      <div className="menu-container">
        <h1 className="menu-title">Browse our menu</h1>
        <p className="menu-subtitle">
          Use our menu to place an order online, or{' '}
          <span className="tooltip">
            <span className="highlight">phone</span>
            <span className="tooltip-text">+3706543786</span>
          </span>{' '}
          our store to place a pickup order. Fast and fresh food.
        </p>

        <div className="menu-filters">
          {['Dessert', 'Dinner', 'Breakfast'].map((category) => (
            <button
              key={category}
              className="filter-button"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="item-cards">
          {visibleItems.map(product => (
            <MenuCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <Button className="button--more" onClick={handleSeeMore}>
            See More
          </Button>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
