import React, { useState, useEffect } from 'react';

const ProductsContainer = () => {
  /* SET UP FETCH TO DB FOR PRODUCTS LIST 
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('/api/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  };

  useEffect(fetchUsers, []);

  const usersDivs = users.map(user => {
    return (
      <p>
        Username: {user.username}, Age: {user.age}
      </p>
    );
  });
  */

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
  return <div></div>;
};

export default ProductsContainer;
