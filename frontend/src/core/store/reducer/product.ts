import { ProductState } from '../slice/product';
import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../mockData/productsData';
import { fetchProducts } from '../slice/product';

// Định nghĩa kiểu trả về của `fetchProducts.rejected`
type FetchProductsRejectedAction = ReturnType<typeof fetchProducts.rejected>;

// Cập nhật `fetchProductsRejected` với kiểu dữ liệu chính xác
export const fetchProductsPending = (state: ProductState) => {
  state.status = 'loading';
};

export const fetchProductsFulfilled = (state: ProductState, action: PayloadAction<Product[]>) => {
  state.status = 'succeeded';
  state.products = action.payload;
};

export const fetchProductsRejected = (
  state: ProductState,
  action: FetchProductsRejectedAction
) => {
  state.status = 'failed';
  state.error = action.error.message || 'Failed to fetch products';
};

export const fetchProductByIdFulfilled = (state: ProductState, action: PayloadAction<Product | null>) => {
  if (action.payload) {
    state.product = action.payload;
    state.status = 'succeeded';
  } else {
    state.product = null;
    state.status = 'failed';
    state.error = 'Product not found';
  }
};
