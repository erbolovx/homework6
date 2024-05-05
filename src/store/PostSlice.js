import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "https://fakestoreapi.com/users";

export const getCats = createAsyncThunk("getCats", async () => {
  try {
    return fetch(BASE_URL)
        .then((response) => {
          if (response.status >= 200 || response.status <= 204) {
            return response.json();
          }
          throw new Error("Failed to fetch cats");
        });
  } catch (e) {
    throw e;
  }
});

export const PostSlice = createSlice({
  name: "postSlice",
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    setCatsData: (state, action) => {
      state.cats = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(getCats.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getCats.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cats = action.payload;
        })
        .addCase(getCats.rejected, (state) => {
          state.isLoading = false;
        });
  },
});

export const { setCatsData } = PostSlice.actions;
export default PostSlice.reducer;