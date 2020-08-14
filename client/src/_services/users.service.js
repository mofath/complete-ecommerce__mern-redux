import axios from 'axios'

export default {
    getAllUsers: async () => {
        return await axios.get('/user/')
    },

    deleteUser: (userId) => {
        return axios.delete(`http://localhost:5000/user/${userId}`)
    },

    countUsers: async () => {
        return axios.get(`http://localhost:5000/user/count`)
    }
}
