import shopActionTypes from "./shopTypes";

const INITIAL_STATE = {

    
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return{
        ...state,
        ...action.payload
      }
      default:
        return state;
  }
};

export default shopDataReducer;
 