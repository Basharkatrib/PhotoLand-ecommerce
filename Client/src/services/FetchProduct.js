import axios from 'axios';
export const FetchProduct = async (id) => {
    try {
        const response = await axios.get(`https://postgresql-7xg4.onrender.com/api/products/${id}?populate=*`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};

