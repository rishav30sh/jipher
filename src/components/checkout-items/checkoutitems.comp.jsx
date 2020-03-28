import React from "react";
import "./checkoutitems.style.scss";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart-dropdown/cart-dropdwon.action";
const CheckoutItems = ({ cartItems, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity} = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>removeItem(cartItems)}> &#10094;</div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={()=>addItem(cartItems)}> &#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItems)}
      >
        {" "}
        &#10005;{" "}
      </div>
    </div>
  );
};

export default connect(null, { clearItemFromCart, addItem, removeItem })(CheckoutItems);
