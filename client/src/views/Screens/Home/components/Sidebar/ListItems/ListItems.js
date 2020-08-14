import React, { useState } from 'react'

import DropDown from '../../../../../UI/DropDown/DropDown'
import classes from './ListItems.module.css'
import Spinner from '../../../../../UI/Spinner/Spinner'

const Dropmenu = ({ title, list, handleFilters, isLoading }) => {
    const [Checked, setChecked] = useState([]);


    const handleToggle = (name) => {
        const currentIndex = Checked.indexOf(name)
        const newChecked = [...Checked]

        if (currentIndex === -1) { newChecked.push(name) }
        else { newChecked.splice(currentIndex, 1) }

        setChecked(newChecked)
        handleFilters(newChecked)
    }

    return (
        <DropDown title={title}>
            {!isLoading ?
                <ul className={classes.ListItems}>
                    {list.map((item, i) => (
                        <li key={i} >
                            <label>
                                <input
                                    type="checkbox" name={item.name} value={item.name}
                                    checked={Checked.indexOf(item.name) === -1 ? false : true}
                                    onChange={() => handleToggle(item.name)} />
                                <p className={Checked.indexOf(item.name) === -1 ? classes.Default : classes.Active}>{item.name}</p>
                            </label>
                        </li>
                    ))}
                </ul>
                :
                <Spinner />
            }
        </DropDown>
    )
}

export default Dropmenu;



