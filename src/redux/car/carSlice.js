import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { catatlogCarsThunk, carInfoThunk } from './carThunk';

const initialState = {
  cars: {
    id: null,
    name: null,
  },
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
  state.cars = payload.cars;
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
      .addCase(carInfoThunk.fulfilled, handleFulfilled)

      .addMatcher(isAnyOf(catatlogCarsThunk.pending), handlePending)
      .addMatcher(isAnyOf(carInfoThunk.pending), handlePending)

      .addMatcher(isAnyOf(catatlogCarsThunk.rejected), handleError)
      .addMatcher(isAnyOf(carInfoThunk.rejected), handleError),
});

export const carReducer = carsSlice.reducer;
