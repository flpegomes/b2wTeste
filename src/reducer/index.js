import { GET_PRODUCTS, ONSALE_PRODUCTS, ADD_CART, REMOVE_CART } from '../actions/index'
import _ from 'lodash'

export const INITIAL_STATE = { loading: false }

export default function products ( state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_PRODUCTS: 
            console.log('getproducts')
            return {
                listProducts: action.data,
                loading: true
            }
        case ONSALE_PRODUCTS: 
            console.log('onsale')
            return {
                ...state,
                onSaleProducts: action.data1,
                loading: true
            }
        case ADD_CART:
            console.log('addCart')
            console.log(state.cart)

            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.product._id]: action.product
                }
            }
        case REMOVE_CART: 
            const data = _.omit(state.cart, action.product._id)
            console.log(state.cart)
            return {
                ...state,
                cart: {
                    ...data,
                }
            }
        default: 
            return state
    }

}