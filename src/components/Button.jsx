import React from 'react';
import './Button.scss';

const Button = ({ onClick, children, className = '', type = 'button' }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
