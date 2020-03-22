import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { CartDropDownAction } from "../../redux/cart-dropdown/cart-dropdwon.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
const CartIcon = ({ CartDropDownAction }) => {
  return (
    <div className="cart-icon" onClick={() => CartDropDownAction()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, {CartDropDownAction})(CartIcon);
