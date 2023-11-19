import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchConfigureSlice';
import { beerApi } from '../utils/services/BeerService';

export const store = configureStore({
  reducer: {
    searchReducer,
    [beerApi.reducerPath]: beerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
