import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IBeer } from '../types/interfaces';

export const beerApi = createApi({
  reducerPath: 'beerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/beers' }),
  endpoints: (build) => ({
    getBeers: build.query<
      IBeer[],
      { searchValue: string | null; page: number; itemsPerPage: number }
    >({
      query: ({ searchValue, page, itemsPerPage }) =>
        `?page=${page}&per_page=${itemsPerPage}&${
          searchValue ? `beer_name=${searchValue}` : ''
        }`,
    }),
    getBeerById: build.query<IBeer[], string | undefined>({
      query: (id) => `/${id}`,
    }),
  }),
});
