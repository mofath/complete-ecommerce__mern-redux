import React from 'react'

import {Link } from "react-router-dom";
import { AiOutlineShopping as ShoppingBagIcon } from 'react-icons/ai'

import UserMenu from './UserMenu/UserMenu'
import SearchBar from './Searchbar/Searchbar'
import NavigationItem from './NavigationItem/NavigationItem'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Badge from '../../UI/Badge/Badge'
import Logo from '../../UI/Logo/Logo'

import { navLinks, userMenu } from '../../../assets/data/navData'
import classes from './Navbar.module.css'

function Navbar(props) {

    return (
        <header className={[classes.Navbar, "vertical-layout"].join(' ')}>
            <div className={[classes.Heading, classes.DesktopOnly, classes.DesktopOnly].join(' ')}>
                PLEASE NOTE THAT WE HAVE SUSPENDED SHIPPING UNTIL FURTHER NOTICE DUE TO COVID-19.
                WE APPRECIATE YOUR PATIENCE.
            </div>

            <nav className={[classes.Content, "horizontal-layout mycontainer",].join(' ')}>
                <div className={[classes.Toggler]}><DrawerToggle clicked={props.drawerToggleClicked} /></div>

                <Link to="/home" className={[classes.HomeLink, classes.DesktopOnly].join(' ')}><Logo size="20px" color="red" /></Link>

                {navLinks.map((navItem, i) => <NavigationItem navItem={navItem} type="horizontal" key={i} />)}

                <div className={classes.SearchbarWrapper}> <SearchBar /> </div>

                <div className={classes.DesktopOnly} >
                    <UserMenu
                        userMenu={userMenu}
                        logout={props.logout}
                    />
                </div>

                <nav className={classes.CartIcon}>
                    <Link  to="/cart" >
                        <Badge badgeContent={props.cartItems} ><i><ShoppingBagIcon color="black" size="30px" /></i></Badge>
                    </Link>
                </nav>
            </nav>
        </header>
    )
}

export default Navbar;

