import React from 'react'

import classes from './UploadGallery.module.css'
import productService from '../../../../../../../_services/product.service'


const UploadGallery = (props) => {
    return (
        <div className={classes.UploadGallery}>
            <h6>Recently Uploaded Images</h6>

            <div className="horizontal-layout">
                {props.imgs.map((imgID, index) =>
                    <div key={index}>
                        <button onClick={() => props.delete(imgID)} className="close" data-dimiss="alert">&times;</button>
                        <img src={productService.displayProductImg(imgID)} alt={`productImg-${index}`} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default UploadGallery;