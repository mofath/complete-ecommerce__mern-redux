import React from 'react'

import { RiDeleteBinLine as DeleteIcon } from 'react-icons/ri'
import { FiEdit as EditIcon } from 'react-icons/fi'

import classes from './DashboardTable.module.css'
import { getMessage, displayMessage } from "../../../../../_store/modules/alert/actions";
import { useDispatch } from "react-redux";

const DashboardTable = (props) => {
    let categoryFields = ["#", "ID", "Name", "Key", "Stock", "Actions"];
    const confirmDeleteMsg = "Arey you sure you want to Remove this Category";

    const dispatch = useDispatch()

    let fields = <tr>{categoryFields.map((name, n) => <th key={n}>{name}</th>)}</tr>

    let rows = props.data.map((category, index) =>
        <tr key={category._id}>
            <td>{index + 1}</td>
            <td>{category._id}</td>
            <td>{category.name}</td>
            <td>{index + 1}</td>
            <td>{category.stock}</td>
            <td>
                <button
                    onClick={() => {
                        props.updateFormType("Edit")
                        props.editCategory(category)
                        props.open();
                    }} >
                    <EditIcon color="#37a0f4" />&nbsp;Edit
                </button>
                {"|"}
                <button onClick={() => {
                    dispatch(getMessage(confirmDeleteMsg, false))
                    dispatch(displayMessage("confirm"))
                }}><DeleteIcon color="#f5564a" />&nbsp;Remove
                </button>
            </td>

        </tr>
    )

    return (
        <table className={classes.Table}>
            <thead>{fields}</thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default DashboardTable;