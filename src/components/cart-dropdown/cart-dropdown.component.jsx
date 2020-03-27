import React from "react";
import CustomButton from "../custom-button/custom-button-comp";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-items/cart-items";
import { selectCartItems } from "../../redux/cart-dropdown/cart-selector";
import { createStructuredSelector } from "reselect";
const CartDropDown = ({ cartItem }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.map(Item => (
          <CartItem key={Item.key} item={Item} />
        ))}
      </div>
      <CustomButton> CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItem: selectCartItems
});
export default connect(mapStateToProps, null)(CartDropDown);
