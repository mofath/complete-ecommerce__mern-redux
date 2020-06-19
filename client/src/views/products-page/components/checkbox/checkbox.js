import React, { useState } from 'react'


import { categories } from '../../Data';


const CheckBox = (props) => {
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



    return (
        <div>
            {categories.map((category) => {
                return (
                    <label>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name={category.name}
                            checked={Checked.indexOf(category._id) === -1 ? false : true}
                            onChange={() => handleToggle(category._id)} />
                        {category.name}
                    </label>
                )
            })}
        </div>
    )
}

export default CheckBox;