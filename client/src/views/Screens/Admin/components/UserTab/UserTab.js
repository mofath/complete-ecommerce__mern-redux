import React, { useState, useEffect } from 'react'

import DashboardTable from '../DashboardTable/UserTable'
import Heading from '../Heading/Heading'
import Pagination from '../../../../Navigation/Pagination/Pagination'

import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, deleteUser } from '../../../../../_store/modules/user/actions'
import { paginatePosts } from '../../../../../_utils/helpers'

function ManageUsers(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const userReducer = useSelector(state => state.userReducer);
    const { users, fetchedBefore } = userReducer;

    const dispatch = useDispatch()

    useEffect(() => { if (!fetchedBefore) dispatch(getAllUsers()) }, []);
    const removeHandler = (deleteInfo) => { dispatch(deleteUser(deleteInfo)) }

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const currentUsers = paginatePosts(currentPage, postsPerPage, users)


    return (
        <div className="mycontainer">
            <Heading name="User" />

            <DashboardTable
                data={currentUsers}
                page={currentPage}
                postsPerPage={postsPerPage}
                remove={removeHandler}
            />

            <Pagination
                totalPosts={users.length}
                postsPerPage={postsPerPage}
                paginate={paginate}
            />

        </div>
    )
}

export default ManageUsers;