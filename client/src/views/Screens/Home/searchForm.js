
import { useState, useEffect } from 'react'
import productService from '../../../_services/product.service'
const initialQueryParams = {
    skip: 0,
    limit: 8,
}

const SearchForm = (props) => {
    const [QueryParams, setQueryParams] = useState(initialQueryParams);
    const [SearchTerms, setSearchTerms] = useState("");
    const [Skip, setSkip] = useState(initialQueryParams.skip);
    const [Limit] = useState(initialQueryParams.limit);
    const [Filters, setFilters] = useState({ categories: [], gender: [], price: [] })
    const [PostSize, setPostSize] = useState();
    const [Products, setProducts] = useState([])
    const [Loading, setLoading] = useState(null);

    useEffect(() => { getProducts(QueryParams) }, [])

    const getProducts = async (queryParams) => {
        setLoading(true)
        const { msgError, results, postSize } = await productService.filterProducts(queryParams).read();
        setLoading(false)
        if (!msgError) {
            if (QueryParams.loadMore) {
                setProducts([...Products, ...results])
            } else {
                setProducts([...results])
            }
            setPostSize(postSize)
        }
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;
        const newQueryParams = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        setQueryParams(newQueryParams)
        getProducts(QueryParams)
        setSkip(skip)
    }

    const handleFilters = (filters, newCheckedFilter) => {
        const newFilters = { ...Filters }
        newFilters[newCheckedFilter] = filters
        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerms = (newSearchTerm) => {
        const newQueryParams = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm,
        }
        setSkip(0)
        setSearchTerms(newSearchTerm)
        getProducts(newQueryParams)
    }

    const showFilteredResults = (filters) => {
        const newQueryParams = {
            skip: 0,
            limit: Limit,
            filters: filters
        }
        setQueryParams({ ...newQueryParams })
        getProducts(newQueryParams)
        setSkip(0)
    }

    return {
        handleFilters,
        onLoadMore,
        updateSearchTerms,
        Products,
        Limit,
        PostSize,
        Loading,
    }
}

export default SearchForm;