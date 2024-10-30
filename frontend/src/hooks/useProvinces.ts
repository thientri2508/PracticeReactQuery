
import { useQuery } from '@tanstack/react-query'
import { fetchProvinces, fetchProvincesByName, Province } from '../services/provinceService';

export const useProvinces = () => {
  return useQuery<Province[], Error>({ queryKey: ['provinces'], queryFn: fetchProvinces });
};

export const useProvincesByName = (name: string) => {
  if (name && name.length > 100) {
    throw new Error('Province name is too long');
  }
  return useQuery<Province[], Error>({
    queryKey: ['provinces', name],
    queryFn: () => fetchProvincesByName(name),
    enabled: false,
    staleTime: 10000,
  });
};
