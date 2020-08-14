import React from 'react'
import { useDispatch } from "react-redux";

import { RiDeleteBinLine as DeleteIcon } from 'react-icons/ri';
import { FiEdit as EditIcon } from 'react-icons/fi';

import { getMessage, displayMessage } from "../../../../../_store/modules/alert/actions";
import productService from '../../../../../_services/product.service';
import { DeleteProductMsg } from '../../../../../assets/data/msgs';
import { euroFormat } from '../../../../../_utils/date_format';
import { thousands_separators } from '../../../../../_utils/helpers';


import classes from './DashboardTable.module.css';

const DashboardTable = (props) => {
    let productFields = ["#", "Image", "Name", "Gender", "Category", "Stock", "Price", "Date Added", "Actions"];
    let productKeys = ["name", "gender", "category", "stock"];

    const dispatch = useDispatch()

    let fields = <tr>{productFields.map((name, n) => <th key={n}>{name}</th>)}</tr>

    let rows = props.data.map((product, index) =>
        <tr key={product._id}>
            <td>{(props.page - 1) * props.postsPerPage + (index + 1)}</td>
            <td><img src={productService.displayProductImg(product.images[0])} alt="" /></td>
            {productKeys.map((name, n) => <td key={n}>{product[name]}</td>)}
            <td>{thousands_separators(product.price)}</td>
            <td>{euroFormat(product.createdAt)}</td>

            <td>
                <button
                    onClick={() => {
                        props.setFormType('Edit')
                        props.edit(product)
                        props.open();
                    }} >
                    <EditIcon color="#37a0f4" />&nbsp;Edit
                </button>
                {"|"}
                <button onClick={() => {
                    dispatch(getMessage(DeleteProductMsg, false,))
                    dispatch(displayMessage("confirm", { func: props.remove, params: { id: product._id, index } }))
                }}>
                    <DeleteIcon color="#f5564a" />&nbsp;Remove
                </button>
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

export default DashboardTable;