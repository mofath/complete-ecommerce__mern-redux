import React, { useEffect } from 'react';


import ImageSlider from './components/imageslider/imageslider'
import Checkbox from './components/checkbox/checkbox'
import Radiobox from './components/radiobox/radiobox'

import SearchForm from './searchForm'

const ProductsPage = () => {

    const {handleFilters, onLoadMore, Limit, PostSize, Products } = SearchForm();

    const RenderProductCard = () => Products.map((product, index) => {
        return (
            <div className="col col-lg-3 col-md-4 col-sm-6"  >
                <div class="card" style={{ width: "18rem" }}>
                    <a href={`/product/${product._id}`}>
                    <ImageSlider images={product.images} />
                    </a>
                    <div class="card-body">
                        <p class="card-text">{product.title}</p>
                        <p class="card-text">EGP{product.price}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div style={{ width: '75%', margin: '3rem' }}>

            <div style={{ textAlign: 'center', height: "200px" }}>
                <h2>Products</h2>
                <Checkbox
                    handleFilters={(filters) => handleFilters(filters, 'continents')}
                />

                <Radiobox
                    handleFilters={filters => handleFilters(filters, "price")}
                />
            </div>
            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No products yet</h2>
                </div>
                :
                <div>
                    <div className="row">
                        <RenderProductCard />
                    </div>
                </div>
            }
            <br /> <br />

            {PostSize >= Limit &&
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={onLoadMore}>load more</button>
                    </div>
                </div>
            }

        </div>
    )
}

export default ProductsPage;