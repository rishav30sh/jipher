import { UserActionTypes } from "./cart-dropdown.types";
import { addItemToCart, removeItemFromCart } from "./cart-utils";
const INITIAL_STATE = {
  hidden: true,
  cartItem: []
};

const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART,REMOVE_ITEM } = UserActionTypes;
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

    case REMOVE_ITEM:
      return {
        ...state,
        cartItem: removeItemFromCart(state.cartItem, action.payload)
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default CartDropDownReducer;
