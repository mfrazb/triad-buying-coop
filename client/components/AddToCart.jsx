import React, { useState, useEffect } from 'react';
import './../stylesheets/AddToCart.css';

const AddToCart = ({ productData }) => {
  console.log('productdata available to AddToCart button:', productData);

  // STATE HOOKS
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleAddClick = event => {
    console.log(event.target);

    // change button to
    setClicked(true);
    setCount(count + 1);
  };

  const updateItemCount = event => {
    console.log(event.target.textContent);
    console.log(count);
    // OR store order and post on submit?
    if (event.target.textContent === '-') setCount(count - 1);
    else if (event.target.textContent === '+') setCount(count + 1);
  };

  const changeItemCount = event => {};

  const postOrder = order => {
    console.log(order);
    // maybe post order on focus change?
  };

  // if clicked is true,  return updated button
  // if clicked is not true, return regular button
  // add max value
  if (!clicked) {
    return (
      <div>
        <button onClick={handleAddClick} className='cart-button'>
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className='cart-button clicked'>
          <span onClick={updateItemCount}>-</span>
          <input
            onChange={changeItemCount}
            className='item-count'
            size='3'
            value={count}></input>
          <span onClick={updateItemCount}>+</span>
        </button>
      </div>
    );
  }
};

export default AddToCart;
