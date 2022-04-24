import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
    userLoginReducers,
    userSignupReducers,
    userListReducers
} from './reducers/userReducers'

import {
    productListReducers
} from './reducers/productReducers'

const reducer = combineReducers({
    userLogin: userLoginReducers,
    userSignup: userSignupReducers,
    userList: userListReducers,
    productList: productListReducers
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