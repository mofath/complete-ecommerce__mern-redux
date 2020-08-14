import React, { useState } from 'react'

import { FiPlusSquare } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'

import classes from './DropDown.module.css'

const Dropmenu = (props) => {
    const [Open, setOpen] = useState(true);

    const toggle = () => { setOpen(!Open) }

    return (
        <div className={classes.DropDown}>
            <div
                className={classes.Header}
                onKeyPress={() => toggle(!Open)}
                onClick={() => toggle(!Open)}
            >
                {props.title}
                <i className="dd-icon">{Open ? <FiMinusSquare color="gray" /> : <FiPlusSquare />}</i>
            </div>

            <div >{Open && props.children} </div>
        </div>
    )
}

export default Dropmenu;