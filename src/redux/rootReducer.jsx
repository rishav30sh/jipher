import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartDropDownReducer from "./cart-dropdown/cart-dropdown.reducer";
import { persistReducer } from "redux-persist"; //persistReducer is reducer for persisted store
import storage from "redux-persist/lib/storage"; // tells redux persists to use local storage
import directoryReducer from './directory/directory-reducer'
import shopDataReducer from './shopData/shopDataReducer.js'
//confif for persist, it says key:"root", i.e we want to store everything from root, wewant to use "locale storage"
//whitelist contains the reducer object to want to persist in the form of array
const persistconfig={
    key:'root',
    storage,
    whitelist:[ 'cartToggle']
}

const rootReducer= combineReducers({
  user: userReducer,
  cartToggle: CartDropDownReducer,
  directory:directoryReducer,
  shopData:shopDataReducer,
});

//persistReducer is passed with two things, i.e persistConfig and rootReducer
export default persistReducer(persistconfig, rootReducer)
