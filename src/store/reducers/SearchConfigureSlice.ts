import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchConfigure {
  searchValue: string | null;
  itemsPerPage: number;
  isLoading: boolean;
  error: string;
}

const initialState: ISearchConfigure = {
  searchValue: '' || localStorage.getItem('searchValue'),
  itemsPerPage: 10,
  isLoading: false,
  error: '',
};

export const searchConfigureSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setItems(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
  },
});

export default searchConfigureSlice.reducer;
