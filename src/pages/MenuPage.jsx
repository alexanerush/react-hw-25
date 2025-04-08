import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import menuItems from '../data/menuItems';
import './MenuPage.css';

const PhoneTooltip = ({ children }) => {
    return (
      <span className="tooltip-wrapper">
        {children}
        <span className="tooltip-text">+3706578976</span>
      </span>
    );
  };
  

function MenuPage() {
  return (
    <>
      <Header />
      <div className="menu-page">
        <div className="menu-container">
          <h1 className="menu-title">Browse our menu</h1>
          <p className="menu-subtitle">
            Use our menu to place an order online, or{" "}
             <span className="tooltip">
                 <span className="highlight">phone</span>
                     <span className="tooltip-text">+3706543786</span>
             </span>{" "}
            our store <br /> to place a pickup order. Fast and fresh food.
        </p>
        <div className="menu-filters">
            {['Dessert', 'Dinner', 'Breakfast'].map((category) => (
              <button key={category} className="filter-button">{category}</button>
            ))}
          </div>

        <div className="menu-container">
          <div className="menu-grid">
            {menuItems.map((item, idx) => (
              <div key={idx} className="menu-card">
                <img src={item.img} alt={item.title} className="menu-image" />

             <div className="menu-content">
                <div className="menu-card-header">
                  <h3>{item.title}</h3>
                  <span class="price">${item.price.toFixed(2)} USD</span>
                </div>

                <p className="menu-description">{item.description}</p>

                <div className="menu-actions">
                  <input type="number" defaultValue="1" min="1" className="quantity-input" />
                  <button className="add-button">Add to cart</button>
                </div>
             </div>
              </div>
            ))}
             </div>
          </div>

          <button className="see-more-button">See more</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
