
import React from 'react'


const badgeStyle = {
    width: "20px",
    height: "30px,",
    verticalAlign: "middle",
    borderRadius: "50%",
    backgroundColor: "#fd0001",
    color: "white",
    zIndex: "2",
    position: "absolute",
    textAlign: "center",
    fontSize: "12px",
    marginLeft: "16px",
    marginBottom: "30px",
}

const Badge = (props) =>
    <div>
        {props.badgeContent > 0 && <div style={badgeStyle}>{props.badgeContent}</div>}
        {props.children}
    </div>


export default Badge;