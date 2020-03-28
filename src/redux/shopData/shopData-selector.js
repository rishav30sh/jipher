import { createSelector } from "reselect";

const selectshopData = state => state.shopData;

export const selectCollectionForPreview = createSelector(
  [selectshopData],
  collection => Object.keys(collection).map(key=> collection[key ])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectshopData],
    collections => collections[collectionUrlParam]
  );
