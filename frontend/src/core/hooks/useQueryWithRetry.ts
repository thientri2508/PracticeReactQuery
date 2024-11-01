import { useQuery, UseQueryResult } from '@tanstack/react-query';

const useQueryWithRetry = <TData, TError>(
  queryKey: string,
  queryFn: () => Promise<TData>
): UseQueryResult<TData, TError> => {
  return useQuery<TData, TError>({
    queryKey: [queryKey],
    queryFn,
    retry: 3,
    staleTime: 10000,
  });
};

export default useQueryWithRetry;
