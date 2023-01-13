import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductSlice';
import authReducer from './reducers/AuthSlice';

const rootReducer = combineReducers({
  productReducer,
  authReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
