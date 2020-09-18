import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzlhYzg2NGE1YzY5NjAxYmI2MjM5MjJmZWYwNmMxMyIsInN1YiI6IjVmMTAwNjQ0NmRlYTNhMDAzMmVlYmQwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lMdheS0WbtQZdvbSrNacz4F9KqyHQcrKz8A4N828ffo";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// const API_KEY = "439ac864a5c69601bb623922fef06c13";

/*
 * Make a request the weekly trending movies
 */
const fetchMoviesTrendy = () => {
  const result = getAxios(`/trending/movie/week`);

  return result;
};

/*
 * Make a request for movies by searchQuery
 */
const fetchMoviesWithQuery = (searchQuery, page) => {
  const result = getAxios(
    `/search/movie?query=${searchQuery}&page=${page}&include_adult=false`
  );

  return result;
};

/*
 * Make a request the primary information about a movie
 */
const fetchMovieDetails = (movieId) => {
  const result = getAxios(`/movie/${movieId}`);

  return result;
};

/*
 * Make a request the cast and crew movie
 */
const fetchMovieCast = (movieId) => {
  const result = getAxios(`/movie/${movieId}/credits`);

  return result;
};

/*
 * Make a request the user reviews for a movie
 */
const fetchMovieReviews = (movieId) => {
  const result = getAxios(`/movie/${movieId}/reviews`);

  return result;
};

const getAxios = async (url) => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    throw error;
  }
};

export default {
  fetchMoviesTrendy,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
