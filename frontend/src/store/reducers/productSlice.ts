import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
import { Product, productsData } from '../../../src/productsData';

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

// Hàm mock API để lấy dữ liệu sản phẩm
const mockFetchProducts = async (): Promise<Product[]> => {
    // Giả lập độ trễ 0.5 giây trước khi trả dữ liệu
    return new Promise<Product[]>((resolve) => {
        setTimeout(() => {
        resolve(productsData);
        }, 500);
    });
};

// Hàm mock API để lấy chi tiết sản phẩm theo ID
const mockFetchProductById = async (id: number): Promise<Product | null> => {
  return new Promise<Product | null>((resolve) => {
    setTimeout(() => {
      const product = productsData.find((prod) => prod.id === id) || null;
      resolve(product);
    }, 500);
  });
};

// Tạo async thunk để fetch dữ liệu sản phẩm
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await mockFetchProducts();
  return response;
});

// Tạo async thunk để fetch sản phẩm theo ID
export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id: number) => {
  const response = await mockFetchProductById(id);
  return response;
});

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
      })
  },
});

export const { setProductById } = productSlice.actions;
export default productSlice.reducer;
