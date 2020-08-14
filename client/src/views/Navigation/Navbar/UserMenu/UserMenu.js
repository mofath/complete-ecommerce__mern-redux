import React, { useState, Fragment } from 'react'

import { Link } from "react-router-dom";

import{useSelector} from 'react-redux'
import { MdArrowDropDown } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

import classes from './UserMenu.module.css'

const UserMenu = (props) => {
    const [Show, setShow] = useState(false);

    const authReducer = useSelector(state => state.authReducer);
    const { isAuthenticated, userInfo } = authReducer;

    const authMenu =
        <Fragment>
            {props.userMenu.map((item, i) => <li key={i}><Link to={item.to}><i>{item.icon}</i>&nbsp;&nbsp;{item.name}</Link></li>)}
            <li ><button onClick={() => {props.logout()}} style={{ borderTop: "solid 0.2px #febd69" }}><i><FiLogOut /></i>&nbsp;&nbsp;Logout</button></li>
        </Fragment>

    const unauthMenu =
        <Fragment>
            <li ><Link to="/"><i></i>&nbsp;&nbsp;Log in</Link></li>
            <li ><Link to="/"><i></i>&nbsp;&nbsp;Signup</Link></li>
        </Fragment>

    return (
        <div
            className={classes.UserMenu}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}  >
            <i><FaRegUserCircle color="black" size="18" /></i>
            &nbsp; Hello. {userInfo ? userInfo.username : " Log in"} <i><MdArrowDropDown color="#bebdbd" size="24" /></i>
            {Show &&
                <ul onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={() => setShow(true)} >
                    {isAuthenticated ? authMenu : unauthMenu}
                </ul>
            }
        </div>
    )
}

export default UserMenu;