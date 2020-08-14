
import React, { useEffect, useState } from 'react';

import AddressBolock from './AddressBlock/AddressBlock';
import OrderItems from './OrderItems/OrderItems';
import OrderSummary from './OrderSummary/OrderSummary';

import orderService from '../../../_services/order.service';
import { thousands_separators } from "../../../_utils/helpers";

import classes from './OrderDetail.module.css';

const OrderDetailScreen = (props) => {
    const [Order, setOrder] = useState({});
    const [Loaded, setLoaded] = useState(true);

    const orderId = props.match.params.id;

    useEffect(() => {
        (async () => {
            const { results } = await orderService.getOrderById(orderId)
            setOrder({ ...results })
            setLoaded(false);
        })()
    }, [])

    return (
        <div className="screen" >
            <div className={classes.Heading}>
                <h4>YOUR ORDER IS : DELIVERED</h4>
                <p>Order Number: 1010946200312</p>
            </div>

            <AddressBolock />

            {!Loaded &&
                <React.Fragment>
                    <OrderItems orderItems={Order.orderItems} />
                    <OrderSummary totalPrice={thousands_separators(Order.totalPrice)} />
                </React.Fragment>
            }

        </div >
    )
}

export default OrderDetailScreen;
