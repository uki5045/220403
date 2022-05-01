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
    USERS_GET_FAIL,
    USER_GET_PROFILE_REQUEST,
    USER_GET_PROFILE_SUCCESS,
    USER_GET_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL
} from '../constants/userConstants'

export const userUpdateProfile = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {loading: true}
        case USER_UPDATE_PROFILE_SUCCESS:
            return {loading: false, success: true}
        case USER_UPDATE_PROFILE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const userGetProfile = (state = {}, action) => {
    switch (action.type) {
        case USER_GET_PROFILE_REQUEST:
            return {loading: true}
        case USER_GET_PROFILE_SUCCESS:
            return {loading: false, user: action.payload}
        case USER_GET_PROFILE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

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