import React, { useState, useEffect } from "react";

import classes from "./CategoryForm.module.css"
import Modal from '../../../../../UI/Modal/Modal'

function CategoryForm ({categoryToEdit, formType, close, show}) {
    
    const [NameValue, setNameValue] = useState(formType === 'Edit' ? categoryToEdit.name : "")
    const onNameChange = (event) => { setNameValue(event.currentTarget.value) }

    useEffect(() => {
        let categoryName = formType === 'Edit' ? categoryToEdit.name : "";
        setNameValue(categoryName)
    }, [formType, categoryToEdit ]);

    const onSubmit = (event) => {
        // if (!NameValue) { return alert('Insert a ctegory Name!') }
        // const categoryValues = { writer: "5ebf1334516a1860e8d1fcfb", name: NameValue, }
    
        // props.formType === "Edit" ?
        //     props.updateCategory({ ...categoryValues, categoryId: props.categoryToEdit._id }) :
        //     props.addCategory(categoryValues);

    }

    return (
        <Modal show={show}>
            <form className={[classes.CategoryForm, "vertical-layout"].join(' ')}>

                <div className={[classes.Heading, "horizontal-layout"].join(' ')}>
                    <p>{formType} Category</p>
                    <button type="button" className="close-btn" data-dimiss="alert" onClick={() => close()}>&times;</button>
                </div>

                <div className="vertical-layout">
                    <label>Name</label>
                    <input type="text" onChange={onNameChange} value={NameValue} />
                </div>

                <div>
                    <button className={classes.SaveBtn} onClick={onSubmit} > {formType} Catecory</button>
                    <button className={classes.CancelBtn} onClick={() => close()} > Cancel</button>
                </div>

            </form>

        </Modal >

    );
};

export default CategoryForm;