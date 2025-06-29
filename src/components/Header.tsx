import React from 'react';
import './Header.scss';
import Cart from './Cart';
import { CustomUser } from '../pages/Login';
import logo from '../assets/logo.png';

interface HeaderProps {
  cartCount: number;
  user: CustomUser | null;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, user, onNavigate, onLogout }) => {
  const handleAuthClick = () => {
    if (user) {
      onLogout();
    } else {
      onNavigate('/login');
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <a className="logo" href="#" onClick={(e) => { e.preventDefault(); onNavigate('/'); }}>
          <img src={logo} alt="Logo" />
        </a>

        <ul className="nav-links">
          <li className="nav-link" onClick={() => onNavigate('/')}>Home</li>
          <li className="nav-link" onClick={() => onNavigate('/menu')}>Menu</li>
          <li className="nav-link" onClick={() => onNavigate('/company')}>Company</li>
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
