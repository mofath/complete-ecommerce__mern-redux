import React from 'react'
import './admin.css'
import { Tabs, Tab } from 'react-bootstrap';
import UploadProduct from './components/uploadProduct'
import CategoryTable from './components/categoryTable'

const Admin = () => {


    return (
        <div className='container'>
            <Tabs className="nav" style={{height:'60px', verticalAlign: "middle", }} defaultActiveKey="categories" id="uncontrolled-tab-example">

                <Tab eventKey="categories" title="Add Category">
                    <CategoryTable />
                </Tab>

                <Tab eventKey="books" title="Add Product">
                    <UploadProduct />
                </Tab>
            </Tabs>
        </div>
    );
}
export default Admin;
