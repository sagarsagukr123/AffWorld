import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product, { getState }) => {
  // Get current products to determine the next ID
  const state = getState();
  const currentProducts = state.products.products;
  const maxId = currentProducts.length > 0 
    ? Math.max(...currentProducts.map(p => p.id))
    : 29; // Start from 30 if no products
  const nextId = maxId + 1;

  const response = await axios.post('https://dummyjson.com/products/add', {
    ...product,
    id: nextId
  });
  
  // Since this is a dummy API, we'll use our calculated ID
  return {
    ...response.data,
    id: nextId
  };
});

export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, ...product }) => {
  const response = await axios.put(`https://dummyjson.com/products/${id}`, product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await axios.delete(`https://dummyjson.com/products/${id}`);
  return id;
});

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
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
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer; 