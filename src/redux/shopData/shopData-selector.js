import { createSelector } from "reselect";

const selectshopData = state => state.shopData;

export const selectcollection = createSelector(
  [selectshopData],
  shopdata => shopdata.Data
);