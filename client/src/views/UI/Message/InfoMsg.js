import React from 'react'

import { TiWarningOutline as WarnningIcon } from 'react-icons/ti'
import { IoIosCheckmarkCircleOutline as CheckmarkCIcon } from 'react-icons/io'

import classes from './Message.module.css'

const InfoMsg = ({ msgBody, msgError, close }) =>
    <div className={classes.Msg}>
        <div className={classes.Title}>
            <i>{msgError ? <WarnningIcon size="60" color="#f27676" /> : <CheckmarkCIcon size="60" color="#b4e19a" />}</i>
        </div>
        <div className={[classes.Body, "vertical-layout"].join(' ')}>
            <h5>{msgError ? "Error!" : "Success"}</h5>
            <p>{msgBody}</p>
        </div>
        <div className={classes.Btns}>
            <button onClick={() => close()}>OK</button>
        </div>
    </div>

export default InfoMsg;