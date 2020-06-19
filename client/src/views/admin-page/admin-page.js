import React from 'react'
import './admin-page.css'
import { Tabs, Tab } from 'react-bootstrap';

import ManageUsers from './components/manage-users/manage-users'
import ManageProducts from './components/manage-products/manage-products'
import ManageCategories from './components/manage-categories/manage-categories'
import UploadProduct from './components/upload-product/upload-products'

import { AiOutlineDashboard } from 'react-icons/ai'

function AdminPage() {

    return (
        <div className="admin-page-container">


            <div className="admin-dashboard-header">
                <div className='horizontal-layout  container'>
                    <div className="logo">
                        <AiOutlineDashboard size="28" color="#cce8ae" />
                    </div>
                    <div className="text">
                        <h5>GoldenShop Admin Dashboard</h5>
                        <h6>You can manage Users, Poducts and Categry eassily through this admin dashboard</h6>
                    </div>
                </div>
            </div>

            <div className="tabs-container">
                    <Tabs className="nav" style={{ height: '60px', verticalAlign: "middle", }} defaultActiveKey="manage-users">
                        <Tab eventKey="manage-users" title="Manage Users">
                            <ManageUsers />
                        </Tab>

                        <Tab eventKey="manage-products" title="Manage Produts">
                            <ManageProducts />
                        </Tab>

                        <Tab eventKey="upload-product" title="Add Product">
                            <UploadProduct />
                        </Tab>

                        <Tab eventKey="categories" title="Manage Categories">
                            <ManageCategories />
                        </Tab>
                    </Tabs>
                </div>
            </div>


    );
}
export default AdminPage;
