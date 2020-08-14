import {
    GET_ALL_CATEGORIES,
    GET_ALL_CATEGORIES_SUCCESS,
    GET_ALL_CATEGORIES_FAIL,

    ADD_NEW_CATEGORY,
    ADD_NEW_CATEGORY_SUCCESS,
    ADD_NEW_CATEGORY_FAIL,

    DELETE_CATEGORY,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
} from './types'

const INITIAL_STATE = {
    isLoading: true,
    fetchedBefore: false,
    categories: [],
};

function categoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_ALL_CATEGORIES:
        case ADD_NEW_CATEGORY:
        case DELETE_CATEGORY:
            return {
                ...state,
                isLoading: true,
            };


        case GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories,
                isLoading: false,
                fetchedBefore: true,
            };

        case ADD_NEW_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.payload.newAddedCategoy],
                isLoading: false,
            };


        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories.slice(0, action.payload.index), ...state.categories.slice(action.payload.index + 1)],
                isLoading: false,
            };


        case GET_ALL_CATEGORIES_FAIL:
        case ADD_NEW_CATEGORY_FAIL:
        case DELETE_CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}

export {
    categoryReducer,
}