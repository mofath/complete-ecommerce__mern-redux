
import { useState, useEffect } from 'react'
import { continents, price } from './Data';


import Axios from 'axios'


const initialstate = {
    skip: 0,
    limit: 8,
    searchTerm: ""
}

const SearchForm = (props) => {
    const [SearchTerms, setSearchTerms] = useState("");
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(initialstate.skip)
    const [Limit, setLimit] = useState(initialstate.limit)

    const [PostSize, setPostSize] = useState()

    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

    useEffect(() => {
        let search = window.location.search.substring(1);
        setSearchTerms(search.split("=")[1])
        console.log("LOVE");
        
        const initialQuery = { ...initialstate }
        console.log(initialQuery);

        getProducts(initialQuery)
    }, [SearchTerms])


    const getProducts = (requestOptions) => {
        Axios.post('http://localhost:5000/product/products', requestOptions)
            .then(response => {
                if (response.data.success) {
                    if (requestOptions.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const queryOptions = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        getProducts(queryOptions)
        setSkip(skip)
    }

    const showFilteredResults = (filters) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)
    }

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters }
        newFilters[category] = filters

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues

        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }
    const updateSearchTerms = (newSearchTerm) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }


    return {
        getProducts,
        handleFilters,
        handlePrice,
        onLoadMore,
        updateSearchTerms,
        Products,
        Limit,
        initialstate,
        PostSize,
    }
}



export default SearchForm;