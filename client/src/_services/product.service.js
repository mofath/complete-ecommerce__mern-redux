import axios from 'axios'

export default {
    getAllProducts: () => { return axios.get('/product/') },

    deleteProduct: (id) => { return axios.delete(`/product/${id}`); },

    addNewProduct: (productValues) => { return axios.post('/product/', productValues); },

    displayProductImg: (ImgID) => { return `/${ImgID}` },


    uploadProductImage: (files) => {
        let formData = new FormData();
        formData.append("file", files[0])
        const config = { header: { 'content-type': 'multipart/form-data' } }

        let msgError = null;
        let image = null;
        const suspender = async () => {
            try {
                const { data } = await axios.post('/uploads', formData, config)
                msgError = false
                image = data.image;
            }
            catch (error) {
                msgError = true
            }
        }
        return {
            read: async () => {
                if (msgError === null) await suspender();
                return { image };
            }
        }
    },

    getProductByID: (productId) => {
        let msgError = null;
        let msgBody = null
        let results = null;
        const suspender = async () => {
            
            try {
                const { data } = await axios.get(`/product/${productId}`)
                msgError = false
                msgBody = data.message.msgBody;
                results = data.product;
            } catch (error) {
                msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message;
                msgError = true
                results = null
            }
        }
        return {
            read: async () => {
                if (msgError === null) await suspender();
                return { results, msgBody, msgError };
            }
        }
    },


    filterProducts: (queryParams) => {
        let results = null;
        let msgError = null;
        let msgBody = null
        let postSize = null;
        const suspender = async () => {
            try {
                const { data } = await axios.post(`/product/products`, queryParams)
                msgError = false
                msgBody = data.message.msgBody;
                results = data.products;
                postSize = data.postSize;
            } catch (error) {
                msgBody = error.response.data.message ? error.response.data.message.msgBody : error.message;
                msgError = true
                results = []
            }
        }
        return {
            read: async () => {
                if (msgError === null) await suspender();
                return { results, msgBody, msgError, postSize };
            }
        }
    },



    getPriceRange: async () => {
        try {
            let { data } = await axios.get('/product/price-range')
            if (!data.message.msgError) return data.message.priceRange;
        }
        catch (error) {
            console.log(error);
        }
    },
}
