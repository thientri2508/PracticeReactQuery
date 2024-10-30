import axios from 'axios';
const API_URL = 'https://dummyjson.com/products';

//Định nghĩa kiểu Product
export interface Product {
    id: number;
    title: string;
    description: string;
    category: number;
    price: number;
    brand: string;
    thumbnail: string;
    images: [string];
}
export interface ProductQueryParams {
  category?: string;
}  

export const fetchProducts = async (query?: ProductQueryParams)=> {
    try {
      let api = API_URL
      if(query && Object.keys(query).length !== 0) {
        api = `${API_URL}/category/${query.category}`
        //const params = queryString.stringify(query);
        //const response = await axios.get(`.../api/products?${params}`);
      } 
      const response = await axios.get(api);
      // Kiểm tra dữ liệu trước khi trả về
      if (!Array.isArray(response.data.products) || response.data.products.length===0) {
        throw new Error('Product not found');
      }
      return response.data.products;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch products');
      } else {
        throw new Error('Failed to fetch products');
      }
    }
  };

export const fetchProductDetails = async (id: string) => {
  try {
    if(id) {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch products');
    } else {
      throw new Error('Failed to fetch products');
    }
  }
};