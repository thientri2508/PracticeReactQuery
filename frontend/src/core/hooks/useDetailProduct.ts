import useQueryWithRetry from './useQueryWithRetry';
import { fetchProductDetails } from '../services/productService';
import { Product } from '../types/Product';

export const useProductDetails = (id: string) => {
  return useQueryWithRetry<Product | null, Error>(
    `product-${id}`,
    () => fetchProductDetails(id)
  );
};
