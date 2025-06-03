import React from 'react';
import './Header.css'; 
import Cart from './Cart';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ cartCount, user, onNavigate }) => {
  const handleAuthClick = () => {
    if (user) {
  
      onNavigate('/logout'); 
    } else {

      onNavigate('/login');
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <a className="logo" href="#" onClick={() => onNavigate('/')}>
          <img src={logo} alt="Logo" /> 
        </a>

        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/menu" className="nav-link">Menu</Link></li>
          <li><Link to="/company" className="nav-link">Company</Link></li>

          <li className="nav-link" onClick={handleAuthClick} style={{ cursor: 'pointer' }}>
            {user ? 'Logout' : 'Login'}
          </li>

          <li>
            <Cart cartCount={cartCount} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
