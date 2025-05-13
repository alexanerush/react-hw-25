import React, { Component } from 'react';
import MenuCard from '../components/Card';
import Button from '../components/Button'; 
import './MenuPage.css';

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      visibleCount: 6,
    };
  }

  componentDidMount() {
    fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => console.error('Error fetching meals:', err));
  }

  handleSeeMore = () => {
    this.setState((prevState) => ({
      visibleCount: prevState.visibleCount + 6,
    }));
  };


  render() {
    const { products, visibleCount } = this.state;
    const visibleItems = products.slice(0, visibleCount);

    return (
      <>
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
                <button key={category} className="filter-button" disabled>
                  {category}
                </button>
              ))}
            </div>

            <div className="item-cards">
          {visibleItems.map(product => (
            <MenuCard
              key={product.id}
              product={product}
              onAddToCart={this.props.onAddToCart}
            />
          ))}
        </div>

        {visibleCount < products.length && (
          <Button className="button--more" onClick={this.handleSeeMore}>
            See More
          </Button>
        )}
      </div>
    </div>
      </>
    );
  }
}

export default MenuPage;
