import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestCatatlogCars } from '../../services/api';

export const catatlogCarsThunk = createAsyncThunk(
  'cars/catatlogCars',
  async (_, thunkAPI) => {
    try {
      const response = await requestCatatlogCars();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
