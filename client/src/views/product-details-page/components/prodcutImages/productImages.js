import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

import './productImages.css'

import sh01 from '../../../../assets/sh01.jpg'
import sh02 from '../../../../assets/sh02.jpg'
import sh03 from '../../../../assets/sh03.jpg'
import sh04 from '../../../../assets/sh04.jpg'


function ProductImages(props) {
    const [Images, setImages] = useState([])

    const myimg = [sh01, sh02, sh03, sh04];

    useEffect(() => {
        // if (props.detail.images && props.detail.images.length > 0) {
        let images = [];

        // props.detail.images && props.detail.images.map(item => {
        //     images.push({
        //         original: `http://localhost:5000/${item}`,
        //         thumbnail: `http://localhost:5000/${item}`
        //     })
        // })

        myimg.map(img => {
            console.log("here") 
            images.push({
                original: img,
                thumbnail: img
            })
        })
        setImages(images)
        // }
    }, [])

    return (
        <div className="product-img-gallery">
            <ImageGallery
                items={Images}
                thumbnailPosition="left"
                showNav={true}
                showPlayButton={false}
                lazyLoad={true}
            />

        </div>
    )
}

export default ProductImages