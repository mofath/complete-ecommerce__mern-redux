import React from 'react'

import { MdExpandMore as ExpandMore } from 'react-icons/md'
import Sidebar from './components/Sidebar/Sidebar'
import ProductList from './components/ProductList/ProductList'
import Spinner from '../../UI/Spinner/Spinner'

import SearchForm from './searchForm'
import classes from './Home.module.css'

function HomeScreen() {
    const { handleFilters, onLoadMore, Limit, PostSize, Products, Loading } = SearchForm();

    return (
        <div className={[classes.HomeScreen, "screen"].join(' ')}>
            <aside>
                <Sidebar
                    handleCategoryFilters={(filters) => handleFilters(filters, 'category')}
                    handleGenderFilters={(filters) => handleFilters(filters, 'gender')}
                    handlePriceFilters={(filters) => handleFilters(filters, 'price')}
                />
            </aside>

            <main className="vertical-layout">
                {Loading ? <Spinner /> : <ProductList products={Products} />}

                {PostSize >= Limit &&
                    <button
                        className={Loading ? classes.Loading : classes.LoadMore}
                        onClick={onLoadMore}
                    >
                        {Loading ? `Loading...` : `LOAD MORE`}
                        {!Loading && <ExpandMore color="white" size="30" />}
                    </button>
                }
            </main>
        </div>
    )
}


export default HomeScreen;


