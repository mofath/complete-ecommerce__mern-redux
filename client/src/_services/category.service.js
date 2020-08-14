import axios from 'axios'

export default {
    addNewCategory: (categoryValues) => {
        return axios.post('/category/', categoryValues)
    },

    getAllCategories: async () => {
        return await axios.get('/category/')
    },

    deleteCategory: async (id) => {
        return axios.delete(`/category/${id}`)
    },

    updateCategory: async (id, newCategoryValues) => {
        return axios.patch(`/category/${id}`, newCategoryValues)
    },
}