import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Order from './pages/Order/Order';
import Login, { CustomUser } from './pages/Login';
import Welcome from './pages/Welcome';
import PrivateRoute from './components/PrivateRoute';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { Product } from './types/Product';
import { addOrder } from './store/slices/ordersSlice';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [user, setUser] = useState<CustomUser | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email) {
        setUser({
          name: currentUser.displayName || '',
          email: currentUser.email,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, []);

  const handleAddToCart = (product: Product): void => {
    if (!user) {
      navigate('/login');
      return;
    }

    dispatch(
      addOrder({
        id: Date.now(),
        product,
        quantity: 1,
      })
    );

    setCartCount((count) => count + 1);
  };

  const handleNavigate = (to: string): void => {
    navigate(to);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="app">
      <div className="app-container">
        <Header
          cartCount={cartCount}
          user={user}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={<MainPage onAddToCart={handleAddToCart} />} />
          <Route path="/menu" element={<MenuPage onAddToCart={handleAddToCart} />} />
          <Route
            path="/login"
            element={
              <Login
                user={user}
                onBackHome={() => navigate('/')}
                setUser={(newUser) => {
                  setUser(newUser);
                  navigate('/welcome');
                }}
              />
            }
          />
          <Route path="/welcome" element={<Welcome user={user} />} />
          <Route
            path="/orders"
            element={
              <PrivateRoute user={user}>
                <Order />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
