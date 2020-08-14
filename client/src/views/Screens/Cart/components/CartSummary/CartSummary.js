import React from 'react'

import Paypal from './paypal'

import fawry from '../../../../../assets/img/icons/fawry.png'
import visa from '../../../../../assets/img/icons/visa.png'
import mastercard from '../../../../../assets/img/icons/mastercard.png'
import { thousands_separators } from '../../../../../_utils/helpers'



import classes from './CartSummary.module.css'
import './button.css'

const CartSummary = ({ total, transactionSuccess, transactionError }) =>

    <div className={[classes.CartSummary, "vertical-layout"].join(' ')} >
        <div className={classes.TotalBox}>
            <p>Total :</p>
            <p><b>{thousands_separators(total)}</b>&nbsp;&nbsp;EGP</p>
        </div>

        <Paypal
            toPay={total}
            onSuccess={transactionSuccess}
            transactionError={transactionError}
        // transactionCancel={transactionCancel}
        />

        <div className={[classes.PaymentIcons, "horizontal-layout"].join(' ')}>
            <div><p >Or pay with</p></div>
            <img src={mastercard} alt="" />
            <img src={visa} alt="" />
            <img src={fawry} alt="" />
        </div>

        <div >
            <button className="button" onClick={() => transactionSuccess()} >
                PROCEED TO CHECKOUT
                </button>
        </div>

    </div>


export default CartSummary;