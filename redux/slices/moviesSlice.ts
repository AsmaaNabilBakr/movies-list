import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MoviesState {
  movies: [];
  loading: boolean;
  error: any;
}

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: "",
};
export const fetchData = createAsyncThunk(
  "movies/fetchData",
  async (value: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${value}?api_key=${process.env.NEXT_PUBLIC_TMDB_PUBLIC_KEY}`
    );
    const data = await response.json();
    return await data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.payload;
    });
  },
});

export default moviesSlice.reducer;
