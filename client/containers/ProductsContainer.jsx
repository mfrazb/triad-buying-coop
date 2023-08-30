import React, { useState, useEffect } from 'react';

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  const fetchUsers = () => {
    fetch('/api/products')
      .then(resp => resp.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  };

  useEffect(fetchUsers, []);
  console.log(products);
  const productCards = products.map(product => {
    return <h3>Product: {product.product_name}</h3>;
  });

  /* ADD PHOTOS TO EACH PRODUCT 

  const fetchProducts = () => {
    fetch(
      'https://api.spoonacular.com/food/ingredients/search?apiKey=e3b3bd39b7944e80811f5c1d064244bb&query=apple',
    )
      .then(data => data.json())
      .then(data => console.log(data))
      .then(data => (paragraph = data))
      .catch(error => console.log(error));
  };

  useEffect(fetchProducts, []);
*/

  return <div>{productCards}</div>;
};

export default ProductsContainer;
