import React, { useState } from "react"

import classes from './CartItem.module.css'

import { BsHeart } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';
import { thousands_separators } from '../../../../../../_utils/helpers'

const CartItem = ({ cartItem, index, removeItem }) => {
    const [Clicked, setClicked] = useState(false);

    const toggleHeart = () => setClicked(!Clicked)


    return (
        <div className={[classes.CartItem, "vertical-layout"].join(' ')}  >
            <section className={[classes.Body, "horizontal-layout"].join(' ')}>

                <div className={classes.Frame}> <img src={`/${cartItem.product.images[0]}`} alt="" /> </div>

                <div className={classes.Details}>
                    <p style={{ color: "#3a3a3a" }}>{cartItem.product.name}</p>

                    <p style={{ color: "#006fcc" }}><b>{thousands_separators(cartItem.product.price)}</b>&nbsp;&nbsp;EGP</p>

                    <table>
                        <tr><th>Item code:</th><td>HM0874312001</td></tr>
                        <tr><th>Color label:</th><td>Khaki green</td></tr>
                        <tr><th>Size:</th><td>M </td></tr>
                    </table>

                </div>
            </section>

            {/* *************************** bottom-section ************************** */}
            <section className={[classes.Bottom, "horizontal-layout"].join(' ')}>

                <button onClick={() => removeItem({ productId: cartItem.product._id, index })} className={classes.RemoveBtn}>
                    Remove
                </button>

                <label> Qty <input type="number" value={cartItem.quantity} /></label>

                <button className={classes.HeartBtn} onClick={toggleHeart}>
                    {Clicked ? <BsFillHeartFill size="25px" color="red" /> : <BsHeart size="25px" color="red" />}
                </button>
            </section>

        </div>

    )


}

export default CartItem;