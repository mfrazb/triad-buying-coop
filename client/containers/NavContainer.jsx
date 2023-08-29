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
        <h1>User Details</h1>
      </div>
    </div>
  );
};

export default NavContainer;
