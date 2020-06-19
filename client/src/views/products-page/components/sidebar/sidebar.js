import React from 'react'

import Dropmenu from '../dropmenu/dropmenu'
import RangeSlider from '../rangeSlider/rangSlider'

import './sidebar.css'

const Sidebar = (props) => {
    return (
        <div className="sidebar-containers">
            <div className="category-dropmenu">
                <Dropmenu title={"Gender"} handleFilters={(filters) => props.handleCategoryFilters(filters, 'continents')} />
            </div>

            <div className="price-dropmenu">
                <Dropmenu title={"Category"} handleFilters={(filters) => props.handlePriceFilters(filters, 'price')} />
            </div>

            <div>
                <RangeSlider /> 
            </div>
        </div>
    )
}

export default Sidebar;