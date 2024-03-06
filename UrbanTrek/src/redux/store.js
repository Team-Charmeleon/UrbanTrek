import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import idReducer from './slices/idSlice';
import resultsReducer from './slices/resultsDataSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    id: idReducer,
    results: resultsReducer,
  },
});
