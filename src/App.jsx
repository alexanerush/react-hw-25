import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
    };
  }

  handleAddToCart = () => {
    this.setState(prevState => ({
      cartCount: prevState.cartCount + 1,
    }));
  };

  render() {
    return (
      <div className="app">
        <div className="app-container">
          <Header cartCount={this.state.cartCount} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/menu"
              element={<MenuPage onAddToCart={this.handleAddToCart} />}
            />
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

