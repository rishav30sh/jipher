import { createSelector } from "reselect";
const selectCart = state => state.cartToggle;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItem
);
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItem => cartItem.reduce((acc, item) => acc + item.quantity, 0)
);
