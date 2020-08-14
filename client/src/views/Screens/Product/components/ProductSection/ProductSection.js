import React  from 'react'

import Gallery from './Gallery/Gallery'
import ProductInfo from './ProductInfo/ProductInfo'

import classes from './ProductSection.module.css'


const ProductSection = ({ product }) =>
    <section className={[classes.ProductSection ,"horizontal-layout"].join(' ')}>
        <div><Gallery images={product.images} /></div>
        <div><ProductInfo info={product} /></div>
    </section>


export default ProductSection;