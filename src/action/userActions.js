import axios from "axios";
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USERS_GET_REQUEST,
    USERS_GET_SUCCESS,
    USERS_GET_FAIL,
    USER_GET_PROFILE_REQUEST,
    USER_GET_PROFILE_SUCCESS,
    USER_GET_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL
} from '../constants/userConstants'

axios.defaults.baseURL = 'http://testbackend-env.eba-yekm2kbu.us-east-1.elasticbeanstalk.com'

export const updateProfile = (name, email, password) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })
        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                Authorization: "Bearer " + userInfo.token
            }
        }
        const {data} = await axios.put('/api/users/profile', {name, email, password}, config)
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const getUserProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_GET_PROFILE_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                Authorization: "Bearer " + userInfo.token
            }
        }

        const {data} = await axios.get('/api/users/profile', config)
        dispatch({
            type: USER_GET_PROFILE_SUCCESS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: USER_GET_PROFILE_FAIL,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

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
                err.response && err.response.data.message
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

export const getUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USERS_GET_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                Authorization: "Bearer " + userInfo.token
            }
        }

        const {data} = await axios.get('/api/users', config)

        dispatch({
            type: USERS_GET_SUCCESS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: USERS_GET_FAIL,
            payload: err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }
}