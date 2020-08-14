import React from 'react'

import avatar from '../../../assets/img/avatar.png'

const avatarStyle = {
    width: "50px",
    height: "50px,",
    verticalAlign: "middle",
    borderRadius: "50%",
    marginRight: "15px",
    border: "1px solid #e8e8e8",
}

const Avatar = ({ img }) => <img src={img ? img : avatar} style={avatarStyle} alt="" />


export default Avatar;