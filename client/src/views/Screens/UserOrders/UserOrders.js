import React, { useEffect, useState } from 'react'

import orderService from '../../../_services/order.service'
import { useSelector } from 'react-redux'

import OrdersList from './OrdersList/OrdersList'

function UserOrdersPage(props) {
    const [Orders, setOrders] = useState([]);

    const authReducer = useSelector(state => state.authReducer);
    const { isAuthenticated } = authReducer;

    useEffect(() => {
        if (isAuthenticated) {
            (async () => {
                const { results } = await orderService.getOrdersByUserId().read();
                setOrders([...results])
            })()
        }
    }, [isAuthenticated]);

    return (
        <div className="screen">
            <p style={{ color: "#262e3e", fontSize: " 30px", fontWeight: "500", marginBottom: "30px" }} >My Orders</p>
            <OrdersList orders={Orders} />
        </div>
    )
}

export default UserOrdersPage