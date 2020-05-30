import Axios from 'axios'
import SearchForm from '../views/products/searchForm'

const { setProducts } = SearchForm();

export default {
    getProduct: (requestOptions) => {
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
}