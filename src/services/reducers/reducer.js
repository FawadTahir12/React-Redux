import { ADD_TO_CART, REMOVE_TO_CART } from "../constant"

const initialState = {
    cartData:[]
}
export default function cardItems(state = [],action ){

    switch(action.type){
        case ADD_TO_CART:
        
            return [
              ...state,
                {cartData:action.data}
    ]
        case REMOVE_TO_CART:
            return {
              ...state,
                cartData:state.cartData.filter(item=>item.id!==action.payload)
            }
        default:
            return state
    }
}