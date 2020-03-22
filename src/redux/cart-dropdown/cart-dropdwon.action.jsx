import { UserActionTypes } from "./cart-dropdown.types";
const { TOGGLE_CART_HIDDEN, ADD_ITEM } = UserActionTypes;

export const CartDropDownAction = () => ({
  type: TOGGLE_CART_HIDDEN ,
  payload: ''
});

export const addItem = (item)=>({
  type:ADD_ITEM,
  payload: item
})


