import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'; 

import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" /> 
        </div>

        <ul className="nav-links">
          <li><Link to="/"><button>Home</button></Link></li>
          <li><Link to="/menu"><button>Menu</button></Link></li>
          <li><Link to="/company"><button>Company</button></Link></li>
          <li><Link to="/login"><button>Login</button></Link></li>
        </ul>

        <div className="logo2">
          <img src={logo2} alt="Logo2" /> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
