import {
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,

    ADD_NEW_USER,
    ADD_NEW_USER_SUCCESS,
    ADD_NEW_USER_FAIL,

    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
} from './types'


const INITIAL_STATE = {
    isLoading: null,
    fetchedBefore: false,
    users: [],
};

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {


        case GET_ALL_USERS:
        case ADD_NEW_USER:
        case DELETE_USER:
            return {
                ...state,
                isLoading: true,
            };


        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                fetchedBefore: true,
                isLoading: false,
            };

        case ADD_NEW_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.payload.newAddedUser],
                isLoading: false,
            };


        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users.slice(0, action.payload.index), ...state.users.slice(action.payload.index + 1)],
                isLoading: false,
            };


        case GET_ALL_USERS_FAIL:
        case ADD_NEW_USER_FAIL:
        case DELETE_USER_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}

export {
    userReducer,
}