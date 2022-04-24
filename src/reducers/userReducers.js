import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_LOGOUT,
    USERS_GET_REQUEST,
    USERS_GET_SUCCESS,
    USERS_GET_FAIL
} from '../constants/userConstants'

export const userSignupReducers = (state = {}, action) => {
    switch (action.type) {
        case USER_CREATE_REQUEST:
            return {loading: true}
        case USER_CREATE_SUCCESS:
            return {loading: false, succes: true}
        case USER_CREATE_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userLoginReducers = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userListReducers = (state = {}, action) => {
    switch (action.type) {
        case USERS_GET_REQUEST:
            return {loading: true}
        case USERS_GET_SUCCESS:
            return {loading: false, users: action.payload}
        case USERS_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}