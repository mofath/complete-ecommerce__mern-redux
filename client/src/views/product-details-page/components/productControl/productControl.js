import React from 'react'
import './productControl.css'

import { FaShippingFast } from 'react-icons/fa';
import { RiRefund2Line } from 'react-icons/ri';



const ProductControl = () => {
    return (
        <div className="product-control-wrapper">
            
            <div className="dlv-sidebar-header dlv-sidebar-block">
                <p className="dlv-sidebar-header-text">DELIVERY & RETURNS</p>
            </div>


            <div className="dlv-sidebar-block">
                <p className="dlv-sidebar-title"> <svg class="dlv-sidebar-title"></svg> <FaShippingFast /> Delivery Information</p>
                <p className="dlv-sidebar-text">
                    We have made our deliveries safer, You will receive
                    your order within 10 working days.
                </p>
            </div>

            

            <div>
                <p class="dlv-sidebar-title"> <svg class="dlv-sidebar-title"></svg> <RiRefund2Line /> Return Policy</p>
                <p className="dlv-sidebar-text">14 days free return and up to 30 days for defective products.See more</p>
            </div>


            <button className="add-btn">Add to Basket</button>
        </div>
    )
}

export default ProductControl;