import {
    GET_PRODUCT_REVIEWS,
    GET_PRODUCT_REVIEWS_SUCCESS,
    GET_PRODUCT_REVIEWS_FAIL,

    SUBMIT_PRODUCT_REVIEW,
    SUBMIT_PRODUCT_REVIEW_SUCCESS,
    SUBMIT_PRODUCT_REVIEW_FAIL,
} from "./types";


import { getMessage } from '../alert/actions';
import reviewService from '../../../_services/review.service';


const getProductReviews = (productId) => async (dispatch) => {
    dispatch({ type: GET_PRODUCT_REVIEWS });
    try {
        const { data } = await reviewService.getProductReviews(productId);
        dispatch(getMessage(data.message.msgBody, false, GET_PRODUCT_REVIEWS))
        let reviews = Array.isArray(data.reviews.reviews) ? [...data.reviews.reviews] : []
        dispatch({ type: GET_PRODUCT_REVIEWS_SUCCESS, payload: { reviews } });
    }
    catch (error) {
        const msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, GET_PRODUCT_REVIEWS))
        dispatch({ type: GET_PRODUCT_REVIEWS_FAIL });
    }
}


const submitProductReview = (reviewData) => async (dispatch) => {
    dispatch({ type: SUBMIT_PRODUCT_REVIEW });
    try {
        const { data } = await reviewService.submitReview(reviewData);
        dispatch(getMessage(data.message.msgBody, false, SUBMIT_PRODUCT_REVIEW))
        dispatch({ type: SUBMIT_PRODUCT_REVIEW_SUCCESS, payload: { newReview: data.newReview } });
    } catch (error) {
        const msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message
        dispatch(getMessage(msgBody, true, SUBMIT_PRODUCT_REVIEW))
        dispatch({ type: SUBMIT_PRODUCT_REVIEW_FAIL });
    }
}


export {
    getProductReviews,
    submitProductReview,
};