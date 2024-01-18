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
