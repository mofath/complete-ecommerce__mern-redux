import React from 'react'
import Orderitem from './OrderItem/OrderItem'

const OrdersList = ({ orders }) => orders.map((order, index) => <Orderitem order={order} key={index} />)

export default OrdersList
