import { GET_MESSAGE, CLEAR_MESSAGE, DISPLAY_MESSAGE } from './types';

export const getMessage = (msgBody, msgError, id = null) => {
    return {
        type: GET_MESSAGE,
        payload: { msgBody, msgError, id}
    };
}

export const displayMessage = (type, cb = null) => {
    return {
        type: DISPLAY_MESSAGE,
        payload: { type, cb }
    };
}

export const clearMessage = () => {
    return {
        type: CLEAR_MESSAGE,
    };
}

