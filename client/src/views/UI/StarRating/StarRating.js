import React, { useState } from 'react'

import { FaStar, FaRegStar } from 'react-icons/fa';

const Filled = <FaStar color="#ffc107" />;
const NotFilled = <FaRegStar color="#ffc107" />;

const StarRating = (props) => {
    const [Rating, setRating] = useState(null);
    const [Hover, setHover] = useState(null);
    let starRating = null;

    switch (props.type) {
        case "input":
            starRating = [...Array(5)].map((_, index) => {
                const ratingIndex = index + 1;

                return (
                    <label key={index}>
                        <input type="radio"
                            onClick={() => {
                                setRating(ratingIndex)
                                props.setValue(ratingIndex)
                            }}
                        />
                        <div onMouseEnter={() => setHover(ratingIndex)}
                            onMouseLeave={() => setHover(null)}>
                            {ratingIndex <= (Hover || Rating || 1) ? Filled : NotFilled}
                        </div>
                    </label>
                )
            })
            break;


        case "display":
            starRating = [...Array(5)].map((_, index) =>
                <div key={index}>
                    {index < props.rating ? Filled : NotFilled}
                </div>)
            break;

        default:
            starRating = null
    }

    return <div className="horizontal-layout"> {starRating} </div>

}

export default StarRating;