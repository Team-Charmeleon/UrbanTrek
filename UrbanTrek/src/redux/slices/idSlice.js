import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: null,
};

export const idSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;
