import React from 'react';
import './../stylesheets/Product.css';

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
              ${productData.price_per_unit} per{' '}
              {Number(productData.unit_quantity).toFixed(0)}{' '}
              {productData.unit_type}
            </em>
          </p>
          <button>Add to Cart</button>
        </div>
        <div className='img-placeholder'></div>
      </div>
    </div>
  );
};

export default Product;
