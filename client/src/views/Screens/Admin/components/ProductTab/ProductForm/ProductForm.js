import React, { useState, useEffect } from 'react'

import productService from '../../../../../../_services/product.service'

import { addNewProduct } from '../../../../../../_store/modules/product/actions'
import { getAllCategories } from '../../../../../../_store/modules/category/actions'

import { useDispatch, useSelector } from 'react-redux'

import classes from './ProductForm.module.css'

import DropZone from './DropZone/DropZone'
import DataForm from './DataForm/DataForm';
import UploadGallery from './UploadGallery/UploadGallery'
import Modal from '../../../../../UI/Modal/Modal'
import Spinner from '../../../../../UI/Spinner/Spinner'


function UploadProductPage(props) {
    const [Images, setImages] = useState([]);

    const categoryReducer = useSelector(state => state.categoryReducer)
    const { categories, fetchedBefore, isLoading } = categoryReducer

    const alertReducer = useSelector(state => state.alertReducer)
    const { msgError, id } = alertReducer

    const dispatch = useDispatch()

    useEffect(() => { if (!fetchedBefore) dispatch(getAllCategories()) }, []);

    useEffect(() => {
        if (id === "ADD_NEW_PRODUCT") {
            if (!msgError && !isLoading) props.close();
        }
    }, [msgError, id, msgError]);

    const submit = (productValues) => dispatch(addNewProduct(productValues));

    const uploadImage = async (files) => {
        const { image } = await productService.uploadProductImage(files).read();
        setImages([...Images, image])
    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);
        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
    }

    return (
        <Modal show={props.show}>
            {isLoading ?
                <Spinner /> :
                <div className={[classes.ProductForm, "vertical-layout"].join(' ')}>

                    <div className={[classes.Heading, "horizontal-layout"].join(' ')}>
                        <p>{props.formType} Product</p>
                        <button className="close-btn" data-dimiss="alert" onClick={() => props.close()}>&times;</button>
                    </div>

                    <div className="horizontal-layout">
                        <DropZone uploadImage={uploadImage} />
                        <DataForm
                            categories={categories}
                            submit={submit} images={Images}
                            close={props.close} formType={props.formType}
                            productToEdit={props.productToEdit} />
                    </div>

                    <UploadGallery
                        imgs={props.formType === "Edit" ? props.productToEdit.images : Images}
                        delete={onDelete}
                    />

                </div>
            }
        </Modal>
    )
}

export default UploadProductPage