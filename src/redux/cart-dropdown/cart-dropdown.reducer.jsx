import { UserActionTypes } from "./cart-dropdown.types";
import {addItemToCart} from './cart-utils'
const INITIAL_STATE = {
  hidden: true,
  cartItem: []
};

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = UserActionTypes;
const CartDropDownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload)
      };

    default:
      return state;
  }
};

export default CartDropDownReducer;
