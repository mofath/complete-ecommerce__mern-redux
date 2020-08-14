import React from 'react'

import { MdAddCircle as AddIcon } from 'react-icons/md'
import { AiFillFile as PrintIcon } from 'react-icons/ai'

import classes from './Heading.module.css'

const Heading = (props) =>
    <div className={classes.Heading}>
        <p>{props.name} Management</p>
        <button>
            <i><AddIcon size="14" /></i>&nbsp;Export to Excel
        </button>

        <button
            onClick={() => {
                props.open();
                props.type('Add');
            }} >
            <i><PrintIcon size="14" /></i>
            &nbsp;Add New {props.name}
        </button>
    </div>

export default Heading;