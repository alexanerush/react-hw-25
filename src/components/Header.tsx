import React, { useContext } from 'react';
import './Header.scss';
import Cart from './Cart';
import { CustomUser } from '../pages/Login';
import logo from '../assets/logo.png';
import { ThemeContext } from '../context/ThemeContext';

interface HeaderProps {
  user: CustomUser | null;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onNavigate, onLogout }) => {
  const handleAuthClick = () => {
    if (user) {
      onLogout();
    } else {
      onNavigate('/login');
    }
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <nav className="nav">
        <a
          className="logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
        >
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
            <Cart />
          </li>
          <li>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'light' ? 'dark' : 'light'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

