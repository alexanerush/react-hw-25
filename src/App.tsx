import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/Login';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from './firebase';
import { Product } from './pages/MenuPage'; 

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleAddToCart = (product: Product): void => {
    if (!user) {
      navigate('/login');
      return;
    }
    setCartCount((count) => count + 1); 
  };

  const handleNavigate = (to: string): void => {
    navigate(to);
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
          <Route path="/menu" element={<MenuPage onAddToCart={handleAddToCart} />} />
          <Route 
            path="/login"
            element={<LoginPage user={user ? { name: user.displayName || '', email: user.email || '' } : null} onBackHome={() => navigate('/')} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
