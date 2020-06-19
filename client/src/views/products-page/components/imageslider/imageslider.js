import React, { useState } from 'react'

const ImageSlider = (props) => {
    const [image, SetImage] = useState(props.images[0])

    const handleMouseEnter = () => {
        SetImage(props.images[1])
    }

    const handleMouseLeave = () => {
        SetImage(props.images[0])
    }

    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">   
                    <img
                        src={image} alt=""
                        className ="d-block w-100"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageSlider