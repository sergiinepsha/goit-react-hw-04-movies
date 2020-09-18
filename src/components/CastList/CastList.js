import React from "react";
import PropTypes from "prop-types";

import {
  CastListCSS,
  CastItemCSS,
  CastItemImgCSS,
  CastItemNameCSS,
  CastItemCharacterCSS,
} from "./styledCastList";

const CastList = ({ cast }) => {
  return (
    <CastListCSS>
      {cast.map(({ id, name, profile_path, character }) => (
        <CastItemCSS key={id}>
          <CastItemImgCSS
            src={`http://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
          <CastItemNameCSS>{name}</CastItemNameCSS>
          <CastItemCharacterCSS>
            Character:
            <br />
            <span>{character}</span>
          </CastItemCharacterCSS>
        </CastItemCSS>
      ))}
    </CastListCSS>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CastList;
