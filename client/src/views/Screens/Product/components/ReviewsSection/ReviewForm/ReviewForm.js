import React, { useState } from 'react'

import Avatar from '../../../../../UI/Avatar/Avatar'
import StarRating from '../../../../../UI/StarRating/StarRating'

import classes from './ReviewForm.module.css'

const ReviewForm = ({ productId, submitReview }) => {

    const [RviewText, setRviewText] = useState("");
    const [Rating, setRating] = useState(1);

    const submit = () => {
        const reviewData = { productId, RviewText, Rating }
        submitReview(reviewData)
    }


    return (
        <div className={[classes.ReviewForm, "horizontal-layout"].join(' ')}>

            <div className={[classes.Form, "vertical-layout"].join(' ')}>
                <StarRating type="input" setValue={setRating} />

                <div className={[classes.TextContainer, "horizontal-layout"].join(' ')}>
                    <div> <Avatar /></div>
                    <textarea onChange={(event) => setRviewText(event.target.value)} placeholder="Leave a review..." > </textarea>
                </div>

                <button onClick={submit}>Submit</button>
            </div>

        </div>
    )
}

export default ReviewForm;
