import React, { useEffect, useState } from 'react';

import classes from './Tab.module.css'

const Tab = ({ label, getActiveTab, activeTab }) => {
    const [ClassName, setClassName] = useState(classes.Default);

    useEffect(() => {
        activeTab === label ? setClassName(classes.Active) : setClassName(classes.Default)
    }, [activeTab])

    const click = () => getActiveTab(label);

    return <li className={ClassName} onClick={click}  > {label} </li>
}

export default Tab;