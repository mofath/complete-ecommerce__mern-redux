import React from 'react'

import { IoIosHeartEmpty } from 'react-icons/io'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'

export const navLinks = [
    {name: "Returns & Orders", to: "/"},
    {name: "Terms & Conditions", to: "/"},
]

export const userMenu = [
    {name: "Account", to:"/", icon: <FaRegUserCircle />},
    {name: "Orders", to:"/user/orders", icon: <AiOutlineShopping />},
    {name: "Saved Items", to:"/", icon: <IoIosHeartEmpty />},
]
