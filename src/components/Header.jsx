import React from 'react';
import './Header.css'; 
import Cart from './Cart';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" /> 
        </div>

        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/menu" className="nav-link">Menu</Link></li>
          <li><Link to="/company" className="nav-link">Company</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li>
            <Cart cartCount={cartCount} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
