import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


import SearchBar from '../searchbar/searchbar'

import { GiShoppingCart } from 'react-icons/gi'
import { MdArrowDropDown } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaOpencart } from 'react-icons/fa'

import { AiOutlineShopping } from 'react-icons/ai'
import { IoIosHeartEmpty } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'

import auth from '../../auth'

import './navbar.css'

function Navbar() {
    const [Show, setShow] = useState(false);
    const history = useHistory();

    
    const handleLogout = (event) =>{
        event.preventDefault();
        auth.logout(() => {
            history.push('/')
        })
    }


    return (
        <div className="navbar-container">

            <div className="container">

                <div className="nav-element">
                    <button className="shop-now-btn">
                        <i><GiShoppingCart /></i>  &nbsp;Shop Now
                    </button>
                </div>

                <div className=" searchbar-wrapper">
                    <SearchBar />
                </div>

                <div className="nav-element" >
                    <p>
                        <span>Returns</span> & Orders
                        <i><MdArrowDropDown color="#bebdbd" size="24" /></i>
                    </p>
                </div>


                <div className="nav-element">
                    <a href="/"><p>
                        <span>Terms</span> & Conditions
                        <i><MdArrowDropDown color="#bebdbd" size="24" /></i>
                    </p></a>
                </div>

                <div className="nav-element user-item"
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                >
                    <i><FaRegUserCircle color="white" size="20" /></i>
                     &nbsp; Hello. Log in
                    <i><MdArrowDropDown color="#bebdbd" size="24" /></i>
                    {Show &&
                        <div
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                            onClick={() => setShow(true)}
                            className='overlay'
                        >
                            <div className="overlay-item"><a href="/"><i><FaRegUserCircle /></i>&nbsp;&nbsp;Account</a></div>
                            <div className="overlay-item"><a href="/"><i><AiOutlineShopping /></i>&nbsp;&nbsp;Orders</a></div>
                            <div className="overlay-item"><a href="/"><i><IoIosHeartEmpty /></i>&nbsp;&nbsp;Saved Items</a></div>
                            <div className="overlay-item"><button onClick={handleLogout}><i><FiLogOut /></i>&nbsp;&nbsp;Logout</button></div>
                            </div>
                    }
                </div>

                <div className="nav-element cart-item">
                    <i><FaOpencart color="#01a8e8" size="30" /></i>
                </div>

            </div>

        </div>
    )
}

export default Navbar;