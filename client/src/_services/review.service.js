import Axios from "axios";


export default {
    getProductReviews:  (productId) => {
        return Axios.get(`/reviews/${productId}`)
    },

    submitReview: (reviewData) => {
        return Axios.post('/reviews', { reviewData })
    },


}