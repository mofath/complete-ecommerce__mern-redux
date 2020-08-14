import React, { Fragment, useState, useEffect } from 'react'

import Navbar from '../Navigation/Navbar/Navbar'
import Footer from '../Navigation/Footer/Footer'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import { useSelector } from 'react-redux';
import Message from '../UI/Message/Message'

import store from '../../_store/store';

import { authenticate, logoutAction } from '../../_store/modules/auth/actions';

function Layout(props) {
    const [ShowSideDrawer, setshowSideDrawer] = useState(false);

    const cartReducer = useSelector(state => state.cartReducer);

    const { cartSize } = cartReducer;

    useEffect(() => { store.dispatch(authenticate()) }, [])

    const handleLogout = () => { store.dispatch(logoutAction()); }

    const closeSideDrawer = () => setshowSideDrawer(false)
    const toggleSideDrawer = () => { setshowSideDrawer(!ShowSideDrawer); }

    return (
        <Fragment>
            <Navbar
                drawerToggleClicked={toggleSideDrawer}
                cartItems={cartSize}
                logout={handleLogout}
            />
            <SideDrawer open={ShowSideDrawer} closed={closeSideDrawer} />
            <main style={{ minHeight: "500px" }}>{props.children}</main>
            <Message />
            <Footer />
        </Fragment>
    )

}

export default Layout;