import { fetchData, setTrending } from "@/redux/slices/moviesSlice";
import { store } from "../redux/store";

export const TrendingMovies = async (page: number) => {
  const movies = await store.dispatch(
    fetchData({ value: "trending/all/day", page: page })
  );
  const m = movies.payload.results;

  store.dispatch(setTrending(m));

  const all = store.getState().movies.allMovies;
  return all;
};

export interface User {
  displayName: string;
  photoURL: string;
  id: string;
}

export interface Movie {
  media_type: string;
  poster_path: string;
  id: number;
  original_name: string;
  original_title: string;
  overview: string;
}

export interface MoviesList {
  movies: Movie[];
}
