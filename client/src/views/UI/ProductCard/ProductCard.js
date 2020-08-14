import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './product-card.css'

function ProductCard(props) {
    const [image, SetImage] = useState(props.images[0])

    const handleMouseEnter = () => { SetImage(props.images[1])}
    const handleMouseLeave = () => { SetImage(props.images[0])}

    return (
        <div className="prooduct-card-container">
            <Link to={`/product/${props.id}`} className="mylink">
                <img
                    src={image}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    alt=""
                />
                <div className="card-body">
                    <h6>{props.name}</h6>
                    <h5>EGP&nbsp;{props.price}</h5>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;