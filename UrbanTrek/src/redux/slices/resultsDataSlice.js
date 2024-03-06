import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  results: [],
};
export const resultsDataSlice = createSlice({
  name: 'resultsData',
  initialState,
  reducers: {
    setResults: {
      reducer: (state, action) => {
        state.results = action.payload.results;
      },
      prepare: (resultsArr) => {
        return { payload: { results: resultsArr } };
      },
    },
  },
});

export const { setResults } = resultsDataSlice.actions;
export default resultsDataSlice.reducer;
