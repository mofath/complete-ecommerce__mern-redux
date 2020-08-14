import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ListItems from './ListItems/ListItems'
import RangeSliderItem from './RangeSliderItem/RangeSliderItem'

import { getAllCategories } from '../../../../../_store/modules/category/actions'
import { gender } from '../../../../../assets/data/gender'
import classes from './Sidebar.module.css'

function Sidebar({ handleCategoryFilters, handlePriceFilters, handleGenderFilters }) {
    const categoryReducer = useSelector(state => state.categoryReducer)
    const { categories, isLoading, fetchedBefore } = categoryReducer;
    const dispatch = useDispatch()

    useEffect(() => {
        if (!fetchedBefore) dispatch(getAllCategories())
    }, []);

    return (
        <div className={classes.Sidebar}>
            <div >
                <ListItems
                    title="Gender"
                    list={gender}
                    handleFilters={handleGenderFilters} />
            </div>

            <div >
                {!isLoading &&
                    <ListItems
                        title="Category"
                        list={categories}
                        isLoading={isLoading}
                        handleFilters={handleCategoryFilters} />
                }
            </div>

            <div>
                <RangeSliderItem handleFilters={handlePriceFilters} />
            </div>
        </div>
    )
}

export default Sidebar;