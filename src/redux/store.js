import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { isOpenModalReducer } from './carInfo/isOpenModalSlice';
import { carInfoReducer } from './carInfo/carInfoSlice';

const carsConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorites'],
};

const rootReducer = combineReducers({
  cars: persistReducer(carsConfig, carsReducer),
  isOpenModal: isOpenModalReducer,
  carInfo: carInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
