import {
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    ADD_TO_CART_DUPLICATE,

    GET_CART_ITEMS,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAIL,

    REMOVE_CART_ITEM,
    REMOVE_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAIL,

    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,

} from './types'


import cartService from '../../../_services/cart.service'
import orderService from '../../../_services/order.service'
import { getMessage, displayMessage } from '../alert/actions';

let msgBody = null;

const getCartItems = () => async (dispatch) => {
    dispatch({ type: GET_CART_ITEMS });
    try {
        const { data } = await cartService.getCartItems();
        dispatch(getMessage(data.message.msgBody, false, GET_CART_ITEMS))
        dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: { cart: data.cartItems, } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, GET_CART_ITEMS))
        dispatch({ type: GET_CART_ITEMS_FAIL });
    }
}


const addToCart = (productId) => async (dispatch) => {
    dispatch({ type: ADD_TO_CART });
    try {
        const { data } = await cartService.addToCart(productId)
        dispatch(getMessage(data.message.msgBody, false, ADD_TO_CART))
        data.newAddedCartItem ?
            dispatch({ type: ADD_TO_CART_SUCCESS, payload: { newAddedCartItem: data.newAddedCartItem } }) :
            dispatch({ type: ADD_TO_CART_DUPLICATE, payload: { id: productId } })
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, ADD_TO_CART))
        dispatch({ type: ADD_TO_CART_FAIL });
    }
}


const removeCartItem = ({ productId, index }) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM });
    try {
        const { data } = await cartService.removeCartItem(productId);
        dispatch(getMessage(data.message.msgBody, false, REMOVE_CART_ITEM))
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: { index } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, REMOVE_CART_ITEM))
        dispatch({ type: REMOVE_CART_ITEM_FAIL });
    }
}



const placeOrder = (orderData) => async (dispatch) => {
    dispatch({ type: PLACE_ORDER_REQUEST });
    try {
        const { data } = await orderService.placeNewOrder(orderData);
        dispatch(getMessage(data.message.msgBody, false, PLACE_ORDER_REQUEST))
        dispatch(displayMessage('auto'))
        dispatch({ type: PLACE_ORDER_SUCCESS });
    }
    catch (error) {
        console.log(error);
        // msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        // dispatch(getMessage(msgBody, true, PLACE_ORDER_REQUEST))
        dispatch({ type: PLACE_ORDER_FAIL });
    }
}



export {
    addToCart,
    removeCartItem,
    getCartItems,
    placeOrder,
};