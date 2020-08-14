import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

const Gallery = (props) => {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.images && props.images.length > 0) {
            let images = [];

            props.images && props.images.map((item) => {
                return images.push({
                    original: `/${item}`,
                    thumbnail: `/${item}`
                })
            })
            setImages(images)
        }
    }, [props.images])


    return <ImageGallery
        items={Images}
        thumbnailPosition="left"
        showNav={true}
        showPlayButton={false}
        lazyLoad={true}
    />

}

export default Gallery;