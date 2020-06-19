import React, { useEffect, useState } from 'react'

import userService from '../../../../services/users.service'
import './manage-users.css'

import {RiDeleteBinLine} from 'react-icons/ri'
import {MdAirplanemodeInactive} from 'react-icons/md'


function ManageUsers(props) {
    const [Users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        userService.getAllUsers(setUsers, setisLoading)
        setIsDeleted(false);
    }, [isDeleted]);

    const removeHandler = (id) => {
        setIsDeleted(userService.deleteUser(id))
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
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Date Created</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading &&

                        Users.map(user => {

                            return (<tr key={user._id}>
                                <td className="counterCell"></td>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>02/01/2020</td>
                                <td>user</td>
                                <td>online</td>
                                <td>
                                    <button className=""><MdAirplanemodeInactive color="#37a0f4" />&nbsp;Deactivate</button>
                                    {"|"}
                                    <button className="" onClick={() => { removeHandler(user._id) }}> <RiDeleteBinLine color="#f5564a"/>&nbsp;Remove </button>
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