import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../mockData/productsData';
import { fetchProducts, fetchProductById } from './productActions'; // Import các async thunk

interface ProductState {
  products: Product[];
  product: Product | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Trạng thái ban đầu
const initialState: ProductState = {
  products: [],
  product: null,
  status: 'idle',
  error: null,
};

// Tạo slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductById: (state, action: PayloadAction<number>) => {
      state.product = state.products.find((p) => p.id === action.payload) || null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        if (action.payload) {
          state.product = action.payload;
          state.status = 'succeeded';
        } else {
          state.product = null;
          state.status = 'failed';
          state.error = 'Product not found';
        }
      });
  },
});

export const { setProductById } = productSlice.actions;
export default productSlice.reducer;
