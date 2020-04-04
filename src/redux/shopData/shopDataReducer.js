import shopActionTypes from "./shopTypes";

const INITIAL_STATE = {
  isFetching: false,
  errMessage: undefined,
  collections:null
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      };

    case shopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: {...action.payload}
      };

    case shopActionTypes.FETCH_COLLECTION_FAIL:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload
      };

    default:
      return state;
  }
};

export default shopDataReducer;
