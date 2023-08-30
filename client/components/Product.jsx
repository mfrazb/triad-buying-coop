import React from 'react';
import './../stylesheets/Product.css';
import appleImg from './../assets/produce_apples.png';

const Product = props => {
  const { productData } = props;

  console.log('productdata:', productData);

  return (
    <div className='product-card'>
      <h3>{productData.product_name}</h3>
      <div className='product-details'>
        <div>
          <p>{productData.product_code}</p>
          <p>Vendor: {productData.vendor}</p>
          <p>
            <em>
              ${Number(productData.price_per_unit).toFixed(2)} per{' '}
              {Number(productData.unit_quantity).toFixed(0)}{' '}
              {productData.unit_type}
            </em>
          </p>
          <button>Add to Cart</button>
        </div>
        <div className='img-placeholder'>
          <img className='img-produce' src={appleImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Product;
