import React from 'react'

import "./productInfo.css"

const ProductInfo = () => {
    return (
        <div className="info">
            <div>
                <div className="product-price">
                    <p className="total-value">745<span><small className="currency-text">&nbsp;&nbsp;EGP</small>  </span></p>
                    <p>All prices include VAT</p>
                    <p>Eligible for FREE Shipping on orders over 350.00 EGP</p>
                </div>
                <hr className="solid" />
                <p className="info-title" >Size:</p>
                <hr className="solid" />
                <div className="description-block">
                    <p className="info-title" >Description:</p>
                    <p className="description-text">
                        Oral-B 3D Technology movement: Round toothbrush head oscillates,
                        rotates and pulsates to break up 100 Percent more plaque vs manual toothbrush
                        Protect your sensitive gums: Visible gum pressure sensor reduces brushing speed
                        & alerts if you brush too hard
                        From day 1: Gently whitens your teeth from 1st use by removing surface stains & plaque
                        Two cleaning brushing modes: Daily clean and sensitive
                        Oral-B is the no 1 brand: Used by dentist professionals & approved by the Oral Health Foundation
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;