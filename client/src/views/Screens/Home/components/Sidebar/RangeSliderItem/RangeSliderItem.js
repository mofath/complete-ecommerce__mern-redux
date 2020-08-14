
import React, { useState } from 'react'

import DropDown from '../../../../../UI/DropDown/DropDown'
import RangeSlider from '../../../../../UI/RangeSlider/RangeSlider'

import classes from './RangeSliderItem.module.css'

function RangeSliderItem(props) {
    const [rangeValues, setRangeValues] = useState([130, 1700]);

    const handleChange = (newValue) => {
        setRangeValues(newValue);
        props.handleFilters(newValue)
    };


    return (
        <DropDown title="Price">
            <div className={[classes.RangeBox, "horizontal-layout"].join(' ')}>
                <div className={classes.RangeValue}>{rangeValues[0]}</div>
                <div className={classes.RangeValue}>{rangeValues[1]}</div>
            </div>

            <div className={classes.RangeSlideContainer}><RangeSlider handleChange={handleChange} /></div>
        </DropDown>
    )
}

export default RangeSliderItem;



