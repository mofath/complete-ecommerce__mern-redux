import React from 'react'

import Avatar from '../../../../../../UI/Avatar/Avatar'
import StarRating from '../../../../../../UI/StarRating/StarRating'
import {dynamicFormat} from '../../../../../../../_utils/date_format'

import classes from './ReviewItem.module.css'

const ReviewItem = ({ review }) =>
    <div className={[classes.ReviewItem, "horizontal-layout"].join(' ')}  >
        <div > <Avatar /></div>
        <div className={classes.Content} >
            <p ><b>{review.username}</b><span>{dynamicFormat(review.date)}</span></p>
            <p><StarRating type="display" rating={review.rating} /></p>
            <p>{review.reviewText}</p>
        </div>
    </div>

export default ReviewItem;