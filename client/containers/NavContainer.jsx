import React from 'react';
import TBCLogo from './../assets/tbc_logo.jpg';
import './../stylesheets/NavContainer.css';

const NavContainer = () => {
  return (
    <div id='nav'>
      <div id='header'>
        <img className='logo' src={TBCLogo}></img>
        <div>
          <h1>Triad Buying Co-op</h1>
          <p>Providing Quality Products Since 1974</p>
        </div>
      </div>
      <div id='user'>
        <a className='user-icons' href='#'>
          <h2 className='user-icons'>tbcshopper</h2>
        </a>
        <a className='user-icons' href='#'>
          <span className='user-icons material-symbols-outlined'>
            diversity_3
          </span>
        </a>
        <a className='user-icons' href='#'>
          <span className='user-icons material-symbols-outlined'>
            shopping_cart
          </span>
        </a>
      </div>
    </div>
  );
};

export default NavContainer;
