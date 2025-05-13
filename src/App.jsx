import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="app">
      <div className="app-container">
        <Header cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/menu"
            element={<MenuPage onAddToCart={handleAddToCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
