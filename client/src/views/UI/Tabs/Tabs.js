import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import Tab from './Tab/Tab';
import classes from './Tabs.module.css'

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.initialTab);
    const history = useHistory()

    const onClickTabItem = (tab) => {
        setActiveTab(tab)
        history.push(`/${props.route}/?tab=${tab.toLowerCase().split(" ").slice(1)}&page=1`)
    }

    return (
        <React.Fragment>
            <ol className={[classes.TabList, "horizontal-layout"].join(' ')}>
                {props.children.map((child, index) =>
                    <Tab
                        activeTab={activeTab}
                        label={child.props.label}
                        getActiveTab={onClickTabItem}
                        key={index}
                    />
                )}
            </ol>
            <div className={classes.Content}>
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </React.Fragment>
    );
}

export default Tabs;