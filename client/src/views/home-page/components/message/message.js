import React from 'react'
import './message.css'

import {BsExclamation} from 'react-icons/bs'

// let type = "";
// const getStyle = (props) => {
//     let baseClass = "msg";

//     if (props.message.msgError) {
//         baseClass = baseClass + "msg--error msg--has-icon";
//         type = " Error!"
//     }
//     else {
//         baseClass = baseClass + "msg--success msg--has-icon";
//         type = "Success"
//     } 
//     return baseClass + " text-center";
// }

const Message = props => {
    return (
        <div className="msg msg--error msg--has-icon">
            <div className="msg__title"><i className=""><BsExclamation  size="35" /></i>Error Message</div>
            <p className="msg__bd">
                Error! {props.message.msgBody}
            </p>
        </div>
    )
}

export default Message;