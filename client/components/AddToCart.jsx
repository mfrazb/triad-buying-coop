import React, { useState, useEffect } from 'react';
import './../stylesheets/AddToCart.css';

const AddToCart = ({ productData }) => {
  // TO DO - deconstruct productData to only bring in what is needed and refactor func
  console.log('productdata available to AddToCart button:', productData);

  // STATE HOOKS
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  // when user clicks Add to Cart button, change to item count button
  const handleAddClick = event => {
    setClicked(true);
    setCount(count + 1);
  };

  // when user clicks, '-' or '+' adds or subtract from count
  const updateItemCount = event => {
    if (count === 0) return;
    if (count >= productData.product_quantity) {
      // TO DO - add max notice when user reaches max quantity
      // create max notice element
      // const maxNotice = document.createElement('p');
      // maxNotice.textContent = 'max';
      // maxNotice.classList.add = 'max-notice';
      // const button = event.target.closest('.cart-button');
      // button.insertAdjacentElement('afterend', maxNotice);
      return;
    }

    if (event.target.textContent === '-') setCount(count - 1);
    else if (event.target.textContent === '+') setCount(count + 1);
  };

  // TO DO - user update input field by inputting new number
  const changeItemCount = event => {};

  // post draft order of product when user focuses on another part of page
  // TO DO - pass in member_id using UseContext hook
  const postDraftOrder = event => {
    console.log('onBlur:', event.target);
    const body = {
      ordered_quantity: count,
      ordered_status: 'draft',
      member_id: '200',
      product_id: productData._id,
    };
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  };

  // if user hasn't clicked, display Add to Cart button
  // if user has clicked Add to Cart, display item count button
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
        <button onBlur={postDraftOrder} className='cart-button clicked'>
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
