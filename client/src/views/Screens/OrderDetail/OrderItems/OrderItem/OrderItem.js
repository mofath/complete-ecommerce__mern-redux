import React from 'react';

import productService from '../../../../../_services/product.service';
import { thousands_separators } from "../../../../../_utils/helpers";

import classes from './OrderItem.module.css';

const OrderDetailItem = ({ item }) =>

    <table className={classes.OrderItem}>
        <tr>
            <th rowSpan="2"><img src={productService.displayProductImg(item.product.images[0])} alt="" /></th>
            <th>{item.product.category.toUpperCase()}</th>
            <th>QUANTITY</th>
            <th>STATUS</th>
            <th>PRICE</th>
            <th>AMOUNT</th>
        </tr>
        <tr>
            <td>
                9SG183Z8 - M - GREY
                <p>Color: GREY</p>
                <p>Size: M</p>
            </td>
            <td>{item.quantity}</td>
            <td>Delivered</td>
            <td>{thousands_separators(item.product.price)}&nbsp;EGP</td>
            <td>{thousands_separators(item.product.price * item.quantity)}</td>
        </tr>
    </table>

export default OrderDetailItem;