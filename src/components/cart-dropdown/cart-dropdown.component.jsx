import React from "react";
import CustomButton from "../custom-button/custom-button-comp";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-items/cart-items";
import { selectCartItems } from "../../redux/cart-dropdown/cart-selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import {CartDropDownAction} from '../../redux/cart-dropdown/cart-dropdwon.action'
const CartDropDown = ({ cartItem, history, CartDropDownAction }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.length ? (
          cartItem.map(Item => <CartItem key={Item.key} item={Item} />)
        ) : (
          <span className="empty-message"> Your Cart is Empty</span>
        )}
      </div>
      <CustomButton onClick={() => {history.push("/checkout"); CartDropDownAction() }}>
        {" "}
        CHECKOUT{" "}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems
});
export default withRouter(connect(mapStateToProps, {CartDropDownAction})(CartDropDown));
