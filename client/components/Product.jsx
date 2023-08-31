import React, { useState, useEffect } from 'react';
import './../stylesheets/Product.css';
import AddToCart from './AddToCart.jsx';
import appleImg from './../assets/produce_apples.png';

const Product = props => {
  const { productData } = props;
  // console.log('productdata available to Product:', productData);

  return (
    <div className='product-card'>
      <h3>{productData.product_name}</h3>
      <div className='product-content'>
        <div className='product-details'>
          <p>{productData.product_code}</p>
          <p>Vendor: {productData.company_name}</p>
          <p>
            <em>
              ${Number(productData.price_per_unit).toFixed(2)} per{' '}
              {Number(productData.unit_quantity).toFixed(0)}{' '}
              {productData.unit_type}
            </em>
          </p>
          <AddToCart productData={productData} />
        </div>
        <div className='img-placeholder'>
          <img className='img-produce' src={appleImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Product;
