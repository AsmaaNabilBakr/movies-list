import { fetchData } from "@/redux/slices/moviesSlice";
import { store } from "../redux/store";

export const TrendingMovies = () => {
  store.dispatch(fetchData("trending/all/day"));
};
