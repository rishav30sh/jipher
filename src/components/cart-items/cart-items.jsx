import React from "react";
import "./cart-items.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" className='img' />
      <div className="item-details">
        <span className='name'>{name}</span>
        <span className='price'>{quantity}X${price}</span>
      </div>
    </div>
  );
};

export default CartItem