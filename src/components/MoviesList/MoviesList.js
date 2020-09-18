import React from "react";
import PropTypes from "prop-types";

import {
  MoviesListCSS,
  MoviesItemCSS,
  MoviesItemLinkCSS,
  MoviesImgCSS,
  MoviesItemNameCSS,
} from "./styledMoviesList";

const MoviesList = ({ movies, location }) => (
  <MoviesListCSS>
    {movies.map(({ id, title, poster_path }) => (
      <MoviesItemCSS key={id}>
        <MoviesItemLinkCSS
          to={{
            pathname: `/movie/${id}`,
            state: { from: location },
          }}
        >
          <MoviesImgCSS
            src={`http://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <MoviesItemNameCSS>{title}</MoviesItemNameCSS>
        </MoviesItemLinkCSS>
      </MoviesItemCSS>
    ))}
  </MoviesListCSS>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
