import React, { useState } from 'react'

import { FiPlusSquare } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'

import { categories } from '../../Data';

import './dropmenu.css'

const Dropmenu = (props) => {
    const [Open, setOpen] = useState(false);
    const [Checked, setChecked] = useState([]);

    const handleToggle = (id) => {
        const currentIndex = Checked.indexOf(id)
        const newChecked = [...Checked]

        if (currentIndex === -1) {
            newChecked.push(id)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
    }



    const toggle = () => {
        setOpen(!Open)
    }

    return (
        <div className=" dropdown-container">

            <div className="container">
                <div
                    className="dropmenu-header"
                    onKeyPress={() => toggle(!Open)}
                    onClick={() => toggle(!Open)}
                >
                    <p className="dd-title">
                        {props.title}
                        <span className="dd-icon">{Open ? <FiMinusSquare /> : <FiPlusSquare />}</span>
                    </p>
                </div>
                <div className="dd-items">
                    {Open && (
                        <ul className="dropmenu-list">
                            {categories.map(item => (
                                <li className="dropmenu-item" keu={item.id} >
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name={item.name}
                                            checked={Checked.indexOf(item._id) === -1 ? false : true}
                                            onChange={() => handleToggle(item._id)} />
                                        {item.name}
                                    </label>
                                </li>
                            ))
                            }
                        </ul>
                    ) }
                </div>
            </div>
        </div>


    )
}

export default Dropmenu;