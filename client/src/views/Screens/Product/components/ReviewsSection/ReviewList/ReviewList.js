import React from 'react'

import ReviewItem from './ReviewItem/ReviewItem'

const ReviewList = ({ reviews }) => {
    return (
        <div>
            {
                reviews && reviews.slice(0).reverse().map((review, index) =>
                    <ReviewItem review={review} key={index} />)
            }
        </div>
    )
}






export default ReviewList;