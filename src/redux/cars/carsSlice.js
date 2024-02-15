import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { catatlogCarsThunk } from './carsThunk';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.authenticated = true;
  state.cars = payload;
};
const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(catatlogCarsThunk.fulfilled, handleFulfilled)

      .addMatcher(isAnyOf(catatlogCarsThunk.pending), handlePending)

      .addMatcher(isAnyOf(catatlogCarsThunk.rejected), handleError),
});

export const carsReducer = carsSlice.reducer;
