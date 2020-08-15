import {
    GET_PRODUCT_REVIEWS,
    GET_PRODUCT_REVIEWS_SUCCESS,
    GET_PRODUCT_REVIEWS_FAIL,

    SUBMIT_PRODUCT_REVIEW,
    SUBMIT_PRODUCT_REVIEW_SUCCESS,
    SUBMIT_PRODUCT_REVIEW_FAIL,
} from "./types";

const INITIAL_STATE = {
    reviews: [],
    submitReviewLoading: null,
    reviewLoading: null,
}

function reviewReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PRODUCT_REVIEWS:
            return {
                ...state,
                reviewLoading: true,
            };

        case SUBMIT_PRODUCT_REVIEW:
            return {
                ...state,
                submitReviewLoading: true,
            };

        case GET_PRODUCT_REVIEWS_SUCCESS:
            return {
                ...state,
                reviewLoading: false,
                reviews: action.payload.reviews,
            };

        case SUBMIT_PRODUCT_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: [...state.reviews, action.payload.newReview,],
                submitReviewLoading: false,
            };

        case GET_PRODUCT_REVIEWS_FAIL:
            return {
                ...state,
                reviewLoading: false,
            };

        case SUBMIT_PRODUCT_REVIEW_FAIL:
            return {
                ...state,
                submitReviewLoading: false,
            };

        default:
            return state;
    }

}

export {
    reviewReducer,
}
