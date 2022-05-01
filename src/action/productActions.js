import axios from "axios";
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
} from '../constants/productConstants'

// axios.defaults.baseURL = 'http://testbackend-env.eba-yekm2kbu.us-east-1.elasticbeanstalk.com'

axios.defaults.baseURL = 'http://localhost:8000'

export const listProduct = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_PRODUCTS_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                Authorization: "Bearer " + userInfo.token
            }
        }

        const {data} = await axios.get('/api/products', config)
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data.products
        })
    } catch (err) {
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }
}


export const detailProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCT_REQUEST
        })

        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: data

        })
    } catch (err) {
        dispatch({
            type: GET_PRODUCT_FAIL,
            payload: err.response && err.response.data.message
                        ? err.response.data.message
                        : err.message
        })
    }
}

export const registerProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: REGISTER_PRODUCT_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                Authorization: "Bearer " + userInfo.token
            }
        }

        const {data} = await axios.post('/api/products', product, config)
        dispatch({
            type: REGISTER_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: REGISTER_PRODUCT_FAIL,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}