import { createSelector } from '@reduxjs/toolkit';

const selectCars = state => state.cars;

export const selectIsLoading = createSelector(
  selectCars,
  cars => cars.isLoading
);

export const selectCarsError = createSelector(selectCars, cars => cars.error);
export const selectCatalogCarsData = createSelector(
  selectCars,
  auth => auth.cars
);
