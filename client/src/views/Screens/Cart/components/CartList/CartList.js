import React  from 'react'

import CartItem from './CartItem/CartItem'

const CartList = ({ cartItems, removeItem }) =>
    <div>
        {cartItems.map((cartItem, index) =>
            <CartItem
                index={index}
                cartItem={cartItem}
                removeItem={removeItem}
                key={index}
            />
        )}
    </div>


export default CartList;