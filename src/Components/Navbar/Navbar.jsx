import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import loginicon from '../Assets/login-icon.jpg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? 'open' : 'closed'}`}>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link style={{ textDecoration: 'none'}} to='/' onClick={toggleMenu}>
            Shop
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none'}} to='/mens' onClick={toggleMenu}>
            Men
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none'}} to='/womens' onClick={toggleMenu}>
            Women
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none'}} to='/kids' onClick={toggleMenu}>
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
          <img className="login-inv"src={loginicon} alt=""></img>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
