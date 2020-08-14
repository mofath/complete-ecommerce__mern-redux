import React from 'react'

import { RiErrorWarningLine as ConfirmIcon } from 'react-icons/ri'

import classes from './Message.module.css'

const InfoMsg = ({ msgBody, close, callBack }) =>
    <div className={classes.Msg}>
        <div className={classes.Title}>
            <i><ConfirmIcon size="60" color="#b4e19a" /></i>
        </div>
        <div className={[classes.Body, "vertical-layout"].join(' ')}>
            <h5>Confirm</h5>
            <p>{msgBody}</p>
        </div>
        <div className={classes.Btns}>
            <button onClick={() => {
                callBack();
                close();
            }}>Yes
             </button>
            <button onClick={() => close()}>No</button>
        </div>
    </div>

export default InfoMsg;