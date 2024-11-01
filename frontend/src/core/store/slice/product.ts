import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, productsData } from '../../mockData/productsData';
import {
  fetchProductsPending,
  fetchProductsFulfilled,
  fetchProductsRejected,
  fetchProductByIdFulfilled,
} from '../reducer/product';

export interface ProductState {
  products: Product[];
  product: Product | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
  status: 'idle',
  error: null,
};

// Mock API functions
const mockFetchProducts = async (): Promise<Product[]> => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 500);
  });
};

const mockFetchProductById = async (id: number): Promise<Product | null> => {
  return new Promise<Product | null>((resolve) => {
    setTimeout(() => {
      const product = productsData.find((prod) => prod.id === id) || null;
      resolve(product);
    }, 500);
  });
};

// Async thunks
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await mockFetchProducts();
  return response;
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id: number) => {
  const response = await mockFetchProductById(id);
  return response;
});

// Slice
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
      .addCase(fetchProducts.pending, fetchProductsPending)
      .addCase(fetchProducts.fulfilled, fetchProductsFulfilled)
      .addCase(fetchProducts.rejected, fetchProductsRejected)
      .addCase(fetchProductById.fulfilled, fetchProductByIdFulfilled);
  },
});

export const { setProductById } = productSlice.actions;
export default productSlice.reducer;
