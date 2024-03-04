import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  loggedIn: false,
};

export const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { toggleLogin } = loggedInSlice.actions;
export default loggedInSlice.reducer;
