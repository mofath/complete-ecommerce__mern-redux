import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getMessage, displayMessage } from '../../../../../_store/modules/alert/actions';
import { getProductReviews, submitProductReview } from '../../../../../_store/modules/review/actions';
import { AuthMsg } from "../../../../../assets/data/msgs";

import ReviewForm from './ReviewForm/ReviewForm';
import ReviewList from './ReviewList/ReviewList';
import classes from './ReviewSection.module.css';

const ReviewSection = ({ productId }) => {
    const reviewReducer = useSelector(state => state.reviewReducer);
    const authReducer = useSelector(state => state.authReducer);
    const { reviews, submitReviewLoading } = reviewReducer;
    const { isAuthenticated } = authReducer;

    const dispatch = useDispatch();

    useEffect(() => { dispatch(getProductReviews(productId)) }, []);

    const submitReview = async (reviewData) => {
        if (isAuthenticated) dispatch(submitProductReview(reviewData));
        else {
            dispatch(getMessage(AuthMsg, true));
            dispatch(displayMessage('info'));
        }
    }

    return <section className={classes.ReviewSection}>
        <div className={[classes.Heading, "horizontal-layout"].join(' ')}>
            <h5>{!reviews ? 0 : reviews.length} {reviews && reviews.length === 1 ? "review" : "reviews"} </h5>
            <h6>Write a review</h6>
        </div>

        <ReviewForm productId={productId} submitReview={submitReview} loading={submitReviewLoading} />
        <ReviewList reviews={reviews} />
    </section>
}

export default ReviewSection;