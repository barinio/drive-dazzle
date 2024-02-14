import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestCatatlogCars, requestCarsInfo } from '../../services/api';

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

export const carInfoThunk = createAsyncThunk(
  'cars/carsInfo',
  async (id, thunkAPI) => {
    try {
      const response = await requestCarsInfo(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
