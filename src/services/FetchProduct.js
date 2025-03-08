import axios from 'axios';

export const FetchProduct = async (categoryId) => {
  try {
    if (!categoryId) {
      throw new Error("Invalid category ID"); 
       
    }
    
    const response = await axios.get(
      `https://postgresql-7xg4.onrender.com/api/products?filters[category][id][$eq]=${categoryId}&populate=*`
    );
    
    return response.data?.data || []; 
  } catch (error) {
    console.error("FetchProduct Error:", error);
    throw error;
  }
};
