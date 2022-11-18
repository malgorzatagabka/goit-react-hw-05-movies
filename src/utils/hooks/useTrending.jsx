import { getTrending } from "Api/Api";
import { useEffect, useState } from "react";

export const useTrending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(response => {
      setTrendingMovies([...response.results]);
    });
  }, []);

  return { trendingMovies };
};