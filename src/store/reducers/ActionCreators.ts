import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductType } from '../../models/Product';

export const getProducts = createAsyncThunk('product/getAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<ProductType>('http://192.168.0.126:7000/api/products');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось сделать запрос за продуктами');
  }
});

export const signIn = createAsyncThunk(
  'auth/login',
  async ({ email: email, password: password }: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post('http://192.168.0.126:7000/api/signIn', {
        email: email,
        password: password,
      });
      return response.data;
    } catch (e:any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async(_, thunkAPI) => {
    try {
      let response = await axios.post('http://192.168.0.126:7000/api/logout');
      return response.data;
    } catch (e:any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
