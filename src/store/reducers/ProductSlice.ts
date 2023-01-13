import { ProductType } from '../../models/Product';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProducts } from './ActionCreators';

type ProductStateType = {
  product: ProductType;
  isLoading: boolean;
  error: string;
};

const initialState: ProductStateType = {
  product: {
    products: [],
    cursor: '',
    hasNextPage: false,
  },
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled.type]: (state, action: PayloadAction<ProductType>) => {
      state.isLoading = false;
      state.error = '';
      state.product = action.payload;
    },
    [getProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
