import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md'

import classes from './NavigationItem.module.css';

const navigationItem = ({ type, navItem }) => {
    let nav = null;

    switch (type) {
        case 'horizontal':
            nav =
                (<div className={[classes.NavigationItem, classes.DesktopOnly].join(' ')}>
                    <NavLink to={navItem.to}>
                        {navItem.name.split(' ')[0]}
                        <span>{navItem.name.split(' ').pop()}<i><MdArrowDropDown color="#bebdbd" size="24" /></i></span>
                    </NavLink>
                </div>)
            break;

        case 'vertical':
            nav =
                (<div className={classes.NavigationItem}>
                    <NavLink to={navItem.to}>{navItem.name}</NavLink>
                </div>);
            break;
            
        default:
            nav = null;
    }
    return nav;
}

export default navigationItem;

