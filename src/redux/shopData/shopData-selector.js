import { createSelector } from "reselect";

const selectshopData = state => state.shopData;


const collectionSelector=createSelector([selectshopData],data=>data.collections)


export const selectCollectionForPreview = createSelector(
  [collectionSelector],
  collection => collection ? Object.keys(collection).map(key => collection[key]) : []
);



export const selectCollection = collectionUrlParam =>
  createSelector(
    [collectionSelector],
    collections => collections ? collections[collectionUrlParam] : []
  );


  export const selectIsCollectionLoaded = createSelector([selectshopData],shop=>!!shop.collections)
  export const selectIsCollectionFetching = createSelector([selectshopData],shop=>shop.isFetching)