import React, { useState, useEffect } from 'react';
import MenuCard from '../components/Card';
import Button from '../components/Button';
import './MenuPage.scss';

export interface Product {
  id: string | number;
  img: string;
  meal: string;
  price: number;
  instructions?: string;
  category?: string;
}

interface ApiResponse {
  id: string;
  image: string;
  name: string;
  price: number;
  instructions?: string;
  category?: string;
}

interface MenuPageProps {
  onAddToCart: (product: Product) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
      .then(res => res.json())
      .then((data: any[]) => {
        const mapped: Product[] = data.map(item => ({
          id: item.id,
          img: item.img,             
          meal: item.meal,           
          price: item.price,
          instructions: item.instructions,
          category: item.category,
        }));
        setProducts(mapped);
      })
      
      .catch(err => console.error('Error fetching meals:', err));
  }, []);
  

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

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
          {['Dessert', 'Dinner', 'Breakfast'].map(category => (
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
              product={{ ...product, id: String(product.id) }} 
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
