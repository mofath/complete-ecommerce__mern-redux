import React from 'react'

import { RiDeleteBinLine as RemoveIcon } from 'react-icons/ri'
import { MdAirplanemodeInactive as InactiveIcon } from 'react-icons/md'

import classes from './DashboardTable.module.css'


const UserTable = (props) => {
    let userFields = ["#", "ID", "Username", "Email", "Role", "Status", "Actions"];
    let userkeys = ["_id", "username", "email", "role"];

    let fields = <tr>{userFields.map((name, n) => <th key={n}>{name}</th>)}</tr>

    let rows = props.data.map((user, index) =>
        <tr key={user._id}>
            <td>{(props.page - 1) * props.postsPerPage + (index + 1)}</td>
            {userkeys.map((name, n) => <td key={n}>{user[name]}</td>)}
            <td>online</td>
            <td>
                <button ><InactiveIcon color="#37a0f4" />&nbsp;Deactivate</button>
                {"|"}
                <button onClick={() => { props.remove({ userId: user._id, index }) }}>
                    <RemoveIcon color="#f5564a" />&nbsp;Remove </button>
            </td>
        </tr>
    )

    return (
        <table className={classes.Table}>
            <thead>{fields}</thead>
            <tbody> {rows}</tbody>
        </table>
    );
};

export default UserTable;
