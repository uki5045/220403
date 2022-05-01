import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
    userLoginReducers,
    userSignupReducers,
    userListReducers, userGetProfile, userUpdateProfile, usersGetByIdReducers
} from './reducers/userReducers'

import {
    productDetailReducers,
    productListReducers, productRegisterReducers
} from './reducers/productReducers'

const reducer = combineReducers({
    userLogin: userLoginReducers,
    userSignup: userSignupReducers,
    userList: userListReducers,
    GetProfile: userGetProfile,
    userUpdateProfile: userUpdateProfile,
    userGetById: usersGetByIdReducers,

    productList: productListReducers,
    productDetails: productDetailReducers,
    productRegister: productRegisterReducers
})

const userInfoFormStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: {
        userInfo: userInfoFormStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store