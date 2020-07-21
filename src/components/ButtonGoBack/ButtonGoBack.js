import React from "react";
import PropTypes from "prop-types";
import ButtonGoBackCSS from "./styledButtonGoBack";

const ButtonGoBack = ({ onClick }) => {
  return (
    <ButtonGoBackCSS type="button" onClick={onClick}>
      Go back
    </ButtonGoBackCSS>
  );
};

ButtonGoBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonGoBack;
