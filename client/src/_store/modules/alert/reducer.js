import { GET_MESSAGE, CLEAR_MESSAGE, DISPLAY_MESSAGE } from './types';

const INITIAL_STATE = {
  msgBody: null,
  msgError: null,
  id: null,
  type: null,
  cb: null,
  show: false,
};

export default function (state = INITIAL_STATE, action) {

  switch (action.type) {

    case GET_MESSAGE:
      return {
        ...state,
        msgBody: action.payload.msgBody,
        msgError: action.payload.msgError,
        id: action.payload.id,
      }

    case CLEAR_MESSAGE:
      return {
        ...state,
        ...INITIAL_STATE
      }

    case DISPLAY_MESSAGE:
      return {
        ...state,
        show: true,
        type: action.payload.type,
        cb: action.payload.cb,
      }

    default:
      return state
  }

}