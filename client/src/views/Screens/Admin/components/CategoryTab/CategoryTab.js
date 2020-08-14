


import React, { useEffect, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories, addNewCategory, deleteCategory } from '../../../../../_store/modules/category/actions'

import CategoryForm from './CategoryForm/CategoryForm'
import Heading from '../Heading/Heading'
import DashboardTable from '../DashboardTable/CategpryTable'
// const CategoryForm = React.lazy(() => import('./CategoryForm/CategoryForm'));


const CategoryTab = (props) => {
    const [ShowForm, setShowForm] = useState(false);
    const [FormType, setFormType] = useState("");
    const [EditCategory, setEditCategory] = useState({});

    const categoryReducer = useSelector(state => state.categoryReducer)
    const { categories, fetchedBefore } = categoryReducer

    const dispatch = useDispatch()

    useEffect(() => { if (!fetchedBefore) dispatch(getAllCategories()) }, []);

    const removeHandler = (categoryInfo) => { dispatch(deleteCategory(categoryInfo)) }
    const editHandler = (id, categoryName) => { dispatch(deleteCategory()) }
    const addCategory = (newCategoryValues) => { dispatch(addNewCategory(newCategoryValues)) }

    const OpenForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

    return (
        <div className="mycontainer">

            <Heading 
                name="Category"
                open={OpenForm}
                type={setFormType}
            />

            <DashboardTable
                data={categories}
                updateFormType={setFormType}
                editCategory={setEditCategory}
                open={OpenForm}
            />

            <CategoryForm 
                formType={FormType}
                show={ShowForm}
                categoryToEdit={EditCategory}
                close={closeForm}
                remove={removeHandler}
                edit={editHandler}
                add={addCategory}
            />
        </div>
    )
}

export default CategoryTab;