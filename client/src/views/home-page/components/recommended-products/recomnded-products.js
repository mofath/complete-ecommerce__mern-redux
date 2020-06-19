import React from 'react'
import "./recomnded-products.css"

import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hp1 from '../../../../assets/hp1.jpg'
import hp2 from '../../../../assets/hp2.jpg'
import hp3 from '../../../../assets/hp3.jpg'
import hp4 from '../../../../assets/hp4.jpg'
import hp5 from '../../../../assets/hp5.jpg'
import hp6 from '../../../../assets/hp6.jpg'



import { Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function RecommendedProducts() {

    const products = [
        { name: "product1", price: 100, img: hp1 },
        { name: "product2", price: 150, img: hp2 },
        { name: "product3", price: 200, img: hp3 },
        { name: "product4", price: 100, img: hp4 },
        { name: "product5", price: 400, img: hp5 },
        { name: "product6", price: 200, img: hp6 },
    ]

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
            },
        ]
    };

    return (
        <div className="recomnded-products-container">
            <Container>
                <div className="clearfix mt-5 mb-2" >
                    <h4 className="float-left slider-title">Recommended For You</h4>
                    <Link to="/" className="float-right text-uppercase slider-link">See all</Link>
                </div>
                <Slider {...settings}>
                    {products.map(product => {
                        return (
                            <React.Fragment>
                                <Link to={`/movies/${product.id}`} className="mylink">
                                    <Col >
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={product.img}
                                            />
                                            <Card.Body className="product-details">
                                                <h6>{product.name}</h6>
                                                <h5>EGP&nbsp;{product.price}</h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Link>
                            </React.Fragment>
                        )
                    })}
                </Slider>
            </Container>
        </div>
    )
}

export default RecommendedProducts;