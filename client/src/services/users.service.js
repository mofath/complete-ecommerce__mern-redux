import axios from 'axios'

export default {
    getAllUsers: (users, loading) => {
        axios.get('http://localhost:5000/user/')
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                    users(response.data)
                    loading(false)
                } else {
                    return null;
                }
            })
    },
    deleteUser: (id) => {
        axios.delete(`http://localhost:5000/user/${id}`)
            .then(response => {
                return true;
            })
            .catch(error => { 
                console.log(error);         
                return false;
            })
    }
}