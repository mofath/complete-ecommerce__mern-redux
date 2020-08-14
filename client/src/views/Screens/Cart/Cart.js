import React, { useEffect, useState } from 'react'


import CartList from "./components/CartList/CartList"
import CartSummary from './components/CartSummary/CartSummary'

import { getCartItems, removeCartItem, placeOrder } from '../../../_store/modules/cart/actions'
import { useSelector, useDispatch } from 'react-redux';

import classes from "./Cart.module.css"

function CartScreen(props) {
    const [Total, setTotal] = useState(0);

    const authReducer = useSelector(state => state.authReducer);
    const { isAuthenticated } = authReducer;

    const cartReducer = useSelector(state => state.cartReducer);
    const { cart, cartSize } = cartReducer;

    const dispatch = useDispatch();
    useEffect(() => { if (isAuthenticated && cartSize > 0) dispatch(getCartItems()) }, [isAuthenticated, cartSize]);
    useEffect(() => {
        if (cart.length > 0) setTotal(calculateTotal(cart))
        else if (cart.length === 0) setTotal(0)
    }, [cart]);

    const removeItem = ({ productId, index }) => dispatch(removeCartItem({ productId, index }))

    const transactionError = () => { console.log("Paypal Error"); }

    const transactionSuccess = (transactionData) => {
        let orderData = {
            cart: { items: [...cart], total: Total },
            transactionData,
        }
        dispatch(placeOrder(orderData))
    }


    const calculateTotal = (cartItems) => {
        let total = 0;
        cartItems.map((item) => { return total += parseInt(item.quantity) * item.product.price; });
        return total
    }



    return (
        <div className={[classes.CartScreen, 'screen'].join(' ')}>
            <main>
                Shopping Cart ({cart.length})
                < CartList cartItems={cart} removeItem={removeItem} />
            </main>

            <aside>
                <CartSummary
                    total={Total}
                    transactionSuccess={transactionSuccess}
                    transactionError={transactionError}
                />
            </aside>
        </div >
    )
}

export default CartScreen;