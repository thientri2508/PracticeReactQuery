import { Product } from '../../../core/types/Product';

// Dữ liệu trả về từ API cho trang Home
export interface HomeResponse {
  limit: number;
  products: Product[];  // Danh sách sản phẩm
  skip: number;
  total: number;
}
