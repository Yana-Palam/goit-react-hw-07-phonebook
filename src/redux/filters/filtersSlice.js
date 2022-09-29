import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = { value: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setValueFilters(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { setValueFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
