import React from 'react';
import './../stylesheets/MainContainer.css';

// React hooks
//section containers
import NavContainer from './NavContainer.jsx';
import ProductsContainer from './ProductsContainer.jsx';
import FooterContainer from './FooterContainer.jsx';

const MainContainer = () => {
  return (
    <div id='mainContainer' className='container'>
      <NavContainer />
      <ProductsContainer />
      <FooterContainer />
    </div>
  );
};

export default MainContainer;
