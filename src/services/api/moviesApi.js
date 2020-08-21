import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
// const AUTH_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzlhYzg2NGE1YzY5NjAxYmI2MjM5MjJmZWYwNmMxMyIsInN1YiI6IjVmMTAwNjQ0NmRlYTNhMDAzMmVlYmQwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lMdheS0WbtQZdvbSrNacz4F9KqyHQcrKz8A4N828ffo";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
const API_KEY = "439ac864a5c69601bb623922fef06c13";

/*
 * Make a request the weekly trending movies
 */
const fetchMoviesTrendy = () => {
  return getAxios(`/trending/movie/week?api_key=${API_KEY}`);
};

/*
 * Make a request for movies by searchQuery
 */
const fetchMoviesWithQuery = (searchQuery, page) => {
  return getAxios(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}&include_adult=false`
  );
};

/*
 * Make a request the primary information about a movie
 */
const fetchMovieDetails = (movieId) => {
  return getAxios(`/movie/${movieId}?api_key=${API_KEY}`);
};

/*
 * Make a request the cast and crew movie
 */
const fetchMovieCast = (movieId) => {
  return getAxios(`/movie/${movieId}/credits?api_key=${API_KEY}`);
};

/*
 * Make a request the user reviews for a movie
 */
const fetchMovieReviews = (movieId) => {
  return getAxios(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
};

/*
 * Axios get Api-request by URL
 */
const getAxios = (url) =>
  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

export default {
  fetchMoviesTrendy,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
