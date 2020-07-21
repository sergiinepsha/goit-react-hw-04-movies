import React from "react";
import PropTypes from "prop-types";
import {
  WrapperMovieInfoCSS,
  MovieImgCSS,
  InfoBoxCSS,
  TitleH1CSS,
  TitleH2CSS,
  InfoTextCSS,
  GenresListCSS,
  GenresItemCSS,
} from "./styledMovieInfo";

const MovieInfo = ({ movie }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <WrapperMovieInfoCSS>
      <MovieImgCSS
        src={`http://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="300"
      />
      <InfoBoxCSS>
        <TitleH1CSS>
          {title} <span>({new Date(release_date).getFullYear()})</span>
        </TitleH1CSS>
        <InfoTextCSS>User Score: {vote_average * 10}%</InfoTextCSS>
        <TitleH2CSS>Overview</TitleH2CSS>
        <InfoTextCSS>{overview}</InfoTextCSS>
        {genres.length > 0 && (
          <>
            <TitleH2CSS>Genres</TitleH2CSS>
            <GenresListCSS>
              {genres.map(({ id, name }) => (
                <GenresItemCSS key={id}>{name}</GenresItemCSS>
              ))}
            </GenresListCSS>
          </>
        )}
      </InfoBoxCSS>
    </WrapperMovieInfoCSS>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieInfo;
