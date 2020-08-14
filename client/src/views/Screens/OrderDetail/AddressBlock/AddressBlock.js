import React from "react";

import classes from './AddressBlock.module.css'

const AddressBlock = () => 

            <div className={[classes.AddressBlock, "horizontal-layout"].join(' ')}>
                <div>
                    <h4>SHIPPING ADDRESS</h4>
                    <h5>Mohamed Fathi</h5>
                    <h5>Aramex</h5>
                    <h5>Central Spine, Bldg. 233, 6th of october, Giza. In Front Of B.TECH</h5>
                    <h5>Phone Number : 00201024304049</h5>
                </div>
                <div>
                    <h4>BILLING ADDRESS</h4>
                    <h5>Mohamed Fathi</h5>
                    <h5>Aramex</h5>
                    <h5>Central Spine, Bldg. 233, 6th of october, Giza. In Front Of B.TECH</h5>
                    <h5>Phone Number : 00201024304049</h5>
                </div>
            </div>

export default AddressBlock;