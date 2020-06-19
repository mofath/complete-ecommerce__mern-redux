import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";




function TextFields() {
    const [values, setValues] = useState({ min: "", max: "" });
    const minFieldRef = useRef(null);
    const maxFieldRef = useRef(null);

    React.useEffect(() => {
        const handleWheel = e => e.preventDefault();
        minFieldRef.current.addEventListener("wheel", handleWheel);
        maxFieldRef.current.addEventListener("wheel", handleWheel);

        return () => {
            minFieldRef.current.removeEventListener("wheel", handleWheel);
            maxFieldRef.current.removeEventListener("wheel", handleWheel);
        };
    }, []);

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values);
    };

    return (
        <div className="container" noValidate autoComplete="off">
            <TextField
                id="standard-number"
                label="Min"
                value={values.min}
                onChange={handleChange("min")}
                type="number"
                className="slider-range-input"
                InputLabelProps={{
                    shrink: true
                }}
                ref={minFieldRef}
            />
            <input
                id="standard-number"
                // label="Max"
                value={values.max}
                onChange={handleChange("max")}
                type="number"
                className="slider-range-input"
                ref={maxFieldRef}
            />
        </div>
    );
}

export default TextFields;