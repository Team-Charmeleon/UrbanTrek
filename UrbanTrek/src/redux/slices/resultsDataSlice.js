import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  results: [],
};
export const resultsDataSlice = createSlice({
  name: 'resultsData',
  initialState,
  reducers: {
    setResults: (state, action) => {
      console.log('LOGGING ACTION.PAYLOAD: ', action.payload);
      state.results = action.payload;
    },
  },
});

export const { setResults } = resultsDataSlice.actions;
export default resultsDataSlice.reducer;
