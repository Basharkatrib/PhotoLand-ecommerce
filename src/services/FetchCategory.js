import axios from 'axios';

export const FetchCategory = async () => {
  try {
    const response = await axios.get('https://postgresql-7xg4.onrender.com/api/categories');
    return response.data.data; 
  } catch (error) {
    console.error("FetchCategory Error:", error); 
    throw error; 
  }
};
