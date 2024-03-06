import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import resultsReducer from './slices/resultsDataSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    results: resultsReducer,
  },
});
