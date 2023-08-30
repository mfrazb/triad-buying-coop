import React from 'react';

const Product = props => {
  const { productData } = props;

  return (
    <div>
      <h3>{productData.product_name}</h3>
    </div>
  );
};

export default Product;
