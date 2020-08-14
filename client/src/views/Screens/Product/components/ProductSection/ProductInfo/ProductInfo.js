import React from 'react'

import StarRating from '../../../../../UI/StarRating/StarRating'
import { thousands_separators } from "../../../../../../_utils/helpers";

import classes from "./ProductInfo.module.css"

const ProductInfo = (props) => <div className={classes.Info}>

    {props.info &&
        <React.Fragment>
            <h3>{props.info.name}</h3>

            <StarRating type="display" rating={props.info.cumulativeRating} />

            <h4><b>{props.info.price && thousands_separators(props.info.price)}</b><small>&nbsp;&nbsp;EGP</small></h4>

            <h6>All prices include VAT</h6>
            <h6>Eligible for FREE Shipping on orders over 350.00 EGP</h6>
            <hr className="solid" />

            <h5>Size:</h5>
            <hr className="solid" />

            <h5>Description:</h5>
            <h6>{props.info.details}</h6>
        </React.Fragment>
    }

</div>

export default ProductInfo;