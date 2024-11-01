import { API_ENDPOINTS } from '../connectAPI/apiEndpoints';
import { apiService } from '../connectAPI/apiService';
import { ProductQueryParams } from '../../pages/Home/types/Home.Req';
import { HomeResponse } from '../../pages/Home/types/Home.Res';
import { Product } from '../types/Product';

export const fetchProducts = async (query?: ProductQueryParams) => {
    let api = API_ENDPOINTS.PRODUCTS;
      
    // Nếu có category trong query, thay đổi URL endpoint
    if (query && Object.keys(query).length !== 0) {
        api = API_ENDPOINTS.PRODUCTS + `/category/${query.category}`;
    }
    const res = await apiService<HomeResponse>(api, 'GET');

    if (!Array.isArray(res.products) || res.products.length === 0) {
        throw new Error('Product not found');
    }

    return res.products;
};

export const fetchProductDetails = async (id: string) => {
    if (!id) {
        throw new Error("Product ID is required");
    }
    
    const productDetails = await apiService<Product>(API_ENDPOINTS.PRODUCT_DETAIL(id), 'GET');
    return productDetails;
};