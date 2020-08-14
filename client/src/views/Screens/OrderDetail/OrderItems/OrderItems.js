import React from 'react'


import OrderItem from './OrderItem/OrderItem'

const OrderDetaillList = ({ orderItems }) => orderItems.map(
    (item, index) => <OrderItem item={item} key={index} />
)


export default OrderDetaillList;