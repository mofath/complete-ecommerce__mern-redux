import React, { useEffect, useState } from 'react'

import productService from '../../../../services/product.service'
import './manage-products.css'

import { RiDeleteBinLine } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'


function ManageUsers(props) {
    const [Products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        productService.getAllProducts(setProducts, setisLoading)
        setIsDeleted(false);
    }, [isDeleted]);

    const removeHandler = (id) => {        
        setIsDeleted(productService.deleteProduct(id))
        if (isDeleted) {
            setIsDeleted(false)
        }
    }

    return (
        <div className="container">
            <table className="manage-users-table">
                <thead>
                    <tr>
                        <th>#</th>
                        {/* <th>ID</th> */}
                        <th>Image</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Date Added</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading &&

                        Products.map(product => {

                            return (<tr key={product._id}>
                                <td className="counterCell"></td>
                                {/* <td>{product._id}</td> */}
                                <td><img src={product.images[0]} alt=""/></td>
                                <td>{product.title}</td>
                                <td>male</td>
                                <td>cat</td>
                                <td>5</td>
                                <td>{product.price}</td>
                                <td>02/01/2020</td>
                                <td>
                                    <button className=""><FiEdit color="#37a0f4" />&nbsp;Edit</button>
                                    {"|"}
                                    <button className="" onClick={() => { removeHandler(product._id) }}> <RiDeleteBinLine color="#f5564a" />&nbsp;Remove </button>
                                </td>
                            </tr>)
                        }
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ManageUsers;