import { createSlice } from '@reduxjs/toolkit';
import { logout, signIn } from './ActionCreators';

type AuthStateType = {
  email: string;
  password: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      email: string;
      id: string;
      isActivated: boolean;
    };
  };
  isLoading: boolean;
  error: '';
};

const initialState: AuthStateType = {
  email: '',
  password: '',
  data: {
    accessToken: '',
    refreshToken: '',
    user: {
      email: '',
      id: '',
      isActivated: false,
    },
  },
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChangeEmail(state, action) {
      state.email = action.payload;
    },
    onChangePassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: {
    [signIn.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    [signIn.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signIn.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logout.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.data = {
        accessToken: '',
        refreshToken: '',
        user: {
          email: '',
          id: '',
          isActivated: false,
        },
      };
    },
    [logout.pending.type]: (state) => {
      state.isLoading = true;
    },
    [logout.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { onChangeEmail, onChangePassword } = authSlice.actions;

export default authSlice.reducer;
