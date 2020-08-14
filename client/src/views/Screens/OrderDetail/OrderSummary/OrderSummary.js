import React from 'react'

import classes from './OrderSummary.module.css'

const OrderSummary = ({ totalPrice }) =>

    <table className={classes.OrderSummary}>
        <tbody>
            <tr>
                <td>SUBTOTAL</td>
                <td>{totalPrice}&nbsp;EGP</td>
            </tr>
            <tr>
                <td>DELIVERY</td>
                <td>0.00 EGP</td>
            </tr>
            <tr>
                <td>GRAND TOTAL</td>
                <td>{totalPrice}&nbsp;EGP</td>
            </tr>
        </tbody>
    </table>

export default OrderSummary;