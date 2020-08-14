import React from 'react';

import { Link } from 'react-router-dom';
import { euroFormat } from '../../../../../_utils/date_format';
import { thousands_separators } from "../../../../../_utils/helpers";

import classes from './OrderItem.module.css';

const OrderItem = ({ order }) =>
    <table className={classes.OrderItemTable}>
        <thead>
            <tr>
                <th>Order Date</th>
                <th>Order No.</th>
                <th>State</th>
                <th>Total</th>
                <th >{}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{euroFormat(order.dateOfPurchase)} </td>
                <td style={{ width: "300px" }}>{order._id}</td>
                <td>Delivered</td>
                <td>{thousands_separators(order.totalPrice)}&nbsp;EGP</td>
                <td><Link to={`/user/order/${order._id}`}>ORDER DETAIL{">"}</Link></td>
            </tr>
        </tbody>
    </table>

export default OrderItem