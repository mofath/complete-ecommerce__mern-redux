import React from 'react'
import { Link } from "react-router-dom";


import CartItem from './CartItem/CartItem'
import classes from './CartList.module.css'

const CartList = ({ cartItems, removeItem }) => {

    const cartList = cartItems.map((cartItem, index) =>
        <div className={classes.CartList}>
            <CartItem
                index={index}
                cartItem={cartItem}
                removeItem={removeItem}
                key={index}
            />
        </div>
    )

    const EmptyCart = <div className={classes.EmptyCart}>
        <p >Your Shopping Bag Is Empty.</p>
        <Link to="/home" >GO SHOPPING</Link>
    </div>


    return (
        <div>
            {cartItems.length > 0 ?
                cartList :
                EmptyCart
            }
        </div>
    )

}


export default CartList;