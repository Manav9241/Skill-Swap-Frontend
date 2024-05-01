import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { searchUsers } from '../apis/auth';

const initialState = {
  searchResults: [],
  isLoading: false,
  isError: false,
};

export const searchUserThunk = createAsyncThunk(
  'redux/searchUser',
  async (search, { rejectWithValue }) => {
    try {
      const { data } = await searchUsers(search);
      return data;
    } catch (error) {
      toast.error('Something Went Wrong. Try Again!');
      return rejectWithValue(error.message); // Rethrow the error message
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchUserThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false; // Reset error state on pending
      })
      .addCase(searchUserThunk.fulfilled, (state, { payload }) => {
        state.searchResults = payload;
        state.isLoading = false;
      })
      .addCase(searchUserThunk.rejected, (state) => {
        state.isError = true;
        state.isLoading = false; // Ensure loading state is updated on rejection
      });
  },
});

export default searchSlice.reducer;
