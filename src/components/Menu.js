import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">  
      <ul>
        <li><Link to="/">Đăng ký</Link></li>
        <li><Link to="/result">Kết quả</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
