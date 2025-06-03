import React from 'react';
import './Header.scss'; 
import Cart from './Cart';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { User } from 'firebase/auth';

interface HeaderProps {
  cartCount: number;
  user: User | null;
  onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, user, onNavigate }) => {
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
