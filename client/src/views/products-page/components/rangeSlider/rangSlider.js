
import React, { useState } from 'react'
import './rangeSlider.css'

import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import { FiPlusSquare } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'



function RangeSlider(props) {
    const [Open, setOpen] = useState(false);
    const [rangeValues, setRangeValues] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setRangeValues(newValue);
    };

    const toggle = () => {
        setOpen(!Open)
    }

    const AirbnbSlider = withStyles({
        root: {
            color: '#c38d48',
            height: 3,
            padding: '13px 0',
        },
        thumb: {
            height: 27,
            width: 27,
            backgroundColor: '#db9740',
            border: '1px solid currentColor',
            marginTop: -12,
            marginLeft: -13,
            boxShadow: '#ebebeb 0 2px 2px',
            '&:focus, &:hover, &$active': {
                boxShadow: '#ccc 0 2px 3px 1px',
            },
            '& .bar': {
                display: "inline-block!important",
                height: 9,
                width: 1,
                backgroundColor: 'white',
                marginLeft: 1,
                marginRight: 1,
            },
        },
        active: {},
        track: {
            height: 3,
        },
        rail: {
            color: '#d8d8d8',
            opacity: 1,
            height: 3,
        },
    })(Slider);

    const ValueLabelComponent = (props) => {
        const { children, open, value } = props;

        return (
            <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
                {children}
            </Tooltip>
        );
    }

    ValueLabelComponent.propTypes = {
        children: PropTypes.element.isRequired,
        open: PropTypes.bool.isRequired,
        value: PropTypes.number.isRequired,
    };

    const AirbnbThumbComponent = (props) => {
        return (
            <span {...props}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </span>
        );
    }


    return (

        <div className="dropdown-container">
            <div className=" container">
                <div
                    className="dropmenu-header"
                    onKeyPress={() => toggle(!Open)}
                    onClick={() => toggle(!Open)}
                >
                    <p className="dd-title">
                        Price
                    <span className="dd-icon">{Open ? <FiMinusSquare /> : <FiPlusSquare />}</span>
                    </p>
                </div>
                <div >
                    {(Open &&
                        <div>
                            <div className="range-value">
                                <div className="range-max">{rangeValues[1]}</div>
                                <div className="range-min">{rangeValues[0]}</div>
                            </div>

                            <AirbnbSlider
                                value={rangeValues}
                                onChange={handleChange}
                                ValueLabelComponent={ValueLabelComponent}
                                ThumbComponent={AirbnbThumbComponent}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default RangeSlider;

