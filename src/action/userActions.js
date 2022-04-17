import axios from "axios";
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL
} from '../constants/userConstants'

axios.defaults.baseURL = 'http://testbackend-env.eba-yekm2kbu.us-east-1.elasticbeanstalk.com'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const {data} = await axios.post('/api/users/login', {email, password})
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }
}


export const signup = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_CREATE_REQUEST
        })

        const {data} = await axios.post('/api/users', {name, email, password})
        dispatch({
            type: USER_CREATE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: USER_CREATE_FAIL,
            payload:
                err.response && err.response.data.massage
                    ? err.response.data.message
                    : err.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
    document.location.href = '/'
}
