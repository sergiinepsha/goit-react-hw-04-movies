import React from "react";
import PropTypes from "prop-types";
import {
  CastListCSS,
  CastItemCSS,
  CastItemImgCSS,
  CastItemNameCSS,
  CastItemCharacterCSS,
} from "./styledCastList";

export default function CastList({ cast }) {
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
}

CastList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

// CastList.propTypes = {
//   cast: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       profile_path: PropTypes.string.isRequired,
//       character: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
