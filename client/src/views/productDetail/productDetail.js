import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import ProductImages from './components/productImages'
import ProductInfo from './components/productInfo'
// import

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
        <div>
            <div className='row'>
                <div className='col col-lg-7'>
                    <ProductImages detail={Prouct} />
                </div>
                <div className='col col-lg-5'>
                    <ProductInfo 
                    addToCart={addToCartHandler}
                    detail={Prouct} 
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;