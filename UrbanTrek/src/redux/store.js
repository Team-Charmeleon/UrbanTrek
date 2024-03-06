import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import idReducer from './slices/idSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    id: idReducer,
  },
});
