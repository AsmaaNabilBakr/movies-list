import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface MoviesState {
  movies: any[];
  allMovies: any[];
  loading: boolean;
  error: any;
  page: number;
}

const initialState: MoviesState = {
  movies: [],
  allMovies: [],
  loading: false,
  error: "",
  page: 1,
};
export const fetchData = createAsyncThunk(
  "movies/fetchData",
  async ({ value, page }: any) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${value}?api_key=${process.env.NEXT_PUBLIC_TMDB_PUBLIC_KEY}&page=${page}`
    );
    const data = await response.json();
    return await data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setTrending: (state, action) => {
      state.allMovies = [...state.allMovies, ...action.payload];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
      state.error = "";
      state.page = action.payload.page;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.payload;
    });
  },
});

export default moviesSlice.reducer;
export const { setTrending } = moviesSlice.actions;
