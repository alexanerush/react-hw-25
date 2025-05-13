import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { onClick, children, className = '', type = 'button' } = this.props;

    return (
      <button type={type} className={`button ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;