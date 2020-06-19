import React from "react"

import { BsHeart } from 'react-icons/bs';



import './cartTable.css'
import jacket from '../../../../assets/jacket.jpg'

const CartTable = () => {
    return (
        <div className="container">
            Shopping Cart  (1)
            <div className="cart-box  " >
                {/* *************************** body-section ************************** */}
                <div className="row body-section">

                    <div className="col-4 frame">
                        <img
                            className="col mb-3 productImg"
                            src={jacket}
                            alt="" />
                    </div>

                    <div className="col-8 details">
                        <p className="title">Twill shirt jacket</p>

                        <div className="price-tag">
                            <p className="price-value">745<span><small className="currency-text">&nbsp;&nbsp;EGP</small>  </span></p>
                        </div>
                        <dl className="stats">
                            <div className="ele">
                                <dt>Color label:</dt>
                                <dd><small> Khaki green</small> </dd>
                            </div>

                            <div className="ele">
                                <dt>Color label:</dt>
                                <dd><small>Khaki green</small></dd>
                            </div>

                            <div className="ele">
                                <dt>Item code: </dt>
                                <dd><small>HM0874312001</small> </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <hr className="solid" />

                {/* *************************** bottom-section ************************** */}
                <div className="row container bottom-section">
                    <div className='col'>
                        <button type="submit" class="link"><span>Remove</span></button>
                    </div>

                    <div className="col qty-block">
                        <p>Qty</p>
                        <select className="form-control qty-select" >
                            <option selected>1</option>
                            <option>2</option>
                        </select>
                    </div>

                    <div className="col">
                        <BsHeart size="30px" color="red" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartTable;