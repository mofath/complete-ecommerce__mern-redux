import React, { Fragment } from 'react';
import {navLinks} from '../../../assets/data/navData'

// import Logo from '../../UI/Logo/Logo';
import NavigationItem from '../Navbar/NavigationItem/NavigationItem'
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                {/* <Logo /> */}
                {navLinks.map((navItem, i) => <NavigationItem navItem={navItem} type="vertical" key={i} />)}
            </div>
        </Fragment>
    );
};

export default sideDrawer;