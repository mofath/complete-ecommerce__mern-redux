import Axios from 'axios'


export default {
    getCartItems: () => {
        return Axios.get(`/cart/`)
    },

    addToCart: (productId) => {
        return Axios.post(`/cart/${productId}`)
    },

    removeCartItem: (productId) => {
        return Axios.delete(`/cart/${productId}`)
    }
}