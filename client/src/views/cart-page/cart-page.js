import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import "./cart-page.css"

import CartTable from "./components/cartTable/cartTable"
import Paypal from "./components/paypal"
import CartSummary from './components/cartSummary/cartSummary'

import { ReactComponent as VisaLogo } from 'payment-icons/min/flat/visa.svg';
import { ReactComponent as MasterCardLogo } from 'payment-icons/min/flat/mastercard.svg';
import Fawry from '../../assets/fawry.png'


function CartPage (props) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let cartItems = []

        Axios.get(`/product/product_by_id?id=${cartItems}&type=array`)

    }, []);





    const transactionSuccess = (data) => {
        let variables = {
            cartDetails: props.user.cartDetails,
            paymentData: data,
        }

        Axios.post('http://localhost:5000/user/successBuy', variables)
            .then((response) => {
                if (response.data.success) {

                } else {
                    alert("failed to buy")
                }
            })
    }

    const transactionError = () => {
        console.log("Paypal Error");

    }

    const transactionCancel = () => {

    }

    return (
        <div className="container cart-page-wrapper">
            <div className="row">

                <div className="col-8 cart-stat">
                    <CartTable />
                </div>

                <div className="col-4 cart-summary" >

                    <div>
                        <div className="total">
                            <p>Total :</p>
                            <p className="total-value">745<span><small className="currency-text">&nbsp;&nbsp;EGP</small>  </span></p>
                        </div>
                    </div>
                    <div className="totals">
                    </div>

                    <div>
                        <Paypal
                            toPay={total}
                            onSuccess={transactionSuccess}
                            transactionError={transactionError}
                            transactionCancel={transactionCancel}
                        />
                        <div className="container payment-icon-box">
                            <div className="row">
                                {/* <p className="col-4" >Or pay with</p> */}
                                <MasterCardLogo className="col-2 payment-icon" />
                                <VisaLogo className="col-2 payment-icon" />
                                {/* <img src={Fawry} className="col-2 payment-icon" alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-success checkout-btn">PROCEED TO CHECKOUT</button>
                </div>

            </div>




        </div>
    )
}

export default CartPage;
