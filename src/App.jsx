import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // используем хук навигации

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleAddToCart = (q) => {
    if (!user) {
      navigate('/login'); // переход на login если пользователь не авторизован
      return;
    }
    setCartCount((c) => c + q);
  };

  const handleNavigate = (to) => {
    navigate(to); // функция для передачи в Header
  };

  return (
    <div className="app">
      <div className="app-container">
        <Header
          cartCount={cartCount}
          user={user}
          onNavigate={handleNavigate}
        />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/menu"
            element={<MenuPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/login"
            element={<LoginPage setUser={setUser} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
