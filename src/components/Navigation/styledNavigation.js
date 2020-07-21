import styled from "styled-components";
import { Link } from "react-router-dom";

const NavListCSS = styled.ul`
  margin: auto 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: start;
  text-transform: uppercase;
  @media (max-width: 648px) {
    margin-bottom: 40px;
  }
`;

const NavItemCSS = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const NavItemLinkCSS = styled(Link)`
  display: block;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  color: rgb(255, 215, 0);
  &:hover,
  :focus {
    color: rgb(191, 250, 113);
  }
`;

export { NavListCSS, NavItemCSS, NavItemLinkCSS };
