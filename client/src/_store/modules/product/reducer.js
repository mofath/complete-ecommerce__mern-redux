import {
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,

    ADD_NEW_PRODUCT,
    ADD_NEW_PRODUCT_SUCCESS,
    ADD_NEW_PRODUCT_FAIL,

    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
} from './types'

const INITIAL_STATE = {
    isLoading: null,
    fetchedBefore: false,
    products: [],
};

function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_ALL_PRODUCTS:
        case ADD_NEW_PRODUCT:
        case DELETE_PRODUCT:
            return {
                ...state,
                isLoading: true,
            };


        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                isLoading: false,
                fetchedBefore: true,
            };

        case ADD_NEW_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload.newAddedProduct],
                isLoading: false,
            };


        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products.slice(0, action.payload.index), ...state.products.slice(action.payload.index + 1)],
                isLoading: false,
            };


        case GET_ALL_PRODUCTS_FAIL:
        case ADD_NEW_PRODUCT_FAIL:
        case DELETE_PRODUCT_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}

export {
    productReducer,
}