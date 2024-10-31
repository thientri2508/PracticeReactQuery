import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product, productsData } from '../../../mockData/productsData';

// Hàm mock API để lấy dữ liệu sản phẩm
const mockFetchProducts = async (): Promise<Product[]> => {
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
