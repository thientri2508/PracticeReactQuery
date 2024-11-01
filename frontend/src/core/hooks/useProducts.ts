import { fetchProducts } from '../services/productService';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import useQueryWithRetry from './useQueryWithRetry';
import { Product } from '../types/Product';

export const useProducts = () => {
  const location = useLocation();
  const query = queryString?.parse(location?.search)
  const queryStringified = JSON.stringify(query);

  return useQueryWithRetry<Product[], Error>(
    `products-${queryStringified}`, 
    () => fetchProducts(query)
  );
  
};
