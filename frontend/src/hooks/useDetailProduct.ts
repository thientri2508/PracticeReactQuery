import { useQuery } from '@tanstack/react-query';
import { fetchProductDetails } from '../services/productService';

export const useProductDetails = (id: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => fetchProductDetails(id),
        retry: 3, // Thử lại tối đa 3 lần
        staleTime: 10000,
        enabled: true,
      });
};
