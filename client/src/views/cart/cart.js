import React, {useEffect} from 'react'
import Axios from 'axios'

const Cart = () => {
    
    useEffect(() => {
        let cartItems = []

        Axios.get(`/product/product_by_id?id=${cartItems}&type=array`)

    }, []);

    return (
        <div>
            <div>
                Cart
            </div>
        </div>
    )
}

export default Cart;