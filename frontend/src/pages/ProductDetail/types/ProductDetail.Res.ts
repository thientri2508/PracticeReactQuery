import { Product } from '../../../core/types/Product';

// Dữ liệu chi tiết sản phẩm trả về từ backend
export interface ProductDetailResponse {
  product: Product;
  relatedProducts: Product[]; // Các sản phẩm liên quan
  reviews: Review[];          // Danh sách đánh giá của sản phẩm
}

// Interface cho từng đánh giá sản phẩm
export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}
