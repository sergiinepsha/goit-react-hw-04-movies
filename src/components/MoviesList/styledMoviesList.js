import styled from "styled-components";
import { Link } from "react-router-dom";

const MoviesListCSS = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  padding: 0;
  list-style: none;
`;

const MoviesItemCSS = styled.li`
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(255, 215, 0, 0.5);
  transition: transform 200ms ease-in-out;
  &:hover,
  :focus {
    transform: scale(1.03);
    box-shadow: 0px 0px 30px 0px rgb(191, 250, 113);
  }
  &:hover p,
  :focus p {
    color: rgb(191, 250, 113);
  }
`;
const MoviesItemLinkCSS = styled(Link)`
  width: 100%;
  text-align: center;
  text-decoration: none;
`;

const MoviesImgCSS = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const MoviesItemNameCSS = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  padding: 10px 0;
  color: rgb(255, 215, 0);
`;

export {
  MoviesListCSS,
  MoviesItemCSS,
  MoviesItemLinkCSS,
  MoviesImgCSS,
  MoviesItemNameCSS,
};
