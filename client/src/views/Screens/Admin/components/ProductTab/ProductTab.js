import React, { useEffect, useState } from 'react'

import DashpaBoardTable from '../DashboardTable/ProductTable'
import ProductForm from './ProductForm/ProductForm'

import Heading from '../Heading/Heading'
import Pagination from '../../../../Navigation/Pagination/Pagination'

import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, deleteProduct } from '../../../../../_store/modules/product/actions'
import { paginatePosts } from '../../../../../_utils/helpers'

const ProductTab = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [ShowForm, setShowForm] = useState(false);
    const [FormType, setFormType] = useState(null);
    const [ProductToEdit, setProductToEdit] = useState({});

    const productReducer = useSelector(state => state.productReducer);
    const { products, fetchedBefore } = productReducer;

    const dispatch = useDispatch()
    useEffect(() => { if (!fetchedBefore) dispatch(getAllProducts()) }, []);
    const removeHandler = (productInfo) => dispatch(deleteProduct(productInfo));

    const OpenForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);
    const currentProducts = paginatePosts(currentPage, postsPerPage, products)
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="mycontainer">
            <Heading name="Product" open={OpenForm} type={setFormType} />

            <DashpaBoardTable
                data={currentProducts}
                page={currentPage}
                postsPerPage={postsPerPage}
                remove={removeHandler}
                setFormType={setFormType}
                edit={setProductToEdit}
                open={OpenForm}
            />

            <Pagination
                totalPosts={products.length}
                postsPerPage={postsPerPage}
                paginate={paginate}
            />

            <ProductForm
                formType={FormType}
                show={ShowForm}
                close={closeForm}
                productToEdit={ProductToEdit}
            />
        </div>
    )
}

export default ProductTab;