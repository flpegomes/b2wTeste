import { GET_PRODUCTS, ONSALE_PRODUCTS, ADD_CART } from '../actions/index'

export const INITIAL_STATE = { loading: false }

export default function products ( state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_PRODUCTS: 
            return {
                listProducts: action.data,
                loading: true
            }
        case ONSALE_PRODUCTS: 
            return {
                ...state,
                onSaleProducts: action.data1,
                loading: true
            }
        case ADD_CART:
            console.log(state.cart)
            return {
                ...state,
                cart: {
                    ...state.cart,
                    ...action.product
                }
            }
        default: 
            return state
    }

}