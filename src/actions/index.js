import API from '../utils/API'
import _ from 'lodash'

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ONSALE_PRODUCTS = 'ONSALE_PRODUCTS'
export const ADD_CART = 'ADD_CART'

export function fetchProducts() {
    return dispatch => {
        API.getProducts()
        .then((data) => {
            dispatch({type: GET_PRODUCTS, data})
        })
    }     
}

export function onSaleProducts() {
    return dispatch => {
        API.getProducts()
        .then((data) => {
            const data1 = _.filter(data, function(a) { return a.onSale !== null; })
            dispatch({type: ONSALE_PRODUCTS, data1})
        })
    }     
}

export function addCart(product) {
    console.log('as')
    return dispatch => {
        dispatch({type: ADD_CART, product})
    }
}

export function teste() {
    console.log('teste')
}