import {UserActionTypes} from './cart-dropdown.types'
const INITIAL_STATE={
    hidden:true
}

const {TOGGLE_CART_HIDDEN} = UserActionTypes
const CartDropDownReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
    
        default:
            return state
    }
}

export default CartDropDownReducer