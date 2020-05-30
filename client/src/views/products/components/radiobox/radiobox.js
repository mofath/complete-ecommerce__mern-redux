import React, { useState } from 'react'
import { price } from '../../Data';
import './radiobox.css'


function RadioBox(props) {

    const [Value, setValue] = useState('0')


    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }



    return (
        <div>
            {price.map((value) => {
                return (
                    <div className="radio-wrapper">
                        <label>
                            <input
                                type="radio"
                                class="form-check-input"

                                key={value._id}
                                value={`${value._id}`}

                                onChange={handleChange} />
                            {value.name}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}


export default RadioBox
