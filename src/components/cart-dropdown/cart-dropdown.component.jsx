import React from "react";
import CustomButton from "../custom-button/custom-button-comp";
import "./cart-dropdown.styles.scss";


const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton> CHECKOUT </CustomButton>
    </div>
  );
};

export default CartDropDown;
