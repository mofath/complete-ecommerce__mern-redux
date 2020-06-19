import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import ProductImages from './components/prodcutImages/productImages'
import ProductInfo from './components/productInfo/productInfo'
import ProductControl from './components/productControl/productControl'
import './product-details-page.css'

function ProductDetail(props) {

    const productId = props.match.params.productId;
    const [Prouct, setProduct] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:5000/product/product_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data.product)
            })
    }, [])

    const addToCartHandler = () => {

    }

    return (
            <div className='product-detail-wrapper'>
                <div className="row">
                    <div className='col-9'>
                        <div className="row main">
                            <div className='col-5 product-gallery'>
                                <ProductImages detail={Prouct} />
                            </div>

                            <div className='col-7 product-info'>
                                <ProductInfo
                                    addToCart={addToCartHandler}
                                    detail={Prouct}
                                />
                            </div>

                            
                            <div className="similar-products-wrapper">
                                
                            </div>
                        </div>
                    </div>

                    <div className='col-3 add-to-cart-sidebar'>
                        <ProductControl />
                    </div>

                </div>

            </div>
    )
}

export default ProductDetail;