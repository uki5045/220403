import axios from "axios";
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL
} from '../constants/productConstants'


axios.defaults.baseURL = 'http://testbackend-env.eba-yekm2kbu.us-east-1.elasticbeanstalk.com'

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