import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk'

import { authReducer } from './modules/auth/reducer'
import { cartReducer } from './modules/cart/reducer'
import { reviewReducer } from './modules/review/reducer'
import { productReducer } from './modules/product/reducer'
import { userReducer } from './modules/user/reducer'
import { categoryReducer } from './modules/category/reducer'
import alertReducer from './modules/alert/reducer'

const initialState = {};

const reducer = combineReducers({
    authReducer: authReducer,
    reviewReducer: reviewReducer,
    alertReducer: alertReducer,
    cartReducer: cartReducer,
    productReducer: productReducer,
    userReducer: userReducer,
    categoryReducer: categoryReducer,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const configureStore = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default configureStore;