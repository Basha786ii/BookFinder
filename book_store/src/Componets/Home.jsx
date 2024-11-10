import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/app');
  };

  return (
    <>
      <div className="hero">
        <div className="cc">
          <div className="content">
            <h1>Welcome <span className="highlight">Alex</span>,</h1>
            <h2>Read your favorite <span className="highlight">book</span> here</h2>
            <button onClick={handleSearchClick} className="search-btn">Search for Books &rarr;</button>
          </div>
          <div className="image-container">
            <img src="https://financialliteracycouncil.com/wp-content/uploads/2018/07/01_home.png" alt="Bookshelf" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
