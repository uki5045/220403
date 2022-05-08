import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    REGISTER_PRODUCT_REQUEST,
    REGISTER_PRODUCT_SUCCESS,
    REGISTER_PRODUCT_FAIL
} from "../constants/productConstants";

export const productRegisterReducers = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_PRODUCT_REQUEST:
            return {loading: true}
        case REGISTER_PRODUCT_SUCCESS:
            return {loading: false, success: true}
        case REGISTER_PRODUCT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const productListReducers = (state = { products: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {loading: true, products: []}
        case GET_PRODUCTS_SUCCESS:
            return {loading: false, products: action.payload.products, pages: action.payload.pages, page: action.payload.page}
        case GET_PRODUCTS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const productDetailReducers = (state = {product:{}}, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {loading: true}
        case GET_PRODUCT_SUCCESS:
            return {loading: false, product: action.payload}
        case GET_PRODUCT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}