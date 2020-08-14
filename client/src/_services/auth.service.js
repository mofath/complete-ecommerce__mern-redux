import Axios from "axios";

export default {
    login: (loginData) => {
        return Axios.post('/user/auth/login', loginData)
    },

    signup: async (signupData) => {
        return Axios.post('/user/auth/signup', signupData)
    },

    authenticate: async () => {
        return Axios.get('/user/auth/authenticate')
    },

    logout: async () => {
        return Axios.get('/user/auth/logout')
    },

}