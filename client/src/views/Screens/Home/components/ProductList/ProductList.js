import React from 'react'

import ProductCard from '../../../../UI/ProductCard/ProductCard'
import { thousands_separators } from "../../../../../_utils/helpers";
import classes from './ProductList.module.css'


function ProductList({ products }) {

    const RenderProductList = () => products.map((product) => {
        return (
            <li key={product._id}  >
                <ProductCard
                    images={product.images}
                    price={thousands_separators(product.price)}
                    name={product.name}
                    id={product._id}
                />
            </li>
        )
    })

    return (
        <div >
            {products.length === 0 ?
                <h3>No products Found</h3> :
                <ul className={classes.ProductList}> <RenderProductList /> </ul>
            }

        </div>
    )
}

export default ProductList;