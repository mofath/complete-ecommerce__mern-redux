import React from 'react';

const defaultStyle = {
    p: {
        marginTop: "0px",
        color: "#48a3c6",
        fontSize: "40px",
        fontWeight: "1000",
        textAlign:"left",
    },
    span: {
        color: "#ff9900",
        fontWeight: "400",
    }
};

const logo = (props) =>
    <p
        style=
        {
            props.size ?
                { fontSize: props.size, color: props.color, fontWeight: "bold",  } :
                defaultStyle.p
        }>
        Golden
        <span
            style=
            {
                props.size ?
                    { fontSize: props.size, color: props.color, fontWeight: "200" } :
                    defaultStyle.span
            }>
            Shop
        </span>
    </p>

export default logo;