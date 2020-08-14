import React, { useEffect, useState } from 'react'

import Tabs from '../../UI/Tabs/Tabs';
import UserTab from './components/UserTab/UserTab'
import ProductTab from './components/ProductTab/ProductTab'
import CategoryTab from './components/CategoryTab/CategoryTab'
import {getQueryParams} from '../../../_utils/helpers'

import './admin-page.css'

import { AiOutlineDashboard as DashboardIcon} from 'react-icons/ai'

function AdminPage() {
    const [Mounted, setMounted] = useState(false);
    const [Tab, setTab] = useState(null);

    useEffect(() => {
        let query = getQueryParams();
        if (!query.tab || query.tab === "users") setTab("Manage Users")
        else if (query.tab === "products") setTab("Manage Products")
        else if (query.tab === "categories") setTab("Manage Categories")
        setMounted(true)
    }, [])


    return (
        <div className="admin-page-container">

            <div className="admin-dashboard-header">
                <div className='horizontal-layout  mycontainer'>
                    <div className="logo">
                        <DashboardIcon size="28" color="#cce8ae" />
                    </div>
                    <div className="text">  
                        <h5>GoldenShop Admin Dashboard</h5>
                        <h6>You can manage Users, Poducts and Categry eassily through this admin dashboard</h6>
                    </div>
                </div>
            </div>

            <div className="tabs-container">
                {Mounted &&
                    <Tabs route="admin" initialTab={Tab} >
                        <div label="Manage Users"> <UserTab /></div>
                        <div label="Manage Products"> <ProductTab /></div>
                        <div label="Manage Categories"> <CategoryTab /></div>
                    </Tabs>
                }
            </div>
        </div>
    );
}
export default AdminPage;
