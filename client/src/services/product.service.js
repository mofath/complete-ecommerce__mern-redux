import axios from 'axios'
import { logDOM } from '@testing-library/react';


export default {
    getAllProducts: (products, loading) => {
        axios.get('http://localhost:5000/product/')
            .then(response => {
                if (response.data) {
                    products(response.data);
                    loading(false);
                    console.log(response.data);
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    },
    deleteProduct: (id) => {
        console.log("then");
        axios.delete(`http://localhost:5000/product/${id}`)
            .then(response => {
                return true;
            })
            .catch(error => {
                console.log(error);
                return false;
            })
    }

}