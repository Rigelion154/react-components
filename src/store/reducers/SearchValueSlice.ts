import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchValue {
  searchValue: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: ISearchValue = {
  searchValue: 'store',
  isLoading: false,
  error: '' || localStorage.getItem('searchValue'),
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export default searchValueSlice.reducer;
