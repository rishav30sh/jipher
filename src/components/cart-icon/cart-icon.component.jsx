import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { CartDropDownAction } from "../../redux/cart-dropdown/cart-dropdwon.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {selectCartItemsCount} from '../../redux/cart-dropdown/cart-selector'

const CartIcon = ({ CartDropDownAction,itemCount }) => {
  return (
    <div className="cart-icon" onClick={() => CartDropDownAction()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(mapStateToProps, { CartDropDownAction })(CartIcon);
