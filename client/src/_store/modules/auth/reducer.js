
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



const INITIAL_STATE = {
  isAuthenticated: null,
  isLoading: null,
  userInfo: {},
};


function authReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case LOGOUT_REQUEST:
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        isAuthenticated: true,
        userInfo: action.payload.userInfo,
      };

    case REGISTER_SUCCESS:
    case LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case AUTH_FAIL:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userInfo: null,
        isAuthenticated: false,
        isLoading: false,
      }
    default:
      return state;
  }
}




export {
  authReducer,
}