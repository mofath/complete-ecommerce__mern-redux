import Axios from 'axios'


export default {
    placeNewOrder: async (orderData) => {
        return await Axios.post(`/order/`, { orderData })
    },


    getOrdersByUserId: (productId) => {
        let msgError = null;
        let msgBody = null
        let results = [];
        const suspender = async () => {
            try {
                const { data } = await Axios.get(`/order/`)
                msgError = false
                msgBody = data.message.msgBody;
                results = data.orders;
            } catch (error) {
                msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message;
                msgError = true
                results = []
            }
        }
        return {
            read: async () => {
                if (msgError === null) await suspender();
                return { results, msgBody, msgError };
            }
        }
    },


    getOrderById: async (id) => {
        try {
            const { data } = await Axios.get(`/order/${id}`)
            return {
                results: data.order
            }
        } catch (error) {
            console.log(error);
        }
    },



}