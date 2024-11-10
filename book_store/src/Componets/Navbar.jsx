import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/Styles/navbar.css';

const Navbar = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      navigate('/main/');
    }, 2000);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>Book Store</h3>
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink to="/main/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/app">App</NavLink>
            </li>
            <li>
              <NavLink to="/favourite">Favourites</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={handleLogout} className="logout-btn">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {showThankYou && (
        <div className="thank-you-message">
          <p>Thank You for visiting!</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
