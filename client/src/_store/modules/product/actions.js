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


import productService from '../../../_services/product.service'
import { getMessage, displayMessage } from '../alert/actions';


let msgBody = null;


const getAllProducts = () => async (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCTS });
    try {
        const { data } = await productService.getAllProducts();
        dispatch(getMessage(data.message.msgBody, false, GET_ALL_PRODUCTS))
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: { products: data.products } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, GET_ALL_PRODUCTS))
        dispatch({ type: GET_ALL_PRODUCTS_FAIL });
        dispatch(displayMessage('auto'))
    }
}


const addNewProduct = (productId) => async (dispatch) => {
    dispatch({ type: ADD_NEW_PRODUCT });
    try {
        const { data } = await productService.addNewProduct(productId)
        dispatch(getMessage(data.message.msgBody, data.message.msgError, ADD_NEW_PRODUCT))
        dispatch({ type: ADD_NEW_PRODUCT_SUCCESS, payload: { newAddedProduct: data.newAddedProduct } });
        dispatch(displayMessage('auto'))
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, ADD_NEW_PRODUCT))
        dispatch({ type: ADD_NEW_PRODUCT_FAIL });
        dispatch(displayMessage('info'))
    }
}


const deleteProduct = ({ id, index }) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT });
    try {
        const { data } = await productService.deleteProduct(id);
        dispatch(getMessage(data.message.msgBody, data.message.msgError, DELETE_PRODUCT))
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: { index } });
        dispatch(displayMessage('auto'))
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, DELETE_PRODUCT))
        dispatch({ type: DELETE_PRODUCT_FAIL });
        dispatch(displayMessage('info'))
    }
}



export {
    getAllProducts,
    addNewProduct,
    deleteProduct,
};