import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = { value: '' };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setValueFilters(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setValueFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
