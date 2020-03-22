import React from "react";
import CustomButton from "../custom-button/custom-button-comp";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-items/cart-items";
const CartDropDown = ({cartItem}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {
        cartItem.map(Item=><CartItem key={Item.key} item={Item}/>)
      }</div>
      <CustomButton> CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cartToggle: { cartItem } }) => ({
  cartItem
});
export default connect(mapStateToProps, null)(CartDropDown);
