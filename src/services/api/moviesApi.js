import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = "439ac864a5c69601bb623922fef06c13";

/*
 * Make a request the weekly trending movies
 */
const fetchMoviesTrendy = () => {
  return getAxios(`${baseUrl}/trending/movie/week?api_key=${API_KEY}`);
};

/*
 * Make a request for movies by searchQuery
 */
const fetchMoviesWithQuery = (searchQuery, page) => {
  return getAxios(
    `${baseUrl}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}&include_adult=false`
  );
};

/*
 * Make a request the primary information about a movie
 */
const fetchMovieDetails = (movieId) => {
  return getAxios(`${baseUrl}/movie/${movieId}?api_key=${API_KEY}`);
};

/*
 * Make a request the cast and crew movie
 */
const fetchMovieCast = (movieId) => {
  return getAxios(`${baseUrl}/movie/${movieId}/credits?api_key=${API_KEY}`);
};

/*
 * Make a request the user reviews for a movie
 */
const fetchMovieReviews = (movieId) => {
  return getAxios(`${baseUrl}/movie/${movieId}/reviews?api_key=${API_KEY}`);
};

/*
 * Axios get Api-request by URL
 */
const getAxios = (url) => axios.get(url).then((response) => response.data);

export default {
  fetchMoviesTrendy,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
