import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'
import CartDropDownReducer from './cart-dropdown/cart-dropdown.reducer'

export default combineReducers({
    user: userReducer,
    cartToggle:CartDropDownReducer
})