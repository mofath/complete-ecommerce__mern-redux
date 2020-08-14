import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../../_store/modules/alert/actions";

import Modal from '../Modal/Modal';
import InfoMsg from './InfoMsg'
import AutoClearMsg from './AutoClearMsg';
import ConfirmMsg from './ConfirmMsg';

const Message = () => {
    const alertReducer = useSelector(state => state.alertReducer);
    const { type, msgBody, msgError, show, cb } = alertReducer;

    const dispatch = useDispatch();
    
    const close = () => dispatch(clearMessage());
    const callBack = () => cb.func(cb.params);

    let Message = null;

    switch (type) {
        case 'info':
            Message = <InfoMsg msgBody={msgBody} msgError={msgError} close={close} />;
            break;
        case 'confirm':
            Message = <ConfirmMsg msgBody={msgBody} msgError={msgError} close={close} callBack={callBack} />;
            break;
        case 'auto':
            Message = <AutoClearMsg msgBody={msgBody} msgError={msgError} close={close} />;
            break;
        default:
            Message = null;
    }

    return (
        <Modal show={show}  >
            {Message};
        </Modal>
    )
}

export default Message;

