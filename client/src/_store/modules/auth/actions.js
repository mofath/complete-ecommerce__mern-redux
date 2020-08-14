import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,

} from "./types";

import { GET_CART_SIZE } from "../cart/types";
import { getMessage, displayMessage } from '../alert/actions';
import authService from '../../../_services/auth.service'

let msgBody = null;


const authenticate = () => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  try {
    const { data } = await authService.authenticate();
    dispatch({ type: AUTH_SUCCESS, payload: { userInfo: data.userInfo } });
    dispatch({ type: GET_CART_SIZE, payload: { cartSize: data.userInfo.cart.length } });
  }
  catch (error) {
    msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
    dispatch({ type: AUTH_FAIL });
  }
}


const loginAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await authService.login(loginData);
    dispatch({ type: GET_CART_SIZE, payload: { cartSize: data.userInfo.cart.length } });
    dispatch(getMessage(data.message.msgBody, false, LOGIN_REQUEST))
    dispatch({ type: LOGIN_SUCCESS, payload: { userInfo: data.userInfo } });
  }
  catch (error) {
    msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
    dispatch(getMessage(msgBody, true, LOGIN_REQUEST))
    dispatch({ type: LOGIN_FAIL });
    dispatch(displayMessage("info"))
  }
}

const signupAction = (signupData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await authService.signup(signupData);
    dispatch(getMessage(data.message.msgBody, false, REGISTER_REQUEST))
    dispatch({ type: REGISTER_SUCCESS });
    dispatch(displayMessage("info"))
  }
  catch (error) {
    msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
    dispatch(getMessage(msgBody, true, REGISTER_REQUEST))
    dispatch({ type: REGISTER_FAIL });
    dispatch(displayMessage("info"))
  }
}


const logoutAction = () => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  try {
    const { data } = await authService.logout();
    dispatch(getMessage(data.message.msgBody, false, LOGOUT_REQUEST))
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch(displayMessage("info"))
  }
  catch (error) {
    dispatch(getMessage("Failed to logout, Try Again!", true, LOGOUT_REQUEST))
    dispatch({ type: LOGOUT_FAIL });
    dispatch(displayMessage("info"))
  }
}


export {
  loginAction,
  signupAction,
  authenticate,
  logoutAction,
};