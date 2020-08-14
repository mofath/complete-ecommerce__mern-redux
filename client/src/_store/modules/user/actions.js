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

import userService from '../../../_services/users.service'
import authService from '../../../_services/auth.service'
import { getMessage } from '../alert/actions';

let msgBody = null;


const getAllUsers = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USERS });
    try {
        const { data } = await userService.getAllUsers();
        dispatch(getMessage(data.message.msgBody, data.message.msgError, GET_ALL_USERS))
        dispatch({ type: GET_ALL_USERS_SUCCESS, payload: { users: data.users } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, GET_ALL_USERS))
        dispatch({ type: GET_ALL_USERS_FAIL });
    }
}



const addNewUser = (signupData) => async (dispatch) => {
    dispatch({ type: ADD_NEW_USER });
    try {
        const { data } = await authService.signup(signupData)
        dispatch(getMessage(data.message.msgBody, data.message.msgError, ADD_NEW_USER))
        dispatch({ type: ADD_NEW_USER_SUCCESS, payload: { newAddedUser: data.newAddedUser } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, ADD_NEW_USER))
        dispatch({ type: ADD_NEW_USER_FAIL });
    }
}



const deleteUser = ({ userId, index }) => async (dispatch) => {
    dispatch({ type: DELETE_USER });
    try {
        const { data } = await userService.deleteUser(userId);
        dispatch(getMessage(data.message.msgBody, data.message.msgError, DELETE_USER))
        dispatch({ type: DELETE_USER_SUCCESS, payload: { index } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, DELETE_USER))
        dispatch({ type: DELETE_USER_FAIL });
    }
}



export {
    getAllUsers,
    addNewUser,
    deleteUser,
};