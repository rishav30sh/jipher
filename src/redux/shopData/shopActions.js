import shopActionTypes from "./shopTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";


const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START
});

const fetchCollectionSuccess = collectionMap => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
});
const fetchCollectionFail = err => ({
  type: shopActionTypes.FETCH_COLLECTION_FAIL,
  payload: err.message
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(err => dispatch(fetchCollectionFail(err)));
  };
};
