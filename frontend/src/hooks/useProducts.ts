import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';

export const useProducts = () => {
  const location = useLocation();
  const query = queryString?.parse(location?.search)
  return useQuery({
    queryKey: ['products', query],
    queryFn: () => fetchProducts(query),
    retry: 3, // Thử lại tối đa 3 lần
    staleTime: 10000,
    enabled: true,
  });
};
