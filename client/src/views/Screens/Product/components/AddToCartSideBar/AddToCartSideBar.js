import React from 'react'

import { FaShippingFast as ShippingIcon } from 'react-icons/fa';
import { RiRefund2Line as RefundIcon } from 'react-icons/ri';

import classes from './AddToCartSideBar.module.css'

const AddToCartSideBar = (props) => {
    return (
        <div className={[classes.AddToCartSideBar, "vertical-layout"].join(' ')} >

            <h5>DELIVERY & RETURNS</h5>

            <div className="horizontal-layout">
                <i><ShippingIcon /></i>
                <div>
                    <h5>Delivery Information</h5>
                    <p> We have made our deliveries safer, You will receive your order within 10 working days.</p>
                </div>
            </div>

            <div className="horizontal-layout">
                <i><RefundIcon /></i>
                <div>
                    <h5>Return Policy</h5>
                    <p> 14 days free return and up to 30 days for defective products. </p>
                </div>
            </div>

            <button
                onClick={() => props.clicked()}
                className={props.isLoading ? classes.LoadingBtn : classes.AddCartBtn}
            >
                {props.isLoading ? `Loading...` : `ADD TO BASKET`}
            </button>
        </div>
    )
}

export default AddToCartSideBar;