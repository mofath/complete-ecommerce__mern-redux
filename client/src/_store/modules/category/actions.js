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


import categoryService from '../../../_services/category.service'
import { getMessage } from '../alert/actions';

let msgBody = null;

const getAllCategories = () => async (dispatch) => {
    dispatch({ type: GET_ALL_CATEGORIES });
    try {
        const { data } = await categoryService.getAllCategories();
        dispatch(getMessage(data.message.msgBody, false, GET_ALL_CATEGORIES))
        dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: { categories: data.categories } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message;
        dispatch(getMessage(msgBody, true, GET_ALL_CATEGORIES))
        dispatch({ type: GET_ALL_CATEGORIES_FAIL });
    }
}




const addNewCategory = (categoryId) => async (dispatch) => {
    dispatch({ type: ADD_NEW_CATEGORY });
    try {
        const { data } = await categoryService.addNewCategory(categoryId)
        dispatch(getMessage(data.message.msgBody, false, ADD_NEW_CATEGORY))
        dispatch({ type: ADD_NEW_CATEGORY_SUCCESS, payload: { newAddedCategoy: data.newAddedCategory } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message;
        dispatch(getMessage(msgBody, true, ADD_NEW_CATEGORY))
        dispatch({ type: ADD_NEW_CATEGORY_FAIL });
    }
}



const deleteCategory = ({ categoryId, index }) => async (dispatch) => {
    dispatch({ type: DELETE_CATEGORY });
    try {
        const { data } = await categoryService.deleteCategory(categoryId);
        dispatch(getMessage(data.message.msgBody, false, DELETE_CATEGORY))
        dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: { index } });
    }
    catch (error) {
        msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message;
        dispatch(getMessage(msgBody, true, DELETE_CATEGORY))
        dispatch({ type: DELETE_CATEGORY_FAIL });
    }
}




export {
    getAllCategories,
    addNewCategory,
    deleteCategory,
};