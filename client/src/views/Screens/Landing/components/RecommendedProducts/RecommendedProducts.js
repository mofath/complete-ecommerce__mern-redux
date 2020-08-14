import React from 'react'
import classes from "./RecommendedProducts.module.css"

import { Link } from 'react-router-dom';
import Slider from "react-slick";

import ProductCard from '../../../../UI/ProductCard/ProductCard'
import { thousands_separators } from "../../../../../_utils/helpers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./arrow.css";

function RecommendedProducts({ loaded, products }) {

    var settings = {
        dots: false, arrows: true, infinite: false, adaptiveHeight: true,
        speed: 500, slidesToShow: 4, slidesToScroll: 1,
        className: 'slides',
        responsive: [{
            breakpoint: 768,
            settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
        },],
    };

    return (
        <React.Fragment>
            <div className={[classes.Heading, "horizontal-layout"].join(' ')} >
                <h4>Recommended For You</h4>
                <Link to="/home">SEE ALL</Link>
            </div>

            <div className={classes.Slider}>
                <Slider {...settings}>
                    {loaded &&
                        products.map((product) =>
                            <div className={classes.Products} key={product._id}>
                                <ProductCard
                                    images={product.images}
                                    price={thousands_separators(product.price)}
                                    name={product.name}
                                    id={product._id}
                                    key={product._id}
                                />
                            </div>
                        )}
                </Slider>
            </div>
        </React.Fragment>
    );
}


export default RecommendedProducts;
