"use client";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider, { Settings } from "react-slick";
import { TrendingMovies } from "../utilis";
import MovieDetailsCard from "./movieDetails";

interface Movies {
  movies: any[];
}
export const LazyLoad = (props: any) => {
  const settings = {
    dots: false,
    arrows: false,
    lazyLoad: true,
    infinite: false,
    autoPlay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    SwipeDirection: "right",
    initialSlide: 2,
  };
  const { lazyLoad } = props;
  const settingsWithLazyLoad: Settings = {
    ...settings,
    lazyLoad,
  };
  const [pageNumber, setPageNumber] = useState<number>(1);
  useEffect(() => {
    TrendingMovies(pageNumber);
    console.log;
  }, [pageNumber]);
  const movies = useSelector((state: any) => state.movies.movies);
  return (
    <Box display="block" sx={{ width: "100vw" }}>
      <Slider {...settingsWithLazyLoad}>
        {movies.map((item: any) => (
          <MovieDetailsCard key={item.id} movie={item} />
        ))}
      </Slider>
    </Box>
  );
};

export default LazyLoad;
