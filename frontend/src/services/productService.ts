import apiClient from '../connectAPI/apiClient';
import { API_ENDPOINTS } from '../connectAPI/apiEndpoints';
import { handleApiError } from '../connectAPI/apiErrorHandler';

import { ProductQueryParams } from '../types/product.types';

export const fetchProducts = async (query?: ProductQueryParams) => {
  try {
      let api = API_ENDPOINTS.PRODUCTS;
      
      // Nếu có category trong query, thay đổi URL endpoint
      if (query && Object.keys(query).length !== 0) {
          api = API_ENDPOINTS.PRODUCTS + `/category/${query.category}`;
      }
      
      const response = await apiClient.get(api);
      
      // Kiểm tra dữ liệu trước khi trả về
      if (!Array.isArray(response.data.products) || response.data.products.length === 0) {
          throw new Error('Product not found');
      }

      return response.data.products;
  } catch (error) {
      handleApiError(error); // Sử dụng hàm xử lý lỗi từ connectAPI
  }
};

export const fetchProductDetails = async (id: string) => {
  try {
      if (id) {
          const response = await apiClient.get(API_ENDPOINTS.PRODUCT_DETAIL(id));
          return response.data;
      } else {
          throw new Error("Product ID is required");
      }
  } catch (error) {
      handleApiError(error); // Sử dụng hàm xử lý lỗi từ connectAPI
  }
};