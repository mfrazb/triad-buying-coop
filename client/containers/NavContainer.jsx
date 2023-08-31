import React, { useState, useEffect } from 'react';
import TBCLogo from './../assets/tbc_logo.jpg';
import './../stylesheets/NavContainer.css';

// TO DO - change logo photo to hosted img on cloudinary
const NavContainer = () => {
  const [member, setMember] = useState([]);
  const [order, setOrder] = useState([]);

  const fetchMember = () => {
    fetch('/api/members')
      .then(resp => resp.json())
      .then(data => setMember(data))
      .catch(error => console.log(error));
  };

  useEffect(fetchMember, []);

  const fetchCart = () => {
    fetch('/api/orders')
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

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
          <h2 className='user-icons'>Welcome, {member.first_name}</h2>
        </a>
        <a className='user-icons' href='#'>
          <span className='user-icons material-symbols-outlined'>
            diversity_3
          </span>
        </a>
        <a onClick={fetchCart} className='user-icons' href='#'>
          <span className='user-icons material-symbols-outlined'>
            shopping_cart
          </span>
        </a>
      </div>
    </div>
  );
};

export default NavContainer;
